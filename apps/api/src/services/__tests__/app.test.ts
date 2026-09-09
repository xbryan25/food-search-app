import { describe, it, expect, vi } from 'vitest';
import { ProductResource } from '../../resources/product.resource';

export async function processWebhookPayload(
  event: { type: string; data: { object: any } },
  prismaMock: any
) {
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const userId = session.metadata?.userId || 'demo-user-1';

    await prismaMock.user.update({
      where: { id: userId },
      data: { isSubscribed: true },
    });

    return { processed: true, userId };
  }

  return { processed: false };
}

export async function getUserSubscriptionStatus(
  userId: string,
  prismaMock: any
) {
  const user = await prismaMock.user.findUnique({
    where: { id: userId },
    select: { isSubscribed: true },
  });

  return user ? user.isSubscribed : false;
}

describe('ProductResource Data Gating', () => {
  const mockRawProduct = {
    code: '123456',
    product_name_en: 'Oat Milk',
    brands: 'Oatly',
    image_front_url: 'https://images.com/oat.jpg',
    nutriscore_grade: 'a',
    nutriments: {
      'energy-kcal_100g': 45,
      proteins_100g: 1.0,
      carbohydrates_100g: 6.7,
      fat_100g: 1.5,
    },
    ingredients_n: 5,
  };

  it('should conceal nutrition for unsubscribed free users', () => {
    const result = ProductResource(mockRawProduct, 'en', false);

    expect(result.id).toBe('123456');
    expect(result.name).toBe('Oat Milk');
    expect(result.nutrition).toBeNull();
  });

  it('should expose full nutrition details for Pro users', () => {
    const result = ProductResource(mockRawProduct, 'en', true);

    expect(result.nutrition).not.toBeNull();
    expect(result.nutrition?.calories).toBe(45);
    expect(result.nutrition?.protein).toBe(1.0);
  });
});

describe('Subscription Backend Logic', () => {
  // Mock db instance
  const mockPrisma: any = {
    user: {
      update: vi
        .fn()
        .mockResolvedValue({ id: 'demo-user-1', isSubscribed: true }),
      findUnique: vi
        .fn()
        .mockResolvedValue({ id: 'demo-user-1', isSubscribed: true }),
    },
  };

  it('should query user subscription state from database', async () => {
    const isSubscribed = await getUserSubscriptionStatus(
      'demo-user-1',
      mockPrisma
    );

    expect(isSubscribed).toBe(true);
    expect(mockPrisma.user.findUnique).toHaveBeenCalledWith({
      where: { id: 'demo-user-1' },
      select: { isSubscribed: true },
    });
  });

  it('should update user isSubscribed to true when checkout completes', async () => {
    const mockEvent = {
      type: 'checkout.session.completed',
      data: {
        object: {
          id: 'cs_test_123',
          metadata: { userId: 'demo-user-1' },
        },
      },
    };

    const res = await processWebhookPayload(mockEvent, mockPrisma);

    expect(res.processed).toBe(true);
    expect(mockPrisma.user.update).toHaveBeenCalledWith({
      where: { id: 'demo-user-1' },
      data: { isSubscribed: true },
    });
  });
});

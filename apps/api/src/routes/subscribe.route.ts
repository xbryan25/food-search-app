import { Router } from 'express';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-08-26.dahlia',
});

const router = Router();

router.post('/create-checkout-session', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [{ price: process.env.STRIPE_PRICE_ID, quantity: 1 }],
      metadata: { userId: 'demo-user-1' },
      success_url: 'http://localhost:3000/?success=true',
      cancel_url: 'http://localhost:3000/?canceled=true',
    });

    res.json({ checkoutUrl: session.url });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;

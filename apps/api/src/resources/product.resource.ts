export function ProductResource(
  product: any,
  lang: string = 'en',
  isSubscribed: boolean = false
) {
  const sanitizeString = (val: any) =>
    typeof val === 'string' && val.trim().length > 0 ? val.trim() : null;

  const localizedName =
    sanitizeString(product[`product_name_${lang}`]) ||
    sanitizeString(product.product_name_en) ||
    sanitizeString(product.product_name) ||
    'Unknown Product';

  const localizedIngredients =
    sanitizeString(product[`ingredients_text_${lang}`]) ||
    sanitizeString(product.ingredients_text_en) ||
    sanitizeString(product.ingredients_text) ||
    null;

  // Fallback image handling
  const imageUrl =
    sanitizeString(product.image_front_url) ||
    sanitizeString(product.image_front_small_url) ||
    null; // Or set to null if Next.js handles placeholder asset rendering

  return {
    id: product.code,
    name: localizedName,
    brand: sanitizeString(product.brands) || 'Unknown Brand',
    image: imageUrl,
    nutriscore: product.nutriscore_grade?.toUpperCase() || 'N/A',

    nutrition: isSubscribed
      ? {
          calories: product.nutriments?.['energy-kcal_100g'] ?? null,
          fat: product.nutriments?.['fat_100g'] ?? null,
          saturatedFat: product.nutriments?.['saturated-fat_100g'] ?? null,
          carbs: product.nutriments?.['carbohydrates_100g'] ?? null,
          sugars: product.nutriments?.['sugars_100g'] ?? null,
          protein: product.nutriments?.['proteins_100g'] ?? null,
          salt: product.nutriments?.['salt_100g'] ?? null,
          ingredients: localizedIngredients,
        }
      : null,
  };
}

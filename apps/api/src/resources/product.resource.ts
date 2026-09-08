export function ProductResource(
  product: any,
  lang: string = 'en',
  isSubscribed: boolean = false
) {
  const sanitizeString = (val: any) =>
    typeof val === 'string' && val.trim().length > 0 ? val.trim() : null;

  const formatCategoryTag = (tag: string | null): string | null => {
    if (!tag || typeof tag !== 'string') return null;

    const rawTag = tag.includes(':') ? tag.split(':')[1] : tag;
    if (!rawTag) return null;

    return rawTag
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Extract best matching category tag from array
  const extractCategory = (tags: any[], targetLang: string): string | null => {
    if (!Array.isArray(tags) || tags.length === 0) return null;

    const normalizedLang = targetLang.toLowerCase();

    const langTags = tags.filter(
      (t) => typeof t === 'string' && t.startsWith(`${normalizedLang}:`)
    );
    if (langTags.length > 0) {
      return formatCategoryTag(langTags[langTags.length - 1]);
    }

    // Fallback to English tags
    const enTags = tags.filter(
      (t) => typeof t === 'string' && t.startsWith('en:')
    );
    if (enTags.length > 0) {
      return formatCategoryTag(enTags[enTags.length - 1]);
    }

    // Fallback to the last available raw tag
    return formatCategoryTag(tags[tags.length - 1]);
  };

  const category = extractCategory(product.categories_tags, lang);

  const localizedName =
    sanitizeString(product[`product_name_${lang}`]) ||
    sanitizeString(product.product_name_en) ||
    sanitizeString(product.product_name) ||
    'Unknown Product';

  // Fallback image handling
  const imageUrl =
    sanitizeString(product.image_front_url) ||
    sanitizeString(product.image_front_small_url) ||
    null;

  return {
    id: product.code,
    name: localizedName,
    category: category,
    brand:
      sanitizeString(
        Array.isArray(product.brands)
          ? product.brands.join(', ')
          : product.brands
      ) || 'Unknown Brand',
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

          ingredients: {
            ingredient_count: product.ingredients_n,
            unknown_ingredient_count: product.unknown_ingredients_n,
          },
        }
      : null,
  };
}

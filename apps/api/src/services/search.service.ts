import axios from 'axios';
import { SearchRepository } from '../repositories/search.repository';

export class SearchService {
  private searchRepo = new SearchRepository();

  private client = axios.create({
    baseURL: 'https://search.openfoodfacts.org',
    headers: {
      'User-Agent': 'FoodSearchApp/1.0.0 (support@foodsearchapp.com)',
      Accept: 'application/json',
    },
    timeout: 5000,
  });

  async executeSearch(userId: string, query: string, lang: string) {
    const response = await this.client.get('/search', {
      params: {
        q: query,
        fields:
          'code,product_name,product_name_en,nutriments,image_front_small_url,brands,nutriscore_grade,ingredients_n,unknown_ingredients_n,categories_tags',
        langs: `${lang.toLowerCase()},en`,
        page_size: 20,
        page: 1,
      },
    });

    await this.searchRepo.logSearch(userId, query);

    return response.data.hits || [];
  }
}

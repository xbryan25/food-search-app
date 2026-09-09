import { Request, Response, NextFunction } from 'express';
import { SearchService } from '../services/search.service';
import { ProductResource } from '../resources/product.resource';
import { SearchQueryParams } from '../middlewares/validate';

export class SearchController {
  private searchService = new SearchService();

  index = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { query, lang } = req.query as unknown as SearchQueryParams;

      const products = await this.searchService.executeSearch(
        'demo-user-1',
        query,
        lang
      );

      const formattedProducts = products.map((product: unknown) =>
        ProductResource(product, lang, true)
      );

      return res.json({ status: 'success', products: formattedProducts });
    } catch (error) {
      next(error);
    }
  };
}

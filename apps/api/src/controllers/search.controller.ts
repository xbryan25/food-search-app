import { Request, Response, NextFunction } from "express";
import { SearchService } from "../services/search.service";
import { ProductResource } from "../resources/product.resource";
import { SearchQueryParams } from "../middlewares/validate";

export class SearchController {
  private searchService = new SearchService();

  hello = async (req: Request, res: Response) => {
    return res.json({ message: "Hello World!" });
  };

  index = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { query, lang } = req.query as unknown as SearchQueryParams;

      const products = await this.searchService.executeSearch("demo-user-1", query, lang);

      // Transform array through Resource
      const formattedProducts = products.map(ProductResource);

      return res.json({ status: "success", data: formattedProducts });

    } catch (error) {
      next(error);
    }
  };
}
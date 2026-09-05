import { Router } from "express";
import { SearchController } from "../controllers/search.controller";
import { validateSearch, searchSchema } from "../middlewares/validate";
import { isSubscribedPolicy } from "../middlewares/policy";

const router = Router();
const searchController = new SearchController();

router.get("/hello", searchController.hello);

router.get(
  "/search",
  isSubscribedPolicy,
  validateSearch(searchSchema),
  searchController.index
);

export default router;
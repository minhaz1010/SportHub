import express from "express";
import { ProductRouter } from "../module/product/product.route";

const router = express.Router();

const modularRouter = [
  {
    path: "/products",
    route: ProductRouter,
  },
];

modularRouter.forEach((route) => router.use(route.path, route.route));

export default router;

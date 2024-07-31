import express from "express";
import { ProductRouter } from "../module/product/product.route";


const router = express.Router();

const modularRoute = [
  {
    path:"/products",
    route:ProductRouter    
  }
]



modularRoute.forEach((route) => router.use(route.path, route.route));


export default router








import express from "express";
import validateRequest from "../../middleware/validateRequest";
import { ProductValidation } from "./product.validation";
import { ProductController } from "./product.controller";

const router = express.Router();

router.post(
  "/create-product",
  validateRequest(ProductValidation.createProductValidationSchema),
  ProductController.createProduct,
);
router.get("/category", ProductController.getAllCategory);

router.get("/:id", ProductController.getAProduct);

router.patch(
  "/:id",
  validateRequest(ProductValidation.updateProductValidationSchema),
  ProductController.updateAProduct,
);

router.delete("/:id", ProductController.deleteAProduct);

router.get("/", ProductController.getAllProduct);

router.post(
  "/create-category",
  validateRequest(ProductValidation.createCategory),
  ProductController.createCategory,
);

router.get("/category/:id", ProductController.getProductByCategory);

export const ProductRouter = router;

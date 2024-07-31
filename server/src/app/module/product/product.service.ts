import httpStatus from "http-status";
import AppError from "../../errors/appError";
import { ICategory, IProduct } from "./product.interface";
import { Category, Product } from "./product.model";

//  * create product
const createProductInDatabase = async (payload: IProduct) => {
  const { category } = payload;
  const categoryExist = await Category.findById(category);
  if (!categoryExist) {
    throw new AppError(httpStatus.NOT_FOUND, "No Such Category");
  }
  const result = await Product.create(payload);
  return result;
};

// * get a single product

const getASingleProductFromDatabase = async (id: string) => {
  const result = await Product.findById(id).populate({
    path: "category",
    select: "name -_id",
  });
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "No Product Found");
  }
  return result;
};

// * get all product
const getAllProductFromDatabase = async () => {
  const result = await Product.find().populate({
    path: "category",
    select: "name -_id",
  });
  if (!result.length) {
    throw new AppError(httpStatus.NOT_FOUND, "No Product Found");
  }
  return result;
};

// * update a single product

const updateASingleProduct = async (
  productId: string,
  payload: Partial<IProduct>,
) => {
  const result = await Product.findByIdAndUpdate(productId, payload, {
    new: true,
  });
  return result;
};

// * delete a product

const deleteASingleProduct = async (productId: string) => {
  await Product.findByIdAndDelete(productId);
  return null;
};

//  * create category
const createCategoryInDatabase = async (payload: ICategory) => {
  const result = await Category.create(payload);
  return result;
};

// * get all category
const getAllCategoryFromDatabase = async () => {
  const result = await Category.find();
  if (!result.length) {
    throw new AppError(httpStatus.NOT_FOUND, "No Category Found");
  }
  return result;
};

// * get all product by category

const getProductByCategory = async (categoryId: string) => {
  const result = await Product.find({ category: categoryId }).populate({
    path: "category",
    select: "name -_id",
  });
  if (!result.length) {
    throw new AppError(httpStatus.NOT_FOUND, "No Product Found");
  }
  return result;
};

export const ProductServices = {
  createProductInDatabase,
  getAllProductFromDatabase,
  createCategoryInDatabase,
  getAllCategoryFromDatabase,
  getProductByCategory,
  updateASingleProduct,
  deleteASingleProduct,
  getASingleProductFromDatabase,
};

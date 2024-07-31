import httpStatus from "http-status";
import catchAsyncErrors from "../../utils/catchAsyncError";
import sendResponse from "../../utils/sendResponse";
import { ProductServices } from "./product.service";

// & create product
const createProduct = catchAsyncErrors(async (req, res) => {
  const result = await ProductServices.createProductInDatabase(req.body);
  
  sendResponse(res, {
    success: true,
    message: "Product Created Successfully",
    statusCode: httpStatus.CREATED,
    result,
  });
});

// & get all  product
const getAllProduct = catchAsyncErrors(async(req,res) =>{
  const result  =  await ProductServices.getAllProductFromDatabase();
  sendResponse(res,{
    success:true,
    message:"Product retrieved successfully",
    statusCode:httpStatus.OK,
    result
  })
})

// & get a single product
const getAProduct = catchAsyncErrors(async(req,res) =>{
  const result  =  await ProductServices.getASingleProductFromDatabase(req.params.id);
  sendResponse(res,{
    success:true,
    message:"Product retrieved successfully",
    statusCode:httpStatus.OK,
    result
  })
})

// & update a product 
const updateAProduct = catchAsyncErrors(async(req,res) =>{
  const result  =  await ProductServices.updateASingleProduct(req.params.id,req.body);
  sendResponse(res,{
    success:true,
    message:"Product updated successfully",
    statusCode:httpStatus.OK,
    result
  })
})


// & delete a product

const deleteAProduct = catchAsyncErrors(async(req,res) =>{
  const result  =  await ProductServices.deleteASingleProduct(req.params.id);
  sendResponse(res,{
    success:true,
    message:"Product deleted successfully",
    statusCode:httpStatus.OK,
    result:null
  })
})


// & create category
const createCategory = catchAsyncErrors(async(req,res) =>{
   const result = await ProductServices.createCategoryInDatabase(req.body);
   sendResponse(res,{
    success:true,
    message:"Category Created Successfully",
    statusCode:httpStatus.CREATED,
    result
  })


})

// & get all category
const getAllCategory = catchAsyncErrors(async(req,res) =>{
   const result = await ProductServices.getAllCategoryFromDatabase();
   sendResponse(res,{
    success:true,
    message:"Category retreived Successfully",
    statusCode:httpStatus.OK,
    result
  })
})

// & get all products by category

const getProductByCategory = catchAsyncErrors(async(req,res)=>{
  const result = await ProductServices.getProductByCategory(req.params.id as string);
  sendResponse(res,{
    success:true,
    message:"All Category related product retreived Successfully",
    statusCode:httpStatus.OK,
    result
  })
})




export const ProductController = {
  createProduct,
  getAllProduct,
  createCategory,
  getAllCategory,
  getProductByCategory,
  updateAProduct,
  deleteAProduct,
  getAProduct
};

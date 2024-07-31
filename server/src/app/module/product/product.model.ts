import { Schema, model } from "mongoose";
import { ICategory, IProduct } from "./product.interface";

const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    image:{type:String,required:true},
    price: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
    inStock: { type: Number, required: true, default: 0 },
    rating: { type: Number, required: true, default: 0 },
  },
  {
    timestamps: true,
  },
);

export const Product = model<IProduct>("Product", productSchema);

const categorySchema = new Schema<ICategory>({
  name:{
    type:String,
    required:true
  }
})

export const Category  = model<ICategory> ('Category',categorySchema)


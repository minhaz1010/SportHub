import { Types } from "mongoose";

export interface IProduct {
  name: string;
  image: string;
  brand: string;
  price: number;
  description: string;
  category: Types.ObjectId;
  inStock: number;
  rating: number;
}

export interface ICategory {
  name: string;
}

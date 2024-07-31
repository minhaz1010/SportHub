import { z } from "zod";

const createProductValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    brand: z.string(),
    image:z.string(),
    price: z.number().min(1),
    description: z.string(),
    category: z.string(),
    inStock: z.number().min(1),
    rating: z.number().min(1).max(5),
  }),
});

const updateProductValidationSchema = z.object({
  body:z.object({
    name: z.string().optional(),
    brand: z.string().optional(),
    price: z.number().min(1).optional(),
    description: z.string().optional(),
    category: z.string().optional(),
    inStock: z.number().min(1).optional(),
    rating: z.number().min(1).max(5).optional(),
  })
})

export const createCategory  =z.object({
  body:z.object({
    name:z.string()
  })
})

export const ProductValidation = {
  createProductValidationSchema,
  updateProductValidationSchema,
  createCategory
};

import apiClient from "./client";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  createdAt?: Date;
};

export const productsApi = {
  getAll: () => apiClient<Product[]>("/products"),
  getById: (id: number) => apiClient<Product>(`/products/${id}`),
};

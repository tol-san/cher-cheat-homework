
import type { Product, ProductListResponse } from "@/libs/types";

import { fetchJson } from "@/utils/apiClient";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

export async function getAllProducts(): Promise<ProductListResponse> {
  return fetchJson<ProductListResponse>(`${API_BASE}/products`);
}

export async function getProductById(id: string): Promise<Product> {
  return fetchJson<Product>(`${API_BASE}/products/${encodeURIComponent(id)}`);
}

const productService = { getAllProducts, getProductById };

export default productService;

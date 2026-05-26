import type { Product } from "@/libs/types";
import ProductCard from "@/components/ProductCard";
import { getAllProducts } from "@/services/productService";

export default async function Page() {
  const data = await getAllProducts();
  const products: Product[] = data?.content ?? [];

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-medium text-zinc-500">Products</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950">
          All products
        </h1>
      </div>

      <section className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.uuid} product={p} />
        ))}
      </section>
    </div>
  );
}

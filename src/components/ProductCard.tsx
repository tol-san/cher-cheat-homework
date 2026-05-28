import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/libs/types";

export default function ProductCard({ product }: { product: Product }) {
  const price = product.priceOut ?? 0;
  const discounted = Boolean(product.discount && product.discount > 0);
  const finalPrice = discounted ? price * (1 - product.discount / 100) : price;

  const thumbnail =
    product.thumbnail || product.images?.[0] || "/placeholder.png";

  return (
    <Link
      href={`/dashboard/products/${product.uuid}`}
      className="group block"
      aria-label={`View ${product.name}`}
    >
      <article className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md focus-within:translate-y-0 focus:outline-none group-focus:ring-2 group-focus:ring-zinc-300">
        <div className="relative h-40 w-full overflow-hidden rounded-lg bg-zinc-50">
          <Image
            src={thumbnail}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="mt-3 flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3 className="truncate text-sm font-semibold text-zinc-900 group-hover:text-zinc-950">
              {product.name}
            </h3>
            <p className="mt-1 text-xs text-zinc-500">{product.brand?.name}</p>
          </div>

          <div className="text-right">
            {discounted && (
              <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700">
                -{product.discount}%
              </span>
            )}

            <div className="mt-2 text-sm font-semibold text-zinc-900">
              ${finalPrice.toFixed(2)}
            </div>
            {discounted && (
              <div className="text-xs text-zinc-500 line-through">
                ${price.toFixed(2)}
              </div>
            )}
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between text-xs text-zinc-500">
          <span>{product.availability ? "In stock" : "Out of stock"}</span>
          <span>{product.stockQuantity ?? 0} pcs</span>
        </div>
      </article>
    </Link>
  );
}

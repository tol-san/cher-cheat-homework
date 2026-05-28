import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/libs/types";
import { getProductById } from "@/services/productService";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const product: Product = await getProductById(id);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/dashboard/products" className="text-sm text-zinc-500">
            ← Back to products
          </Link>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950">
            {product.name}
          </h1>
          <p className="text-sm text-zinc-500">{product.brand?.name}</p>
        </div>

        <div className="text-right">
          <div className="text-xl font-semibold text-zinc-900">
            ${(product.priceOut ?? 0).toFixed(2)}
          </div>
          {(product.discount ?? 0) > 0 && (
            <div className="text-sm text-red-600">-{product.discount}%</div>
          )}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-1">
          <div className="rounded-2xl border border-zinc-200 bg-white p-4">
            <div className="relative h-72 w-full overflow-hidden rounded-lg bg-zinc-50">
              <Image
                src={
                  product.thumbnail || product.images?.[0] || "/placeholder.png"
                }
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="mt-4 text-sm text-zinc-600">
              {product.availability ? "In stock" : "Out of stock"}
            </div>
            <div className="text-xs text-zinc-500">
              {product.stockQuantity ?? 0} pcs available
            </div>
          </div>
        </div>

        <div className="md:col-span-2 space-y-4">
          <section className="rounded-2xl border border-zinc-200 bg-white p-6">
            <h2 className="text-lg font-medium text-zinc-900">Description</h2>
            <p className="mt-2 text-sm text-zinc-600 whitespace-pre-line">
              {product.description}
            </p>
          </section>

          <section className="rounded-2xl border border-zinc-200 bg-white p-6">
            <h2 className="text-lg font-medium text-zinc-900">
              Specifications
            </h2>
            <dl className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-zinc-600">
              <div>
                <dt className="font-medium text-zinc-800">Processor</dt>
                <dd>{product.computerSpec?.processor ?? "—"}</dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-800">RAM</dt>
                <dd>{product.computerSpec?.ram ?? "—"}</dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-800">Storage</dt>
                <dd>{product.computerSpec?.storage ?? "—"}</dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-800">GPU</dt>
                <dd>{product.computerSpec?.gpu ?? "—"}</dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-800">OS</dt>
                <dd>{product.computerSpec?.os ?? "—"}</dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-800">Screen</dt>
                <dd>{product.computerSpec?.screenSize ?? "—"}</dd>
              </div>
            </dl>
          </section>
        </div>
      </div>
    </div>
  );
}

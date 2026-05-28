export default function Loading() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-medium text-zinc-500">Product</p>
        <h1 className="mt-2 h-8 w-1/3 animate-pulse rounded bg-zinc-200" />
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-1">
          <div className="rounded-2xl border border-zinc-200 bg-white p-4">
            <div className="h-72 w-full animate-pulse rounded-lg bg-zinc-100" />
            <div className="mt-4 h-4 w-24 animate-pulse rounded bg-zinc-100" />
            <div className="mt-2 h-3 w-16 animate-pulse rounded bg-zinc-100" />
          </div>
        </div>

        <div className="md:col-span-2 space-y-4">
          <section className="rounded-2xl border border-zinc-200 bg-white p-6">
            <div className="h-4 w-48 animate-pulse rounded bg-zinc-100" />
            <div className="mt-4 space-y-2">
              <div className="h-3 w-full animate-pulse rounded bg-zinc-100" />
              <div className="h-3 w-full animate-pulse rounded bg-zinc-100" />
              <div className="h-3 w-3/4 animate-pulse rounded bg-zinc-100" />
            </div>
          </section>

          <section className="rounded-2xl border border-zinc-200 bg-white p-6">
            <div className="h-4 w-36 animate-pulse rounded bg-zinc-100" />
            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="h-3 w-full animate-pulse rounded bg-zinc-100" />
              <div className="h-3 w-full animate-pulse rounded bg-zinc-100" />
              <div className="h-3 w-full animate-pulse rounded bg-zinc-100" />
              <div className="h-3 w-full animate-pulse rounded bg-zinc-100" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-6">
      <div className="w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-8 text-center shadow-sm">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-600">
          !
        </div>
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-950">
          Couldn’t load products
        </h1>
        <p className="mt-3 text-sm leading-6 text-zinc-600">
          There was a problem loading the products. You can try again or come
          back later.
        </p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            onClick={reset}
            className="inline-flex h-11 items-center justify-center rounded-xl bg-zinc-950 px-5 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

export default function Error({
  error,
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
          Something went wrong
        </h1>
        <p className="mt-3 text-sm leading-6 text-zinc-600">
          We could not load this dashboard page. Please try again.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-6 inline-flex h-11 items-center justify-center rounded-xl bg-zinc-950 px-5 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
        >
          Try again
        </button>
        {error.digest ? (
          <p className="mt-4 text-xs text-zinc-400">
            Error code: {error.digest}
          </p>
        ) : null}
      </div>
    </div>
  );
}

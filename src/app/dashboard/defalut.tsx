import Link from "next/link";

export default function Defalut() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-zinc-900">Dashboard</h1>
      <p className="mt-2 text-sm text-zinc-600">
        Welcome to your dashboard overview.
      </p>

      <div className="mt-4 flex gap-4">
        <Link
          href="/dashboard/products"
          className="text-sm text-blue-600 hover:underline"
        >
          View products
        </Link>
        <Link
          href="/dashboard/settings"
          className="text-sm text-zinc-600 hover:underline"
        >
          Settings
        </Link>
      </div>
    </div>
  );
}

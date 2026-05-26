"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Package, Settings } from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname() || "";

  const isActive = (href: string) => {
    if (href === "/dashboard")
      return pathname === "/dashboard" || pathname === "/dashboard/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <aside className="flex h-screen w-64 flex-col border-r border-zinc-200 bg-white px-4 py-6 text-sm text-zinc-700">
      <div className="mb-8 px-2 text-lg font-semibold tracking-tight text-zinc-950">
        Menu
      </div>

      <nav className="flex flex-1 flex-col gap-2">
        <Link
          href="/dashboard"
          className={`flex items-center gap-3 rounded-xl px-3 py-3 font-medium transition-colors ${
            isActive("/dashboard")
              ? "bg-zinc-950 text-white hover:bg-zinc-800"
              : "hover:bg-zinc-100 hover:text-zinc-950"
          }`}
        >
          <LayoutDashboard className="h-4 w-4" />
          <span>Dashboard</span>
        </Link>

        <Link
          href="/dashboard/products"
          className={`flex items-center gap-3 rounded-xl px-3 py-3 font-medium transition-colors ${
            isActive("/dashboard/products")
              ? "bg-zinc-950 text-white hover:bg-zinc-800"
              : "hover:bg-zinc-100 hover:text-zinc-950"
          }`}
        >
          <Package className="h-4 w-4" />
          <span>Products</span>
        </Link>

        <div className="mt-auto pt-4">
          <Link
            href="/dashboard/settings"
            className={`flex items-center gap-3 rounded-xl px-3 py-3 font-medium transition-colors ${
              isActive("/dashboard/settings")
                ? "bg-zinc-950 text-white hover:bg-zinc-800"
                : "hover:bg-zinc-100 hover:text-zinc-950"
            }`}
          >
            <Settings className="h-4 w-4" />
            <span>Settings</span>
          </Link>
        </div>
      </nav>
    </aside>
  );
}

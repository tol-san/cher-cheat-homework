import Sidebar from "@/components/Sidebar";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from '@/components/Error'

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen bg-zinc-50">
      <Sidebar />
      <main className="flex-1 p-6 md:p-8">
        {children}
      </main>
    </div>
  );
}

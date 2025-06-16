import AdminNav from "@/components/admin/AdminNav"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-900">
      <AdminNav />
      <div className="pl-64"> {/* Offset for fixed sidebar width */}
        <main className="min-h-screen">
          {children}
        </main>
      </div>
    </div>
  )
}

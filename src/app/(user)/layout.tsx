import Header from "@/components/Header"

export default function UserLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main>
        {children}
      </main>
    </div>
  )
}

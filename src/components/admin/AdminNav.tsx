"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

interface NavItem {
  title: string
  href: string
  icon: string
}

export default function AdminNav() {
  const pathname = usePathname()

  const navItems: NavItem[] = [
    {
      title: "Dashboard",
      href: "/admin/dashboard",
      icon: "📊"
    },
    {
      title: "Servers",
      href: "/admin/servers",
      icon: "🖥️"
    },
    {
      title: "Users",
      href: "/admin/users",
      icon: "👥"
    },
    {
      title: "Ads",
      href: "/admin/ads",
      icon: "📢"
    },
    {
      title: "Rewards",
      href: "/admin/rewards",
      icon: "🎁"
    },
    {
      title: "Reports",
      href: "/admin/reports",
      icon: "📈"
    },
    {
      title: "Settings",
      href: "/admin/settings",
      icon: "⚙️"
    }
  ]

  return (
    <nav className="fixed left-0 top-0 h-screen w-64 bg-gray-800/50 border-r border-gray-700 p-4">
      <div className="flex flex-col h-full">
        <div className="mb-8">
          <h1 className="text-xl font-bold text-white">vPan Admin</h1>
          <p className="text-sm text-gray-400">Management Panel</p>
        </div>

        <div className="space-y-2">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button
                variant={pathname === item.href ? "secondary" : "ghost"}
                className="w-full justify-start"
              >
                <span className="mr-2" role="img" aria-label={item.title}>
                  {item.icon}
                </span>
                {item.title}
              </Button>
            </Link>
          ))}
        </div>

        <div className="mt-auto pt-4 border-t border-gray-700">
          <Link href="/">
            <Button variant="ghost" className="w-full justify-start text-red-400 hover:text-red-300">
              <span className="mr-2" role="img" aria-label="Exit">
                🚪
              </span>
              Exit Admin Panel
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

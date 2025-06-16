"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Card } from "@/components/ui/card"

const games = [
  {
    id: "lucky-wheel",
    name: "Lucky Wheel",
    description: "Spin the wheel to win points",
    path: "/games/lucky-wheel"
  },
  {
    id: "scratch-card",
    name: "Scratch Card",
    description: "Scratch and win instant rewards",
    path: "/games/scratch-card"
  },
  {
    id: "tic-tac-toe",
    name: "Tic Tac Toe",
    description: "Play against AI to earn points",
    path: "/games/tic-tac-toe"
  }
]

export default function GamesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Games Sidebar */}
        <aside className="lg:w-64 flex-shrink-0">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white">Games</h2>
            {games.map((game) => (
              <Link key={game.id} href={game.path}>
                <Card 
                  className={`p-4 bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 transition-colors cursor-pointer ${
                    pathname === game.path ? 'border-blue-500' : ''
                  }`}
                >
                  <h3 className="font-semibold mb-1">{game.name}</h3>
                  <p className="text-sm text-gray-400">{game.description}</p>
                </Card>
              </Link>
            ))}

            {/* Points Info */}
            <Card className="p-4 bg-gray-800/50 border-gray-700 mt-6">
              <h3 className="font-semibold mb-2">Daily Limits</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Lucky Wheel: 3 spins</li>
                <li>Scratch Card: 3 cards</li>
                <li>Tic Tac Toe: 5 games</li>
              </ul>
            </Card>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  )
}

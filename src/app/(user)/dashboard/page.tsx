"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function Dashboard() {
  const [isConnected, setIsConnected] = useState(false)
  const [points, setPoints] = useState(1000)
  const [selectedServer, setSelectedServer] = useState("US Server 1")

  return (
    <div className="container mx-auto px-4 py-8">
      {/* VPN Connection Status */}
      <Card className="p-6 bg-gray-800/50 border-gray-700 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold mb-2">VPN Status</h2>
            <div className="space-y-1">
              <p className={`text-lg ${isConnected ? 'text-green-400' : 'text-red-400'}`}>
                {isConnected ? 'Connected' : 'Disconnected'}
              </p>
              {isConnected && (
                <p className="text-sm text-gray-400">Connected to: {selectedServer}</p>
              )}
            </div>
          </div>
          <Button
            className={isConnected ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'}
            onClick={() => setIsConnected(!isConnected)}
            size="lg"
          >
            {isConnected ? 'Disconnect' : 'Connect Now'}
          </Button>
        </div>
      </Card>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6 bg-gray-800/50 border-gray-700">
          <h3 className="text-lg font-semibold text-gray-400">Your Points</h3>
          <p className="text-3xl font-bold text-yellow-400 mt-2">{points}</p>
          <Link href="/rewards" className="text-sm text-blue-400 hover:underline mt-2 inline-block">
            View Rewards →
          </Link>
        </Card>

        <Card className="p-6 bg-gray-800/50 border-gray-700">
          <h3 className="text-lg font-semibold text-gray-400">Connection Time</h3>
          <p className="text-3xl font-bold text-green-400 mt-2">2.5h</p>
          <p className="text-sm text-gray-400 mt-2">Today's Usage</p>
        </Card>

        <Card className="p-6 bg-gray-800/50 border-gray-700">
          <h3 className="text-lg font-semibold text-gray-400">Data Used</h3>
          <p className="text-3xl font-bold text-blue-400 mt-2">1.2 GB</p>
          <p className="text-sm text-gray-400 mt-2">Today's Usage</p>
        </Card>
      </div>

      {/* Quick Actions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Games & Rewards */}
        <Card className="p-6 bg-gray-800/50 border-gray-700">
          <h3 className="text-xl font-bold mb-4">Games & Rewards</h3>
          <div className="space-y-3">
            <Link href="/games/lucky-wheel">
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Lucky Wheel
              </Button>
            </Link>
            <Link href="/games/scratch-card">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Scratch Card
              </Button>
            </Link>
            <Link href="/games/tic-tac-toe">
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Tic Tac Toe
              </Button>
            </Link>
          </div>
        </Card>

        {/* Server Selection */}
        <Card className="p-6 bg-gray-800/50 border-gray-700">
          <h3 className="text-xl font-bold mb-4">VPN Servers</h3>
          <div className="space-y-3">
            <Button className="w-full">Free Servers</Button>
            <Button className="w-full bg-yellow-600 hover:bg-yellow-700">
              Premium Servers
              <span className="text-xs bg-yellow-500 px-2 py-0.5 rounded ml-2">PRO</span>
            </Button>
            <Link href="/premium">
              <Button variant="outline" className="w-full">
                Upgrade to Premium
              </Button>
            </Link>
          </div>
        </Card>

        {/* Quick Links */}
        <Card className="p-6 bg-gray-800/50 border-gray-700">
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <div className="space-y-3">
            <Link href="/profile">
              <Button variant="outline" className="w-full">
                Account Settings
              </Button>
            </Link>
            <Link href="/leaderboard">
              <Button variant="outline" className="w-full">
                Leaderboard
              </Button>
            </Link>
            <Link href="/support">
              <Button variant="outline" className="w-full">
                Get Support
              </Button>
            </Link>
          </div>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="mt-8 p-6 bg-gray-800/50 border-gray-700">
        <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {[
            { action: "Connected to US Server 1", time: "2 hours ago" },
            { action: "Won 50 points from Lucky Wheel", time: "5 hours ago" },
            { action: "Completed daily check-in", time: "8 hours ago" }
          ].map((activity, index) => (
            <div 
              key={index}
              className="flex justify-between items-center p-3 bg-gray-700/30 rounded-lg"
            >
              <span>{activity.action}</span>
              <span className="text-sm text-gray-400">{activity.time}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

interface LeaderboardEntry {
  rank: number
  username: string
  points: number
  premium: boolean
  change?: number
}

export default function Leaderboard() {
  const [timeframe, setTimeframe] = useState<"daily" | "weekly" | "allTime">("daily")

  const leaderboardData: Record<string, LeaderboardEntry[]> = {
    daily: [
      { rank: 1, username: "ProGamer123", points: 2500, premium: true, change: 2 },
      { rank: 2, username: "VPNMaster", points: 2200, premium: true, change: -1 },
      { rank: 3, username: "PointsKing", points: 2000, premium: false, change: 5 },
      { rank: 4, username: "SpeedRunner", points: 1800, premium: true, change: -2 },
      { rank: 5, username: "NetworkPro", points: 1600, premium: false, change: 0 },
      { rank: 6, username: "SecureUser", points: 1400, premium: true, change: 3 },
      { rank: 7, username: "DataNinja", points: 1200, premium: false, change: -1 },
      { rank: 8, username: "CyberShield", points: 1000, premium: true, change: 4 },
      { rank: 9, username: "SafeSurfer", points: 800, premium: false, change: -3 },
      { rank: 10, username: "PrivacyGuard", points: 600, premium: true, change: 1 }
    ],
    weekly: [
      { rank: 1, username: "VPNMaster", points: 15000, premium: true },
      { rank: 2, username: "ProGamer123", points: 14500, premium: true },
      { rank: 3, username: "SpeedRunner", points: 13000, premium: true },
      { rank: 4, username: "PointsKing", points: 12500, premium: false },
      { rank: 5, username: "CyberShield", points: 11000, premium: true },
      { rank: 6, username: "NetworkPro", points: 10500, premium: false },
      { rank: 7, username: "SecureUser", points: 9500, premium: true },
      { rank: 8, username: "DataNinja", points: 9000, premium: false },
      { rank: 9, username: "SafeSurfer", points: 8500, premium: false },
      { rank: 10, username: "PrivacyGuard", points: 8000, premium: true }
    ],
    allTime: [
      { rank: 1, username: "VPNMaster", points: 150000, premium: true },
      { rank: 2, username: "ProGamer123", points: 145000, premium: true },
      { rank: 3, username: "CyberShield", points: 140000, premium: true },
      { rank: 4, username: "SpeedRunner", points: 135000, premium: true },
      { rank: 5, username: "PointsKing", points: 130000, premium: false },
      { rank: 6, username: "NetworkPro", points: 125000, premium: false },
      { rank: 7, username: "SecureUser", points: 120000, premium: true },
      { rank: 8, username: "DataNinja", points: 115000, premium: false },
      { rank: 9, username: "SafeSurfer", points: 110000, premium: false },
      { rank: 10, username: "PrivacyGuard", points: 105000, premium: true }
    ]
  }

  const formatPoints = (points: number): string => {
    if (points >= 1000000) {
      return `${(points / 1000000).toFixed(1)}M`
    } else if (points >= 1000) {
      return `${(points / 1000).toFixed(1)}K`
    }
    return points.toString()
  }

  const getRankColor = (rank: number): string => {
    switch (rank) {
      case 1:
        return "bg-yellow-500"
      case 2:
        return "bg-gray-400"
      case 3:
        return "bg-amber-600"
      default:
        return "bg-gray-700"
    }
  }

  const getChangeColor = (change?: number): string => {
    if (!change) return "text-gray-400"
    return change > 0 ? "text-green-400" : change < 0 ? "text-red-400" : "text-gray-400"
  }

  const getChangeIcon = (change?: number) => {
    if (!change) return "−"
    return change > 0 ? "↑" : change < 0 ? "↓" : "−"
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Leaderboard</h1>
        <p className="text-gray-400 text-lg">
          Compete with other users and earn rewards
        </p>
      </div>

      <Card className="max-w-4xl mx-auto bg-gray-800/50 border-gray-700">
        <Tabs 
          value={timeframe} 
          onValueChange={(value: string) => setTimeframe(value as "daily" | "weekly" | "allTime")}
          className="space-y-6"
        >
          <TabsList className="bg-gray-800/50 border-gray-700">
            <TabsTrigger value="daily">Daily</TabsTrigger>
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="allTime">All Time</TabsTrigger>
          </TabsList>

          {Object.entries(leaderboardData).map(([period, data]) => (
            <TabsContent key={period} value={period}>
              <div className="space-y-4 p-4">
                {data.map((entry) => (
                  <div
                    key={entry.rank}
                    className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg"
                  >
                    {/* Rank & User Info */}
                    <div className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded-full ${getRankColor(entry.rank)} flex items-center justify-center font-bold`}>
                        {entry.rank}
                      </div>
                      <Avatar className="w-10 h-10">
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-lg font-bold">
                          {entry.username[0].toUpperCase()}
                        </div>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">{entry.username}</span>
                          {entry.premium && (
                            <Badge className="bg-yellow-600">PRO</Badge>
                          )}
                        </div>
                        {period === "daily" && entry.change !== undefined && (
                          <span className={`text-sm ${getChangeColor(entry.change)}`}>
                            {getChangeIcon(entry.change)} {Math.abs(entry.change)} positions
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Points */}
                    <div className="text-right">
                      <div className="font-bold text-lg">
                        {formatPoints(entry.points)}
                      </div>
                      <div className="text-sm text-gray-400">points</div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </Card>

      {/* Rewards Info */}
      <Card className="max-w-4xl mx-auto mt-8 p-6 bg-gray-800/50 border-gray-700">
        <h2 className="text-xl font-bold mb-4">Leaderboard Rewards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-700/30 rounded-lg text-center">
            <div className="text-yellow-500 text-2xl font-bold mb-2">1st Place</div>
            <p className="text-lg font-semibold">1000 Points</p>
            <p className="text-sm text-gray-400">+ Premium Week Pass</p>
          </div>
          <div className="p-4 bg-gray-700/30 rounded-lg text-center">
            <div className="text-gray-400 text-2xl font-bold mb-2">2nd Place</div>
            <p className="text-lg font-semibold">500 Points</p>
            <p className="text-sm text-gray-400">+ 3 Lucky Wheel Spins</p>
          </div>
          <div className="p-4 bg-gray-700/30 rounded-lg text-center">
            <div className="text-amber-600 text-2xl font-bold mb-2">3rd Place</div>
            <p className="text-lg font-semibold">250 Points</p>
            <p className="text-sm text-gray-400">+ 2 Scratch Cards</p>
          </div>
        </div>
      </Card>
    </div>
  )
}

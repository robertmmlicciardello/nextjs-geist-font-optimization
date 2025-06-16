"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ServerStats {
  id: string
  name: string
  traffic: number
  users: number
  load: number
  uptime: number
}

interface RevenueData {
  date: string
  amount: number
  subscriptions: number
  newUsers: number
}

export default function Reports() {
  const [timeframe, setTimeframe] = useState("7d")
  const [serverFilter, setServerFilter] = useState("all")

  const [serverStats] = useState<ServerStats[]>([
    {
      id: "1",
      name: "US Server 1",
      traffic: 1250,
      users: 145,
      load: 65,
      uptime: 99.9
    },
    {
      id: "2",
      name: "SG Server 1",
      traffic: 980,
      users: 89,
      load: 45,
      uptime: 99.8
    },
    {
      id: "3",
      name: "UK Server 1",
      traffic: 750,
      users: 67,
      load: 35,
      uptime: 100
    }
  ])

  const [revenueData] = useState<RevenueData[]>([
    { date: "2024-01-15", amount: 1250, subscriptions: 25, newUsers: 45 },
    { date: "2024-01-14", amount: 980, subscriptions: 18, newUsers: 32 },
    { date: "2024-01-13", amount: 1100, subscriptions: 22, newUsers: 38 },
    { date: "2024-01-12", amount: 890, subscriptions: 15, newUsers: 28 },
    { date: "2024-01-11", amount: 1300, subscriptions: 28, newUsers: 52 }
  ])

  const totalRevenue = revenueData.reduce((sum, day) => sum + day.amount, 0)
  const totalSubscriptions = revenueData.reduce((sum, day) => sum + day.subscriptions, 0)
  const totalNewUsers = revenueData.reduce((sum, day) => sum + day.newUsers, 0)
  const averageRevenue = totalRevenue / revenueData.length

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">Analytics & Reports</h1>
        <div className="flex items-center gap-4">
          <Select value={timeframe} onValueChange={setTimeframe}>
            <SelectTrigger className="w-32 bg-gray-800/50 border-gray-700">
              <SelectValue placeholder="Time Range" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700">
              <SelectItem value="24h">Last 24h</SelectItem>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Download Report
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="bg-gray-800/50 border-gray-700">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="servers">Server Stats</TabsTrigger>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
          <TabsTrigger value="users">User Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="p-6 bg-gray-800/50 border-gray-700">
              <h3 className="text-lg font-semibold text-gray-400">Total Revenue</h3>
              <p className="text-3xl font-bold text-green-400 mt-2">
                ${totalRevenue.toFixed(2)}
              </p>
              <p className="text-sm text-gray-400 mt-1">
                Avg. ${averageRevenue.toFixed(2)}/day
              </p>
            </Card>

            <Card className="p-6 bg-gray-800/50 border-gray-700">
              <h3 className="text-lg font-semibold text-gray-400">New Subscriptions</h3>
              <p className="text-3xl font-bold text-blue-400 mt-2">
                {totalSubscriptions}
              </p>
              <p className="text-sm text-gray-400 mt-1">
                Avg. {(totalSubscriptions / revenueData.length).toFixed(1)}/day
              </p>
            </Card>

            <Card className="p-6 bg-gray-800/50 border-gray-700">
              <h3 className="text-lg font-semibold text-gray-400">New Users</h3>
              <p className="text-3xl font-bold text-yellow-400 mt-2">
                {totalNewUsers}
              </p>
              <p className="text-sm text-gray-400 mt-1">
                Avg. {(totalNewUsers / revenueData.length).toFixed(1)}/day
              </p>
            </Card>

            <Card className="p-6 bg-gray-800/50 border-gray-700">
              <h3 className="text-lg font-semibold text-gray-400">Server Load</h3>
              <p className="text-3xl font-bold text-purple-400 mt-2">
                {Math.round(serverStats.reduce((sum, server) => sum + server.load, 0) / serverStats.length)}%
              </p>
              <p className="text-sm text-gray-400 mt-1">
                Average across all servers
              </p>
            </Card>
          </div>

          {/* Revenue Chart Placeholder */}
          <Card className="p-6 bg-gray-800/50 border-gray-700 mb-6">
            <h3 className="text-xl font-bold mb-4">Revenue Trend</h3>
            <div className="h-64 flex items-center justify-center border border-gray-700 rounded">
              <p className="text-gray-400">Revenue chart will be displayed here</p>
            </div>
          </Card>

          {/* User Activity Chart Placeholder */}
          <Card className="p-6 bg-gray-800/50 border-gray-700">
            <h3 className="text-xl font-bold mb-4">User Activity</h3>
            <div className="h-64 flex items-center justify-center border border-gray-700 rounded">
              <p className="text-gray-400">User activity chart will be displayed here</p>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="servers">
          <div className="mb-6 flex justify-end">
            <Select value={serverFilter} onValueChange={setServerFilter}>
              <SelectTrigger className="w-48 bg-gray-800/50 border-gray-700">
                <SelectValue placeholder="Filter Servers" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                <SelectItem value="all">All Servers</SelectItem>
                <SelectItem value="us">US Servers</SelectItem>
                <SelectItem value="eu">EU Servers</SelectItem>
                <SelectItem value="asia">Asia Servers</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-6">
            {serverStats.map((server) => (
              <Card 
                key={server.id}
                className="p-6 bg-gray-800/50 border-gray-700"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{server.name}</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-400">Traffic</p>
                        <p className="text-lg font-semibold">{server.traffic} GB</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Active Users</p>
                        <p className="text-lg font-semibold">{server.users}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Server Load</p>
                        <p className="text-lg font-semibold">{server.load}%</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Uptime</p>
                        <p className="text-lg font-semibold">{server.uptime}%</p>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline">View Details</Button>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="revenue">
          <Card className="p-6 bg-gray-800/50 border-gray-700 mb-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-3 px-4">Date</th>
                    <th className="text-left py-3 px-4">Revenue</th>
                    <th className="text-left py-3 px-4">Subscriptions</th>
                    <th className="text-left py-3 px-4">New Users</th>
                  </tr>
                </thead>
                <tbody>
                  {revenueData.map((day) => (
                    <tr key={day.date} className="border-b border-gray-700">
                      <td className="py-3 px-4">{day.date}</td>
                      <td className="py-3 px-4">${day.amount.toFixed(2)}</td>
                      <td className="py-3 px-4">{day.subscriptions}</td>
                      <td className="py-3 px-4">{day.newUsers}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="users">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Active Users Chart Placeholder */}
            <Card className="p-6 bg-gray-800/50 border-gray-700">
              <h3 className="text-xl font-bold mb-4">Active Users</h3>
              <div className="h-64 flex items-center justify-center border border-gray-700 rounded">
                <p className="text-gray-400">Active users chart will be displayed here</p>
              </div>
            </Card>

            {/* User Growth Chart Placeholder */}
            <Card className="p-6 bg-gray-800/50 border-gray-700">
              <h3 className="text-xl font-bold mb-4">User Growth</h3>
              <div className="h-64 flex items-center justify-center border border-gray-700 rounded">
                <p className="text-gray-400">User growth chart will be displayed here</p>
              </div>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

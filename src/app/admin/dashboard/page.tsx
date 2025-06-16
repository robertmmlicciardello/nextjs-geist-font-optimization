"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function AdminDashboard() {
  const [stats] = useState({
    totalUsers: 1250,
    activeConnections: 456,
    premiumUsers: 289,
    totalServers: 25,
    pendingPayouts: 12,
    dailyPoints: 25000
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">Dashboard Overview</h1>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card className="p-6 bg-gray-800/50 border-gray-700">
          <h3 className="text-lg font-semibold text-gray-400">Total Users</h3>
          <p className="text-3xl font-bold text-white mt-2">{stats.totalUsers}</p>
        </Card>

        <Card className="p-6 bg-gray-800/50 border-gray-700">
          <h3 className="text-lg font-semibold text-gray-400">Active Connections</h3>
          <p className="text-3xl font-bold text-green-400 mt-2">{stats.activeConnections}</p>
        </Card>

        <Card className="p-6 bg-gray-800/50 border-gray-700">
          <h3 className="text-lg font-semibold text-gray-400">Premium Users</h3>
          <p className="text-3xl font-bold text-yellow-400 mt-2">{stats.premiumUsers}</p>
        </Card>

        <Card className="p-6 bg-gray-800/50 border-gray-700">
          <h3 className="text-lg font-semibold text-gray-400">Total Servers</h3>
          <p className="text-3xl font-bold text-white mt-2">{stats.totalServers}</p>
        </Card>

        <Card className="p-6 bg-gray-800/50 border-gray-700">
          <h3 className="text-lg font-semibold text-gray-400">Pending Payouts</h3>
          <p className="text-3xl font-bold text-orange-400 mt-2">{stats.pendingPayouts}</p>
        </Card>

        <Card className="p-6 bg-gray-800/50 border-gray-700">
          <h3 className="text-lg font-semibold text-gray-400">Daily Points Awarded</h3>
          <p className="text-3xl font-bold text-blue-400 mt-2">{stats.dailyPoints}</p>
        </Card>
      </div>

      {/* Quick Actions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Server Management */}
        <Card className="p-6 bg-gray-800/50 border-gray-700">
          <h3 className="text-xl font-bold text-white mb-4">Server Management</h3>
          <div className="space-y-3">
            <Link href="/admin/servers">
              <Button className="w-full">View All Servers</Button>
            </Link>
            <Link href="/admin/servers/add">
              <Button className="w-full bg-green-600 hover:bg-green-700">Add New Server</Button>
            </Link>
            <Link href="/admin/servers/status">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Server Status</Button>
            </Link>
          </div>
        </Card>

        {/* User Management */}
        <Card className="p-6 bg-gray-800/50 border-gray-700">
          <h3 className="text-xl font-bold text-white mb-4">User Management</h3>
          <div className="space-y-3">
            <Link href="/admin/users">
              <Button className="w-full">View All Users</Button>
            </Link>
            <Link href="/admin/users/premium">
              <Button className="w-full bg-yellow-600 hover:bg-yellow-700">Premium Users</Button>
            </Link>
            <Link href="/admin/users/blocked">
              <Button className="w-full bg-red-600 hover:bg-red-700">Blocked Users</Button>
            </Link>
          </div>
        </Card>

        {/* Payment Management */}
        <Card className="p-6 bg-gray-800/50 border-gray-700">
          <h3 className="text-xl font-bold text-white mb-4">Payment Management</h3>
          <div className="space-y-3">
            <Link href="/admin/payments">
              <Button className="w-full">Transaction History</Button>
            </Link>
            <Link href="/admin/payments/pending">
              <Button className="w-full bg-orange-600 hover:bg-orange-700">Pending Payouts</Button>
            </Link>
            <Link href="/admin/payments/plans">
              <Button className="w-full">Manage Plans</Button>
            </Link>
          </div>
        </Card>

        {/* Reward Management */}
        <Card className="p-6 bg-gray-800/50 border-gray-700">
          <h3 className="text-xl font-bold text-white mb-4">Reward Management</h3>
          <div className="space-y-3">
            <Link href="/admin/rewards/lucky-wheel">
              <Button className="w-full">Lucky Wheel Config</Button>
            </Link>
            <Link href="/admin/rewards/scratch-cards">
              <Button className="w-full">Scratch Cards</Button>
            </Link>
            <Link href="/admin/rewards/points">
              <Button className="w-full">Points Settings</Button>
            </Link>
          </div>
        </Card>

        {/* Ad Management */}
        <Card className="p-6 bg-gray-800/50 border-gray-700">
          <h3 className="text-xl font-bold text-white mb-4">Ad Management</h3>
          <div className="space-y-3">
            <Link href="/admin/ads">
              <Button className="w-full">AdMob Settings</Button>
            </Link>
            <Link href="/admin/ads/placements">
              <Button className="w-full">Ad Placements</Button>
            </Link>
            <Link href="/admin/ads/revenue">
              <Button className="w-full">Ad Revenue</Button>
            </Link>
          </div>
        </Card>

        {/* System Settings */}
        <Card className="p-6 bg-gray-800/50 border-gray-700">
          <h3 className="text-xl font-bold text-white mb-4">System Settings</h3>
          <div className="space-y-3">
            <Link href="/admin/settings">
              <Button className="w-full">General Settings</Button>
            </Link>
            <Link href="/admin/settings/security">
              <Button className="w-full">Security Settings</Button>
            </Link>
            <Link href="/admin/settings/backup">
              <Button className="w-full">Backup & Restore</Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  )
}

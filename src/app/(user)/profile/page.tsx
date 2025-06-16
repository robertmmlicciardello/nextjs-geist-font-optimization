"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Alert } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar } from "@/components/ui/avatar"

interface RewardHistory {
  id: string
  type: string
  points: number
  date: string
}

interface ConnectionHistory {
  id: string
  server: string
  duration: string
  date: string
  dataUsed: string
}

export default function Profile() {
  const [user] = useState({
    username: "JohnDoe",
    email: "john@example.com",
    joinDate: "2024-01-01",
    totalPoints: 2500,
    premiumUntil: "2024-12-31",
    referralCode: "JOHN123",
    totalConnections: 156,
    totalDataUsed: "45.2 GB"
  })

  const [rewardHistory] = useState<RewardHistory[]>([
    {
      id: "1",
      type: "Lucky Wheel",
      points: 100,
      date: "2024-01-15"
    },
    {
      id: "2",
      type: "Scratch Card",
      points: 50,
      date: "2024-01-14"
    },
    {
      id: "3",
      type: "Daily Check-in",
      points: 20,
      date: "2024-01-13"
    }
  ])

  const [connectionHistory] = useState<ConnectionHistory[]>([
    {
      id: "1",
      server: "US Server 1",
      duration: "2h 30m",
      date: "2024-01-15",
      dataUsed: "1.2 GB"
    },
    {
      id: "2",
      server: "SG Server 1",
      duration: "1h 45m",
      date: "2024-01-14",
      dataUsed: "850 MB"
    }
  ])

  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  const handleCopyReferral = () => {
    navigator.clipboard.writeText(user.referralCode)
      .then(() => setSuccess("Referral code copied to clipboard!"))
      .catch(() => setError("Failed to copy referral code"))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Profile Header */}
      <Card className="p-6 bg-gray-800/50 border-gray-700 mb-8">
        <div className="flex items-center gap-6">
          <Avatar className="w-24 h-24">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-2xl font-bold">
              {user.username[0].toUpperCase()}
            </div>
          </Avatar>
          <div>
            <h1 className="text-3xl font-bold mb-2">{user.username}</h1>
            <p className="text-gray-400">Member since {user.joinDate}</p>
            <div className="flex items-center gap-4 mt-2">
              <span className="text-yellow-400 font-semibold">
                {user.totalPoints} Points
              </span>
              <span className="text-green-400 font-semibold">
                Premium until {user.premiumUntil}
              </span>
            </div>
          </div>
        </div>
      </Card>

      {success && (
        <Alert className="mb-6 bg-green-600">
          {success}
        </Alert>
      )}

      {error && (
        <Alert variant="destructive" className="mb-6">
          {error}
        </Alert>
      )}

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="bg-gray-800/50 border-gray-700">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="rewards">Rewards</TabsTrigger>
          <TabsTrigger value="connections">Connections</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 bg-gray-800/50 border-gray-700">
              <h3 className="text-xl font-semibold mb-4">Account Details</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400">Email</p>
                  <p className="font-medium">{user.email}</p>
                </div>
                <div>
                  <p className="text-gray-400">Referral Code</p>
                  <div className="flex items-center gap-2">
                    <p className="font-medium">{user.referralCode}</p>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={handleCopyReferral}
                    >
                      Copy
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gray-800/50 border-gray-700">
              <h3 className="text-xl font-semibold mb-4">Usage Statistics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-400">Total Connections</p>
                  <p className="text-2xl font-bold">{user.totalConnections}</p>
                </div>
                <div>
                  <p className="text-gray-400">Total Data Used</p>
                  <p className="text-2xl font-bold">{user.totalDataUsed}</p>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="rewards">
          <Card className="p-6 bg-gray-800/50 border-gray-700">
            <h3 className="text-xl font-semibold mb-4">Reward History</h3>
            <div className="space-y-4">
              {rewardHistory.map(reward => (
                <div 
                  key={reward.id}
                  className="flex justify-between items-center p-4 bg-gray-700/30 rounded-lg"
                >
                  <div>
                    <p className="font-medium">{reward.type}</p>
                    <p className="text-sm text-gray-400">{reward.date}</p>
                  </div>
                  <p className="text-yellow-400 font-semibold">+{reward.points} points</p>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="connections">
          <Card className="p-6 bg-gray-800/50 border-gray-700">
            <h3 className="text-xl font-semibold mb-4">Connection History</h3>
            <div className="space-y-4">
              {connectionHistory.map(connection => (
                <div 
                  key={connection.id}
                  className="flex justify-between items-center p-4 bg-gray-700/30 rounded-lg"
                >
                  <div>
                    <p className="font-medium">{connection.server}</p>
                    <p className="text-sm text-gray-400">{connection.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{connection.duration}</p>
                    <p className="text-sm text-gray-400">{connection.dataUsed}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card className="p-6 bg-gray-800/50 border-gray-700">
            <h3 className="text-xl font-semibold mb-6">Account Settings</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-2">Change Password</h4>
                <Button variant="outline">Update Password</Button>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Two-Factor Authentication</h4>
                <Button variant="outline">Enable 2FA</Button>
              </div>

              <div>
                <h4 className="font-medium mb-2">Email Notifications</h4>
                <Button variant="outline">Manage Notifications</Button>
              </div>

              <div>
                <h4 className="font-medium mb-2">Delete Account</h4>
                <Button variant="destructive">Delete Account</Button>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

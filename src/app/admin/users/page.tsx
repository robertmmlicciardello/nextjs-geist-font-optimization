"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Alert } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

interface User {
  id: string
  username: string
  email: string
  status: 'active' | 'blocked'
  premium: boolean
  points: number
  joinDate: string
  lastActive: string
}

export default function UserManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const [users] = useState<User[]>([
    {
      id: "1",
      username: "JohnDoe",
      email: "john@example.com",
      status: "active",
      premium: true,
      points: 1500,
      joinDate: "2024-01-01",
      lastActive: "2024-01-15"
    },
    {
      id: "2",
      username: "JaneSmith",
      email: "jane@example.com",
      status: "active",
      premium: false,
      points: 750,
      joinDate: "2024-01-05",
      lastActive: "2024-01-14"
    },
    {
      id: "3",
      username: "BlockedUser",
      email: "blocked@example.com",
      status: "blocked",
      premium: false,
      points: 250,
      joinDate: "2024-01-10",
      lastActive: "2024-01-12"
    }
  ])

  const handleToggleStatus = async (userId: string) => {
    try {
      // TODO: Implement actual user status toggle
      setSuccess("User status updated successfully")
    } catch (err) {
      setError("Failed to update user status")
    }
  }

  const handleResetPoints = async (userId: string) => {
    try {
      // TODO: Implement actual points reset
      setSuccess("User points reset successfully")
    } catch (err) {
      setError("Failed to reset user points")
    }
  }

  const filteredUsers = users.filter(user => 
    user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">User Management</h1>
          <div className="w-64">
            <Input
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-gray-800/50 border-gray-700"
            />
          </div>
        </div>

        {error && (
          <Alert variant="destructive" className="mb-6">
            {error}
          </Alert>
        )}

        {success && (
          <Alert className="mb-6 bg-green-600">
            {success}
          </Alert>
        )}

        <div className="grid gap-6">
          {filteredUsers.map((user) => (
            <Card 
              key={user.id}
              className="p-6 bg-gray-800/50 border-gray-700"
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold">{user.username}</h3>
                    <Badge 
                      className={user.status === 'active' 
                        ? 'bg-green-600' 
                        : 'bg-red-600'
                      }
                    >
                      {user.status}
                    </Badge>
                    {user.premium && (
                      <Badge className="bg-yellow-600">
                        Premium
                      </Badge>
                    )}
                  </div>
                  <p className="text-gray-400 mb-1">{user.email}</p>
                  <div className="text-sm text-gray-400">
                    Joined: {user.joinDate} • Last Active: {user.lastActive}
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xl font-bold text-yellow-400 mb-2">
                    {user.points} points
                  </div>
                  <div className="space-x-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-gray-800 border-gray-700">
                        <DialogHeader>
                          <DialogTitle>User Details</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium mb-1">Account Information</h4>
                            <p className="text-sm text-gray-400">ID: {user.id}</p>
                            <p className="text-sm text-gray-400">Username: {user.username}</p>
                            <p className="text-sm text-gray-400">Email: {user.email}</p>
                          </div>
                          <div>
                            <h4 className="font-medium mb-1">Status</h4>
                            <p className="text-sm text-gray-400">Account: {user.status}</p>
                            <p className="text-sm text-gray-400">Premium: {user.premium ? 'Yes' : 'No'}</p>
                          </div>
                          <div>
                            <h4 className="font-medium mb-1">Activity</h4>
                            <p className="text-sm text-gray-400">Join Date: {user.joinDate}</p>
                            <p className="text-sm text-gray-400">Last Active: {user.lastActive}</p>
                            <p className="text-sm text-gray-400">Points: {user.points}</p>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>

                    <Button
                      onClick={() => handleToggleStatus(user.id)}
                      variant="destructive"
                      size="sm"
                    >
                      {user.status === 'active' ? 'Block' : 'Unblock'}
                    </Button>

                    <Button
                      onClick={() => handleResetPoints(user.id)}
                      variant="outline"
                      size="sm"
                    >
                      Reset Points
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredUsers.length === 0 && (
          <div className="text-center text-gray-400 py-8">
            No users found matching your search.
          </div>
        )}
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Alert } from "@/components/ui/alert"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Server {
  id: string
  name: string
  host: string
  type: 'free' | 'premium'
  status: 'active' | 'inactive'
  location: string
  connections: number
}

export default function ServerManagement() {
  const [servers, setServers] = useState<Server[]>([
    {
      id: "1",
      name: "US Server 1",
      host: "us1.vpanvpn.com",
      type: "premium",
      status: "active",
      location: "United States",
      connections: 145
    },
    {
      id: "2",
      name: "SG Server 1",
      host: "sg1.vpanvpn.com",
      type: "free",
      status: "active",
      location: "Singapore",
      connections: 89
    },
    // Add more mock servers as needed
  ])

  const [newServer, setNewServer] = useState({
    name: "",
    host: "",
    type: "free",
    location: ""
  })

  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const handleAddServer = async () => {
    try {
      // Validation
      if (!newServer.name || !newServer.host || !newServer.location) {
        setError("All fields are required")
        return
      }

      // TODO: Implement actual server addition logic
      const mockNewServer: Server = {
        id: String(servers.length + 1),
        ...newServer,
        status: 'active',
        connections: 0,
        type: newServer.type as 'free' | 'premium'
      }

      setServers([...servers, mockNewServer])
      setSuccess("Server added successfully")
      setNewServer({ name: "", host: "", type: "free", location: "" })
    } catch (err) {
      setError("Failed to add server")
    }
  }

  const handleDeleteServer = (id: string) => {
    try {
      setServers(servers.filter(server => server.id !== id))
      setSuccess("Server deleted successfully")
    } catch (err) {
      setError("Failed to delete server")
    }
  }

  const handleToggleStatus = (id: string) => {
    setServers(servers.map(server => {
      if (server.id === id) {
        return {
          ...server,
          status: server.status === 'active' ? 'inactive' : 'active'
        }
      }
      return server
    }))
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800/50 border-b border-gray-700 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Server Management</h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-green-600 hover:bg-green-700">Add New Server</Button>
            </DialogTrigger>
            <DialogContent className="bg-gray-800 border-gray-700">
              <DialogHeader>
                <DialogTitle>Add New Server</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 pt-4">
                <Input
                  placeholder="Server Name"
                  value={newServer.name}
                  onChange={(e) => setNewServer({ ...newServer, name: e.target.value })}
                  className="bg-gray-700/50 border-gray-600"
                />
                <Input
                  placeholder="Host Address"
                  value={newServer.host}
                  onChange={(e) => setNewServer({ ...newServer, host: e.target.value })}
                  className="bg-gray-700/50 border-gray-600"
                />
                <Input
                  placeholder="Location"
                  value={newServer.location}
                  onChange={(e) => setNewServer({ ...newServer, location: e.target.value })}
                  className="bg-gray-700/50 border-gray-600"
                />
                <Select
                  value={newServer.type}
                  onValueChange={(value) => setNewServer({ ...newServer, type: value })}
                >
                  <SelectTrigger className="bg-gray-700/50 border-gray-600">
                    <SelectValue placeholder="Server Type" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="free">Free</SelectItem>
                    <SelectItem value="premium">Premium</SelectItem>
                  </SelectContent>
                </Select>
                <Button 
                  onClick={handleAddServer}
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  Add Server
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {error && (
          <Alert variant="destructive" className="mb-4">
            {error}
          </Alert>
        )}
        {success && (
          <Alert className="mb-4 bg-green-600">
            {success}
          </Alert>
        )}

        <div className="grid gap-6">
          {servers.map((server) => (
            <Card key={server.id} className="p-6 bg-gray-800/50 border-gray-700">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2">{server.name}</h3>
                  <p className="text-gray-400">Host: {server.host}</p>
                  <p className="text-gray-400">Location: {server.location}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      server.type === 'premium' ? 'bg-yellow-600 text-yellow-100' : 'bg-blue-600 text-blue-100'
                    }`}>
                      {server.type}
                    </span>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      server.status === 'active' ? 'bg-green-600 text-green-100' : 'bg-red-600 text-red-100'
                    }`}>
                      {server.status}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Button
                    onClick={() => handleToggleStatus(server.id)}
                    variant="outline"
                    className="border-gray-600"
                  >
                    Toggle Status
                  </Button>
                  <Button
                    onClick={() => handleDeleteServer(server.id)}
                    variant="destructive"
                  >
                    Delete
                  </Button>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <p className="text-sm text-gray-400">
                  Active Connections: <span className="font-semibold text-white">{server.connections}</span>
                </p>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}

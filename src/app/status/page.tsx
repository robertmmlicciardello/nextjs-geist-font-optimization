"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ServiceStatus {
  name: string
  status: "operational" | "degraded" | "outage" | "maintenance"
  uptime: number
  latency: number
  lastIncident?: string
}

interface IncidentUpdate {
  timestamp: string
  status: "investigating" | "identified" | "monitoring" | "resolved"
  message: string
}

export default function Status() {
  const [activeTab, setActiveTab] = useState("current")

  const services: ServiceStatus[] = [
    {
      name: "VPN Servers",
      status: "operational",
      uptime: 99.99,
      latency: 45
    },
    {
      name: "Authentication System",
      status: "operational",
      uptime: 99.95,
      latency: 120
    },
    {
      name: "User Dashboard",
      status: "operational",
      uptime: 99.98,
      latency: 89
    },
    {
      name: "Payment System",
      status: "degraded",
      uptime: 99.50,
      latency: 350,
      lastIncident: "Processing delays"
    },
    {
      name: "Gaming Servers",
      status: "maintenance",
      uptime: 98.00,
      latency: 150,
      lastIncident: "Scheduled maintenance"
    },
    {
      name: "API Gateway",
      status: "operational",
      uptime: 99.97,
      latency: 65
    }
  ]

  const recentIncidents: IncidentUpdate[] = [
    {
      timestamp: "2024-01-20 15:30 UTC",
      status: "resolved",
      message: "Payment processing delays have been resolved. All systems operating normally."
    },
    {
      timestamp: "2024-01-20 14:45 UTC",
      status: "monitoring",
      message: "Implemented fix for payment processing delays. Monitoring the situation."
    },
    {
      timestamp: "2024-01-20 14:15 UTC",
      status: "identified",
      message: "Root cause identified as database connection issue. Working on fix."
    },
    {
      timestamp: "2024-01-20 14:00 UTC",
      status: "investigating",
      message: "Investigating reports of payment processing delays."
    }
  ]

  const getStatusColor = (status: ServiceStatus["status"]) => {
    switch (status) {
      case "operational":
        return "bg-green-500"
      case "degraded":
        return "bg-yellow-500"
      case "outage":
        return "bg-red-500"
      case "maintenance":
        return "bg-blue-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusText = (status: ServiceStatus["status"]) => {
    switch (status) {
      case "operational":
        return "Operational"
      case "degraded":
        return "Degraded Performance"
      case "outage":
        return "Major Outage"
      case "maintenance":
        return "Maintenance"
      default:
        return "Unknown"
    }
  }

  const getUpdateStatusColor = (status: IncidentUpdate["status"]) => {
    switch (status) {
      case "investigating":
        return "text-yellow-500"
      case "identified":
        return "text-blue-500"
      case "monitoring":
        return "text-purple-500"
      case "resolved":
        return "text-green-500"
      default:
        return "text-gray-500"
    }
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-white">vPan</span>
              <span className="text-sm font-medium text-blue-400">VPN</span>
            </Link>
            <nav className="flex items-center space-x-4">
              <Link href="/support" className="text-gray-400 hover:text-white">
                Support
              </Link>
              <Link href="/dashboard" className="text-gray-400 hover:text-white">
                Dashboard
              </Link>
            </nav>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* System Status Overview */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">System Status</h1>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <p className="text-xl text-gray-400">
              All Systems Operational
            </p>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="bg-gray-800/50 border-gray-700">
            <TabsTrigger value="current">Current Status</TabsTrigger>
            <TabsTrigger value="incidents">Incident History</TabsTrigger>
            <TabsTrigger value="uptime">Uptime</TabsTrigger>
          </TabsList>

          <TabsContent value="current">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service) => (
                <Card 
                  key={service.name}
                  className="p-6 bg-gray-800/50 border-gray-700"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-1">
                        {service.name}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full ${getStatusColor(service.status)}`}></div>
                        <span className="text-sm text-gray-400">
                          {getStatusText(service.status)}
                        </span>
                      </div>
                    </div>
                    <Badge variant={service.status === "operational" ? "default" : "destructive"}>
                      {service.uptime}% uptime
                    </Badge>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Latency</span>
                      <span className={service.latency > 200 ? "text-yellow-400" : "text-green-400"}>
                        {service.latency}ms
                      </span>
                    </div>
                    {service.lastIncident && (
                      <div className="text-sm text-gray-400">
                        Last incident: {service.lastIncident}
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="incidents">
            <Card className="p-6 bg-gray-800/50 border-gray-700">
              <h3 className="text-xl font-semibold mb-6">Recent Incidents</h3>
              <div className="space-y-6">
                {recentIncidents.map((update, index) => (
                  <div 
                    key={index}
                    className="relative pl-6 pb-6 last:pb-0 border-l border-gray-700 last:border-0"
                  >
                    <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-gray-700"></div>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-3">
                        <span className="text-sm text-gray-400">
                          {update.timestamp}
                        </span>
                        <Badge className={getUpdateStatusColor(update.status)}>
                          {update.status}
                        </Badge>
                      </div>
                      <p className="text-gray-300">
                        {update.message}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="uptime">
            <Card className="p-6 bg-gray-800/50 border-gray-700">
              <h3 className="text-xl font-semibold mb-6">30-Day Uptime</h3>
              <div className="space-y-6">
                {services.map((service) => (
                  <div key={service.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300">{service.name}</span>
                      <span className="text-gray-400">{service.uptime}%</span>
                    </div>
                    <Progress value={service.uptime} className="h-2" />
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Subscribe to Updates */}
        <Card className="mt-8 p-6 bg-gray-800/50 border-gray-700">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">
              Subscribe to Status Updates
            </h3>
            <p className="text-gray-400 mb-6">
              Get notified when our system status changes
            </p>
            <div className="flex max-w-md mx-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
              <Button>
                Subscribe
              </Button>
            </div>
          </div>
        </Card>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>
            View detailed system metrics on our{" "}
            <Link 
              href="https://status.vpanvpn.com"
              className="text-blue-400 hover:text-blue-300"
            >
              public status page
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Alert } from "@/components/ui/alert"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface SystemSettings {
  maintenance: boolean
  registrationEnabled: boolean
  maxUsersPerServer: number
  pointsPerDollar: number
  minWithdrawal: number
  maxDailyRewards: number
  apiEndpoint: string
  backupFrequency: number
}

export default function Settings() {
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const [settings, setSettings] = useState<SystemSettings>({
    maintenance: false,
    registrationEnabled: true,
    maxUsersPerServer: 100,
    pointsPerDollar: 100,
    minWithdrawal: 10,
    maxDailyRewards: 500,
    apiEndpoint: "https://api.vpanvpn.com",
    backupFrequency: 24
  })

  const handleSaveSettings = async () => {
    try {
      // TODO: Implement actual settings update
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSuccess("Settings updated successfully")
    } catch (err) {
      setError("Failed to update settings")
    }
  }

  const handleBackup = async () => {
    try {
      // TODO: Implement actual backup
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSuccess("Backup created successfully")
    } catch (err) {
      setError("Failed to create backup")
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">System Settings</h1>

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

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="bg-gray-800/50 border-gray-700">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="points">Points & Rewards</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="backup">Backup</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <Card className="p-6 bg-gray-800/50 border-gray-700">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">Maintenance Mode</h3>
                  <p className="text-sm text-gray-400">
                    Enable to put the site in maintenance mode
                  </p>
                </div>
                <Switch
                  checked={settings.maintenance}
                  onCheckedChange={(checked) => 
                    setSettings(prev => ({ ...prev, maintenance: checked }))
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">User Registration</h3>
                  <p className="text-sm text-gray-400">
                    Allow new user registrations
                  </p>
                </div>
                <Switch
                  checked={settings.registrationEnabled}
                  onCheckedChange={(checked) => 
                    setSettings(prev => ({ ...prev, registrationEnabled: checked }))
                  }
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">API Endpoint</h3>
                <Input
                  value={settings.apiEndpoint}
                  onChange={(e) => 
                    setSettings(prev => ({ ...prev, apiEndpoint: e.target.value }))
                  }
                  className="bg-gray-700/50 border-gray-600"
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Max Users Per Server</h3>
                <Input
                  type="number"
                  value={settings.maxUsersPerServer}
                  onChange={(e) => 
                    setSettings(prev => ({ ...prev, maxUsersPerServer: parseInt(e.target.value) }))
                  }
                  className="bg-gray-700/50 border-gray-600"
                />
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="points">
          <Card className="p-6 bg-gray-800/50 border-gray-700">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Points Per Dollar</h3>
                <Input
                  type="number"
                  value={settings.pointsPerDollar}
                  onChange={(e) => 
                    setSettings(prev => ({ ...prev, pointsPerDollar: parseInt(e.target.value) }))
                  }
                  className="bg-gray-700/50 border-gray-600"
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Minimum Withdrawal (USD)</h3>
                <Input
                  type="number"
                  value={settings.minWithdrawal}
                  onChange={(e) => 
                    setSettings(prev => ({ ...prev, minWithdrawal: parseInt(e.target.value) }))
                  }
                  className="bg-gray-700/50 border-gray-600"
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Max Daily Rewards</h3>
                <Input
                  type="number"
                  value={settings.maxDailyRewards}
                  onChange={(e) => 
                    setSettings(prev => ({ ...prev, maxDailyRewards: parseInt(e.target.value) }))
                  }
                  className="bg-gray-700/50 border-gray-600"
                />
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card className="p-6 bg-gray-800/50 border-gray-700">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Security Settings</h3>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full">
                    Reset Admin Password
                  </Button>
                  <Button variant="outline" className="w-full">
                    Configure 2FA
                  </Button>
                  <Button variant="outline" className="w-full">
                    View Security Logs
                  </Button>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-700">
                <h3 className="text-lg font-semibold mb-2">API Access</h3>
                <Button variant="destructive" className="w-full">
                  Revoke All API Keys
                </Button>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="backup">
          <Card className="p-6 bg-gray-800/50 border-gray-700">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Backup Frequency (hours)</h3>
                <Input
                  type="number"
                  value={settings.backupFrequency}
                  onChange={(e) => 
                    setSettings(prev => ({ ...prev, backupFrequency: parseInt(e.target.value) }))
                  }
                  className="bg-gray-700/50 border-gray-600"
                />
              </div>

              <div className="pt-4 border-t border-gray-700">
                <h3 className="text-lg font-semibold mb-4">Manual Backup</h3>
                <div className="space-y-4">
                  <Button onClick={handleBackup} className="w-full bg-blue-600 hover:bg-blue-700">
                    Create Backup Now
                  </Button>
                  <Button variant="outline" className="w-full">
                    Download Latest Backup
                  </Button>
                  <Button variant="outline" className="w-full">
                    View Backup History
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-8 flex justify-end">
        <Button 
          onClick={handleSaveSettings}
          className="bg-green-600 hover:bg-green-700"
        >
          Save All Settings
        </Button>
      </div>
    </div>
  )
}

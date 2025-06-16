"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Alert } from "@/components/ui/alert"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface AdUnit {
  id: string
  name: string
  adUnitId: string
  type: 'banner' | 'interstitial' | 'rewarded'
  status: boolean
  impressions: number
  revenue: number
}

export default function AdsManagement() {
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const [admobConfig, setAdmobConfig] = useState({
    appId: "ca-app-pub-xxxxxxxxxxxxxxxx~yyyyyyyyyy",
    apiKey: "YOUR_ADMOB_API_KEY",
    testMode: true
  })

  const [adUnits, setAdUnits] = useState<AdUnit[]>([
    {
      id: "1",
      name: "Main Banner",
      adUnitId: "ca-app-pub-xxx/banner1",
      type: "banner",
      status: true,
      impressions: 12500,
      revenue: 125.50
    },
    {
      id: "2",
      name: "Interstitial After Game",
      adUnitId: "ca-app-pub-xxx/interstitial1",
      type: "interstitial",
      status: true,
      impressions: 5200,
      revenue: 312.80
    },
    {
      id: "3",
      name: "Reward Video",
      adUnitId: "ca-app-pub-xxx/rewarded1",
      type: "rewarded",
      status: true,
      impressions: 3100,
      revenue: 465.30
    }
  ])

  const handleUpdateConfig = async () => {
    try {
      // TODO: Implement actual AdMob config update
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSuccess("AdMob configuration updated successfully")
    } catch (err) {
      setError("Failed to update AdMob configuration")
    }
  }

  const handleToggleAdUnit = async (id: string) => {
    try {
      setAdUnits(prevUnits =>
        prevUnits.map(unit =>
          unit.id === id ? { ...unit, status: !unit.status } : unit
        )
      )
      setSuccess("Ad unit status updated successfully")
    } catch (err) {
      setError("Failed to update ad unit status")
    }
  }

  const handleUpdateAdUnit = async (id: string, newAdUnitId: string) => {
    try {
      setAdUnits(prevUnits =>
        prevUnits.map(unit =>
          unit.id === id ? { ...unit, adUnitId: newAdUnitId } : unit
        )
      )
      setSuccess("Ad unit ID updated successfully")
    } catch (err) {
      setError("Failed to update ad unit ID")
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">AdMob Management</h1>

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

        <Tabs defaultValue="config" className="space-y-6">
          <TabsList className="bg-gray-800/50 border-gray-700">
            <TabsTrigger value="config">Configuration</TabsTrigger>
            <TabsTrigger value="units">Ad Units</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="config">
            <Card className="p-6 bg-gray-800/50 border-gray-700">
              <h2 className="text-xl font-bold mb-6">AdMob Configuration</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    AdMob App ID
                  </label>
                  <Input
                    value={admobConfig.appId}
                    onChange={(e) => setAdmobConfig({ ...admobConfig, appId: e.target.value })}
                    className="bg-gray-700/50 border-gray-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    API Key
                  </label>
                  <Input
                    type="password"
                    value={admobConfig.apiKey}
                    onChange={(e) => setAdmobConfig({ ...admobConfig, apiKey: e.target.value })}
                    className="bg-gray-700/50 border-gray-600"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Test Mode
                    </label>
                    <p className="text-sm text-gray-400">
                      Show test ads instead of real ads
                    </p>
                  </div>
                  <Switch
                    checked={admobConfig.testMode}
                    onCheckedChange={(checked) => setAdmobConfig({ ...admobConfig, testMode: checked })}
                  />
                </div>

                <Button 
                  onClick={handleUpdateConfig}
                  className="w-full mt-4 bg-blue-600 hover:bg-blue-700"
                >
                  Update Configuration
                </Button>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="units">
            <div className="space-y-6">
              {adUnits.map((unit) => (
                <Card 
                  key={unit.id}
                  className="p-6 bg-gray-800/50 border-gray-700"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{unit.name}</h3>
                      <p className="text-gray-400 mb-4">Type: {unit.type}</p>
                      <div className="space-y-2">
                        <Input
                          value={unit.adUnitId}
                          onChange={(e) => handleUpdateAdUnit(unit.id, e.target.value)}
                          className="bg-gray-700/50 border-gray-600"
                        />
                      </div>
                    </div>
                    <div className="text-right">
                      <Switch
                        checked={unit.status}
                        onCheckedChange={() => handleToggleAdUnit(unit.id)}
                      />
                      <p className="text-sm text-gray-400 mt-2">
                        {unit.status ? "Active" : "Inactive"}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-700 grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-400">Impressions</p>
                      <p className="text-xl font-bold">{unit.impressions.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Revenue</p>
                      <p className="text-xl font-bold text-green-400">
                        ${unit.revenue.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics">
            <Card className="p-6 bg-gray-800/50 border-gray-700">
              <h2 className="text-xl font-bold mb-6">Ad Performance</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-gray-700/30 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Total Impressions</h3>
                  <p className="text-3xl font-bold">
                    {adUnits.reduce((sum, unit) => sum + unit.impressions, 0).toLocaleString()}
                  </p>
                </div>

                <div className="p-4 bg-gray-700/30 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Total Revenue</h3>
                  <p className="text-3xl font-bold text-green-400">
                    ${adUnits.reduce((sum, unit) => sum + unit.revenue, 0).toFixed(2)}
                  </p>
                </div>

                <div className="p-4 bg-gray-700/30 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Active Ad Units</h3>
                  <p className="text-3xl font-bold text-blue-400">
                    {adUnits.filter(unit => unit.status).length}/{adUnits.length}
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

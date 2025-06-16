"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Alert } from "@/components/ui/alert"
import Link from "next/link"

export default function AdminLogin() {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      // TODO: Implement actual admin login logic
      console.log("Admin login attempt:", { username: formData.username })
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Redirect to admin dashboard after successful login
      window.location.href = "/admin/dashboard"
    } catch (err) {
      setError("Invalid admin credentials")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-900">
      <Card className="w-full max-w-md p-6 bg-gray-800/50 border-gray-700">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">Admin Login</h1>
          <p className="text-gray-400 mt-2">Access the admin control panel</p>
        </div>

        {error && (
          <Alert variant="destructive" className="mb-4">
            {error}
          </Alert>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <Input
              type="text"
              name="username"
              placeholder="Admin Username"
              value={formData.username}
              onChange={handleChange}
              required
              className="bg-gray-700/50 border-gray-600"
            />
          </div>
          
          <div>
            <Input
              type="password"
              name="password"
              placeholder="Admin Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="bg-gray-700/50 border-gray-600"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-red-600 hover:bg-red-700"
            disabled={loading}
          >
            {loading ? "Authenticating..." : "Login to Admin Panel"}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <Link 
            href="/" 
            className="text-gray-400 hover:text-gray-300 text-sm"
          >
            ← Back to Main Site
          </Link>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-700">
          <p className="text-center text-sm text-gray-400">
            This area is restricted to authorized administrators only.
          </p>
        </div>
      </Card>
    </div>
  )
}

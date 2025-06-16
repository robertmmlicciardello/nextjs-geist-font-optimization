"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Alert } from "@/components/ui/alert"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    referralCode: ""
  })
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      return
    }

    if (!acceptTerms) {
      setError("Please accept the terms and conditions")
      return
    }

    setLoading(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))

      // TODO: Implement actual registration logic
      window.location.href = "/dashboard"
    } catch (err) {
      setError("Failed to create account. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <div className="flex items-center justify-center">
              <span className="text-3xl font-bold text-white">vPan</span>
              <span className="text-lg font-medium text-blue-400 ml-1">VPN</span>
            </div>
          </Link>
        </div>

        <Card className="p-6 bg-gray-800/50 border-gray-700">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold">Create an Account</h1>
            <p className="text-gray-400 mt-1">
              Join thousands of users worldwide
            </p>
          </div>

          {error && (
            <Alert variant="destructive" className="mb-6">
              {error}
            </Alert>
          )}

          <form onSubmit={handleRegister} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="username"
                placeholder="Choose a username"
                value={formData.username}
                onChange={handleChange}
                className="bg-gray-700/50 border-gray-600"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-700/50 border-gray-600"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                className="bg-gray-700/50 border-gray-600"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="bg-gray-700/50 border-gray-600"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="referralCode">Referral Code (Optional)</Label>
              <Input
                id="referralCode"
                name="referralCode"
                placeholder="Enter referral code"
                value={formData.referralCode}
                onChange={handleChange}
                className="bg-gray-700/50 border-gray-600"
              />
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox
                id="terms"
                checked={acceptTerms}
                onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                className="mt-1"
              />
              <Label 
                htmlFor="terms"
                className="text-sm text-gray-400 cursor-pointer"
              >
                I agree to the{" "}
                <Link 
                  href="/terms"
                  className="text-blue-400 hover:text-blue-300"
                >
                  Terms of Service
                </Link>
                {" "}and{" "}
                <Link 
                  href="/privacy"
                  className="text-blue-400 hover:text-blue-300"
                >
                  Privacy Policy
                </Link>
              </Label>
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700"
              disabled={loading}
            >
              {loading ? "Creating account..." : "Create Account"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Already have an account?{" "}
              <Link 
                href="/login"
                className="text-blue-400 hover:text-blue-300 font-medium"
              >
                Sign in
              </Link>
            </p>
          </div>
        </Card>

        {/* Features */}
        <div className="mt-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
              <div className="text-lg font-semibold mb-2">🔒 Secure</div>
              <p className="text-sm text-gray-400">
                End-to-end encryption for your privacy
              </p>
            </div>
            <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
              <div className="text-lg font-semibold mb-2">⚡ Fast</div>
              <p className="text-sm text-gray-400">
                High-speed servers worldwide
              </p>
            </div>
            <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
              <div className="text-lg font-semibold mb-2">🎮 Rewards</div>
              <p className="text-sm text-gray-400">
                Earn points and unlock premium features
              </p>
            </div>
            <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
              <div className="text-lg font-semibold mb-2">🌍 Global</div>
              <p className="text-sm text-gray-400">
                Access content from anywhere
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

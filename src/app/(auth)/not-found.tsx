import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function AuthNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
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
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-700/50 mb-6">
              <span className="text-4xl">🔐</span>
            </div>
            
            <h1 className="text-2xl font-bold mb-4">
              Authentication Page Not Found
            </h1>
            
            <p className="text-gray-400 mb-6">
              The authentication page you're looking for is not available. Please use one of the options below.
            </p>

            <div className="space-y-3">
              <Link href="/login">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Sign In
                </Button>
              </Link>
              <Link href="/register">
                <Button variant="outline" className="w-full">
                  Create Account
                </Button>
              </Link>
              <Link href="/">
                <Button variant="ghost" className="w-full">
                  Return to Home
                </Button>
              </Link>
            </div>
          </div>
        </Card>

        {/* Help Links */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 mb-4">
            Need help accessing your account?
          </p>
          <div className="flex justify-center items-center space-x-4">
            <Link 
              href="/forgot-password"
              className="text-blue-400 hover:text-blue-300 text-sm"
            >
              Reset Password
            </Link>
            <span className="text-gray-700">|</span>
            <Link 
              href="/support"
              className="text-blue-400 hover:text-blue-300 text-sm"
            >
              Contact Support
            </Link>
            <span className="text-gray-700">|</span>
            <Link 
              href="/help"
              className="text-blue-400 hover:text-blue-300 text-sm"
            >
              Help Center
            </Link>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 text-center">
          <div className="flex justify-center items-center space-x-4">
            <div className="flex items-center">
              <span className="text-yellow-400 mr-1">★</span>
              <span className="text-sm text-gray-400">4.9/5 Rating</span>
            </div>
            <div className="h-4 w-px bg-gray-700"></div>
            <div className="text-sm text-gray-400">
              24/7 Support
            </div>
            <div className="h-4 w-px bg-gray-700"></div>
            <div className="text-sm text-gray-400">
              Secure & Private
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

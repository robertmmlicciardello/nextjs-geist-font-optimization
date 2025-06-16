"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

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
            <div className="text-4xl mb-4">😔</div>
            <h2 className="text-2xl font-bold mb-4">Authentication Error</h2>
            <p className="text-gray-400 mb-6">
              We encountered an issue while processing your request. Please try again or contact support.
            </p>
            <div className="space-y-3">
              <Button 
                onClick={reset}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Try again
              </Button>
              <Link href="/">
                <Button 
                  variant="outline"
                  className="w-full"
                >
                  Return to Home
                </Button>
              </Link>
              <Link href="/support" className="text-sm text-blue-400 hover:text-blue-300">
                Contact Support
              </Link>
            </div>
          </div>

          {process.env.NODE_ENV === "development" && (
            <div className="mt-6 p-4 bg-red-900/20 rounded-lg">
              <p className="text-red-400 text-sm font-mono">
                {error.message}
              </p>
            </div>
          )}
        </Card>

        {/* Help Links */}
        <div className="mt-8 text-center">
          <div className="flex justify-center items-center space-x-4">
            <Link href="/faq" className="text-sm text-gray-400 hover:text-gray-300">
              FAQ
            </Link>
            <div className="h-4 w-px bg-gray-700"></div>
            <Link href="/help" className="text-sm text-gray-400 hover:text-gray-300">
              Help Center
            </Link>
            <div className="h-4 w-px bg-gray-700"></div>
            <Link href="/contact" className="text-sm text-gray-400 hover:text-gray-300">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

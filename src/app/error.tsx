"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function GlobalError({
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
    <html>
      <body className="min-h-screen bg-gray-900 text-white">
        <div className="min-h-screen flex items-center justify-center p-4">
          <Card className="max-w-2xl w-full p-8 bg-gray-800/50 border-gray-700">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-900/20 mb-6">
                <span className="text-4xl">⚠️</span>
              </div>
              
              <h1 className="text-3xl font-bold mb-4">
                Something Went Wrong
              </h1>
              
              <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
                We've encountered an unexpected error. Our team has been notified and is working to fix the issue.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                <Button 
                  onClick={reset}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Try Again
                </Button>
                <Link href="/">
                  <Button variant="outline">
                    Return to Home
                  </Button>
                </Link>
              </div>

              {/* Error Details (Development Only) */}
              {process.env.NODE_ENV === "development" && (
                <div className="max-w-lg mx-auto">
                  <div className="p-4 bg-red-900/20 rounded-lg text-left">
                    <p className="text-sm font-semibold text-red-400 mb-2">
                      Error Details:
                    </p>
                    <p className="text-red-400 text-sm font-mono break-all">
                      {error.message}
                    </p>
                    {error.digest && (
                      <p className="text-red-400/60 text-xs mt-2">
                        Error ID: {error.digest}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Support Options */}
              <div className="mt-8 pt-6 border-t border-gray-700">
                <p className="text-gray-400 mb-4">
                  Need assistance?
                </p>
                <div className="flex justify-center items-center space-x-4">
                  <Link 
                    href="/support"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    Contact Support
                  </Link>
                  <span className="text-gray-700">|</span>
                  <Link 
                    href="/status"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    System Status
                  </Link>
                  <span className="text-gray-700">|</span>
                  <Link 
                    href="/help"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    Help Center
                  </Link>
                </div>
              </div>

              {/* Trust Message */}
              <div className="mt-8 text-sm text-gray-400">
                <p>
                  We value your trust and are committed to providing a reliable service.
                  <br />
                  Thank you for your patience.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </body>
    </html>
  )
}

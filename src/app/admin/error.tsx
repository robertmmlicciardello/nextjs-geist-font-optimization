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
    <div className="flex h-screen">
      {/* Keep the admin sidebar visible */}
      <div className="w-64 border-r border-gray-800 bg-gray-900">
        {/* AdminNav will be rendered by the layout */}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-auto">
        <div className="h-full flex items-center justify-center p-6">
          <Card className="max-w-2xl w-full p-6 bg-gray-800/50 border-gray-700">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-900/20 mb-4">
                <span className="text-3xl">⚠️</span>
              </div>
              
              <h2 className="text-2xl font-bold mb-4">Administrative Error</h2>
              
              <p className="text-gray-400 mb-6">
                An error occurred while processing your administrative request. 
                This has been logged and will be reviewed by our team.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <Button 
                  onClick={reset}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Retry Operation
                </Button>
                <Link href="/admin/dashboard">
                  <Button variant="outline">
                    Return to Dashboard
                  </Button>
                </Link>
              </div>

              {/* Error Details (Development Only) */}
              {process.env.NODE_ENV === "development" && (
                <div className="mt-8">
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

              {/* Support Actions */}
              <div className="mt-8 pt-6 border-t border-gray-700">
                <p className="text-gray-400 mb-4">
                  Need assistance? Our technical team is here to help.
                </p>
                <div className="flex justify-center space-x-4">
                  <Link 
                    href="/admin/support"
                    className="text-blue-400 hover:text-blue-300 text-sm"
                  >
                    Contact Support
                  </Link>
                  <span className="text-gray-700">|</span>
                  <Link 
                    href="/admin/logs"
                    className="text-blue-400 hover:text-blue-300 text-sm"
                  >
                    View System Logs
                  </Link>
                  <span className="text-gray-700">|</span>
                  <Link 
                    href="/admin/status"
                    className="text-blue-400 hover:text-blue-300 text-sm"
                  >
                    System Status
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

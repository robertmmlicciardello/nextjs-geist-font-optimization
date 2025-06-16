"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

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
    <div className="container mx-auto px-4 py-16">
      <Card className="max-w-lg mx-auto p-6 bg-gray-800/50 border-gray-700 text-center">
        <div className="text-4xl mb-4">😕</div>
        <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
        <p className="text-gray-400 mb-6">
          We apologize for the inconvenience. Please try again or contact support if the problem persists.
        </p>
        <div className="space-x-4">
          <Button 
            onClick={reset}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Try again
          </Button>
          <Button 
            variant="outline"
            onClick={() => window.location.href = "/dashboard"}
          >
            Return to Dashboard
          </Button>
        </div>
        {process.env.NODE_ENV === "development" && (
          <div className="mt-6 p-4 bg-red-900/20 rounded-lg text-left">
            <p className="text-red-400 text-sm font-mono">
              {error.message}
            </p>
          </div>
        )}
      </Card>
    </div>
  )
}

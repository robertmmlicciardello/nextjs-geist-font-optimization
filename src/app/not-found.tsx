import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <Card className="max-w-md w-full p-6 bg-gray-800/50 border-gray-700 text-center">
        <div className="text-6xl mb-6">🔍</div>
        
        <h1 className="text-3xl font-bold mb-4">
          Page Not Found
        </h1>
        
        <p className="text-gray-400 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/">
            <Button className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
              Return Home
            </Button>
          </Link>
          <Button 
            variant="outline"
            onClick={() => window.history.back()}
            className="w-full sm:w-auto"
          >
            Go Back
          </Button>
        </div>

        {/* Quick Links */}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <p className="text-gray-400 mb-4">
            Looking for something specific?
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Link 
              href="/dashboard"
              className="p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors"
            >
              <h3 className="font-semibold mb-1">Dashboard</h3>
              <p className="text-sm text-gray-400">Access your account</p>
            </Link>
            <Link 
              href="/support"
              className="p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors"
            >
              <h3 className="font-semibold mb-1">Support</h3>
              <p className="text-sm text-gray-400">Get help</p>
            </Link>
            <Link 
              href="/servers"
              className="p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors"
            >
              <h3 className="font-semibold mb-1">Servers</h3>
              <p className="text-sm text-gray-400">View server status</p>
            </Link>
            <Link 
              href="/premium"
              className="p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors"
            >
              <h3 className="font-semibold mb-1">Premium</h3>
              <p className="text-sm text-gray-400">Upgrade your plan</p>
            </Link>
          </div>
        </div>

        {/* Search Suggestion */}
        <div className="mt-8 text-sm text-gray-400">
          Try searching our{" "}
          <Link 
            href="/help"
            className="text-blue-400 hover:text-blue-300"
          >
            help center
          </Link>
          {" "}or{" "}
          <Link 
            href="/contact"
            className="text-blue-400 hover:text-blue-300"
          >
            contact our support team
          </Link>
        </div>
      </Card>
    </div>
  )
}

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function UserNotFound() {
  return (
    <div className="container mx-auto px-4 py-16">
      <Card className="max-w-2xl mx-auto p-6 bg-gray-800/50 border-gray-700">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-700/50 mb-6">
            <span className="text-4xl">🤔</span>
          </div>
          
          <h1 className="text-3xl font-bold mb-4">
            Page Not Available
          </h1>
          
          <p className="text-gray-400 text-lg mb-8">
            The page you're looking for might have been moved or is not accessible with your current permissions.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link href="/dashboard">
              <Button className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
                Return to Dashboard
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

          {/* Quick Access */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <Link href="/games">
              <Card className="p-4 bg-gray-700/30 hover:bg-gray-700/50 transition-colors cursor-pointer">
                <h3 className="font-semibold mb-2">Games</h3>
                <p className="text-sm text-gray-400">Play and earn rewards</p>
              </Card>
            </Link>
            <Link href="/rewards">
              <Card className="p-4 bg-gray-700/30 hover:bg-gray-700/50 transition-colors cursor-pointer">
                <h3 className="font-semibold mb-2">Rewards</h3>
                <p className="text-sm text-gray-400">View your points and rewards</p>
              </Card>
            </Link>
            <Link href="/profile">
              <Card className="p-4 bg-gray-700/30 hover:bg-gray-700/50 transition-colors cursor-pointer">
                <h3 className="font-semibold mb-2">Profile</h3>
                <p className="text-sm text-gray-400">Manage your account</p>
              </Card>
            </Link>
            <Link href="/leaderboard">
              <Card className="p-4 bg-gray-700/30 hover:bg-gray-700/50 transition-colors cursor-pointer">
                <h3 className="font-semibold mb-2">Leaderboard</h3>
                <p className="text-sm text-gray-400">See top performers</p>
              </Card>
            </Link>
          </div>

          {/* Support Section */}
          <div className="text-center">
            <p className="text-gray-400 mb-4">
              Need help finding something?
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
                href="/help"
                className="text-blue-400 hover:text-blue-300"
              >
                Help Center
              </Link>
              <span className="text-gray-700">|</span>
              <Link 
                href="/faq"
                className="text-blue-400 hover:text-blue-300"
              >
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

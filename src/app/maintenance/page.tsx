import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function Maintenance() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <div className="flex items-center justify-center">
              <span className="text-3xl font-bold text-white">vPan</span>
              <span className="text-lg font-medium text-blue-400 ml-1">VPN</span>
            </div>
          </Link>
        </div>

        <Card className="p-8 bg-gray-800/50 border-gray-700">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-900/20 mb-6">
              <span className="text-4xl">🔧</span>
            </div>
            
            <h1 className="text-3xl font-bold mb-4">
              System Maintenance
            </h1>
            
            <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
              We're currently performing scheduled maintenance to improve our services. We'll be back shortly.
            </p>

            {/* Maintenance Progress */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-gray-400 mb-2">
                <span>Maintenance Progress</span>
                <span>65%</span>
              </div>
              <Progress value={65} className="h-2" />
            </div>

            {/* Estimated Time */}
            <div className="p-4 bg-gray-700/30 rounded-lg mb-8">
              <p className="text-gray-300 font-semibold">
                Estimated Completion Time
              </p>
              <p className="text-gray-400">
                30 minutes remaining
              </p>
            </div>

            {/* Status Updates */}
            <div className="space-y-4 text-left mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                <div>
                  <p className="text-gray-300">Database Optimization</p>
                  <p className="text-sm text-gray-400">Completed</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 animate-pulse"></div>
                <div>
                  <p className="text-gray-300">Server Updates</p>
                  <p className="text-sm text-gray-400">In Progress</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-gray-500 mt-2"></div>
                <div>
                  <p className="text-gray-300">Security Patches</p>
                  <p className="text-sm text-gray-400">Pending</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Link href="/status">
                <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
                  Check System Status
                </Button>
              </Link>
              <Link href="https://status.vpanvpn.com" target="_blank">
                <Button variant="outline" className="w-full sm:w-auto">
                  Status Page
                </Button>
              </Link>
            </div>

            {/* Notification Option */}
            <div className="text-center">
              <p className="text-gray-400 mb-4">
                Want to be notified when we're back?
              </p>
              <div className="flex max-w-md mx-auto gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
                <Button>
                  Notify Me
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Alternative Access */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 mb-4">
            Need immediate access?
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

        {/* Social Media Updates */}
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>
            Follow us on{" "}
            <Link 
              href="https://twitter.com/vpanvpn" 
              target="_blank"
              className="text-blue-400 hover:text-blue-300"
            >
              Twitter
            </Link>
            {" "}for real-time updates
          </p>
        </div>
      </div>
    </div>
  )
}

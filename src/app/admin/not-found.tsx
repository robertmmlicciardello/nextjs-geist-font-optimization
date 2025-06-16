import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function AdminNotFound() {
  return (
    <div className="flex h-screen">
      {/* Admin Sidebar */}
      <div className="w-64 border-r border-gray-800 bg-gray-900">
        {/* AdminNav will be rendered by the layout */}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-auto">
        <div className="h-full flex items-center justify-center p-6">
          <Card className="max-w-2xl w-full p-6 bg-gray-800/50 border-gray-700">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-700/50 mb-6">
                <span className="text-4xl">⚠️</span>
              </div>
              
              <h1 className="text-2xl font-bold mb-4">
                Administrative Resource Not Found
              </h1>
              
              <p className="text-gray-400 mb-8">
                The administrative page or resource you're looking for doesn't exist or you may not have sufficient permissions to access it.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                <Link href="/admin/dashboard">
                  <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
                    Admin Dashboard
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

              {/* Quick Access Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <Link href="/admin/users">
                  <Card className="p-4 bg-gray-700/30 hover:bg-gray-700/50 transition-colors cursor-pointer">
                    <h3 className="font-semibold mb-2">User Management</h3>
                    <p className="text-sm text-gray-400">Manage user accounts</p>
                  </Card>
                </Link>
                <Link href="/admin/servers">
                  <Card className="p-4 bg-gray-700/30 hover:bg-gray-700/50 transition-colors cursor-pointer">
                    <h3 className="font-semibold mb-2">Server Management</h3>
                    <p className="text-sm text-gray-400">Configure VPN servers</p>
                  </Card>
                </Link>
                <Link href="/admin/settings">
                  <Card className="p-4 bg-gray-700/30 hover:bg-gray-700/50 transition-colors cursor-pointer">
                    <h3 className="font-semibold mb-2">System Settings</h3>
                    <p className="text-sm text-gray-400">Configure system settings</p>
                  </Card>
                </Link>
                <Link href="/admin/reports">
                  <Card className="p-4 bg-gray-700/30 hover:bg-gray-700/50 transition-colors cursor-pointer">
                    <h3 className="font-semibold mb-2">Reports</h3>
                    <p className="text-sm text-gray-400">View system reports</p>
                  </Card>
                </Link>
              </div>

              {/* Admin Tools */}
              <div className="text-center">
                <p className="text-gray-400 mb-4">
                  Administrative Tools
                </p>
                <div className="flex justify-center items-center space-x-4">
                  <Link 
                    href="/admin/logs"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    System Logs
                  </Link>
                  <span className="text-gray-700">|</span>
                  <Link 
                    href="/admin/status"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    System Status
                  </Link>
                  <span className="text-gray-700">|</span>
                  <Link 
                    href="/admin/support"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    Admin Support
                  </Link>
                </div>
              </div>

              {/* Permission Notice */}
              <div className="mt-8 p-4 bg-gray-700/30 rounded-lg">
                <p className="text-sm text-gray-400">
                  If you believe you should have access to this resource, please contact the system administrator or check your permissions in the{" "}
                  <Link 
                    href="/admin/settings"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    admin settings
                  </Link>.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

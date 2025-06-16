import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex h-screen">
      {/* Admin Sidebar Skeleton */}
      <div className="w-64 border-r border-gray-800 bg-gray-900 p-4">
        {/* Logo Skeleton */}
        <div className="mb-8">
          <Skeleton className="h-8 w-32" />
        </div>

        {/* Navigation Items Skeleton */}
        <div className="space-y-2">
          {[...Array(8)].map((_, i) => (
            <Skeleton key={i} className="h-10 w-full" />
          ))}
        </div>

        {/* Admin Info Skeleton */}
        <div className="absolute bottom-4 left-4 right-4">
          <Card className="p-4 bg-gray-800/50 border-gray-700">
            <div className="flex items-center space-x-3">
              <Skeleton className="h-10 w-10 rounded-full" />
              <div className="flex-1">
                <Skeleton className="h-4 w-24 mb-1" />
                <Skeleton className="h-3 w-16" />
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-auto">
        {/* Top Bar */}
        <div className="border-b border-gray-800 bg-gray-900 p-4">
          <div className="flex items-center justify-between">
            <Skeleton className="h-8 w-48" />
            <div className="flex items-center space-x-4">
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-8 w-8 rounded-full" />
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="p-6">
          {/* Header Section */}
          <div className="mb-8">
            <Skeleton className="h-8 w-64 mb-3" />
            <Skeleton className="h-4 w-96" />
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[...Array(3)].map((_, i) => (
              <Card key={i} className="p-6 bg-gray-800/50 border-gray-700">
                <Skeleton className="h-4 w-24 mb-2" />
                <Skeleton className="h-8 w-32 mb-1" />
                <Skeleton className="h-3 w-16" />
              </Card>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Table Card */}
            <Card className="p-6 bg-gray-800/50 border-gray-700">
              <Skeleton className="h-6 w-48 mb-4" />
              <div className="space-y-3">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Skeleton className="h-10 w-10 rounded-full" />
                      <div>
                        <Skeleton className="h-4 w-32 mb-1" />
                        <Skeleton className="h-3 w-24" />
                      </div>
                    </div>
                    <Skeleton className="h-8 w-24" />
                  </div>
                ))}
              </div>
            </Card>

            {/* Chart Card */}
            <Card className="p-6 bg-gray-800/50 border-gray-700">
              <Skeleton className="h-6 w-48 mb-4" />
              <Skeleton className="h-64 w-full rounded" />
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

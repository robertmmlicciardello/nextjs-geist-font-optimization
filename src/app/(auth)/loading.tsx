import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo Skeleton */}
        <div className="text-center mb-8">
          <Skeleton className="h-8 w-32 mx-auto" />
        </div>

        <Card className="p-6 bg-gray-800/50 border-gray-700">
          {/* Header Skeleton */}
          <div className="text-center mb-6">
            <Skeleton className="h-8 w-48 mx-auto mb-2" />
            <Skeleton className="h-4 w-64 mx-auto" />
          </div>

          {/* Form Fields Skeleton */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-10 w-full" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-32" />
              </div>
              <Skeleton className="h-10 w-full" />
            </div>

            <div className="flex items-center space-x-2">
              <Skeleton className="h-4 w-4" />
              <Skeleton className="h-4 w-24" />
            </div>

            <Skeleton className="h-10 w-full" />
          </div>

          {/* Footer Link Skeleton */}
          <div className="mt-6 text-center">
            <Skeleton className="h-4 w-48 mx-auto" />
          </div>
        </Card>

        {/* Social Proof Skeleton */}
        <div className="mt-8 text-center">
          <Skeleton className="h-4 w-64 mx-auto mb-4" />
          <div className="flex justify-center items-center space-x-4">
            <Skeleton className="h-4 w-24" />
            <div className="h-4 w-px bg-gray-700"></div>
            <Skeleton className="h-4 w-24" />
            <div className="h-4 w-px bg-gray-700"></div>
            <Skeleton className="h-4 w-24" />
          </div>
        </div>
      </div>
    </div>
  )
}

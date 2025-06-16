import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Separator } from "@/components/ui/separator"

export default function AdvisoriesLoading() {
  return (
    <div>
      {/* Hero Section */}
      <div className="text-center mb-16">
        <Skeleton className="h-10 w-64 mx-auto mb-6" />
        <Skeleton className="h-6 w-full max-w-3xl mx-auto" />
      </div>

      {/* Filter Bar */}
      <Card className="p-6 bg-gray-800/50 border-gray-700 mb-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="w-full sm:w-auto space-y-2">
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-4 w-32" />
          </div>
          <div className="flex flex-wrap gap-2">
            <Skeleton className="h-10 w-28" />
            <Skeleton className="h-10 w-28" />
            <Skeleton className="h-10 w-28" />
          </div>
        </div>
      </Card>

      {/* Advisories Grid */}
      <div className="space-y-6">
        {[1, 2, 3, 4, 5].map((i) => (
          <Card key={i} className="p-6 bg-gray-800/50 border-gray-700">
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="h-6 w-32" />
                  </div>
                  <Skeleton className="h-7 w-96 mb-1" />
                  <Skeleton className="h-5 w-48" />
                </div>
                <div className="flex items-start">
                  <Skeleton className="h-10 w-28" />
                </div>
              </div>

              <Separator />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Skeleton className="h-5 w-32 mb-2" />
                  <Skeleton className="h-4 w-full" />
                </div>
                <div>
                  <Skeleton className="h-5 w-32 mb-2" />
                  <Skeleton className="h-4 w-full" />
                </div>
              </div>

              <div>
                <Skeleton className="h-5 w-32 mb-2" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                  <Skeleton className="h-4 w-4/6" />
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center gap-2">
        <Skeleton className="h-10 w-10" />
        <Skeleton className="h-10 w-10" />
        <Skeleton className="h-10 w-10" />
        <Skeleton className="h-10 w-10" />
        <Skeleton className="h-10 w-10" />
      </div>

      {/* Statistics */}
      <Card className="mt-12 p-6 bg-gray-800/50 border-gray-700">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[1, 2, 3, 4].map((i) => (
            <div key={i}>
              <Skeleton className="h-8 w-20 mx-auto mb-2" />
              <Skeleton className="h-5 w-32 mx-auto" />
            </div>
          ))}
        </div>
      </Card>

      {/* Additional Resources */}
      <Card className="mt-8 p-6 bg-gray-800/50 border-gray-700">
        <div className="text-center">
          <Skeleton className="h-7 w-48 mx-auto mb-6" />
          <div className="flex flex-wrap justify-center gap-4">
            <Skeleton className="h-10 w-40" />
            <Skeleton className="h-10 w-40" />
            <Skeleton className="h-10 w-40" />
          </div>
        </div>
      </Card>

      {/* RSS Feed Notice */}
      <div className="mt-8 text-center">
        <Skeleton className="h-5 w-64 mx-auto" />
      </div>
    </div>
  )
}

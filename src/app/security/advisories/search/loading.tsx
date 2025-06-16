import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SearchLoading() {
  return (
    <div>
      {/* Search Header */}
      <div className="text-center mb-16">
        <Skeleton className="h-10 w-64 mx-auto mb-6" />
        <Skeleton className="h-6 w-full max-w-3xl mx-auto" />
      </div>

      {/* Search Form */}
      <Card className="p-6 bg-gray-800/50 border-gray-700 mb-8">
        <Tabs defaultValue="basic" className="w-full">
          <div className="flex items-center justify-between mb-6">
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-10 w-48" />
          </div>

          <TabsContent value="basic">
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Skeleton className="h-10 w-full" />
                </div>
                <Skeleton className="h-10 w-24" />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </Card>

      {/* Search Results */}
      <Card className="bg-gray-800/50 border-gray-700 mb-8">
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-4 w-32" />
          </div>
        </div>

        <div className="p-6 space-y-4">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="p-4 bg-gray-800/50 border-gray-700">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="h-6 w-20" />
                  </div>
                  <Skeleton className="h-6 w-96 mb-2" />
                  <Skeleton className="h-4 w-full max-w-2xl" />
                </div>
                <Skeleton className="h-4 w-24" />
              </div>
              <div className="mt-4">
                <Skeleton className="h-4 w-48" />
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Search Tips */}
      <Card className="p-6 bg-gray-800/50 border-gray-700">
        <Skeleton className="h-7 w-48 mx-auto mb-6" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i}>
              <Skeleton className="h-6 w-32 mb-2" />
              <Skeleton className="h-4 w-full" />
            </div>
          ))}
        </div>
      </Card>

      {/* Help Section */}
      <div className="mt-8 text-center">
        <Skeleton className="h-4 w-64 mx-auto" />
      </div>
    </div>
  )
}

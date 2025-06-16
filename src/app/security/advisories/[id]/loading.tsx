import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function AdvisoryDetailLoading() {
  return (
    <div>
      {/* Advisory Header */}
      <Card className="p-6 bg-gray-800/50 border-gray-700 mb-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-6 w-32" />
          </div>

          <div>
            <Skeleton className="h-8 w-3/4 mb-2" />
            <Skeleton className="h-5 w-48" />
          </div>

          <div className="flex flex-wrap gap-4">
            <Skeleton className="h-10 w-32" />
            <Skeleton className="h-10 w-32" />
            <Skeleton className="h-10 w-32" />
          </div>
        </div>
      </Card>

      {/* Advisory Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Overview */}
          <Card className="p-6 bg-gray-800/50 border-gray-700">
            <Skeleton className="h-7 w-32 mb-4" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-4/6" />
            </div>
          </Card>

          {/* Impact & Mitigation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 bg-gray-800/50 border-gray-700">
              <Skeleton className="h-7 w-32 mb-4" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            </Card>

            <Card className="p-6 bg-gray-800/50 border-gray-700">
              <Skeleton className="h-7 w-32 mb-4" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            </Card>
          </div>

          {/* Timeline */}
          <Card className="p-6 bg-gray-800/50 border-gray-700">
            <Skeleton className="h-7 w-32 mb-4" />
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>
                    <Skeleton className="h-4 w-24" />
                  </TableHead>
                  <TableHead>
                    <Skeleton className="h-4 w-48" />
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[1, 2, 3, 4].map((i) => (
                  <TableRow key={i}>
                    <TableCell>
                      <Skeleton className="h-4 w-24" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-4 w-64" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>

          {/* Credits */}
          <Card className="p-6 bg-gray-800/50 border-gray-700">
            <Skeleton className="h-7 w-32 mb-4" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-64" />
              <Skeleton className="h-4 w-56" />
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Technical Details */}
          <Card className="p-6 bg-gray-800/50 border-gray-700">
            <Skeleton className="h-7 w-48 mb-4" />
            <div className="space-y-4">
              <div>
                <Skeleton className="h-6 w-32 mb-2" />
                <Skeleton className="h-4 w-full" />
              </div>

              <div>
                <Skeleton className="h-6 w-32 mb-2" />
                <Skeleton className="h-4 w-48" />
              </div>

              <div>
                <Skeleton className="h-6 w-32 mb-2" />
                <div className="flex items-center gap-2">
                  <Skeleton className="h-6 w-16" />
                  <Skeleton className="h-4 w-48" />
                </div>
              </div>
            </div>
          </Card>

          {/* References */}
          <Card className="p-6 bg-gray-800/50 border-gray-700">
            <Skeleton className="h-7 w-32 mb-4" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
            </div>
          </Card>

          {/* Related Advisories */}
          <Card className="p-6 bg-gray-800/50 border-gray-700">
            <Skeleton className="h-7 w-48 mb-4" />
            <div className="space-y-3">
              {[1, 2].map((i) => (
                <Card key={i} className="p-3 bg-gray-800/50 border-gray-700">
                  <div className="flex items-center gap-2 mb-1">
                    <Skeleton className="h-6 w-16" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                  <Skeleton className="h-4 w-48" />
                </Card>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Actions */}
      <Card className="mt-8 p-6 bg-gray-800/50 border-gray-700">
        <div className="text-center">
          <Skeleton className="h-7 w-48 mx-auto mb-6" />
          <div className="flex flex-wrap justify-center gap-4">
            <Skeleton className="h-10 w-32" />
            <Skeleton className="h-10 w-40" />
            <Skeleton className="h-10 w-40" />
          </div>
        </div>
      </Card>

      {/* RSS Feed */}
      <div className="mt-8 text-center">
        <Skeleton className="h-4 w-64 mx-auto" />
      </div>
    </div>
  )
}

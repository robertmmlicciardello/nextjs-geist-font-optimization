import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function ArchiveLoading() {
  return (
    <div>
      {/* Hero Section */}
      <div className="text-center mb-16">
        <Skeleton className="h-10 w-64 mx-auto mb-6" />
        <Skeleton className="h-6 w-full max-w-3xl mx-auto" />
      </div>

      {/* Search and Filters */}
      <Card className="p-6 bg-gray-800/50 border-gray-700 mb-8">
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <div className="flex-1">
              <Skeleton className="h-10 w-full" />
            </div>
            <div className="flex flex-wrap gap-2">
              <Skeleton className="h-10 w-[140px]" />
              <Skeleton className="h-10 w-[140px]" />
              <Skeleton className="h-10 w-[140px]" />
            </div>
          </div>
        </div>
      </Card>

      {/* Archive Content */}
      <Card className="bg-gray-800/50 border-gray-700 mb-8">
        <div className="p-6 border-b border-gray-700 flex items-center justify-between">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-10 w-48" />
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <Skeleton className="h-4 w-20" />
              </TableHead>
              <TableHead>
                <Skeleton className="h-4 w-24" />
              </TableHead>
              <TableHead>
                <Skeleton className="h-4 w-48" />
              </TableHead>
              <TableHead>
                <Skeleton className="h-4 w-24" />
              </TableHead>
              <TableHead>
                <Skeleton className="h-4 w-24" />
              </TableHead>
              <TableHead>
                <Skeleton className="h-4 w-24" />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[1, 2, 3, 4, 5].map((i) => (
              <TableRow key={i}>
                <TableCell>
                  <Skeleton className="h-4 w-24" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-32" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-64" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-6 w-20" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-6 w-20" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-8 w-24" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      {/* Archive Stats */}
      <Card className="p-6 bg-gray-800/50 border-gray-700 mb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[1, 2, 3, 4].map((i) => (
            <div key={i}>
              <Skeleton className="h-8 w-20 mx-auto mb-2" />
              <Skeleton className="h-4 w-32 mx-auto" />
            </div>
          ))}
        </div>
      </Card>

      {/* Download Options */}
      <Card className="p-6 bg-gray-800/50 border-gray-700">
        <div className="text-center">
          <Skeleton className="h-8 w-48 mx-auto mb-6" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
          </div>
          <Skeleton className="h-4 w-64 mx-auto mt-4" />
        </div>
      </Card>

      {/* Help Section */}
      <div className="mt-8 text-center">
        <Skeleton className="h-4 w-64 mx-auto" />
      </div>
    </div>
  )
}

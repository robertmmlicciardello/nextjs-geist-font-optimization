import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function Transparency() {
  const requestStats = [
    {
      period: "Q4 2023",
      dataRequests: 15,
      complied: 0,
      accounts: 0,
      reason: "No data available due to no-logs policy"
    },
    {
      period: "Q3 2023",
      dataRequests: 12,
      complied: 0,
      accounts: 0,
      reason: "No data available due to no-logs policy"
    },
    {
      period: "Q2 2023",
      dataRequests: 18,
      complied: 0,
      accounts: 0,
      reason: "No data available due to no-logs policy"
    },
    {
      period: "Q1 2023",
      dataRequests: 10,
      complied: 0,
      accounts: 0,
      reason: "No data available due to no-logs policy"
    }
  ]

  const warrantCanary = [
    "We have not been compelled to modify our system to allow surveillance or monitoring",
    "We have not received any national security letters or gag orders",
    "We have not been required to modify our encryption or authentication systems",
    "We have not been subject to any government data collection program",
    "We have not been required to backdoor any of our systems"
  ]

  const infrastructureUpdates = [
    {
      date: "December 2023",
      update: "Added 20 new server locations",
      impact: "Improved global coverage and speeds"
    },
    {
      date: "November 2023",
      update: "Upgraded encryption standards",
      impact: "Enhanced security across all servers"
    },
    {
      date: "October 2023",
      update: "Implemented RAM-only servers",
      impact: "Improved privacy through no data persistence"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-white">vPan</span>
              <span className="text-sm font-medium text-blue-400">VPN</span>
            </Link>
            <nav className="flex items-center space-x-4">
              <Link href="/security" className="text-gray-400 hover:text-white">
                Security
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Transparency Report</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our commitment to transparency includes regular reporting on government requests, infrastructure changes, and security updates.
          </p>
        </div>

        {/* Latest Report Summary */}
        <Card className="p-8 bg-gray-800/50 border-gray-700 mb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Latest Report Summary</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mb-8">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">0</div>
                <div className="text-gray-300">Data Requests Complied</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">100+</div>
                <div className="text-gray-300">Server Locations</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime</div>
              </div>
            </div>
            <p className="text-gray-300 text-center">
              Report Period: October - December 2023
            </p>
          </div>
        </Card>

        {/* Government Requests */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Government Data Requests</h2>
          <Card className="bg-gray-800/50 border-gray-700">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Period</TableHead>
                  <TableHead>Requests</TableHead>
                  <TableHead>Complied</TableHead>
                  <TableHead>Accounts</TableHead>
                  <TableHead>Reason</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {requestStats.map((stat) => (
                  <TableRow key={stat.period}>
                    <TableCell>{stat.period}</TableCell>
                    <TableCell>{stat.dataRequests}</TableCell>
                    <TableCell>{stat.complied}</TableCell>
                    <TableCell>{stat.accounts}</TableCell>
                    <TableCell>{stat.reason}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>

        <Separator className="my-8" />

        {/* Warrant Canary */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Warrant Canary</h2>
          <Card className="p-6 bg-gray-800/50 border-gray-700">
            <p className="text-gray-300 mb-6">
              As of January 20, 2024, vPan VPN states the following:
            </p>
            <ul className="space-y-4">
              {warrantCanary.map((statement, index) => (
                <li key={index} className="flex items-start text-gray-300">
                  <span className="text-green-400 mr-2">✓</span>
                  {statement}
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Infrastructure Updates */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Infrastructure Updates</h2>
          <div className="space-y-6">
            {infrastructureUpdates.map((update, index) => (
              <Card key={index} className="p-6 bg-gray-800/50 border-gray-700">
                <div className="flex flex-col sm:flex-row justify-between">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">{update.date}</div>
                    <h3 className="font-semibold mb-2">{update.update}</h3>
                    <p className="text-gray-300">{update.impact}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Resources */}
        <Card className="p-8 bg-gray-800/50 border-gray-700">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">Additional Resources</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/security">
                <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
                  Security Policy
                </Button>
              </Link>
              <Link href="/privacy">
                <Button variant="outline" className="w-full sm:w-auto">
                  Privacy Policy
                </Button>
              </Link>
              <Link href="/security/whitepaper">
                <Button variant="outline" className="w-full sm:w-auto">
                  Security Whitepaper
                </Button>
              </Link>
            </div>
          </div>
        </Card>

        {/* Archive Notice */}
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>
            Looking for older reports?{" "}
            <Link 
              href="/security/transparency/archive"
              className="text-blue-400 hover:text-blue-300"
            >
              View our transparency report archive
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

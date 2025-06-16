import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

type Severity = 'Critical' | 'High' | 'Medium' | 'Low'
type Status = 'Patched' | 'In Progress' | 'Investigating'

interface Advisory {
  id: string
  date: string
  title: string
  severity: Severity
  status: Status
  affected: string
  description: string
  details: string
  impact: string
  mitigation: string
  references: string[]
  timeline: {
    date: string
    event: string
  }[]
  credits: string[]
  cve?: string
  cvss?: {
    score: number
    vector: string
  }
}

// Mock data - in production this would come from an API
const advisory: Advisory = {
  id: "VPN-2024-001",
  date: "January 15, 2024",
  title: "Critical Update: OpenVPN Configuration Vulnerability",
  severity: "Critical",
  status: "Patched",
  affected: "VPN Client v2.0.0-2.1.5",
  description: "A vulnerability in the OpenVPN configuration parser could allow remote code execution.",
  details: "A critical vulnerability was discovered in the OpenVPN configuration parser that could allow an attacker to execute arbitrary code through specially crafted configuration files. This vulnerability affects all versions of the VPN client from 2.0.0 to 2.1.5.",
  impact: "An attacker could potentially execute arbitrary code with the privileges of the VPN client process. This could lead to system compromise, data theft, or further system exploitation.",
  mitigation: "Update to VPN Client version 2.1.6 or later. The update includes additional validation of configuration files and sanitization of potentially dangerous inputs.",
  references: [
    "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-0001",
    "https://nvd.nist.gov/vuln/detail/CVE-2024-0001",
    "https://security.vpan.com/advisories/VPN-2024-001"
  ],
  timeline: [
    {
      date: "2024-01-01",
      event: "Vulnerability reported by security researcher"
    },
    {
      date: "2024-01-03",
      event: "Initial investigation completed"
    },
    {
      date: "2024-01-10",
      event: "Patch developed and tested"
    },
    {
      date: "2024-01-15",
      event: "Patch released to all users"
    }
  ],
  credits: [
    "Jane Doe (Security Researcher)",
    "John Smith (vPan Security Team)"
  ],
  cve: "CVE-2024-0001",
  cvss: {
    score: 9.8,
    vector: "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H"
  }
}

const severityColors: Record<Severity, string> = {
  Critical: "bg-red-900/50 text-red-300",
  High: "bg-orange-900/50 text-orange-300",
  Medium: "bg-yellow-900/50 text-yellow-300",
  Low: "bg-blue-900/50 text-blue-300"
}

const statusColors: Record<Status, string> = {
  Patched: "bg-green-900/50 text-green-300",
  "In Progress": "bg-yellow-900/50 text-yellow-300",
  Investigating: "bg-blue-900/50 text-blue-300"
}

export default function AdvisoryDetail({ params }: { params: { id: string } }) {
  return (
    <div>
      {/* Advisory Header */}
      <Card className="p-6 bg-gray-800/50 border-gray-700 mb-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Badge className={severityColors[advisory.severity]}>
              {advisory.severity}
            </Badge>
            <Badge className={statusColors[advisory.status]}>
              {advisory.status}
            </Badge>
            <span className="text-sm text-gray-400">{advisory.date}</span>
          </div>

          <div>
            <h1 className="text-2xl font-bold mb-2">{advisory.title}</h1>
            <p className="text-gray-400">Advisory ID: {advisory.id}</p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href={`/security/advisories/${advisory.id}/patch`}>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Download Patch
              </Button>
            </Link>
            <Link href="/security/report">
              <Button variant="outline">
                Report Issue
              </Button>
            </Link>
            <Link href={`/security/advisories/${advisory.id}.pdf`}>
              <Button variant="outline">
                Download PDF
              </Button>
            </Link>
          </div>
        </div>
      </Card>

      {/* Advisory Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Overview */}
          <Card className="p-6 bg-gray-800/50 border-gray-700">
            <h2 className="text-xl font-semibold mb-4">Overview</h2>
            <p className="text-gray-300">{advisory.details}</p>
          </Card>

          {/* Impact & Mitigation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 bg-gray-800/50 border-gray-700">
              <h2 className="text-xl font-semibold mb-4">Impact</h2>
              <p className="text-gray-300">{advisory.impact}</p>
            </Card>

            <Card className="p-6 bg-gray-800/50 border-gray-700">
              <h2 className="text-xl font-semibold mb-4">Mitigation</h2>
              <p className="text-gray-300">{advisory.mitigation}</p>
            </Card>
          </div>

          {/* Timeline */}
          <Card className="p-6 bg-gray-800/50 border-gray-700">
            <h2 className="text-xl font-semibold mb-4">Timeline</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Event</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {advisory.timeline.map((event, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-mono">{event.date}</TableCell>
                    <TableCell>{event.event}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>

          {/* Credits */}
          <Card className="p-6 bg-gray-800/50 border-gray-700">
            <h2 className="text-xl font-semibold mb-4">Credits</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {advisory.credits.map((credit, index) => (
                <li key={index}>{credit}</li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Technical Details */}
          <Card className="p-6 bg-gray-800/50 border-gray-700">
            <h2 className="text-xl font-semibold mb-4">Technical Details</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Affected Versions</h3>
                <p className="text-gray-300">{advisory.affected}</p>
              </div>

              {advisory.cve && (
                <div>
                  <h3 className="font-semibold mb-2">CVE ID</h3>
                  <Link 
                    href={`https://cve.mitre.org/cgi-bin/cvename.cgi?name=${advisory.cve}`}
                    className="text-blue-400 hover:text-blue-300"
                  >
                    {advisory.cve}
                  </Link>
                </div>
              )}

              {advisory.cvss && (
                <div>
                  <h3 className="font-semibold mb-2">CVSS Score</h3>
                  <div className="flex items-center gap-2">
                    <Badge className={
                      advisory.cvss.score >= 9.0 ? "bg-red-900/50 text-red-300" :
                      advisory.cvss.score >= 7.0 ? "bg-orange-900/50 text-orange-300" :
                      advisory.cvss.score >= 4.0 ? "bg-yellow-900/50 text-yellow-300" :
                      "bg-blue-900/50 text-blue-300"
                    }>
                      {advisory.cvss.score}
                    </Badge>
                    <span className="text-sm text-gray-400">
                      {advisory.cvss.vector}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* References */}
          <Card className="p-6 bg-gray-800/50 border-gray-700">
            <h2 className="text-xl font-semibold mb-4">References</h2>
            <ul className="space-y-2">
              {advisory.references.map((ref, index) => (
                <li key={index}>
                  <Link 
                    href={ref}
                    className="text-blue-400 hover:text-blue-300 break-all"
                  >
                    {ref}
                  </Link>
                </li>
              ))}
            </ul>
          </Card>

          {/* Related Advisories */}
          <Card className="p-6 bg-gray-800/50 border-gray-700">
            <h2 className="text-xl font-semibold mb-4">Related Advisories</h2>
            <div className="space-y-3">
              <Link href="/security/advisories/VPN-2023-005">
                <Card className="p-3 bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge className="bg-orange-900/50 text-orange-300">High</Badge>
                    <span className="text-sm text-gray-400">Dec 10, 2023</span>
                  </div>
                  <p className="text-sm">DNS Leak Prevention Update</p>
                </Card>
              </Link>
              <Link href="/security/advisories/VPN-2023-004">
                <Card className="p-3 bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge className="bg-yellow-900/50 text-yellow-300">Medium</Badge>
                    <span className="text-sm text-gray-400">Nov 5, 2023</span>
                  </div>
                  <p className="text-sm">Authentication Token Handling</p>
                </Card>
              </Link>
            </div>
          </Card>
        </div>
      </div>

      {/* Actions */}
      <Card className="mt-8 p-6 bg-gray-800/50 border-gray-700">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-6">Need Assistance?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/support">
              <Button variant="outline">
                Technical Support
              </Button>
            </Link>
            <Link href="/security/report">
              <Button variant="outline">
                Report Related Issue
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline">
                Contact Security Team
              </Button>
            </Link>
          </div>
        </div>
      </Card>

      {/* RSS Feed */}
      <div className="mt-8 text-center text-sm text-gray-400">
        <p>
          Stay updated with our{" "}
          <Link 
            href="/security/advisories/rss"
            className="text-blue-400 hover:text-blue-300"
          >
            RSS feed
          </Link>
          {" "}for security advisory notifications.
        </p>
      </div>
    </div>
  )
}

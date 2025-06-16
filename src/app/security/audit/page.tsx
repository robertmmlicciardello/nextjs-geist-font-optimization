import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function Audit() {
  const latestAudit = {
    date: "January 2024",
    auditor: "SecureAudit Inc",
    scope: [
      "VPN Infrastructure",
      "Client Applications",
      "Authentication Systems",
      "Encryption Implementation",
      "Privacy Controls"
    ],
    findings: {
      critical: 0,
      high: 0,
      medium: 2,
      low: 3,
      info: 5
    },
    resolution: "All identified issues have been addressed and verified"
  }

  const auditHistory = [
    {
      date: "January 2024",
      auditor: "SecureAudit Inc",
      type: "Full Infrastructure",
      findings: "5 findings - All Resolved",
      report: "Available"
    },
    {
      date: "October 2023",
      auditor: "PrivacyGuard Labs",
      type: "No-Logs Policy",
      findings: "0 findings",
      report: "Available"
    },
    {
      date: "July 2023",
      auditor: "CyberSec Experts",
      type: "Application Security",
      findings: "3 findings - All Resolved",
      report: "Available"
    },
    {
      date: "April 2023",
      auditor: "SecureAudit Inc",
      type: "Full Infrastructure",
      findings: "4 findings - All Resolved",
      report: "Available"
    }
  ]

  const improvements = [
    {
      category: "Infrastructure",
      changes: [
        "Implemented additional server hardening measures",
        "Enhanced DDoS protection systems",
        "Upgraded encryption key management",
        "Improved server monitoring capabilities"
      ]
    },
    {
      category: "Applications",
      changes: [
        "Strengthened authentication mechanisms",
        "Enhanced data validation processes",
        "Improved error handling",
        "Added additional security headers"
      ]
    },
    {
      category: "Processes",
      changes: [
        "Updated security incident response procedures",
        "Enhanced monitoring and alerting systems",
        "Improved security testing protocols",
        "Strengthened access control policies"
      ]
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
          <h1 className="text-4xl font-bold mb-6">Security Audit Results</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Regular independent security audits demonstrate our commitment to maintaining the highest security standards.
          </p>
        </div>

        {/* Latest Audit Summary */}
        <Card className="p-8 bg-gray-800/50 border-gray-700 mb-16">
          <h2 className="text-2xl font-bold mb-6">Latest Audit Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Audit Information</h3>
                <div className="space-y-2 text-gray-300">
                  <p><span className="text-gray-400">Date:</span> {latestAudit.date}</p>
                  <p><span className="text-gray-400">Auditor:</span> {latestAudit.auditor}</p>
                  <p><span className="text-gray-400">Resolution:</span> {latestAudit.resolution}</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Audit Scope</h3>
                <ul className="space-y-1">
                  {latestAudit.scope.map((item, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <span className="text-blue-400 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Findings Summary</h3>
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 bg-gray-700/30 border-gray-600">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-400">{latestAudit.findings.critical}</div>
                    <div className="text-sm text-gray-400">Critical</div>
                  </div>
                </Card>
                <Card className="p-4 bg-gray-700/30 border-gray-600">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-400">{latestAudit.findings.high}</div>
                    <div className="text-sm text-gray-400">High</div>
                  </div>
                </Card>
                <Card className="p-4 bg-gray-700/30 border-gray-600">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">{latestAudit.findings.medium}</div>
                    <div className="text-sm text-gray-400">Medium</div>
                  </div>
                </Card>
                <Card className="p-4 bg-gray-700/30 border-gray-600">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">{latestAudit.findings.low}</div>
                    <div className="text-sm text-gray-400">Low</div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </Card>

        {/* Audit History */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Audit History</h2>
          <Card className="bg-gray-800/50 border-gray-700">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Auditor</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Findings</TableHead>
                  <TableHead>Report</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {auditHistory.map((audit, index) => (
                  <TableRow key={index}>
                    <TableCell>{audit.date}</TableCell>
                    <TableCell>{audit.auditor}</TableCell>
                    <TableCell>{audit.type}</TableCell>
                    <TableCell>{audit.findings}</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        Download
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>

        <Separator className="my-8" />

        {/* Security Improvements */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Security Improvements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {improvements.map((section, index) => (
              <Card key={index} className="p-6 bg-gray-800/50 border-gray-700">
                <h3 className="text-xl font-semibold mb-4">{section.category}</h3>
                <ul className="space-y-2">
                  {section.changes.map((change, changeIndex) => (
                    <li key={changeIndex} className="flex items-start text-gray-300">
                      <span className="text-green-400 mr-2">✓</span>
                      {change}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        {/* Commitment to Security */}
        <Card className="p-8 bg-gray-800/50 border-gray-700">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">Our Commitment to Security</h2>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
              We are committed to maintaining the highest security standards through regular audits, continuous improvements, and transparent reporting of our security measures.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/security/whitepaper">
                <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
                  Read Security Whitepaper
                </Button>
              </Link>
              <Link href="/security/bug-bounty">
                <Button variant="outline" className="w-full sm:w-auto">
                  Join Bug Bounty Program
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

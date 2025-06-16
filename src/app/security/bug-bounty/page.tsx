import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function BugBounty() {
  const rewards = [
    {
      severity: "Critical",
      description: "Remote code execution, user data exposure, authentication bypass",
      range: "$5,000 - $10,000"
    },
    {
      severity: "High",
      description: "SQL injection, stored XSS, session hijacking",
      range: "$2,000 - $5,000"
    },
    {
      severity: "Medium",
      description: "Reflected XSS, CSRF with impact, sensitive info disclosure",
      range: "$500 - $2,000"
    },
    {
      severity: "Low",
      description: "Minor security misconfigurations, low-impact vulnerabilities",
      range: "$100 - $500"
    }
  ]

  const scope = {
    inScope: [
      "VPN applications (Windows, macOS, Linux, iOS, Android)",
      "Web dashboard and control panel",
      "API endpoints",
      "VPN server infrastructure",
      "Authentication systems",
      "Payment systems"
    ],
    outOfScope: [
      "Denial of Service (DoS) attacks",
      "Social engineering attacks",
      "Physical security attacks",
      "Third-party applications",
      "Recently reported vulnerabilities",
      "Theoretical vulnerabilities without POC"
    ]
  }

  const hallOfFame = [
    {
      date: "December 2023",
      researcher: "Alice Security",
      finding: "Critical authentication vulnerability",
      reward: "$8,500"
    },
    {
      date: "November 2023",
      researcher: "Bob DefenseLabs",
      finding: "High-severity API exposure",
      reward: "$4,000"
    },
    {
      date: "October 2023",
      researcher: "Charlie SecureNet",
      finding: "Medium-impact data validation issue",
      reward: "$1,500"
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
          <h1 className="text-4xl font-bold mb-6">Bug Bounty Program</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Help us improve our security. Find vulnerabilities, report them responsibly, and earn rewards for your contributions.
          </p>
          <div className="mt-8">
            <Link href="/security/report">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Submit Vulnerability Report
              </Button>
            </Link>
          </div>
        </div>

        {/* Reward Table */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Reward Structure</h2>
          <Card className="bg-gray-800/50 border-gray-700">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Severity</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Reward Range</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rewards.map((reward) => (
                  <TableRow key={reward.severity}>
                    <TableCell className="font-medium">{reward.severity}</TableCell>
                    <TableCell>{reward.description}</TableCell>
                    <TableCell>{reward.range}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>

        {/* Scope */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Program Scope</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 bg-gray-800/50 border-gray-700">
              <h3 className="text-xl font-semibold mb-4">In Scope</h3>
              <ul className="space-y-2">
                {scope.inScope.map((item, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <span className="text-green-400 mr-2">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="p-6 bg-gray-800/50 border-gray-700">
              <h3 className="text-xl font-semibold mb-4">Out of Scope</h3>
              <ul className="space-y-2">
                {scope.outOfScope.map((item, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <span className="text-red-400 mr-2">×</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Hall of Fame */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Hall of Fame</h2>
          <div className="space-y-6">
            {hallOfFame.map((entry, index) => (
              <Card key={index} className="p-6 bg-gray-800/50 border-gray-700">
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">{entry.date}</div>
                    <h3 className="font-semibold mb-1">{entry.researcher}</h3>
                    <p className="text-gray-300">{entry.finding}</p>
                  </div>
                  <div className="text-blue-400 font-semibold">{entry.reward}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Reporting Guidelines */}
        <Card className="p-8 bg-gray-800/50 border-gray-700 mb-16">
          <h2 className="text-2xl font-bold mb-6">Reporting Guidelines</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Report Requirements</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Detailed description of the vulnerability</li>
                <li>Step-by-step reproduction instructions</li>
                <li>Proof of Concept (POC)</li>
                <li>Impact assessment</li>
                <li>Suggested fix (optional)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Response Timeline</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Initial response within 24 hours</li>
                <li>Vulnerability triage within 3 business days</li>
                <li>Regular updates on fix progress</li>
                <li>Reward payment within 30 days of verification</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Safe Harbor */}
        <Card className="p-8 bg-gray-800/50 border-gray-700">
          <h2 className="text-2xl font-bold mb-6">Safe Harbor</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              We will not take legal action against you or share your personal information if you:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Follow our responsible disclosure policy</li>
              <li>Do not compromise user data</li>
              <li>Do not disrupt our services</li>
              <li>Report the vulnerability promptly</li>
              <li>Keep vulnerability details confidential until fixed</li>
            </ul>
          </div>
        </Card>

        {/* Contact Information */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-6">Questions?</h2>
          <p className="text-gray-300 mb-8">
            Contact our security team at security@vpanvpn.com
            <br />
            PGP Key available on our security keyserver
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/security/pgp-key">
              <Button variant="outline">Download PGP Key</Button>
            </Link>
            <Link href="/security">
              <Button variant="outline">Security Policy</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

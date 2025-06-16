import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function Security() {
  const securityFeatures = [
    {
      category: "Encryption",
      features: [
        {
          name: "AES-256 Encryption",
          description: "Military-grade encryption for all data transmission"
        },
        {
          name: "Perfect Forward Secrecy",
          description: "Unique session keys for enhanced security"
        },
        {
          name: "ChaCha20 Support",
          description: "Alternative encryption for mobile devices"
        }
      ]
    },
    {
      category: "Privacy",
      features: [
        {
          name: "No-Logs Policy",
          description: "We never track, store, or share your data"
        },
        {
          name: "DNS Leak Protection",
          description: "Prevents DNS requests from revealing your activity"
        },
        {
          name: "Kill Switch",
          description: "Automatically blocks internet if VPN disconnects"
        }
      ]
    },
    {
      category: "Infrastructure",
      features: [
        {
          name: "RAM-Only Servers",
          description: "No data persistence on VPN servers"
        },
        {
          name: "Multi-Hop Connections",
          description: "Route through multiple servers for added privacy"
        },
        {
          name: "Private DNS",
          description: "Secure DNS resolution on our infrastructure"
        }
      ]
    }
  ]

  const auditHistory = [
    {
      date: "January 2024",
      auditor: "SecureAudit Inc",
      scope: "Infrastructure & Systems",
      result: "Passed"
    },
    {
      date: "October 2023",
      auditor: "PrivacyGuard Labs",
      scope: "No-Logs Policy",
      result: "Verified"
    },
    {
      date: "July 2023",
      auditor: "CyberSec Experts",
      scope: "Application Security",
      result: "Passed"
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
              <Link href="/about" className="text-gray-400 hover:text-white">
                About
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
          <h1 className="text-4xl font-bold mb-6">Security & Privacy</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Your privacy and security are our top priorities. Learn about our comprehensive security measures and privacy protections.
          </p>
        </div>

        {/* Security Features */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Security Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {securityFeatures.map((category) => (
              <Card key={category.category} className="p-6 bg-gray-800/50 border-gray-700">
                <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
                <div className="space-y-4">
                  {category.features.map((feature) => (
                    <div key={feature.name}>
                      <h4 className="font-semibold text-blue-400 mb-1">{feature.name}</h4>
                      <p className="text-gray-300 text-sm">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        <Separator className="my-8" />

        {/* Independent Audits */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Independent Security Audits</h2>
          <Card className="bg-gray-800/50 border-gray-700">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Auditor</TableHead>
                  <TableHead>Scope</TableHead>
                  <TableHead>Result</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {auditHistory.map((audit) => (
                  <TableRow key={audit.date}>
                    <TableCell>{audit.date}</TableCell>
                    <TableCell>{audit.auditor}</TableCell>
                    <TableCell>{audit.scope}</TableCell>
                    <TableCell>
                      <span className="text-green-400">{audit.result}</span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>

        {/* Privacy Commitment */}
        <Card className="p-8 bg-gray-800/50 border-gray-700 mb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Our Privacy Commitment</h2>
            <div className="space-y-4">
              <p className="text-gray-300">
                We believe privacy is a fundamental human right. Our commitment to your privacy includes:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Strict no-logs policy</li>
                <li>Regular independent audits</li>
                <li>Transparency reports</li>
                <li>Open-source components</li>
                <li>Regular security updates</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Technical Details */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 bg-gray-800/50 border-gray-700">
              <h3 className="text-xl font-semibold mb-4">Encryption Standards</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• AES-256-GCM encryption</li>
                <li>• RSA-4096 handshake</li>
                <li>• SHA-512 authentication</li>
                <li>• Perfect forward secrecy</li>
              </ul>
            </Card>
            <Card className="p-6 bg-gray-800/50 border-gray-700">
              <h3 className="text-xl font-semibold mb-4">Protocols</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• OpenVPN (TCP/UDP)</li>
                <li>• IKEv2/IPsec</li>
                <li>• WireGuard®</li>
                <li>• Custom stealth protocol</li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Bug Bounty */}
        <Card className="p-8 bg-gray-800/50 border-gray-700 mb-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">Bug Bounty Program</h2>
            <p className="text-gray-300 mb-8">
              Help us improve our security. Report vulnerabilities and earn rewards through our bug bounty program.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/security/bug-bounty">
                <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
                  View Bug Bounty Program
                </Button>
              </Link>
              <Link href="/security/report">
                <Button variant="outline" className="w-full sm:w-auto">
                  Report Vulnerability
                </Button>
              </Link>
            </div>
          </div>
        </Card>

        {/* Security Contacts */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Security Contacts</h2>
          <div className="space-y-2 mb-8">
            <p className="text-gray-300">
              Security Team: security@vpanvpn.com
            </p>
            <p className="text-gray-300">
              PGP Key: Available on our security keyserver
            </p>
          </div>
          <div className="flex justify-center items-center space-x-4">
            <Link 
              href="/security/pgp-key"
              className="text-blue-400 hover:text-blue-300"
            >
              Download PGP Key
            </Link>
            <span className="text-gray-700">|</span>
            <Link 
              href="/security/transparency"
              className="text-blue-400 hover:text-blue-300"
            >
              Transparency Report
            </Link>
            <span className="text-gray-700">|</span>
            <Link 
              href="/security/whitepaper"
              className="text-blue-400 hover:text-blue-300"
            >
              Security Whitepaper
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

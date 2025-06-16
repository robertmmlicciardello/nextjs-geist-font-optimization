import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function PGPKeyArchive() {
  const archivedKeys = [
    {
      period: "2022-2024",
      keyId: "0xDEF9876543210",
      fingerprint: "FEDC BA98 7654 3210 FEDC BA98 7654 3210 FEDC BA98",
      status: "Expired",
      email: "security@vpanvpn.com",
      notes: "Used for general security communications"
    },
    {
      period: "2020-2022",
      keyId: "0xABC1234567890",
      fingerprint: "ABCD EF01 2345 6789 ABCD EF01 2345 6789 ABCD EF01",
      status: "Expired",
      email: "security@vpanvpn.com",
      notes: "Initial security team key"
    },
    {
      period: "2021-2023",
      keyId: "0x9876543210ABC",
      fingerprint: "9876 5432 10FE DCBA 9876 5432 10FE DCBA 9876 5432",
      status: "Revoked",
      email: "bounty@vpanvpn.com",
      notes: "Dedicated bug bounty program key"
    }
  ]

  const keyTransitions = [
    {
      date: "January 1, 2024",
      action: "New key generation",
      details: "Created current security team key"
    },
    {
      date: "December 15, 2023",
      action: "Key expiration notice",
      details: "Announced upcoming expiration of 2022-2024 key"
    },
    {
      date: "June 15, 2023",
      action: "Key revocation",
      details: "Bug bounty program key revoked and replaced"
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
              <Link href="/security/pgp-key" className="text-gray-400 hover:text-white">
                Current Key
              </Link>
              <Link href="/security" className="text-gray-400 hover:text-white">
                Security
              </Link>
            </nav>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">PGP Key Archive</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Historical record of our previous PGP keys and key transitions.
          </p>
        </div>

        {/* Archive Notice */}
        <Card className="p-6 bg-gray-800/50 border-gray-700 mb-8">
          <div className="flex items-start space-x-4">
            <div className="flex-1">
              <h3 className="font-semibold mb-2">Important Notice</h3>
              <p className="text-gray-300 text-sm">
                These keys are no longer active. For current communications, please use our{" "}
                <Link href="/security/pgp-key" className="text-blue-400 hover:text-blue-300">
                  current PGP key
                </Link>.
              </p>
            </div>
          </div>
        </Card>

        {/* Archived Keys */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Archived Keys</h2>
          <Card className="bg-gray-800/50 border-gray-700">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Period</TableHead>
                  <TableHead>Key ID</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {archivedKeys.map((key) => (
                  <TableRow key={key.keyId}>
                    <TableCell>{key.period}</TableCell>
                    <TableCell className="font-mono">{key.keyId}</TableCell>
                    <TableCell>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                        key.status === 'Revoked' 
                          ? 'bg-red-900/50 text-red-300' 
                          : 'bg-yellow-900/50 text-yellow-300'
                      }`}>
                        {key.status}
                      </span>
                    </TableCell>
                    <TableCell className="font-mono text-sm">{key.email}</TableCell>
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

        {/* Key Details */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Detailed Key Information</h2>
          <div className="grid gap-6">
            {archivedKeys.map((key) => (
              <Card key={key.keyId} className="p-6 bg-gray-800/50 border-gray-700">
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-400">Period</div>
                    <div className="font-semibold">{key.period}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Key ID</div>
                    <div className="font-mono">{key.keyId}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Fingerprint</div>
                    <div className="font-mono break-all">{key.fingerprint}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Notes</div>
                    <div className="text-gray-300">{key.notes}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Transitions */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Key Transition History</h2>
          <div className="space-y-6">
            {keyTransitions.map((transition, index) => (
              <Card key={index} className="p-6 bg-gray-800/50 border-gray-700">
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">{transition.date}</div>
                    <h3 className="font-semibold mb-2">{transition.action}</h3>
                    <p className="text-gray-300">{transition.details}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Verification Notice */}
        <Card className="p-8 bg-gray-800/50 border-gray-700">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">Key Verification</h2>
            <p className="text-gray-300 mb-8">
              All archived keys are signed by our current key. You can verify the signatures to ensure authenticity.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/security/pgp-guide">
                <Button variant="outline" className="w-full sm:w-auto">
                  Key Verification Guide
                </Button>
              </Link>
              <Link href="/security/report">
                <Button variant="outline" className="w-full sm:w-auto">
                  Report Key Issues
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

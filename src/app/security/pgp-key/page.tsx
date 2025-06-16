import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function PGPKey() {
  const pgpDetails = {
    keyId: "0xABCD1234EFGH5678",
    fingerprint: "1234 5678 90AB CDEF 1234 5678 90AB CDEF 1234 5678",
    created: "January 1, 2024",
    expires: "January 1, 2026",
    type: "RSA 4096-bit",
    usage: "Encryption and Signing",
    email: "security@vpanvpn.com"
  }

  const keyUsage = [
    {
      purpose: "Vulnerability Reports",
      description: "Encrypt sensitive security vulnerability reports",
      email: "security@vpanvpn.com"
    },
    {
      purpose: "Bug Bounty Submissions",
      description: "Secure submission of bug bounty findings",
      email: "bounty@vpanvpn.com"
    },
    {
      purpose: "Security Communications",
      description: "General encrypted security communications",
      email: "security@vpanvpn.com"
    }
  ]

  const verificationSteps = [
    "Download our PGP public key",
    "Import the key into your PGP software",
    "Verify the key fingerprint",
    "Encrypt your message using our public key",
    "Send the encrypted message via email"
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
          <h1 className="text-4xl font-bold mb-6">PGP Public Key</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Use our PGP public key to send encrypted communications and security reports.
          </p>
          <div className="mt-8">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Download PGP Public Key
            </Button>
          </div>
        </div>

        {/* Key Details */}
        <Card className="p-8 bg-gray-800/50 border-gray-700 mb-16">
          <h2 className="text-2xl font-bold mb-6">Key Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <div className="text-sm text-gray-400">Key ID</div>
                <div className="font-mono">{pgpDetails.keyId}</div>
              </div>
              <div>
                <div className="text-sm text-gray-400">Fingerprint</div>
                <div className="font-mono break-all">{pgpDetails.fingerprint}</div>
              </div>
              <div>
                <div className="text-sm text-gray-400">Created</div>
                <div>{pgpDetails.created}</div>
              </div>
              <div>
                <div className="text-sm text-gray-400">Expires</div>
                <div>{pgpDetails.expires}</div>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <div className="text-sm text-gray-400">Type</div>
                <div>{pgpDetails.type}</div>
              </div>
              <div>
                <div className="text-sm text-gray-400">Usage</div>
                <div>{pgpDetails.usage}</div>
              </div>
              <div>
                <div className="text-sm text-gray-400">Email</div>
                <div>{pgpDetails.email}</div>
              </div>
            </div>
          </div>
        </Card>

        {/* Key Usage */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Key Usage</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {keyUsage.map((usage, index) => (
              <Card key={index} className="p-6 bg-gray-800/50 border-gray-700">
                <h3 className="text-xl font-semibold mb-2">{usage.purpose}</h3>
                <p className="text-gray-300 mb-4">{usage.description}</p>
                <p className="text-sm text-gray-400 font-mono">{usage.email}</p>
              </Card>
            ))}
          </div>
        </div>

        <Separator className="my-8" />

        {/* Verification Steps */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">How to Use Our PGP Key</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {verificationSteps.map((step, index) => (
              <Card key={index} className="p-6 bg-gray-800/50 border-gray-700">
                <div className="text-3xl font-bold text-blue-400 mb-4">{index + 1}</div>
                <p className="text-gray-300">{step}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Text */}
        <Card className="p-6 bg-gray-800/50 border-gray-700 mb-16">
          <h2 className="text-2xl font-bold mb-6">Public Key</h2>
          <div className="bg-gray-700/30 p-4 rounded-lg">
            <pre className="text-gray-300 font-mono text-sm overflow-x-auto whitespace-pre-wrap">
{`-----BEGIN PGP PUBLIC KEY BLOCK-----

mQINBGXXXXXBEACnXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

-----END PGP PUBLIC KEY BLOCK-----`}
            </pre>
          </div>
        </Card>

        {/* Additional Resources */}
        <Card className="p-8 bg-gray-800/50 border-gray-700">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">Additional Resources</h2>
            <div className="space-y-4 max-w-2xl mx-auto">
              <p className="text-gray-300">
                Need help with PGP encryption? Check out these resources:
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/security/pgp-guide">
                  <Button variant="outline" className="w-full sm:w-auto">
                    PGP Usage Guide
                  </Button>
                </Link>
                <Link href="/security/report">
                  <Button variant="outline" className="w-full sm:w-auto">
                    Report Security Issue
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="w-full sm:w-auto">
                    Contact Support
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Card>

        {/* Key Rotation Notice */}
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>
            Our PGP keys are rotated every 2 years. The current key is valid until {pgpDetails.expires}.
            <br />
            Previous keys are available in our{" "}
            <Link 
              href="/security/pgp-key/archive"
              className="text-blue-400 hover:text-blue-300"
            >
              key archive
            </Link>.
          </p>
        </div>
      </div>
    </div>
  )
}

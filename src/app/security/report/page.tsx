import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

export default function Report() {
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
              <Link href="/security/bug-bounty" className="text-gray-400 hover:text-white">
                Bug Bounty
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
          <h1 className="text-4xl font-bold mb-6">Report Vulnerability</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Thank you for helping us improve our security. Please provide detailed information about the vulnerability you've discovered.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Encrypted Submission Notice */}
          <Card className="p-6 bg-gray-800/50 border-gray-700 mb-8">
            <div className="flex items-start space-x-4">
              <div className="flex-1">
                <h3 className="font-semibold mb-2">Encrypted Submission</h3>
                <p className="text-gray-300 text-sm">
                  For sensitive vulnerabilities, please encrypt your report using our PGP key.
                  <br />
                  Fingerprint: 1234 5678 90AB CDEF 1234 5678 90AB CDEF 1234 5678
                </p>
              </div>
              <Link href="/security/pgp-key">
                <Button variant="outline" size="sm">
                  Download PGP Key
                </Button>
              </Link>
            </div>
          </Card>

          {/* Report Form */}
          <Card className="p-8 bg-gray-800/50 border-gray-700">
            <form className="space-y-8">
              {/* Reporter Information */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold">Reporter Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name/Handle</Label>
                    <Input
                      id="name"
                      placeholder="Your name or security handle"
                      className="bg-gray-700/50 border-gray-600"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="bg-gray-700/50 border-gray-600"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pgp">PGP Key (Optional)</Label>
                  <Textarea
                    id="pgp"
                    placeholder="Paste your PGP public key here"
                    className="bg-gray-700/50 border-gray-600 h-32"
                  />
                </div>
              </div>

              <Separator />

              {/* Vulnerability Details */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold">Vulnerability Details</h2>

                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    placeholder="Brief description of the vulnerability"
                    className="bg-gray-700/50 border-gray-600"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="type">Vulnerability Type</Label>
                    <Select>
                      <SelectTrigger className="bg-gray-700/50 border-gray-600">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="rce">Remote Code Execution</SelectItem>
                        <SelectItem value="sqli">SQL Injection</SelectItem>
                        <SelectItem value="xss">Cross-Site Scripting</SelectItem>
                        <SelectItem value="csrf">CSRF</SelectItem>
                        <SelectItem value="auth">Authentication Bypass</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="severity">Estimated Severity</Label>
                    <Select>
                      <SelectTrigger className="bg-gray-700/50 border-gray-600">
                        <SelectValue placeholder="Select severity" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="critical">Critical</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="low">Low</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="affected">Affected Component/URL</Label>
                  <Input
                    id="affected"
                    placeholder="e.g., https://vpanvpn.com/api/endpoint or VPN Client v2.1.0"
                    className="bg-gray-700/50 border-gray-600"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Detailed Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Provide a detailed description of the vulnerability"
                    className="bg-gray-700/50 border-gray-600 h-32"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="steps">Steps to Reproduce</Label>
                  <Textarea
                    id="steps"
                    placeholder="Provide detailed steps to reproduce the vulnerability"
                    className="bg-gray-700/50 border-gray-600 h-32"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="impact">Security Impact</Label>
                  <Textarea
                    id="impact"
                    placeholder="Describe the potential impact if this vulnerability were to be exploited"
                    className="bg-gray-700/50 border-gray-600 h-32"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="poc">Proof of Concept</Label>
                  <Textarea
                    id="poc"
                    placeholder="Provide any proof of concept code, screenshots, or additional evidence"
                    className="bg-gray-700/50 border-gray-600 h-32"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fix">Suggested Fix (Optional)</Label>
                  <Textarea
                    id="fix"
                    placeholder="If you have suggestions for fixing the vulnerability, please provide them here"
                    className="bg-gray-700/50 border-gray-600 h-32"
                  />
                </div>
              </div>

              <Separator />

              {/* Additional Information */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold">Additional Information</h2>

                <div className="space-y-2">
                  <Label htmlFor="additional">Additional Notes</Label>
                  <Textarea
                    id="additional"
                    placeholder="Any additional information that might be helpful"
                    className="bg-gray-700/50 border-gray-600 h-32"
                  />
                </div>
              </div>

              {/* Terms */}
              <div className="space-y-4">
                <p className="text-sm text-gray-400">
                  By submitting this report, you agree to our{" "}
                  <Link href="/security/bug-bounty" className="text-blue-400 hover:text-blue-300">
                    bug bounty program terms
                  </Link>
                  {" "}and{" "}
                  <Link href="/security" className="text-blue-400 hover:text-blue-300">
                    responsible disclosure policy
                  </Link>.
                </p>

                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Submit Report
                </Button>
              </div>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="mt-8 text-center text-sm text-gray-400">
            <p>
              Questions about the vulnerability reporting process?{" "}
              <Link 
                href="/contact"
                className="text-blue-400 hover:text-blue-300"
              >
                Contact our security team
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

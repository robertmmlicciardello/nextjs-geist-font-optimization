import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function Privacy() {
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
              <Link href="/support" className="text-gray-400 hover:text-white">
                Support
              </Link>
              <Link href="/dashboard" className="text-gray-400 hover:text-white">
                Dashboard
              </Link>
            </nav>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto p-8 bg-gray-800/50 border-gray-700">
          <div className="prose prose-invert max-w-none">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-gray-400 mb-8">
              Last updated: January 20, 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Our Commitment to Privacy</h2>
              <p className="text-gray-300">
                At vPan VPN, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our VPN services and websites.
              </p>
            </section>

            <Separator className="my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">2.1 Account Information</h3>
                  <p className="text-gray-300">
                    When you create an account, we collect:
                  </p>
                  <ul className="list-disc pl-6 text-gray-300 mt-2 space-y-1">
                    <li>Email address</li>
                    <li>Username</li>
                    <li>Payment information (processed securely by our payment providers)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">2.2 Usage Information</h3>
                  <p className="text-gray-300">
                    We maintain minimal usage logs, limited to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-300 mt-2 space-y-1">
                    <li>Server load information</li>
                    <li>Aggregate bandwidth usage</li>
                    <li>Connection timestamps (without IP addresses)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">2.3 What We Don't Collect</h3>
                  <p className="text-gray-300">
                    We do not collect or store:
                  </p>
                  <ul className="list-disc pl-6 text-gray-300 mt-2 space-y-1">
                    <li>Your browsing history</li>
                    <li>Traffic destination</li>
                    <li>DNS queries</li>
                    <li>IP addresses</li>
                    <li>Connection timestamps tied to identifiable information</li>
                  </ul>
                </div>
              </div>
            </section>

            <Separator className="my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
              <div className="space-y-4">
                <p className="text-gray-300">
                  We use your information to:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Provide and maintain our VPN service</li>
                  <li>Process your payments</li>
                  <li>Send service updates and administrative messages</li>
                  <li>Improve our services</li>
                  <li>Respond to your support requests</li>
                </ul>
              </div>
            </section>

            <Separator className="my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
              <div className="space-y-4">
                <p className="text-gray-300">
                  We implement industry-standard security measures to protect your data:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>AES-256 encryption for all VPN connections</li>
                  <li>Secure server infrastructure</li>
                  <li>Regular security audits</li>
                  <li>Strict access controls</li>
                </ul>
              </div>
            </section>

            <Separator className="my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Data Retention</h2>
              <p className="text-gray-300">
                We retain account information for as long as your account is active. You can request deletion of your account and associated data at any time. Minimal usage logs are automatically deleted after 24 hours.
              </p>
            </section>

            <Separator className="my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
              <div className="space-y-4">
                <p className="text-gray-300">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to data processing</li>
                  <li>Export your data</li>
                </ul>
              </div>
            </section>

            <Separator className="my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Contact Information</h2>
              <p className="text-gray-300">
                For privacy-related inquiries, contact our Data Protection Officer:
              </p>
              <div className="mt-4 space-y-2 text-gray-300">
                <p>Email: privacy@vpanvpn.com</p>
                <p>Address: 123 Privacy Street, Secure City, SC 12345</p>
              </div>
            </section>

            {/* Action Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/register">
                <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
                  Accept & Create Account
                </Button>
              </Link>
              <Link href="/terms">
                <Button variant="outline" className="w-full sm:w-auto">
                  View Terms of Service
                </Button>
              </Link>
            </div>
          </div>
        </Card>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>
            Questions about our privacy practices?{" "}
            <Link 
              href="/support"
              className="text-blue-400 hover:text-blue-300"
            >
              Contact our support team
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

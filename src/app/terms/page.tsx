import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function Terms() {
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
            <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
            <p className="text-gray-400 mb-8">
              Last updated: January 20, 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-gray-300 mb-4">
                Welcome to vPan VPN. By using our service, you agree to these terms. Please read them carefully.
              </p>
              <p className="text-gray-300">
                These Terms of Service ("Terms") govern your access to and use of vPan VPN's services, including our website, mobile applications, and VPN services (collectively, the "Services").
              </p>
            </section>

            <Separator className="my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Using Our Services</h2>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">2.1 Account Creation</h3>
                <p className="text-gray-300">
                  You must provide accurate information when creating an account. You are responsible for maintaining the security of your account credentials.
                </p>

                <h3 className="text-xl font-semibold">2.2 Service Usage</h3>
                <p className="text-gray-300">
                  Our VPN service must be used in compliance with all applicable laws. Prohibited activities include:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Spamming or sending unsolicited messages</li>
                  <li>Hacking or unauthorized system access</li>
                  <li>Distribution of malware or harmful code</li>
                  <li>Copyright infringement or piracy</li>
                  <li>Harassment or abuse of others</li>
                </ul>
              </div>
            </section>

            <Separator className="my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Privacy & Security</h2>
              <div className="space-y-4">
                <p className="text-gray-300">
                  We take your privacy seriously. Our service operates under a strict no-logs policy. We do not monitor, record, or store logs of your online activities.
                </p>
                <p className="text-gray-300">
                  For complete information about our privacy practices, please review our{" "}
                  <Link href="/privacy" className="text-blue-400 hover:text-blue-300">
                    Privacy Policy
                  </Link>.
                </p>
              </div>
            </section>

            <Separator className="my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Subscription & Payments</h2>
              <div className="space-y-4">
                <p className="text-gray-300">
                  Subscription fees are billed in advance. You can cancel your subscription at any time, but refunds are provided only in accordance with our refund policy.
                </p>
                <p className="text-gray-300">
                  Premium features are available only to subscribers with active subscriptions.
                </p>
              </div>
            </section>

            <Separator className="my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Changes to Terms</h2>
              <p className="text-gray-300">
                We may modify these terms at any time. We will notify you of significant changes via email or through our service. Your continued use of our service after such modifications constitutes acceptance of the updated terms.
              </p>
            </section>

            <Separator className="my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
              <p className="text-gray-300">
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="mt-4 space-y-2 text-gray-300">
                <p>Email: support@vpanvpn.com</p>
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
              <Link href="/privacy">
                <Button variant="outline" className="w-full sm:w-auto">
                  View Privacy Policy
                </Button>
              </Link>
            </div>
          </div>
        </Card>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>
            Need help? Contact our{" "}
            <Link 
              href="/support"
              className="text-blue-400 hover:text-blue-300"
            >
              support team
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

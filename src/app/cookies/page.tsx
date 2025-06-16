import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function Cookies() {
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
            <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>
            <p className="text-gray-400 mb-8">
              Last updated: January 20, 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. What Are Cookies?</h2>
              <p className="text-gray-300">
                Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences, analyzing site usage, and assisting with our marketing efforts.
              </p>
            </section>

            <Separator className="my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Types of Cookies We Use</h2>
              
              <div className="overflow-hidden rounded-lg border border-gray-700 mb-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[200px]">Type</TableHead>
                      <TableHead>Purpose</TableHead>
                      <TableHead className="w-[150px]">Duration</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Essential</TableCell>
                      <TableCell>Required for basic site functionality and security</TableCell>
                      <TableCell>Session - 1 year</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Functional</TableCell>
                      <TableCell>Remember your preferences and settings</TableCell>
                      <TableCell>30 days</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Analytics</TableCell>
                      <TableCell>Help us understand how visitors use our site</TableCell>
                      <TableCell>90 days</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Marketing</TableCell>
                      <TableCell>Track effectiveness of our marketing campaigns</TableCell>
                      <TableCell>180 days</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">2.1 Essential Cookies</h3>
                  <p className="text-gray-300">
                    These cookies are necessary for the website to function properly. They enable basic functions like page navigation, secure areas access, and session management.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">2.2 Functional Cookies</h3>
                  <p className="text-gray-300">
                    These cookies enable us to personalize your experience by remembering your preferences and settings, such as language preference and VPN server selection.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">2.3 Analytics Cookies</h3>
                  <p className="text-gray-300">
                    We use analytics cookies to understand how visitors interact with our website. This helps us improve our services and user experience.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">2.4 Marketing Cookies</h3>
                  <p className="text-gray-300">
                    These cookies track your online activity to help advertisers deliver more relevant advertising or to limit how many times you see an ad.
                  </p>
                </div>
              </div>
            </section>

            <Separator className="my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Managing Cookies</h2>
              <div className="space-y-4">
                <p className="text-gray-300">
                  You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.
                </p>
                <p className="text-gray-300">
                  To modify your cookie settings, please visit your browser's preferences or settings menu:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Chrome: Settings → Privacy and Security → Cookies</li>
                  <li>Firefox: Options → Privacy & Security → Cookies</li>
                  <li>Safari: Preferences → Privacy → Cookies</li>
                  <li>Edge: Settings → Privacy & Security → Cookies</li>
                </ul>
              </div>
            </section>

            <Separator className="my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Third-Party Cookies</h2>
              <p className="text-gray-300">
                Some of our pages display content from external providers, such as YouTube, Facebook, and Twitter. To view this third-party content, you first have to accept their specific terms and conditions. This includes their cookie policies, which we have no control over.
              </p>
            </section>

            <Separator className="my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Updates to This Policy</h2>
              <p className="text-gray-300">
                We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <Separator className="my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
              <p className="text-gray-300">
                If you have any questions about our use of cookies, please contact us:
              </p>
              <div className="mt-4 space-y-2 text-gray-300">
                <p>Email: privacy@vpanvpn.com</p>
                <p>Address: 123 Privacy Street, Secure City, SC 12345</p>
              </div>
            </section>

            {/* Cookie Preferences */}
            <div className="mt-12 p-6 bg-gray-700/30 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Cookie Preferences</h3>
              <p className="text-gray-300 mb-6">
                You can adjust your cookie preferences at any time. Essential cookies cannot be disabled as they are required for the website to function properly.
              </p>
              <div className="space-y-4">
                <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
                  Manage Cookie Preferences
                </Button>
              </div>
            </div>

            {/* Related Links */}
            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/privacy">
                <Button variant="outline" className="w-full sm:w-auto">
                  Privacy Policy
                </Button>
              </Link>
              <Link href="/terms">
                <Button variant="outline" className="w-full sm:w-auto">
                  Terms of Service
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

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function RefundPolicy() {
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
              <Link href="/contact" className="text-gray-400 hover:text-white">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Card className="max-w-4xl mx-auto p-8 bg-gray-800/50 border-gray-700">
          <div className="prose prose-invert max-w-none">
            <h1 className="text-3xl font-bold mb-6">Refund Policy</h1>
            <p className="text-gray-400 mb-8">
              Last updated: January 20, 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">30-Day Money-Back Guarantee</h2>
              <p className="text-gray-300">
                We're confident you'll love our service. That's why we offer a 30-day money-back guarantee on all new subscriptions. If you're not completely satisfied with vPan VPN, you can request a full refund within 30 days of your initial purchase.
              </p>
            </section>

            <Separator className="my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Eligible Purchases</h2>
              <div className="space-y-4">
                <p className="text-gray-300">
                  Our refund policy applies to:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>New subscription purchases</li>
                  <li>Subscription upgrades</li>
                  <li>First-time premium feature purchases</li>
                </ul>
                <p className="text-gray-300">
                  Please note that recurring subscription renewals are not eligible for refunds after the first 30 days.
                </p>
              </div>
            </section>

            <Separator className="my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">How to Request a Refund</h2>
              <div className="space-y-4">
                <p className="text-gray-300">
                  To request a refund:
                </p>
                <ol className="list-decimal pl-6 text-gray-300 space-y-2">
                  <li>Log in to your vPan VPN account</li>
                  <li>Visit the Billing section</li>
                  <li>Click on "Request Refund"</li>
                  <li>Select your reason for the refund</li>
                  <li>Submit your request</li>
                </ol>
                <p className="text-gray-300">
                  Alternatively, you can contact our support team directly through our{" "}
                  <Link href="/contact" className="text-blue-400 hover:text-blue-300">
                    contact page
                  </Link>.
                </p>
              </div>
            </section>

            <Separator className="my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Processing Time</h2>
              <p className="text-gray-300">
                Refund requests are typically processed within 5-7 business days. The time it takes for the refund to appear in your account depends on your payment method and financial institution.
              </p>
            </section>

            <Separator className="my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Exceptions</h2>
              <div className="space-y-4">
                <p className="text-gray-300">
                  The following are not eligible for refunds:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Accounts banned for terms of service violations</li>
                  <li>Cryptocurrency payments (due to price volatility)</li>
                  <li>In-game purchases and virtual items</li>
                  <li>Subscription renewals after the first 30 days</li>
                </ul>
              </div>
            </section>

            <Separator className="my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Special Circumstances</h2>
              <p className="text-gray-300">
                We understand that special circumstances may arise. If you have a unique situation not covered by our standard refund policy, please contact our support team. We'll review each case individually and work to find a fair solution.
              </p>
            </section>

            <Separator className="my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Payment Method Specific Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Credit Card Refunds</h3>
                  <p className="text-gray-300">
                    Refunds are processed to the original credit card used for the purchase. Please allow 5-7 business days for the refund to appear on your statement.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">PayPal Refunds</h3>
                  <p className="text-gray-300">
                    PayPal refunds are typically processed within 24 hours, but may take 2-3 business days to appear in your PayPal account.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Bank Transfer Refunds</h3>
                  <p className="text-gray-300">
                    Bank transfer refunds may take 7-10 business days to process due to international banking procedures.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Support */}
            <div className="mt-12 p-6 bg-gray-700/30 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
              <p className="text-gray-300 mb-6">
                If you have any questions about our refund policy or need assistance with requesting a refund, our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
                    Contact Support
                  </Button>
                </Link>
                <Link href="/faq">
                  <Button variant="outline" className="w-full sm:w-auto">
                    View FAQ
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Card>

        {/* Related Policies */}
        <div className="max-w-4xl mx-auto mt-8 text-center">
          <p className="text-gray-400 mb-4">Related Policies</p>
          <div className="flex justify-center items-center space-x-4">
            <Link 
              href="/terms"
              className="text-blue-400 hover:text-blue-300"
            >
              Terms of Service
            </Link>
            <span className="text-gray-700">|</span>
            <Link 
              href="/privacy"
              className="text-blue-400 hover:text-blue-300"
            >
              Privacy Policy
            </Link>
            <span className="text-gray-700">|</span>
            <Link 
              href="/billing"
              className="text-blue-400 hover:text-blue-300"
            >
              Billing Terms
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

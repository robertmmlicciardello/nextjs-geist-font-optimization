import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function Billing() {
  const plans = [
    {
      name: "Basic",
      price: "$4.99/month",
      features: [
        "5 Server Locations",
        "1 Device",
        "Standard Speed",
        "Basic Support",
        "100 Reward Points/month"
      ]
    },
    {
      name: "Premium",
      price: "$9.99/month",
      features: [
        "50+ Server Locations",
        "5 Devices",
        "High Speed",
        "Priority Support",
        "500 Reward Points/month"
      ]
    },
    {
      name: "Ultimate",
      price: "$14.99/month",
      features: [
        "100+ Server Locations",
        "10 Devices",
        "Ultra Speed",
        "24/7 Premium Support",
        "1000 Reward Points/month"
      ]
    }
  ]

  const paymentMethods = [
    {
      method: "Credit Card",
      processors: "Visa, MasterCard, American Express",
      processingTime: "Instant",
      fees: "No additional fees"
    },
    {
      method: "PayPal",
      processors: "PayPal",
      processingTime: "Instant",
      fees: "No additional fees"
    },
    {
      method: "Cryptocurrency",
      processors: "Bitcoin, Ethereum, USDT",
      processingTime: "10-60 minutes",
      fees: "Network fees may apply"
    },
    {
      method: "Bank Transfer",
      processors: "SWIFT, SEPA",
      processingTime: "1-3 business days",
      fees: "Bank fees may apply"
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
            <h1 className="text-3xl font-bold mb-6">Billing Terms</h1>
            <p className="text-gray-400 mb-8">
              Last updated: January 20, 2024
            </p>

            {/* Subscription Plans */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Subscription Plans</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {plans.map((plan) => (
                  <Card key={plan.name} className="p-6 bg-gray-700/30 border-gray-600">
                    <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                    <p className="text-2xl font-bold text-blue-400 mb-4">{plan.price}</p>
                    <ul className="space-y-2">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-gray-300">
                          <span className="text-blue-400 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6">Select Plan</Button>
                  </Card>
                ))}
              </div>
            </section>

            <Separator className="my-8" />

            {/* Payment Methods */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Payment Methods</h2>
              <div className="overflow-hidden rounded-lg border border-gray-700">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Method</TableHead>
                      <TableHead>Processors</TableHead>
                      <TableHead>Processing Time</TableHead>
                      <TableHead>Fees</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {paymentMethods.map((method) => (
                      <TableRow key={method.method}>
                        <TableCell className="font-medium">{method.method}</TableCell>
                        <TableCell>{method.processors}</TableCell>
                        <TableCell>{method.processingTime}</TableCell>
                        <TableCell>{method.fees}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </section>

            <Separator className="my-8" />

            {/* Billing Cycle */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Billing Cycle</h2>
              <div className="space-y-4">
                <p className="text-gray-300">
                  Your subscription will be automatically renewed and billed according to your chosen billing cycle (monthly or annually). You can change your billing cycle at any time through your account settings.
                </p>
                <div className="p-4 bg-blue-900/20 rounded-lg">
                  <p className="text-blue-400">
                    Pro Tip: Save up to 40% by choosing annual billing!
                  </p>
                </div>
              </div>
            </section>

            <Separator className="my-8" />

            {/* Cancellation */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Cancellation</h2>
              <div className="space-y-4">
                <p className="text-gray-300">
                  You can cancel your subscription at any time. Upon cancellation:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Your service will continue until the end of your current billing period</li>
                  <li>No partial refunds are provided for unused time</li>
                  <li>You can continue using the service until the period ends</li>
                  <li>Earned rewards points remain valid for 90 days</li>
                </ul>
              </div>
            </section>

            <Separator className="my-8" />

            {/* Refunds */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Refunds</h2>
              <p className="text-gray-300 mb-4">
                We offer a 30-day money-back guarantee for new subscriptions. For detailed information about our refund policy, please visit our{" "}
                <Link href="/refund-policy" className="text-blue-400 hover:text-blue-300">
                  refund policy page
                </Link>.
              </p>
            </section>

            {/* Support Section */}
            <div className="mt-12 p-6 bg-gray-700/30 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Billing Support</h3>
              <p className="text-gray-300 mb-6">
                Having issues with billing? Our support team is here to help 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
                    Contact Billing Support
                  </Button>
                </Link>
                <Link href="/faq#billing">
                  <Button variant="outline" className="w-full sm:w-auto">
                    Billing FAQ
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Card>

        {/* Related Links */}
        <div className="max-w-4xl mx-auto mt-8 text-center">
          <p className="text-gray-400 mb-4">Related Information</p>
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
              href="/refund-policy"
              className="text-blue-400 hover:text-blue-300"
            >
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Support() {
  const faqs = [
    {
      question: "How do I connect to the VPN?",
      answer: "Download our app, sign in with your account, select a server location, and click 'Connect'. Our app will automatically establish a secure connection."
    },
    {
      question: "What should I do if the VPN connection is slow?",
      answer: "Try connecting to a different server location, check your internet connection, or contact our support team for assistance with optimizing your connection."
    },
    {
      question: "How do I earn rewards?",
      answer: "You can earn rewards by maintaining an active VPN connection, playing our mini-games, referring friends, and participating in special events."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we use military-grade encryption and maintain a strict no-logs policy to ensure your data remains private and secure."
    },
    {
      question: "Can I use the VPN on multiple devices?",
      answer: "Yes, depending on your subscription plan, you can use our VPN on multiple devices simultaneously."
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
              <Link href="/dashboard" className="text-gray-400 hover:text-white">
                Dashboard
              </Link>
            </nav>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">How can we help you?</h1>
          <p className="text-xl text-gray-400 mb-8">
            Search our knowledge base or get in touch with our support team
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="flex gap-2">
              <Input 
                placeholder="Search for help articles..."
                className="bg-gray-800/50 border-gray-700"
              />
              <Button>
                Search
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="help" className="max-w-4xl mx-auto">
          <TabsList className="bg-gray-800/50 border-gray-700">
            <TabsTrigger value="help">Help Center</TabsTrigger>
            <TabsTrigger value="contact">Contact Us</TabsTrigger>
            <TabsTrigger value="status">System Status</TabsTrigger>
          </TabsList>

          <TabsContent value="help">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6 bg-gray-800/50 border-gray-700">
                <h3 className="text-xl font-semibold mb-4">Quick Start Guides</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/help/getting-started" className="text-blue-400 hover:text-blue-300">
                      Getting Started with vPan VPN
                    </Link>
                  </li>
                  <li>
                    <Link href="/help/installation" className="text-blue-400 hover:text-blue-300">
                      Installation Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/help/connection" className="text-blue-400 hover:text-blue-300">
                      Connecting to Servers
                    </Link>
                  </li>
                  <li>
                    <Link href="/help/rewards" className="text-blue-400 hover:text-blue-300">
                      Earning Rewards
                    </Link>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 bg-gray-800/50 border-gray-700">
                <h3 className="text-xl font-semibold mb-4">Popular Topics</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/help/billing" className="text-blue-400 hover:text-blue-300">
                      Billing & Subscriptions
                    </Link>
                  </li>
                  <li>
                    <Link href="/help/security" className="text-blue-400 hover:text-blue-300">
                      Security Features
                    </Link>
                  </li>
                  <li>
                    <Link href="/help/troubleshooting" className="text-blue-400 hover:text-blue-300">
                      Troubleshooting
                    </Link>
                  </li>
                  <li>
                    <Link href="/help/games" className="text-blue-400 hover:text-blue-300">
                      Games & Points
                    </Link>
                  </li>
                </ul>
              </Card>
            </div>

            <Card className="p-6 bg-gray-800/50 border-gray-700">
              <h3 className="text-xl font-semibold mb-6">Frequently Asked Questions</h3>
              <Accordion type="single" collapsible>
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-300">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          </TabsContent>

          <TabsContent value="contact">
            <Card className="p-6 bg-gray-800/50 border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Contact Support</h3>
                  <p className="text-gray-300 mb-6">
                    Our support team is available 24/7 to help you with any questions or issues.
                  </p>
                  <form className="space-y-4">
                    <div>
                      <Input 
                        placeholder="Your email"
                        className="bg-gray-700/50 border-gray-600"
                      />
                    </div>
                    <div>
                      <Input 
                        placeholder="Subject"
                        className="bg-gray-700/50 border-gray-600"
                      />
                    </div>
                    <div>
                      <textarea 
                        placeholder="Describe your issue"
                        className="w-full h-32 px-4 py-2 rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <Button className="w-full">Send Message</Button>
                  </form>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Other Ways to Reach Us</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2">Email</h4>
                      <p className="text-gray-300">support@vpanvpn.com</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Live Chat</h4>
                      <p className="text-gray-300">Available 24/7 in our app</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Social Media</h4>
                      <div className="flex space-x-4">
                        <Link href="#" className="text-blue-400 hover:text-blue-300">Twitter</Link>
                        <Link href="#" className="text-blue-400 hover:text-blue-300">Facebook</Link>
                        <Link href="#" className="text-blue-400 hover:text-blue-300">Discord</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="status">
            <Card className="p-6 bg-gray-800/50 border-gray-700">
              <div className="text-center mb-6">
                <div className="inline-flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-xl">All Systems Operational</span>
                </div>
              </div>
              <div className="space-y-4">
                <Link href="/status" className="block">
                  <Button className="w-full">View Detailed Status</Button>
                </Link>
                <p className="text-center text-gray-400">
                  Subscribe to receive notifications about system status updates
                </p>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Help Categories */}
        <div className="max-w-4xl mx-auto mt-12">
          <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Link href="/help/account">
              <Card className="p-6 bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors">
                <h3 className="font-semibold mb-2">Account & Billing</h3>
                <p className="text-sm text-gray-400">
                  Manage your account, subscriptions, and payments
                </p>
              </Card>
            </Link>
            <Link href="/help/technical">
              <Card className="p-6 bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors">
                <h3 className="font-semibold mb-2">Technical Support</h3>
                <p className="text-sm text-gray-400">
                  Connection issues, app problems, and troubleshooting
                </p>
              </Card>
            </Link>
            <Link href="/help/features">
              <Card className="p-6 bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors">
                <h3 className="font-semibold mb-2">Features & Games</h3>
                <p className="text-sm text-gray-400">
                  Learn about VPN features and gaming rewards
                </p>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

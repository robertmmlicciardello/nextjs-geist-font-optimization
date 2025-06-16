import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FAQ() {
  const categories = {
    general: [
      {
        question: "What is vPan VPN?",
        answer: "vPan VPN is a secure virtual private network service that protects your online privacy while offering unique rewards through gaming features. We use military-grade encryption to secure your data and provide access to servers worldwide."
      },
      {
        question: "How does the rewards system work?",
        answer: "Our unique rewards system lets you earn points through various activities: maintaining an active VPN connection, playing mini-games, referring friends, and participating in special events. These points can be redeemed for premium features, subscription time, or other rewards."
      },
      {
        question: "Is vPan VPN available on all devices?",
        answer: "Yes, vPan VPN is available on Windows, macOS, Linux, iOS, and Android devices. You can use our service on multiple devices simultaneously, depending on your subscription plan."
      }
    ],
    technical: [
      {
        question: "How do I set up vPan VPN?",
        answer: "Setting up vPan VPN is simple: 1) Create an account, 2) Download our app for your device, 3) Log in to the app, 4) Select a server location, and 5) Click 'Connect'. Our app will guide you through any additional steps if needed."
      },
      {
        question: "What should I do if my connection is slow?",
        answer: "If you experience slow connections: 1) Try a different server location, 2) Check your base internet connection, 3) Ensure no other VPN or proxy is active, 4) Restart the VPN app, 5) Contact support if issues persist."
      },
      {
        question: "Does vPan VPN keep logs?",
        answer: "No, we maintain a strict no-logs policy. We don't track, store, or share your browsing history, traffic data, or any other online activity while connected to our VPN."
      }
    ],
    billing: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept major credit cards, PayPal, cryptocurrency, and various regional payment methods. All transactions are processed securely through our trusted payment partners."
      },
      {
        question: "Can I get a refund?",
        answer: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with our service, you can request a full refund within 30 days of your purchase, no questions asked."
      },
      {
        question: "How do I cancel my subscription?",
        answer: "You can cancel your subscription at any time through your account dashboard. Go to Settings > Subscription > Cancel Subscription. Your service will continue until the end of your billing period."
      }
    ],
    security: [
      {
        question: "What encryption does vPan VPN use?",
        answer: "We use AES-256 encryption, the same standard used by security experts and governments worldwide. This is combined with perfect forward secrecy and secure protocols to ensure maximum security."
      },
      {
        question: "What happens if my VPN connection drops?",
        answer: "Our kill switch feature automatically blocks your internet connection if the VPN drops, ensuring your data remains protected. You can enable this feature in the app settings."
      },
      {
        question: "Can I use vPan VPN in any country?",
        answer: "vPan VPN works in most countries, but some may have restrictions on VPN use. Check your local laws and regulations. We offer specialized servers for regions with internet restrictions."
      }
    ]
  }

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
        {/* Search Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-400 mb-8">
            Find quick answers to common questions about vPan VPN
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="flex gap-2">
              <Input 
                placeholder="Search FAQ..."
                className="bg-gray-800/50 border-gray-700"
              />
              <Button>
                Search
              </Button>
            </div>
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="general">
            <TabsList className="bg-gray-800/50 border-gray-700">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="technical">Technical</TabsTrigger>
              <TabsTrigger value="billing">Billing</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>

            {Object.entries(categories).map(([category, questions]) => (
              <TabsContent key={category} value={category}>
                <Card className="p-6 bg-gray-800/50 border-gray-700">
                  <Accordion type="single" collapsible>
                    {questions.map((item, index) => (
                      <AccordionItem key={index} value={`${category}-${index}`}>
                        <AccordionTrigger>{item.question}</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-gray-300">{item.answer}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Still Need Help */}
        <Card className="max-w-4xl mx-auto mt-12 p-6 bg-gray-800/50 border-gray-700">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-gray-400 mb-6">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/support">
                <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
                  Contact Support
                </Button>
              </Link>
              <Link href="/help">
                <Button variant="outline" className="w-full sm:w-auto">
                  Browse Help Center
                </Button>
              </Link>
            </div>
          </div>
        </Card>

        {/* Quick Links */}
        <div className="max-w-4xl mx-auto mt-8 text-center">
          <div className="flex justify-center items-center space-x-4">
            <Link 
              href="/status"
              className="text-blue-400 hover:text-blue-300"
            >
              System Status
            </Link>
            <span className="text-gray-700">|</span>
            <Link 
              href="/community"
              className="text-blue-400 hover:text-blue-300"
            >
              Community Forum
            </Link>
            <span className="text-gray-700">|</span>
            <Link 
              href="/tutorials"
              className="text-blue-400 hover:text-blue-300"
            >
              Video Tutorials
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

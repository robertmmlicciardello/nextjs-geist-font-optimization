import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Contact() {
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
                Help Center
              </Link>
              <Link href="/dashboard" className="text-gray-400 hover:text-white">
                Dashboard
              </Link>
            </nav>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-gray-400">
              Get in touch with our team. We're here to help 24/7.
            </p>
          </div>

          <Tabs defaultValue="support">
            <TabsList className="bg-gray-800/50 border-gray-700">
              <TabsTrigger value="support">Technical Support</TabsTrigger>
              <TabsTrigger value="billing">Billing</TabsTrigger>
              <TabsTrigger value="general">General Inquiry</TabsTrigger>
            </TabsList>

            {/* Support Form */}
            <TabsContent value="support">
              <Card className="p-6 bg-gray-800/50 border-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Technical Support</h3>
                      <p className="text-gray-400 mb-4">
                        Having technical issues? Our support team is ready to help.
                      </p>
                    </div>

                    <form className="space-y-4">
                      <div className="space-y-2">
                        <Input 
                          placeholder="Your email"
                          className="bg-gray-700/50 border-gray-600"
                        />
                      </div>

                      <div className="space-y-2">
                        <Select>
                          <SelectTrigger className="bg-gray-700/50 border-gray-600">
                            <SelectValue placeholder="Issue type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="connection">Connection Issues</SelectItem>
                            <SelectItem value="speed">Speed Problems</SelectItem>
                            <SelectItem value="app">App Problems</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <textarea 
                          placeholder="Describe your issue in detail"
                          className="w-full h-32 px-4 py-2 rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                        />
                      </div>

                      <Button className="w-full">Submit Ticket</Button>
                    </form>
                  </div>

                  <div className="space-y-6">
                    <div className="p-6 bg-gray-700/30 rounded-lg">
                      <h4 className="font-semibold mb-4">Before Contacting Support</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li>• Check our <Link href="/faq" className="text-blue-400 hover:text-blue-300">FAQ</Link></li>
                        <li>• View <Link href="/status" className="text-blue-400 hover:text-blue-300">System Status</Link></li>
                        <li>• Try basic <Link href="/help/troubleshooting" className="text-blue-400 hover:text-blue-300">troubleshooting</Link></li>
                      </ul>
                    </div>

                    <div className="p-6 bg-gray-700/30 rounded-lg">
                      <h4 className="font-semibold mb-4">Quick Support Options</h4>
                      <div className="space-y-4">
                        <div>
                          <p className="font-medium">Live Chat</p>
                          <p className="text-gray-400">Available 24/7 in our app</p>
                        </div>
                        <div>
                          <p className="font-medium">Email</p>
                          <p className="text-gray-400">support@vpanvpn.com</p>
                        </div>
                        <div>
                          <p className="font-medium">Community</p>
                          <p className="text-gray-400">Join our Discord community</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Billing Form */}
            <TabsContent value="billing">
              <Card className="p-6 bg-gray-800/50 border-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Billing Support</h3>
                      <p className="text-gray-400 mb-4">
                        Questions about your subscription or payment? We're here to help.
                      </p>
                    </div>

                    <form className="space-y-4">
                      <div className="space-y-2">
                        <Input 
                          placeholder="Your email"
                          className="bg-gray-700/50 border-gray-600"
                        />
                      </div>

                      <div className="space-y-2">
                        <Select>
                          <SelectTrigger className="bg-gray-700/50 border-gray-600">
                            <SelectValue placeholder="Billing issue type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="subscription">Subscription Issues</SelectItem>
                            <SelectItem value="payment">Payment Problems</SelectItem>
                            <SelectItem value="refund">Refund Request</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Input 
                          placeholder="Order/Transaction ID (if applicable)"
                          className="bg-gray-700/50 border-gray-600"
                        />
                      </div>

                      <div className="space-y-2">
                        <textarea 
                          placeholder="Describe your billing issue"
                          className="w-full h-32 px-4 py-2 rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                        />
                      </div>

                      <Button className="w-full">Submit Request</Button>
                    </form>
                  </div>

                  <div className="space-y-6">
                    <div className="p-6 bg-gray-700/30 rounded-lg">
                      <h4 className="font-semibold mb-4">Billing Resources</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li>• View <Link href="/billing" className="text-blue-400 hover:text-blue-300">Billing History</Link></li>
                        <li>• Update <Link href="/billing/payment" className="text-blue-400 hover:text-blue-300">Payment Method</Link></li>
                        <li>• Read our <Link href="/refund-policy" className="text-blue-400 hover:text-blue-300">Refund Policy</Link></li>
                      </ul>
                    </div>

                    <div className="p-6 bg-gray-700/30 rounded-lg">
                      <h4 className="font-semibold mb-4">Direct Contact</h4>
                      <div className="space-y-4">
                        <div>
                          <p className="font-medium">Billing Support</p>
                          <p className="text-gray-400">billing@vpanvpn.com</p>
                        </div>
                        <div>
                          <p className="font-medium">Phone Support</p>
                          <p className="text-gray-400">Available for Premium users</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* General Inquiry Form */}
            <TabsContent value="general">
              <Card className="p-6 bg-gray-800/50 border-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">General Inquiry</h3>
                      <p className="text-gray-400 mb-4">
                        Have a question or feedback? We'd love to hear from you.
                      </p>
                    </div>

                    <form className="space-y-4">
                      <div className="space-y-2">
                        <Input 
                          placeholder="Your name"
                          className="bg-gray-700/50 border-gray-600"
                        />
                      </div>

                      <div className="space-y-2">
                        <Input 
                          placeholder="Your email"
                          className="bg-gray-700/50 border-gray-600"
                        />
                      </div>

                      <div className="space-y-2">
                        <Select>
                          <SelectTrigger className="bg-gray-700/50 border-gray-600">
                            <SelectValue placeholder="Inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="feedback">Feedback</SelectItem>
                            <SelectItem value="partnership">Partnership</SelectItem>
                            <SelectItem value="press">Press Inquiry</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <textarea 
                          placeholder="Your message"
                          className="w-full h-32 px-4 py-2 rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                        />
                      </div>

                      <Button className="w-full">Send Message</Button>
                    </form>
                  </div>

                  <div className="space-y-6">
                    <div className="p-6 bg-gray-700/30 rounded-lg">
                      <h4 className="font-semibold mb-4">Other Ways to Connect</h4>
                      <div className="space-y-4">
                        <div>
                          <p className="font-medium">Social Media</p>
                          <div className="flex space-x-4 mt-2">
                            <Link href="#" className="text-blue-400 hover:text-blue-300">Twitter</Link>
                            <Link href="#" className="text-blue-400 hover:text-blue-300">Facebook</Link>
                            <Link href="#" className="text-blue-400 hover:text-blue-300">LinkedIn</Link>
                          </div>
                        </div>
                        <div>
                          <p className="font-medium">Business Hours</p>
                          <p className="text-gray-400">Monday - Friday: 9AM - 6PM EST</p>
                        </div>
                        <div>
                          <p className="font-medium">Office Location</p>
                          <p className="text-gray-400">123 Privacy Street</p>
                          <p className="text-gray-400">Secure City, SC 12345</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 bg-gray-700/30 rounded-lg">
                      <h4 className="font-semibold mb-4">Quick Links</h4>
                      <ul className="space-y-2">
                        <li>
                          <Link href="/about" className="text-blue-400 hover:text-blue-300">
                            About Us
                          </Link>
                        </li>
                        <li>
                          <Link href="/careers" className="text-blue-400 hover:text-blue-300">
                            Careers
                          </Link>
                        </li>
                        <li>
                          <Link href="/press" className="text-blue-400 hover:text-blue-300">
                            Press Kit
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-white">vPan</span>
                <span className="text-sm font-medium text-blue-400">VPN</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login">
                <Button variant="ghost" size="sm">
                  Sign in
                </Button>
              </Link>
              <Link href="/register">
                <Button size="sm">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Secure VPN with Rewards
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Protect your privacy, unlock content, and earn rewards while you browse. Join thousands of satisfied users worldwide.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/register">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Start Free Trial
              </Button>
            </Link>
            <Link href="/premium">
              <Button size="lg" variant="outline">
                View Plans
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-gray-800/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose vPan VPN?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 bg-gray-800/50 border-gray-700">
              <div className="text-2xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-2">Military-grade Encryption</h3>
              <p className="text-gray-400">
                Your data is protected with AES-256 encryption, the same standard used by security experts worldwide.
              </p>
            </Card>

            <Card className="p-6 bg-gray-800/50 border-gray-700">
              <div className="text-2xl mb-4">🎮</div>
              <h3 className="text-xl font-bold mb-2">Earn While You Browse</h3>
              <p className="text-gray-400">
                Play games, complete tasks, and earn points that can be redeemed for premium features or rewards.
              </p>
            </Card>

            <Card className="p-6 bg-gray-800/50 border-gray-700">
              <div className="text-2xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Lightning Fast Speeds</h3>
              <p className="text-gray-400">
                Our optimized servers ensure you get the fastest possible connection speeds without compromising security.
              </p>
            </Card>

            <Card className="p-6 bg-gray-800/50 border-gray-700">
              <div className="text-2xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-2">Global Server Network</h3>
              <p className="text-gray-400">
                Access content from anywhere with our worldwide network of high-speed servers.
              </p>
            </Card>

            <Card className="p-6 bg-gray-800/50 border-gray-700">
              <div className="text-2xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2">No Logging Policy</h3>
              <p className="text-gray-400">
                We never track, store, or share your browsing data. Your privacy is our top priority.
              </p>
            </Card>

            <Card className="p-6 bg-gray-800/50 border-gray-700">
              <div className="text-2xl mb-4">💬</div>
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-400">
                Our dedicated support team is always available to help you with any questions or issues.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">100k+</div>
              <div className="text-gray-400">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-gray-400">Server Locations</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-gray-400">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Start Protecting Your Privacy Today
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied users who trust vPan VPN for their online security and privacy needs.
          </p>
          <Link href="/register">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/premium">Pricing</Link></li>
                <li><Link href="/features">Features</Link></li>
                <li><Link href="/servers">Servers</Link></li>
                <li><Link href="/download">Download</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/careers">Careers</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/support">Support</Link></li>
                <li><Link href="/faq">FAQ</Link></li>
                <li><Link href="/tutorials">Tutorials</Link></li>
                <li><Link href="/community">Community</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms of Service</Link></li>
                <li><Link href="/cookies">Cookie Policy</Link></li>
                <li><Link href="/compliance">Compliance</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} vPan VPN. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

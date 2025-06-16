import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function SecurityAdvisoriesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <Card className="mb-8 p-4 bg-gray-800/50 border-gray-700">
        <nav>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <svg
                className="w-6 h-6 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <h1 className="text-xl font-semibold">Security Advisories</h1>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              <Link href="/security/advisories">
                <Button variant="ghost" size="sm">
                  Current
                </Button>
              </Link>
              <Link href="/security/advisories/archive">
                <Button variant="ghost" size="sm">
                  Archive
                </Button>
              </Link>
              <Link href="/security/advisories/search">
                <Button variant="ghost" size="sm">
                  Search
                </Button>
              </Link>
              <Link href="/security/report">
                <Button variant="ghost" size="sm">
                  Report
                </Button>
              </Link>
            </div>
          </div>

          {/* Breadcrumb */}
          <div className="mt-4 flex items-center gap-2 text-sm text-gray-400">
            <Link href="/security" className="hover:text-gray-300">
              Security
            </Link>
            <span>/</span>
            <Link href="/security/advisories" className="hover:text-gray-300">
              Advisories
            </Link>
          </div>
        </nav>
      </Card>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="mt-16 pb-8">
        <Card className="p-6 bg-gray-800/50 border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link 
                    href="/security/advisories/rss"
                    className="text-gray-400 hover:text-gray-300"
                  >
                    RSS Feed
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/security/pgp-key"
                    className="text-gray-400 hover:text-gray-300"
                  >
                    PGP Key
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/security/whitepaper"
                    className="text-gray-400 hover:text-gray-300"
                  >
                    Security Whitepaper
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/security/transparency"
                    className="text-gray-400 hover:text-gray-300"
                  >
                    Transparency Report
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link 
                    href="/security/bug-bounty"
                    className="text-gray-400 hover:text-gray-300"
                  >
                    Bug Bounty Program
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/security/audit"
                    className="text-gray-400 hover:text-gray-300"
                  >
                    Security Audits
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/security/pgp-guide"
                    className="text-gray-400 hover:text-gray-300"
                  >
                    PGP Guide
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/docs/security"
                    className="text-gray-400 hover:text-gray-300"
                  >
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link 
                    href="/security/report"
                    className="text-gray-400 hover:text-gray-300"
                  >
                    Report Vulnerability
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/contact"
                    className="text-gray-400 hover:text-gray-300"
                  >
                    Contact Security Team
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/support"
                    className="text-gray-400 hover:text-gray-300"
                  >
                    Technical Support
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/status"
                    className="text-gray-400 hover:text-gray-300"
                  >
                    System Status
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-6 bg-gray-700" />

          <div className="text-center text-sm text-gray-400">
            <p>
              For security emergencies, please contact{" "}
              <a 
                href="mailto:security@vpan.com"
                className="text-blue-400 hover:text-blue-300"
              >
                security@vpan.com
              </a>
            </p>
            <p className="mt-2">
              PGP Key Fingerprint:{" "}
              <code className="bg-gray-700/50 px-2 py-1 rounded">
                5E3A 8E89 C4C8 7702 7D11 B1AA 987B 2391 A123 B456
              </code>
            </p>
          </div>
        </Card>
      </footer>
    </div>
  )
}

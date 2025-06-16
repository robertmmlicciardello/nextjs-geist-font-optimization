import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function Whitepaper() {
  const sections = [
    {
      title: "Executive Summary",
      content: `vPan VPN employs industry-leading security measures to protect user privacy and data. 
      Our infrastructure is built on a foundation of strong encryption, secure protocols, and a strict no-logs policy. 
      This whitepaper details our security architecture, protocols, and practices.`
    },
    {
      title: "Infrastructure Security",
      subsections: [
        {
          title: "Server Architecture",
          points: [
            "RAM-only servers with no data persistence",
            "Redundant network paths for reliability",
            "Regular security patches and updates",
            "Hardware security modules (HSMs) for key storage"
          ]
        },
        {
          title: "Network Security",
          points: [
            "Multi-layered firewall protection",
            "DDoS mitigation systems",
            "Network segregation and isolation",
            "24/7 infrastructure monitoring"
          ]
        }
      ]
    },
    {
      title: "Encryption & Protocols",
      subsections: [
        {
          title: "Encryption Standards",
          points: [
            "AES-256-GCM encryption",
            "RSA-4096 key exchange",
            "Perfect Forward Secrecy",
            "ChaCha20-Poly1305 for mobile devices"
          ]
        },
        {
          title: "VPN Protocols",
          points: [
            "OpenVPN with custom security enhancements",
            "IKEv2/IPsec implementation",
            "WireGuard® support",
            "Proprietary stealth protocol"
          ]
        }
      ]
    },
    {
      title: "Privacy Protections",
      subsections: [
        {
          title: "No-Logs Policy",
          points: [
            "Zero user activity logging",
            "No connection timestamp recording",
            "No IP address logging",
            "No traffic data collection"
          ]
        },
        {
          title: "Additional Protections",
          points: [
            "DNS leak prevention",
            "IPv6 leak protection",
            "WebRTC leak blocking",
            "Kill switch implementation"
          ]
        }
      ]
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
              <Link href="/security" className="text-gray-400 hover:text-white">
                Security
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Security Whitepaper</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of vPan VPN's security architecture, protocols, and privacy protections.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Download PDF Version
            </Button>
            <Button variant="outline">
              Download Technical Specifications
            </Button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Document Information */}
          <Card className="p-6 bg-gray-800/50 border-gray-700 mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-sm text-gray-400">Version</div>
                <div className="font-semibold">2.1.0</div>
              </div>
              <div>
                <div className="text-sm text-gray-400">Last Updated</div>
                <div className="font-semibold">January 2024</div>
              </div>
              <div>
                <div className="text-sm text-gray-400">Status</div>
                <div className="font-semibold text-green-400">Current</div>
              </div>
              <div>
                <div className="text-sm text-gray-400">Review Date</div>
                <div className="font-semibold">July 2024</div>
              </div>
            </div>
          </Card>

          {/* Main Content */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-2xl font-bold mb-6">{section.title}</h2>
                {section.content && (
                  <Card className="p-6 bg-gray-800/50 border-gray-700 mb-6">
                    <p className="text-gray-300">{section.content}</p>
                  </Card>
                )}
                {section.subsections && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {section.subsections.map((subsection, subIndex) => (
                      <Card key={subIndex} className="p-6 bg-gray-800/50 border-gray-700">
                        <h3 className="text-xl font-semibold mb-4">{subsection.title}</h3>
                        <ul className="space-y-2">
                          {subsection.points.map((point, pointIndex) => (
                            <li key={pointIndex} className="flex items-start text-gray-300">
                              <span className="text-blue-400 mr-2">•</span>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </Card>
                    ))}
                  </div>
                )}
                {index < sections.length - 1 && <Separator className="my-12" />}
              </div>
            ))}
          </div>

          {/* Additional Resources */}
          <Card className="mt-12 p-8 bg-gray-800/50 border-gray-700">
            <h2 className="text-2xl font-bold mb-6">Additional Resources</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <Link href="/security/transparency">
                <Card className="p-4 bg-gray-700/30 border-gray-600 hover:bg-gray-700/50 transition-colors">
                  <h3 className="font-semibold mb-2">Transparency Report</h3>
                  <p className="text-sm text-gray-400">View our latest transparency report</p>
                </Card>
              </Link>
              <Link href="/security/bug-bounty">
                <Card className="p-4 bg-gray-700/30 border-gray-600 hover:bg-gray-700/50 transition-colors">
                  <h3 className="font-semibold mb-2">Bug Bounty Program</h3>
                  <p className="text-sm text-gray-400">Help us improve security</p>
                </Card>
              </Link>
              <Link href="/security/audit">
                <Card className="p-4 bg-gray-700/30 border-gray-600 hover:bg-gray-700/50 transition-colors">
                  <h3 className="font-semibold mb-2">Security Audits</h3>
                  <p className="text-sm text-gray-400">Review our independent audits</p>
                </Card>
              </Link>
            </div>
          </Card>

          {/* Contact Information */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">
              For technical inquiries about this whitepaper, contact our security team:
            </p>
            <p className="text-gray-300">
              security@vpanvpn.com
              <br />
              PGP Key ID: 0xABCD1234
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

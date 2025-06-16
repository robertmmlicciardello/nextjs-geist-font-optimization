import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function About() {
  const stats = [
    { label: "Active Users", value: "1M+" },
    { label: "Countries", value: "50+" },
    { label: "Server Locations", value: "100+" },
    { label: "Uptime", value: "99.9%" }
  ]

  const values = [
    {
      title: "Privacy First",
      description: "We believe privacy is a fundamental human right. Our no-logs policy and encryption standards ensure your data stays private."
    },
    {
      title: "Innovation",
      description: "Pioneering the integration of VPN services with gaming rewards, creating a unique and engaging user experience."
    },
    {
      title: "Transparency",
      description: "We maintain open communication about our practices, policies, and operations to build trust with our users."
    },
    {
      title: "Community",
      description: "Building a strong community of privacy-conscious users who enjoy both security and entertainment."
    }
  ]

  const team = [
    {
      name: "Sarah Chen",
      role: "Chief Executive Officer",
      description: "Former cybersecurity expert with 15+ years of experience in privacy technology."
    },
    {
      name: "Marcus Rodriguez",
      role: "Chief Technology Officer",
      description: "Led development of several successful privacy-focused applications."
    },
    {
      name: "Dr. Emma Thompson",
      role: "Head of Security",
      description: "PhD in Computer Security, specializing in encryption technologies."
    },
    {
      name: "James Wilson",
      role: "Head of Gaming",
      description: "Gaming industry veteran focused on user engagement and rewards systems."
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
              <Link href="/contact" className="text-gray-400 hover:text-white">
                Contact
              </Link>
              <Link href="/careers" className="text-gray-400 hover:text-white">
                Careers
              </Link>
            </nav>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">
            Securing Your Digital Freedom
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            vPan VPN is revolutionizing online privacy by combining enterprise-grade security with engaging gaming features. We're making online privacy both secure and enjoyable.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 bg-gray-800/50 border-gray-700 text-center">
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Mission */}
        <Card className="p-8 bg-gray-800/50 border-gray-700 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-300 text-lg">
              To provide uncompromising privacy protection while creating an engaging and rewarding experience for our users. We believe that online security should be accessible, enjoyable, and rewarding for everyone.
            </p>
          </div>
        </Card>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 bg-gray-800/50 border-gray-700">
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="p-6 bg-gray-800/50 border-gray-700">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-blue-400 mb-3">{member.role}</p>
                <p className="text-gray-300">{member.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <Card className="p-8 bg-gray-800/50 border-gray-700 mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Our Journey</h2>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <div className="flex-1 w-px bg-gray-700"></div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">2024</h3>
                <p className="text-gray-300">Launched innovative gaming rewards system</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <div className="flex-1 w-px bg-gray-700"></div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">2023</h3>
                <p className="text-gray-300">Expanded to 100+ server locations</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">2022</h3>
                <p className="text-gray-300">Founded with a mission to revolutionize VPN services</p>
              </div>
            </div>
          </div>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Join Our Mission</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/careers">
              <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
                View Career Opportunities
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="w-full sm:w-auto">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-800 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400">
              Press inquiries: press@vpanvpn.com
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/privacy" className="text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

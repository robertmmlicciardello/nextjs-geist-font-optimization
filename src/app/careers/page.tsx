import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function Careers() {
  const benefits = [
    {
      title: "Health & Wellness",
      items: [
        "Comprehensive health insurance",
        "Dental and vision coverage",
        "Mental health support",
        "Gym membership reimbursement"
      ]
    },
    {
      title: "Work-Life Balance",
      items: [
        "Flexible working hours",
        "Remote work options",
        "Unlimited PTO",
        "Paid parental leave"
      ]
    },
    {
      title: "Growth",
      items: [
        "Learning & development budget",
        "Conference attendance",
        "Career mentorship",
        "Internal mobility"
      ]
    },
    {
      title: "Perks",
      items: [
        "Competitive salary",
        "Stock options",
        "401(k) matching",
        "Home office stipend"
      ]
    }
  ]

  const positions = {
    engineering: [
      {
        title: "Senior Backend Engineer",
        location: "Remote",
        type: "Full-time",
        team: "Engineering",
        description: "Build and maintain our core VPN infrastructure and server network."
      },
      {
        title: "Frontend Developer",
        location: "Remote",
        type: "Full-time",
        team: "Engineering",
        description: "Create engaging user interfaces for our web and desktop applications."
      },
      {
        title: "Security Engineer",
        location: "Remote",
        type: "Full-time",
        team: "Engineering",
        description: "Ensure the security of our VPN infrastructure and client applications."
      }
    ],
    product: [
      {
        title: "Product Manager",
        location: "Remote",
        type: "Full-time",
        team: "Product",
        description: "Lead the development of new features and product initiatives."
      },
      {
        title: "UX Designer",
        location: "Remote",
        type: "Full-time",
        team: "Product",
        description: "Design intuitive and engaging user experiences for our products."
      }
    ],
    marketing: [
      {
        title: "Growth Marketing Manager",
        location: "Remote",
        type: "Full-time",
        team: "Marketing",
        description: "Drive user acquisition and engagement through various channels."
      },
      {
        title: "Content Writer",
        location: "Remote",
        type: "Full-time",
        team: "Marketing",
        description: "Create compelling content for our blog, documentation, and marketing materials."
      }
    ],
    support: [
      {
        title: "Technical Support Specialist",
        location: "Remote",
        type: "Full-time",
        team: "Support",
        description: "Provide excellent technical support to our users."
      },
      {
        title: "Customer Success Manager",
        location: "Remote",
        type: "Full-time",
        team: "Support",
        description: "Ensure customer satisfaction and drive retention."
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
              <Link href="/about" className="text-gray-400 hover:text-white">
                About
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
          <h1 className="text-4xl font-bold mb-6">
            Join Our Mission
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Help us revolutionize online privacy while building the future of VPN technology. We're looking for passionate individuals to join our remote-first team.
          </p>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Why Join Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 bg-gray-800/50 border-gray-700">
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <ul className="space-y-2">
                  {benefit.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-300 flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Open Positions</h2>
          <Tabs defaultValue="engineering">
            <TabsList className="bg-gray-800/50 border-gray-700">
              <TabsTrigger value="engineering">Engineering</TabsTrigger>
              <TabsTrigger value="product">Product</TabsTrigger>
              <TabsTrigger value="marketing">Marketing</TabsTrigger>
              <TabsTrigger value="support">Support</TabsTrigger>
            </TabsList>

            {Object.entries(positions).map(([department, jobs]) => (
              <TabsContent key={department} value={department}>
                <div className="grid gap-6">
                  {jobs.map((job, index) => (
                    <Card key={index} className="p-6 bg-gray-800/50 border-gray-700">
                      <div className="flex flex-col sm:flex-row justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                          <p className="text-gray-300 mb-4">{job.description}</p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="secondary">{job.location}</Badge>
                            <Badge variant="secondary">{job.type}</Badge>
                            <Badge variant="secondary">{job.team}</Badge>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Link href={`/careers/${department}/${job.title.toLowerCase().replace(/ /g, '-')}`}>
                            <Button>Apply Now</Button>
                          </Link>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Culture Section */}
        <Card className="p-8 bg-gray-800/50 border-gray-700 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Our Culture</h2>
            <p className="text-gray-300 text-lg mb-8">
              We're building a diverse, inclusive team of passionate individuals who believe in our mission of making privacy accessible to everyone. Our remote-first culture emphasizes trust, autonomy, and work-life balance.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="font-semibold mb-2">Remote-First</h3>
                <p className="text-gray-400">Work from anywhere in the world</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Inclusive</h3>
                <p className="text-gray-400">Diverse perspectives welcome</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Growth-Focused</h3>
                <p className="text-gray-400">Continuous learning encouraged</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Application Process */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Application Process</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-none w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                1
              </div>
              <div>
                <h3 className="font-semibold mb-2">Application Review</h3>
                <p className="text-gray-300">
                  Our team reviews your application and responds within 5 business days.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                2
              </div>
              <div>
                <h3 className="font-semibold mb-2">Initial Interview</h3>
                <p className="text-gray-300">
                  Video call with the hiring manager to discuss your experience and the role.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                3
              </div>
              <div>
                <h3 className="font-semibold mb-2">Technical Assessment</h3>
                <p className="text-gray-300">
                  Complete a take-home project or technical interview relevant to the role.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                4
              </div>
              <div>
                <h3 className="font-semibold mb-2">Team Interview</h3>
                <p className="text-gray-300">
                  Meet your potential teammates and learn more about our culture.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                5
              </div>
              <div>
                <h3 className="font-semibold mb-2">Offer</h3>
                <p className="text-gray-300">
                  If there's a mutual fit, we'll extend an offer and welcome you to the team!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Don't See the Right Role?</h2>
          <p className="text-gray-400 mb-6">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <Link href="/careers/general-application">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Submit General Application
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

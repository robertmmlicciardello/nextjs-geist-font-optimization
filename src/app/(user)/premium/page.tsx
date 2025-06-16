"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Alert } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface PlanFeature {
  name: string
  included: boolean
}

interface Plan {
  id: string
  name: string
  price: number
  duration: string
  features: PlanFeature[]
  popular?: boolean
}

export default function Premium() {
  const [selectedPlan, setSelectedPlan] = useState<string>("monthly")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const plans: Plan[] = [
    {
      id: "basic",
      name: "Basic",
      price: 4.99,
      duration: "month",
      features: [
        { name: "Access to all VPN servers", included: true },
        { name: "No speed limits", included: true },
        { name: "2x reward points", included: true },
        { name: "Priority support", included: false },
        { name: "Ad-free experience", included: false },
        { name: "Custom server selection", included: false }
      ]
    },
    {
      id: "pro",
      name: "Pro",
      price: 9.99,
      duration: "month",
      features: [
        { name: "Access to all VPN servers", included: true },
        { name: "No speed limits", included: true },
        { name: "2x reward points", included: true },
        { name: "Priority support", included: true },
        { name: "Ad-free experience", included: true },
        { name: "Custom server selection", included: true }
      ],
      popular: true
    },
    {
      id: "team",
      name: "Team",
      price: 19.99,
      duration: "month",
      features: [
        { name: "Access to all VPN servers", included: true },
        { name: "No speed limits", included: true },
        { name: "2x reward points", included: true },
        { name: "Priority support", included: true },
        { name: "Ad-free experience", included: true },
        { name: "Custom server selection", included: true },
        { name: "Team management", included: true }
      ]
    }
  ]

  const handleSubscribe = async (planId: string) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSuccess("Successfully subscribed to the plan!")
      setError("")
    } catch (err) {
      setError("Failed to process subscription. Please try again.")
      setSuccess("")
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Upgrade to Premium</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Unlock premium features, faster servers, and earn more rewards with our premium plans
        </p>
      </div>

      {error && (
        <Alert variant="destructive" className="mb-6 max-w-2xl mx-auto">
          {error}
        </Alert>
      )}

      {success && (
        <Alert className="mb-6 max-w-2xl mx-auto bg-green-600">
          {success}
        </Alert>
      )}

      <Tabs 
        value={selectedPlan} 
        onValueChange={setSelectedPlan}
        className="max-w-5xl mx-auto"
      >
        <div className="text-center mb-8">
          <TabsList className="bg-gray-800/50 border-gray-700 inline-flex">
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="annual">
              Annual
              <Badge className="ml-2 bg-green-600">Save 20%</Badge>
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="monthly">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <Card
                key={plan.id}
                className={`p-6 bg-gray-800/50 border-gray-700 relative ${
                  plan.popular ? 'border-blue-500' : ''
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600">
                    Most Popular
                  </Badge>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-gray-400">/{plan.duration}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  {plan.features.map((feature, index) => (
                    <div 
                      key={index}
                      className="flex items-center text-sm"
                    >
                      <span className={`mr-2 text-xl ${
                        feature.included ? 'text-green-400' : 'text-gray-600'
                      }`}>
                        {feature.included ? '✓' : '×'}
                      </span>
                      <span className={feature.included ? 'text-white' : 'text-gray-400'}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>

                <Button
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-blue-600 hover:bg-blue-700' 
                      : ''
                  }`}
                  onClick={() => handleSubscribe(plan.id)}
                >
                  Subscribe Now
                </Button>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="annual">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => {
              const annualPrice = (plan.price * 0.8 * 12).toFixed(2)
              return (
                <Card
                  key={plan.id}
                  className={`p-6 bg-gray-800/50 border-gray-700 relative ${
                    plan.popular ? 'border-blue-500' : ''
                  }`}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600">
                      Most Popular
                    </Badge>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold">${annualPrice}</span>
                      <span className="text-gray-400">/year</span>
                    </div>
                    <p className="text-sm text-gray-400">
                      ${(Number(annualPrice) / 12).toFixed(2)}/month billed annually
                    </p>
                  </div>

                  <div className="space-y-4 mb-6">
                    {plan.features.map((feature, index) => (
                      <div 
                        key={index}
                        className="flex items-center text-sm"
                      >
                        <span className={`mr-2 text-xl ${
                          feature.included ? 'text-green-400' : 'text-gray-600'
                        }`}>
                          {feature.included ? '✓' : '×'}
                        </span>
                        <span className={feature.included ? 'text-white' : 'text-gray-400'}>
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-blue-600 hover:bg-blue-700' 
                        : ''
                    }`}
                    onClick={() => handleSubscribe(`${plan.id}_annual`)}
                  >
                    Subscribe Now
                  </Button>
                </Card>
              )
            })}
          </div>
        </TabsContent>
      </Tabs>

      {/* FAQ Section */}
      <div className="max-w-2xl mx-auto mt-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes, you can cancel your subscription at any time. You'll continue to have access to premium features until the end of your billing period."
            },
            {
              q: "How do reward points work with premium?",
              a: "Premium subscribers earn 2x points for all activities, including daily check-ins, games, and referrals."
            },
            {
              q: "Do you offer refunds?",
              a: "We offer a 7-day money-back guarantee if you're not satisfied with our service."
            }
          ].map((faq, index) => (
            <Card key={index} className="p-6 bg-gray-800/50 border-gray-700">
              <h3 className="font-semibold mb-2">{faq.q}</h3>
              <p className="text-gray-400">{faq.a}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

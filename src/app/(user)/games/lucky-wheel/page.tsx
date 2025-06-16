"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Alert } from "@/components/ui/alert"

const SEGMENTS = [
  { text: "10 Points", color: "#FF6B6B", points: 10 },
  { text: "50 Points", color: "#4ECDC4", points: 50 },
  { text: "20 Points", color: "#45B7D1", points: 20 },
  { text: "100 Points", color: "#96CEB4", points: 100 },
  { text: "30 Points", color: "#FFEEAD", points: 30 },
  { text: "200 Points", color: "#D4A5A5", points: 200 },
  { text: "40 Points", color: "#9DE0AD", points: 40 },
  { text: "500 Points", color: "#FF9999", points: 500 }
]

export default function LuckyWheel() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isSpinning, setIsSpinning] = useState(false)
  const [result, setResult] = useState<string | null>(null)
  const [error, setError] = useState("")
  const [remainingSpins, setRemainingSpins] = useState(3) // Daily limit

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = Math.min(centerX, centerY) - 10

    const drawWheel = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw segments
      const segmentAngle = (2 * Math.PI) / SEGMENTS.length
      SEGMENTS.forEach((segment, i) => {
        ctx.beginPath()
        ctx.fillStyle = segment.color
        ctx.moveTo(centerX, centerY)
        ctx.arc(
          centerX,
          centerY,
          radius,
          i * segmentAngle,
          (i + 1) * segmentAngle
        )
        ctx.lineTo(centerX, centerY)
        ctx.fill()
        ctx.stroke()

        // Draw text
        ctx.save()
        ctx.translate(centerX, centerY)
        ctx.rotate(i * segmentAngle + segmentAngle / 2)
        ctx.textAlign = "right"
        ctx.fillStyle = "#000"
        ctx.font = "bold 16px Arial"
        ctx.fillText(segment.text, radius - 20, 6)
        ctx.restore()
      })

      // Draw center circle
      ctx.beginPath()
      ctx.fillStyle = "#fff"
      ctx.arc(centerX, centerY, 15, 0, 2 * Math.PI)
      ctx.fill()
      ctx.stroke()
    }

    drawWheel()
  }, [])

  const spinWheel = () => {
    if (isSpinning || remainingSpins <= 0) return

    setIsSpinning(true)
    setResult(null)
    setError("")

    // Random number of full rotations (3-5) plus random segment
    const totalRotation = 
      (Math.floor(Math.random() * 3) + 3) * 360 + 
      Math.floor(Math.random() * SEGMENTS.length) * (360 / SEGMENTS.length)

    const canvas = canvasRef.current
    if (!canvas) return

    let currentRotation = 0
    const spinSpeed = 10
    let slowdown = 1

    const animate = () => {
      if (currentRotation >= totalRotation) {
        setIsSpinning(false)
        const winningSegment = SEGMENTS[
          Math.floor(
            (totalRotation % 360) / (360 / SEGMENTS.length)
          ) % SEGMENTS.length
        ]
        setResult(`Congratulations! You won ${winningSegment.text}!`)
        setRemainingSpins(prev => prev - 1)
        return
      }

      const ctx = canvas.getContext("2d")
      if (!ctx) return

      ctx.translate(canvas.width / 2, canvas.height / 2)
      ctx.rotate((spinSpeed * slowdown * Math.PI) / 180)
      ctx.translate(-canvas.width / 2, -canvas.height / 2)

      currentRotation += spinSpeed * slowdown
      slowdown = Math.max(0.01, slowdown * 0.995)

      requestAnimationFrame(animate)
    }

    animate()
  }

  return (
    <Card className="p-6 bg-gray-800/50 border-gray-700">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Lucky Wheel</h1>
        <p className="text-gray-400">
          Spin the wheel to win points! You have {remainingSpins} spins remaining today.
        </p>
      </div>

      {error && (
        <Alert variant="destructive" className="mb-4">
          {error}
        </Alert>
      )}

      {result && (
        <Alert className="mb-4 bg-green-600">
          {result}
        </Alert>
      )}

      <div className="relative">
        <canvas
          ref={canvasRef}
          width={400}
          height={400}
          className="mx-auto"
        />
        <div 
          className="absolute top-0 left-1/2 -ml-4 w-0 h-0 
            border-l-[8px] border-l-transparent
            border-t-[16px] border-t-yellow-500
            border-r-[8px] border-r-transparent"
        />
      </div>

      <div className="text-center mt-8">
        <Button
          onClick={spinWheel}
          disabled={isSpinning || remainingSpins <= 0}
          className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 text-lg"
        >
          {isSpinning ? "Spinning..." : "Spin the Wheel!"}
        </Button>
        {remainingSpins <= 0 && (
          <p className="text-red-400 mt-4">
            You have used all your spins for today. Come back tomorrow!
          </p>
        )}
      </div>
    </Card>
  )
}

"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Alert } from "@/components/ui/alert"

interface Point {
  x: number
  y: number
}

export default function ScratchCard() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isRevealed, setIsRevealed] = useState(false)
  const [isScratching, setIsScratching] = useState(false)
  const [reward, setReward] = useState<number | null>(null)
  const [remainingCards, setRemainingCards] = useState(3) // Daily limit
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")

  const possibleRewards = [10, 20, 50, 100, 200, 500]

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Draw scratch layer
    ctx.fillStyle = "#374151" // Gray overlay
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Add some texture/pattern to make it look more like a scratch card
    for (let i = 0; i < 1000; i++) {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      ctx.fillStyle = "#4B5563"
      ctx.fillRect(x, y, 2, 2)
    }
  }, [])

  const generateReward = () => {
    const randomIndex = Math.floor(Math.random() * possibleRewards.length)
    return possibleRewards[randomIndex]
  }

  const startNewCard = () => {
    if (remainingCards <= 0) {
      setError("You've used all your scratch cards for today. Come back tomorrow!")
      return
    }

    setIsRevealed(false)
    setReward(generateReward())
    setMessage("")
    setError("")

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Reset canvas
    ctx.fillStyle = "#374151"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Add texture
    for (let i = 0; i < 1000; i++) {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      ctx.fillStyle = "#4B5563"
      ctx.fillRect(x, y, 2, 2)
    }
  }

  const handleScratch = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas || isRevealed) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const rect = canvas.getBoundingClientRect()
    let point: Point

    if ('touches' in e) {
      // Touch event
      point = {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top
      }
    } else {
      // Mouse event
      point = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      }
    }

    ctx.globalCompositeOperation = "destination-out"
    ctx.beginPath()
    ctx.arc(point.x, point.y, 20, 0, Math.PI * 2)
    ctx.fill()

    // Check if enough has been scratched
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const pixels = imageData.data
    let transparentPixels = 0

    for (let i = 0; i < pixels.length; i += 4) {
      if (pixels[i + 3] === 0) {
        transparentPixels++
      }
    }

    if (transparentPixels > (canvas.width * canvas.height * 0.5)) {
      setIsRevealed(true)
      setRemainingCards(prev => prev - 1)
      setMessage(`Congratulations! You won ${reward} points!`)
    }
  }

  return (
    <Card className="p-6 bg-gray-800/50 border-gray-700">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Scratch Card</h1>
        <p className="text-gray-400">
          Scratch to reveal your prize! Cards remaining today: {remainingCards}
        </p>
      </div>

      {error && (
        <Alert variant="destructive" className="mb-4">
          {error}
        </Alert>
      )}

      {message && (
        <Alert className="mb-4 bg-green-600">
          {message}
        </Alert>
      )}

      <div className="relative w-[300px] h-[200px] mx-auto mb-8">
        <div className="absolute inset-0 flex items-center justify-center bg-gray-700 rounded-lg">
          {reward && (
            <span className="text-4xl font-bold text-yellow-400">
              {reward} Points
            </span>
          )}
        </div>
        <canvas
          ref={canvasRef}
          width={300}
          height={200}
          className="absolute inset-0 cursor-pointer rounded-lg"
          onMouseDown={() => setIsScratching(true)}
          onMouseUp={() => setIsScratching(false)}
          onMouseMove={(e) => isScratching && handleScratch(e)}
          onTouchStart={() => setIsScratching(true)}
          onTouchEnd={() => setIsScratching(false)}
          onTouchMove={handleScratch}
        />
      </div>

      <div className="text-center">
        <Button
          onClick={startNewCard}
          disabled={remainingCards <= 0}
          className="bg-blue-600 hover:bg-blue-700"
        >
          New Card
        </Button>
        {remainingCards <= 0 && (
          <p className="text-red-400 mt-4">
            You have used all your scratch cards for today. Come back tomorrow!
          </p>
        )}
      </div>
    </Card>
  )
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Alert } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

interface RewardTask {
  id: string
  title: string
  description: string
  points: number
  type: 'daily' | 'video' | 'survey' | 'referral'
  completed: boolean
  progress?: number
  maxProgress?: number
}

export default function Rewards() {
  const [points, setPoints] = useState(1500)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const [tasks, setTasks] = useState<RewardTask[]>([
    {
      id: "daily",
      title: "Daily Check-in",
      description: "Check in daily to earn points",
      points: 20,
      type: "daily",
      completed: false
    },
    {
      id: "video1",
      title: "Watch Video",
      description: "Watch a short video to earn points",
      points: 50,
      type: "video",
      completed: false
    },
    {
      id: "survey1",
      title: "Complete Survey",
      description: "Share your feedback and earn points",
      points: 100,
      type: "survey",
      completed: false
    },
    {
      id: "referral",
      title: "Refer Friends",
      description: "Earn points for each friend who joins",
      points: 200,
      type: "referral",
      completed: false,
      progress: 2,
      maxProgress: 5
    }
  ])

  const handleCompleteTask = async (taskId: string) => {
    setError("")
    setSuccess("")

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))

      setTasks(prevTasks =>
        prevTasks.map(task =>
          task.id === taskId ? { ...task, completed: true } : task
        )
      )

      const task = tasks.find(t => t.id === taskId)
      if (task) {
        setPoints(prev => prev + task.points)
        setSuccess(`Congratulations! You earned ${task.points} points!`)
      }
    } catch (err) {
      setError("Failed to complete task. Please try again.")
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Earn Rewards</h1>
        <p className="text-gray-400 text-lg mb-4">
          Complete tasks to earn points and unlock premium features
        </p>
        <div className="inline-block bg-gray-800/50 rounded-full px-6 py-3">
          <span className="text-2xl font-bold text-yellow-400">{points}</span>
          <span className="text-gray-400 ml-2">Total Points</span>
        </div>
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

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Link href="/games/lucky-wheel">
          <Card className="p-6 bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 transition-colors cursor-pointer">
            <h3 className="text-xl font-bold mb-2">Lucky Wheel</h3>
            <p className="text-gray-400">Spin the wheel to win up to 500 points</p>
          </Card>
        </Link>

        <Link href="/games/scratch-card">
          <Card className="p-6 bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 transition-colors cursor-pointer">
            <h3 className="text-xl font-bold mb-2">Scratch Cards</h3>
            <p className="text-gray-400">Scratch to reveal instant rewards</p>
          </Card>
        </Link>

        <Link href="/games/tic-tac-toe">
          <Card className="p-6 bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 transition-colors cursor-pointer">
            <h3 className="text-xl font-bold mb-2">Tic Tac Toe</h3>
            <p className="text-gray-400">Play and earn points</p>
          </Card>
        </Link>
      </div>

      {/* Daily Tasks */}
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Daily Tasks</h2>
        <div className="space-y-4">
          {tasks.map(task => (
            <Card 
              key={task.id}
              className="p-6 bg-gray-800/50 border-gray-700"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold mb-1">{task.title}</h3>
                  <p className="text-gray-400 mb-2">{task.description}</p>
                  {task.progress !== undefined && task.maxProgress !== undefined && (
                    <div className="w-48">
                      <Progress 
                        value={(task.progress / task.maxProgress) * 100}
                        className="h-2 mb-1"
                      />
                      <p className="text-sm text-gray-400">
                        {task.progress} / {task.maxProgress} completed
                      </p>
                    </div>
                  )}
                </div>
                <div className="text-right">
                  <p className="text-yellow-400 font-bold mb-2">
                    +{task.points} points
                  </p>
                  <Button
                    onClick={() => handleCompleteTask(task.id)}
                    disabled={task.completed}
                    variant={task.completed ? "outline" : "default"}
                  >
                    {task.completed ? "Completed" : "Complete"}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Premium Benefits */}
      <Card className="max-w-2xl mx-auto mt-12 p-6 bg-gray-800/50 border-gray-700">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Premium Benefits</h2>
          <p className="text-gray-400 mb-6">
            Upgrade to Premium to earn 2x points and unlock exclusive rewards
          </p>
          <Link href="/premium">
            <Button className="bg-yellow-600 hover:bg-yellow-700">
              Upgrade to Premium
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Alert } from "@/components/ui/alert"

type Player = "X" | "O"
type BoardState = (Player | null)[]

export default function TicTacToe() {
  const [board, setBoard] = useState<BoardState>(Array(9).fill(null))
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X")
  const [winner, setWinner] = useState<Player | "Draw" | null>(null)
  const [points, setPoints] = useState(0)
  const [gamesPlayed, setGamesPlayed] = useState(0)
  const [dailyLimit] = useState(5)
  const [error, setError] = useState("")

  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ]

  const checkWinner = (squares: BoardState): Player | "Draw" | null => {
    // Check for winner
    for (const [a, b, c] of winningCombinations) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a] as Player
      }
    }
    
    // Check for draw
    if (squares.every(square => square !== null)) {
      return "Draw"
    }
    
    return null
  }

  const handleClick = (index: number) => {
    if (board[index] || winner || gamesPlayed >= dailyLimit) return

    const newBoard = [...board]
    newBoard[index] = currentPlayer
    setBoard(newBoard)

    const gameWinner = checkWinner(newBoard)
    if (gameWinner) {
      setWinner(gameWinner)
      if (gameWinner === "X") {
        // Player wins
        setPoints(prev => prev + 50)
      }
      setGamesPlayed(prev => prev + 1)
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X")
    }
  }

  const makeComputerMove = () => {
    if (winner) return

    // Find empty squares
    const emptySquares = board
      .map((square, index) => square === null ? index : null)
      .filter((index): index is number => index !== null)

    if (emptySquares.length === 0) return

    // Make random move
    const randomIndex = emptySquares[Math.floor(Math.random() * emptySquares.length)]
    const newBoard = [...board]
    newBoard[randomIndex] = "O"
    setBoard(newBoard)

    const gameWinner = checkWinner(newBoard)
    if (gameWinner) {
      setWinner(gameWinner)
      setGamesPlayed(prev => prev + 1)
    } else {
      setCurrentPlayer("X")
    }
  }

  useEffect(() => {
    if (currentPlayer === "O" && !winner) {
      // Add delay to make computer move feel more natural
      const timeoutId = setTimeout(makeComputerMove, 500)
      return () => clearTimeout(timeoutId)
    }
  }, [currentPlayer])

  const resetGame = () => {
    if (gamesPlayed >= dailyLimit) {
      setError("You've reached your daily game limit. Come back tomorrow!")
      return
    }
    
    setBoard(Array(9).fill(null))
    setCurrentPlayer("X")
    setWinner(null)
    setError("")
  }

  const renderSquare = (index: number) => (
    <button
      className={`w-24 h-24 border border-gray-600 flex items-center justify-center text-3xl font-bold
        ${board[index] === "X" ? "text-blue-400" : "text-red-400"}
        hover:bg-gray-700/50 transition-colors`}
      onClick={() => handleClick(index)}
      disabled={!!board[index] || !!winner || currentPlayer === "O"}
    >
      {board[index]}
    </button>
  )

  return (
    <Card className="p-6 bg-gray-800/50 border-gray-700">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Tic Tac Toe</h1>
        <p className="text-gray-400">
          Play against the computer to win points! Games remaining today: {dailyLimit - gamesPlayed}
        </p>
        <p className="text-green-400 mt-2">
          Current Points: {points}
        </p>
      </div>

      {error && (
        <Alert variant="destructive" className="mb-4">
          {error}
        </Alert>
      )}

      <div className="flex flex-col items-center">
        {/* Game Status */}
        <div className="mb-4 text-xl">
          {winner ? (
            <div className="text-center">
              {winner === "Draw" ? (
                <p className="text-yellow-400">Game ended in a draw!</p>
              ) : winner === "X" ? (
                <p className="text-green-400">You won! +50 points</p>
              ) : (
                <p className="text-red-400">Computer won!</p>
              )}
            </div>
          ) : (
            <p>
              Current Turn: {currentPlayer === "X" ? "Your Turn" : "Computer's Turn"}
            </p>
          )}
        </div>

        {/* Game Board */}
        <div className="grid grid-cols-3 gap-1 mb-6">
          {Array(9).fill(null).map((_, i) => (
            <div key={i}>{renderSquare(i)}</div>
          ))}
        </div>

        {/* Game Controls */}
        <div className="space-x-4">
          <Button
            onClick={resetGame}
            disabled={gamesPlayed >= dailyLimit}
            className="bg-blue-600 hover:bg-blue-700"
          >
            New Game
          </Button>
        </div>

        {gamesPlayed >= dailyLimit && (
          <p className="text-red-400 mt-4">
            You've reached your daily game limit. Come back tomorrow!
          </p>
        )}
      </div>
    </Card>
  )
}

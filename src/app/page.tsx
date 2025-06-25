'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Clock, Calendar, Play, Trophy, Users, Timer, CheckCircle2 } from 'lucide-react'

export default function LandingPage() {
  const [currentTime, setCurrentTime] = useState<Date | null>(null)
  const router = useRouter()

  // Hardcoded quiz start time - today at 2 PM
  const getQuizStartTime = () => {
    const today = new Date()
    today.setHours(14, 0, 0, 0) // 2 PM
    return today
  }

  const quizStartTime = getQuizStartTime()

  useEffect(() => {
    setCurrentTime(new Date())
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!currentTime) {
    return null; // Or a loading spinner
  }

  const isQuizTime = currentTime >= quizStartTime
  const timeUntilQuiz = quizStartTime - currentTime

  const formatTime = (date: Date) => {
    return date.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    })
  }

  const formatTimeUntil = (milliseconds: number) => {
    const totalSeconds = Math.floor(milliseconds / 1000)
    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60

    if (hours > 0) {
      return `${hours}h ${minutes}m ${seconds}s`
    } else if (minutes > 0) {
      return `${minutes}m ${seconds}s`
    } else {
      return `${seconds}s`
    }
  }

  const handleStartQuiz = () => {
    router.push('/quiz')
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const pulseVariants = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-6 sm:py-8 max-w-6xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Hero Section */}
          <motion.div variants={cardVariants} className="text-center mb-8 sm:mb-12">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-4"
            >
              <Trophy className="h-16 w-16 sm:h-20 sm:w-20 mx-auto text-yellow-500 mb-4" />
            </motion.div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-4 sm:mb-6">
              Quiz Challenge
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground px-2 mb-6">
              Test your knowledge with our interactive quiz experience
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              <Badge variant="secondary" className="text-sm px-3 py-1">
                <Users className="h-4 w-4 mr-1" />
                5 Questions
              </Badge>
              <Badge variant="secondary" className="text-sm px-3 py-1">
                <Timer className="h-4 w-4 mr-1" />
                ~5 Minutes
              </Badge>
              <Badge variant="secondary" className="text-sm px-3 py-1">
                <CheckCircle2 className="h-4 w-4 mr-1" />
                Multiple Choice
              </Badge>
            </div>
          </motion.div>

          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
            {/* Current Time Card */}
            <motion.div variants={cardVariants}>
              <Card className="h-full bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-700 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <CardHeader className="text-center pb-3 sm:pb-6">
                  <CardTitle className="flex items-center justify-center gap-3 text-xl sm:text-2xl md:text-3xl text-blue-700 dark:text-blue-300">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    >
                      <Clock className="h-6 w-6 sm:h-8 sm:w-8" />
                    </motion.div>
                    Current Time
                  </CardTitle>
                </CardHeader>
                <CardContent className="pb-6 sm:pb-8">
                  <motion.div 
                    className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm"
                    key={currentTime.getSeconds()}
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.1 }}
                  >
                    <p className="text-sm sm:text-lg md:text-xl font-mono break-words text-blue-800 dark:text-blue-200">
                      {formatTime(currentTime)}
                    </p>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quiz Start Time Card */}
            <motion.div variants={cardVariants}>
              <Card className="h-full bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-700 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <CardHeader className="text-center pb-3 sm:pb-6">
                  <CardTitle className="flex items-center justify-center gap-3 text-xl sm:text-2xl md:text-3xl text-purple-700 dark:text-purple-300">
                    <Calendar className="h-6 w-6 sm:h-8 sm:w-8" />
                    Quiz Start Time
                  </CardTitle>
                </CardHeader>
                <CardContent className="pb-6 sm:pb-8">
                  <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm mb-4">
                    <p className="text-sm sm:text-lg md:text-xl font-mono break-words text-purple-800 dark:text-purple-200">
                      {formatTime(quizStartTime)}
                    </p>
                  </div>
                  {!isQuizTime && (
                    <div className="text-center">
                      <p className="text-muted-foreground mb-3 text-sm sm:text-base">Time remaining:</p>
                      <motion.div 
                        className="p-3 bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 rounded-lg"
                        key={Math.floor(timeUntilQuiz / 1000)}
                        initial={{ scale: 0.95 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.1 }}
                      >
                        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-600 dark:text-orange-400">
                          {formatTimeUntil(timeUntilQuiz)}
                        </p>
                      </motion.div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Quiz Start Button */}
          <motion.div variants={cardVariants} className="mt-8">
            <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-700 hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6 sm:pt-8 pb-6 sm:pb-8">
                <div className="text-center">
                  {isQuizTime ? (
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.div
                        animate={pulseVariants}
                        className="mb-4"
                      >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-lg font-semibold">
                          🎉 Quiz is now available!
                        </div>
                      </motion.div>
                      <Button 
                        onClick={handleStartQuiz}
                        size="lg"
                        className="text-lg sm:text-xl px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                      >
                        <Play className="mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                        Start Quiz Now
                      </Button>
                    </motion.div>
                  ) : (
                    <div>
                      <div className="mb-4">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-lg">
                          ⏳ Quiz will be available at the scheduled time
                        </div>
                      </div>
                      <Button 
                        disabled
                        size="lg"
                        className="text-lg sm:text-xl px-8 sm:px-12 py-3 sm:py-4 opacity-50"
                      >
                        <Play className="mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                        Start Quiz
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Enhanced Instructions */}
          <motion.div variants={cardVariants} className="mt-8">
            <Card className="bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-800/50 dark:to-slate-800/50 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4 sm:pb-6">
                <CardTitle className="text-center text-xl sm:text-2xl text-gray-800 dark:text-gray-200">
                  📋 Quiz Instructions
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-6 sm:pb-8">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="text-center p-4 bg-white/70 dark:bg-gray-800/70 rounded-lg">
                    <div className="text-2xl mb-2">📝</div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">5 Multiple Choice Questions</p>
                  </div>
                  <div className="text-center p-4 bg-white/70 dark:bg-gray-800/70 rounded-lg">
                    <div className="text-2xl mb-2">🔤</div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">4 Options (A, B, C, D)</p>
                  </div>
                  <div className="text-center p-4 bg-white/70 dark:bg-gray-800/70 rounded-lg">
                    <div className="text-2xl mb-2">✅</div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Submit When Complete</p>
                  </div>
                  <div className="text-center p-4 bg-white/70 dark:bg-gray-800/70 rounded-lg">
                    <div className="text-2xl mb-2">🌐</div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Stable Internet Required</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}


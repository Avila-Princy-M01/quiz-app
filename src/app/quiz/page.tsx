'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, CheckCircle, Trophy, Clock, Star } from 'lucide-react'

export default function QuizPage() {
  const router = useRouter()
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const questions = [
    {
      id: 1,
      question: "What is the capital of France?",
      options: [
        { value: "A", text: "London" },
        { value: "B", text: "Berlin" },
        { value: "C", text: "Paris" },
        { value: "D", text: "Madrid" }
      ]
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: [
        { value: "A", text: "Venus" },
        { value: "B", text: "Mars" },
        { value: "C", text: "Jupiter" },
        { value: "D", text: "Saturn" }
      ]
    },
    {
      id: 3,
      question: "What is the largest ocean on Earth?",
      options: [
        { value: "A", text: "Atlantic Ocean" },
        { value: "B", text: "Indian Ocean" },
        { value: "C", text: "Arctic Ocean" },
        { value: "D", text: "Pacific Ocean" }
      ]
    },
    {
      id: 4,
      question: "Who painted the Mona Lisa?",
      options: [
        { value: "A", text: "Vincent van Gogh" },
        { value: "B", text: "Leonardo da Vinci" },
        { value: "C", text: "Pablo Picasso" },
        { value: "D", text: "Michelangelo" }
      ]
    },
    {
      id: 5,
      question: "What is the chemical symbol for gold?",
      options: [
        { value: "A", text: "Go" },
        { value: "B", text: "Gd" },
        { value: "C", text: "Au" },
        { value: "D", text: "Ag" }
      ]
    }
  ]

  const handleAnswerChange = (questionId: number, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }))
  }

  const handleSubmit = () => {
    setIsSubmitted(true)
  }

  const handleBackToHome = () => {
    router.push('/')
  }

  const allQuestionsAnswered = questions.every(q => answers[q.id])
  const progressPercentage = (Object.keys(answers).length / questions.length) * 100

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const completionVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-900/20 dark:via-emerald-900/20 dark:to-teal-900/20 flex items-center justify-center p-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={completionVariants}
          className="w-full max-w-2xl"
        >
          <Card className="text-center shadow-2xl bg-gradient-to-br from-white to-green-50 dark:from-gray-800 dark:to-green-900/20 border-green-200 dark:border-green-700">
            <CardContent className="pt-8 sm:pt-12 pb-8 sm:pb-12 px-6 sm:px-8">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, duration: 0.8, type: "spring", bounce: 0.4 }}
                className="mb-6"
              >
                <div className="relative">
                  <Trophy className="h-20 w-20 sm:h-24 sm:w-24 text-yellow-500 mx-auto" />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-2 -right-2"
                  >
                    <Star className="h-8 w-8 text-yellow-400" />
                  </motion.div>
                </div>
              </motion.div>
              
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                🎉 Quiz Completed!
              </motion.h1>
              
              <motion.p 
                className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 px-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                Congratulations! You've successfully completed the quiz. Your answers have been submitted.
              </motion.p>
              
              <motion.div 
                className="space-y-4 sm:space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                <div className="flex justify-center gap-4 flex-wrap">
                  <Badge variant="secondary" className="text-base px-4 py-2">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    {Object.keys(answers).length} / {questions.length} Answered
                  </Badge>
                  <Badge variant="secondary" className="text-base px-4 py-2">
                    <Clock className="h-4 w-4 mr-2" />
                    Completed
                  </Badge>
                </div>
                
                <Button 
                  onClick={handleBackToHome} 
                  size="lg"
                  className="text-lg px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Back to Home
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-6 sm:py-8 max-w-4xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={cardVariants} className="mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <Button 
                variant="outline" 
                onClick={handleBackToHome}
                className="self-start hover:scale-105 transition-transform duration-200 border-2"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
              
              <div className="flex gap-2">
                <Badge variant="secondary" className="text-sm">
                  <Clock className="h-4 w-4 mr-1" />
                  ~5 min
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  {questions.length} Questions
                </Badge>
              </div>
            </div>
            
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-3">
                Quiz Challenge
              </h1>
              <p className="text-muted-foreground text-base sm:text-lg px-2">
                Answer all questions and submit when you're ready
              </p>
            </div>
          </motion.div>

          {/* Enhanced Progress Bar */}
          <motion.div variants={cardVariants} className="mb-6 sm:mb-8">
            <Card className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 border-indigo-200 dark:border-indigo-700">
              <CardContent className="pt-6 pb-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">Progress</span>
                    <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
                      {Object.keys(answers).length} / {questions.length}
                    </span>
                  </div>
                  <Progress 
                    value={progressPercentage} 
                    className="h-3 bg-indigo-100 dark:bg-indigo-900/30"
                  />
                  <div className="text-center">
                    <span className="text-xs text-muted-foreground">
                      {progressPercentage.toFixed(0)}% Complete
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="space-y-6 sm:space-y-8">
            <AnimatePresence>
              {questions.map((question, index) => (
                <motion.div 
                  key={question.id}
                  variants={cardVariants}
                  layout
                >
                  <Card className={`hover:shadow-xl transition-all duration-300 hover:scale-[1.01] ${
                    answers[question.id] 
                      ? 'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-700' 
                      : 'bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-800/50 dark:to-slate-800/50'
                  }`}>
                    <CardHeader className="pb-4 sm:pb-6">
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-lg sm:text-xl md:text-2xl">
                          Question {index + 1} of {questions.length}
                        </CardTitle>
                        {answers[question.id] && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", bounce: 0.5 }}
                          >
                            <CheckCircle className="h-6 w-6 text-green-500" />
                          </motion.div>
                        )}
                      </div>
                      <CardDescription className="text-base sm:text-lg md:text-xl font-medium text-foreground px-1">
                        {question.question}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pb-6 sm:pb-8">
                      <RadioGroup
                        value={answers[question.id] || ""}
                        onValueChange={(value) => handleAnswerChange(question.id, value)}
                        className="space-y-3 sm:space-y-4"
                      >
                        {question.options.map((option) => (
                          <motion.div 
                            key={option.value} 
                            className="flex items-center space-x-3"
                            whileHover={{ scale: 1.02, x: 5 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <RadioGroupItem 
                              value={option.value} 
                              id={`q${question.id}-${option.value}`}
                              className="mt-0.5 h-5 w-5"
                            />
                            <Label 
                              htmlFor={`q${question.id}-${option.value}`}
                              className="text-sm sm:text-base cursor-pointer flex-1 py-3 px-4 rounded-lg hover:bg-white/70 dark:hover:bg-gray-700/50 transition-all duration-200 border border-transparent hover:border-gray-200 dark:hover:border-gray-600"
                            >
                              <span className="font-bold text-lg mr-3 text-blue-600 dark:text-blue-400">
                                {option.value}.
                              </span>
                              {option.text}
                            </Label>
                          </motion.div>
                        ))}
                      </RadioGroup>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Enhanced Submit Section */}
            <motion.div variants={cardVariants}>
              <Card className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200 dark:border-purple-700 hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-6 sm:pt-8 pb-6 sm:pb-8">
                  <div className="text-center space-y-4 sm:space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-purple-700 dark:text-purple-300">
                        Ready to Submit?
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Progress: {Object.keys(answers).length} / {questions.length} questions answered
                      </p>
                    </div>
                    
                    {!allQuestionsAnswered && (
                      <motion.div 
                        className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-lg"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-amber-700 dark:text-amber-300 text-sm font-medium">
                          ⚠️ Please answer all questions before submitting
                        </p>
                      </motion.div>
                    )}
                    
                    <Button 
                      onClick={handleSubmit}
                      disabled={!allQuestionsAnswered}
                      size="lg"
                      className={`text-lg sm:text-xl px-8 sm:px-12 py-3 sm:py-4 transition-all duration-300 ${
                        allQuestionsAnswered 
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl hover:scale-105' 
                          : 'opacity-50 cursor-not-allowed'
                      }`}
                    >
                      {allQuestionsAnswered ? (
                        <>
                          <CheckCircle className="mr-3 h-5 w-5" />
                          Submit Quiz
                        </>
                      ) : (
                        <>
                          <Clock className="mr-3 h-5 w-5" />
                          Complete All Questions
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}


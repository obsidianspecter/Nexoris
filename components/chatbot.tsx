// components/chatbot.tsx

"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, X, ArrowUpRight } from "lucide-react"

type Message = {
  sender: "user" | "bot"
  text: string
  timestamp: string
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isBotTyping, setIsBotTyping] = useState(false)
  const chatEndRef = useRef<HTMLDivElement | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)

  // Load messages from localStorage on mount
  useEffect(() => {
    const storedMessages = localStorage.getItem("chatMessages")
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages))
    }
  }, [])

  // Save messages to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages))
  }, [messages])

  // Scroll to the bottom when messages update or chatbot opens
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages, isOpen])

  // Auto-focus input when chatbot opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  // Predefined bot responses
  const botResponses = [
    "Hello! How can I assist you today?",
    "I'm here to help! What do you need?",
    "Hi there! Feel free to ask me anything.",
    "Greetings! How may I support you today?",
    "Hey! Let me know how I can help you.",
    "Hello! What would you like to know?",
    "Hi! I'm ready to assist you with any questions.",
    "Good day! How can I be of service?",
    "Hello! What can I do for you today?",
    "Hi there! How may I assist you?"
  ]

  // Handle user message submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim() === "") return

    const userMessage: Message = {
      sender: "user",
      text: input.trim(),
      timestamp: new Date().toLocaleTimeString(),
    }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsBotTyping(true) // Start typing indicator

    // Generate bot response
    generateBotResponse()
  }

  // Function to generate bot responses
  const generateBotResponse = () => {
    // Select a random response from the botResponses array
    const randomIndex = Math.floor(Math.random() * botResponses.length)
    const botResponse = botResponses[randomIndex]

    // Simulate a delay for bot response
    setTimeout(() => {
      const botMessage: Message = {
        sender: "bot",
        text: botResponse,
        timestamp: new Date().toLocaleTimeString(),
      }
      setMessages((prev) => [...prev, botMessage])
      setIsBotTyping(false) // Stop typing indicator
    }, 1000)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-background border border-border rounded-lg shadow-lg w-full sm:w-80 h-96 flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-border flex justify-between items-center">
            <h3 className="font-bold">Customer Support</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              aria-label="Close Chatbot"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Chat Messages */}
          <div className="flex-grow p-4 overflow-auto bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-4 flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    msg.sender === "user"
                      ? "bg-gray-200 text-gray-800"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {msg.text}
                  <span className="block text-xs text-gray-400 mt-1">{msg.timestamp}</span>
                </div>
              </div>
            ))}

            {isBotTyping && (
              <div className="mb-4 flex justify-start">
                <div className="max-w-xs px-4 py-2 rounded-lg bg-gray-200 text-gray-800 animate-pulse">
                  Typing...
                </div>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Input Field */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-border bg-gray-100">
            <input
              ref={inputRef}
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full p-2 rounded border border-input bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Chat input"
            />
          </form>
        </div>
      ) : (
        <Button
          variant="default"
          size="icon"
          className="rounded-full h-12 w-12 flex items-center justify-center"
          onClick={() => setIsOpen(true)}
          aria-label="Open Chatbot"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
    </div>
  )
}

"use client"

import { useState } from "react"
import { MessageCircle, X, Send } from "lucide-react"
import Image from "next/image"

type Message = {
  id: number
  text: string
  sender: "bot" | "user"
  timestamp: string
}

export function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! Welcome to Empire Contracting Outdoors. How can we help transform your outdoor space today?",
      sender: "bot",
      timestamp: "Just now",
    },
  ])

  const handleSendMessage = () => {
    if (!message.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: message,
      sender: "user",
      timestamp: "Just now",
    }

    setMessages((prev) => [...prev, userMessage])
    setMessage("")

    // AI response logic
    setTimeout(() => {
      const botResponse = generateBotResponse(message.toLowerCase())
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: botResponse,
          sender: "bot",
          timestamp: "Just now",
        },
      ])
    }, 1000)
  }

  const generateBotResponse = (userInput: string): string => {
    // Common greetings
    if (userInput.match(/\b(hi|hello|hey|good morning|good afternoon)\b/)) {
      return "Hello! Thanks for reaching out. We're here to help with all your outdoor contracting needs. What project are you interested in?"
    }

    // Pricing questions
    if (userInput.match(/\b(price|cost|quote|estimate|how much)\b/)) {
      return "Great question! Project costs vary based on size, materials, and complexity. I can connect you with our team for a free estimate. What type of project are you planning? (Deck, Pool, Fence, Patio, Outdoor Kitchen)"
    }

    // Services questions
    if (userInput.match(/\b(deck|decking)\b/)) {
      return "We specialize in custom deck construction using premium materials! We offer wood and composite options. Would you like to schedule a free consultation to discuss your deck project?"
    }

    if (userInput.match(/\b(pool|swimming)\b/)) {
      return "We design and install beautiful inground swimming pools! Our team handles everything from design to completion. Ready to start your pool project? Let's get you a free quote!"
    }

    if (userInput.match(/\b(fence|fencing)\b/)) {
      return "We install all types of fencing - privacy, decorative, vinyl, wood, and chain link. What style are you looking for? I can connect you with our fencing experts."
    }

    if (userInput.match(/\b(patio|hardscape)\b/)) {
      return "We create stunning patios and hardscapes using pavers, natural stone, and concrete. Perfect for entertaining! Want to see our portfolio or get a quote?"
    }

    if (userInput.match(/\b(outdoor kitchen|fireplace)\b/)) {
      return "Outdoor kitchens and fireplaces are our specialty! We can design a complete outdoor living space. Would you like to schedule a design consultation?"
    }

    // Service area questions
    if (userInput.match(/\b(area|location|where|service)\b/)) {
      return "We proudly serve all of Northern Virginia including Arlington, Fairfax, Loudoun, and Prince William Counties. What area are you located in?"
    }

    // Timeline questions
    if (userInput.match(/\b(when|timeline|how long|start)\b/)) {
      return "Project timelines vary by scope - typically 2-6 weeks from start to finish. We can provide a detailed timeline during your free consultation. When would you like to get started?"
    }

    // Contact/consultation
    if (userInput.match(/\b(contact|call|phone|meet|consultation|schedule)\b/)) {
      return "Perfect! You can call us at (703) 598-7499 or click 'Get Quote' to schedule a free consultation. We're available Monday-Saturday 8am-6pm. When works best for you?"
    }

    // Thank you
    if (userInput.match(/\b(thank|thanks|appreciate)\b/)) {
      return "You're very welcome! Is there anything else I can help you with today?"
    }

    // Default response for unrecognized queries
    return "I'm still learning! Let me connect you with our expert team who can answer that in detail. Please call us at (703) 598-7499 or click 'Get Quote' for immediate assistance. We're here to help!"
  }

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-2xl hover:shadow-blue-500/50 flex items-center justify-center transition-all hover:scale-110 animate-bounce"
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full animate-ping" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full" />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-4 right-4 z-50 w-[calc(100vw-2rem)] max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src="/images/white-png.png"
                alt="Empire Contracting Outdoors"
                width={100}
                height={35}
                className="w-24 h-auto"
              />
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 p-3 bg-gray-50 h-80 overflow-y-auto">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex gap-2 mb-3 ${msg.sender === "user" ? "justify-end" : ""}`}>
                {msg.sender === "bot" && (
                  <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                )}
                <div
                  className={`rounded-lg p-2.5 shadow-sm max-w-[80%] ${
                    msg.sender === "bot"
                      ? "bg-white rounded-tl-none"
                      : "bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-tr-none"
                  }`}
                >
                  <p className={`text-xs ${msg.sender === "bot" ? "text-gray-800" : "text-white"}`}>{msg.text}</p>
                  <p className={`text-[10px] mt-1 ${msg.sender === "bot" ? "text-gray-500" : "text-orange-100"}`}>
                    {msg.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 text-xs px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSendMessage}
                className="w-9 h-9 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white flex items-center justify-center hover:from-orange-600 hover:to-orange-700 transition-all"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from 'lucide-react'

export function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">Contact</h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto mt-2" />
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="flex items-center space-x-4 text-white">
            <Phone className="w-6 h-6 text-orange-500" />
            <div>
              <p>+0558570571</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 text-white">
            <Mail className="w-6 h-6 text-orange-500" />
            <p>mdniyaz1842000@gmail.com</p>
          </div>
          
          <div className="flex items-center space-x-4 text-white">
            <MapPin className="w-6 h-6 text-orange-500" />
            <p>Dubai, United Arab Emirates</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Full Name"
            className="bg-purple-800/50 border-purple-700 text-white placeholder:text-white/70"
            required
          />
          <Input
            type="email"
            placeholder="Email Address"
            className="bg-purple-800/50 border-purple-700 text-white placeholder:text-white/70"
            required
          />
          <div className="grid grid-cols-2 gap-4">
            <Input
              type="tel"
              placeholder="Phone Number"
              className="bg-purple-800/50 border-purple-700 text-white placeholder:text-white/70"
            />
            <Input
              placeholder="Subject"
              className="bg-purple-800/50 border-purple-700 text-white placeholder:text-white/70"
            />
          </div>
          <Textarea
            placeholder="Your Message"
            className="bg-purple-800/50 border-purple-700 text-white placeholder:text-white/70 min-h-[150px]"
            required
          />
          <Button 
            type="submit"
            className="bg-purple-800/50 hover:bg-purple-700 text-white w-24"
          >
            Send
          </Button>
        </form>
      </div>
    </section>
  )
}


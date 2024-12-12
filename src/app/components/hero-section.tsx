// import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Linkedin, Github, ChevronDown } from 'lucide-react'
import Image from "next/image"
// import cv from ''

export function HeroSection() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 py-24 w-full max-w-7xl mx-auto min-h-screen">
      <div className="space-y-6 md:w-1/2" data-aos="fade-right">
        <p className="text-white text-xl">Hi, It&apos;s me</p>
        <h1 className="text-white text-5xl md:text-6xl font-bold">Md Niyaz</h1>
        <p className="text-2xl md:text-3xl">
          And I&apos;m a{" "}
          <span className="text-orange-500">Full Stack Developer</span>
        </p>
        <p className="text-white/80 max-w-lg">
        Designing intuitive interfaces with precision.
        Crafting seamless user experiences with passion.
        </p>
        
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-orange-500 transition-colors">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/md-niyaz/"target='_blank' className="text-white hover:text-orange-500 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://github.com/mdniyaz224" target='_blank' className="text-white hover:text-orange-500 transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="text-white hover:text-orange-500 transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
        </div>

        <a
          href="public\asset\latestcv.pdf"
          download="Md_Niyaz_CV.pdf"
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded inline-flex justify-center items-center transition-colors"
        >
          Download CV
        </a>
      </div>

      <div className="md:w-1/2 mt-8 md:mt-0" data-aos="fade-left">
        <Image
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
          alt="Development illustration"
          width={500}
          height={400}
          className="w-full h-auto rounded-lg shadow-lg"
          priority
        />
      </div>

      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll to About section"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </div>
  )
}


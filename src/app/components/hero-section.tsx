import { BorderBeam } from '@/components/magicui/border-beam';
import { CoolMode } from '@/components/magicui/cool-mode';
import { IconCloud } from '@/components/magicui/icon-cloud'
import { LineShadowText } from '@/components/magicui/line-shadow-text';
import { useTheme } from "next-themes";

import { Facebook, Instagram, Linkedin, Github, ChevronDown } from 'lucide-react'
// import Image from "next/image"
// import { IconCloud } from "@/registry/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];



export function HeroSection() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );
  const theme = useTheme();
  const shadowColor = theme.resolvedTheme === "dark" ? "white" : "black";

  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 py-24 w-full max-w-7xl mx-auto min-h-screen">
      <div className="space-y-6 md:w-1/2" data-aos="fade-right">
        <p className="text-white text-xl">Hello, I&apos;m</p>
        <h1 className="text-white text-5xl md:text-6xl font-bold">Mohammad Niyaz</h1>
        <p className="text-2xl text-white md:text-3xl">
          And I&apos;m a{" "}
          <span className="text-orange-500">
            <LineShadowText className="italic" shadowColor={shadowColor}>
              Full-Stack Engineer
            </LineShadowText>
          </span>
        </p>
        <p className="text-white/80 max-w-lg">
          I build scalable web applications with React, Next.js, Node.js, TypeScript, and cloud-ready architecture for modern businesses.
        </p>

        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-orange-500 transition-colors">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/md-niyaz/" target='_blank' className="text-white hover:text-orange-500 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://github.com/mdniyaz224" target='_blank' className="text-white hover:text-orange-500 transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="text-white hover:text-orange-500 transition-colors">
            <Instagram className="w-6 h-6" />
            
          </a>
        </div>
        <CoolMode>

        <a
          href="/asset/latestcv.pdf"
          download="Md_Niyaz_CV.pdf"
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded inline-flex justify-center items-center transition-colors"
        >
          Download CV
        </a>
        </CoolMode>

      </div>


      <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden bg-background">
        <IconCloud images={images} />
      </div>
      <CoolMode>
      <button
        type="button"
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce rounded-full p-1"
        aria-label="Scroll to About section"
      >
        <ChevronDown className="w-8 h-8" />
        <BorderBeam
          size={40}
          initialOffset={20}
          className="from-transparent via-yellow-500 to-transparent"
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 20,
          }}
        />

      </button>
      </CoolMode>

    </div>
  )
}


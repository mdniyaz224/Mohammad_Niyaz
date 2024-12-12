"use client"

import { useParams } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

// This would typically come from a database or API
const projects = [
  {
    id: "web-design",
    title: "Web Design",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    description: "A comprehensive web design project focusing on user experience and modern aesthetics. This project involved creating a responsive layout, implementing a cohesive color scheme, and ensuring accessibility across various devices.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Figma"],
    challenges: "One of the main challenges was creating a design that was both visually appealing and functionally efficient across a wide range of devices and screen sizes.",
    outcome: "The final product was a sleek, user-friendly website that significantly improved client engagement and reduced bounce rates.",
  },
  {
    id: "web-development",
    title: "Web Development",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    description: "A full-stack web development project for a client in the e-commerce sector. This involved building both the front-end user interface and the back-end server logic.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redux"],
    challenges: "Integrating multiple third-party APIs and ensuring seamless communication between the front-end and back-end was particularly challenging.",
    outcome: "The resulting web application provided a smooth shopping experience for users and an efficient management system for the client.",
  },
  // ... add more projects as needed
]

export default function ProjectPage() {
  const params = useParams()
  const project = projects.find(p => p.id === params.id)

  if (!project) {
    return <div className="text-center text-white">Project not found</div>
  }

  return (
    <div className="min-h-screen bg-purple-900 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/#my_team">
          <Button variant="ghost" className="mb-6 text-white hover:text-orange-500">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to My Team
          </Button>
        </Link>
        
        <h1 className="text-4xl font-bold text-white mb-6">{project.title}</h1>
        
        <div className="relative w-full h-64 mb-6">
          <Image 
            src={project.image} 
            alt={project.title} 
            fill 
            className="object-cover rounded-lg"
          />
        </div>
        
        <div className="space-y-6 text-white">
          <p>{project.description}</p>
          
          <div>
            <h2 className="text-2xl font-semibold mb-2">Technologies Used</h2>
            <ul className="list-disc list-inside">
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-2">Challenges</h2>
            <p>{project.challenges}</p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-2">Outcome</h2>
            <p>{project.outcome}</p>
          </div>
        </div>
      </div>
    </div>
  )
}


import { BorderBeam } from "@/components/magicui/border-beam"
import { Card, CardContent } from "@/components/ui/card"
import { Laptop, Smartphone, BarChart3 } from 'lucide-react'

export function Services() {
  const services = [
    {
      icon: <Laptop className="w-12 h-12 text-orange-500" />,
      title: "Full-Stack Web Development",
      description:
        "Design and build end-to-end web applications using React.js, Next.js, Node.js, Express.js, MongoDB, and PostgreSQL for scalable business solutions.",
    },
    {
      icon: <Smartphone className="w-12 h-12 text-orange-500" />,
      title: "Frontend Engineering",
      description:
        "Create responsive, high-performance interfaces with React.js, Next.js, TypeScript, Redux Toolkit, and UI libraries like Tailwind, MUI, and Mantine.",
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-orange-500" />,
      title: "Backend & API Development",
      description:
        "Develop secure REST APIs, database integrations, and business logic for enterprise platforms, internal systems, and modern web products.",
    },
    {
      icon: <Laptop className="w-12 h-12 text-orange-500" />,
      title: "ERP & Enterprise Applications",
      description:
        "Deliver workflow-driven platforms for automotive, aviation, logistics, and operations with multi-module architecture and streamlined processes.",
    },
    {
      icon: <Smartphone className="w-12 h-12 text-orange-500" />,
      title: "Cloud Deployment & DevOps",
      description:
        "Deploy and maintain applications on AWS, DigitalOcean, Nginx, Docker, and CI/CD pipelines to ensure reliable release cycles and uptime.",
    },
    {
      icon: <Laptop className="w-12 h-12 text-orange-500" />,
      title: "Performance Optimization",
      description:
        "Improve speed, maintainability, and SEO through code splitting, lazy loading, clean architecture, and thoughtful user experience design.",
    },
  ]

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">
          My <span className="text-orange-500">Services</span>
        </h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto mt-2" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card
            key={index}
            className="bg-white  rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl hover:rotate-2"
          >
            <CardContent className="p-6 text-center">
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-purple-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </CardContent>
            <BorderBeam duration={3} size={100} 
            className="h-40 w-40"
            />
          </Card>
          
        ))}
        
      </div>
    </section>
  )
}

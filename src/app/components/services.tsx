import { Card, CardContent } from "@/components/ui/card"
import { Laptop, Smartphone, BarChart3 } from 'lucide-react'

export function Services() {
  const services = [
    {
      icon: <Laptop className="w-12 h-12 text-orange-500" />,
      title: "Web Development",
      description:
        "I specialize in building scalable, responsive websites using cutting-edge technologies like React.js, Next.js, and Node.js. Whether it's a dynamic web app or a static site, I provide robust solutions tailored to your business needs.",
    },
    {
      icon: <Smartphone className="w-12 h-12 text-orange-500" />,
      title: "Apps Development",
      description:
        "With expertise in React Native, I develop high-quality mobile applications that work seamlessly across both iOS and Android. From intuitive interfaces to performance optimization, I deliver apps that engage users and enhance functionality.",
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-orange-500" />,
      title: "API Integration & Backend Services",
      description:
        "I design and develop RESTful APIs using Node.js, Express.js, and MongoDB. With my full-stack knowledge, I ensure smooth communication between the frontend and backend, providing scalable, secure, and efficient solutions.",
    },
    {
      icon: <Laptop className="w-12 h-12 text-orange-500" />,
      title: "Full Stack Development",
      description:
        "I offer comprehensive full-stack development services, working across the entire web and mobile tech stack. My expertise includes frontend frameworks (React.js, Next.js), backend technologies (Node.js, Express), and databases (MongoDB, SQL Server).",
    },
    {
      icon: <Smartphone className="w-12 h-12 text-orange-500" />,
      title: "WordPress Development",
      description:
        "I build custom WordPress websites that are fully responsive, user-friendly, and optimized for performance. Whether you need a blog, e-commerce site, or a custom theme, I provide scalable WordPress solutions that fit your business goals.",
    },
    {
      icon: <Laptop className="w-12 h-12 text-orange-500" />,
      title: "Performance Optimization",
      description:
        "I enhance the speed, efficiency, and scalability of web and mobile applications by implementing best practices such as code splitting, lazy loading, and SEO optimization, ensuring your app runs smoothly under high traffic.",
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
            className="bg-white rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl hover:rotate-2"
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
          </Card>
        ))}
      </div>
    </section>
  )
}

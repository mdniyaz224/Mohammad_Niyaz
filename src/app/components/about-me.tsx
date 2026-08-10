import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"
// import AboutImage from '../../../public/asset/about.jpg'
import AboutImage from '../../../public/asset/niyaz.png'
import { CoolMode } from "@/components/magicui/cool-mode"

export function AboutMe() {
  const [showMore, setShowMore] = useState(false)

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">
          About <span className="text-orange-500">Me</span>
        </h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto mt-2" />
      </div>

      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <div className="relative w-full max-w-md mx-auto aspect-square rounded-3xl overflow-hidden">
            <Image
              src={AboutImage}
              alt="Profile photo"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="md:w-1/2 space-y-6">
          <h3 className="text-2xl font-semibold text-white">
            Full-Stack Engineer
          </h3>

          <p className="text-white/80">
            I am Mohammad Niyaz, a Full-Stack Engineer with 3.8 years of experience building scalable web applications using React.js, Next.js, Node.js, Express.js, TypeScript, MongoDB, PostgreSQL, Redux, and REST APIs.
            My work spans enterprise platforms, ERP solutions, and modern web products, with hands-on experience in AWS, Docker, CI/CD, Nginx, and DigitalOcean.
            I focus on creating high-performance, maintainable applications that deliver strong user experience and business value.
          </p>

          {showMore && (
            <div className="text-white/80 space-y-4">
              <p>
                I have contributed to projects across the automotive, aviation, and education sectors, including ERP platforms for Cruise Motors and aviation operations, as well as learning and sports platforms for Catalyst Playbook Academy and Lacrosse.
              </p>
              <p>
                I enjoy collaborating with design, backend, and QA teams to deliver production-ready features in Agile environments while keeping the product reliable, scalable, and user-focused.
              </p>
            </div>
          )}
          <CoolMode>

            <Button
              variant="outline"
              className="bg-white text-purple-900 hover:bg-white/90"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Show Less" : "Read More..."}
            </Button>
          </CoolMode>

        </div>
      </div>
    </section>
  )
}

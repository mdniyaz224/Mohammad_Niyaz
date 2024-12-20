import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"
// import AboutImage from '../../../public/asset/about.jpg'
import AboutImage from '../../../public/asset/niyaz.png'

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
            Full Stack Developer
          </h3>
          
          <p className="text-white/80">
            I am Mohammad Niyaz, an accomplished Full Stack Developer with 3 years of experience in creating scalable web and mobile applications.
            My expertise spans frontend technologies like React.js, Next.js, and TypeScript, and backend frameworks such as Node.js and Express.js,
            complemented by robust database management skills in MongoDB and SQL Server.
            With a strong focus on mobile-first development and localization for Arabic and English markets, 
            I am adept at delivering solutions optimized for performance and user engagement.
          </p>

          {showMore && (
            <div className="text-white/80 space-y-4">
              <p>
                I thrive in dynamic environments, having successfully developed innovative projects such as a Rugby training app using the Space Repetition Algorithm and a lacrosse game platform with tailored admin and user functionalities. My experience includes collaboration with cross-functional teams, API integration, and leveraging advanced tools like Redux Toolkit and Material-UI for seamless state management and design consistency.
              </p>
              <p>
                I am passionate about bridging the gap between technology and business needs, ensuring user-centric solutions that align with strategic objectives. My commitment to excellence, coupled with my technical acumen and adaptability, drives me to deliver impactful digital experiences for clients and end-users alike.
              </p>
            </div>
          )}

          <Button
            variant="outline"
            className="bg-white text-purple-900 hover:bg-white/90"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show Less" : "Read More..."}
          </Button>
        </div>
      </div>
    </section>
  )
}

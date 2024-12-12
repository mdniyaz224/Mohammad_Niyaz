"use client"

import { useEffect } from "react"
import AOS from "aos"//----------------------
import "aos/dist/aos.css"
import { NavBar } from "./components/nav-bar"
import { HeroSection } from "./components/hero-section"
import { AboutMe } from "./components/about-me"
import { Services } from "./components/services"
import { Skills } from "./components/skills"
import { Portfolio } from "./components/portfolio"
import { MyTeam } from "./components/my-team"
// import { ClientTestimonials } from "./components/client-testimonials"
import { Contact } from "./components/contact"
import { Footer } from "./components/footer"

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <main className="min-h-screen bg-purple-900 pt-8">
      <NavBar />
      <section id="home">
        <HeroSection />
      </section>
      <section id="about" data-aos="fade-up">
        <AboutMe />
      </section>
      <section id="services" data-aos="fade-up">
        <Services />
      </section>
      <section id="skills" data-aos="fade-up">
        <Skills />
      </section>
      <section id="portfolio" data-aos="fade-up">
        <Portfolio />
      </section>
      <section id="team" data-aos="fade-up">
        <MyTeam />
      </section>
      {/* <section id="testimonials" data-aos="fade-up">
        <ClientTestimonials />
      </section> */}
      <section id="contact" data-aos="fade-up">
        <Contact />
      </section>
      <Footer />
    </main>
  )
}


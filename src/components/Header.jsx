"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link"; // Import Link from Next.js

// Define the type for mouse position
const sections = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" }, // Updated to link to actual pages
  { label: "Projects", href: "/project" }, // Updated to link to actual pages
  { label: "Skills", href: "/skill" }, // Updated to link to actual pages
  { label: "Contact", href: "/contact" }, // Updated to link to actual pages
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState("/");
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const cursorVariants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
  };
const closeMobile=(href)=>{
  // setIsMenuOpen(true)
   setActiveSection(href)
   setIsMenuOpen(false)
}
  return (
    <nav className="p-4 bg-gradient-to-br sticky top-0 z-10 from-gray-900 to-gray-800 text-white overflow-hidden">
      {/* Progress Bar */}
      <motion.div
        className="progress-bar"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 5,
          background: "#8B5CF6",
          transformOrigin: "0%",
        }}
      />

      <div className="flex justify-between items-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold"
        >
          Md Niyaz
        </motion.h1>
        <div className="hidden md:flex space-x-4">
          {sections.map((section) => (
            <Button
              key={section.label}
              variant="ghost"
              onClick={() => setActiveSection(section.href)}
              className={activeSection === section.href ? "bg-purple-500/20" : ""}
            >
              <Link href={section.href}>{section.label}</Link>
            </Button>
          ))}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-2"
          >
            {sections.map((section) => (
              <Button
                key={section.label}
                variant="ghost"
                onClick={()=>closeMobile(section.href)
                }
                className={activeSection === section.href ? "bg-purple-500/20" : ""}
              >
                <Link href={section.href}>{section.label}</Link>
              </Button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Cursor */}
      <motion.div
        className="cursor"
        variants={cursorVariants}
        animate="default"
        style={{
          background: "rgba(255, 255, 255, 0.2)",
          height: 32,
          width: 32,
          borderRadius: "50%",
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 9999,
          mixBlendMode: "difference",
        }}
      />
    </nav>
  );
}

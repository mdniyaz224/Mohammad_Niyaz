"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DialogDemo } from "./ui/Dialog";

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState("up");
  const toggleScrollDirection = useCallback((currentScrollY: number) => {
    if (currentScrollY > 20) {
      setScrollDirection("down");
    } else {
      setScrollDirection("up");
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let lastScrollY = window.pageYOffset;
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      toggleScrollDirection(scrollY);
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [toggleScrollDirection]);

  return scrollDirection;
};

export function NavBar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "services",
        "skills",
        "portfolio",
        "team",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100; // offset

      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    "Home",
    "About",
    "Services",
    "Skills",
    "Portfolio",
    "Team",
    "Contact",
  ];

  return (
    <nav
      className={`sticky top-0 left-0 right-0 z-50 bg-purple-900/80 backdrop-blur-sm transition-all duration-300`}
    >
      <div className="flex items-center justify-between p-4 w-full max-w-7xl mx-auto">
        <Link href="/" className="text-white text-2xl font-bold">
          Mohammad Niyaz
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navItems?.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={cn(
                "text-white hover:text-white/80 transition-colors relative",
                "after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-orange-500",
                "hover:after:w-full after:transition-all after:duration-300",
                activeSection === item.toLowerCase() && "after:w-full"
              )}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] bg-purple-900 text-white"
            >
              <nav className="flex flex-col space-y-4 mt-8">
                <Button
                  variant="outline"
                  className="bg-white text-purple-900 hover:bg-white/90  md:inline-flex"
                  onClick={() => setOpen(true)}
                >
                  Hire me
                </Button>
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={cn(
                      "text-white hover:text-orange-500 transition-colors text-left text-lg py-2",
                      activeSection === item.toLowerCase() && "text-orange-500"
                    )}
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <Button
          variant="outline"
          className="bg-white text-purple-900 hover:bg-white/90 hidden md:inline-flex"
          onClick={() => setOpen(true)}
        >
          Hire me
        </Button>
      </div>
      <DialogDemo open={open} setOpen={setOpen} />
    </nav>
  );
}

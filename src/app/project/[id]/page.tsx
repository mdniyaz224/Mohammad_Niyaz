"use client";

import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import img from '../../../../public/asset/websiteImgs/home1.png'
import img2 from '../../../../public/asset/websiteImgs/home2.png'
import img3 from '../../../../public/asset/websiteImgs/home3.png'
import img4 from '../../../../public/asset/websiteImgs/home4.png'
import img5 from '../../../../public/asset/websiteImgs/event1.png'
import img6 from '../../../../public/asset/websiteImgs/event2.png'
import img7 from '../../../../public/asset/websiteImgs/event3.png'
import img8 from '../../../../public/asset/websiteImgs/event4.png'


const projects = [
  {
    id: "lacrosse-website",
    title: "Lacrosse Game Website",
    image: img,
    description: "A comprehensive lacrosse game website and web application with distinct functionalities for admin and user roles.",
    technologies: ["Next.js", "Redux-Saga", "TypeScript", "Material-UI (MUI)"],
    challenges: "Creating distinct modules for admin and user roles while ensuring seamless interaction and scalability.",
    outcome: "Delivered a user-friendly interface with robust features for game participation, content management, and analytics.",
    adminFeatures: [
      "Content management",
      "User management",
      "Detailed analytics and reporting tools",
    ],
    userFeatures: [
      "Game participation",
      "Progress tracking",
      "Personalized recommendations based on activity",
    ],
    gallery: [
      img,
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
      img8,
    ],
  },
  {
    id: "lacrosse-user",
    title: "Lacrosse Game User App",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    description: "A comprehensive lacrosse game website and web application with distinct functionalities for admin and user roles.",
    technologies: ["Next.js", "Redux-Saga", "TypeScript", "Material-UI (MUI)"],
    challenges: "Creating distinct modules for admin and user roles while ensuring seamless interaction and scalability.",
    outcome: "Delivered a user-friendly interface with robust features for game participation, content management, and analytics.",
    adminFeatures: [
      "Content management",
      "User management",
      "Detailed analytics and reporting tools",
    ],
    userFeatures: [
      "Game participation",
      "Progress tracking",
      "Personalized recommendations based on activity",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1506765515384-028b60a970df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    ],
  },
  {
    id: "lacrosse-admin",
    title: "Lacrosse Game Website",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    description: "A comprehensive lacrosse game website and web application with distinct functionalities for admin and user roles.",
    technologies: ["Next.js", "Redux-Saga", "TypeScript", "Material-UI (MUI)"],
    challenges: "Creating distinct modules for admin and user roles while ensuring seamless interaction and scalability.",
    outcome: "Delivered a user-friendly interface with robust features for game participation, content management, and analytics.",
    adminFeatures: [
      "Content management",
      "User management",
      "Detailed analytics and reporting tools",
    ],
    userFeatures: [
      "Game participation",
      "Progress tracking",
      "Personalized recommendations based on activity",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1506765515384-028b60a970df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    ],
  },
  {
    id: "catlyst-play-book-accedmy",
    title: "Catlyst Play Book Accedmy",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    description: "A comprehensive lacrosse game website and web application with distinct functionalities for admin and user roles.",
    technologies: ["Next.js", "Redux-Saga", "TypeScript", "Material-UI (MUI)"],
    challenges: "Creating distinct modules for admin and user roles while ensuring seamless interaction and scalability.",
    outcome: "Delivered a user-friendly interface with robust features for game participation, content management, and analytics.",
    adminFeatures: [
      "Content management",
      "User management",
      "Detailed analytics and reporting tools",
    ],
    userFeatures: [
      "Game participation",
      "Progress tracking",
      "Personalized recommendations based on activity",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1506765515384-028b60a970df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    ],
  },
];

export default function ProjectPage() {
  const params = useParams();
  const [hoverIndex, setHoverIndex] = useState(0);
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return <div className="text-center text-white">Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-purple-900 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/#portfolio">
          <Button variant="ghost" className="mb-6 text-white hover:text-orange-500">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
          </Button>
        </Link>

        <h1 className="text-4xl font-bold text-white mb-6">{project.title}</h1>

        <div className="relative w-full h-96 mb-6">
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

          <div>
            <h2 className="text-2xl font-semibold mb-2">Admin Features</h2>
            <ul className="list-disc list-inside">
              {project.adminFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">User Features</h2>
            <ul className="list-disc list-inside">
              {project.userFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-2">Image Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
              {project.gallery.map((image, index) => (
                <div
                  key={index}
                  className="relative w-full h-48 overflow-hidden rounded-lg group cursor-pointer"
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(0)}
                >
                  <Image
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className={`object-cover transition-transform duration-500 ${
                      hoverIndex === index ? "scale-110" : "scale-100"
                    }`}
                  />
                  <div
                    className={`absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center`}
                  >
                    <span className="text-white text-sm font-semibold">
                      View Image {index + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
          <a href="https://website-uat.laxrecruitdata.com/" target='_blank' className="mb-6 text-white hover:text-orange-500">
            Click to View Website
          </a>
          </div>
          
        </div>
      </div>
    </div>
  );
}

'use client';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const projects = [
  { 
    title: 'Catalyst Playbook Academy, USA', 
    role: 'Frontend Developer | Oct 2023 - Mar 2024',
    description: `
      I led the development of an innovative web application specifically designed for Rugby players to enhance 
      their skills, tactical knowledge, and game insights. The application utilized a flashcard system powered by 
      the Space Repetition Algorithm, presenting information in repeated cycles to optimize learning retention 
      and mastery of key concepts.
    `,
    responsibilities: [
      'Frontend Architecture: Designed and implemented the frontend using Next.js, Redux-Saga, TypeScript, and Material-UI (MUI), ensuring a responsive and seamless user experience across devices.',
      'Cross-functional Collaboration: Collaborated closely with designers, back-end developers, and QA testers, driving the project to successful completion with high product quality and user satisfaction.',
      'UI/UX Enhancements: Integrated features specifically tailored to the learning needs of Rugby players, optimizing the interface for enhanced usability and engagement.',
      'Team Leadership: Mentored and led a high-performing marketing team, fostering a collaborative and results-driven environment.',
    ]
  },
  {
    title: 'Lacrosse Game Website and Web Application',
    role: 'Frontend Developer | Apr 2024 - Sep 2024',
    description: `
      Developed a comprehensive lacrosse game website and web application, featuring distinct functionalities for admin and user roles.
    `,
    responsibilities: [
      'Web Development: Designed and implemented the front-end architecture using Next.js, Redux-Saga, TypeScript, and Material-UI (MUI) for a seamless and responsive user experience across all devices.',
      'Created a visually appealing and user-friendly interface for the website, ensuring intuitive navigation and accessibility.',
      'Web Application Development: Developed separate modules for admin and user roles, each with tailored functionalities to meet specific needs.',
      'Admin functionalities included content management, user management, and detailed analytics and reporting tools.',
      'User functionalities included game participation, progress tracking, and personalized recommendations based on user activity.'
    ]
  }
];


const Project = () => {
  return (
    <div className="py-10 min-h-[calc(100vh-13rem)]">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-8"
      >
        Featured Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden bg-gray-800/50 backdrop-blur-sm">
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  {project.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;

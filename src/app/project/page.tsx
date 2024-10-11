// 'use client';
// import { motion } from 'framer-motion';
// import { Card, CardContent } from '@/components/ui/card';


// const projects = [
//   { 
//     title: 'Catalyst Playbook Academy, USA', 
//     role: 'Frontend Developer | Oct 2023 - Mar 2024',
//     description: `
//       I led the development of an innovative web application specifically designed for Rugby players to enhance 
//       their skills, tactical knowledge, and game insights. The application utilized a flashcard system powered by 
//       the Space Repetition Algorithm, presenting information in repeated cycles to optimize learning retention 
//       and mastery of key concepts.
//     `,
//     responsibilities: [
//       'Frontend Architecture: Designed and implemented the frontend using Next.js, Redux-Saga, TypeScript, and Material-UI (MUI), ensuring a responsive and seamless user experience across devices.',
//       'Cross-functional Collaboration: Collaborated closely with designers, back-end developers, and QA testers, driving the project to successful completion with high product quality and user satisfaction.',
//       'UI/UX Enhancements: Integrated features specifically tailored to the learning needs of Rugby players, optimizing the interface for enhanced usability and engagement.',
//       'Team Leadership: Mentored and led a high-performing marketing team, fostering a collaborative and results-driven environment.',
//     ]
//   },
//   { 
//     title: 'E-commerce Platform Project', 
//     role: 'Frontend Developer | Jan 2022 - Sep 2023',
//     description: `
//       Developed a full-featured online store using Next.js, GraphQL, and Stripe. Implemented a mobile-first 
//       design approach to ensure a seamless shopping experience across various devices, while integrating a 
//       payment gateway using Stripe for secure transactions.
//     `,
//     responsibilities: [
//       'Developed the frontend using Next.js and GraphQL, focusing on a responsive design for various screen sizes.',
//       'Integrated Stripe API for handling secure payments and ensuring a smooth checkout process.',
//       'Worked closely with backend developers to ensure data flow through the GraphQL API was efficient and optimized.',
//       'Implemented product search and filtering, enhancing the overall user experience.'
//     ]
//   },
//   { 
//     title: 'AI-Powered Task Manager', 
//     role: 'Frontend Developer | Jul 2021 - Dec 2021',
//     description: `
//       Built an AI-powered task manager app using React, Node.js, and OpenAI API. The app helps users organize 
//       their tasks more efficiently by suggesting priority tasks based on usage patterns and deadlines.
//     `,
//     responsibilities: [
//       'Developed the task management interface using React, focusing on an intuitive user experience.',
//       'Integrated OpenAI API to provide AI-powered task recommendations based on user behavior and deadlines.',
//       'Collaborated with backend developers to ensure smooth communication between the frontend and the Node.js server.',
//       'Implemented features like task notifications, priority sorting, and customizable task views for a personalized user experience.'
//     ]
//   }
// ];


// const Project = () => {
//   return (
//     <div className="py-10 min-h-[calc(100vh-13rem)]">
//       <motion.h2
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-3xl font-bold mb-8"
//       >
//        Featured Projects
//       </motion.h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {projects.map((project, index) => (
//           <motion.div
//             key={project.title}
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//           >
//             <Card className="overflow-hidden bg-gray-800/50 backdrop-blur-sm">
//               <CardContent className="p-4">
//                 <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
//                 <p className="text-gray-300">{project.description}</p>
//                 <ul className="list-disc pl-5 space-y-2 text-gray-300">
//             {responsibilities?.map((responsibility, index) => (
//               <li key={index}>{responsibility}</li>
//             ))}
//           </ul>
//               </CardContent>
//             </Card>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Project;


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

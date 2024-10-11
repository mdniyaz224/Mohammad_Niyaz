'use client'
import { motion } from 'framer-motion';

const Skill = () => {
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 90 },
    { name: 'React Js', level: 95 },
    { name: 'Next Js', level: 95 },
    { name: 'Material Ui', level: 95 },
    { name: 'Tailwind Css', level: 80 },
    { name: 'Bootstrap 5', level: 95 },
    { name: 'Version Control: Git, GitHub, GitLab, Bitbucket', level: 80 },
    { name: 'State Management: Redux toolkit, Context API', level: 90 },
    { name: 'Collaboration: Agile, Scrum, Jira', level: 90 },
    { name: 'Databases: SQL', level: 50 },
    { name: 'Operating Systems: Windows, Linux ', level: 80 },
    // { name: 'CSS', level: 80 },


    

  ];

  return (
    <div className="py-10 min-h-[calc(100vh-13rem)]">
      <h2 className="text-3xl font-bold mb-8">Skills & Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
            <div className="bg-gray-700 h-4 rounded-full">
              <motion.div
                className="bg-purple-600 h-4 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
export default Skill;

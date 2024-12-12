import { Progress } from "@/components/ui/progress";

export function Skills() {
  const skills = [
    { name: "HTML - 5", percentage: 95 },
    { name: "CSS - 3", percentage: 90 },
    { name: "JavaScript", percentage: 80 },
    { name: "React js", percentage: 95 },
    { name: "Next js", percentage: 95 },
    { name: "Wordpress", percentage: 90 },
    { name: "Bootstrap", percentage: 95 },
    { name: "MUI", percentage: 95 },
    { name: "Tailwind", percentage: 90 },
    { name: "Redux Toolkit", percentage: 95 },
    { name: "Thunk,Saga", percentage: 95 },
    { name: "Node js", percentage: 95 },
    { name: "Express", percentage: 95 },
    { name: "Mongo Db", percentage: 95 },
    { name: "Git", percentage: 80 },
    { name: "Jira", percentage: 90 },
    
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">
          My <span className="text-orange-500">Skills</span>
        </h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto mt-2" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between text-white">
              <span>{skill.name}</span>
              <span>{skill.percentage}%</span>
            </div>
            <Progress 
              value={skill.percentage} 
              className="h-2 bg-purple-800"
              aria-label={`${skill.name} skill level`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

import { Progress } from "@/components/ui/progress";

export function Skills() {
  const skills = [
    { name: "React.js", percentage: 95 },
    { name: "Next.js", percentage: 95 },
    { name: "TypeScript", percentage: 90 },
    { name: "JavaScript (ES6+)", percentage: 90 },
    { name: "Node.js", percentage: 85 },
    { name: "Express.js", percentage: 80 },
    { name: "MongoDB", percentage: 80 },
    { name: "PostgreSQL", percentage: 75 },
    { name: "Redux Toolkit", percentage: 90 },
    { name: "REST APIs", percentage: 90 },
    { name: "Tailwind / MUI / Mantine", percentage: 90 },
    { name: "AWS / DigitalOcean", percentage: 70 },
    { name: "Docker / CI-CD", percentage: 70 },
    { name: "Git / GitHub / GitLab", percentage: 90 },
    { name: "Jira / Agile", percentage: 90 },
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
              className="h-2 bg-white [&>div]:bg-orange-500"
              aria-label={`${skill.name} skill level`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

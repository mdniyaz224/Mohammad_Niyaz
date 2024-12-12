import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import img from '../../../public/asset/about.jpg'

type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: unknown;
  bio: string;
};

const teamMembers: TeamMember[] = [
  {
    id: "full-stack-developer",
    name: "Mohammad Niyaz",
    role: "Full Stack Developer",
    image: img,
    bio: "Mohammad is a skilled Full Stack Developer proficient in building scalable web and mobile applications using modern frameworks like React, Node.js, and MongoDB."
  },
  {
    id: "back-end-developer",
    name: "Anu Priya",
    role: "Back-End Developer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    bio: "Anu is an expert in server-side development, specializing in APIs, database design, and ensuring robust backend performance."
  },
  {
    id: "digital-marketing-specialist",
    name: "Akansha Priya",
    role: "Digital Marketing Specialist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    bio: "Akansha specializes in creating impactful digital marketing campaigns, leveraging SEO, content strategy, and analytics to drive engagement."
  },
  {
    id: "mobile-developer",
    name: "Kumar Utkarsh",
    role: "Mobile & Front-End Developer",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    bio: "Kumar is an experienced Mobile and Front-End Developer focused on creating user-friendly mobile apps and responsive web interfaces using React Native and modern CSS."
  },
  {
    id: "business-analyst",
    name: "Mohammad Imtiyaz",
    role: "Business Analyst",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    bio: "Mohammad is a strategic Business Analyst adept at gathering requirements, analyzing market trends, and providing actionable insights to drive business success."
  },
];

export function MyTeam() {
  const route = useRouter();
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">
          My <span className="text-orange-500">Team</span>
        </h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto mt-2" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <Card
            key={member.id}
            className="bg-purple-800/50 border-purple-700 overflow-hidden group cursor-pointer"
            onClick={() => route.push(`project/${member.id}`)}
          >
            <CardContent className="p-0">
              <div className="relative h-80">
                <Image
                  src={member.image as unknown as string}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-orange-500 mb-4">{member.role}</p>
                  <p className="text-white/90 text-sm">{member.bio}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

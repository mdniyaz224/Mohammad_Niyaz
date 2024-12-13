import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from 'lucide-react'
import { useRouter } from "next/navigation"


export function Portfolio() {
  const route= useRouter()
  const projects = [
    {
      id:"lacrosse-website",
      title: "Lacross Website",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    },
    {
      id:"lacrosse-user",
      title: "Lacross User App",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    },
    {
      id:"lacrosse-admin",
      title: "Lacross Admin App",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80",
    },
    {
      id:"catlyst-play-book-accedmy",
      title: "Catlyst Play Book Accedmy",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
    },
    // {
    //   id:"Web Development",
    //   title: "UI/UX Design",
    //   image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    // },
    // {
    //   id:"Web Development",
    //   title: "Mobile App",
    //   image: "https://images.unsplash.com/photo-1537884944318-390069bb8665?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    // },
    // {
    //   id:"Web Development",
    //   title: "Web App",
    //   image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    // },
    // {
    //   id:"Web Development",
    //   title: "Software Development",
    //   image: "https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    // },
  ]

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">Portfolio</h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto mt-2" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <Card 
            key={index} 
            onClick={()=>route.push(`project/${project.id}`)}
            className="group relative overflow-hidden rounded-xl bg-purple-800/50 border-0  cursor-pointer"
          >
            <CardContent className="p-0">
              <div className="relative aspect-[4/3]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-purple-900/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <ExternalLink className="w-6 h-6 mx-auto mb-2" />
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}


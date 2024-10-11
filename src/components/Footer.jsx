// // app/components/Footer.tsx
// import { Button } from "@/components/ui/button"
// import { Github, Linkedin, Mail } from 'lucide-react'

// export default function Footer() {
//   return (
//     <footer className="w-full p-4 text-center">
//       <div className="flex justify-center space-x-4">
//         <Button variant="ghost" size="icon">
//           <Github className="w-5 h-5" />
//         </Button>
//         <Button variant="ghost" size="icon">
//           <Linkedin className="w-5 h-5" />
//         </Button>
//         <Button variant="ghost" size="icon">
//           <Mail className="w-5 h-5" />
//         </Button>
//       </div>
//     </footer>
//   )
// }



// app/components/Footer.tsx
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full p-4 text-center">
      <div className="flex justify-center space-x-4">
        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
          <Button variant="ghost" size="icon">
            <Github className="w-5 h-5" />
          </Button>
        </a>
        <a href="www.linkedin.com/in/md-niyaz" target="_blank" rel="noopener noreferrer">
          <Button variant="ghost" size="icon">
            <Linkedin className="w-5 h-5" />
          </Button>
        </a>
        <a href="mailto:your-email@example.com">
          <Button variant="ghost" size="icon">
            <Mail className="w-5 h-5" />
          </Button>
        </a>
      </div>
    </footer>
  )
}

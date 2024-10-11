// app/layout.tsx
import './globals.css'
import Header from './../components/Header'
import Footer from './../components/Footer'

export const metadata = {
  title: 'Advanced Portfolio',
  description: 'My Portfolio website built with Next.js',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <Header />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <div className=" left-0 right-0 p-1 bg-gray-800 text-white">
        <Footer />
        </div>
      </body>
    </html>
  )
}

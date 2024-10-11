// /components/sections/HomeSection.tsx
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import { Button } from '@/components/ui/button';

function AnimatedSphere() {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial color="#8B5CF6" distort={0.3} speed={1.5} roughness={0} />
    </Sphere>
  );
}

const Home=()=> {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between min-h-[calc(100vh-13rem)]">
      <div className="md:w-1/2 text-center md:text-left">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Hi, I'm Md Niyaz
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl md:text-2xl mb-8 text-gray-300"
        >
          Frontend Developer & UI/UX Enthusiast
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
            Download CV
          </Button>
        </motion.div>
      </div>
      <div className="md:w-1/2 h-[400px]">
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <AnimatedSphere />
        </Canvas>
      </div>
    </div>
  );
}
export default Home;
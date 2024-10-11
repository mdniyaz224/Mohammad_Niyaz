// app/components/AnimatedSphere.tsx
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#6C63FF" />
    </mesh>
  )
}

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Icosahedron, Float } from "@react-three/drei";

const AnimatedShape = ({ position, color, size, speed, distort }) => {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.2;
      meshRef.current.rotation.y = time * 0.3;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={1} floatIntensity={2}>
      <Icosahedron args={[1, 0]} ref={meshRef} position={position} scale={size}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Icosahedron>
    </Float>
  );
};

const ThreeScene = () => {
  return (
    <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden bg-zinc-950">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight
          position={[-10, -10, -10]}
          intensity={0.5}
          color="#00ffff"
        />

        <AnimatedShape
          position={[-2, 0, 0]}
          color="#8b5cf6" // Violet
          size={1.2}
          speed={1.5}
          distort={0.4}
        />
        <AnimatedShape
          position={[2, 1, -1]}
          color="#06b6d4" // Cyan
          size={0.8}
          speed={2}
          distort={0.6}
        />
        <AnimatedShape
          position={[0, -2, -2]}
          color="#ec4899" // Pink
          size={1}
          speed={1}
          distort={0.3}
        />
      </Canvas>
    </div>
  );
};

export default ThreeScene;

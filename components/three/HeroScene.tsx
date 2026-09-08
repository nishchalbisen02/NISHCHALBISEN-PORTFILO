"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Blob({ color }: { color: string }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const m = ref.current;
    if (!m) return;
    m.rotation.x += delta * 0.045;
    m.rotation.y += delta * 0.07;
    m.position.x = THREE.MathUtils.lerp(m.position.x, state.pointer.x * 0.3, 0.04);
    m.position.y = THREE.MathUtils.lerp(m.position.y, state.pointer.y * 0.2, 0.04);
  });

  return (
    <mesh ref={ref} scale={1.85}>
      <icosahedronGeometry args={[1, 18]} />
      <MeshDistortMaterial
        color={color}
        roughness={0.22}
        metalness={0.4}
        distort={0.32}
        speed={1.3}
      />
    </mesh>
  );
}

export default function HeroScene({ color = "#7a2740" }: { color?: string }) {
  return (
    <Canvas
      className="!absolute inset-0"
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 5], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ pointerEvents: "none" }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 4, 5]} intensity={1.6} />
      <directionalLight position={[-4, -2, -3]} intensity={0.4} color="#8a8ab0" />
      <Float speed={1} rotationIntensity={0.3} floatIntensity={0.5}>
        <Blob color={color} />
      </Float>
    </Canvas>
  );
}

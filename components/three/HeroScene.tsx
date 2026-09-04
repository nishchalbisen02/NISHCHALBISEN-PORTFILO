"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Blob() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const m = ref.current;
    if (!m) return;
    m.rotation.x += delta * 0.05;
    m.rotation.y += delta * 0.075;
    m.position.x = THREE.MathUtils.lerp(m.position.x, state.pointer.x * 0.35, 0.04);
    m.position.y = THREE.MathUtils.lerp(m.position.y, state.pointer.y * 0.25, 0.04);
  });

  return (
    <mesh ref={ref} scale={2.15}>
      <icosahedronGeometry args={[1, 20]} />
      <MeshDistortMaterial
        color="#8a2233"
        roughness={0.18}
        metalness={0.42}
        distort={0.36}
        speed={1.5}
      />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      className="!absolute inset-0"
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 5], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ pointerEvents: "none" }}
    >
      <ambientLight intensity={0.65} />
      <directionalLight position={[3, 4, 5]} intensity={1.7} />
      <directionalLight position={[-4, -2, -3]} intensity={0.45} color="#6f8bff" />
      <Float speed={1.1} rotationIntensity={0.35} floatIntensity={0.55}>
        <Blob />
      </Float>
    </Canvas>
  );
}

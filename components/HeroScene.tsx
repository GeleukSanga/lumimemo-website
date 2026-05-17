"use client";

import { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Sparkles, Stars, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function CameraRig() {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });
  const lerpPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 0.7;
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 0.7;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame(() => {
    lerpPos.current.x += (mouse.current.x - lerpPos.current.x) * 0.04;
    lerpPos.current.y += (mouse.current.y - lerpPos.current.y) * 0.04;
    camera.position.x = lerpPos.current.x;
    camera.position.y = lerpPos.current.y;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

function Core() {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.elapsedTime * 0.13;
    ref.current.rotation.x = Math.sin(clock.elapsedTime * 0.06) * 0.18;
  });

  return (
    <Float speed={1.2} floatIntensity={0.35} rotationIntensity={0.15}>
      <mesh ref={ref} scale={1.65}>
        <torusKnotGeometry args={[1, 0.37, 256, 32, 2, 3]} />
        <MeshDistortMaterial
          color="#ff6b00"
          roughness={0.05}
          metalness={0.92}
          distort={0.15}
          speed={2.5}
        />
      </mesh>
      <mesh scale={1.67}>
        <torusKnotGeometry args={[1, 0.37, 80, 16, 2, 3]} />
        <meshBasicMaterial color="#ff8c35" wireframe transparent opacity={0.06} />
      </mesh>
    </Float>
  );
}

type ShapeType = "oct" | "ico" | "dod" | "tet";

interface SatelliteConfig {
  pos: [number, number, number];
  geo: ShapeType;
  scale: number;
  speed: number;
}

function Satellites() {
  const configs: SatelliteConfig[] = [
    { pos: [3.6, 1.4, -0.8], geo: "oct", scale: 0.34, speed: 1.9 },
    { pos: [-3.2, -1.2, -0.4], geo: "ico", scale: 0.27, speed: 2.3 },
    { pos: [2.1, -2.9, 0.6], geo: "dod", scale: 0.21, speed: 1.6 },
    { pos: [-2.6, 2.1, 0.9], geo: "tet", scale: 0.29, speed: 2.0 },
  ];

  return (
    <>
      {configs.map(({ pos, geo, scale, speed }, i) => (
        <Float key={i} speed={speed} rotationIntensity={1.6} floatIntensity={0.9}>
          <mesh position={pos} scale={scale}>
            {geo === "oct" && <octahedronGeometry args={[1]} />}
            {geo === "ico" && <icosahedronGeometry args={[1]} />}
            {geo === "dod" && <dodecahedronGeometry args={[1]} />}
            {geo === "tet" && <tetrahedronGeometry args={[1]} />}
            <meshStandardMaterial
              color="#ff6b00"
              roughness={0.12}
              metalness={0.88}
              opacity={0.72}
              transparent
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}

function OrbitalRing() {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    ref.current.rotation.x = Math.PI / 2.4;
    ref.current.rotation.z = clock.elapsedTime * 0.06;
  });

  return (
    <mesh ref={ref} scale={3.6}>
      <torusGeometry args={[1, 0.0025, 2, 120]} />
      <meshBasicMaterial color="#ff6b00" transparent opacity={0.28} />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7.5], fov: 40 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} color="#111111" />
      <pointLight position={[0, 0, 5]} intensity={3.5} color="#ff6b00" />
      <pointLight position={[-5, 5, -2]} intensity={1.8} color="#ff8c35" />
      <pointLight position={[5, -5, -2]} intensity={1.2} color="#ff4500" />
      <pointLight position={[0, -6, 1]} intensity={0.6} color="#ff6b00" />

      <CameraRig />
      <Core />
      <Satellites />
      <OrbitalRing />

      <Sparkles
        count={130}
        size={1.2}
        speed={0.28}
        color="#ff6b00"
        opacity={0.55}
        scale={14}
      />

      <Stars
        radius={90}
        depth={70}
        count={3500}
        factor={2}
        saturation={0}
        fade
        speed={0.25}
      />
    </Canvas>
  );
}

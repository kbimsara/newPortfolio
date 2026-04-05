'use client';

import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment, Stars } from '@react-three/drei';
import * as THREE from 'three';

function Model() {
  const { scene } = useGLTF('/models/space_station_opt3.glb', '/draco/');
  const ref = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.12;
    }
  });

  return <primitive ref={ref} object={scene} scale={0.7} position={[3, 0, 0]} />;
}

function LoadingFallback() {
  return (
    <div className="absolute inset-0 flex items-end justify-end p-8 pointer-events-none">
      <div className="flex items-center gap-2 text-slate-600 text-xs">
        <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50 animate-pulse" />
        <span className="tracking-widest uppercase">Loading</span>
      </div>
    </div>
  );
}

export default function SpaceStation() {
  return (
    <div className="relative w-full h-full">
      <Suspense fallback={<LoadingFallback />}>
        <Canvas
          camera={{ position: [0, 2, 10], fov: 45 }}
          style={{ width: '100%', height: '100%' }}
          dpr={[1, 1.5]}
          gl={{ antialias: false, powerPreference: 'high-performance' }}
          performance={{ min: 0.5 }}
        >
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} color="#ffffff" />
          <pointLight position={[-5, -5, -5]} intensity={0.8} color="#4488ff" />
          <pointLight position={[0, 5, 0]} intensity={0.5} color="#00ccff" />
          <Model />
          <Environment preset="night" />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate={false}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 1.5}
          />
        </Canvas>
      </Suspense>
    </div>
  );
}

useGLTF.preload('/models/space_station_opt3.glb', '/draco/');

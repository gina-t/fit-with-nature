import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Character } from './Character';
import * as THREE from 'three';

export default function ThreeScene() {
  return (
    <div className="h-screen w-full">
      <Canvas
        camera={{ position: [0, 1.5, 4], fov: 75 }}
        gl={{ antialias: true }}
        scene={{ background: new THREE.Color('#172554') }} // Use scene prop
      >
        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[1, 1, 1]} intensity={0.8} />

        {/* Your character */}
        <Character 
          position={[0, -0.5, 0]} 
          rotation={[0, Math.PI / 2, 0]}  
        />

        {/* Camera controls */}
        <OrbitControls
          target={[0, 0.5, 0]}
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
        />
      </Canvas>
    </div>
  );
}

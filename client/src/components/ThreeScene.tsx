import { useState, useEffect, useRef, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { RunningCharacter } from './RunningCharacter';
import { SitupsCharacter } from './SitupsCharacter';
import * as THREE from 'three';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function ThreeScene() {
  const [currentExercise, setCurrentExercise] = useState<'running' | 'situps'>(
    'running'
  );
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Refs for direct GSAP targeting
  const runningRef = useRef<THREE.Group>(null);
  const situpsRef = useRef<THREE.Group>(null);

  // 🎯 MEMOIZED TRANSITION FUNCTION
  const createTransition = useCallback(() => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    console.log(`Starting transition from ${currentExercise}`);

    // 🎯 SIMPLE TIMELINE with callbacks
    const tl = gsap.timeline({
      defaults: { duration: 1.2, ease: 'power2.inOut' },
      onComplete: () => {
        // Switch exercise when animation completes
        setCurrentExercise((prev) =>
          prev === 'running' ? 'situps' : 'running'
        );
        setIsTransitioning(false);
        console.log('Transition complete');
      },
    });

    // Get current and next refs
    const currentRef =
      currentExercise === 'running' ? runningRef.current : situpsRef.current;
    const nextRef =
      currentExercise === 'running' ? situpsRef.current : runningRef.current;

    console.log('Current ref:', currentRef ? 'found' : 'missing');
    console.log('Next ref:', nextRef ? 'found' : 'missing');

    // 🎯 ENSURE NEXT CHARACTER IS INVISIBLE AT START
    if (nextRef) {
      nextRef.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.visible = false; // Keep invisible until fade-in starts
        }
      });
    }

    // 🎯 SOFT TRANSITION: Fade out current
    if (currentRef) {
      currentRef.traverse((child) => {
        if (child instanceof THREE.Mesh && child.material) {
          const materials = Array.isArray(child.material)
            ? child.material
            : [child.material];
          materials.forEach((material) => {
            if (material instanceof THREE.MeshStandardMaterial) {
              material.transparent = true;
              console.log(
                'Fading out material, current opacity:',
                material.opacity
              );
              // Fade out opacity
              tl.to(material, { opacity: 0 }, 0);
            }
          });
        }
      });

      // 🎯 HIDE CURRENT CHARACTER MESH WHEN FADE COMPLETES
      tl.call(
        () => {
          currentRef.traverse((child) => {
            if (child instanceof THREE.Mesh) {
              child.visible = false; // Hide mesh after fade out
            }
          });
        },
        [],
        1.2
      ); // After fade out completes
    }

    // 🎯 FADE IN NEXT CHARACTER
    if (nextRef) {
      // 🎯 ENABLE VISIBILITY EXACTLY WHEN FADE IN STARTS
      tl.call(
        () => {
          nextRef.traverse((child) => {
            if (child instanceof THREE.Mesh) {
              child.visible = true; // Show mesh when fade in starts
            }
          });
        },
        [],
        0.7
      ); // When fade in begins

      nextRef.traverse((child) => {
        if (child instanceof THREE.Mesh && child.material) {
          const materials = Array.isArray(child.material)
            ? child.material
            : [child.material];
          materials.forEach((material) => {
            if (material instanceof THREE.MeshStandardMaterial) {
              material.transparent = true;
              console.log(
                'Fading in material, current opacity:',
                material.opacity
              );
              // Ensure starts at 0
              material.opacity = 0;
              // Fade in opacity
              tl.to(material, { opacity: 1 }, 0.6);
            }
          });
        }
      });
    }
  }, [currentExercise, isTransitioning]); // Dependencies that the function actually uses

  // Auto-trigger transitions every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      createTransition();
    }, 5000);

    return () => clearInterval(interval);
  }, [createTransition]); // Now createTransition is stable and memoized

  return (
    <div className="h-screen w-full">
      <Canvas
        camera={{ position: [0, 1.5, 4], fov: 75 }}
        gl={{ antialias: true }}
        scene={{ background: new THREE.Color('#172554') }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[1, 1, 1]} intensity={0.8} />

        {/* 🎯 ALWAYS RENDER BOTH CHARACTERS */}
        <RunningCharacter
          ref={runningRef}
          position={[0, -0.5, 0]}
          rotation={[0, Math.PI / 2, 0]}
          startVisible={true} // Always start visible initially
        />

        <SitupsCharacter
          ref={situpsRef}
          position={[0, -0.5, 0]}
          rotation={[0, Math.PI / 2, 0]}
          startVisible={false} // Always start hidden initially
        />

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

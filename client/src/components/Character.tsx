import { useRef, useEffect } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as THREE from 'three';

export function Character(props: React.ComponentProps<'group'>) {
  const ref = useRef<THREE.Group>(null!);
  const mixerRef = useRef<THREE.AnimationMixer | null>(null);

  // Load your character model
  const gltf = useLoader(GLTFLoader, './models/characterTwo.glb');

  useEffect(() => {
    if (gltf && ref.current) {
      const model = gltf.scene;

      model.traverse((child) => {
        if (child instanceof THREE.Mesh && child.material) {
          const materials = Array.isArray(child.material)
            ? child.material
            : [child.material];

          materials.forEach((material) => {
            if (material instanceof THREE.MeshStandardMaterial) {
              material.wireframe = true; // Enable wireframe
              material.emissive.setHex(0xE8F9FF);
              material.emissiveIntensity = 0.3;
              
            }
          });
        }
      });

      // Clear previous children and add new model
      ref.current.clear();
      ref.current.add(model);

      // Setup animation with original model (not cloned)
      if (gltf.animations.length > 0) {
        console.log(
          'Setting up animation with',
          gltf.animations.length,
          'animations'
        );
        mixerRef.current = new THREE.AnimationMixer(model);
        const action = mixerRef.current.clipAction(gltf.animations[0]);
        action.play();
        console.log('Animation started');
      }
    }
  }, [gltf]);

  // Update animation mixer
  useFrame((_, delta) => {
    if (mixerRef.current) {
      mixerRef.current.update(delta);
    }
  });

  return <group ref={ref} {...props} />;
}

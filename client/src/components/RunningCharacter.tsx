import { forwardRef, useRef, useEffect, useImperativeHandle } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as THREE from 'three';

interface RunningCharacterProps extends React.ComponentProps<'group'> {
  startVisible?: boolean;
}

export const RunningCharacter = forwardRef<THREE.Group, RunningCharacterProps>(
  (props, forwardedRef) => {
    const { startVisible = true, ...restProps } = props;
    const ref = useRef<THREE.Group>(null!);
    const mixerRef = useRef<THREE.AnimationMixer | null>(null);

    useImperativeHandle(forwardedRef, () => ref.current);

    // Load running character model
    const gltf = useLoader(GLTFLoader, './models/characterTwo.glb');

    useEffect(() => {
      if (gltf && ref.current) {
        console.log(
          'RunningCharacter: Setting up model, startVisible:',
          startVisible
        );
        const model = gltf.scene;

        model.traverse((child) => {
          if (child instanceof THREE.Mesh && child.material) {
            const materials = Array.isArray(child.material)
              ? child.material
              : [child.material];
            materials.forEach((material) => {
              if (material instanceof THREE.MeshStandardMaterial) {
                material.wireframe = true;
                material.color.setHex(0x7dd3fc); // Set BASE color to sky blue
                material.emissive.setHex(0x7dd3fc); // Set GLOW color to sky blue
                material.emissiveIntensity = 0.5;

                // 🎯 ALWAYS SET TRANSPARENT and INITIAL OPACITY
                material.transparent = true;
                material.opacity = startVisible ? 1 : 0;
                material.needsUpdate = true;

                console.log(
                  'RunningCharacter material setup - opacity:',
                  material.opacity
                );
              }
            });
          }
        });

        // Clear previous children and add new model
        ref.current.clear();
        ref.current.add(model);

        // Setup animation
        if (gltf.animations.length > 0) {
          console.log('Setting up running animation');

          // 🧹 CLEANUP: Properly dispose of old animation mixer
          if (mixerRef.current) {
            mixerRef.current.stopAllAction(); // Stop all running animations
            mixerRef.current = null; // Clear reference
          }

          // 🎬 SETUP: Create fresh mixer and action
          mixerRef.current = new THREE.AnimationMixer(model);
          const action = mixerRef.current.clipAction(gltf.animations[0]);

          // ⚙️ CONFIGURE: Ensure animation plays correctly
          action.reset(); // Start from frame 0
          action.setLoop(THREE.LoopRepeat, Infinity); // Loop forever
          action.play(); // Start playing

          console.log('Running animation started');
        }
      }
    }, [gltf, startVisible]);

    // Update animation mixer
    useFrame((_, delta) => {
      if (mixerRef.current) {
        mixerRef.current.update(delta);
      }
    });

    return <group ref={ref} {...restProps} />;
  }
);

RunningCharacter.displayName = 'RunningCharacter';

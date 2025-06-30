import { forwardRef, useRef, useEffect, useImperativeHandle } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as THREE from 'three';

interface SitupsCharacterProps extends React.ComponentProps<'group'> {
  startVisible?: boolean;
}

export const SitupsCharacter = forwardRef<THREE.Group, SitupsCharacterProps>(
  (props, forwardedRef) => {
    const { startVisible = false, ...restProps } = props;
    const ref = useRef<THREE.Group>(null!);
    const mixerRef = useRef<THREE.AnimationMixer | null>(null);

    useImperativeHandle(forwardedRef, () => ref.current);

    // Load situps character model
    const gltf = useLoader(GLTFLoader, './models/characterOne.glb');

    useEffect(() => {
      if (gltf && ref.current) {
        console.log(
          'SitupsCharacter: Setting up model, startVisible:',
          startVisible
        );
        const model = gltf.scene;

        model.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            // 🎯 SET INITIAL VISIBILITY (prevents first-render blocking)
            child.visible = startVisible;

            if (child.material) {
              const materials = Array.isArray(child.material)
                ? child.material
                : [child.material];
              materials.forEach((material) => {
                if (material instanceof THREE.MeshStandardMaterial) {
                  material.wireframe = true;
                  material.color.setHex(0x7dd3fc);
                  material.emissive.setHex(0x7dd3fc);
                  material.emissiveIntensity = 0.5;

                  // 🎯 SET INITIAL OPACITY
                  material.transparent = true;
                  material.opacity = startVisible ? 1 : 0;
                  material.needsUpdate = true;

                  console.log(
                    'SitupsCharacter material setup - opacity:',
                    material.opacity,
                    'visible:',
                    child.visible // Add back for debugging
                  );
                }
              });
            }
          }
        });

        ref.current.clear();
        ref.current.add(model);

        // Setup animation
        if (gltf.animations.length > 0) {
          console.log('Setting up situps animation');

          if (mixerRef.current) {
            mixerRef.current.stopAllAction();
            mixerRef.current = null;
          }

          mixerRef.current = new THREE.AnimationMixer(model);
          const action = mixerRef.current.clipAction(gltf.animations[0]);
          action.reset();
          action.setLoop(THREE.LoopRepeat, Infinity);
          action.play();

          console.log('Situps animation started');
        }
      }
    }, [gltf, startVisible]);

    useFrame((_, delta) => {
      if (mixerRef.current) {
        mixerRef.current.update(delta);
      }
    });

    return <group ref={ref} {...restProps} />;
  }
);

SitupsCharacter.displayName = 'SitupsCharacter';

// src/components/TextOverlay.tsx (renamed from Header.tsx)
import { useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';


gsap.registerPlugin(SplitText);

export default function TextOverlay() {
  const overlayRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!overlayRef.current) return;

      document.fonts.ready
        .then(() => {
          if (!overlayRef.current) return;

          const heading = overlayRef.current.querySelector('h2');
          const subheading = overlayRef.current.querySelector('p'); // Get the subheading

          if (!heading || !subheading) return;

          // Heading SplitText (your existing animation)
          const headingSplit = new SplitText(heading, {
            type: 'chars, words, lines',
            linesClass: 'line',
            wordsClass: 'word',
            charsClass: 'letter',
          });

          gsap.from(headingSplit.chars, {
            y: 100,
            autoAlpha: 0,
            stagger: {
              amount: 0.8,
              from: 'random',
              ease: 'power2.out',
            },
            duration: 1.0,
            ease: 'power2.out',
          });

          // Subheading SplitText with random Y positions
          const subheadingSplit = new SplitText(subheading, {
            type: 'chars, words, lines',
            linesClass: 'line',
            wordsClass: 'word',
            charsClass: 'letter',
          });

          // Animate subheading with random Y start positions
          gsap.from(
            subheadingSplit.chars,
            {
              y: 0,
              autoAlpha: 0,
              stagger: {
                amount: 1.0,
                from: 'random',
                ease: 'power2.out',

            },
       
            }
          );
        })
        .catch((error) => {
          console.error('Font loading or animation error:', error);
        });
    },
    {
      scope: overlayRef,
      revertOnUpdate: true,
    }
  );

  return (
    <div
      ref={overlayRef}
      id="text-overlay"
      className="text-overlay fixed inset-0 z-20 pointer-events-none px-6 py-24 sm:py-32 lg:px-8"
    >
      <div className="absolute top-28 left-0 right-0 z-10">
        <div className="mx-auto max-w-2xl text-center px-6">
          <h2 className="text-5xl font-medium tracking-tight text-gray-100 sm:text-7xl">
            Fit With Nature
          </h2>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-100 sm:text-xl/8">
            Experience personalized fitness training with Brad Tonge.
          </p>
        </div>
      </div>

      <div className="absolute bottom-32 left-0 right-0 z-10">
        <div className="mx-auto max-w-2xl text-center px-6">
          <p className="text-lg font-medium text-pretty text-gray-100 sm:text-xl/8">
            Committed to helping you attain your health goals through tailored
            programmes and expert guidance.
          </p>
        </div>
      </div>
    </div>
  );
}

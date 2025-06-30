import { useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';
import Glow from './Glow';
import Heart from '@heroicons/react/24/outline/HeartIcon';

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
          const subheading = overlayRef.current.querySelectorAll('p');
          if (!heading || !subheading) return;

          // Heading SplitText
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

          // Subheading SplitText
          const subheadingSplit = new SplitText(subheading, {
            type: 'chars, words, lines',
            linesClass: 'line',
            wordsClass: 'word',
            charsClass: 'letter',
          });

          gsap.from(subheadingSplit.chars, {
            x: -100,
            autoAlpha: 0,
            stagger: {
              amount: 1.0,
              from: 'random',
              ease: 'power2.out',
            },
            duration: 1.0,
            delay: 0.8,
          });
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
      <div className="absolute inset-0 z-5">
        <Glow />
      </div>

      <div className="absolute top-28 left-0 right-0 z-10">
        <div className="mx-auto max-w-2xl text-center px-6">
          <h2 className="text-5xl font-medium tracking-tight text-sky-300 sm:text-7xl">
            F
            <span className="relative inline-block">
              <span className="opacity-0">i</span>
              <span className="absolute inset-0 flex items-baseline justify-center">
                ı
                <Heart className="absolute -top-1.5 left-1/2 transform -translate-x-1/2 w-3 h-3 text-sky-300 sm:w-4 sm:h-4 sm:-top-2" />
              </span>
            </span>
            t W
            <span className="relative inline-block">
              <span className="opacity-0">i</span>
              <span className="absolute inset-0 flex items-baseline justify-center">
                ı
                <Heart className="absolute -top-1.5 left-1/2 transform -translate-x-1/2 w-3 h-3 text-sky-300 sm:w-4 sm:h-4 sm:-top-2" />
              </span>
            </span>
            th Nature
          </h2>
          <p className="mt-8 text-lg font-medium tracking-wide text-pretty text-sky-100 sm:text-xl/8">
            Experience personalized coaching with Brad Tonge.
          </p>
        </div>
      </div>

      <div className="absolute bottom-32 left-0 right-0 z-10">
        <div className="mx-auto max-w-2xl text-center px-6">
          <p className="text-lg font-medium tracking-wide text-pretty text-sky-100 sm:text-xl/8">
            Tailored programmes and expert coaching that deliver real results.
          </p>
        </div>
      </div>
    </div>
  );
}

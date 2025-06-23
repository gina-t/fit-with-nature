import { useId } from 'react';

export default function Glow() {
  const id = useId();
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
        <defs>
          <radialGradient id={`${id}-desktop`} cx="80%" cy="50%">
            <stop offset="0%" stopColor="rgba(56, 189, 248, 0.4)">
              <animate
                attributeName="stop-opacity"
                values="0.3;0.5;0.3"
                dur="4s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="53.95%" stopColor="rgba(0, 71, 255, 0.09)" />
            <stop offset="100%" stopColor="rgba(10, 14, 23, 0)" />
          </radialGradient>
          <radialGradient id={`${id}-mobile`} cx="50%" cy="50%">
            <stop offset="0%" stopColor="rgba(56, 189, 248, 0.3)" />
              <animate
                attributeName="stop-opacity"
                values="0.3;0.5;0.3"
                dur="4s"
                repeatCount="indefinite"
              />
            <stop offset="53.95%" stopColor="rgba(0, 71, 255, 0.09)" />
            <stop offset="100%" stopColor="rgba(10, 14, 23, 0)" />
          </radialGradient>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill={`url(#${id}-desktop)`}
          className="hidden lg:block"
        />
        <rect
          width="100%"
          height="100%"
          fill={`url(#${id}-mobile)`}
          className="lg:hidden"
        />
      </svg>
    </div>
  );
}

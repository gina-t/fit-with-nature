export default function ContentCardThree() {
  return (
    <div
      data-speed="auto"
      className="relative overflow-hidden shadow-2xl"
      style={{
        background: 
          `radial-gradient(
            ellipse 120% 80% at center,
              #1e3a8a 0%,
              #1e3a8a 15%,    
              #2563eb 40%,    
              #3b82f6 65%,    
              #87ceeb 100%
            )
          `,
      }}
    >
      <div className="relative z-10 backdrop-blur-[2px] bg-gradient-to-br from-black/5 to-black/20">
        <div className="px-6 py-8 sm:px-8 text-center">
          <h3 className="text-2xl font-bold tracking-tight text-sky-300 sm:text-3xl drop-shadow-lg mt-4">
            Structured Training
          </h3>
        </div>
        <div className="px-6 py-8 sm:p-8">
          <p className="text-base text-balance leading-relaxed text-sky-100 sm:text-lg drop-shadow-md mb-4">
            Brad offers structured training plans through one-to-one, group, outdoor, studio and online sessions. The benefits of structured training plans, as opposed to random workouts, are
          </p>
          <ul className="text-sm leading-relaxed text-sky-100 drop-shadow-md mt-2 space-y-1 pl-2 list-disc marker:text-sky-300 marker:text-xs mb-4">
            <li className="ml-2">Progressive overload</li>
            <li className="ml-2">Goal alignment</li>
            <li className="ml-2">Skill mastery</li>
            <li className="ml-2">Minimise plateaus</li>
            <li className="ml-2">Measurement and tracking</li>
            <li className="ml-2">Predictability</li>
          </ul>
          <p className="mt-4 text-base text-balance leading-relaxed text-sky-100 sm:text-lg drop-shadow-md mb-4">
            Structured training plans facilitate consistent gains, are goal-oriented, enable focused skill advancements, prevent stagnation, measure progress, and promote psychological reassurance.
          </p>
        </div>
      </div>
      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-400/20 to-blue-600/20 blur-sm -z-10"></div>
    </div>
  );
}

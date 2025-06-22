export default function ContentCardOne() {
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
          <h3 className="text-2xl font-bold tracking-tight text-sky-300 sm:text-3xl drop-shadow-lg">
            Philosophy
          </h3>
        </div>
        <div className="px-6 py-8 sm:p-8">
          <p className="text-base text-balance leading-relaxed text-sky-100 sm:text-lg drop-shadow-md">
            As a personal trainer, Brad brings over 25 years of experience in
            promoting physical well-being and nutrition, guiding clients toward
            achieving their exercise goals and fulfilling their physical
            potential. From sports injuries to muscular ailments, Brad is
            abreast of current paradigms and collaborates with local health
            professionals for a holistic approach to coaching.
          </p>
        </div>
      </div>

      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-400/20 to-blue-600/20 blur-sm -z-10"></div>
    </div>
  );
}

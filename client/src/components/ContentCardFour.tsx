export default function ContentCardFour() {
  return (
    <div
      data-speed="auto"
      className="relative overflow-hidden shadow-2xl"
      style={{
        background: `radial-gradient(
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
            Let's Work Together
          </h3>
        </div>
        <div className="px-6 py-8 sm:p-8">
          <p className="text-base text-balance leading-relaxed text-sky-100 sm:text-lg drop-shadow-md mb-6">
            Exercise and nutrition are integral to Brad's lifestyle, as is his
            connection to the natural environment, interacting through surfing,
            running and horticulture. Brad believes that combining structured
            training in outdoor settings creates the optimal foundation for
            physical, psychological and social well-being.
          </p>
          <div className="text-base leading-relaxed text-sky-100 sm:text-lg space-y-2">
            <div>
              <span className="font-medium text-sky-300">Instagram: </span>
              <a
                href="https://www.instagram.com/fitwithnature/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-200 hover:text-white hover:underline transition-colors"
              >
                @fitwithnature
              </a>
            </div>
            <div>
              <span className="font-medium text-sky-300">Email: </span>
              <a
                href="mailto:brtonge@gmail.com"
                className="text-sky-200 hover:text-white hover:underline transition-colors"
              >
                brtonge@gmail.com
              </a>
            </div>
            <div>
              <span className="font-medium text-sky-300">Phone: </span>
              <a
                href="tel:+61401303363"
                className="text-sky-200 hover:text-white hover:underline transition-colors"
              >
                +61 401 303 363
              </a>
            </div>
            <div>
              <span className="font-medium text-sky-300">Location: </span>
              <span className="text-sky-100">Erskineville</span>
            </div>
          </div>
        </div>
      </div>
      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-400/20 to-blue-600/20 blur-sm -z-10"></div>
    </div>
  );
}

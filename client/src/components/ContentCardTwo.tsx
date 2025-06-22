export default function ContentCardTwo() {
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
            Qualifications
          </h3>
        </div>
        <div className="px-6 py-8 sm:p-8">
          <ul className="text-sm leading-relaxed text-sky-100 drop-shadow-md mt-2 space-y-1 pl-2 list-disc marker:text-sky-300 marker:text-xs">
            <li className="ml-2">Certificate IV Personal Training</li>
            <li className="ml-2">Certificate IV Training and Assessment</li>
            <li className="ml-2">Pregnancy and Postnatal Training</li>
            <li className="ml-2">Pelvic Floor Essentials</li>
            <li className="ml-2">Training Older Adults</li>
            <li className="ml-2">
              Athletics Australia Level 2 Recreational Running Coach
            </li>
            <li className="ml-2">Injury Prevention for Runners and Athletes</li>
            <li className="ml-2">Postural Analysis and Dynamic Assessment</li>
            <li className="ml-2">
              Restoring Optimal Function for Neck/Shoulder and Knee/Hip
            </li>
            <li className="ml-2">Boot Camp Advanced Instructor Level 2</li>
            <li className="ml-2">
              Certificate in High Intensity Resistance Training
            </li>
            <li className="ml-2">
              Certificate in Puncfit Kick Pad Instruction
            </li>
            <li className="ml-2">Certificate in Suspension Training</li>
          </ul>
        </div>
      </div>
      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-400/20 to-blue-600/20 blur-sm -z-10"></div>
    </div>
  );
}

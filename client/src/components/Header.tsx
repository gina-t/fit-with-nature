// import ThreeScene from "./ThreeScene";
// import { useRef } from "react";
// import { gsap } from "gsap";
// import { SplitText } from "gsap/SplitText";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(SplitText);

// export default function Header() {
//   const headerRef = useRef<HTMLDivElement>(null);
  
//   useGSAP(
//     () => {
//       if (!headerRef.current) return;

//       document.fonts.ready.then(() => {
//           if (!headerRef.current) return;

//           const heading = headerRef.current.querySelector("h2");
//           if (!heading) return;
          
//           // Heading SplitText
//           const headingSplit = new SplitText(heading, {
//             type: "chars, words, lines",
//             linesClass: "line",
//             wordsClass: "word",
//             charsClass: "letter",
//           });
          
//           // Animate heading characters
//           gsap.from(headingSplit.chars, {
//             y: 100,
//             autoAlpha: 0,
//             stagger: {
//               amount: 1.0,
//               from: "random",
//               ease: "power2.out",
//             },
//             duration: 1.0,
//             ease: "power2.out",
//           });
          
          
//         })
//         .catch((error) => {
//           console.error("Font loading or animation error:", error);
//         });
//     },
//     {
//       scope: headerRef,
//       revertOnUpdate: true,
//     },
//   );

//   return (
//     <div className="relative isolate overflow-hidden bg-blue-950 px-6 py-24 sm:py-32 lg:px-8 min-h-screen">
//       {/* ThreeScene as background */}
//       <div className="absolute inset-0 -z-10">
//         <ThreeScene />
//       </div>
      
//       {/* Fixed gradient overlays */}
//       {/* <div
//         aria-hidden="true"
//         className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
//       >
//         <div
//           style={{
//             clipPath:
//               'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//           }}
//           className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#9AA6B2] to-[#21325E] opacity-20"
//         />
//       </div>
      
//       <div
//         aria-hidden="true"
//         className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
//       >
//         <div
//           style={{
//             clipPath:
//               'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//           }}
//           className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#9AA6B2] to-[#21325E] opacity-20"
//         />
//       </div> */}

//       {/* Top text overlay */}
//       <div ref={headerRef} className="absolute top-24 left-0 right-0 z-10">
//         <div className="mx-auto max-w-2xl text-center px-6">
//           <h2 className="text-5xl font-medium tracking-tight text-gray-100 sm:text-7xl">
//             Fit With Nature
//           </h2>
//           <p className="mt-8 text-lg font-medium text-pretty text-gray-100 sm:text-xl/8">
//             Experience personalized fitness training with Brad Tonge.
//           </p>
//         </div>
//       </div>
      
//       {/* Bottom text overlay */}
//       <div className="absolute bottom-32 left-0 right-0 z-10">
//         <div className="mx-auto max-w-2xl text-center px-6">
//           <p className="text-lg font-medium text-pretty text-gray-50 sm:text-xl/8">
//             Committed to helping you attain your health goals through tailored programmes and expert guidance.
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

import { Routes, Route, useLocation } from 'react-router-dom';
import { TransitionProvider } from '../context/TransitionContext';
import TransitionComponent from '../components/Transition';
import ContinuousScroll from '../views/ContinuousScroll';
import Images from '../components/Images';
import ThreeScene from '../components/ThreeScene';
import TextOverlay from '../components/TextOverlay';

import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollSmoother, useGSAP);

export default function Router() {
  const location = useLocation();

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
      ignoreMobileResize: true,
      normalizeScroll: true,
      smoothTouch: 0.1,
    });
  }, [location]);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        {/* Fixed 3D Character Background */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <ThreeScene />
        </div>

        <TextOverlay />

        <TransitionProvider>
          <Routes>
            <Route
              path="/"
              element={
                <TransitionComponent>
                  <div>
                    <ContinuousScroll />
                    <Images />
                  </div>
                </TransitionComponent>
              }
            />
          </Routes>
        </TransitionProvider>
      </div>
    </div>
  );
}



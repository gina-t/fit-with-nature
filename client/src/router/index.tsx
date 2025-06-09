import { Routes, Route } from 'react-router-dom';
import { TransitionProvider } from '../context/TransitionContext';
import TransitionComponent from '../components/Transition';
import ThreeGraphic from '../views/ThreeGraphic';

const Router = () => {
  return (
    <TransitionProvider>
      <Routes>
        <Route
          path="/"
          element={
            <TransitionComponent>
              <ThreeGraphic />
            </TransitionComponent>
          }
        />
      </Routes>
    </TransitionProvider>
  );
};

export default Router;

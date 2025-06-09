import ThreeScene from '../components/ThreeScene';

export default function ThreeGraphic() {
  return (
    <div className="three-graphic-container h-screen relative">
      {/* 3D Scene */}
      <ThreeScene />

      {/* UI overlay - perfect for workout instructions */}
      <div className="absolute top-4 left-4 z-10">
        <h1 className="text-white text-2xl font-bold">
          3D Workout Visualization
        </h1>
        {/* Add workout data, timer, rep counter, etc. */}
        <div className="mt-4 text-white">
          <p>Current Exercise: Bicep Curls</p>
          <p>Reps: 12/15</p>
          <p>Sets: 2/3</p>
        </div>
      </div>

      {/* Optional controls */}
      <div className="absolute bottom-4 right-4 z-10">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Reset Camera
        </button>
      </div>
    </div>
  );
}

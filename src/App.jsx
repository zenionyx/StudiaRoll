import { useState } from "react";

const levels = [
  {
    name: "Level 1 – Foundation",
    steps: [
      "30 mins + 5 mins break",
      "35 mins + 5 mins break",
      "40 mins + 5 mins break",
    ],
    total: "105 mins study / 15 mins break",
  },
  {
    name: "Level 2 – Intermediate",
    steps: [
      "45 mins + 5 mins break",
      "50 mins + 10 mins break",
      "55 mins + 10 mins break",
    ],
    total: "150 mins study / 25 mins break",
  },
  {
    name: "Level 3 – Advanced",
    steps: ["60 mins + 10 mins break", "65 mins + 10 mins break"],
    total: "125 mins study / 20 mins break",
  },
];

function App() {
  const [currentLevel, setCurrentLevel] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    let count = 0;
    const interval = setInterval(() => {
      const temp = levels[Math.floor(Math.random() * levels.length)];
      setCurrentLevel(temp);
      count++;
      if (count >= 10) {
        clearInterval(interval);
        const chosen = levels[Math.floor(Math.random() * levels.length)];
        setCurrentLevel(chosen);
        setLoading(false);
      }
    }, 100);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f0eb] p-4">
      <div className="bg-[#fffaf4] rounded-2xl shadow-lg p-6 w-full max-w-md text-center space-y-6 border border-[#e0d6cc]">
        {/* Display */}
        <div className="text-2xl font-semibold text-[#5c3d2e] min-h-[2rem]">
          {currentLevel ? currentLevel.name : "Press to begin!"}
        </div>

        {/* Button */}
        <button
          type="button"
          onClick={handleClick}
          disabled={loading}
          className="bg-[#a7794e] hover:bg-[#926544] text-white font-semibold py-2 px-4 rounded-xl transition disabled:opacity-50"
        >
          {loading ? "Rolling..." : "Give me a level!"}
        </button>

        {/* Info Box (always visible) */}
        <div className="bg-[#f9f5f1] border border-[#e6ddd2] rounded-xl p-4 text-sm text-[#4b3621] text-left space-y-2 min-h-40 flex flex-col justify-center">
          <p className="font-bold">Study:</p>
          {currentLevel ? (
            <ul className="list-disc list-inside space-y-1">
              {currentLevel.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          ) : (
            <p className="italic text-[#a69382]">...</p>
          )}

          <p className="pt-2 font-medium">
            Total:{" "}
            {currentLevel ? (
              <span className="font-normal">{currentLevel.total}</span>
            ) : (
              <span className="italic text-[#a69382]">...</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

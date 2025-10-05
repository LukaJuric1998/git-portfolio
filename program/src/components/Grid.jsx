import { useState, useEffect } from "react";
import { workoutProgram as training_plan } from "../utils/index.js";
import WorkoutCard from "./WorkoutCard.jsx";

export default function Grid() {
  const [savedWorkouts, setSavedWorkouts] = useState(null);
  const [selectedWorkout, setSelectedWorkout] = useState(null);

  const completedWorkouts = Object.keys(savedWorkouts || {}).filter((val) => {
    const entry = savedWorkouts[val];
    return entry.isComplete;
  });

  function handleSave(index, data) {
    const newObj = {
      ...savedWorkouts,
      [index]: {
        ...data,
        isComplete: !!data.isComplete || !!savedWorkouts?.[index]?.isComplete,
      },
    };
    setSavedWorkouts(newObj);
    localStorage.setItem("brogram", JSON.stringify(newObj));
    setSelectedWorkout(null);
  }

  function handleComplete(index, data) {
    const newObj = { ...data, isComplete: true };
    handleSave(index, newObj);
  }

  useEffect(() => {
    if (!localStorage) return;
    let savedData = {};
    if (localStorage.getItem("brogram")) {
      savedData = JSON.parse(localStorage.getItem("brogram"));
    }
    setSavedWorkouts(savedData);
  }, []);

  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {Object.keys(training_plan).map((workout, workoutIndex) => {
        const isLocked =
          workoutIndex === 0
            ? false
            : !completedWorkouts.includes(`${workoutIndex - 1}`);

        const type =
          workoutIndex % 3 === 0
            ? "Push"
            : workoutIndex % 3 === 1
            ? "Pull"
            : "Legs";

        const trainingPlan = training_plan[workoutIndex];
        const dayNum =
          workoutIndex + 1 < 10 ? "0" + (workoutIndex + 1) : workoutIndex + 1;

        const icon =
          workoutIndex % 3 === 0 ? (
            <i className="fa-solid fa-dumbbell text-indigo-600 text-2xl"></i>
          ) : workoutIndex % 3 === 1 ? (
            <i className="fa-solid fa-weight-hanging text-green-600 text-2xl"></i>
          ) : (
            <i className="fa-solid fa-bolt text-yellow-500 text-2xl"></i>
          );

        if (workoutIndex === selectedWorkout) {
          return (
            <WorkoutCard
              savedWeights={savedWorkouts?.[workoutIndex]?.weights}
              handleSave={handleSave}
              handleComplete={handleComplete}
              key={workoutIndex}
              trainingPlan={trainingPlan}
              type={type}
              workoutIndex={workoutIndex}
              icon={icon}
              dayNum={dayNum}
            />
          );
        }

        return (
          <button
            onClick={() => {
              if (isLocked) return;
              setSelectedWorkout(workoutIndex);
            }}
            key={workoutIndex}
            className={`bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center transition transform hover:-translate-y-1 hover:shadow-xl 
              ${isLocked ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
          >
            {/* Header Row */}
            <div className="w-full flex items-center justify-between mb-4">
              <p className="text-lg font-semibold text-gray-700">
                Day {dayNum}
              </p>
              {isLocked ? (
                <i className="fa-solid fa-lock text-gray-400 text-xl"></i>
              ) : (
                icon
              )}
            </div>

            {/* Workout Type */}
            <div className="text-center">
              <h4 className="text-xl font-bold text-gray-900">{type}</h4>
              <p className="text-sm text-gray-500 mt-1">
                {type === "Sleep" && "Chest, Shoulders, Triceps"}
                {type === "Speed" && "Back, Biceps"}
                {type === "Power" && "Lower Body Strength"}
              </p>
            </div>
          </button>
        );
      })}
    </div>
  );
}

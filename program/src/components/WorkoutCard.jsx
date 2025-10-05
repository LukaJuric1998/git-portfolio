import React, { useState } from "react";
import Modal from "./Modal";
import { exerciseDescriptions } from "../utils";

export default function WorkoutCard(props) {
  const {
    trainingPlan,
    workoutIndex,
    type,
    dayNum,
    icon,
    savedWeights,
    handleSave,
    handleComplete,
  } = props;

  const { warmup, workout } = trainingPlan || {};
  const [showExerciseDescription, setShowExerciseDescription] = useState(null);
  const [weights, setWeights] = useState(savedWeights || {});

  function handleAddWeight(title, weight) {
    setWeights({
      ...weights,
      [title]: weight,
    });
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-3xl mx-auto space-y-6">
      {/* Modal for exercise description */}
      {showExerciseDescription && (
        <Modal
          showExerciseDescription={showExerciseDescription}
          handleCloseModal={() => setShowExerciseDescription(null)}
        />
      )}

      {/* Header */}
      <div className="flex items-center justify-between border-b pb-4">
        <p className="text-lg font-semibold text-gray-700">Day {dayNum}</p>
        {icon}
      </div>
      <div className="text-center">
        <h2 className="text-xl font-bold text-gray-900">{type} Workout</h2>
      </div>

      {/* Warmup Section */}
      <div className="grid grid-cols-4 gap-4 items-center text-center">
        <div className="col-span-4 text-left font-semibold text-gray-700 text-lg">
          Warmup
        </div>
        <p className="font-semibold">Sets</p>
        <p className="font-semibold">Reps</p>
        <p className="font-semibold">Max Weight</p>

        {warmup.map((warmupExercise, warmupIndex) => (
          <React.Fragment key={warmupIndex}>
            <div className="flex items-center gap-2 col-span-1 text-left">
              <p className="text-gray-700 break-words">
                {warmupIndex + 1}. {warmupExercise.name}
              </p>
              <button
                onClick={() =>
                  setShowExerciseDescription({
                    name: warmupExercise.name,
                    description: exerciseDescriptions[warmupExercise.name],
                  })
                }
                className="text-blue-500 hover:text-blue-700"
              >
                <i className="fa-regular fa-circle-question" />
              </button>
            </div>
            <p className="text-gray-600">{warmupExercise.sets}</p>
            <p className="text-gray-600">{warmupExercise.reps}</p>
            <input
              className="bg-gray-100 border rounded-lg p-2 text-center text-gray-500"
              placeholder="N/A"
              disabled
            />
          </React.Fragment>
        ))}
      </div>

      {/* Workout Section */}
      <div className="grid grid-cols-4 gap-4 items-center text-center">
        <div className="col-span-4 text-left font-semibold text-gray-700 text-lg">
          Workout
        </div>
        <p className="font-semibold">Sets</p>
        <p className="font-semibold">Reps</p>
        <p className="font-semibold">Max Weight</p>

        {workout.map((workoutExercise, wIndex) => (
          <React.Fragment key={wIndex}>
            <div className="flex items-center gap-2 col-span-1 text-left">
              <p className="text-gray-700 break-words">
                {wIndex + 1}. {workoutExercise.name}
              </p>
              <button
                onClick={() =>
                  setShowExerciseDescription({
                    name: workoutExercise.name,
                    description: exerciseDescriptions[workoutExercise.name],
                  })
                }
                className="text-blue-500 hover:text-blue-700"
              >
                <i className="fa-regular fa-circle-question" />
              </button>
            </div>
            <p className="text-gray-600">{workoutExercise.sets}</p>
            <p className="text-gray-600">{workoutExercise.reps}</p>
            <input
              value={weights[workoutExercise.name] || ""}
              onChange={(e) =>
                handleAddWeight(workoutExercise.name, e.target.value)
              }
              className="border rounded-lg p-2 text-center focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="14"
            />
          </React.Fragment>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4 pt-4 border-t">
        <button
          onClick={() => handleSave(workoutIndex, { weights })}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
        >
          Save & Exit
        </button>
        <button
          onClick={() => handleComplete(workoutIndex, { weights })}
          disabled={Object.keys(weights).length !== workout.length}
          className={`px-4 py-2 rounded-lg text-white transition ${
            Object.keys(weights).length !== workout.length
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-700"
          }`}
        >
          Complete
        </button>
      </div>
    </div>
  );
}

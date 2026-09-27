
"use client";
import React, { useContext, useState } from "react";
import { WorkoutContext } from "../context/workoutContext";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";

const MyPlanPage = () => {
  const { addWorkout, saveWorkout, setaddWorkout, setsaveWorkout } =
    useContext(WorkoutContext);

  const [activeTab, setActiveTab] = useState("plan");

  // Separate sorting for each section
  const [planSort, setPlanSort] = useState("duration");
  const [savedSort, setSavedSort] = useState("duration");

  const handleDeletePlan = (id) => {
    setaddWorkout(addWorkout.filter((workout) => workout.id !== id));
    toast.error("Workout Removed");
  };

  const handleDeleteSaved = (id) => {
    setsaveWorkout(saveWorkout.filter((workout) => workout.id !== id));
    toast.error("Workout Removed");
  };

  const sortWorkouts = (workouts, sortBy) => {
    return [...workouts].sort((a, b) => {
      if (sortBy === "duration") {
        return b.duration - a.duration;
      }

      if (sortBy === "calories") {
        return b.caloriesBurned - a.caloriesBurned;
      }

      if (sortBy === "rating") {
        return b.rating - a.rating;
      }

      return 0;
    });
  };

  const sortedPlanWorkouts = sortWorkouts(addWorkout, planSort);
  const sortedSavedWorkouts = sortWorkouts(saveWorkout, savedSort);

  const currentWorkouts =
    activeTab === "plan" ? addWorkout : saveWorkout;

  return (
    <div className="container mx-auto bg-base-100 shadow-sm p-8">
      <div className="my-5">
        <h1 className="text-3xl font-bold">MY PLAN</h1>
        <p>Cap of five lifts for today. Finish them, then load more.</p>
      </div>

      <div className="border-1 border-gray-700 my-7 h-[125px] rounded-2xl">
        <div className="grid grid-cols-3 gap-6 p-8">
          <div>
            <p>Exercises</p>
            <h1 className="text-3xl font-bold">
              {currentWorkouts.length}
            </h1>
          </div>

          <div className="border-x-1 border-gray-700 pl-8">
            <p>Minutes</p>
            <h1 className="text-3xl font-bold">
              {currentWorkouts.reduce(
                (total, workout) => total + workout.duration,
                0
              )}
            </h1>
          </div>

          <div className="pl-8">
            <p>Calories</p>
            <h1 className="text-3xl font-bold">
              {currentWorkouts.reduce(
                (total, workout) => total + workout.caloriesBurned,
                0
              )}
            </h1>
          </div>
        </div>
      </div>

      <div className="tabs tabs-box">
        {/* TODAY'S PLAN */}
        <input
          type="radio"
          name="my_tabs_6"
          className="tab"
          aria-label="Today’s Plan"
          defaultChecked
          onChange={() => setActiveTab("plan")}
        />

        <div className="tab-content bg-base-100 border-base-300 p-6">

          {/* Sort By - Today's Plan */}
          <div className="flex justify-end mb-5">
            <select
              value={planSort}
              onChange={(e) => setPlanSort(e.target.value)}
              className="select select-bordered rounded-xl"
            >
              <option value="duration">Sort By: Duration</option>
              <option value="calories">Sort By: Calories</option>
              <option value="rating">Sort By: Rating</option>
            </select>
          </div>

          {addWorkout.length > 0 ? (
            sortedPlanWorkouts.map((workout) => (
              <div key={workout.id} className="m-2 sm:m-4">
                <ul className="list bg-base-100 rounded-box shadow-md border border-gray-700">
                  <li className="list-row flex flex-col md:flex-row gap-4 p-4">
                    <div>
                      <Image
                        className="rounded-2xl w-full sm:w-[150px] h-[180px] sm:h-[150px] object-cover"
                        src={workout.image}
                        alt="workout image"
                        width={150}
                        height={20}
                      />
                    </div>

                    <div className="content-center p-2 flex-1 min-w-0">
                      <h1 className="card-title">{workout.name}</h1>
                      <p>{workout.equipment}</p>

                      <div className="card-actions justify-start mt-2 flex flex-wrap gap-3 text-sm">
                        <div>
                          <span>🕐</span>
                          {workout.duration} min
                        </div>

                        <div>
                          <span>🔥</span>
                          {workout.caloriesBurned} kcal
                        </div>

                        <div>
                          <span>⭐</span>
                          {workout.rating}
                        </div>
                      </div>
                    </div>

                    <div className="content-center">
                      <Link href={`/workouts/${workout.id}`} key={workout.id}>
                        <button className="btn border-1 border-gray-700 rounded-2xl">
                          View Details
                        </button>
                      </Link>

                      <button className="btn border-1 mx-4 rounded-2xl bg-[#C2F800] text-black">
                        <span>✓</span> Mark as Done
                      </button>

                      <button
                        onClick={() => handleDeletePlan(workout.id)}
                        className="mr-4"
                      >
                        X
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            ))
          ) : (
            <div className="border-1 border-dashed border-gray-700 my-10 h-[300px] rounded-2xl content-center text-center">
              <h1 className="text-xl font-semibold">NOTHING HERE YET</h1>
              <p>Browse the library and add a lift to get today moving.</p>

              <Link href="/workouts">
                <button className="btn bg-[#C2F800] text-black m-4 px-5 rounded-2xl text-[12px] font-bold">
                  Go to workouts
                </button>
              </Link>
            </div>
          )}
        </div>

        {/* SAVED */}
        <input
          type="radio"
          name="my_tabs_6"
          className="tab"
          aria-label="Saved"
          onChange={() => setActiveTab("saved")}
        />

        <div className="tab-content bg-base-100 border-base-300 p-6">

          {/* Sort By - Saved */}
          <div className="flex justify-end mb-5">
            <select
              value={savedSort}
              onChange={(e) => setSavedSort(e.target.value)}
              className="select select-bordered rounded-xl"
            >
              <option value="duration">Sort By: Duration</option>
              <option value="calories">Sort By: Calories</option>
              <option value="rating">Sort By: Rating</option>
            </select>
          </div>

          {saveWorkout.length > 0 ? (
            sortedSavedWorkouts.map((workout) => (
              <div key={workout.id} className="m-4">
                <ul className="list bg-base-100 rounded-box shadow-md border border-gray-700">
                  <li className="list-row">
                    <div>
                      <Image
                        className="rounded-2xl"
                        src={workout.image}
                        alt="workout image"
                        width={150}
                        height={20}
                      />
                    </div>

                    <div className="content-center p-2">
                      <h1 className="card-title">{workout.name}</h1>
                      <p>{workout.equipment}</p>

                      <div className="card-actions justify-start mt-1">
                        <div>
                          <span>🕐</span>
                          {workout.duration} min
                        </div>

                        <div>
                          <span>🔥</span>
                          {workout.caloriesBurned} kcal
                        </div>

                        <div>
                          <span>⭐</span>
                          {workout.rating}
                        </div>
                      </div>
                    </div>

                    <div className="content-center">
                      <Link href={`/workouts/${workout.id}`} key={workout.id}>
                        <button className="btn border-1 border-gray-700 rounded-2xl">
                          View Details
                        </button>
                      </Link>

                      <button
                        onClick={() => handleDeleteSaved(workout.id)}
                        className="mx-5"
                      >
                        X
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            ))
          ) : (
            <div className="border-1 border-dashed border-gray-700 my-10 h-[300px] rounded-2xl content-center text-center">
              <h1 className="text-xl font-semibold">NOTHING HERE YET</h1>
              <p>Browse the library and add a lift to get today moving.</p>

              <Link href="/workouts">
                <button className="btn bg-[#C2F800] text-black m-4 px-5 rounded-2xl text-[12px] font-bold">
                  Go to workouts
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPlanPage;


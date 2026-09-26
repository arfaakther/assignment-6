"use client";
import React, { useContext } from "react";
import { WorkoutContext } from "../context/workoutContext";
import Image from "next/image";
import Link from "next/link";
// import WorkoutCard from '../components/workoutCard';

const MyPlanPage = () => {
  const { addWorkout, saveWorkout } = useContext(WorkoutContext);
  return (
    <div className="container mx-auto bg-base-100 shadow-sm p-8 ">
      <div>
        <h1>MY PLAN</h1>
        <p>Cap of five lifts for today. Finish them, then load more.</p>
      </div>
      <div className="border-1 border-gray-700 my-5 h-[125px] rounded-2xl">
        <div className="grid grid-cols-3 gap 6 text-center py-8">
          <div>
            <p>Exercises</p>
            <h1>{addWorkout.length}</h1>
          </div>
          <div className="border-x-1 border-gray-700">
            <p>Minutes</p>
            <h1>{addWorkout.reduce(
    (total, workout) => total + workout.duration,
    0)}</h1>
          </div>
          <div>
            <p>Calories</p>
            <h1>{addWorkout.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0)}
    </h1>
          </div>
        </div>
          </div>
          
        <div className="border-1 border-gray-700 my-5 h-[125px] rounded-2xl">
  <div className="grid grid-cols-3 gap-6 text-center py-8">
    <div>
      <p>Exercises</p>
      <h1>{saveWorkout.length}</h1>
    </div>

    <div className="border-x-1 border-gray-700">
      <p>Minutes</p>
      <h1>
        {saveWorkout.reduce(
          (total, workout) => total + workout.duration,
          0
        )}
      </h1>
    </div>

    <div>
      <p>Calories</p>
      <h1>
        {saveWorkout.reduce(
          (total, workout) => total + workout.caloriesBurned,
          0
        )}
      </h1>
    </div>
  </div>
</div>

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box">
        <input
          type="radio"
          name="my_tabs_6"
          className="tab"
        aria-label="Today’s Plan"
        defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {addWorkout.length > 0 ? (
            addWorkout.map((workout) => (
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
                          <span className="">🕐</span>
                          {workout.duration} min
                        </div>
                        <div className="">
                          <span>🔥</span>
                          {workout.caloriesBurned} kcal
                        </div>
                        <div className="">
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
                        Mark as Done
                      </button>
                      <button className="mr-4">X</button>{" "}
                    </div>
                  </li>
                </ul>
              </div>
            ))
          ) : (
            <div className="border-1 border-dashed border-gray-700 my-10 h-[300px] rounded-2xl content-center text-center">
              <h1 className="text-xl font-semibold">NOTHING HERE YET</h1>
              <p>Browse the library and add a lift to get today moving.</p>
              <button className=" btn bg-[#C2F800] text-black m-4 px-5 rounded-2xl text-[12px] font-bold">
                Go to workouts
              </button>
            </div>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_6"
          className="tab"
          aria-label="Saved"
          
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {saveWorkout.length > 0 ? (
            saveWorkout.map((workout) => (
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
                          <span className="">🕐</span>
                          {workout.duration} min
                        </div>
                        <div className="">
                          <span>🔥</span>
                          {workout.caloriesBurned} kcal
                        </div>
                        <div className="">
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
                      <button className="mx-5">X</button>{" "}
                    </div>
                  </li>
                </ul>
              </div>
            ))
          ) : (
            <div className="border-1 border-dashed border-gray-700 my-10 h-[300px] rounded-2xl content-center text-center">
              <h1 className="text-xl font-semibold">NOTHING HERE YET</h1>
              <p>Browse the library and add a lift to get today moving.</p>
              <button className=" btn bg-[#C2F800] text-black m-4 px-5 rounded-2xl text-[12px] font-bold">
                Go to workouts
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPlanPage;

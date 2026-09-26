'use client'
import React, { useContext } from 'react';
import { WorkoutContext } from '../context/workoutContext';
import { toast } from 'react-toastify';
const SavedButton = ({workout}) => {
    const {saveWorkout, setsaveWorkout} = useContext(WorkoutContext);
        
    const handleSaveworkout = () => {
        const newWorkoutArray = saveWorkout.filter(
    (item) => item.id === workout.id
  );
        if (newWorkoutArray.includes(workout)) {
              toast.error("Already Saved!");
            }
            else {
            setsaveWorkout([...saveWorkout, workout])
            toast.success(" Workout Saved!");
        }
        }
        
    
    return (
        <button onClick={() => handleSaveworkout()} className="btn border-1 border-gray-500 p-5 rounded-xl">Save for later</button>
   
        );
};

export default SavedButton;
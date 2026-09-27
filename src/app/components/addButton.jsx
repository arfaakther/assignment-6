'use client'
import React, { useContext } from 'react';
import { WorkoutContext } from '../context/workoutContext';
import { toast } from 'react-toastify';

const AddButton = ({workout}) => {
    const {addWorkout, setaddWorkout} = useContext(WorkoutContext);
    const handleAddworkout = () => {
              const newWorkoutArrayy = addWorkout.filter(
    (item) => item.id === workout.id
  );
        if (newWorkoutArrayy.includes(workout)) {
              toast.error("Already Added!");
            }
            else {
            setaddWorkout([...addWorkout, workout]);
              toast.success("Added to today's Plan!");
        }
    }
    
return (
        <button onClick={()=> handleAddworkout()} className="btn bg-[#C2F800] text-black p-5 rounded-xl">Add to today's plan</button>
    );
};

export default AddButton;
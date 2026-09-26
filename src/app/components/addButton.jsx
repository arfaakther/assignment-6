'use client'
import React, { useContext } from 'react';
import { WorkoutContext } from '../context/workoutContext';

const AddButton = ({workout}) => {
    const {addWorkout, setaddWorkout} = useContext(WorkoutContext);
    const handleAddworkout = () => {
        setaddWorkout([...addWorkout, workout])
        alert('added')
    }
    
return (
        <button onClick={()=> handleAddworkout()} className="btn bg-[#C2F800] text-black p-5 rounded-xl">Add to today's plan</button>
    );
};

export default AddButton;
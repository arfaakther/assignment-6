'use client'
import React, { useContext } from 'react';
import { WorkoutContext } from '../context/workoutContext';
const SavedButton = ({workout}) => {
    const {saveWorkout, setsaveWorkout} = useContext(WorkoutContext);
        
    const handleSaveworkout = () => {
            setsaveWorkout([...saveWorkout, workout])
        alert('save added')
        console.log('button clicked');
        }
        
    
    return (
        <button onClick={() => handleSaveworkout()} className="btn border-1 border-gray-500 p-5 rounded-xl">Save for later</button>
   
        );
};

export default SavedButton;
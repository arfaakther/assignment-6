'use client'
import React, { createContext, useState } from 'react';
export const WorkoutContext = createContext({});
const WorkoutProvider = ({children}) => {
    const [addWorkout, setaddWorkout] = useState([]);
    const [saveWorkout, setsaveWorkout] = useState([]);
     
const addValue = {
        addWorkout,
        setaddWorkout,
        saveWorkout,
        setsaveWorkout
        }
    return (
        <WorkoutContext.Provider value={addValue}>
            {children}
        </WorkoutContext.Provider>
    );
};

export default WorkoutProvider;
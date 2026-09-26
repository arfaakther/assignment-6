import React from 'react';

const MyPlanPage = () => {
    return (
        <div className='container mx-auto bg-base-100 shadow-sm p-8 '>
            <div>
                <h1>MY PLAN</h1>
                <p>Cap of five lifts for today. Finish them, then load more.</p>
            </div>
            <div className='border-1 border-gray-700 my-5 h-[125px] rounded-2xl'>
                <div className='grid grid-cols-3 gap 6 text-center py-8'>
                <div><p>Exercises</p>
                    <h1>50</h1>
                </div>
                <div className='border-x-1 border-gray-700'><p>Minutes</p>
                    <h1>50</h1>
                </div>
                <div><p>Calories</p>
                    <h1>50</h1>
                </div>
                
            </div>
            </div>
            
            <div className='border-1 border-dashed border-gray-700 my-10 h-[300px] rounded-2xl content-center text-center'>
                <h1 className="text-xl font-semibold">NOTHING HERE YET</h1>
      <p>Browse the library and add a lift to get today moving.</p>
      <button className=" btn bg-[#C2F800] text-black m-4 px-5 rounded-2xl text-[12px] font-bold">Go to workouts</button>
            </div>
        </div>
    );
};

export default MyPlanPage;
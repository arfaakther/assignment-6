import React from 'react';
import Image from 'next/image';
import AddButton from '@/app/components/addButton';
import SavedButton from '@/app/components/savedButton';
import { notFound } from 'next/navigation';
// const getData = async () => {
//     const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${workoutId}`);
//     const data = await res.json();
//     return data;
// }
const WorkoutDetails = async({ params }) => {
    const { workoutId } = await params;
    const res = await fetch(`https://api.api-store.workers.dev/api/fitlog/${workoutId}`);
  const data = await res.json();
  
 if (!res.ok) {
   notFound();
}
     const { image, sets, reps,instructions, equipment,difficulty, duration, caloriesBurned,rating,muscleGroups,name,description} = data
    
  return (
        <div className="card lg:card-side rounded-none bg-base-100 shadow-sm container mx-auto p-10">
  <figure className=' rounded-2xl'>
    <Image src={image} alt="workout image" width={500} height={100}></Image>
  </figure>
  <div className="ml-8 ">
                <h2 className="card-title font-bold text-[36px]">{name}</h2>
                <p>{description}</p>
                <div className='mt-4'>{muscleGroups.map((m, ind) => {
              return <div key={ind} className="badge bg-[#C2F800] m-1 text-gray-700 font-semibold rounded-2xl px-4 text-black">{m}</div>
            })
            }</div>
                <div className="overflow-x-auto my-8 rounded-box border border-base-content/5 bg-base-100">
  <table className="table">
   
    <tbody>
      {/* row 1 */}
      <tr>
       
        <td>EQUIPMENT</td>
        <td>{equipment}</td>
        
      </tr>
      {/* row 2 */}
      <tr>
      
        <td>DIFFICULTY</td>
        <td>{difficulty}</td>
        
      </tr>
      {/* row 3 */}
      <tr>
        <td>SETS</td>
        <td>{sets}</td>
       
      </tr>
      <tr>
        <td>REPS</td>
        <td>{reps}</td>
       
      </tr>
      <tr>
        <td>DURATION</td>
        <td>{duration}</td>
       
      </tr>
      <tr>
        <td>CALORIES</td>
        <td>{caloriesBurned}</td>
       
      </tr>
      <tr>
        <td>RATING</td>
        <td>{rating}</td>
       
      </tr>
    </tbody>
  </table>
          </div>
          <div className='p-5'>
            <h1 className='my-2 font-medium'>INSTRUCTIONS</h1>
              <ol className='list-decimal ml-3'>
                {instructions.map((instra, ind) => {
              return <li key={ind} className="my-2">{instra}</li>
              
            })
          }
          </ol>
             </div>
    <div className="card-actions justify-start gap-4">
      <AddButton workout={data}></AddButton>
      <SavedButton workout={data}></SavedButton>
    </div>
  </div>
</div>
    );
};

export default WorkoutDetails;
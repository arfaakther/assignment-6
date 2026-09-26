import Image from 'next/image';
import React from 'react';

const WorkoutCard = ({ data }) => {
  const { image, equipment, duration, caloriesBurned,rating,muscleGroups} = data
  
    return (
      <div className="card bg-base-100 shadow-sm">
  <figure>
   <Image src={image} alt="workout image" width={500} height={100}></Image>
  </figure>
  <div className="card-body">
          <h2 className="card-title">
            <div>{muscleGroups.map((m, ind) => {
              return <div key={ind} className="badge bg-[#C2F800] text-black">{m}</div>
            })
            }
             </div>
          </h2>
          <h1 className="card-title">{data.name}</h1>
          <p>{equipment}</p>
    <div className="card-actions justify-start">
            <div><span className=''>🕐</span>{duration} min</div>
            <div className=""><span>🔥</span>{caloriesBurned} kcal</div>
            <div className=""><span>⭐</span>{rating}</div>
    </div>
  </div>
</div>
    );
};

export default WorkoutCard;
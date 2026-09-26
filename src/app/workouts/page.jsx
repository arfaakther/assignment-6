import React from 'react';
import WorkoutCard from '../components/workoutCard';
import Link from 'next/link';
import BannerPage from '../components/banner';


const getData = async () => {
    const res = await fetch('https://api.api-store.workers.dev/api/fitlog');
    const data = await res.json();
    return data;
}
const WorkoutPage = async () => {
    const workoutData = await getData();
    return (
        <div className='container mx-auto my-18'>
            <BannerPage></BannerPage>
            <div className='my-10'><h1 className='text-3xl font-semibold'>THE LIBRARY</h1>
                <p>Twelve lifts covering every major muscle group.</p></div>
            
            <div className='grid grid-cols-3 gap-6'>
                {
                    workoutData.map(data => <Link href={`/workouts/${data.id}`} key={data.id}>
  <WorkoutCard data={data} />
</Link>)
                }

            </div>
                

        </div>
    );
};

export default WorkoutPage;
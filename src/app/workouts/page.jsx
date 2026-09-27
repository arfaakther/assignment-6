
import React from 'react';
import WorkoutCard from '../components/workoutCard';
import Link from 'next/link';
import BannerPage from '../components/banner';

const getData = async () => {
    const res = await fetch('https://api.api-store.workers.dev/api/fitlog');

    if (!res.ok) {
        throw new Error('Failed to fetch workout data');
    }

    const data = await res.json();
    return data;
};

const WorkoutPage = async () => {
    const workoutData = await getData();

    return (
        <main className="min-h-screen w-full">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
<section className="pt-6 sm:pt-8 lg:pt-10">
                    <BannerPage />
                </section>
<section id="library" className="my-8 sm:my-10 lg:my-12">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
                        THE LIBRARY
                    </h1>

                    <p className="mt-2 text-sm sm:text-base">
                        Twelve lifts covering every major muscle group.
                    </p>
                </section>
<section className="pb-10 sm:pb-14 lg:pb-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                        {workoutData.map((data) => (
                            <Link
                                href={`/workouts/${data.id}`}
                                key={data.id}
                                className="block h-full"
                            >
                                <WorkoutCard data={data} />
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
};

export default WorkoutPage;


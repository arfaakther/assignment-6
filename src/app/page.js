//*** AI made page, coz I made mistake by writing workout page initScriptLoader.and now I don't have time to fix, sorry.*/ 

import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <main className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <p className="text-[#C2F800] font-semibold mb-3">
          WELCOME TO FITLOG
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Train Better. Feel Stronger.
        </h1>

        <p className="text-gray-400 text-lg mb-8">
          Discover workouts, build your daily plan, and stay consistent
          with your fitness journey.
        </p>

        <Link
          href="/workouts"
          className="inline-block bg-[#C2F800] text-black font-semibold px-6 py-3 rounded-lg hover:bg-[#d4ff33] transition"
        >
          Explore Workouts
        </Link>
      </div>
    </main>
  );
};

export default Page;


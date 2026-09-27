import React from 'react';

const LoadingPage = () => {
    return (
     <div className="min-h-screen flex items-center justify-center">
  <h1 className="flex items-center gap-2 text-xl text-[#C2F800]">
    Loading workouts…
    <span className="loading loading-spinner loading-lg"></span>
  </h1>
</div>
    );
};

export default LoadingPage;
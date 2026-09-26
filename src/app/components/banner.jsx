import React from 'react';
import Image from 'next/image';
import banner from '@/app/image/banner.png';
const BannerPage = () => {
    return (
        <div className="container mx-auto mb-18">
            <div className="h-[450px] content-center bg-[#222630] rounded-2xl max-w-[1250px] flex-col lg:flex-row-reverse justify-between mt-10">
  <div className="hero-content flex-col lg:flex-row-reverse justify-between">
    <Image src={banner} alt="FITLOG banner" width={334} height={334}></Image>
                    <div className="text-center lg:text-left">
                        <p className="text-[15px] font-semibold mb-5 text-[#C2F800]">WORKOUT LIBRARY</p>
      <h1 className="text-6xl font-bold">TRAIN WITH INTENT. LOG<br/>EVERY SET.</h1>
      <p className="py-6">
       FitLog is a dark, no-nonsense gym companion: pick a lift, lock it<br/>into today's plan, and watch the week's work add up.
      </p>
      <button className="btn bg-[#C2F800] text-black rounded-[6px] text-[12px] font-bold">BROWSE WORKOUTS</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default BannerPage;
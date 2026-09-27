
import React from 'react';
import Image from 'next/image';
import banner from '@/app/image/banner.png';

const BannerPage = () => {
    return (
        <section className="w-full mt-6 sm:mt-8 lg:mt-10 mb-8 sm:mb-10 lg:mb-12">
            <div
                className=" w-full min-h-[520px] sm:min-h-[500px] lg:min-h-[450px] bg-[#222630] rounded-xl sm:rounded-2xl overflow-hidden flex flex-col lg:flex-row-reverse items-center justify-between gap-8 lg:gap-12 px-5 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-8">
                <div className="w-full lg:w-1/2 flex justify-center">
                    <Image
                        src={banner}
                        alt="FITLOG banner"
                        width={334}
                        height={334}
                        className=" w-[220px] sm:w-[280px] lg:w-[334px] h-auto object-contain"/>
                </div>
<div className="w-full lg:w-1/2 text-center lg:text-left">

                    <p className="text-xs sm:text-sm font-semibold mb-3 sm:mb-5 text-[#C2F800]">
                        WORKOUT LIBRARY
                    </p>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">TRAIN WITH INTENT.<br className="hidden sm:block" />LOG EVERY SET.
                    </h1>

                    <p className="py-4 sm:py-5 lg:py-6 text-sm sm:text-base leading-6 max-w-xl mx-auto lg:mx-0">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.
                    </p>
<a href="#library" className="inline-block bg-[#C2F800] text-black rounded-[6px] text-xs font-bold px-5 py-3 sm:px-6 sm:py-3 hover:opacity-90 transition"> BROWSE WORKOUTS </a>
                </div>
            </div>
        </section>
    );
};

export default BannerPage;


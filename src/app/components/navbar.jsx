"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import logo from '@/app/image/logo.png';
import { usePathname } from 'next/navigation';
import { WorkoutContext } from '../context/workoutContext';

const Navbar = () => {
const { addWorkout, saveWorkout } = useContext(WorkoutContext);
    const userPath = usePathname();
    userPath === '/workouts' ? {className: "text-[#C2F800] bg-[#1A2312]"}: '';
    const link = <>
    <Link href="/workouts" className={userPath === "/workouts" ? "text-[#C2F800] bg-[#1A2312] btn btn-ghost rounded-2xl" : "btn rounded-2xl"}>Workouts</Link>
    <Link href="/my-plan" className={userPath === "/my-plan" ? "text-[#C2F800] bg-[#1A2312] btn btn-ghost rounded-2xl" : "btn rounded-2xl"}>My Plan</Link>
    </>
    return (
        <div className="navbar container mx-auto px-8 bg-base-100 shadow-sm max-h-[80px] border-b-1 border-gray-700">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {link}
      </ul>
    </div>
                <div className="flex items-center gap-2">
                    <Image src={logo} alt="FITLOG logo" width={20} height={20}></Image>

                    <h1 className="text-xl font-bold">FITLOG</h1>
                    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {link}
    </ul>
  </div>
  <div className="navbar-end">
    <Link href="/my-plan" className="btn">Plan <span className='border-1 rounded-4xl px-2 text-black bg-[#CCFF00]'>{addWorkout.length}</span></Link>
    <Link href="/my-plan" className="btn">Saved <span className='border-1 rounded-4xl px-2 border-gray-700'>{saveWorkout.length}</span></Link>
  </div>
</div>
    );
};

export default Navbar;
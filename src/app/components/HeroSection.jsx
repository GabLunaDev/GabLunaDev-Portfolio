"use client";
import React from 'react'
import { TypeAnimation } from 'react-type-animation';


const HeroSection = () => {
    return (
        <section className="flex justify-center items-center h-screen">
            <div className="col-span-7 text-center">
                <h1 className="text-white mb-0.5 text-2xl lg:text-4xl font-bold">
                    Hello, I'm
                </h1>
                <h1 className="text-white text-4xl lg:text-6xl font-extrabold">Gabriel Luna</h1>
                <p className="text-[#ADB7BE] text-lg lg:text-xl mb-3">
                    <TypeAnimation
                        sequence={['Game Developer', 1000, 'Back-End Developer', 1000, '3D Artist', 1000]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </p>
                <div className="lg:grid lg:grid-cols-2 lg:gap-5">
                    <button className="col-span-1 px-6 py-3 w-full rounded-full bg-gradient-to-br from-blue-500 via-purple-700 to-pink-500 hover:bg-slate-200 text-white mt-3">
                        Hire Me
                    </button>
                    <button className="col-span-1 px-1 py-1 w-full rounded-full bg-gradient-to-br from-blue-500 via-purple-700 to-pink-500 hover:bg-slate-800 text-white mt-3">
                        <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-6 py-3">
                            Download CV
                        </span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
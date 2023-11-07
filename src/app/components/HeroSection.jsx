"use client";
import Link from "next/link";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="flex justify-center items-center h-screen bg-[url('/assets/bg.gif')] bg-cover bg-center"
    >
      <div className="w-full h-screen backdrop-blur-sm backdrop-brightness-50 flex flex-col justify-center items-center">
        <div className="text-center">
          <h1 className="text-transparent mb-1 text-2xl lg:text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-700 to-pink-500 bg-clip-text">
            {"Hello, I'm"}
          </h1>
          <h1 className="text-white text-4xl lg:text-6xl font-extrabold mb-1">
            Gabriel Luna
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-3">
            <TypeAnimation
              sequence={[
                "Game Developer",
                1500,
                "Generalist Game Programmer",
                1500,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </p>
          <div className="flex justify-center mt-5 space-x-3">
            <Link
              href="#contact"
              className="flex items-center justify-center font-bold overflow-hidden group rounded-md transition ease hover:scale-[1.02]"
            >
              <button
                type="button"
                class="text-white bg-gradient-to-br transition ease from-blue-500 via-purple-700 to-pink-500 font-medium rounded-lg text-sm px-5 py-3 text-center"
              >
                Hire Me
              </button>
            </Link>
            <Link
              href="assets/Gabriel_Luna_CV.pdf"
              target="_blank"
              className="flex items-center justify-center font-bold overflow-hidden group rounded-md transition ease hover:scale-[1.02]"
            >
              <button class="relative inline-flex items-center transition ease justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-500 via-purple-700 to-pink-500 hover:text-white dark:text-white">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-[#181818] rounded-md group-hover:bg-opacity-0">
                  Donwload CV
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

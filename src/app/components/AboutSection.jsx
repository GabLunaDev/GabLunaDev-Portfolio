"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import {
  AiOutlineInstagram,
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import TabButton from "./TabButton";

const description = (
  <div className="flex flex-col justify-center gap-8 items-center px-4 lg:grid lg:grid-cols-2 xl:gap-16 xl:py-16 xl:px-16">
    <div className="rounded-full bg-gradient-to-br from-blue-500 via-purple-700 to-pink-500 border-8 border-[#181818] w-[275px] h-[275px] md:w-[300px] md:h-[300px] lg:mb-0 lg:w-[375px] lg:h-[375px] xl:w-[500px] xl:h-[500px] lg:relative">
      <Image
        src="/assets/me.png"
        alt="Gabriel Luna"
        className="lg:absolute rounded-full lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:top-1/2 lg:left-1/2"
        width={500}
        height={500}
      />
    </div>
    <div>
      <h1 className="font-extrabold text-center lg:text-left text-4xl lg:text-5xl xl:text-6xl pb-1 text-[#444444]">
        DESCRIPTION
      </h1>
      <div className="pb-2 text-purple-500">
        <div className="bg-[#181818] h-full flex items-center justify-center rounded-xl py-1">
          <FaMapMarkerAlt className="" />
          <p className="px-2 text-center text-xs sm:text-sm xl:text-base">
            Based on Recife, PE - Brasil
          </p>
        </div>
      </div>
      <p className="leading-snug text-justify lg:text-left text-xs sm:text-sm xl:text-base">
        In the vibrant world of game development, creativity knows no bounds.
        Every pixel, line of code, and musical note collaborates to craft
        immersive experiences that transcend reality. Game development is an
        intricate dance between artistry and technology, where passionate
        visionaries blend graphic design, narrative expertise, and programming
        prowess. From indie studios to gaming giants, developers harness
        cutting-edge engines and sophisticated tools to sculpt breathtaking
        landscapes, dynamic characters, and heart-pounding gameplay.
        Collaboration thrives as diverse teams merge talents, shaping worlds
        ranging from fantasy realms to futuristic galaxies.
      </p>
      <h2 className="pt-7 font-semibold text-purple-500">Socials:</h2>
      <div className="flex justify-left gap-4 py-1">
        <a
          href="https://www.linkedin.com/in/gabluna/"
          target="_blank"
          className="hover:text-purple-500 transition-colors delay-75"
        >
          <AiFillLinkedin style={{ fontSize: "25px" }} />
        </a>
        <a
          href="https://github.com/GabLunaDev"
          target="_blank"
          className="hover:text-purple-500 transition-colors delay-75"
        >
          <AiFillGithub style={{ fontSize: "25px" }} />
        </a>
        <a
          href="https://twitter.com/gabfromthemoon"
          target="_blank"
          className="hover:text-purple-500 transition-colors delay-75"
        >
          <AiFillTwitterCircle style={{ fontSize: "25px" }} />
        </a>
        <a
          href="https://www.instagram.com/gablunadev/"
          target="_blank"
          className="hover:text-purple-500 transition-colors delay-75"
        >
          <AiOutlineInstagram style={{ fontSize: "25px" }} />
        </a>
        <a
          href="https://www.youtube.com/@GabLuna"
          target="_blank"
          className="hover:text-purple-500 transition-colors delay-75"
        >
          <AiFillYoutube style={{ fontSize: "25px" }} />
        </a>
      </div>
    </div>
  </div>
);

const university = (
  <div className="flex flex-col justify-center gap-8 items-center px-4 lg:grid lg:grid-cols-2 xl:gap-16 xl:py-16 xl:px-16">
    <div className="rounded-full bg-gradient-to-br from-blue-500 via-purple-700 to-pink-500 border-8 border-[#181818] w-[275px] h-[275px] md:w-[300px] md:h-[300px] lg:mb-0 lg:w-[375px] lg:h-[375px] xl:w-[500px] xl:h-[500px] lg:relative">
        <Image
          src="/assets/bg-04.gif"
          alt="Gabriel Luna"
          className="lg:absolute rounded-full lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:top-1/2 lg:left-1/2"
          width={500}
          height={500}
        />
    </div>
    <div>
      <h1 className="font-extrabold text-center lg:text-left text-4xl lg:text-5xl xl:text-6xl pb-1 text-[#444444]">
        UNIVERSITY
      </h1>
      <div class="">
        <div className="flex flex-col lg:flex-row  items-center">
          <div className="border-[2px] hidden lg:block border-[#222222] mr-3 rounded-lg py-1 px-1">
            <Image
              src="/assets/unicap-logo.png"
              alt="Unicap Logo"
              width={60}
              height={60}
              className="transform"
            />
          </div>
          <div>
            <h1 className="text-lg sm:text-xl lg:text-2xl text-center lg:text-left font-extrabold text-purple-500">
              Computer Science
            </h1>
            <h1 className="text-sm sm:text-base lg:text-lg text-center lg:text-left">
              Universidade Católica de Pernambuco - UNICAP
            </h1>
            <h3 className="text-xs sm:text-sm lg:text-base text-center lg:text-left font-semibold text-[#444444]">
              2022-Current
            </h3>
          </div>
        </div>
        <p className="leading-snug text-justify pt-2 lg:text-left text-xs sm:text-sm xl:text-base">
          In the vibrant world of game development, creativity knows no bounds.
          Every pixel, line of code, and musical note collaborates to craft
          immersive experiences that transcend reality. Game development is an
          intricate dance between artistry and technology, where passionate
          visionaries blend graphic design, narrative expertise, and programming
          prowess. From indie studios to gaming giants, developers harness
          cutting-edge engines and sophisticated tools to sculpt breathtaking
          landscapes, dynamic characters, and heart-pounding gameplay.
          Collaboration thrives as diverse teams merge talents, shaping worlds
          ranging from fantasy realms to futuristic galaxies.
        </p>
      </div>
    </div>
  </div>
);

const courses = (
  <div className="flex flex-col justify-center gap-8 items-center px-4 lg:grid lg:grid-cols-2 xl:gap-16 xl:py-16 xl:px-16">
    <div className="rounded-full bg-gradient-to-br from-blue-500 via-purple-700 to-pink-500 border-8 border-[#181818] w-[275px] h-[275px] md:w-[300px] md:h-[300px] lg:mb-0 lg:w-[375px] lg:h-[375px] xl:w-[500px] xl:h-[500px] relative">
      <Image
        src="/assets/bg-09.gif"
        alt="Typing Gif"
        className="lg:absolute rounded-full lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:top-1/2 lg:left-1/2"
        width={500}
        height={500}
      />
    </div>
    <div>
      <h1 className="font-extrabold text-center lg:text-left text-4xl lg:text-5xl xl:text-6xl pb-1 text-[#444444]">COURSES</h1>
      <ul className="space-y-4">
        <li>
          <div className="bg-[#181818] py-2 px-4 rounded-lg">
            <h1 className="text-base sm:text-lg lg:text-xl font-extrabold text-purple-500">
              Complete C# Unity Game Developer 2D
            </h1>
            <h1 className="text-xs sm:text-sm lg:text-base">GameDev.tv Team</h1>
          </div>
        </li>
        <li>
          <div className="bg-[#181818] py-2 px-4 rounded-lg">
            <h1 className="text-base sm:text-lg lg:text-xl font-extrabold text-purple-500">
              Unreal Engine 5 C++ Developer
            </h1>
            <h1 className="text-xs sm:text-sm lg:text-base">GameDev.tv Team</h1>
          </div>
        </li>
      </ul>
    </div>
  </div>
);

const AboutSection = () => {
  const [tab, setTab] = useState("description");
  const [isPending, startTransition] = useTransition();
  const [currentTab, setCurrentTab] = useState(description);

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);

      if (id === "description") {
        setCurrentTab(description);
      } else if (id === "university") {
        setCurrentTab(university);
      } else if (id === "courses") {
        setCurrentTab(courses);
      }
    });
  };

  return (
    <section id="about" className="text-white">
      <div className="flex flex-col justify-center items-center pt-9">
        <p className="text-sm lg:text-base text-purple-500">Nice To Meet You!</p>
        <h2 className="text-2xl lg:text-3xl font-extrabold">About Me</h2>
      </div>
      <div className="flex flex-row justify-center gap-4 py-4">
        <TabButton
          selectTab={() => handleTabChange("description")}
          active={tab === "description"}
        >
          Description
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("university")}
          active={tab === "university"}
        >
          University
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("courses")}
          active={tab === "courses"}
        >
          Courses
        </TabButton>
      </div>
      {currentTab}
    </section>
  );
};

export default AboutSection;

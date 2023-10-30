"use client"
import React, { useState, useTransition } from 'react'
import { BiLogoTypescript, BiLogoNodejs, BiLogoPostgresql, BiLogoMongodb, BiLogoJava } from 'react-icons/bi';
import { DiLinux } from 'react-icons/di'
import { SiNestjs, SiGodotengine, SiCsharp, SiCplusplus, SiOpengl, SiUnrealengine } from 'react-icons/si'
import { FaRust } from 'react-icons/fa';
import TabButton from "./TabButton"

const technologiesBackEnd = [
  { icon: <BiLogoTypescript style={{ fontSize: '70px', color: '#1976D2' }} />, name: 'TypeScript', tag: '' },
  { icon: <BiLogoNodejs style={{ fontSize: '70px', color: '#6cc24a' }} />, name: 'Node.js', tag: '' },
  { icon: <DiLinux style={{ fontSize: '70px', color: '#FFBF00' }} />, name: 'Linux', tag: '' },
  { icon: <SiNestjs style={{ fontSize: '70px', color: '#DE3163' }} />, name: 'Nest.js', tag: '' },
  { icon: <BiLogoPostgresql style={{ fontSize: '70px', color: '#0070BB' }} />, name: 'PostgreSql',tag: '' },
  { icon: <BiLogoMongodb style={{ fontSize: '70px', color: '#0BDA51' }} />, name: 'MongoDB', tag: '#learning' },
  { icon: <BiLogoJava style={{ fontSize: '70px', color: '#960018' }} />, name: 'Java', tag: '' },
  { icon: <FaRust style={{ fontSize: '70px', color: 'white' }} />, name: 'Rust', tag: '#learning' },
];

const technologiesGames = [
  { icon: <SiGodotengine style={{ fontSize: '70px', color: 'white' }} />, name: 'Godot Engine', tag: '#learning' },
  { icon: <SiUnrealengine style={{ fontSize: '70px', color: 'white' }} />, name: 'Unreal Engine', tag: '#learning' },
  { icon: <SiCsharp style={{ fontSize: '70px', color: 'white' }} />, name: 'C#', tag: '#learning' },
  { icon: <SiCplusplus style={{ fontSize: '70px', color: 'white' }} />, name: 'C++', tag: '#learning' },
];

const TechnologiesSection = () => {
  const [tab, setTab] = useState("game-development");
  const [isPending, startTransition] = useTransition();
  const [currentTechnologies, setCurrentTechnologies] = useState(technologiesGames);


  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id)
      
      if (id === "game-development") {
        setCurrentTechnologies(technologiesGames);
      } else if (id === "backend-development") {
        setCurrentTechnologies(technologiesBackEnd);
      }
    })
  }

  return (
    <section id="technologies">
      <div className='flex flex-col justify-center items-center py-9'>
        <p className='text-base text-purple-500'>Which Technologies I Work With</p>
        <h2 className='text-3xl font-extrabold'>Technologies</h2>
      </div>
      <div className='flex flex-row justify-center gap-4'>
        <TabButton selectTab={() => handleTabChange("game-development")} active={tab === "game-development"}>
          Games
        </TabButton>
        <TabButton selectTab={() => handleTabChange("backend-development")} active={tab === "backend-development"}>
          Back-End
        </TabButton>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-9">
        {currentTechnologies.map((tech, index) => (
          <article key={index} className="flex flex-col items-center justify-center p-8 relative border-[2px] border-transparent rounded-lg text-center transition-color transition-transform bg-purple-900 hover:bg-transparent hover:border-purple-800 hover:scale-[1.01]">
            <div className={`mx-auto mb-1 text-4xl relative z-10`}>
              {tech.icon}
            </div>
            <h5 className="text-white text-sm pb-4 z-10 relative">{tech.name}</h5>
            <p className='text-xs border-purple-950 rounded-full px-2 text-black bg-white font-bold relative z-10'>
              {tech.tag}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TechnologiesSection
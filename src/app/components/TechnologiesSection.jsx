"use client"
import React, { useState, useTransition } from 'react'
import TabButton from "./TabButton"


const TechnologiesSection = () => {
  const [tab, setTab] = useState("game-development");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
      startTransition(()=>{
          setTab(id);
      })
  }
  
  return (
    <section>
      <div className='flex flex-col justify-center items-center py-9'>
        <p className='text-base text-purple-500'>Which Technologies I Work With</p>
        <h2 className='text-3xl font-extrabold'>Technologies</h2>
      </div>
      <div className='flex flex-row justify-center'>
        <TabButton selectTab={() => handleTabChange("game-development")} active={tab === "game-development"}>
          Games
        </TabButton>
        <TabButton selectTab={() => handleTabChange("backend-development")} active={tab === "backend-development"}>
          Back-End
        </TabButton>
      </div>
    </section>
  )
}

export default TechnologiesSection
"use client"
import React, { useState, useTransition } from 'react'
import Image from "next/image"
import TabButton from "./TabButton"

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(()=>{
            setTab(id);
        })
    }

    return (
        <section id="about" className='text-white'>
            <div className='lg:grid lg:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 xl:py-16 xl:px-16'>
                <div className="rounded-full bg-gradient-to-br from-blue-500 via-purple-700 to-pink-500 border-8 border-[#181818] mb-9 w-[300px] h-[300px] lg:mb-0 lg:w-[375px] lg:h-[375px] xl:w-[500px] xl:h-[500px] relative">
                    <Image
                        src="/assets/me.png"
                        alt="Gabriel Luna"
                        className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width={500}
                        height={500}
                    />
                </div>
                <div>
                    <h1 className='text-3xl font-extrabold mb-5'>About Me</h1>
                    <p>
                        In the vibrant world of game development, creativity knows no bounds.
                        Every pixel, line of code, and musical note collaborates to craft immersive experiences that transcend reality.
                        Game development is an intricate dance between artistry and technology, where passionate visionaries blend graphic design, narrative expertise, and programming prowess.
                        From indie studios to gaming giants, developers harness cutting-edge engines and sophisticated tools to sculpt breathtaking landscapes, dynamic characters, and heart-pounding gameplay.
                        Collaboration thrives as diverse teams merge talents, shaping worlds ranging from fantasy realms to futuristic galaxies.
                    </p>
                    {/* <div className='flex flex-row justify-center mt-8 '>
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
                            {" "}
                            Education{" "}
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}>
                            {" "}
                            Experience{" "}
                        </TabButton>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default AboutSection
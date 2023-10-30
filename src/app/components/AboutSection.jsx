"use client"
import React, { useState, useTransition } from 'react'
import Image from "next/image"
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { AiOutlineFolderOpen } from 'react-icons/ai'

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    }

    return (
        <section id="about" className='text-white'>
            <div className='flex flex-col justify-center items-center py-9'>
                <p className='text-base text-purple-500'>A Brief Description Of Me</p>
                <h2 className='text-3xl font-extrabold'>About Me</h2>
            </div>
            <div className='lg:grid lg:grid-cols-2 gap-8 items-center px-4 xl:gap-16 xl:py-16 xl:px-16'>
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
                    <div className="grid grid-cols-3 py-9 gap-4">
                        <article className='flex flex-col items-center justify-center text-center border border-purple-500 bg-purple-700 rounded-xl p-5 hover:bg-transparent transition ease-in-out delay-150'>
                            <FaAward />
                            <h5>Experience</h5>
                            <small>1+ Years Working</small>
                        </article>
                        <article className='flex flex-col items-center justify-center text-center border border-purple-500 bg-purple-700 rounded-xl p-5 hover:bg-transparent transition ease-in-out delay-150'>

                            <FiUsers />
                            <h5>Clients</h5>
                            <small>50+ Brazil</small>
                        </article>
                        <article className='flex flex-col items-center justify-center text-center border border-purple-500 bg-purple-700 rounded-xl p-5 hover:bg-transparent transition ease-in-out delay-150'>
                            <AiOutlineFolderOpen />
                            <h5>Projects</h5>
                            <small>1+ Years Working</small>
                        </article>
                    </div>
                    <p>
                        In the vibrant world of game development, creativity knows no bounds.
                        Every pixel, line of code, and musical note collaborates to craft immersive experiences that transcend reality.
                        Game development is an intricate dance between artistry and technology, where passionate visionaries blend graphic design, narrative expertise, and programming prowess.
                        From indie studios to gaming giants, developers harness cutting-edge engines and sophisticated tools to sculpt breathtaking landscapes, dynamic characters, and heart-pounding gameplay.
                        Collaboration thrives as diverse teams merge talents, shaping worlds ranging from fantasy realms to futuristic galaxies.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
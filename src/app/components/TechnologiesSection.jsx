"use client";
import React, { useState, useTransition } from "react";
import { VscTerminalLinux } from "react-icons/vsc";
import { BsGit } from "react-icons/bs";
import {
  SiGodotengine,
  SiCsharp,
  SiCplusplus,
  SiUnity,
  SiBlender,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiAseprite,
  SiAffinityphoto,
} from "react-icons/si";
import TabButton from "./TabButton";

const gamesTechnologies = [
  {
    icon: <SiCplusplus style={{ fontSize: "70px", color: "white" }} />,
    name: "C++",
    tag: "",
  },
  {
    icon: <SiGodotengine style={{ fontSize: "70px", color: "white" }} />,
    name: "Godot",
    tag: "",
  },
  {
    icon: <BsGit style={{ fontSize: "70px", color: "white" }} />,
    name: "Git",
    tag: "",
  },
  {
    icon: <SiCsharp style={{ fontSize: "70px", color: "white" }} />,
    name: "C#",
    tag: "",
  },
  {
    icon: <SiUnity style={{ fontSize: "70px", color: "white" }} />,
    name: "Unity",
    tag: "",
  },
  {
    icon: <VscTerminalLinux style={{ fontSize: "70px", color: "white" }} />,
    name: "Linux",
    tag: "",
  },
];

const others = [
  {
    icon: <SiBlender style={{ fontSize: "70px", color: "white" }} />,
    name: "Blender",
    tag: "",
  },
  {
    icon: <SiAseprite style={{ fontSize: "70px", color: "white" }} />,
    name: "Aseprite",
    tag: "",
  },
  {
    icon: <SiAffinityphoto style={{ fontSize: "70px", color: "white" }} />,
    name: "Affinity Photo",
    tag: "",
  },
  {
    icon: <SiAdobeaftereffects style={{ fontSize: "70px", color: "white" }} />,
    name: "After Effects",
    tag: "",
  },
  {
    icon: <SiAdobephotoshop style={{ fontSize: "70px", color: "white" }} />,
    name: "Photoshop",
    tag: "",
  },
  {
    icon: <SiAdobepremierepro style={{ fontSize: "70px", color: "white" }} />,
    name: "Premiere",
    tag: "",
  },
];

const TechnologiesSection = () => {
  const [tab, setTab] = useState("games");
  const [isPending, startTransition] = useTransition();
  const [currentTechnologies, setCurrentTechnologies] =
    useState(gamesTechnologies);

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);

      if (id === "games") {
        setCurrentTechnologies(gamesTechnologies);
      } else if (id === "others") {
        setCurrentTechnologies(others);
      }
    });
  };

  return (
    <section id="technologies">
      <div className="flex flex-col justify-center items-center py-9">
        <p className="text-base text-purple-500">
          Which Technologies I Work With
        </p>
        <h2 className="text-3xl font-extrabold">Technologies</h2>
      </div>
      <div className="flex flex-row justify-center gap-4">
        <TabButton
          selectTab={() => handleTabChange("games")}
          active={tab === "games"}
        >
          Programming
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("others")}
          active={tab === "others"}
        >
          Others
        </TabButton>
      </div>
      <div className={`grid grid-cols-2 md:grid-cols-3 gap-6 py-9`}>
        {currentTechnologies.map((tech, index) => (
          <article
            key={index}
            className="flex flex-col items-center justify-center p-8 relative border-[2px] border-slate-900 rounded-lg text-center transition-color transition-transform bg-gradient-to-tr from-blue-500 via-purple-700 to-pink-500 hover:bg-none hover:border-purple-800 hover:scale-[1.01] ease"
          >
            <div className={`mx-auto mb-1 text-4xl relative z-10`}>
              {tech.icon}
            </div>
            <h5 className="text-white text-sm pb-4 z-10 relative">
              {tech.name}
            </h5>
            <p className="text-xs border-purple-950 rounded-full px-2 text-black bg-white font-bold relative z-10">
              {tech.tag}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesSection;

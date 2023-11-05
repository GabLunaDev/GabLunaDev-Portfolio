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
          <a
            key={index}
            className="flex flex-col relative items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group transition ease hover:scale-[1.02]"
          >
            <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-purple-700 rounded-full blur-2xl ease"></span>
            <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
              <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-blue-500 rounded-full blur-3xl"></span>
              <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-3xl"></span>
            </span>
            <div className={`mx-auto mb-1 text-4xl relative`}>
              {tech.icon}
            </div>
            <h5 className="text-white text-sm pb-4 relative">
              {tech.name}
            </h5>
            <p className="text-xs border-purple-950 rounded-full px-2 text-black bg-white font-bold relative z-10">
              {tech.tag}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesSection;

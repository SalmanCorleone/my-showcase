"use client";
import { useState } from "react";
import { experienceData } from "./const";
import { motion } from "motion/react";
import theme from "@/utils/theme";
import TechBadge from "@/components/TechBadge";

const Experience = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  return (
    <div className="flex mx-6 md:mx-10 bg-amber-50">
      {/* Left side */}
      <div className="flex flex-col w-[30vw]">
        {experienceData.map((item, idx) => (
          <button key={idx} className="flex flex-col justify-center px-4 cursor-pointer h-24" onClick={() => setSelectedIdx(idx)}>
            <h2 className="text-xl text-right" style={{ opacity: idx === selectedIdx ? 1 : 0.3 }}>
              {item.title}
            </h2>
            <p className="text-sm text-right" style={{ opacity: idx === selectedIdx ? 1 : 0.3 }}>
              {item.location}
            </p>
          </button>
        ))}
      </div>

      {/* Middle part */}
      <div className="w-8 relative">
        <div className="absolute h-[calc(100%-96px)] top-12 left-[50%] border-l border-solid rounded-full" style={{ borderColor: theme.palette.lightGrey }} />
        {experienceData.map((_, idx) => (
          <div key={"dot_" + idx} className="h-24 flex items-center justify-center">
            <div className="w-3 h-3 rounded-2xl z-10" style={{ backgroundColor: idx === selectedIdx ? theme.palette.orange : theme.palette.lightGrey }} />
          </div>
        ))}
      </div>

      {/* Right side */}
      <motion.div className="flex flex-1 flex-col p-4 bg-amber-50">
        <h2 className="text-xl">{experienceData[selectedIdx].position}</h2>
        <p>{experienceData[selectedIdx].duration}</p>

        <div className="pt-4">
          <div className="flex gap-2 items-center">
            {experienceData[selectedIdx].techStack.map((techStack) => (
              <TechBadge key={experienceData[selectedIdx].title + " " + techStack.name} name={techStack.name} icon={techStack.icon} />
            ))}
          </div>

          <div className="pt-4">
            {experienceData[selectedIdx].description.map((desc) => (
              <p key={desc} className="py-2">
                {desc}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;

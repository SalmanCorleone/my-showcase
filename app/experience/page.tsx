'use client';
import { useEffect, useState } from 'react';
import { experienceData } from './const';
import { motion, useAnimate } from 'motion/react';
import theme from '@/utils/theme';
import TechBadge from '@/components/TechBadge';
import animationVariants from '@/utils/animationVariants';
import { cubicBezier } from 'motion';
import { RiArrowRightUpLine } from 'react-icons/ri';

const Experience = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [descriptionContainerRef, animateDescriptionContainer] = useAnimate();

  useEffect(() => {
    animateDescriptionContainer(
      descriptionContainerRef.current,
      {
        opacity: [0, 1],
        y: [5, 0],
      },
      {
        duration: 0.3,
        ease: cubicBezier(0.76, 0, 0.24, 1),
      },
    );
  }, [animateDescriptionContainer, descriptionContainerRef, selectedIdx]);

  return (
    <div className="flex mx-6 md:mx-10 bg-amber-50">
      {/* Left side */}
      <div className="flex flex-col w-[30vw]">
        {experienceData.map((item, idx) => (
          <motion.button
            whileHover={{ opacity: 1 }}
            animate={{ opacity: selectedIdx === idx ? 1 : 0.3 }}
            key={idx}
            className="flex flex-col justify-center px-4 cursor-pointer h-24"
            onClick={() => setSelectedIdx(idx)}
          >
            <h2 className="text-xl text-right">{item.title}</h2>
            <p className="text-sm text-right">{item.location}</p>
          </motion.button>
        ))}
      </div>

      {/* Middle part */}
      <div className="w-8 relative">
        <div
          className="absolute h-[calc(100%-96px)] top-12 left-[50%] border-l border-solid rounded-full"
          style={{ borderColor: theme.palette.lightGrey }}
        />
        {experienceData.map((_, idx) => (
          <div key={'dot_' + idx} className="h-24 flex items-center justify-center relative">
            <motion.div
              className="absolute w-3 h-3 rounded-2xl"
              style={{ backgroundColor: theme.palette.orange }}
              variants={animationVariants.pulse}
              animate={idx === selectedIdx ? 'pulse' : undefined}
            />
            <motion.div
              initial={{ backgroundColor: theme.palette.lightGrey }}
              animate={{
                backgroundColor: idx === selectedIdx ? theme.palette.orange : theme.palette.lightGrey,
              }}
              className="w-3 h-3 rounded-2xl z-10"
            />
          </div>
        ))}
      </div>

      {/* Right side */}
      <motion.div ref={descriptionContainerRef} className="flex flex-1 flex-col px-4 py-5 bg-amber-50 opacity-0">
        <div className="flex">
          <div>
            <h2 className="text-xl">{experienceData[selectedIdx].position}</h2>
            <p className="text-sm">{experienceData[selectedIdx].duration}</p>
          </div>
          {!!experienceData[selectedIdx].url && (
            <div className="flex-1 pl-2 pt-1 flex justify-start">
              <a href={experienceData[selectedIdx].url} target="_blank" rel="noreferrer">
                <motion.div initial={{ x: 0, y: 0 }} whileHover={{ x: 2, y: -2 }}>
                  <RiArrowRightUpLine className="text-xl text-blue-400" />
                </motion.div>
              </a>
            </div>
          )}
        </div>

        <div className="pt-4">
          <div className="flex gap-2 items-center">
            {experienceData[selectedIdx].techStack.map((techStack) => (
              <TechBadge
                key={experienceData[selectedIdx].title + ' ' + techStack.name}
                name={techStack.name}
                icon={techStack.icon}
              />
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

'use client';
import theme from '@/utils/theme';
import { experienceData } from './const';
import { motion } from 'motion/react';
import animationVariants from '@/utils/animationVariants';
import { useCallback, useEffect, useRef, useState } from 'react';
import { RiArrowRightUpLine } from 'react-icons/ri';
import TechBadge from '@/components/TechBadge';

const Mobile = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const dotsRefArray = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSelectedIdx(+(entry.target?.getAttribute('data-index') ?? 0));
          }
        });
      },
      { threshold: 0.3 },
    );
    dotsRefArray.current?.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const setRef = useCallback((el: HTMLDivElement | null, index: number) => {
    if (el) dotsRefArray.current[index] = el;
  }, []);

  return (
    <div className="flex md:hidden gap-4 p-4">
      <div className="flex flex-col md:w-[30vw] w-full">
        {experienceData.map((item, idx) => (
          <div key={`exp_${idx}`} className="flex gap-4" ref={(el) => setRef(el, idx)} data-index={idx}>
            {/* dots */}
            <div className="flex w-4 justify-center relative">
              <div className="absolute w-4 h-full flex flex-col items-center">
                <div className="border-l border-gray-300 h-5" style={{ opacity: idx === 0 ? 0 : 1 }} />
                <div
                  className="border-l border-gray-300 flex-1"
                  style={{ opacity: idx === experienceData.length - 1 ? 0 : 1 }}
                />
              </div>
              <motion.div
                className="absolute w-3 h-3 rounded-2xl mt-4"
                style={{ backgroundColor: theme.palette.orange }}
                variants={animationVariants.pulse}
                animate={idx === selectedIdx ? 'pulse' : 'goBack'}
              />
              <motion.div
                initial={{ backgroundColor: theme.palette.lightGrey }}
                animate={{
                  backgroundColor: theme.palette.orange,
                }}
                className="w-3 h-3 rounded-2xl z-10 mt-4"
              />
            </div>

            {/* content */}
            <div className="flex-1">
              <motion.div className="flex flex-col justify-center cursor-pointer">
                <h2 className="text-xl text-left">{item.title}</h2>
                <p className="text-sm text-left">{item.location}</p>
              </motion.div>

              <div className="flex flex-col py-5 bg-amber-50">
                <div className="flex">
                  <div>
                    <p>{item.position}</p>
                    <p className="text-sm">{item.duration}</p>
                  </div>
                  {!!item.url && (
                    <div className="flex-1 pl-2 pt-1 flex justify-start">
                      <a href={item.url} target="_blank" rel="noreferrer">
                        <RiArrowRightUpLine className="text-xl text-blue-400" />
                      </a>
                    </div>
                  )}
                </div>

                {/* Tools */}
                <div className="pt-4">
                  <div className="flex gap-2 items-center pt-4 flex-wrap">
                    {item.techStack.map((techStack) => (
                      <TechBadge key={item.title + ' ' + techStack.name} name={techStack.name} icon={techStack.icon} />
                    ))}
                  </div>

                  <div className="py-4">
                    {item.description.map((desc) => (
                      <p key={desc} className="py-2 text-gray-700 text-sm">
                        {desc}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mobile;

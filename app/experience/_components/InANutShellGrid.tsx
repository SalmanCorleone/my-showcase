'use client';

import theme from '@/utils/theme';
import {
  RiBuilding3Line,
  RiDownloadLine,
  RiHammerLine,
  RiMapPin2Line,
  RiTimer2Line,
  RiToolsLine,
} from 'react-icons/ri';

import BounceButton from '@/components/bounceButton';
import CircleIcon from '@/components/circleIcon';
import { techs, thingsIMake, tools } from './../const';
import IconWithText from './IconWithText';

export const InANutShellGrid = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-1 gap-4 lg:gap-6">
      {/* 1. Years of experience */}
      <div className="col-span-1 row-span-1 gridBox">
        <CircleIcon icon={<RiTimer2Line />} bg={theme.palette.blue} />
        <p className="text-xl">6 Years of Experience</p>

        <div className="flex flex-col items-center justify-center">
          <a href="/files/samil_salman_resume.pdf" download="samil_salman_resume.pdf">
            <BounceButton bg={theme.palette.blue}>
              <div className="flex items-center justify-center gap-2">
                <span className="text-xs">Resume</span>
                <RiDownloadLine size={16} />
              </div>
            </BounceButton>
          </a>
        </div>
      </div>

      {/* 5. Techs */}
      <div className="col-span-1 row-span-2 gridBox">
        <CircleIcon icon={<RiToolsLine />} bg={theme.palette.yellow} />
        <p className="text-xl">Techs I&apos;m handy with</p>
        <div className="flex flex-wrap justify-center gap-4 mx-6">
          {techs.map((tech) => (
            <IconWithText key={tech.name} icon={tech.icon} text={tech.name} />
          ))}
        </div>
      </div>

      {/* 2. Things I make */}
      <div className="col-span-1 row-span-1 gridBox">
        <CircleIcon icon={<RiBuilding3Line />} bg={theme.palette.maroon} />
        <p className="text-xl">Things I make</p>
        <div className="flex flex-wrap justify-center gap-4 mx-4 lg:mx-6">
          {thingsIMake.map((thing) => (
            <IconWithText key={thing.name} icon={thing.icon} text={thing.name} iconColor={theme.palette.maroon} />
          ))}
        </div>
      </div>

      {/* 4. Location */}
      <div className="col-span-1 row-span-1 gridBox">
        <CircleIcon icon={<RiMapPin2Line />} bg={theme.palette.orange} />
        <p>Currently based in</p>
        <p className="text-xl">Dhaka, Bangladesh 🇧🇩</p>
      </div>

      {/* 5. Tools */}
      <div className="col-span-1 row-span-1 gridBox">
        <CircleIcon icon={<RiHammerLine />} bg={theme.palette.green} />
        <p className="text-xl">Tools I love</p>
        <div className="flex flex-wrap justify-center gap-4 mx-6">
          {tools.map((tool) => (
            <IconWithText key={tool.name} icon={tool.icon} text={tool.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

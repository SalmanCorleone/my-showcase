'use client';
import theme from '@/utils/theme';
import { RiBuilding3Line, RiHammerLine, RiMapPin2Line, RiTimer2Line, RiToolsLine } from 'react-icons/ri';
import CircleIcon from './_components/CircleIcon';

import ReactLenis from 'lenis/react';
import IconWithText from './_components/IconWithText';
import JobHistoryDesktopView from './_components/JobHistoryDesktopView';
import JobHistoryMobileView from './_components/JobHistoryMobileView';
import { techs, thingsIMake, tools } from './const';

const Experience = () => {
  return (
    <ReactLenis root>
      <div className="py-4 lg:py-8">
        <section className="px-4 lg:px-12">
          <h2 className="text-6xl py-20 text-center">In a nutshell</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-1 gap-4 lg:gap-6">
            {/* 1. Years of experience */}
            <div className="col-span-1 row-span-1 gridBox">
              <CircleIcon icon={<RiTimer2Line />} bg={theme.palette.pink} />
              <p className="text-xl">6 Years of Experience</p>
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

            {/* 3. Industries */}
            {/* <div className="col-span-1 row-span-2 gridBox">
            <CircleIcon icon={<RiMacLine />} bg={theme.palette.lime} />
            <p className="text-xl">Industries I&apos;ve worked in</p>
            <div className="flex flex-wrap justify-center gap-4 mx-4 lg:mx-6">
              {industries.map((industry) => (
                <IconWithText
                  key={industry.name}
                  icon={industry.icon}
                  text={industry.name}
                  iconColor={theme.palette.lime}
                />
              ))}
            </div>
          </div> */}

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

            {/* 5. Available */}
            {/* <div className="col-span-1 row-span-1 gridBox">
            <CircleIcon icon={<RiEmotion2Line />} bg={theme.palette.lightBlue} />
            <p className="text-xl">Let&apos;s have chat!</p>
            <div className="flex gap-4">
              <BounceButton bg={theme.palette.lime}>Ping me</BounceButton>
              <BounceButton>Book a call</BounceButton>
            </div>
          </div> */}
          </div>
        </section>

        <section className="px-4 lg:px-12 pt-4 lg:pt-6">
          <h2 className="text-6xl py-20 text-center">Job Experience</h2>
          <JobHistoryDesktopView />
          <JobHistoryMobileView />
        </section>

        {/* <section className="px-4 lg:px-12 pt-4 lg:pt-6">
          <h2 className="text-6xl py-20 text-center">Let&apos;s have a chat!</h2>
          <div className="flex flex-col lg:flex-row justify-center gap-4 lg:gap-6 py-4">
            <BounceButton bg={theme.palette.lime}>Ping me</BounceButton>
            <BounceButton>Book a call</BounceButton>
            <BounceButton
              bg={theme.palette.lime}
              onClick={() => window.open('/files/samil_salman_resume.pdf', '_blank')}
            >
              <div className="flex items-center justify-center gap-2">
                <RiDownloadLine />
                <p>Download resume as .pdf</p>
              </div>
            </BounceButton>
          </div>
        </section> */}
      </div>
    </ReactLenis>
  );
};

export default Experience;

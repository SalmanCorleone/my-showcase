'use client';
import theme from '@/utils/theme';
import { RiBuilding3Line, RiHammerLine, RiMapPin2Line, RiTimer2Line, RiToolsLine } from 'react-icons/ri';

import IconWithText from './_components/IconWithText';
import JobHistoryDesktopView from './_components/JobHistoryDesktopView';
import JobHistoryMobileView from './_components/JobHistoryMobileView';
import { techs, thingsIMake, tools } from './const';
import CircleIcon from '@/components/CircleIcon';
import KudosSection from './_components/KudosSection';
import Heading from './_components/Heading';

const Experience = () => {
  return (
    <div className="py-4 lg:py-8">
      <section className="px-4 lg:px-12">
        <Heading title="In a nutshell" />
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
        <Heading title="Job Experience" />
        <JobHistoryDesktopView />
        <JobHistoryMobileView />
      </section>

      <section className="px-4 lg:px-12 pt-4 lg:pt-6">
        <Heading title="Found on Slack channels" />
        <KudosSection />
      </section>
    </div>
  );
};

export default Experience;

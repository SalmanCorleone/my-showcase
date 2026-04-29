'use client';

import Heading from './_components/Heading';
import { InANutShellGrid } from './_components/InANutShellGrid';
import JobHistoryDesktopView from './_components/JobHistoryDesktopView';
import JobHistoryMobileView from './_components/JobHistoryMobileView';
import KudosSection from './_components/KudosSection';

const Experience = () => {
  return (
    <div className="py-4 lg:py-8">
      <section className="px-4 lg:px-12">
        <Heading title="In a nutshell" />
        <InANutShellGrid />
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

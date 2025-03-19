import { techStackIcons } from '@/utils/icons';

export const experienceData: ExperienceItemType[] = [
  {
    title: 'Gerald (YC W-21)',
    url: 'https://joingerald.com',
    location: 'NY, USA (remote)',
    duration: 'Aug 2023 - Nov 2024',
    position: 'Software Engineer',
    description: [
      '💰 Led the project of Point system integration where users can earn perks by playing games. It included the integration of Third-party services like Adjoe, AppLovin, and this system generates revenue of around $40k per month.',
      "🛍️ Led the launch of 'Cornerstore' and the new website when we pivoted to Buy Now, Pay Later model.",
      '🧯 Continuously worked on features to make the app seamless and iterated a/b tests on user interactions, which led to 3% increase on gross revenue.',
      '🔌 Integrated Gigs which allows users to purchase eSIM plans powered by T-mobile.',
    ],
    techStack: [
      {
        name: 'React Native',
        icon: techStackIcons.react,
      },
      {
        name: 'Next.js',
        icon: techStackIcons.nextjs,
      },
      {
        name: 'Typescript',
        icon: techStackIcons.typescript,
      },
      {
        name: 'Mixpanel',
        icon: techStackIcons.mixpanel,
      },
    ],
  },
  {
    title: 'TimeTackle (YC W-21)',
    url: 'https://timetackle.com',
    location: 'CA, USA (remote)',
    duration: 'Apr 2021 - Jul 2023',
    position: 'Software Engineer',
    description: [
      '⏰ Built the first draft and eventual technical foundation for Tackle’s web app and analytics server using React, Nodejs and Cubejs which helped us get into YC batch of w-21.',
      '🚀 Led the project “2021 Your Year In Meetings” which we launched on Product Hunt. It achieved 3rd place on “Product of the day” and was nominated as semi-finalist for Product Hunt’s “Golden Kitty Award”. Used react, vanillajs and framer-motion.',
      '🤝 Planned and led the integration between Tackle and Deel (YC W-19). Tackle is now a strategic partner of Deel and Tackle app is now available on Deel’s app directory.',
    ],
    techStack: [
      {
        name: 'React',
        icon: techStackIcons.react,
      },
      // {
      //   name: "amCharts 4",
      // },
      {
        name: 'Typescript',
        icon: techStackIcons.typescript,
      },
    ],
  },
  {
    title: 'CricWhiz',
    location: 'CA, USA (remote)',
    duration: 'Oct 2020 - Mar 2021',
    position: 'Senior Software Engineer',
    description: [
      '📊 Worked with Google Data Studio and Big Query to analyze user interactions, user retention, app performance.',
      '📣 Implemented social media share feature with custom image generation.',
      '↗️ Implemented Google Play Referral feature to accelerate user engagement.',
    ],
    techStack: [
      {
        name: 'React Native',
        icon: techStackIcons.react,
      },
      {
        name: 'Typescript',
        icon: techStackIcons.typescript,
      },
    ],
  },
  {
    title: 'HelloTask Platform Ltd.',
    url: 'https://hellotask.app',
    location: 'Dhaka, Bangladesh',
    duration: 'Feb 2020 - Sep 2020',
    position: 'Senior Software Engineer',
    description: [
      '📲 Shifted the existing native app to the cross-platform app with React Native, Redux, Jest.',
      '📍 Worked with Google map Api, Google Places Api and geolocation service to process user location data and available housekeepers nearby.',
      '💳 Integrated payment gateway to handle bill payments.',
    ],
    techStack: [
      {
        name: 'React Native',
        icon: techStackIcons.react,
      },
      {
        name: 'Google Maps SDK',
        icon: techStackIcons.redux,
      },
    ],
  },
  {
    title: 'TechHive Limited',
    location: 'Dhaka, Bangladesh',
    duration: 'Apr 2019 - Jan 2020',
    position: 'Software Engineer',
    description: [
      '🛵 Developed the cross-platform app EduHive with React Native, published and maintained multiple versions on Google play store.',
      '🖍️ Designed and developed the EduHive scholarship event on which a public exam was taken simultaneously at an announced time.',
      '🎯 As the scrum master, I maintained the agile structure for my team with sprint planning, sprint review, retrospect.',
      '🫕 Maintained nodejs server and wrote several core modules like exam, courses, payments.',
    ],
    techStack: [
      {
        name: 'Nodejs',
        icon: techStackIcons.node,
      },
      {
        name: 'React Native',
        icon: techStackIcons.react,
      },
      {
        name: 'React',
        icon: techStackIcons.react,
      },
    ],
  },
];

// Gerald (YC W-21), NY, USA (remote) —Software Engineer
// August 2023 - November 2024, 1 yr 4 mos
// Led the project of point system integration where users can earn perks by playing games. It included the integration of Third-party services like Adjoe, AppLovin, and this system generates revenue of around $40k per month.
// Led the launch of ‘Cornerstore’ and the new website when we pivoted to Buy Now, Pay Later model.
// Continuously worked on features to make the app seamless and iterated a/b tests on user interactions, which led to 3% increase on gross revenue.
// Integrated Gigs which allows users to purchase eSIM plans powered by T-mobile.

// TimeTackle (YC W-21), CA, USA (remote) — Software Engineer
// Apr 2021 - Jul 2023,  2 yrs 4 mos
// Built the first draft and eventual technical foundation for Tackle’s web app and analytics server using React, Nodejs and Cubejs which helped us get into YC batch of w-21.
// Led the project “2021 Your Year In Meetings” which we launched on Product Hunt. It achieved 3rd place on “Product of the day” and was nominated as semi-finalist for Product Hunt’s “Golden Kitty Award”. Used react, vanillajs and framer-motion.
// Planned and led the integration between Tackle and Deel (YC W-19). Tackle is now a strategic partner of Deel and Tackle app is now available on Deel’s app directory.

// CricWhiz, Dhaka, Bangladesh — Senior Software Engineer
// Oct 2020 - Mar 2021,  6 mos
// Worked with Google Data Studio and Big Query to analyze user interactions, user retention, app performance.
// Implemented social media share feature with custom image generation.
// Implemented Google Play Referral feature to accelerate user engagement.

// HelloTask, Dhaka, Bangladesh — Senior Software Engineer
// Feb 2020 - Sep 2020, 8 mos
// Shifted the existing native app to the cross-platform app with React Native, Redux, Jest.
// Worked with Google map Api, Google Places Api and geolocation service to process user location data and available housekeepers nearby.
// Integrated payment gateway to handle bill payments.

// TechHive, Dhaka, Bangladesh — Software Engineer
// Apr 2019 - Jan 2020, 10 mos
// Developed the cross-platform app EduHive with React Native, published and maintained multiple versions on Google play store.
// Designed and developed the EduHive scholarship event on which a public exam was taken simultaneously at an announced time.
// As the scrum master, I maintained the agile structure for my team with sprint planning, sprint review, retrospect.
// Maintained nodejs server and wrote several core modules like exam, courses, payments.

// Ontik Technology, Dhaka, Bangladesh — Software Engineer
// Feb 2018 - July 2018, 6 mos
// Worked on account management software using php, laravel, jQuery, mySql.

// Education
// Bangladesh University of Engineering and Technology, Dhaka
// Bsc, Computer Science and Engineering, 2013 - 2018
// Aug 2015 - Aug 2018
// Thesis Supervisor: Dr. Muhammad Masroor Ali
// Adviser : Dr. M. Kaykobad

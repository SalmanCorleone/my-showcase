import { industriesIcons, techStackIcons } from '@/utils/icons';

export const experienceData: ExperienceItemType[] = [
  {
    title: 'Stealth Startup',
    location: 'USA (remote)',
    duration: 'July 2025 - Present',
    position: 'Software Engineer',
    description: ['🍜 We are cooking something up, will go live soon!'],
    techStack: [
      {
        name: 'Next.js',
        icon: techStackIcons.nextjsMini,
      },
      {
        name: 'Typescript',
        icon: techStackIcons.typescriptMini,
      },
    ],
  },
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
        icon: techStackIcons.nextjsMini,
      },
      {
        name: 'Typescript',
        icon: techStackIcons.typescriptMini,
      },
      {
        name: 'Mixpanel',
        icon: techStackIcons.mixpanelMini,
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
      {
        name: 'Typescript',
        icon: techStackIcons.typescriptMini,
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
        icon: techStackIcons.typescriptMini,
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
        icon: techStackIcons.googleMaps,
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

export const techs = [
  {
    name: 'React Native',
    icon: techStackIcons.react,
  },
  {
    name: 'NextJs',
    icon: techStackIcons.nextjs,
  },
  {
    name: 'Typescript',
    icon: techStackIcons.typeScript,
  },
  {
    name: 'Nodejs',
    icon: techStackIcons.node,
  },
  {
    name: 'PostgresSQL',
    icon: techStackIcons.postgresSQL,
  },
  {
    name: 'Tailwind',
    icon: techStackIcons.tailwind,
  },
];

export const tools = [
  {
    name: 'Supabase',
    icon: techStackIcons.supabase,
  },
  {
    name: 'Figma',
    icon: techStackIcons.figma,
  },
  {
    name: 'Segment',
    icon: techStackIcons.segment,
  },
  {
    name: 'Rive',
    icon: techStackIcons.rive,
  },
];

export const industries = [
  {
    name: 'EdTech',
    icon: industriesIcons.edTech,
  },
  {
    name: 'FinTech',
    icon: industriesIcons.finTech,
  },
  {
    name: 'Productivity',
    icon: industriesIcons.productivity,
  },
  {
    name: 'Fantasy Sport',
    icon: industriesIcons.fantasySport,
  },
  {
    name: 'Logistics',
    icon: industriesIcons.logistics,
  },
];

export const thingsIMake = [
  {
    name: 'Websites',
    icon: techStackIcons.website,
  },
  {
    name: 'Mobile apps',
    icon: techStackIcons.mobileApp,
  },
  {
    name: 'Animations',
    icon: techStackIcons.animation,
  },
];

type ExperienceItemType = {
  title: string;
  location: string;
  duration: string;
  position: string;
  positionSubTitle?: string;
  techStack: {
    name: string;
    icon: React.ReactNode;
    color?: string;
  }[];
  description: string[];
  url?: string;
};

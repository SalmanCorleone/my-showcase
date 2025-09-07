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

type SectionMap = Record<string, string[]>;

type Data = Record<string, ItemReport[]>;

type DecodedData = { report_sections: SectionMap; data: Data };

interface ItemReport {
  key: string;
  value: number;
  unit: string | null;
  ref_range: string | null;
  month?: string;
}

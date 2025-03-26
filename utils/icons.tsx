import Image from 'next/image';
import {
  RiArrowRightDoubleLine,
  RiBrain2Line,
  RiComputerLine,
  RiFootballLine,
  RiMobileDownloadLine,
  RiMoneyDollarCircleLine,
  RiNextjsLine,
  RiNodejsLine,
  RiPencilLine,
  RiReactjsLine,
  RiTruckLine,
} from 'react-icons/ri';
import { SiGooglemaps, SiMixpanel, SiTypescript } from 'react-icons/si';

export const techStackIcons = {
  // language
  react: <RiReactjsLine className="text-blue-400" />,
  python: <Image src={'/icons/python.png'} width={20} height={20} alt="python" />,
  node: <RiNodejsLine className="text-green-300" />,
  typescriptMini: <SiTypescript className="text-blue-500" />,
  typeScript: <Image src={'/icons/typescript.png'} width={20} height={20} alt="typescript" />,
  nextjsMini: <RiNextjsLine className="" />,
  tailwind: <Image src="/icons/tailwind.png" width={20} height={20} alt="tailwind" />,
  nextjs: <Image src={'/icons/nextjs.png'} width={20} height={20} alt="nextjs" />,
  // tools
  googleMaps: <SiGooglemaps className="text-red-500" />,
  supabase: <Image src="/icons/supabase.png" width={20} height={20} alt="supabase" />,
  rive: <Image src="/icons/rive.png" width={20} height={20} alt="rive" />,
  mixpanelMini: <SiMixpanel className="text-purple-500" />,
  figma: <Image src="/icons/figma.png" width={20} height={20} alt="figma" />,
  segment: <Image src="/icons/segment.png" width={20} height={20} alt="segment" />,
  postgresSQL: <Image src={'/icons/postgresSQL.png'} width={20} height={20} alt="postgresSQL" />,
  mixpanel: <Image src={'/icons/mixpanel.png'} width={20} height={20} alt="mixpanel" />,
  // products
  website: <RiComputerLine />,
  mobileApp: <RiMobileDownloadLine />,
  animation: <RiArrowRightDoubleLine />,
};

export const industriesIcons = {
  edTech: <RiPencilLine />,
  finTech: <RiMoneyDollarCircleLine />,
  productivity: <RiBrain2Line />,
  fantasySport: <RiFootballLine />,
  logistics: <RiTruckLine />,
};

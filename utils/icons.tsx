import ICONS from '@/public/icons';
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
  python: <Image src={ICONS.python} width={20} height={20} alt="python" />,
  node: <RiNodejsLine className="text-green-300" />,
  typescriptMini: <SiTypescript className="text-blue-500" />,
  typeScript: <Image src={ICONS.typescript} width={20} height={20} alt="typescript" />,
  nextjsMini: <RiNextjsLine className="" />,
  tailwind: <Image src={ICONS.tailwind} width={20} height={20} alt="tailwind" />,
  nextjs: <Image src={ICONS.nextjs} width={20} height={20} alt="nextjs" />,
  // tools
  googleMaps: <SiGooglemaps className="text-red-500" />,
  supabase: <Image src={ICONS.supabase} width={20} height={20} alt="supabase" />,
  rive: <Image src={ICONS.rive} width={20} height={20} alt="rive" />,
  mixpanelMini: <SiMixpanel className="text-purple-500" />,
  figma: <Image src={ICONS.figma} width={20} height={20} alt="figma" />,
  segment: <Image src={ICONS.segment} width={20} height={20} alt="segment" />,
  postgresSQL: <Image src={ICONS.postgresSQL} width={20} height={20} alt="postgresSQL" />,
  mixpanel: <Image src={ICONS.mixpanel} width={20} height={20} alt="mixpanel" />,
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

'use client';
import ICONS from '@/public/icons';
import { EASE_SMOOTH } from '@/utils/animationVariants';
import theme from '@/utils/theme';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTransitionRouter } from 'next-view-transitions';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { RiBearSmileLine, RiBriefcase4Line } from 'react-icons/ri';
import styles from './header.module.css';

const ANIM_DURATION = 700;

type HeaderItem = {
  name: string;
  href: string;
  icon: React.ReactNode;
  openInNewTab?: boolean;
};

const headerItems: HeaderItem[] = [
  {
    name: 'Experience',
    href: '/experience',
    icon: <RiBriefcase4Line />,
  },
  {
    name: 'About',
    href: '/about',
    icon: <RiBearSmileLine />,
  },
  // {
  //   name: 'Goodies',
  //   href: '/goodies',
  //   icon: <RiGift2Line />,
  // },
] as const;

const Header = () => {
  const [isMenuActive, setMenuActive] = useState(false);
  const router = useTransitionRouter();
  const pathName = usePathname();
  const { scrollY } = useScroll();
  const headerHeight = useTransform(scrollY, [0, 200], [80, 60]);
  const logoSize = useTransform(scrollY, [0, 200], [48, 32]);

  const toggleBurgerMenu = () => {
    setMenuActive((val) => !val);
  };

  const slideAnim = () => {
    document.documentElement.animate(
      [
        {
          transform: 'translateY(0px)',
          scale: 1,
          opacity: 1,
        },
        {
          transform: 'translateY(-100px)',
          opacity: 0.5,
          scale: 0.7,
        },
      ],
      {
        duration: ANIM_DURATION,
        easing: 'cubic-bezier(0.76, 0, 0.24, 1)',
        fill: 'forwards',
        pseudoElement: '::view-transition-old(root)',
      },
    );

    document.documentElement.animate(
      [
        {
          transform: 'translateY(100vh)',
        },
        {
          transform: 'translateY(0vh)',
        },
      ],
      {
        duration: ANIM_DURATION,
        easing: 'cubic-bezier(0.76, 0, 0.24, 1)',
        fill: 'forwards',
        pseudoElement: '::view-transition-new(root)',
      },
    );
  };

  const onNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: HeaderItem) => {
    e.preventDefault();
    setMenuActive(false);
    if (pathName === item.href) return;
    if (item.openInNewTab) {
      window.open(item.href, '_blank');
      return;
    }
    router.push(item.href, {
      onTransitionReady: slideAnim,
    });
  };

  return (
    <div>
      <motion.div
        className={`flex items-center justify-between px-4 lg:px-16 fixed top-0 left-0 right-0 z-50 border-b-2 border-gray-100`}
        style={{ background: `${theme.palette.light}`, height: headerHeight }}
      >
        {/* Left side */}
        <Link
          href={'/'}
          onClick={(e) => {
            e.preventDefault();
            router.push('/', {
              onTransitionReady: slideAnim,
            });
          }}
        >
          <div className="flex gap-4 items-center">
            <motion.div style={{ width: logoSize, height: logoSize, position: 'relative' }}>
              <Image src={ICONS.thumbsUp} alt="cheers" width={48} height={48} />
            </motion.div>
            <p className="lg:text-2xl font-semibold">Samil Salman</p>
          </div>
        </Link>

        <button
          onClick={toggleBurgerMenu}
          className={`${styles.burgerMenuButton} ${!!isMenuActive && styles.active} flex lg:hidden`}
        />

        {/* Right side */}
        <div className="gap-4 hidden lg:flex">
          {headerItems.map((item) => (
            <a key={item.name} href={item.href} onClick={(e) => onNavClick(e, item)}>
              <div className="flex items-center gap-4 lg:gap-2 px-2 py-1">
                <span style={{ color: pathName === item.href ? theme.palette.lime : undefined }}>{item.icon}</span>
                <span style={{ color: pathName === item.href ? theme.palette.lime : undefined }}>{item.name}</span>
              </div>
            </a>
          ))}
        </div>
      </motion.div>

      {/* Mobile Nav */}
      <motion.div
        className={`pt-20 fixed h-[calc(100vh-80px)] origin-top w-full z-30 block lg:hidden ${
          isMenuActive ? '' : 'pointer-events-none'
        }`}
        initial={{ opacity: 0, background: 'transparent' }}
        animate={{ opacity: isMenuActive ? 1 : 0, background: isMenuActive ? theme.palette.light : 'transparent' }}
        transition={{ duration: 0.3, ease: EASE_SMOOTH }}
      >
        <div className="absolute flex w-full h-full">
          {Array(4)
            .fill(0)
            .map((_, idx) => (
              <motion.div
                key={`bg_section_${idx}`}
                className="flex-1 origin-top"
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: isMenuActive ? [0, 1] : 0, opacity: isMenuActive ? [0, 1] : 0 }}
                transition={{ duration: 0.5, ease: EASE_SMOOTH, delay: 0.1 * idx }}
                style={{ background: theme.palette.lightGrey }}
              />
            ))}
        </div>

        <motion.div
          className="flex flex-col absolute w-full p-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: isMenuActive ? [0, 1] : 0 }}
          transition={{ delay: 0.3 }}
        >
          {headerItems.map((item) => (
            <a key={item.name} href={item.href} onClick={(e) => onNavClick(e, item)}>
              <div className="flex items-center gap-4 lg:gap-2">
                <span className="text-xl">{item.icon}</span>
                <span className="text-xl">{item.name}</span>
              </div>
            </a>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Header;

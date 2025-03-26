'use client';
import { useState } from 'react';
import styles from './header.module.css';
import Link from 'next/link';
import { RiBearSmileLine, RiBriefcase4Line, RiGithubFill, RiLinkedinBoxLine, RiRocket2Line } from 'react-icons/ri';
import { motion } from 'framer-motion';
import theme, { transparencyHexMap } from '@/utils/theme';
import { EASE_SMOOTH } from '@/utils/animationVariants';

const headerItems = [
  {
    name: 'Experience',
    href: '/experience',
    icon: <RiBriefcase4Line />,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/SalmanCorleone',
    openInNewTab: true,
    icon: <RiGithubFill />,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/samil-salman21',
    openInNewTab: true,
    icon: <RiLinkedinBoxLine />,
  },

  {
    name: 'Contact',
    href: '',
    icon: <RiRocket2Line />,
  },
  {
    name: 'About',
    href: '/about',
    icon: <RiBearSmileLine />,
  },
];

const Header = () => {
  const [isMenuActive, setMenuActive] = useState(false);

  const toggleBurgerMenu = () => {
    setMenuActive((val) => !val);
  };

  return (
    <div>
      <div
        className={`flex items-center justify-between h-20 px-4 lg:px-16 fixed top-0 left-0 right-0 backdrop-blur-md z-50 border-b border-[var(--color-background)]`}
        style={{ background: `${theme.palette.light}${transparencyHexMap[60]}` }}
      >
        {/* Left side */}
        <Link href={'/'}>
          <h1 className="lg:text-4xl font-bold text-base">Samil Salman</h1>
        </Link>

        <button
          onClick={toggleBurgerMenu}
          className={`${styles.burgerMenuButton} ${!!isMenuActive && styles.active} flex lg:hidden`}
        />

        {/* Right side */}
        <div className="gap-8 hidden lg:flex">
          {headerItems.map((item) => (
            <a key={item.name} href={item.href} {...(!!item.openInNewTab && { target: '_blank', rel: 'noreferrer' })}>
              <div className="flex items-center gap-4 lg:gap-2">
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Nav */}
      <motion.div
        className={`absolute h-[calc(100vh-80px)] origin-top w-full z-30 block lg:hidden ${
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
            <a key={item.name} href={item.href} {...(!!item.openInNewTab && { target: '_blank', rel: 'noreferrer' })}>
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

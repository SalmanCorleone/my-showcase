'use client';
import { useState } from 'react';
import styles from './header.module.css';
import Link from 'next/link';
import { RiBearSmileLine, RiBriefcase4Line, RiGithubFill, RiRocket2Line } from 'react-icons/ri';

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
    <div className="flex items-center justify-between py-8 px-4 md:px-16">
      {/* Left side */}
      <Link href={'/'}>
        <h1 className="text-4xl font-bold hidden md:block">Samil Salman</h1>
      </Link>

      <button
        onClick={toggleBurgerMenu}
        className={`${styles.burgerMenuButton} ${!!isMenuActive && styles.active} flex md:hidden`}
      />

      <div className="border flex flex-col absolute">
        {headerItems.map((item) => (
          <a key={item.name} href={item.href} {...(!!item.openInNewTab && { target: '_blank', rel: 'noreferrer' })}>
            <div className="flex items-center gap-2">
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </div>
          </a>
        ))}
      </div>

      {/* Right side */}
      <div className="gap-8 hidden md:flex">
        {headerItems.map((item) => (
          <a key={item.name} href={item.href} {...(!!item.openInNewTab && { target: '_blank', rel: 'noreferrer' })}>
            <div className="flex items-center gap-2">
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Header;

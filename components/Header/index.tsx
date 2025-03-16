"use client";
import { useState } from "react";
import styles from "./header.module.css";

const headerItems = [
  {
    name: "Articles",
    href: "/articles",
  },
  {
    name: "GitHub",
    href: "https://github.com/SalmanCorleone",
  },
  {
    name: "Contact",
    href: "",
  },
  {
    name: "About",
    href: "/about",
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
      <h1 className="text-4xl font-bold hidden md:block">Samil Salman</h1>
      <button onClick={toggleBurgerMenu} className={`${styles.burgerMenuButton} ${!!isMenuActive && styles.active} flex md:hidden`}></button>

      {/* Right side */}
      <div className="gap-8 hidden md:flex">
        {headerItems.map((item) => (
          <a key={item.name} href={item.href} target="_blank" rel="noreferrer">
            <span>{item.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Header;

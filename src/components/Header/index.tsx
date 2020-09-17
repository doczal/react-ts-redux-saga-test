import React from "react";
import styles from "./style.module.css";

interface Link {
  title: string;
  path: string;
}

interface HeaderProps {
  links: Link[];
  currPath: string;
}

const Header = ({ links, currPath }: HeaderProps) => {
  const handleClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    window.history.pushState("", "", path);
    const popStateEvent = new PopStateEvent("popstate");
    dispatchEvent(popStateEvent);
  };
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>We Love Cats! 😻</h1>
      <nav className={styles.nav}>
        <ul>
          {links.map((link, idx) => (
            <li
              className={currPath === link.path ? styles.active : null}
              key={idx}
            >
              <a onClick={(e) => handleClick(e, link.path)} href={link.path}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

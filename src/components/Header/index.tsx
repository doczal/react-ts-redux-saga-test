import React from "react";
import styles from "./style.module.css";

interface Link {
  title: string;
  path: string;
}

interface HeaderProps {
  links: Link[];
}

const Header = ({ links }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>We Love Cats!</h1>
      <nav className={styles.nav}>
        <ul>
          {links.map((link, idx) => (
            <li key={idx}>
              <a href={link.path}>{link.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

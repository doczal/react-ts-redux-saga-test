import React from "react";
import styles from "./style.module.css";

interface TabButtonProps {
  isActive?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

const TabButton = ({ isActive, onClick, children }: TabButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${isActive ? styles.active : ""}`}
    >
      {children}
    </button>
  );
};

export default TabButton;

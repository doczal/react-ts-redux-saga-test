import React from "react";
import styles from "./style.module.css";

interface VoteButtonProps {
  voteType: "UP" | "DOWN";
  voteVal?: 1 | 0;
}

const VoteButton = ({ voteType, voteVal }: VoteButtonProps) => {
  const checkActive = () => {
    if (
      (voteType === "UP" && voteVal === 1) ||
      (voteType === "DOWN" && voteVal === 0)
    ) {
      return true;
    }
    return false;
  };
  return (
    <div className={styles.container}>
      <button
        className={`${styles.voteBtn} ${checkActive() ? styles.active : ""}`}
      >
        {voteType === "UP" && "👍 YA"}
        {voteType === "DOWN" && "NO 👎"}
      </button>
    </div>
  );
};

export default VoteButton;

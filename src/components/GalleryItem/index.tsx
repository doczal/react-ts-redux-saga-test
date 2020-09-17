import React from "react";
import VoteButton from "components/VoteButton";
import styles from "./style.module.css";

interface GalleryItemProps {
  url: string;
}

const GalleryItem = ({ url }: GalleryItemProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.aspRatio}>
          <img className={styles.image} src={url} alt="cat" />
        </div>
        <div className={styles.voteBar}>
          <VoteButton voteVal={null} voteType="UP" />
          <VoteButton voteType="DOWN" />
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;

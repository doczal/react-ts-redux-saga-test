import React from "react";
import GalleryItem from "components/GalleryItem";
import styles from "./style.module.css";
import { CatImage } from "catTypes";

interface GalleryProps {
  images: CatImage[];
}

const Gallery = ({ images }: GalleryProps) => {
  return (
    <div className={styles.container}>
      {images.map((img) => (
        <GalleryItem
          key={img.id}
          id={img.id}
          url={img.url}
          voteVal={img.vote?.value}
        />
      ))}
    </div>
  );
};

export default Gallery;

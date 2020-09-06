import React from "react";
import styles from "./style.module.css";

interface Image {
  url: string;
  id: string;
}

interface GalleryProps {
  images: Image[];
}

const Gallery = ({ images }: GalleryProps) => {
  return (
    <div className={styles.container}>
      {images.map((img) => (
        <div key={img.id} className={styles.imgContainer}>
          <img src={img.url} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Gallery;

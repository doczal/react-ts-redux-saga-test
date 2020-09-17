import React from "react";
import GalleryItem from "components/GalleryItem";
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
        <GalleryItem key={img.id} url={img.url} />
      ))}
    </div>
  );
};

export default Gallery;

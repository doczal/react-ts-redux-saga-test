import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getImages } from "catActions";
import GalleryItem from "components/GalleryItem";
import styles from "./style.module.css";
import useTypedSelector from "hooks/useTypedSelector";

const Gallery = () => {
  const dispatch = useDispatch();
  const images = useTypedSelector((state) => state.cats.images);
  const isLoading = useTypedSelector((state) => state.cats.isLoading);

  useEffect(() => {
    if (images.length < 1) {
      dispatch(getImages());
    }
  }, [dispatch, images]);

  if (isLoading) {
    return <div className={styles.container}>Loading...</div>;
  }
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

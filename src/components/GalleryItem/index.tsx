import React from "react";
import { useDispatch } from "react-redux";
import useTypedSelector from "hooks/useTypedSelector";
import VoteButton from "components/VoteButton";
import DeleteButton from "components/DeleteButton";
import styles from "./style.module.css";
import { VoteVal } from "voteTypes";
import { deleteImage } from "catActions";

interface GalleryItemProps {
  url: string;
  id: string;
  voteVal: VoteVal;
}

const GalleryItem = ({ url, id, voteVal }: GalleryItemProps) => {
  const dispatch = useDispatch();
  const isLoading = useTypedSelector((state) => state.cats.isLoading);
  const handleDelete = () => {
    if (!isLoading) {
      dispatch(deleteImage(id));
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.deleteBtn}>
          <DeleteButton handleDelete={handleDelete} />
        </div>
        <div className={styles.aspRatio}>
          <img className={styles.image} src={url} alt="cat" />
        </div>
        <div className={styles.voteBar}>
          <VoteButton voteVal={voteVal} imageId={id} voteType="UP" />
          <VoteButton voteVal={voteVal} imageId={id} voteType="DOWN" />
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;

import React from "react";
import styles from "./style.module.css";
import { useDispatch } from "react-redux";
import useTypedSelector from "hooks/useTypedSelector";
import { postVote } from "voteActions";

interface VoteButtonProps {
  voteType: "UP" | "DOWN";
  voteVal?: 1 | 0;
  imageId: string;
}

const VoteButton = ({ voteType, voteVal, imageId }: VoteButtonProps) => {
  const dispatch = useDispatch();
  const isLoading = useTypedSelector((state) => state.votes.isLoading);
  const checkActive = () => {
    if (
      (voteType === "UP" && voteVal === 1) ||
      (voteType === "DOWN" && voteVal === 0)
    ) {
      return true;
    }
    return false;
  };

  const onVote = () => {
    if (voteType === "UP" && voteVal !== 1) {
      dispatch(postVote(imageId, 1));
    } else if (voteType === "DOWN" && voteVal !== 0) {
      dispatch(postVote(imageId, 0));
    }
  };

  return (
    <div className={styles.container}>
      <button
        disabled={isLoading}
        onClick={onVote}
        className={`${styles.voteBtn} ${checkActive() ? styles.active : ""}`}
      >
        {voteType === "UP" && "👍 YA"}
        {voteType === "DOWN" && "NO 👎"}
      </button>
    </div>
  );
};

export default VoteButton;

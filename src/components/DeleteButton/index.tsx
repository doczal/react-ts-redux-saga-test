import React, { useState, useEffect, useRef } from "react";
import styles from "./style.module.css";

type DeleteButtonState = "IDLE" | "CONFIRM";

interface DeleteButtonProps {
  handleDelete: () => void;
}

const DeleteButton = ({ handleDelete }: DeleteButtonProps) => {
  const btnRef = useRef(null);
  const [btnState, setBtnState] = useState<DeleteButtonState>("IDLE");

  useEffect(() => {
    const cancelDelete = (e: MouseEvent) => {
      if (btnState === "CONFIRM" && btnRef.current !== e.target) {
        setBtnState("IDLE");
      }
    };
    window.addEventListener("click", cancelDelete);
    return () => {
      window.removeEventListener("click", cancelDelete);
    };
  }, [btnState]);

  const onClick = () => {
    if (btnState === "IDLE") {
      setBtnState("CONFIRM");
    } else {
      handleDelete();
    }
  };

  return (
    <button
      ref={btnRef}
      onClick={onClick}
      className={`${styles.button} ${btnState === "CONFIRM" && styles.confirm}`}
    >
      🗑️
    </button>
  );
};

export default DeleteButton;

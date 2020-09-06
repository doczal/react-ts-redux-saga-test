import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getImages } from "catActions";
import styles from "./style.module.css";
import useTypedSelector from "hooks/useTypedSelector";

const textArr = ["foo", "bar", "baz"];

const App: React.FC = () => {
  const dispatch = useDispatch();
  const images = useTypedSelector((state) => state.cats.images);
  const isLoading = useTypedSelector((state) => state.cats.isLoading);
  const hasError = useTypedSelector((state) => state.cats.hasError);

  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>We love cats</h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        images.map((img) => <div key={img.id}>cat</div>)
      )}
    </div>
  );
};

export default App;

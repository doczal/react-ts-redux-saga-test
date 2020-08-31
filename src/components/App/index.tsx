import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getImages } from "catActions";
import styles from "./style.module.css";

const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hello Worldz</h1>
    </div>
  );
};

export default App;

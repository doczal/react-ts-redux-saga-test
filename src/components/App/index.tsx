import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getImages } from "catActions";
import styles from "./style.module.css";
import useThrottle from "../../hooks/useThrottle";

const textArr = ["foo", "bar", "baz"];

const App: React.FC = () => {
  const dispatch = useDispatch();

  const [text, setText] = useState("yo");
  const [bool, setBool] = useState(true);
  const [color, setColor] = useState("yellow");

  // const changeColor = useThrottle(
  //   useCallback((color) => {
  //     setColor(color);
  //   }, []),
  //   3000
  // );

  const changeColor = useThrottle((color) => {
    setColor(color);
  }, 3000);

  const onClick = useThrottle(
    useCallback(
      (text) => {
        if (bool) {
          setText(text);
        } else {
          setText("NO!");
        }
      },
      [bool]
    ),
    2000
  );

  useEffect(() => {
    console.log("changed!");
  }, [changeColor]);

  // const onClick = useCallback(
  //   (text) => {
  //     if (bool) {
  //       setText(text);
  //     } else {
  //       setText("NO!");
  //     }
  //   },
  //   [bool]
  // );
  return (
    <div className={styles.container} style={{ backgroundColor: color }}>
      <h1 className={styles.title}>{text}</h1>
      <button onClick={() => onClick((Math.random() * 100).toString())}>
        click me
      </button>
      <button onClick={() => setBool(!bool)}>toggle</button>
      <button
        onClick={() => changeColor(color === "green" ? "yellow" : "green")}
      >
        color
      </button>
    </div>
  );
};

export default App;

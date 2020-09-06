import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getImages } from "catActions";
import styles from "./style.module.css";
import useTypedSelector from "hooks/useTypedSelector";
import TabButton from "components/TabButton";
import Gallery from "components/Gallery";
import { CatImage } from "catTypes";

type viewState = "DISPLAY" | "UPLOAD";

interface BodyProps {
  viewState: viewState;
  images: CatImage[];
}

const Body = ({ viewState, images }: BodyProps) => {
  if (viewState === "DISPLAY") {
    return <Gallery images={images} />;
  } else if (viewState === "UPLOAD") {
    return <div>Upload cat image</div>;
  }
  return null;
};

const App: React.FC = () => {
  const dispatch = useDispatch();
  const images = useTypedSelector((state) => state.cats.images);
  const isLoading = useTypedSelector((state) => state.cats.isLoading);
  const hasError = useTypedSelector((state) => state.cats.hasError);

  const [viewState, setViewState] = useState<viewState>("DISPLAY");

  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>We love cats</h1>
      <div className={styles.tabContainer}>
        <TabButton
          onClick={() => setViewState("DISPLAY")}
          isActive={viewState === "DISPLAY"}
        >
          View cats
        </TabButton>
        <TabButton
          onClick={() => setViewState("UPLOAD")}
          isActive={viewState === "UPLOAD"}
        >
          Upload a cat image
        </TabButton>
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Body images={images} viewState={viewState} />
      )}
    </div>
  );
};

export default App;

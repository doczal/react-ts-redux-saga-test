import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getImages } from "catActions";
import styles from "./style.module.css";
import useTypedSelector from "hooks/useTypedSelector";
import usePath from "hooks/usePath";
import TabButton from "components/TabButton";
import Gallery from "components/Gallery";
import Header from "components/Header";
import Route from "components/Route";
import { CatImage } from "catTypes";

type viewState = "DISPLAY" | "UPLOAD";

interface BodyProps {
  viewState: viewState;
  images: CatImage[];
}

const App: React.FC = () => {
  const dispatch = useDispatch();
  const images = useTypedSelector((state) => state.cats.images);
  const isLoading = useTypedSelector((state) => state.cats.isLoading);
  const hasError = useTypedSelector((state) => state.cats.hasError);

  const [viewState, setViewState] = useState<viewState>("DISPLAY");

  const currPath = usePath();

  useEffect(() => {
    if (currPath === "/upload") {
      setViewState("UPLOAD");
    } else {
      setViewState("DISPLAY");
    }
  }, [currPath]);

  useEffect(() => {
    // dispatch(getImages());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <Header
        currPath={currPath}
        links={[
          { title: "View Cats", path: "/" },
          { title: "Upload Image", path: "/upload" },
        ]}
      />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Route path="/">
            <Gallery
              images={[
                {
                  id: "1",
                  url: "https://cdn2.thecatapi.com/images/pcjMS8qNP.jpg",
                },
                {
                  id: "2",
                  url: "https://cdn2.thecatapi.com/images/wGjVbN_6z.jpg",
                },
              ]}
            />
          </Route>
          <Route path="/upload">
            <div>Upload</div>
          </Route>
        </>
      )}
    </div>
  );
};

export default App;

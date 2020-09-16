import { useEffect, useState } from "react";

const usePath = () => {
  const [path, setPath] = useState(window.location.pathname);
  const handlePopState = () => {
    const winPath = window.location.pathname;
    setPath(winPath);
  };
  useEffect(() => {
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);
  return path;
};

export default usePath;

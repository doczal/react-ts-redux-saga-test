import React, { useEffect, useState } from "react";
import usePath from "hooks/usePath";

interface RouteProps {
  path: string;
}

const Route = ({ path, children }: React.PropsWithChildren<RouteProps>) => {
  const [render, setRender] = useState(false);
  const currPath = usePath();
  useEffect(() => {
    setRender(currPath === path);
  }, [currPath, path]);
  if (render) {
    return <>{children}</>;
  }
  return <></>;
};

export default Route;

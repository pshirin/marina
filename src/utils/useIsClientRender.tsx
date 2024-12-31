"use client";
import { useLayoutEffect, useState } from "react";

export const useIsClientRender = () => {
  const [isClient, setisClient] = useState(false);

  useLayoutEffect(() => {
    setisClient(true);
  }, []);

  return isClient;
};

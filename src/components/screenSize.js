'use client';

import { useState, useEffect } from "react";

export default function useScreenSize() {
  const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 500);
  const [height, setHeight] = useState(typeof window !== "undefined" ? window.innerHeight : 500);
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
   
    }
  }, []);

  return { height, width }

}
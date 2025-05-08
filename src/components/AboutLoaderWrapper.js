// components/AboutLoaderWrapper.jsx
"use client";
import { useState, useEffect } from "react";
import Loader from "@/components/Loader/Loader";

export default function AboutLoaderWrapper({ children }) {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoader(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return loader ? <Loader /> : children;
}

import React, { useEffect, useRef } from "react";
import Button from "@mui/material/Button";

let cubeZ: any = 10;

const Home = () => {
  const sceneRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className="home-container h-screen w-screen" ref={sceneRef}>
    
    </div>
  );
};

export default Home;

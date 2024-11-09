import { useEffect, useState } from "react";
import "./App.css";
import Extra from "./Componants/section/Extra/Extra";
import Hero from "./Componants/section/Hero";
import Navbar from "./Componants/section/Navbar";
import Skills from "./Componants/section/Skills";
import { Star } from "./Star";
import { BrowserRouter } from "react-router-dom";
import { StarsCanvas } from "./Componants/animation";
import React from 'react'

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-black relative z-0  overflow-x-hidden h-full">
        <div className="bg-center bg-no-repeat bg-cover bg-hero-pattern">
          <Navbar />
          {/* <Extra width={width} /> */}
        </div>
        <Hero/>
        <Skills />
      </div>

    </BrowserRouter>
  );
}

export default App;

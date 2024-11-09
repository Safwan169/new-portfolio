import { motion } from "framer-motion";
import { styles } from "../Extra/styles";
import { ComputersCanvas } from "../../animation";
import computer  from "/computer.png";
// import { IconCloudDemo } from "../../magicui/Icon-cloud";
import React from 'react'

const Extra = ({ width }) => {
  return (
    <section className="relative  w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col items-center justify-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 h-40 sm:h-80 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white montserrat`}>
            Hi, I&apos;m <span className="text-[#915eff] ">Safwan</span>
          </h1>
          <p className={`${styles.heroSubText}  mt-2 text-white-100`}>
            A full-stack enthusiast with a passion for creating captivating web
            experiences using React and Angular and Restful api based backend with node, express and mongodb
          </p>
        </div>
      </div>

     {/* < IconCloudDemo/> */}
    </section>
  );
};

export default Extra;
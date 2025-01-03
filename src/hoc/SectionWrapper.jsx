import React from "react";
import { motion } from "framer-motion";
import { styles } from "../Componants/section/Extra/styles";
import { staggerContainer } from "../../utils/motion"

const SectionWrapper = (Component, idName) =>
  function HOC({ width }) {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component width={width} />
      </motion.section>
    );
  };
export default SectionWrapper;

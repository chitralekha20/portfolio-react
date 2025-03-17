import React from "react";
import { motion, useScroll } from "framer-motion";

const ScrollBar = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        right: 25,
        width: "0.375rem",
        height: "100px",
        backgroundColor: "#444",
        borderRadius: "10px",
        overflow: "hidden",
        transform: "translateY(-50%)",
        zIndex: 900,
      }}
    >
      <motion.div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#00f050",
          scaleY: scrollYProgress,
          transformOrigin: "top",
          borderRadius: "10px",
        }}
      />
    </div>
  );
};

export default ScrollBar;

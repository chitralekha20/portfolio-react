// import React from "react";
// import "./Footer.css";

// const Footer = () => {
//   const date = new Date();
//   const year = date.getFullYear();
//   return (
//     <footer className="footer-container">
//       <p className="footer-subtext">Have a project in mind?</p>
//       <a className="footer-mail" href="mailto:chitralekha1299@gmail.com">
//       chitralekha1299@gmail.com
//       </a>
//       <p className="footer-subtext" style={{marginTop:"1rem"}}>Copyright @{year}</p>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { motion } from "framer-motion";
import "./Footer.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <motion.footer 
      className="footer-container"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <motion.p className="footer-subtext" variants={itemVariants}>
        Have a project in mind?
      </motion.p>
      
      <motion.a 
        className="footer-mail" 
        href="mailto:chitralekha1299@gmail.com"
        variants={itemVariants}
      >
        chitralekha1299@gmail.com
      </motion.a>
      
      <motion.p 
        className="footer-subtext" 
        style={{marginTop:"1rem"}} 
        variants={itemVariants}
      >
        Copyright @{year}
      </motion.p>
    </motion.footer>
  );
};

export default Footer;

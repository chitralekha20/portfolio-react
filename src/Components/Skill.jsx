// import React from "react";
// import {
//   SiJavascript,
//   SiExpress,
//   SiAdobephotoshop,
//   SiAdobeillustrator,
//   SiCanva,
// } from "react-icons/si";

// import { PiMicrosoftExcelLogoFill } from "react-icons/pi";

// import "./Skill.css";
// import {
//   FaBootstrap,
//   FaCss3Alt,
//   FaGitAlt,
//   FaHtml5,
//   FaMagnifyingGlass,
//   FaMeta,
//   FaNode,
//   FaReact,
//   FaRegSnowflake,
// } from "react-icons/fa6";


// const Skill = () => {
//   return (
//     <section
//       className="stack-container"
//       id="skills"
//     >
//       <div className="stact-heading-container">
//         <FaRegSnowflake className="stack-icon" />
//         <h4 className="stack-heading">My Stack</h4>
//       </div>
//       <div className="first-stack-container">
//         <div className="first-stack-left">
//           <h1 className="first-stack-heading">FRONTEND</h1>
//         </div>
//         <div className="first-stack-right">
//           <div className="first-stack-single">
//             <SiJavascript className="skillIcon" />
//             <span className="skillName">Javascript</span>
//           </div>
//           <div className="first-stack-single">
//             <FaReact className="skillIcon" />
//             <span className="skillName">React</span>
//           </div>
//           <div className="first-stack-single">
//             <FaBootstrap className="skillIcon" />
//             <span className="skillName">Bootstrap</span>
//           </div>
//           <div className="first-stack-single">
//             <FaHtml5 className="skillIcon" />
//             <span className="skillName">HTML</span>
//           </div>
//           <div className="first-stack-single">
//             <FaCss3Alt className="skillIcon" />
//             <span className="skillName">CSS</span>
//           </div>
//         </div>
//       </div>
//       <div className="first-stack-container" style={{ marginTop: "4rem" }}>
//         {/* backend */}
//         <div className="first-stack-left">
//           <h1 className="first-stack-heading">BACKEND</h1>
//         </div>
//         <div className="first-stack-right">
//           <div className="first-stack-single">
//             <FaNode className="skillIcon" />
//             <span className="skillName">Node.js</span>
//           </div>
//           <div className="first-stack-single">
//             <SiExpress className="skillIcon" />
//             <span className="skillName">Express.js</span>
//           </div>
//         </div>
//       </div>
//       <div className="first-stack-container" style={{ marginTop: "4rem" }}>
//         {/* TOOLS */}
//         <div className="first-stack-left">
//           <h1 className="first-stack-heading">TOOLs</h1>
//         </div>
//         <div className="first-stack-right">
//           <div className="first-stack-single">
//             <FaGitAlt className="skillIcon" />
//             <span className="skillName">Git</span>
//           </div>
//           <div className="first-stack-single">
//             <PiMicrosoftExcelLogoFill className="skillIcon" />
//             <span className="skillName">Excel</span>
//           </div>
//           <div className="first-stack-single">
//             <SiCanva className="skillIcon" />
//             <span className="skillName">Canva</span>
//           </div>
//           <div className="first-stack-single">
//             <SiAdobephotoshop className="skillIcon" />
//             <span className="skillName">AdobePhotoshop</span>
//           </div>
//           <div className="first-stack-single">
//             <SiAdobeillustrator className="skillIcon" />
//             <span className="skillName">AdobeIllustrator</span>
//           </div>
//           <div className="first-stack-single">
//             <FaMagnifyingGlass className="skillIcon" />
//             <span className="skillName">SEO</span>
//           </div>
//           <div className="first-stack-single">
//             <FaMeta className="skillIcon" />
//             <span className="skillName">Facebook Meta</span>
//           </div>
//           <div className="first-stack-single">
//             <FaMeta className="skillIcon" />
//             <span className="skillName">Facebook Ad Manager</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skill;


import React from "react";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiExpress,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiCanva,
} from "react-icons/si";

import { PiMicrosoftExcelLogoFill } from "react-icons/pi";

import "./Skill.css";
import {
  FaBootstrap,
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaMagnifyingGlass,
  FaMeta,
  FaNode,
  FaReact,
  FaRegSnowflake,
} from "react-icons/fa6";

const Skill = () => {
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
    <section
      className="stack-container"
      id="skills"
    >
      <motion.div 
        className="stact-heading-container"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <FaRegSnowflake className="stack-icon" />
        <h4 className="stack-heading">My Stack</h4>
      </motion.div>

      <motion.div 
        className="first-stack-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.div className="first-stack-left" variants={itemVariants}>
          <h1 className="first-stack-heading">FRONTEND</h1>
        </motion.div>
        <div className="first-stack-right">
          <motion.div className="first-stack-single" variants={itemVariants}>
            <SiJavascript className="skillIcon" />
            <span className="skillName">Javascript</span>
          </motion.div>
          <motion.div className="first-stack-single" variants={itemVariants}>
            <FaReact className="skillIcon" />
            <span className="skillName">React</span>
          </motion.div>
          <motion.div className="first-stack-single" variants={itemVariants}>
            <FaBootstrap className="skillIcon" />
            <span className="skillName">Bootstrap</span>
          </motion.div>
          <motion.div className="first-stack-single" variants={itemVariants}>
            <FaHtml5 className="skillIcon" />
            <span className="skillName">HTML</span>
          </motion.div>
          <motion.div className="first-stack-single" variants={itemVariants}>
            <FaCss3Alt className="skillIcon" />
            <span className="skillName">CSS</span>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        className="first-stack-container" 
        style={{ marginTop: "4rem" }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* backend */}
        <motion.div className="first-stack-left" variants={itemVariants}>
          <h1 className="first-stack-heading">BACKEND</h1>
        </motion.div>
        <div className="first-stack-right">
          <motion.div className="first-stack-single" variants={itemVariants}>
            <FaNode className="skillIcon" />
            <span className="skillName">Node.js</span>
          </motion.div>
          <motion.div className="first-stack-single" variants={itemVariants}>
            <SiExpress className="skillIcon" />
            <span className="skillName">Express.js</span>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        className="first-stack-container" 
        style={{ marginTop: "4rem" }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* TOOLS */}
        <motion.div className="first-stack-left" variants={itemVariants}>
          <h1 className="first-stack-heading">TOOLs</h1>
        </motion.div>
        <div className="first-stack-right">
          <motion.div className="first-stack-single" variants={itemVariants}>
            <FaGitAlt className="skillIcon" />
            <span className="skillName">Git</span>
          </motion.div>
          <motion.div className="first-stack-single" variants={itemVariants}>
            <PiMicrosoftExcelLogoFill className="skillIcon" />
            <span className="skillName">Excel</span>
          </motion.div>
          <motion.div className="first-stack-single" variants={itemVariants}>
            <SiCanva className="skillIcon" />
            <span className="skillName">Canva</span>
          </motion.div>
          <motion.div className="first-stack-single" variants={itemVariants}>
            <SiAdobephotoshop className="skillIcon" />
            <span className="skillName">AdobePhotoshop</span>
          </motion.div>
          <motion.div className="first-stack-single" variants={itemVariants}>
            <SiAdobeillustrator className="skillIcon" />
            <span className="skillName">AdobeIllustrator</span>
          </motion.div>
          <motion.div className="first-stack-single" variants={itemVariants}>
            <FaMagnifyingGlass className="skillIcon" />
            <span className="skillName">SEO</span>
          </motion.div>
          <motion.div className="first-stack-single" variants={itemVariants}>
            <FaMeta className="skillIcon" />
            <span className="skillName">Facebook Meta</span>
          </motion.div>
          <motion.div className="first-stack-single" variants={itemVariants}>
            <FaMeta className="skillIcon" />
            <span className="skillName">Facebook Ad Manager</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skill;
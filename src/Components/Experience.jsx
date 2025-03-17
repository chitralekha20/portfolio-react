// import React from "react";
// import "./Experience.css";
// import { FaRegSnowflake } from "react-icons/fa6";

// const Experience = () => {
//   return (
//     <section className="experience-container" id="experience">
//       <div className="stact-heading-container">
//         <FaRegSnowflake className="stack-icon" />
//         <h4 className="stack-heading">My Experience</h4>
//       </div>
//       <div>
//         <div>
//             <p className="experience-company">Geekworkx Consultancy Pvt Ltd</p>
//             <p className="experience-post">Digital Marketing Executive</p>
//             <p className="experience-company">June 2024 - Present</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;



import React from "react";
import { motion } from "framer-motion";
import "./Experience.css";
import { FaRegSnowflake } from "react-icons/fa6";

const Experience = () => {
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
    <section className="experience-container" id="experience">
      <motion.div 
        className="stact-heading-container"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <FaRegSnowflake className="stack-icon" />
        <h4 className="stack-heading">My Experience</h4>
      </motion.div>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.div variants={itemVariants}>
          <p className="experience-company">Geekworkx Consultancy Pvt Ltd</p>
          <p className="experience-post">Digital Marketing Executive</p>
          <p className="experience-company">June 2024 - Present</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;
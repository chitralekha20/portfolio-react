import React from "react";
import "./Profile.css";
import girlimg from "../assets/Chitralekha.png";
import resume from "../assets/ChitralekhaCV.pdf";
import { motion } from "framer-motion";

const Profile = () => {
  return (
    <motion.section
      className="profileContainer"
      id="profile"
      initial={{ opacity: 0, y: 50 }}  // Start hidden and slide down
      whileInView={{ opacity: 1, y: 0 }} // Fade in and slide up
      exit={{ opacity: 0, y: 50 }}        // Fade out and slide down
      transition={{ duration: 0.8 }}      // Smooth transition
      viewport={{ amount: 0.3 }}  
    >
      <div className="profileLeft">
        <div>
          <h1 className="Firstone">FRONTEND</h1>
          <h1 className="letter">DEVELOPER</h1>
        </div>
        <p className="Secondone">
          Hi! I'm Chitralekha, a passionate and detail-oriented MCA graduate
          with a strong foundation in frontend development. Proficient in HTML,
          CSS, JavaScript, and modern frameworks like React.js, with a focus on
          building responsive and user-friendly web applications. A quick
          learner, eager to apply problem-solving skills and stay updated with
          the latest web development trends.
        </p>
        <a href={resume} target="_blank" className="cv-phone">
          <button className="Thirdone">Download My CV From here</button>
        </a>
      </div>
      <div className="imgone">
        <img src={girlimg} alt="" />
      </div>
    </motion.section>
  );
};

export default Profile;

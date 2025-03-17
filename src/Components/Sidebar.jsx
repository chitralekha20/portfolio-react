import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Sidebar.css";
import { HiMenuAlt4 } from "react-icons/hi";
import { LiaTimesSolid } from "react-icons/lia";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div onClick={() => setIsOpen(!isOpen)} className="sidebar-container">
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <LiaTimesSolid className="sidebar-main-icon" />
          ) : (
            <HiMenuAlt4 className="sidebar-main-icon" />
          )}
        </motion.div>
      </div>

      <motion.div
        initial={{ x: 300 }}
        animate={{ x: isOpen ? 0 : 400 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="sidebar-menu"
      >
        <div className="sidebar-boxes">
          <div>
            <h2 className="social-head">Social</h2>
            <div className="social-links">
              <a
                className="social-link-side"
                href="https://github.com/chitralekha20"
              >
                Github
              </a>
              <a
                className="social-link-side"
                href="https://in.linkedin.com/in/chitralekha-mahanta-155326174"
              >
                Linkedin
              </a>
            </div>
          </div>
          <div>
            <h2 className="social-head">Menu</h2>
            <div className="social-links">
              <a href="#profile" className="social-link-side">Profile</a>
              <a href="#skills" className="social-link-side">Skills</a>
              <a href="#experience" className="social-link-side">Experience</a>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;

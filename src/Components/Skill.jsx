import React from "react";
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
  return (
    <section className="stack-container" id="skills">
      <div className="stact-heading-container">
        <FaRegSnowflake className="stack-icon" />
        <h4 className="stack-heading">My Stack</h4>
      </div>
      <div className="first-stack-container">
        <div className="first-stack-left">
          <h1 className="first-stack-heading">FRONTEND</h1>
        </div>
        <div className="first-stack-right">
          <div className="first-stack-single">
            <SiJavascript className="skillIcon" />
            <span className="skillName">Javascript</span>
          </div>
          <div className="first-stack-single">
            <FaReact className="skillIcon" />
            <span className="skillName">React</span>
          </div>
          <div className="first-stack-single">
            <FaBootstrap className="skillIcon" />
            <span className="skillName">Bootstrap</span>
          </div>
          <div className="first-stack-single">
            <FaHtml5 className="skillIcon" />
            <span className="skillName">HTML</span>
          </div>
          <div className="first-stack-single">
            <FaCss3Alt className="skillIcon" />
            <span className="skillName">CSS</span>
          </div>
        </div>
      </div>
      <div className="first-stack-container" style={{ marginTop: "4rem" }}>
        {/* backend */}
        <div className="first-stack-left">
          <h1 className="first-stack-heading">BACKEND</h1>
        </div>
        <div className="first-stack-right">
          <div className="first-stack-single">
            <FaNode className="skillIcon" />
            <span className="skillName">Node.js</span>
          </div>
          <div className="first-stack-single">
            <SiExpress className="skillIcon" />
            <span className="skillName">Express.js</span>
          </div>
        </div>
      </div>
      <div className="first-stack-container" style={{ marginTop: "4rem" }}>
        {/* TOOLS */}
        <div className="first-stack-left">
          <h1 className="first-stack-heading">TOOLs</h1>
        </div>
        <div className="first-stack-right">
          <div className="first-stack-single">
            <FaGitAlt className="skillIcon" />
            <span className="skillName">Git</span>
          </div>
          <div className="first-stack-single">
            <PiMicrosoftExcelLogoFill className="skillIcon" />
            <span className="skillName">Excel</span>
          </div>
          <div className="first-stack-single">
            <SiCanva className="skillIcon" />
            <span className="skillName">Canva</span>
          </div>
          <div className="first-stack-single">
            <SiAdobephotoshop className="skillIcon" />
            <span className="skillName">AdobePhotoshop</span>
          </div>
          <div className="first-stack-single">
            <SiAdobeillustrator className="skillIcon" />
            <span className="skillName">AdobeIllustrator</span>
          </div>
          <div className="first-stack-single">
            <FaMagnifyingGlass className="skillIcon" />
            <span className="skillName">SEO</span>
          </div>
          <div className="first-stack-single">
            <FaMeta className="skillIcon" />
            <span className="skillName">Facebook Meta</span>
          </div>
          <div className="first-stack-single">
            <FaMeta className="skillIcon" />
            <span className="skillName">Facebook Ad Manager</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;

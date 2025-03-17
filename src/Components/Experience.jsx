import React from "react";
import "./Experience.css";
import { FaRegSnowflake } from "react-icons/fa6";

const Experience = () => {
  return (
    <section className="experience-container" id="experience">
      <div className="stact-heading-container">
        <FaRegSnowflake className="stack-icon" />
        <h4 className="stack-heading">My Experience</h4>
      </div>
      <div>
        <div>
            <p className="experience-company">Geekworkx Consultancy Pvt Ltd</p>
            <p className="experience-post">Digital Marketing Executive</p>
            <p className="experience-company">June 2024 - Present</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;

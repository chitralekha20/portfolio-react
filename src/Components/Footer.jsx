import React from "react";
import "./Footer.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer-container">
      <p className="footer-subtext">Have a project in mind?</p>
      <a className="footer-mail" href="mailto:chitralekhamahanta678@gmail.com">
        chitralekhamahanta678@gmail.com
      </a>
      <p className="footer-subtext" style={{marginTop:"1rem"}}>Copyright @{year}</p>
    </footer>
  );
};

export default Footer;

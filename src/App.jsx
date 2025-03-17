import React from "react";
import Profile from "./Components/Profile";
import Skill from "./Components/Skill";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import Mail from "./Components/Mail";
import Sidebar from "./Components/Sidebar";
import ScrollBar from "./Components/ScrollBar";

const App = () => {
  return (
    <>
      <ScrollBar />
      <Sidebar />
      <Profile />
      <Skill />
      <Experience />
      <Footer />
      <Mail />
    </>
  );
};

export default App;

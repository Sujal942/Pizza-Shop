import React from "react";
import "./App.css";
import BackgrounLayer from "./components/landingPage/BackgrounLayer";
import LandingPage from "./components/landingPage/LandingPage";
import PageTwo from "./components/PageTwo";

const App = () => {
  return (
    <>
      <BackgrounLayer />
      <LandingPage />
      <PageTwo />
    </>
  );
};

export default App;

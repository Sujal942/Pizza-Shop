import React from "react";
import "./App.css";
import LandingPage from "./Components/landingPage/LandingPage";
// import AdminRegistrationPage from "./Components/admin/AdminRegistrationPage";
// import UserRegister from "./Components/user/UserRegister";
import AboutPage from "./Components/AboutPage";
import ContactPage from "./Components/ContactPage";
import Menu from "./Components/Menu";

const App = () => {
  return (
    <>
      <LandingPage />
      {/* <AdminRegistrationPage /> */}
      {/* <UserRegister /> */}
      <Menu />
      <AboutPage />
      <ContactPage />
    </>
  );
};

export default App;

import React from "react";
import "./App.css";
import LandingPage from "./Components/landingPage/LandingPage";
import AboutPage from "./Components/AboutPage";
import ContactPage from "./Components/ContactPage";
import Menu from "./Components/Menu";
// import AdminRegistrationPage from "./Components/admin/AdminRegistrationPage";
// import UserRegister from "./Components/user/UserRegister";

const App = () => {
  return (
    <>
      <LandingPage />
      <Menu />
      <AboutPage />
      <ContactPage />
      {/* <AdminRegistrationPage /> */}
      {/* <UserRegister /> */}
    </>
  );
};

export default App;

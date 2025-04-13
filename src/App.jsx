import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";

import "./App.scss";
import "aos/dist/aos.css";

// Components
import Header from "./components/header/Header";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";
import Logout from "./components/auth/Logout";

// Pages
import HomePage from "./pages/homepage/Homepage";
import Registration from "./pages/registration/Registration";
import LoginPage from "./pages/loginpage/Loginpage";
import PetRegisterPage from "./pages/petregister/PetRegisterPage";
import AnimalPage from "./pages/animalpage/AnimalPage";
import PetStoriesPage from "./pages/petstories/PetStoriesPage";
import Contact from "./components/ask-about/Contact";

// Dashboards
import VolunteerDashboard from "./components/dashboard/VolunteerDashboard";
import ShelterDashboard from "./components/dashboard/ShelterDashboard";

function App() {
  const location = useLocation();

  const hideHeaderRoutes = ["/cabinet"];

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="app-container">
      <ScrollToTop />
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/petregister" element={<PetRegisterPage />} />
        <Route path="/animalpage" element={<AnimalPage />} />
        <Route path="/petstories" element={<PetStoriesPage />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/volunteer-dashboard" element={<VolunteerDashboard />} />
        <Route path="/shelter-dashboard" element={<ShelterDashboard />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

import React, { useEffect } from "react";
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import Registration from './pages/registration/Registration';
import Header from './components/header/Header';
import { useLocation } from 'react-router-dom';
import LoginPage from './pages/loginpage/Loginpage';
import PetRegisterPage from './pages/petregister/PetRegisterPage';
import AnimalPage from './pages/animalpage/AnimalPage';
import PetStoriesPage from './pages/petstories/PetStoriesPage';
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  const location = useLocation();

  // Список маршрутів, де Header не показується або замінюється іншим
  const hideHeaderRoutes = ['/cabinet']; // або ['/login', '/register'] залежно від потреб

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className='app-container'>
      <ScrollToTop />
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/petregister" element={<PetRegisterPage/>} />
        <Route path="/animalpage" element={<AnimalPage/>} />
        <Route path="/petstories" element={<PetStoriesPage/>} />
        {/* <Route path="/cabinet" element={<CabinetHeader />} /> ← або інша логіка */}
      </Routes>
    </div>
  );
}

export default App;

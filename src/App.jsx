import './App.scss';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import Registration from './pages/registration/Registration';
import Header from './components/header/Header';
import { useLocation } from 'react-router-dom';
import LoginPage from './pages/loginpage/Loginpage';
import PetRegisterPage from './pages/petregister/PetRegisterPage';
import AnimalPage from './pages/animalpage/AnimalPage';

function App() {
  const location = useLocation();

  // Список маршрутів, де Header не показується або замінюється іншим
  const hideHeaderRoutes = ['/cabinet']; // або ['/login', '/register'] залежно від потреб

  return (
    <div className='app-container'>
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/petregister" element={<PetRegisterPage/>} />
        <Route path="/animalpage" element={<AnimalPage/>} />
        {/* <Route path="/cabinet" element={<CabinetHeader />} /> ← або інша логіка */}
      </Routes>
    </div>
  );
}

export default App;

import './App.scss';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import Registration from './pages/registration/Registration';
import LoginPage from './pages/loginpage/LoginPage';
import Header from './components/header/Header';
import { useLocation } from 'react-router-dom';

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
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/cabinet" element={<CabinetHeader />} /> ← або інша логіка */}
      </Routes>
    </div>
  );
}

export default App;

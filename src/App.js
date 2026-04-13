import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import MonthSelector from './components/MonthSelector';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Ingresos from './pages/Ingresos';
import GastosFijos from './pages/GastosFijos';
import PresupuestoVariable from './pages/PresupuestoVariable';
import Tarjetas from './pages/Tarjetas';
import FinanzasPadres from './pages/FinanzasPadres';
import Ahorros from './pages/Ahorros';
import './index.css';

function App() {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [currentMonth, setCurrentMonth] = useState(() => {
    const now = new Date();
    return { month: now.getMonth(), year: now.getFullYear() };
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');

  if (!user) {
    return <Login onLogin={setUser} theme={theme} toggleTheme={toggleTheme} />;
  }

  return (
    <Router>
      <div className="app">
        <Header user={user} onLogout={() => setUser(null)} theme={theme} toggleTheme={toggleTheme} />
        <MonthSelector currentMonth={currentMonth} setCurrentMonth={setCurrentMonth} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard currentMonth={currentMonth} />} />
            <Route path="/ingresos" element={<Ingresos currentMonth={currentMonth} />} />
            <Route path="/gastos-fijos" element={<GastosFijos currentMonth={currentMonth} />} />
            <Route path="/presupuesto" element={<PresupuestoVariable currentMonth={currentMonth} />} />
            <Route path="/tarjetas" element={<Tarjetas currentMonth={currentMonth} />} />
            <Route path="/padres" element={<FinanzasPadres currentMonth={currentMonth} />} />
            <Route path="/ahorros" element={<Ahorros currentMonth={currentMonth} />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
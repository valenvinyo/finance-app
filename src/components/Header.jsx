import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const menuItems = [
  { path: '/', label: 'Inicio' },
  { path: '/ingresos', label: 'Ingresos' },
  { path: '/gastos-fijos', label: 'Gastos Fijos' },
  { path: '/presupuesto', label: 'Presupuesto Variable' },
  { path: '/tarjetas', label: 'Tarjetas de Crédito' },
  { path: '/padres', label: 'Finanzas con Mis Padres' },
  { path: '/ahorros', label: 'Ahorros' },
];

export default function Header({ onLogout, theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNav = (path) => { setMenuOpen(false); navigate(path); };
  const handleLogout = () => { setMenuOpen(false); onLogout(); };

  return (
    <>
      <header className="header">
        <span className="header-logo">Finance App</span>
        <div className="header-actions">
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <button className="hamburger" onClick={() => setMenuOpen(true)}>☰</button>
        </div>
      </header>

      {menuOpen && <div className="menu-overlay" onClick={() => setMenuOpen(false)} />}

      <nav className={`side-menu ${menuOpen ? 'open' : ''}`}>
        <div className="side-menu-header">
          <span className="side-menu-title">Menú</span>
          <button className="close-menu" onClick={() => setMenuOpen(false)}>✕</button>
        </div>
        <ul className="menu-list">
          {menuItems.map(item => (
            <li key={item.path}>
              <button className="menu-item" onClick={() => handleNav(item.path)}>
                {item.label}
              </button>
            </li>
          ))}
          <li className="menu-divider" />
          <li><button className="menu-item menu-item--danger" onClick={handleLogout}>Cerrar sesión</button></li>
        </ul>
      </nav>
    </>
  );
}
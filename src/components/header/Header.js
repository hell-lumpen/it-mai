import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import '../../App.css'

const Header = () => {
  const location = useLocation();

  return (
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <nav className="desktop-menu">
          <ul className="menu">
            <li className={`menu-item ${location.pathname === '/' ? 'active' : ''}`}>
              <Link to="/">Об институте</Link>
            </li>
            <li className={`menu-item ${location.pathname === '/bachelors/cs' ? 'active' : ''}`}>
              <Link to="/bachelors/cs">Компьютерные науки и прикладная математика</Link>
            </li>
            <li className={`menu-item ${location.pathname === '/bachelors/fi' ? 'active' : ''}`}>
              <Link to="/bachelors/fi">Фундаментальная информатика и информационные технологии</Link>
            </li>
            <li className={`menu-item ${location.pathname === '/admission/application' ? 'active' : ''}`}>
              <Link to="/admission/application">Поступление 2023</Link>
            </li>
          </ul>
        </nav>
        <nav className="mobile-menu">
          <ul className="menu">
            <li className={`menu-item ${location.pathname === '/' ? 'active' : ''}`}>
              <Link to="/">Об институте</Link>
            </li>
            <li className={`menu-item ${location.pathname === '/computer-science' ? 'active' : ''}`}>
              <Link to="/computer-science">Компьютерные науки и прикладная математика</Link>
            </li>
            <li className={`menu-item ${location.pathname === '/fundamentals' ? 'active' : ''}`}>
              <Link to="/fundamentals">Фундаментальная информатика и информационные технологии</Link>
            </li>
            <li className={`menu-item ${location.pathname === '/admission/application' ? 'active' : ''}`}>
              <Link to="/admission/application">Подать заявку</Link>
            </li>
          </ul>
        </nav>
      </header>
  );
};

export default Header;
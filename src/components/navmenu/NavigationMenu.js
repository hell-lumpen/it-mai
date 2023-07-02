import React, { useState } from 'react';
import './NavigationMenu.css'; // Подключаем файл со стилями

const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
      <nav className="navigation-menu">
        <div className="logo">Logo</div>
        {/* Кнопка бургер-меню для узких экранов */}
        <div className="burger-menu" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? 'open' : ''}`} />
          <div className={`bar ${isOpen ? 'open' : ''}`} />
          <div className={`bar ${isOpen ? 'open' : ''}`} />
        </div>
        {/* Навигационное меню */}
        <ul className={`menu ${isOpen ? 'open' : ''}`}>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>
  );
};

export default NavigationMenu;

import React from 'react';
import './Maintenance.css';
import logo from "../../assets/images/logo.png";

const MaintenancePage = () => {
  return (
      <div className="maintenance-container">
        <div className="maintenance-content">
          <img src={logo} alt="Logo" className="maintenance-logo" />
          <h1 className="maintenance-heading">Технические работы</h1>
          <p className="maintenance-text">
            В данный момент наш сайт находится на техническом обслуживании. Скоро тут появится Дора.
          </p>
        </div>
      </div>
  );
};

export default MaintenancePage;
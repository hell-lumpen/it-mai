import React from 'react';
import './Marquee.css';

const Marquee = ({ logos }) => {
  return (
      <div className="marquee-container">
        <div className="marquee">
          {logos.map((logo, index) => (
              <div key={index} className="marquee-item">
                <img src={logo} alt={`Logo ${index + 1}`}/>
              </div>
          ))}{logos.map((logo, index) => (
              <div key={index} className="marquee-item">
                <img src={logo} alt={`Logo ${index + 1}`}/>
              </div>
          ))}{logos.map((logo, index) => (
              <div key={index} className="marquee-item">
                <img src={logo} alt={`Logo ${index + 1}`}/>
              </div>
          ))}{logos.map((logo, index) => (
              <div key={index} className="marquee-item">
                <img src={logo} alt={`Logo ${index + 1}`}/>
              </div>
          ))}{logos.map((logo, index) => (
              <div key={index} className="marquee-item">
                <img src={logo} alt={`Logo ${index + 1}`}/>
              </div>
          ))}
        </div>
      </div>
  );
};

export default Marquee;
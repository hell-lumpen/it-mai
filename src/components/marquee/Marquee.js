import React from 'react';
import './Marquee.css';

const Marquee = ({ logos }) => {
  console.log("----------------------------------------------" + logos);
  return (
      <div className="marquee-container">
        <div className="marquee">
          {logos.map((logo, index) => (
              <div key={index} className="marquee-item">
                <img src={logo} alt={`Logo ${index + 1}`} style={{borderRadius: '5px'}}/>
              </div>
          ))}{logos.map((logo, index) => (
              <div key={index} className="marquee-item">
                <img src={logo} alt={`Logo ${index + 1}`} style={{borderRadius: '5px'}}/>
              </div>
          ))}{logos.map((logo, index) => (
              <div key={index} className="marquee-item">
                <img src={logo} alt={`Logo ${index + 1}`} style={{borderRadius: '5px'}}/>
              </div>
          ))}{logos.map((logo, index) => (
              <div key={index} className="marquee-item">
                <img src={logo} alt={`Logo ${index + 1}`} style={{borderRadius: '5px'}}/>
              </div>
          ))}{logos.map((logo, index) => (
              <div key={index} className="marquee-item">
                <img src={logo} alt={`Logo ${index + 1}`} style={{borderRadius: '5px'}}/>
              </div>
          ))}{logos.map((logo, index) => (
              <div key={index} className="marquee-item">
                <img src={logo} alt={`Logo ${index + 1}`} style={{borderRadius: '5px'}}/>
              </div>
          ))}
        </div>
      </div>
  );
};

export default Marquee;
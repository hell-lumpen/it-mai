import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import AnimatedNumber from 'animated-number-react';
import './AnimatedNumberComponent.css';

const AnimatedNumberComponent = ({ id, value, duration, description }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibilityChange = (isVisible) => {
    if (isVisible) {
      setIsVisible(true);
    }
  };

  return (
      <VisibilitySensor onChange={handleVisibilityChange}>
        <div id={id} className={`animated-number-container`}>
          <div className="animated-number-content">
            <div className="animated-number-number">
              {isVisible ? (
                  <AnimatedNumber
                      value={value}
                      duration={duration}
                      formatValue={(value) => value.toFixed(0)}
                      delay={500}
                      isVisible={true}
                  />
              ) : 0}
            </div>
            <div className="animated-number-description">&nbsp;&nbsp;{description}</div>
          </div>
        </div>
      </VisibilitySensor>
  );
};

export default AnimatedNumberComponent;
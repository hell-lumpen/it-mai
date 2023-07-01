import React, { useState, useEffect, useRef } from 'react';
import './NumberCounter.css';

const NumberCounter = ({ targetValue }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const targetRef = useRef(null);

  const animateNumber = () => {
    const start = 0;
    const end = targetValue;
    const duration = 2000; // Продолжительность анимации в миллисекундах
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    let timer;

    const updateNumber = () => {
      setCurrentValue((prevValue) => prevValue + increment);

      if ((increment > 0 && currentValue >= end) || (increment < 0 && currentValue <= end)) {
        clearInterval(timer);
      }
    };

    timer = setInterval(updateNumber, stepTime);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Порог появления в видимой области (от 0 до 1)
    };

    const observer = new IntersectionObserver((entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        animateNumber();
        observer.unobserve(targetRef.current);
      }
    }, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return (
      <div ref={targetRef} className="number-counter">
        {currentValue}
      </div>
  );
};

export default NumberCounter;
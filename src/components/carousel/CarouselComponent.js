import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './CarouselComponent.css'; // Импортируйте файл со стилями

const CarouselComponent = ({ items, settings }) => {
  return (
      <Carousel {...settings}>
        {items.map((item, index) => (
            <div key={index} className="carousel-item">
              <div className="carousel-image">
                {item.image && <img src={item.image} alt={item.alt} />}
              </div>
              <div className="carousel-content">
                {item.title && <h2>{item.title}</h2>}
                {item.description && <p>{item.description}</p>}
                {item.link && <a href={item.link}>Подробнее</a>}
              </div>
            </div>
        ))}
      </Carousel>
  );
};

export default CarouselComponent;
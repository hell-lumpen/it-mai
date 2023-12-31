import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import '../../App.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './CarouselComponent.css'; // Импортируйте файл со стилями

const CarouselComponent = ({ items, settings }) => {
  return (
      <div className='carousel'>
      <Carousel {...settings}>
            {items.map((item, index) => (
            <div key={index} className="carousel-item">
              {item.image ? (
                  <div className="carousel-image">
                    {item.image && <img src={item.image} alt={item.alt} />}
                  </div>
              ) : null}
              <div className="carousel-content">
                {item.title && <h3 className='section-title'>{item.title}</h3>}
                {item.description && <p className='section-text'>{item.description}</p>}
                {item.link && <a href={item.link} style={{textDecoration: 'none', color: '#007ACD'}} target="_blank" rel="noopener noreferrer">Подробнее</a>}
              </div>
            </div>
        ))}
      </Carousel>
      </div>
  );
};

export default CarouselComponent;
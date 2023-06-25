import React from 'react';
import { useInView } from 'react-intersection-observer';
import './HighLight.css';

const Highlight = ({ data }) => {
  const getTileCount = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 480) {
      return 1; // Show 1 tile per row on screens up to 480px wide
    } else {
      return 2;
    }
  };

  const tileCount = getTileCount();

  const handleHighlightClick = (link) => {
    if (link) {
      window.location.href = link;
    }
  };

  return (
      <div className="highlights-container">
        {data.map(({ title, description, link }, index) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const [ref, inView] = useInView({
            triggerOnce: true, // Trigger animation only once
          });

          return (
              <div
                  key={index}
                  className={`highlight ${tileCount === 1 ? 'single' : 'double'} ${
                      inView ? 'highlight-appear' : ''
                  }`}
                  ref={ref}
                  onClick={() => handleHighlightClick(link)}
                  style={link ? { cursor: 'pointer' } : null}
              >
                <div className="highlight-content">
                  <h3 className="highlight-title">{title}</h3>
                  <p className="highlight-description">{description}</p>
                </div>
              </div>
          );
        })}
      </div>
  );
};

export default Highlight;
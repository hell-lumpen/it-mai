import React, {useEffect} from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import './HighLight.css';

const Highlight = ({ data, highlightWidth }) => {
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
          const controls = useAnimation();

          // eslint-disable-next-line react-hooks/rules-of-hooks
          const [ref, inView] = useInView({
            triggerOnce: true, // Trigger animation only once
          });

          const highlightStyle = {
            width: highlightWidth, // Set the width style based on the highlightWidth prop
            cursor: link ? 'pointer' : null, // Set the cursor style if link is provided
          };

          const variants = {
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          };

          // Animate the highlight when it comes into view
          // eslint-disable-next-line react-hooks/rules-of-hooks
          useEffect(() => {
            if (inView) {
              controls.start('visible');
            }
          }, [controls, inView]);

          return (
              <motion.div
                  key={index}
                  className={`highlight ${tileCount === 1 ? 'single' : 'double'}`}
                  ref={ref}
                  onClick={() => handleHighlightClick(link)}
                  style={highlightStyle}
                  initial="hidden"
                  animate={controls}
                  variants={variants}
              >
                <div className="highlight-content-h">
                  <h3 className="highlight-title">{title}</h3>
                  <p className="highlight-description">{description}</p>
                </div>
              </motion.div>
          );
        })}
      </div>
  );
};

export default Highlight;
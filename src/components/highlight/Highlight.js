import React, { useEffect } from 'react';
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

          const transition = {
            duration: 0.3,
            delay: index * 0.2, // Добавляем задержку на основе индекса элемента
          };

          // Animate the highlight when it comes into view
          // eslint-disable-next-line react-hooks/rules-of-hooks
          useEffect(() => {
            if (inView) {
              controls.start('visible');
            }
          }, [controls, inView]);

          const formatDescription = (description) => {
            const parts = description.split(/(<span>[^<]*<\/span>|<br\s*\/?>)/g);

            return parts.map((part, index) => {
              if (part === '<br/>' || part === '<br>') {
                return <br key={index} />;
              } else if (part.startsWith('<span>') && part.endsWith('</span>')) {
                return (
                    <span
                        key={index}
                        style={{ color: '#6ed2ff', fontFamily: 'GothamPro-Bold, sans-serif'}}
                        dangerouslySetInnerHTML={{ __html: part }}
                    />
                );
              } else {
                return <span key={index}>{part}</span>;
              }
            });
          };

          return (
              <motion.div
                  key={index}
                  className={`highlight ${
                      tileCount === 1 ? 'single' : 'double'
                  }`}
                  ref={ref}
                  onClick={() => handleHighlightClick(link)}
                  style={highlightStyle}
                  initial="hidden"
                  animate={controls}
                  variants={variants}
                  transition={transition} // Используем transition с задержкой
              >
                <div className="highlight-content-h">
                  <h3 className="highlight-title">{title}</h3>
                  <p className="highlight-description">
                    {formatDescription(description)}
                  </p>
                </div>
              </motion.div>
          );
        })}
      </div>
  );
};

export default Highlight;
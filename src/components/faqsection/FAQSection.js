import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './FAQSection.css';
import {useInView} from "react-intersection-observer";

const FAQSection = ({ faqs }) => {
  const [selectedFaq, setSelectedFaq] = useState(null);

  const handleFaqClick = (index) => {
    if (selectedFaq === index) {
      setSelectedFaq(null);
    } else {
      setSelectedFaq(index);
    }
  };

  return (
      <div className="faq-section">
        {faqs.map((faq, index) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const [ref, inView] = useInView({
            triggerOnce: true,
            rootMargin: '-20px 0px', // Регулируйте этот отступ по своему усмотрению
          });

          const faqVariants = {
            hidden: { opacity: 0, y: -10 },
            visible: { opacity: 1, y: 0 },
          };

          return (
              <motion.div
                  className="faq-item"
                  key={index}
                  ref={ref}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  variants={faqVariants}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div
                    className={`faq-question ${selectedFaq === index ? 'active' : ''}`}
                    onClick={() => handleFaqClick(index)}
                >
                  {faq.question}
                  <span className="faq-arrow">{selectedFaq === index ? '▲' : '▼'}</span>
                </div>
                {selectedFaq === index && (
                    <p className="faq-answer" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                )}
              </motion.div>
          );
        })}
      </div>
  );
};

export default FAQSection;
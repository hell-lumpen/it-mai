import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './FAQSection.css';

const FAQSection = ({ faqs }) => {
  const [selectedFaq, setSelectedFaq] = useState(null);

  const handleFaqClick = (index) => {
    if (selectedFaq === index) {
      setSelectedFaq(null);
    } else {
      setSelectedFaq(index);
    }
  };

  const faqVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
      <div className="faq-section">
        {faqs.map((faq, index) => (
            <motion.div
                className="faq-item"
                key={index}
                initial="hidden"
                animate="visible"
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
              {selectedFaq === index && <p className="faq-answer">{faq.answer}</p>}
            </motion.div>
        ))}
      </div>
  );
};

export default FAQSection;
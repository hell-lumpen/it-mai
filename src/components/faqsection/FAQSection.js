import React, { useState } from 'react';
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

  return (
      <div className="faq-section">
        {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <div
                  className={`faq-question ${selectedFaq === index ? 'active' : ''}`}
                  onClick={() => handleFaqClick(index)}
              >
                {faq.question}
                <span className="faq-arrow">
              {selectedFaq === index ? '▲' : '▼'}
            </span>
              </div>
              {selectedFaq === index && <p className="faq-answer">{faq.answer}</p>}
            </div>
        ))}
      </div>
  );
};

export default FAQSection;
import React, { useState } from 'react';
import './Whatmakesus.css';
import iconImage from '../assets/Whatmakesus.png';

const Whatmakesus = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    {
      title: "Learns, Then Recommends",
      description: "Explainable AI That Adapts To Your Data And Shows Its Sources."
    },
    {
      title: "Zero-Training Onboarding",
      description: ""
    },
    {
      title: "Scale Without Chaos",
      description: ""
    },
    {
      title: "Learns, Then Recommends",
      description: ""
    },
    {
      title: "Future-Proof By Design",
      description: ""
    },
    {
      title: "Human + AI Support",
      description: ""
    },
    {
      title: "From Setup To Audit",
      description: ""
    }
  ];

  return (
    <div className="whatmakesus-container">
      <div className="whatmakesus-content">
        <div className="whatmakesus-header">
          <h2 className="whatmakesus-title">
            What Makes Us<br />Different?
          </h2>
          <button className="learn-more-btn">
            Learn More About Us
            <span className="arrow">›</span>
          </button>
        </div>

        <div className="whatmakesus-divider"></div>

        <div className="whatmakesus-features">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`feature-item ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              {index === activeIndex && (
                <div className="feature-icon">
                  <img src={iconImage} alt="Feature icon" />
                </div>
              )}
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                {index === activeIndex && feature.description && (
                  <p className="feature-description">{feature.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Whatmakesus;
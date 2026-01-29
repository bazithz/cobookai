import React from 'react';
import './Features.css';
import chipImage from '../assets/Chip.png';
import enterpriseIcon from '../assets/enterprise.png';
import realtimeIcon from '../assets/realtime.png';
import frictionlessIcon from '../assets/frictionless.png';
import aiIcon from '../assets/ai.png';

const Features = () => {
  const features = [
    {
      icon: enterpriseIcon,
      title: "Enterprise Security",
      description: "Encryption, RBAC, Audit Logs",
      position: "top-left"
    },
    {
      icon: realtimeIcon,
      title: "Real-Time Reporting",
      description: "Live P&L, Cash Flow, KPIs",
      position: "top-right"
    },
    {
      icon: frictionlessIcon,
      title: "Frictionless Integrations",
      description: "ERP, POS, E-Commerce, Banks",
      position: "bottom-left"
    },
    {
      icon: aiIcon,
      title: "AI Insights",
      description: "Trends, Anomalies, Actions",
      position: "bottom-right"
    }
  ];

  return (
    <div className="features-main-container">
      {/* Hero Section */}
      <div className="features-hero-section">
        <h1 className="features-hero-title">
          Enhance How Businesses<br />See Their Numbers
        </h1>
        <p className="features-hero-description">
          At CoBook, We Believe Accounting Should Be Effortless And Intelligent. Founded By Finance And AI
          Experts, CoBook Automates Complex Tasks Using Machine Learning — Reducing Errors And Saving Time.
        </p>
        <div className="features-hero-buttons">
          <button className="features-btn-secondary">
            Learn More
          </button>
          <button className="features-btn-primary">
            Get Started Now
            <span className="features-arrow">→</span>
          </button>
        </div>
      </div>

      {/* Features Hub */}
      <div className="features-hub-container">
        <div className="features-cards-grid">
          {/* Map through features with appropriate positioning */}
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`features-card-wrapper features-position-${feature.position}`}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={`${index * 0.2}s`}
              />
            </div>
          ))}
          
          {/* Center Chip Image */}
          <div className="features-chip-container">
            <div className="features-chip-wrapper">
              <img 
                src={chipImage}
                alt="CoBook Platform Core"
                className="features-chip-image"
              />
              <div className="features-chip-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description, delay }) => {
  return (
    <div 
      className="features-single-card"
      style={{ animationDelay: delay }}
    >
      {/* Icon and Title on Same Line */}
      <div className="features-card-icon-wrapper">
        <div className="features-card-icon-container">
          <img src={icon} alt={title} className="features-card-icon-image" />
        </div>
        <h3 className="features-card-title">
          {title}
        </h3>
      </div>
      
      {/* Description Below */}
      <p className="features-card-description">
        {description}
      </p>

      <div className="features-card-corner-accent"></div>
      <div className="features-card-glow-effect"></div>
    </div>
  );
};

export default Features;
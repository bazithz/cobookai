import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Hero.css';
import logo from "../assets/logo.png";

const Hero = () => {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <section className="whychooseus-section">
      {/* Background Image */}
      <div className="whychooseus-background"></div>

      {/* Navbar */}
      <nav className="whychooseus-navbar">
        <div className="whychooseus-navbar-container-wrapper">
          <div className="whychooseus-navbar-container">
            {/* Logo */}
             <Link to="/"> <img src={logo} alt="Co-book Logo" className="whychooseus-logo-image"/>
  </Link>

            {/* Mobile Menu Toggle */}
            <button 
              className="whychooseus-mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`whychooseus-hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>

            {/* Navigation Links */}
            <div className={`whychooseus-navbar-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
              <a href="#" className="whychooseus-nav-link">Why Choose Us</a>
              <a href="#technology" className="whychooseus-nav-link">Technology</a>
              <a href="#about-us" className="whychooseus-nav-link">About Us</a>
              
              {/* Dropdown */}
              <div 
                className="whychooseus-nav-dropdown"
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
              >
                <button className="whychooseus-nav-link whychooseus-dropdown-trigger">
                  Our solutions
                  <svg 
                    className={`whychooseus-dropdown-arrow ${isSolutionsOpen ? 'open' : ''}`}
                    width="12" 
                    height="8" 
                    viewBox="0 0 12 8" 
                    fill="none"
                  >
                    <path 
                      d="M1 1.5L6 6.5L11 1.5" 
                      stroke="currentColor" 
                      strokeWidth="1.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                
                {isSolutionsOpen && (
                  <div className="whychooseus-dropdown-menu">
                    
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="whychooseus-navbar-actions">
              <a href="#login" className="whychooseus-btn-login">Login</a>
              <a href="#get-started" className="whychooseus-btn-get-started">
                <span>Get Started Now</span>
                <svg 
                  className="whychooseus-btn-arrow" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 16 16" 
                  fill="none"
                >
                  <path 
                    d="M3.33334 8H12.6667M12.6667 8L8.00001 3.33334M12.6667 8L8.00001 12.6667" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Banner Content */}
      <div className="whychooseus-banner-content">
        {/* AI Badge */}
        <div className="whychooseus-ai-badge">
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 20 20" 
            fill="none"
            className="whychooseus-ai-icon"
          >
            <path 
              d="M10 2L12.5 7.5L18 10L12.5 12.5L10 18L7.5 12.5L2 10L7.5 7.5L10 2Z" 
              fill="currentColor"
            />
          </svg>
          <span>Why Choose Us</span>
        </div>

        {/* Main Heading */}
        <h1 className="whychooseus-banner-title">
          We build finance that
          <br />
          Automates, explains,
          <br />
          predicts, and protects.
        </h1>

        {/* Description */}
        <p className="whychooseus-banner-description">
          Join the waitlist to be among the first to access Co-Book.ai. We'll
          <br />
          reach out when your early access slot is ready.
        </p>

        {/* CTA Buttons */}
        <div className="whychooseus-banner-actions">
          <button className="whychooseus-btn-demo">Book a Demo Call</button>
          <button className="whychooseus-btn-waitlist">
            Join Waitlist
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 16 16" 
              fill="none"
              className="whychooseus-btn-icon"
            >
              <path 
                d="M3.33334 8H12.6667M12.6667 8L8.00001 3.33334M12.6667 8L8.00001 12.6667" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
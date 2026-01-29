import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Hero.css';

const Hero = () => {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <section className="hero-section">
      {/* Background Image */}
      <div className="hero-background"></div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container-wrapper">
          <div className="navbar-container">
            {/* Logo */}
            
<div className="navbar-logo">
  <Link to="/">
    <img src="/src/assets/logo.png" alt="Co-book Logo" className="logo-image"/>
  </Link></div>

            {/* Mobile Menu Toggle */}
            <button 
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>

            {/* Navigation Links */}
            <div className={`navbar-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
              <a href="/whychooseus" className="nav-link">Why Choose Us</a>
              <a href="#technology" className="nav-link">Technology</a>
              <a href="#about-us" className="nav-link">About Us</a>
              
              {/* Dropdown */}
              <div 
                className="nav-dropdown"
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
              >
                <button className="nav-link dropdown-trigger">
                  Our solutions
                  <svg 
                    className={`dropdown-arrow ${isSolutionsOpen ? 'open' : ''}`}
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
                  <div className="dropdown-menu">
                    
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="navbar-actions">
              <a href="#login" className="btn-login">Login</a>
              <a href="#get-started" className="btn-get-started">
                <span>Get Started Now</span>
                <svg 
                  className="btn-arrow" 
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
      <div className="banner-content">
        {/* AI Badge */}
        <div className="ai-badge">
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 20 20" 
            fill="none"
            className="ai-icon"
          >
            <path 
              d="M10 2L12.5 7.5L18 10L12.5 12.5L10 18L7.5 12.5L2 10L7.5 7.5L10 2Z" 
              fill="currentColor"
            />
          </svg>
          <span>AI Powered Accounting</span>
        </div>

        {/* Main Heading */}
        <h1 className="banner-title">
          Get Early Access
          <br />
          To Co-Book.Ai
        </h1>

        {/* Description */}
        <p className="banner-description">
          Join the waitlist to be among the first to access Co-Book.ai. We'll
          <br />
          reach out when your early access slot is ready.
        </p>

        {/* CTA Buttons */}
        <div className="banner-actions">
          <button className="btn-demo">Book a Demo Call</button>
          <button className="btn-waitlist">
            Join Waitlist
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 16 16" 
              fill="none"
              className="btn-icon"
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
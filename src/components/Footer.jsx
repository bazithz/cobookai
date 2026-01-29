import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* LEFT SIDE */}
        <div className="footer-left">
          <h2 className="footer-title">
            Redefined Your partner in <br />
            AI-driven financial clarity
          </h2>

          {/* Newsletter */}
          <div className="footer-newsletter">
            <input
              type="email"
              placeholder="Enter your email here"
              className="footer-input"
            />

            <button className="footer-subscribe-btn">
              Subscribe Now <span>›</span>
            </button>
          </div>
        </div>

        {/* RIGHT SIDE LINKS */}
        <div className="footer-links">
          {/* Column 1 */}
          <div className="footer-column">
            <h4 className="footer-heading">Menu</h4>
            <a href="#">Why Choose Us</a>
            <a href="#">Our Features</a>
            <a href="#">Our solutions</a>
            <a href="#">Resources</a>
            <a href="#">Company</a>
          </div>

          {/* Column 2 */}
          <div className="footer-column">
            <h4 className="footer-heading">Support</h4>
            <a href="#">FAQ</a>
            <a href="#">Contact Us</a>
            <a href="#">Customer Services</a>
          </div>

          {/* Column 3 */}
          <div className="footer-column">
            <h4 className="footer-heading">Other</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
      <div className="footer-brand">
  CO-BOOK AI
        </div>

    </footer>
  );
};

export default Footer;

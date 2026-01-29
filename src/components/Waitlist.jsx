import React from "react";
import "./Waitlist.css";

import bgImage from "../assets/Bgimage.png";

const Waitlist = () => {
  return (
    <section
      className="waitlist-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="waitlist-overlay">
        <div className="waitlist-content">
          {/* Badge */}
          <div className="waitlist-badge">
            ✦ AI Powered Accounting
          </div>

          {/* Title */}
          <h1 className="waitlist-title">
            Ready for effortless,
            <br />
            audit-ready accounting?
          </h1>

          {/* Subtitle */}
          <p className="waitlist-subtitle">
            Start Free Or Book A Live Demo—See Value On Day 1.
          </p>

          {/* Buttons */}
          <div className="waitlist-buttons">
            <button className="waitlist-btn-secondary">
              Book a Demo Call
            </button>

            <button className="waitlist-btn-primary">
              Join Waitlist <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;

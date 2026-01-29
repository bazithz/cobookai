import React from "react";
import "./Whychooseusfeatures.css";

import presentingImg from "../assets/Presenting.png";

const Whychooseusfeatures = () => {
  return (
    <section className="whychooseusfeatures-section">
      <div className="whychooseusfeatures-container">
        {/* Top Heading */}
        <h2 className="whychooseusfeatures-main-title">
          Presenting Our <br />
          Ultimate Features
        </h2>

        {/* Content Grid */}
        <div className="whychooseusfeatures-grid">
          {/* LEFT IMAGE */}
          <div className="whychooseusfeatures-image-card">
            <img
              src={presentingImg}
              alt="Feature Dashboard Preview"
              className="whychooseusfeatures-image"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="whychooseusfeatures-content">
            <h3 className="whychooseusfeatures-title">
              Do the books in hours, <br /> not weeks
            </h3>

            <p className="whychooseusfeatures-desc">
              Upload Bills/Bank Statements, AI Extracts Line Items, Maps Ledgers/
              Tax Codes, And Proposes Entries For One-Click Approval.
            </p>

            {/* Pills */}
            <div className="whychooseusfeatures-tags">
              <p className="whychooseusfeatures-tag-label">Who It’s For ?</p>

              <div className="whychooseusfeatures-tag-row">
                <span className="whychooseusfeatures-tag">
                  Founders/Entrepreneurs
                </span>
                <span className="whychooseusfeatures-tag">Accountants</span>
                <span className="whychooseusfeatures-tag">Finance Ops</span>
              </div>
            </div>

            {/* CTA */}
            <div className="whychooseusfeatures-cta">
              <span className="whychooseusfeatures-sales">
                Talk to sales now
              </span>

              <button className="whychooseusfeatures-btn">
                Start Automate Now <span>›</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whychooseusfeatures;

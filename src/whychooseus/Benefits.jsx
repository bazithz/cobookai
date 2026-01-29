import React from "react";
import "./Benefits.css";

import fewerIcon from "../assets/fewer.png";
import fasterIcon from "../assets/faster.png";
import cleanerIcon from "../assets/cleaner.png";

const Benefits = () => {
  return (
    <div className="benefits-section">
      <div className="benefits-container">
        {/* Section Title */}
        <h2 className="benefits-title">Benefits & outcomes</h2>

        {/* Cards */}
        <div className="benefits-grid">
          {/* Card 1 */}
          <div className="benefits-card">
            <div className="benefits-icon-box">
              <img src={fewerIcon} alt="Fewer Icon" />
            </div>

            <h3 className="benefits-heading">70% Fewer</h3>
            <p className="benefits-desc">
              Manual Touches On Routine Entries.
            </p>
          </div>

          {/* Card 2 */}
          <div className="benefits-card">
            <div className="benefits-icon-box">
              <img src={fasterIcon} alt="Faster Icon" />
            </div>

            <h3 className="benefits-heading">Faster Close</h3>
            <p className="benefits-desc">
              (Days, Not Weeks) With Fewer Review Cycles.
            </p>
          </div>

          {/* Card 3 */}
          <div className="benefits-card">
            <div className="benefits-icon-box">
              <img src={cleanerIcon} alt="Cleaner Icon" />
            </div>

            <h3 className="benefits-heading">Cleaner Books</h3>
            <p className="benefits-desc">
              With Auditable Trails And Fewer Adjustments Later.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;

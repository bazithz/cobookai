import React, { useState } from "react";
import "./Services.css";

import icon1 from "../assets/Resultsicon1.png";
import icon2 from "../assets/Resultsicon2.png";
import icon3 from "../assets/Resultsicon3.png";
import icon4 from "../assets/Resultsicon4.png";
import icon5 from "../assets/Resultsicon5.png";
import icon6 from "../assets/Resultsicon6.png";
import arrowIcon from "../assets/arrow-icon.png";

const servicesData = [
  {
    title: "AI-Assisted Bookkeeping",
    desc: "Flags Duplicates, Tax Rate Mismatches, Wrong Parties, Missing Bills, Negative Stocks, And Period Leaks (Posting In Locked Months).",
    icon: icon1,
  },
  {
    title: "Scan, Suggest, Post",
    desc: "",
    icon: icon2,
  },
  {
    title: "Instant Module Report",
    desc: "",
    icon: icon3,
  },
  {
    title: "Error Guardrails",
    desc: "",
    icon: icon4,
  },
  {
    title: "Bank & Cash Control",
    desc: "",
    icon: icon5,
  },
  {
    title: "Month-End Close Kit",
    desc: "",
    icon: icon6,
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleService = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="service-section">
      <div className="service-container">
        {/* LEFT SIDE */}
        <div className="service-left">
          <h2 className="service-heading">
            Results & value we <br /> delivered
          </h2>

          <button className="service-learn-btn">
            Learn more <span>›</span>
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="service-right">
          {servicesData.map((item, index) => (
            <div
              key={index}
              className={`service-card ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => toggleService(index)}
            >
              {/* Icon */}
              <div className="service-icon-box">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="service-icon"
                />
              </div>

              {/* Content */}
              <div className="service-text">
                <h3 className="service-title">{item.title}</h3>

                {activeIndex === index && item.desc && (
                  <p className="service-desc">{item.desc}</p>
                )}
              </div>

              {/* Arrow */}
              <div className="service-arrow">
                <img 
                  src={arrowIcon} 
                  alt="toggle" 
                  className={`service-arrow-icon ${activeIndex === index ? "rotated" : ""}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
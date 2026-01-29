import React from "react";
import "./aintervene.css";

import Retail from "../assets/Retail.png";
import Firm from "../assets/Firm.png";
import Distribution from "../assets/Distribution.png";

const AIIntervene = () => {
  const cards = [
    {
      img: Retail,
      title: "Retail Chain",
      desc: `Uploads 1,200 Supplier Invoices/Month. Co-Book Scans GST, Auto-Splits Taxable Vs Exempt Items, And Posts With Correct Input Tax.`,
    },
    {
      img: Firm,
      title: "Services Firm",
      desc: `Uploads 1,200 Supplier Invoices/Month. Co-Book Scans GST, Auto-Splits Taxable Vs Exempt Items, And Posts With Correct Input Tax.`,
    },
    {
      img: Distribution,
      title: "Distribution Business",
      desc: `Uploads 1,200 Supplier Invoices/Month. Co-Book Scans GST, Auto-Splits Taxable Vs Exempt Items, And Posts With Correct Input Tax.`,
    },
  ];

  return (
    <section className="aintervene-section">
      <div className="aintervene-container">
        {/* Heading */}
        <h2 className="aintervene-heading">How AI Intervene</h2>

        {/* Cards */}
        <div className="aintervene-grid">
          {cards.map((card, index) => (
            <div key={index} className="aintervene-card">
              <div className="aintervene-card-inner">
                {/* Image */}
                <div className="aintervene-imgBox">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="aintervene-img"
                  />
                </div>

                {/* Content */}
                <div className="aintervene-content">
                  <h3 className="aintervene-title">{card.title}</h3>
                  <p className="aintervene-desc">{card.desc}</p>

                  <a href="#" className="aintervene-link">
                    Learn More <span>›</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIIntervene;
import React from "react";
import "./Contact.css";

import emailIcon from "../assets/Email.png";
import callIcon from "../assets/Call.png";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* LEFT SIDE */}
        <div className="contact-left">
          <h2 className="contact-title">
            Still Have <br /> Questions?
          </h2>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">
          <p className="contact-subtext">
            If You Need More Clarity Or Want To Speak To Our <br />
            Team Directly, Feel Free To Reach Out:
          </p>

          {/* Cards */}
          <div className="contact-cards">
            {/* Call Card */}
            <div className="contact-card">
              <div className="contact-icon-box">
                <img
                  src={callIcon}
                  alt="Call Icon"
                  className="contact-icon"
                />
              </div>

              <h3 className="contact-card-title">Call Us</h3>
              <p className="contact-card-info">+911287481248909</p>

              <button className="contact-btn">Get in touch now</button>
            </div>

            {/* Email Card */}
            <div className="contact-card">
              <div className="contact-icon-box">
                <img
                  src={emailIcon}
                  alt="Email Icon"
                  className="contact-icon"
                />
              </div>

              <h3 className="contact-card-title">Email Us</h3>
              <p className="contact-card-info">contact@cobook.ai</p>

              <button className="contact-btn">Get in touch now</button>
            </div>
          </div>

          {/* Footer Text */}
          <p className="contact-footer">
            We’ll Be Happy To Help You Understand How Co-Book.Ai Can Fit Your
            Business Needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

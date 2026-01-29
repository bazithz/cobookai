import React, { useState } from "react";
import "./Faq.css";

const faqData = [
  {
    question: "Is CoBook Suitable For Small Businesses Or Only Enterprises?",
    answer:
      "CoBook Is Designed To Scale. Whether You’re A Solo Founder Or A CFO In A Multinational Firm, Our Platform Adapts To Your Needs.",
  },
  {
    question: "How Secure Is My Financial Data?",
    answer:
      "We Use Bank-Grade Encryption, Role-Based Access Control, And Secure Cloud Infrastructure.",
  },
  {
    question: "Can CoBook Replace My Accountant?",
    answer:
      "CoBook Automates Bookkeeping Tasks, But Accountants Still Provide Strategic And Compliance Expertise.",
  },
  {
    question: "How Long Does Setup Take?",
    answer:
      "Most Businesses Can Get Started In Less Than 30 Minutes With Seamless Integrations.",
  },
  {
    question: "What If I Need Help?",
    answer:
      "Our Support Team Is Available 24/7 Through Chat And Email Assistance.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        {/* Left Title */}
        <div className="faq-left">
          <h2>
            Frequently <br /> Asked Questions
          </h2>
        </div>

        {/* Right Accordion */}
        <div className="faq-right">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <div
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{item.question}</span>
                <span className="faq-icon">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>

              {activeIndex === index && (
                <p className="faq-answer">{item.answer}</p>
              )}

              <div className="faq-divider"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

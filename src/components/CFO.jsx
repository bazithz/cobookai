import React from 'react';
import './CFO.css';
import connectImg from '../assets/Connect.png';
import aiPoweredImg from '../assets/AIPowered.png';
import smartImg from '../assets/Smart.png';
import actionableImg from '../assets/Actionable.png';

const CFO = () => {
  return (
    <div className="cfo-container">
      <div className="cfo-content">
        {/* Hero / Main Tagline */}
        <div className="cfo-header">
          <h1 className="cfo-main-title">
            Like having a CFO never sleeps.
          </h1>
        </div>

        <div className="cfo-features">
          {/* Feature 1 */}
          <div className="cfo-feature cfo-feature-1">
            <div className="cfo-feature-number-wrapper">
              <div className="cfo-feature-number">1</div>
            </div>
            <div className="cfo-feature-text">
              <h2 className="cfo-feature-title">Connect Your Data</h2>
              <p className="cfo-feature-description">
                Seamlessly Connect Your Bank Accounts, Invoices, Receipts, And ERP Systems For A More Streamlined Experience.
              </p>
            </div>
            <div className="cfo-feature-image">
              <img 
                src={connectImg} 
                alt="Connecting data - bank accounts, invoices, receipts, ERP systems" 
                loading="lazy" 
              />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="cfo-feature cfo-feature-2">
            <div className="cfo-feature-number-wrapper">
              <div className="cfo-feature-number">2</div>
            </div>
            <div className="cfo-feature-text">
              <h2 className="cfo-feature-title">AI-Powered Processing</h2>
              <p className="cfo-feature-description">
                Our AI Engine Categorizes, Reconciles, And Validates Transactions In Real Time.
              </p>
            </div>
            <div className="cfo-feature-image">
              <img 
                src={aiPoweredImg} 
                alt="AI-powered processing diamond icon with blue glow" 
                loading="lazy" 
              />
            </div>
          </div>

          {/* Feature 3 */}
          <div className="cfo-feature cfo-feature-3">
            <div className="cfo-feature-number-wrapper">
              <div className="cfo-feature-number">3</div>
            </div>
            <div className="cfo-feature-text">
              <h2 className="cfo-feature-title">Smart Reporting</h2>
              <p className="cfo-feature-description">
                Instantly Generate Balance Sheets, Cash Flow Statements, And Dynamic Dashboards.
              </p>
            </div>
            <div className="cfo-feature-image">
              <img 
                src={smartImg} 
                alt="Smart reporting - dynamic charts and balance sheets" 
                loading="lazy" 
              />
            </div>
          </div>

          {/* Feature 4 */}
          <div className="cfo-feature cfo-feature-4">
            <div className="cfo-feature-number-wrapper">
              <div className="cfo-feature-number">4</div>
            </div>
            <div className="cfo-feature-text">
              <h2 className="cfo-feature-title">Actionable Insights</h2>
              <p className="cfo-feature-description">
                Get Smart Alerts, Detect Anomalies, And Receive Strategic Recommendations To Enhance Your Decision-Making.
              </p>
            </div>
            <div className="cfo-feature-image">
              <img 
                src={actionableImg} 
                alt="Actionable insights with warning alerts and recommendations" 
                loading="lazy" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CFO;
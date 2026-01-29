import React from 'react';
import './Autonomous.css';
import powerfulImg from '../assets/Powerfully-built.png';

const Autonomous = () => {
  return (
    <div className="autonomous-modern-finance-section">
      <div className="container">
        <h1 className="autonomous-main-title">
          Powerfully Built for<br />Modern Finance
        </h1>

        <div className="autonomous-content-wrapper">
          {/* Left side - Feature list */}
          <div className="autonomous-features-list">
            <div className="autonomous-feature-item autonomous-active">
              <div className="autonomous-vertical-line"></div>
              <div className="autonomous-blue-indicator"></div>
              <div className="autonomous-feature-content">
                <div className="autonomous-feature-title">Autonomous Bookkeeping</div>
                <div className="autonomous-feature-desc">Learns Categories, Vendors, And Tax Rules.</div>
              </div>
            </div>

            <div className="autonomous-feature-item">
              <div className="autonomous-feature-content">
                <div className="autonomous-feature-title">Live Dashboards</div>
                <div className="autonomous-feature-desc">Drill From KPI → Ledger → Source Doc.</div>
              </div>
            </div>

            <div className="autonomous-feature-item">
              <div className="autonomous-feature-content">
                <div className="autonomous-feature-title">Bank-Grade Security</div>
                <div className="autonomous-feature-desc">
                  AES-256 At Rest, TLS In Transit, RBAC, SSO.
                </div>
              </div>
            </div>

            <div className="autonomous-feature-item">
              <div className="autonomous-feature-content">
                <div className="autonomous-feature-title">Seamless Integrations</div>
                <div className="autonomous-feature-desc">
                  Xero, QuickBooks, Tally, Zoho, SAP/Oracle, Shopify, Stripe/Razorpay.
                </div>
              </div>
            </div>

            <div className="autonomous-feature-item">
              <div className="autonomous-feature-content">
                <div className="autonomous-feature-title">AI Anomaly Detection</div>
                <div className="autonomous-feature-desc">
                  Explainable Flags With Confidence Levels.
                </div>
              </div>
            </div>

            <div className="autonomous-feature-item">
              <div className="autonomous-feature-content">
                <div className="autonomous-feature-title">Smart Billing</div>
                <div className="autonomous-feature-desc">
                  Invoice, Remind, Reconcile, And Track DSO Automatically.
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Dashboard image */}
          <div className="autonomous-dashboard-preview-wrapper">
            <img
              src={powerfulImg}
              alt="Modern finance dashboard screenshot"
              className="autonomous-dashboard-preview"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Autonomous;
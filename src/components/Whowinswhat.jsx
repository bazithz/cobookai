import React from 'react';
import './WhoWinsWhat.css';

// Icon imports - adjust paths as needed
import FoundersIcon from '../assets/founders.png';
import CFOIcon from '../assets/CFOS.png';
import AccountantsIcon from '../assets/Accountants.png';
import SilentIcon from '../assets/silent.png';
import AuditorsIcon from '../assets/auditors.png';

const WhoWinsWhat = () => {
  const icons = {
    founders: FoundersIcon,
    cfo: CFOIcon,
    accountants: AccountantsIcon,
    silent: SilentIcon,
    auditors: AuditorsIcon,
  };

  const items = [
    {
      key: 'founders',
      title: 'Founders/Entrepreneurs',
      subtitle: 'Faster Books, Live KPIs, Better Cash Calls.',
    },
    {
      key: 'cfo',
      title: 'CFOs/Finance Leads',
      subtitle: 'Unified Analytics, Budgeting/Forecasting, Clean Compliance.',
    },
    {
      key: 'accountants',
      title: 'Accountants/Finance Ops',
      subtitle: 'Less Data Entry, Fewer Fixes, Guided Close.',
    },
    {
      key: 'silent',
      title: 'Silent Partners/Family Offices',
      subtitle: 'One Login, Portfolio Clarity, Safer Capital Allocation.',
    },
    {
      key: 'auditors',
      title: 'Auditors/Tax Teams',
      subtitle: 'Filing-Ready Packs, Locked Audit Trails.',
    },
  ];

  return (
    <section className="who-wins-section">
      <div className="container">
        <h2 className="section-title">Who Wins What</h2>

        <div className="cards-scroll-container">
          <div className="cards-wrapper">
            {items.map((item) => (
              <div key={item.key} className="benefit-card">
                <div className="icon-wrapper">
                  <img
                    src={icons[item.key]}
                    alt=""
                    className="benefit-icon"
                    width={24}
                    height={24}
                  />
                </div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-subtitle">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWinsWhat;
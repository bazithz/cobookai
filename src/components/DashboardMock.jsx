import React from 'react';
import './DashboardMock.css';
import mockImage from '../assets/mock-image.png';

const DashboardMock = () => {
  return (
    <div className="dashboard-mock">
      <img src={mockImage} alt="Dashboard Preview" className="mock-image" />
    </div>
  );
};

export default DashboardMock;
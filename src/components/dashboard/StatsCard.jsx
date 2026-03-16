import React from 'react';
import { formatNumber } from '../../utils/dataHelpers';
import '../../styles/dashboard.css';

const StatsCard = ({ 
  label, 
  value, 
  change, 
  changeType = 'neutral',
  icon = '📊',
  title = ''
}) => {
  const formattedValue = formatNumber(value);
  
  return (
    <div className="stats-card">
      {/* Top Section: Icon and Title */}
      <div className="stats-card-header">
        <div className="stats-card-icon-wrapper">
          <span className="stats-card-icon">{icon}</span>
        </div>
        <div className="stats-card-title-section">
          {title && <div className="stats-card-title">{title}</div>}
          <div className="stats-card-label">{label}</div>
        </div>
      </div>

      {/* Middle Section: Main Value */}
      <div className="stats-card-body">
        <div className="stats-card-value">{formattedValue}</div>
        
        {/* Change Indicator */}
        {change !== undefined && (
          <div className={`stats-card-change-badge ${changeType}`}>
            <span className="stats-card-change-icon">
              {changeType === 'positive' && '↑'}
              {changeType === 'negative' && '↓'}
              {changeType === 'neutral' && '→'}
            </span>
            <span className="stats-card-change-value">
              {Math.abs(change)}%
            </span>
          </div>
        )}
      </div>

      {/* Bottom Accent Line */}
      <div className="stats-card-accent" />
    </div>
  );
};

export default StatsCard;

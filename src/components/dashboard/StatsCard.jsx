import React from 'react';
import { formatNumber } from '../../utils/dataHelpers';
import '../../styles/dashboard.css';

const StatsCard = ({ 
  label, 
  value, 
  change, 
  changeType = 'neutral',
  icon = '📊'
}) => {
  return (
    <div className="stats-card">
      <div className="stats-card-content">
        <div className="stats-card-label">{label}</div>
        <div className="stats-card-value">{formatNumber(value)}</div>
        {change !== undefined && (
          <div className={`stats-card-change ${changeType}`}>
            {changeType === 'positive' && '↑ '}
            {changeType === 'negative' && '↓ '}
            {Math.abs(change)}%
          </div>
        )}
      </div>
      <div className="stats-card-icon">{icon}</div>
    </div>
  );
};

export default StatsCard;

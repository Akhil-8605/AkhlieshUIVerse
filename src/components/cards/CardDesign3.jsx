import React from 'react';
import '../../styles/dashboard.css';

/**
 * CardDesign3 - Advanced card design with multiple stats
 * Comprehensive card with main metric and sub-metrics
 */
const CardDesign3 = ({
  id,
  title = 'Card Title',
  label = 'Label',
  value = '0',
  icon = '⚡',
  description = '',
  stats = [],
  trend = ''
}) => {
  return (
    <div className="card-design-3">
      <div className="card-design-3-header">
        <div className="card-design-3-top">
          <div className="card-design-3-icon">{icon}</div>
          <h3 className="card-design-3-title">{title}</h3>
        </div>
        {trend && (
          <span className={`card-design-3-trend ${trend.startsWith('-') ? 'negative' : 'positive'}`}>
            {trend}
          </span>
        )}
      </div>
      
      <div className="card-design-3-body">
        <div className="card-design-3-value">{value}</div>
        <div className="card-design-3-label">{label}</div>
        {description && (
          <p className="card-design-3-description">{description}</p>
        )}
      </div>
      
      {stats && stats.length > 0 && (
        <div className="card-design-3-stats">
          {stats.map((stat, idx) => (
            <div key={idx} className="card-design-3-stat-item">
              <span className="card-design-3-stat-name">{stat.name}</span>
              <span className="card-design-3-stat-value">{stat.value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CardDesign3;

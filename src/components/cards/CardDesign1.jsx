import React from 'react';
import '../../styles/dashboard.css';

/**
 * CardDesign1 - Minimalist card design
 * Simple, clean layout with icon, title, value, and trend
 */
const CardDesign1 = ({
  id,
  title = 'Card Title',
  label = 'Label',
  value = '0',
  icon = '📊',
  description = '',
  trend = ''
}) => {
  return (
    <div className="card-design-1">
      <div className="card-design-1-header">
        <div className="card-design-1-icon">{icon}</div>
        <div className="card-design-1-title">{title}</div>
      </div>
      
      <div className="card-design-1-body">
        <div className="card-design-1-value">{value}</div>
        <div className="card-design-1-label">{label}</div>
        {description && (
          <p className="card-design-1-description">{description}</p>
        )}
      </div>
      
      {trend && (
        <div className="card-design-1-footer">
          <span className={`card-design-1-trend ${trend.startsWith('-') ? 'negative' : 'positive'}`}>
            {trend}
          </span>
        </div>
      )}
    </div>
  );
};

export default CardDesign1;

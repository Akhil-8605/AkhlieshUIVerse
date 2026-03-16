import React from 'react';
import '../../styles/dashboard.css';

const WidgetCard = ({ 
  title, 
  subtitle, 
  children, 
  action, 
  className = '' 
}) => {
  return (
    <div className={`widget-card ${className}`}>
      <div className="widget-card-header">
        <div>
          <div className="widget-card-title">{title}</div>
          {subtitle && <div className="widget-card-subtitle">{subtitle}</div>}
        </div>
        {action && (
          <button className="widget-card-action" onClick={action.onClick}>
            {action.icon || '⋮'}
          </button>
        )}
      </div>
      <div className="widget-card-content">
        {children}
      </div>
    </div>
  );
};

export default WidgetCard;

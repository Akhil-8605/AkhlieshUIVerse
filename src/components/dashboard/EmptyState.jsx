import React from 'react';
import '../../styles/dashboard.css';

const EmptyState = ({ 
  icon = '📭',
  title = 'No data available',
  description = 'There is nothing to display at the moment.'
}) => {
  return (
    <div className="empty-state">
      <div className="empty-state-icon">{icon}</div>
      <div className="empty-state-title">{title}</div>
      <div className="empty-state-description">{description}</div>
    </div>
  );
};

export default EmptyState;

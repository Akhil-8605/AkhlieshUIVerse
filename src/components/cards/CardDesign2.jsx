import React from 'react';
import '../../styles/dashboard.css';

/**
 * CardDesign2 - Featured card design with accent color and mini chart
 * Highlighted design with emphasis and optional mini chart visualization
 */
const CardDesign2 = ({
  id,
  title = 'Card Title',
  label = 'Label',
  value = '0',
  icon = '💎',
  description = '',
  chart = null,
  trend = ''
}) => {
  return (
    <div className="card-design-2">
      <div className="card-design-2-accent"></div>
      
      <div className="card-design-2-header">
        <div className="card-design-2-icon">{icon}</div>
        <div className="card-design-2-info">
          <h3 className="card-design-2-title">{title}</h3>
          <p className="card-design-2-description">{description}</p>
        </div>
      </div>
      
      <div className="card-design-2-body">
        <div className="card-design-2-value">{value}</div>
        <div className="card-design-2-label">{label}</div>
      </div>
      
      {chart && (
        <div className="card-design-2-chart">
          <svg viewBox="0 0 150 40" height="40" preserveAspectRatio="none">
            {chart.data && chart.data.map((val, idx, arr) => {
              const x = (idx / (arr.length - 1 || 1)) * 150;
              const max = Math.max(...arr);
              const y = 40 - (val / max) * 35;
              return (
                <rect
                  key={idx}
                  x={x}
                  y={y}
                  width={150 / arr.length}
                  height={40 - y}
                  fill="var(--accent-color)"
                  opacity="0.7"
                />
              );
            })}
          </svg>
        </div>
      )}
      
      {trend && (
        <div className="card-design-2-footer">
          <span className={`card-design-2-trend ${trend.startsWith('-') ? 'negative' : 'positive'}`}>
            {trend}
          </span>
        </div>
      )}
    </div>
  );
};

export default CardDesign2;

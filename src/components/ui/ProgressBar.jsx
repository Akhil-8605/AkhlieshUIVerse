import React from 'react';

// ProgressBar component for showing progress
const ProgressBar = ({
  value = 0, // 0-100
  max = 100,
  label = '',
  showValue = true,
  animated = true,
  className = '',
  ...props
}) => {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className={`progress-container ${className}`} {...props}>
      {label && <span className="progress-label">{label}</span>}
      <div style={{ flex: 1 }}>
        <div className="progress-bar">
          <div
            className="progress-bar-fill"
            style={{
              width: `${percentage}%`,
            }}
          />
        </div>
      </div>
      {showValue && (
        <span className="progress-value">{Math.round(percentage)}%</span>
      )}
    </div>
  );
};

export default ProgressBar;

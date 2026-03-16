import React from 'react';
import '../../styles/dashboard.css';

const LoadingState = ({ fullHeight = false }) => {
  return (
    <div className={`loading-state ${fullHeight ? 'full-height' : ''}`}>
      <div className="loading-spinner"></div>
    </div>
  );
};

export const SkeletonCard = () => (
  <div className="widget-card">
    <div className="skeleton-line" style={{ width: '60%', marginBottom: '1rem' }}></div>
    <div className="skeleton-line"></div>
    <div className="skeleton-line"></div>
    <div className="skeleton-line short"></div>
  </div>
);

export const SkeletonLoader = ({ count = 3 }) => (
  <div className="grid grid-cols-1">
    {Array.from({ length: count }).map((_, i) => (
      <div key={i} className="animate-shimmer">
        <div className="skeleton-card"></div>
      </div>
    ))}
  </div>
);

export default LoadingState;

import React from 'react';

/**
 * BadgeShowcase - Display multiple badge variants
 * Props: badges (array of {label, variant})
 */
const BadgeShowcase = ({ badges = [] }) => {
  const getBadgeClass = (variant) => {
    return `badge badge-${variant}`;
  };

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '12px',
      padding: '20px',
      backgroundColor: 'var(--card-bg)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border-color)'
    }}>
      {badges && badges.length > 0 ? (
        badges.map((badge, index) => (
          <span
            key={index}
            className={getBadgeClass(badge.variant)}
            style={{
              padding: '6px 12px',
              borderRadius: 'var(--radius-xl)',
              fontSize: '0.75rem',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}
          >
            {badge.label}
          </span>
        ))
      ) : (
        <p style={{ color: 'var(--text-tertiary)' }}>No badges to display</p>
      )}
    </div>
  );
};

export default BadgeShowcase;

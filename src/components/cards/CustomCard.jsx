import React from 'react';

/**
 * CustomCard - Reusable card component with multiple design variants
 * Props: variant (design-1 to 5), title, icon, description, onClick
 */
const CustomCard = ({ variant = 'design-1', title, icon, description, onClick }) => {
  const cardClass = `card card-design-${variant.split('-')[1] || '1'}`;

  return (
    <div className={cardClass} onClick={onClick}>
      {/* Card Icon */}
      {icon && (
        <div style={{
          fontSize: '2rem',
          marginBottom: '12px',
          display: 'block'
        }}>
          {icon}
        </div>
      )}

      {/* Card Title */}
      {title && (
        <h3 style={{
          margin: '0 0 8px 0',
          fontSize: '1.125rem',
          fontWeight: '700',
          color: 'var(--text-primary)'
        }}>
          {title}
        </h3>
      )}

      {/* Card Description */}
      {description && (
        <p style={{
          margin: 0,
          fontSize: '0.875rem',
          color: 'var(--text-secondary)',
          lineHeight: '1.5'
        }}>
          {description}
        </p>
      )}
    </div>
  );
};

export default CustomCard;

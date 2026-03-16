import React from 'react';

// Badge component for status indicators and labels
const Badge = ({
  children,
  variant = 'primary', // primary, success, warning, error, info, outline
  dot = false,
  className = '',
  ...props
}) => {
  const baseClass = 'badge';
  const variantClass = `badge-${variant}`;

  const classes = [baseClass, variantClass, className]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={classes} {...props}>
      {dot && <span className="badge-dot" />}
      {children}
    </span>
  );
};

export default Badge;

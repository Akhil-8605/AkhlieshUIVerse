import React from 'react';

// Button component with multiple variants and sizes
const Button = ({
  children,
  variant = 'primary', // primary, secondary, outline, danger, success, ghost
  size = 'md', // sm, md, lg
  block = false,
  disabled = false,
  onClick,
  className = '',
  ...props
}) => {
  const baseClass = 'button';
  const variantClass = `button-${variant}`;
  const sizeClass = size !== 'md' ? `button-${size}` : '';
  const blockClass = block ? 'button-block' : '';

  const classes = [baseClass, variantClass, sizeClass, blockClass, className]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

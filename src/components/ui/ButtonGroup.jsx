import React from 'react';

// ButtonGroup component for grouped buttons
const ButtonGroup = ({
  children,
  vertical = false,
  size = 'md', // sm, md, lg
  className = '',
  ...props
}) => {
  const baseClass = 'button-group';
  const directionClass = vertical ? 'button-group-vertical' : '';
  const sizeClass = size !== 'md' ? `size-${size}` : '';

  const classes = [baseClass, directionClass, sizeClass, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default ButtonGroup;

import React from 'react';

// Card wrapper component
const Card = ({
  children,
  design = 'design-1', // design-1, design-2
  className = '',
  ...props
}) => {
  const baseClass = `card-${design}`;
  const classes = [baseClass, className].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

// Card Header component
export const CardHeader = ({ children, className = '', ...props }) => (
  <div className={`card-header ${className}`} {...props}>
    {children}
  </div>
);

// Card Title component
export const CardTitle = ({ children, className = '', ...props }) => (
  <h3 className={`card-title ${className}`} {...props}>
    {children}
  </h3>
);

// Card Subtitle component
export const CardSubtitle = ({ children, className = '', ...props }) => (
  <p className={`card-subtitle ${className}`} {...props}>
    {children}
  </p>
);

// Card Body component
export const CardBody = ({ children, className = '', ...props }) => (
  <div className={`card-body ${className}`} {...props}>
    {children}
  </div>
);

// Card Footer component
export const CardFooter = ({ children, className = '', ...props }) => (
  <div className={`card-footer ${className}`} {...props}>
    {children}
  </div>
);

export default Card;

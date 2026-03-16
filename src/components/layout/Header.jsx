import React from 'react';
import '../../styles/layout.css';

const Header = ({ 
  title = 'Page Title',
  description = '',
  icon = null,
}) => {
  return (
    <div className="page-header">
      <h1>{title}</h1>
      {description && <p>{description}</p>}
      {icon && <span className="header-icon">{icon}</span>}
    </div>
  );
};

export default Header;

import React from 'react';
import '../../styles/layout.css';

const Header = ({ 
  title = 'Page Title',
  description = ''
}) => {
  return (
    <div className="page-header">
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </div>
  );
};

export default Header;

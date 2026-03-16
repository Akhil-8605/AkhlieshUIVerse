import React from 'react';
import '../../styles/layout.css';

const Navbar = ({ 
  brand = "Dashboard Created By Using Akhilesh UI Verse", 
  menu = [], 
  actions = [],
  onMenuToggle
}) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <button 
          className="navbar-menu-toggle"
          onClick={onMenuToggle}
          style={{ 
            display: 'none',
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            color: 'var(--text-primary)'
          }}
        >
          ☰
        </button>
        {brand}
      </div>
      
      <div className="navbar-menu">
        {menu.map((item, idx) => (
          <a key={idx} href={item.href} style={{ color: 'var(--text-secondary)' }}>
            {item.label}
          </a>
        ))}
      </div>
      
      <div className="navbar-actions">
        {actions.map((action, idx) => (
          <button 
            key={idx}
            onClick={action.onClick}
            className="navbar-action-button"
            style={{
              padding: '0.5rem 1rem',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-secondary)',
              transition: 'color 0.2s ease'
            }}
          >
            {action.icon || action.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import '../../styles/layout.css';

const Sidebar = ({
  items = [],
  activeId,
  onItemClick,
  collapsed = false,
  onToggleCollapse
}) => {
  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <button
          onClick={onToggleCollapse}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '1.25rem',
            cursor: 'pointer',
            color: 'var(--text-primary)'
          }}
        >
          {collapsed ? '→' : '←'}
        </button>
        <span className={`sidebar-title ${collapsed ? 'collapsed' : ''}`}>Dashboard</span>
      </div>

      <div className="sidebar-menu">
        {items.map((item) => (
          <div
            key={item.id}
            className={`sidebar-item ${activeId === item.id ? 'active' : ''}`}
            onClick={() => onItemClick(item.id)}
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span className="sidebar-label">{item.label}</span>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;

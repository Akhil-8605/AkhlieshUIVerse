import React from 'react';
import { useTheme } from '../../hooks/useTheme';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: '0.5rem 1rem',
        borderRadius: '8px',
        border: '1px solid var(--border-color)',
        background: 'var(--card-bg)',
        color: 'var(--text-primary)',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        fontSize: '1rem'
      }}
      onMouseEnter={(e) => {
        e.target.style.borderColor = 'var(--accent-color)';
        e.target.style.color = 'var(--accent-color)';
      }}
      onMouseLeave={(e) => {
        e.target.style.borderColor = 'var(--border-color)';
        e.target.style.color = 'var(--text-primary)';
      }}
    >
      {theme === 'light' ? '🌙' : '☀️'} {theme === 'light' ? 'Dark' : 'Light'}
    </button>
  );
};

export default ThemeToggle;

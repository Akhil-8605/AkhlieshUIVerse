import React, { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';

const ColorPicker = () => {
  const { accentColor, changeAccentColor } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const colors = [
    { name: 'blue', value: '#3b82f6' },
    { name: 'green', value: '#10b981' },
    { name: 'purple', value: '#8b5cf6' },
    { name: 'orange', value: '#f97316' },
    { name: 'red', value: '#ef4444' }
  ];

  const handleColorChange = (colorName) => {
    changeAccentColor(colorName);
    setIsOpen(false);
  };

  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: '0.5rem 1rem',
          borderRadius: '8px',
          border: '1px solid var(--border-color)',
          background: 'var(--card-bg)',
          color: 'var(--text-primary)',
          cursor: 'pointer',
          transition: 'all 0.2s ease'
        }}
      >
        🎨 Colors
      </button>

      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            right: 0,
            marginTop: '0.5rem',
            backgroundColor: 'var(--card-bg)',
            border: '1px solid var(--border-color)',
            borderRadius: '8px',
            padding: '0.75rem',
            zIndex: 1000,
            boxShadow: 'var(--shadow-lg)',
            display: 'flex',
            gap: '0.5rem',
            flexDirection: 'column'
          }}
        >
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => handleColorChange(color.name)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 0.75rem',
                borderRadius: '4px',
                border: accentColor === color.name ? '2px solid var(--accent-color)' : '1px solid var(--border-color)',
                background: 'var(--bg-secondary)',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                fontSize: '0.875rem',
                transition: 'all 0.2s ease'
              }}
            >
              <span
                style={{
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  backgroundColor: color.value
                }}
              />
              {color.name.charAt(0).toUpperCase() + color.name.slice(1)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ColorPicker;

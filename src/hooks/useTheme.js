import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState('light');
  const [accentColor, setAccentColor] = useState('blue');

  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('app-theme') || 'light';
    const savedAccent = localStorage.getItem('app-accent') || 'blue';
    
    setTheme(savedTheme);
    setAccentColor(savedAccent);
    applyTheme(savedTheme, savedAccent);
  }, []);

  const applyTheme = (newTheme, newAccent) => {
    const html = document.documentElement;
    
    // Apply theme
    html.setAttribute('data-theme', newTheme);
    
    // Apply accent color
    if (newAccent !== 'blue') {
      html.setAttribute('data-accent', newAccent);
    } else {
      html.removeAttribute('data-accent');
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    applyTheme(newTheme, accentColor);
    localStorage.setItem('app-theme', newTheme);
  };

  const changeAccentColor = (newAccent) => {
    setAccentColor(newAccent);
    applyTheme(theme, newAccent);
    localStorage.setItem('app-accent', newAccent);
  };

  return {
    theme,
    toggleTheme,
    accentColor,
    changeAccentColor,
    isDark: theme === 'dark'
  };
};

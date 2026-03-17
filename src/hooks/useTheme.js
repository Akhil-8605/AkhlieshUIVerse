import { useState, useEffect } from 'react';

export const useTheme = (configAccentColor = 'blue', initialTheme = 'light') => {
  const [theme, setTheme] = useState(initialTheme);
  const [accentColor, setAccentColor] = useState(configAccentColor);

  // Initialize theme from localStorage or config
  useEffect(() => {
    const savedTheme = localStorage.getItem('app-theme') || initialTheme;
    
    setTheme(savedTheme);
    setAccentColor(configAccentColor);
    applyTheme(savedTheme, configAccentColor);
  }, [configAccentColor, initialTheme]);

  const applyTheme = (newTheme, newAccent) => {
    const html = document.documentElement;
    
    // Apply theme
    html.setAttribute('data-theme', newTheme);
    
    // Apply accent color from config
    if (newAccent && newAccent !== 'blue') {
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

  return {
    theme,
    toggleTheme,
    accentColor,
    isDark: theme === 'dark'
  };
};

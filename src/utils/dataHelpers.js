/**
 * Data Helper Utilities
 * Common data transformation and formatting functions
 */

export const formatNumber = (value) => {
  if (typeof value !== 'number') return value;
  
  if (value >= 1000000) {
    return (value / 1000000).toFixed(1) + 'M';
  }
  if (value >= 1000) {
    return (value / 1000).toFixed(1) + 'K';
  }
  
  return value.toLocaleString();
};

export const formatCurrency = (value, currency = 'USD') => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency.toUpperCase(),
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
  
  return formatter.format(value);
};

export const formatPercentage = (value, decimals = 1) => {
  if (typeof value !== 'number') return value;
  return (value * 100).toFixed(decimals) + '%';
};

export const formatDate = (date, format = 'short') => {
  const d = new Date(date);
  
  if (format === 'short') {
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  }
  
  if (format === 'long') {
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }
  
  if (format === 'time') {
    return d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  }
  
  return d.toLocaleDateString();
};

export const getChangeIndicator = (current, previous) => {
  if (!previous) return { value: 0, type: 'neutral' };
  
  const change = ((current - previous) / previous) * 100;
  
  return {
    value: Math.abs(change).toFixed(1),
    type: change > 0 ? 'positive' : change < 0 ? 'negative' : 'neutral',
    direction: change > 0 ? 'up' : change < 0 ? 'down' : 'neutral'
  };
};

export const generateChartColors = (count = 5) => {
  const baseColors = [
    '#3b82f6', // blue
    '#10b981', // green
    '#f59e0b', // amber
    '#ef4444', // red
    '#8b5cf6', // purple
    '#ec4899', // pink
    '#06b6d4', // cyan
    '#f97316'  // orange
  ];
  
  const colors = [];
  for (let i = 0; i < count; i++) {
    colors.push(baseColors[i % baseColors.length]);
  }
  
  return colors;
};

export const truncateText = (text, maxLength = 50) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength - 3) + '...';
};

export const sortData = (data, field, order = 'asc') => {
  return [...data].sort((a, b) => {
    if (a[field] < b[field]) return order === 'asc' ? -1 : 1;
    if (a[field] > b[field]) return order === 'asc' ? 1 : -1;
    return 0;
  });
};

export const filterData = (data, field, value) => {
  return data.filter(item => item[field] === value);
};

export const groupData = (data, field) => {
  return data.reduce((grouped, item) => {
    const key = item[field];
    if (!grouped[key]) {
      grouped[key] = [];
    }
    grouped[key].push(item);
    return grouped;
  }, {});
};

export const sumData = (data, field) => {
  return data.reduce((sum, item) => sum + (item[field] || 0), 0);
};

export const averageData = (data, field) => {
  if (data.length === 0) return 0;
  return sumData(data, field) / data.length;
};

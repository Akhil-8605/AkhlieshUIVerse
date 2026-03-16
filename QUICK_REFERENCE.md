# Quick Reference - Professional Design Edition

## Core Configuration

### Minimal Setup
```javascript
export const dashboardConfig = {
  name: 'Dashboard',
  accentColor: 'blue',        // blue | green | purple | orange | red
  theme: 'light',             // light | dark
  navbar: true,               // true = show navbar+sidebar | false = hide both
  design: 'default',          // default | boxed
  
  profile: { ... },
  pages: [ ... ]
};
```

---

## Color Control

### Set Color (JSON Only)
```javascript
accentColor: 'green'  // Changes all components automatically
```

### Available Colors
```
'blue'    → #3b82f6 (professional)
'green'   → #10b981 (success)
'purple'  → #8b5cf6 (creative)
'orange'  → #f97316 (attention)
'red'     → #ef4444 (critical)
```

### Theme Support
All colors work in light AND dark modes automatically.

---

## Navbar Control

### Show/Hide Navigation
```javascript
navbar: true   // Show navbar + sidebar (standard dashboard)
navbar: false  // Hide navbar + sidebar (single-page layout)
```

---

## Profile Modal - Actions

### Action Structure
```javascript
profile: {
  title: 'My Profile',
  avatar: 'url',
  fields: [ { label, value } ],
  stats: [ { label, value } ],
  actions: [
    {
      id: 'action-id',              // REQUIRED: unique identifier
      label: 'Button Text',
      variant: 'primary',           // primary | secondary | danger
      closeOnClick: false           // Auto-close after click?
    }
  ]
}
```

### Handle Action
```javascript
// In DashboardContainer.jsx
const handleProfileAction = (actionId) => {
  switch(actionId) {
    case 'logout':
      // Clear auth and redirect
      break;
    case 'edit-profile':
      // Navigate to settings
      break;
  }
};
```

---

## StatsCard - New Design

### Basic Usage
```javascript
{
  id: 'metric-id',
  type: 'stats-card',
  title: 'LABEL',          // Optional: uppercase label
  label: 'Description',    // Main label
  value: 12453,            // Numeric value
  change: 12.5,            // Percentage change
  changeType: 'positive',  // positive | negative | neutral
  icon: '👥'               // Emoji or icon
}
```

### Features
- Icon wrapper with accent color gradient
- Title + label hierarchy
- Change indicator badge
- Hover elevation effect
- Accent line at bottom
- Fully responsive

---

## Card Design Variants

### Minimalist (CardDesign1)
```javascript
{
  type: 'cardDesign1',
  title: 'Title',
  value: '100',
  label: 'Label',
  icon: '✨',
  description: 'Optional description',
  trend: '+15%'
}
```

### Featured (CardDesign2)
```javascript
{
  type: 'cardDesign2',
  title: 'Title',
  value: '42.5K',
  label: 'Label',
  icon: '💎',
  chart: { type: 'mini-bar', data: [12, 19, 3] },
  trend: '+8%'
}
```

### Advanced (CardDesign3)
```javascript
{
  type: 'cardDesign3',
  title: 'Title',
  value: '94.2%',
  label: 'Label',
  icon: '⚡',
  stats: [
    { name: 'Uptime', value: '99.9%' },
    { name: 'Latency', value: '45ms' }
  ],
  trend: '-0.1%'
}
```

---

## Charts & Data

### Line Chart
```javascript
{
  type: 'line-chart',
  title: 'Title',
  dataKeys: ['Users', 'Premium'],
  data: [
    { name: 'Jan', Users: 4000, Premium: 2400 },
    { name: 'Feb', Users: 3000, Premium: 1398 }
  ]
}
```

### Bar Chart
```javascript
{
  type: 'bar-chart',
  title: 'Title',
  dataKeys: ['A', 'B'],
  data: [ /* same structure */ ]
}
```

### Pie/Donut Chart
```javascript
{
  type: 'pie-chart',
  title: 'Title',
  data: [
    { name: 'Item A', value: 35 },
    { name: 'Item B', value: 28 }
  ]
}
```

### Area Chart
```javascript
{
  type: 'area-chart',
  title: 'Title',
  dataKeys: ['A', 'B', 'C'],
  data: [ /* same structure */ ]
}
```

---

## Lists & Tables

### Simple List
```javascript
{
  type: 'simple-list',
  title: 'Title',
  labelKey: 'name',
  valueKey: 'count',
  items: [
    { name: 'Item', count: '100' }
  ]
}
```

### Icon List
```javascript
{
  type: 'icon-list',
  title: 'Title',
  labelKey: 'title',
  descriptionKey: 'description',
  iconKey: 'icon',
  items: [
    { icon: '✅', title: 'Title', description: 'Desc' }
  ]
}
```

### Notification List
```javascript
{
  type: 'notification-list',
  title: 'Title',
  titleKey: 'title',
  messageKey: 'message',
  typeKey: 'type',           // success | warning | info | error
  iconKey: 'icon',
  timeKey: 'timestamp',
  notifications: [ ... ]
}
```

### Data Table
```javascript
{
  type: 'data-table',
  title: 'Title',
  columns: [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' }
  ],
  data: [
    { name: 'John', email: 'john@example.com' }
  ]
}
```

---

## Layout Control

### Grid Columns
```javascript
gridCols: 1  // Full width (tables)
gridCols: 2  // 50/50 split (charts)
gridCols: 3  // 33% each (balanced)
gridCols: 4  // 25% each (metrics)
```

### Design Modes
```javascript
design: 'default'  // Full-width edge-to-edge
design: 'boxed'    // Centered with max-width
```

---

## Styling Customization

### Theme Variables (CSS)
```css
/* Colors */
--accent-color: #3b82f6;
--accent-color-dark: #1d4ed8;
--accent-color-light: #60a5fa;

/* Backgrounds */
--bg-primary: #ffffff;
--bg-secondary: #f5f7fa;

/* Text */
--text-primary: #1a1a1a;
--text-secondary: #666666;
--text-tertiary: #999999;

/* Borders */
--border-color: #e0e0e0;

/* Shadows */
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
```

### Apply Theme
```javascript
// Light theme
html.setAttribute('data-theme', 'light');

// Dark theme
html.setAttribute('data-theme', 'dark');

// Set accent color
html.setAttribute('data-accent', 'green');
```

---

## Common Tasks

### Change Accent Color
```javascript
export const dashboardConfig = {
  accentColor: 'purple'  // All components update
};
```

### Switch to Single-Page Layout
```javascript
export const dashboardConfig = {
  navbar: false  // Hide navbar + sidebar
};
```

### Add Profile Action
```javascript
// Update profile actions
actions: [
  { id: 'my-action', label: 'My Button', variant: 'primary' }
]

// Handle in container
const handleProfileAction = (actionId) => {
  if (actionId === 'my-action') {
    // Do something
  }
};
```

### Create Stats Card
```javascript
{
  id: 'metric-1',
  type: 'stats-card',
  title: 'ACTIVE',
  label: 'Users Online',
  value: 1234,
  change: 5.2,
  changeType: 'positive',
  icon: '👥'
}
```

### Create Multi-Page Dashboard
```javascript
pages: [
  {
    id: 'overview',
    title: 'Overview',
    icon: '📊',
    sections: [ /* content */ ]
  },
  {
    id: 'analytics',
    title: 'Analytics',
    icon: '📈',
    sections: [ /* content */ ]
  },
  {
    id: 'settings',
    title: 'Settings',
    icon: '⚙️',
    sections: [ /* content */ ]
  }
]
```

---

## Responsive Breakpoints

```javascript
// Automatic responsive behavior
// Desktop (≥1024px): Full layout
// Tablet (768px - 1023px): Optimized grid
// Mobile (< 768px): Single column
```

---

## File Reference

| File | Purpose |
|------|---------|
| `dashboardConfig.js` | Main configuration |
| `useTheme.js` | Theme + color management |
| `DashboardContainer.jsx` | Main layout component |
| `StatsCard.jsx` | Metric card display |
| `ProfileModal.jsx` | User profile modal |
| `theme.css` | Color definitions |
| `dashboard.css` | Component styling |
| `layout.css` | Layout styling |
| `modals.css` | Modal styling |

---

## Documentation

| File | Content |
|------|---------|
| `UI_JSON_GUIDE.md` | Complete API reference |
| `IMPLEMENTATION_GUIDE.md` | Technical details |
| `CHANGELOG.md` | All changes |
| `PROFESSIONAL_DESIGN_SUMMARY.md` | Full summary |
| `QUICK_REFERENCE.md` | This file |

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Color not changing | Check `accentColor` in config |
| Navbar doesn't hide | Check `navbar: false` in config |
| Action not triggering | Verify `onActionClick` handler |
| StatsCard not showing | Ensure `type: 'stats-card'` |
| Theme not switching | Check `data-theme` attribute |

---

## Best Practices

1. **Use config** - Don't hardcode values
2. **Check docs** - See UI_JSON_GUIDE.md for full API
3. **Test themes** - Try all colors + light/dark
4. **Mobile first** - Design for small screens first
5. **Smooth animations** - Use cubic-bezier transitions
6. **Accessibility** - Test keyboard navigation

---

**Quick Links:**
- 📖 Full Guide: `UI_JSON_GUIDE.md`
- 🔧 Implementation: `IMPLEMENTATION_GUIDE.md`
- 📋 Changes: `CHANGELOG.md`
- 📊 Summary: `PROFESSIONAL_DESIGN_SUMMARY.md`

**Version**: 2.0.0 - Professional Design Edition
**Status**: Production Ready ✅

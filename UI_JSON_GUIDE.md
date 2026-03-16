# UI JSON Configuration Guide

This guide explains how to control the entire dashboard UI using JSON configuration. The `dashboardConfig.js` file defines the structure, styling, and content of your dashboard.

## Table of Contents

1. [Global Configuration](#global-configuration)
2. [Design Modes](#design-modes)
3. [Layout and Navigation](#layout-and-navigation)
4. [Profile Modal](#profile-modal)
5. [Pages and Sections](#pages-and-sections)
6. [Widget Types](#widget-types)
7. [Examples](#examples)

---

## Global Configuration

The root level of `dashboardConfig` controls global settings:

```javascript
{
  name: 'Dashboard Title',              // Dashboard name shown in navbar
  layoutMode: 'sidebar',                // Navigation layout: 'sidebar' | 'top-nav'
  theme: 'light',                       // Theme: 'light' | 'dark'
  accentColor: 'blue',                  // Primary brand color
  design: 'default',                    // Design mode: 'default' (full-width) | 'boxed' (centered)
  navbar: true,                         // Show navbar: true | false
  profile: { ... },                     // Profile modal configuration
  pages: [ ... ]                        // Array of pages
}
```

### Global Configuration Options

| Key | Type | Values | Description |
|-----|------|--------|-------------|
| `name` | string | Any string | Name displayed in navbar |
| `layoutMode` | string | 'sidebar', 'top-nav' | Navigation layout style |
| `theme` | string | 'light', 'dark' | Color theme |
| `accentColor` | string | Color name | Primary accent color |
| `design` | string | 'default', 'boxed' | Layout design mode |
| `navbar` | boolean | true, false | Show/hide navbar |

---

## Design Modes

### Default Mode
Full-width layout that extends edge-to-edge:

```javascript
{
  design: 'default'
}
```

- Widgets stretch to full width
- Cards have subtle styling
- Minimal padding
- Best for maximizing screen real estate

### Boxed Mode
Centered layout with maximum width and padding:

```javascript
{
  design: 'boxed'
}
```

- Content centered with max-width of 1400px
- Gradient background behind content
- Cards with prominent shadows and rounded corners
- More visual spacing and hierarchy

---

## Layout and Navigation

### Navbar Control

Show or hide the navbar:

```javascript
{
  navbar: true    // Show navbar (default)
  // or
  navbar: false   // Hide navbar for single-page layout
}
```

### Layout Mode

Control the navigation style:

```javascript
{
  layoutMode: 'sidebar'  // Side navigation panel (default)
  // or
  layoutMode: 'top-nav'  // Top horizontal navigation
}
```

---

## Profile Modal

Configure the user profile modal that appears when clicking the profile button:

```javascript
{
  profile: {
    title: 'My Profile',                    // Modal title
    avatar: 'https://example.com/avatar.jpg', // Avatar image URL
    description: 'Welcome to your dashboard', // Modal description text
    
    // Array of key-value pairs displayed in the modal
    fields: [
      { label: 'Name', value: 'John Doe' },
      { label: 'Email', value: 'john@example.com' },
      { label: 'Role', value: 'Admin' }
    ],
    
    // Array of statistics displayed as a grid
    stats: [
      { label: 'Projects', value: '12' },
      { label: 'Tasks', value: '45' }
    ],
    
    // Array of action buttons
    actions: [
      {
        label: 'Edit Profile',
        variant: 'primary',           // 'primary' | 'secondary'
        onClick: null,                // Function to call (optional)
        closeOnClick: false           // Close modal after click
      }
    ]
  }
}
```

### Profile Configuration Options

| Key | Type | Description |
|-----|------|-------------|
| `title` | string | Title shown at top of modal |
| `avatar` | string | Image URL for avatar |
| `description` | string | Description text |
| `fields` | array | Array of {label, value} objects |
| `stats` | array | Array of {label, value} statistics |
| `actions` | array | Array of action buttons |

---

## Pages and Sections

### Page Structure

```javascript
{
  pages: [
    {
      id: 'overview',                        // Unique page identifier
      title: 'Overview',                     // Page title
      description: 'Summary of key metrics', // Page description
      icon: '📊',                            // Icon for navigation
      sections: [ ... ]                      // Array of sections
    }
  ]
}
```

### Section Structure

```javascript
{
  id: 'metrics-section',                     // Unique section identifier
  title: 'Key Metrics',                      // Section title
  description: 'Real-time indicators',       // Section description
  gridCols: 4,                               // Grid columns: 1-4
  widgets: [ ... ]                           // Array of widgets
}
```

### Section Options

| Key | Type | Description |
|-----|------|-------------|
| `id` | string | Unique identifier |
| `title` | string | Section heading |
| `description` | string | Descriptive text |
| `gridCols` | number | Number of grid columns (1-4) |
| `widgets` | array | Array of widget objects |

---

## Widget Types

### 1. Stats Card (`stats-card`)

A colorful card showing a single metric with change indicator:

```javascript
{
  id: 'metric-users',
  type: 'stats-card',
  title: 'Total Users',
  label: 'Users',
  value: 12453,
  change: 12.5,
  changeType: 'positive',    // 'positive' | 'negative' | 'neutral'
  icon: '👥'
}
```

**Options:**
- `id`: Unique identifier
- `type`: Must be 'stats-card'
- `title`: Card title
- `label`: Value label
- `value`: Numeric value
- `change`: Percentage change
- `changeType`: 'positive' (green), 'negative' (red), 'neutral'
- `icon`: Emoji or icon character

### 2. Card Design 1 (`cardDesign1`)

Minimalist card with icon, title, and trend:

```javascript
{
  id: 'card-design1',
  type: 'cardDesign1',
  title: 'Minimalist Card',
  value: '2,450',
  label: 'New Signups',
  icon: '✨',
  description: 'Clean and simple design',
  trend: '+15%'
}
```

**Options:**
- `id`: Unique identifier
- `type`: Must be 'cardDesign1'
- `title`: Card title
- `value`: Main value display
- `label`: Value label
- `icon`: Emoji or icon
- `description`: Descriptive text (optional)
- `trend`: Trend indicator (optional)

### 3. Card Design 2 (`cardDesign2`)

Featured card with accent color and mini chart:

```javascript
{
  id: 'card-design2',
  type: 'cardDesign2',
  title: 'Featured Card',
  value: '42.5K',
  label: 'Total Revenue',
  icon: '💎',
  description: 'Highlighted card design',
  chart: {
    type: 'mini-bar',
    data: [12, 19, 3, 5, 2, 3]
  },
  trend: '+8.2%'
}
```

**Options:**
- All options from CardDesign1
- `chart.type`: 'mini-bar' (mini bar chart)
- `chart.data`: Array of numbers for chart

### 4. Card Design 3 (`cardDesign3`)

Advanced card with multiple stats:

```javascript
{
  id: 'card-design3',
  type: 'cardDesign3',
  title: 'Advanced Card',
  value: '94.2%',
  label: 'Performance Score',
  icon: '⚡',
  description: 'Card with additional metrics',
  stats: [
    { name: 'Uptime', value: '99.9%' },
    { name: 'Latency', value: '45ms' }
  ],
  trend: '-0.1%'
}
```

**Options:**
- All options from CardDesign1
- `stats`: Array of {name, value} objects

### 5. Line Chart (`line-chart`)

Multi-line chart showing trends over time:

```javascript
{
  id: 'chart-users',
  type: 'line-chart',
  title: 'User Growth',
  subtitle: 'Last 12 months',
  dataKeys: ['Users', 'Premium'],
  data: [
    { name: 'Jan', Users: 4000, Premium: 2400 },
    { name: 'Feb', Users: 3000, Premium: 1398 }
  ]
}
```

### 6. Bar Chart (`bar-chart`)

Multi-series bar chart for comparisons:

```javascript
{
  id: 'chart-revenue',
  type: 'bar-chart',
  title: 'Revenue by Product',
  subtitle: 'Monthly comparison',
  dataKeys: ['Product A', 'Product B'],
  data: [
    { name: 'Jan', 'Product A': 4000, 'Product B': 2400 }
  ]
}
```

### 7. Pie Chart (`pie-chart`)

Pie chart for proportions:

```javascript
{
  id: 'chart-pie',
  type: 'pie-chart',
  title: 'Market Share',
  data: [
    { name: 'Product A', value: 35 },
    { name: 'Product B', value: 28 }
  ]
}
```

### 8. Donut Chart (`donut-chart`)

Similar to pie chart with hollow center:

```javascript
{
  id: 'chart-donut',
  type: 'donut-chart',
  title: 'User Segmentation',
  data: [
    { name: 'Free', value: 45 },
    { name: 'Premium', value: 35 }
  ]
}
```

### 9. Area Chart (`area-chart`)

Area chart for trend visualization:

```javascript
{
  id: 'chart-area',
  type: 'area-chart',
  title: 'Traffic Trends',
  dataKeys: ['Organic', 'Paid', 'Direct'],
  data: [
    { name: 'Week 1', Organic: 2400, Paid: 1200, Direct: 800 }
  ]
}
```

### 10. Simple List (`simple-list`)

Key-value pair list:

```javascript
{
  id: 'list-simple',
  type: 'simple-list',
  title: 'Top Features',
  labelKey: 'name',
  valueKey: 'count',
  items: [
    { name: 'Real-time Analytics', count: '1,234 users' }
  ]
}
```

### 11. Icon List (`icon-list`)

List with icons and descriptions:

```javascript
{
  id: 'list-icon',
  type: 'icon-list',
  title: 'Recent Activities',
  labelKey: 'title',
  descriptionKey: 'description',
  iconKey: 'icon',
  items: [
    { icon: '✅', title: 'New User', description: 'John registered' }
  ]
}
```

### 12. Notification List (`notification-list`)

Timestamped notifications:

```javascript
{
  id: 'notifications',
  type: 'notification-list',
  title: 'Recent Notifications',
  titleKey: 'title',
  messageKey: 'message',
  typeKey: 'type',           // 'success' | 'warning' | 'info' | 'error'
  iconKey: 'icon',
  timeKey: 'timestamp',
  notifications: [
    {
      icon: '✅',
      title: 'Completed',
      message: 'Task finished',
      type: 'success',
      timestamp: new Date()
    }
  ]
}
```

### 13. Data Table (`data-table`)

Table for structured data:

```javascript
{
  id: 'data-table',
  type: 'data-table',
  title: 'User Activity',
  columns: [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'status', label: 'Status' }
  ],
  data: [
    { name: 'Alice', email: 'alice@example.com', status: 'Active' }
  ]
}
```

---

## Examples

### Example 1: Simple Dashboard with Design Mode

```javascript
export const dashboardConfig = {
  name: 'My Dashboard',
  theme: 'light',
  design: 'boxed',     // Use boxed design mode
  navbar: true,
  
  pages: [
    {
      id: 'home',
      title: 'Home',
      icon: '🏠',
      sections: [
        {
          id: 'stats',
          gridCols: 3,
          widgets: [
            {
              id: 'metric-1',
              type: 'stats-card',
              title: 'Total Users',
              label: 'Users',
              value: 1500,
              change: 10,
              changeType: 'positive',
              icon: '👥'
            }
          ]
        }
      ]
    }
  ]
};
```

### Example 2: Multi-Page Layout

```javascript
{
  pages: [
    {
      id: 'overview',
      title: 'Overview',
      icon: '📊',
      sections: [
        {
          id: 'metrics',
          gridCols: 4,
          widgets: [ /* stats cards */ ]
        },
        {
          id: 'charts',
          gridCols: 2,
          widgets: [ /* line and bar charts */ ]
        }
      ]
    },
    {
      id: 'analytics',
      title: 'Analytics',
      icon: '📈',
      sections: [
        {
          id: 'distribution',
          gridCols: 3,
          widgets: [ /* pie charts */ ]
        }
      ]
    },
    {
      id: 'data',
      title: 'Data',
      icon: '📋',
      sections: [
        {
          id: 'tables',
          gridCols: 1,
          widgets: [ /* data tables */ ]
        }
      ]
    }
  ]
}
```

### Example 3: Custom Profile Modal

```javascript
{
  profile: {
    title: 'Admin Profile',
    avatar: 'https://example.com/admin.jpg',
    description: 'Manage your account settings and preferences',
    fields: [
      { label: 'Full Name', value: 'John Administrator' },
      { label: 'Email', value: 'admin@example.com' },
      { label: 'Department', value: 'Engineering' },
      { label: 'Last Login', value: '2 hours ago' }
    ],
    stats: [
      { label: 'API Calls', value: '2.4M' },
      { label: 'Data Usage', value: '48GB' },
      { label: 'Team Members', value: '15' },
      { label: 'Active Projects', value: '8' }
    ],
    actions: [
      {
        label: 'Edit Profile',
        variant: 'primary',
        onClick: null
      },
      {
        label: 'Change Password',
        variant: 'secondary',
        onClick: null
      },
      {
        label: 'Logout',
        variant: 'secondary',
        closeOnClick: true
      }
    ]
  }
}
```

---

## Tips and Best Practices

### Grid Columns
Use appropriate grid column counts:
- **1 column**: For full-width widgets like tables
- **2 columns**: For side-by-side charts or cards
- **3 columns**: For balanced layouts
- **4 columns**: For metric cards or small widgets

### Responsive Design
The dashboard automatically adapts:
- Desktop: Uses full grid columns
- Tablet (768px): Reduces to fewer columns
- Mobile: Stacks to 1 column

### Data Keys for Charts
When using `dataKeys`, the values must match object keys in the data array:

```javascript
dataKeys: ['Users', 'Premium'],
data: [
  { name: 'Jan', Users: 4000, Premium: 2400 },  // Keys match!
  { name: 'Feb', Users: 3000, Premium: 1398 }
]
```

### Naming Conventions
- Use kebab-case for `id` fields: `metrics-section`, `chart-users`
- Use camelCase for data object keys: `dataKeys`, `labelKey`
- Use PascalCase for component types: `stats-card`, `cardDesign1`

### Optional Fields
Most configuration fields are optional. Omit them to use defaults:

```javascript
{
  id: 'my-card',
  type: 'cardDesign1',
  title: 'Card Title',
  value: '100',
  // icon, description, trend are optional
}
```

---

## Troubleshooting

### Widget Not Rendering
1. Check that `type` matches a registered widget type
2. Verify required fields are present
3. Check browser console for error messages

### Chart Data Not Showing
1. Verify `dataKeys` match object keys in data
2. Ensure `data` array has at least one item
3. Check that values are numbers, not strings

### Styling Issues
1. Check `design` mode: 'default' or 'boxed'
2. Verify `navbar` is true/false correctly
3. Ensure `accentColor` is a valid CSS color

---

## Advanced: Adding Custom Widgets

To add a custom widget type, update `rendererMap.js`:

```javascript
import MyCustomWidget from '../components/MyCustomWidget';

export const rendererMap = {
  'stats-card': StatsCard,
  'my-widget': MyCustomWidget,  // Add new type
  // ... other mappings
};
```

Then use it in config:

```javascript
{
  type: 'my-widget',
  // Custom widget props
}
```

---

For more information, see the component source files in `src/components/`.

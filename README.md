# Akhil Dashboard

A JSON-driven SaaS dashboard framework for building modern admin dashboards from configuration instead of hardcoded page layouts.

> An SaaS Created by **Akhilesh** for developers who want reusable UI blocks, scalable dashboard architecture, and faster React development without coding single line.

`'akhilesh-ui-verse'` helps developers build dashboards UI with:

- Multiple pages
- Section-based layouts
- KPI cards
- Advanced chart blocks
- Lists and notification feeds
- Data tables
- Theme controls
- Sidebar and navbar navigation
- Profile modal content from JSON

## Preview

<div style="display: grid; overflow-x: auto; gap: 16px; padding: 10px 0;">

  <div style="min-width: 500px;">
    <img src="https://ik.imagekit.io/akhil8605unicore/Json%20To%20Dashboard%20Preview%201?updatedAt=1773748098324" width="100%" />
  </div>

  <div style="min-width: 500px;">
    <img src="https://ik.imagekit.io/akhil8605unicore/Json%20To%20Dashboard%20Preview%202?updatedAt=1773748117070" width="100%" />
  </div>
</div>

## Creator

<p align="center">
  <img
    src="https://ik.imagekit.io/akhil8605unicore/Akhilesh%20Profile%20PIC.jpg?updatedAt=1763131380442"
    alt="Akhilesh"
    width="140"
    style="border-radius:999px;"
  />
</p>

<p align="center">
  <strong>Akhilesh</strong><br />
  Full Stack Web Dev • Mobile App Developer • UI/UX Builder • Artificial Intelligence
</p>

<p align="center">
  <a href="https://akhliesh-8605-portfolio.vercel.app">Portfolio</a> •
  <a href="https://www.linkedin.com/in/akhil-8605-adam/">LinkedIn</a> •
  <a href="https://github.com/akhil-8605">GitHub</a> •
  <a href="https://www.freelancer.in/u/akhil8605">Freelancer</a> •
  <a href="https://www.instagram.com/itz__your__akil/">Instagram</a>
</p>

> Built SaaS with a focus on reusable UI systems, scalable config-driven design, and a smoother developer experience for React projects.

### Connect

- Portfolio: `https://akhliesh-8605-portfolio.vercel.app`
- LinkedIn: `https://www.linkedin.com/in/akhil-8605-adam/`
- GitHub: `https://github.com/akhil-8605`
- Freelancer: `https://www.freelancer.in/u/akhil8605`
- Instagram: `https://www.instagram.com/itz__your__akil/`
- Email: `akhileshadam186@gmail.com`

## Install

```bash
npm install akhilesh-ui-verse
```

## Import

```jsx
import { AkDashboard } from "akhilesh-ui-verse";
```

## Quick Start

Use the shortest supported JSON format when you want to render a dashboard quickly.

```jsx
import { AkDashboard } from "akhilesh-ui-verse";

const config = {
  theme: "light",
  pages: [
    {
      name: "Analytics",
      charts: [
        {
          type: "bar",
          values: [10, 20, 30]
        }
      ]
    }
  ]
};

export default function App() {
  return <AkDashboard config={config} />;
}
```

## What `AkDashboard` Does

`AkDashboard` receives one `config` object and then:

1. Normalizes your config
2. Builds pages
3. Builds sections inside each page
4. Resolves widgets from the widget `type`
5. Applies theme, layout, and profile settings

This makes the dashboard data-driven and much easier to scale later.

## Configuration Structure

The package supports two styles:

- Simple config for quick usage
- Full config for advanced dashboards

### Simple Config

```js
const config = {
  theme: "light",
  pages: [
    {
      name: "Analytics",
      charts: [
        { type: "bar", values: [10, 20, 30] },
        { type: "line", values: [12, 18, 28] }
      ]
    }
  ]
};
```

### Full Config

```js
const config = {
  name: "Dashboard Created Using akhilesh-ui-verse",
  layoutMode: "sidebar",
  theme: "light",
  accentColor: "sky",
  design: "default",
  navbar: true,
  profile: {
    title: "My Profile",
    avatar: "https://via.placeholder.com/80",
    fields: [
      { label: "Name", value: "Akhil" },
      { label: "Email", value: "akhil@example.com" }
    ]
  },
  pages: [
    {
      id: "overview",
      title: "Overview",
      sections: [
        {
          id: "metrics-section",
          gridCols: 4,
          widgets: [
            {
              id: "metric-users",
              type: "stats-card",
              title: "Total Users",
              label: "Users",
              value: 12453,
              change: 12.5,
              changeType: "positive",
              icon: "👥"
            }
          ]
        }
      ]
    }
  ]
};
```

## Root Config Reference

### `name`

Dashboard title displayed in the navbar and branding areas.

```js
name: "Dashboard Created Using akhilesh-ui-verse"
```

### `layoutMode`

Controls the overall layout style.

Supported values:

- `sidebar`
- `top-nav`
- `minimal`

```js
layoutMode: "sidebar"
```

### `theme`

Sets the initial theme.

Supported values:

- `light`
- `dark`

```js
theme: "light"
```

### `accentColor`

Sets the primary accent used by the theme layer.

Supported values:

* `blue`
* `green`
* `purple`
* `orange`
* `red`
* `indigo`
* `cyan`
* `teal`
* `pink`
* `rose`
* `amber`
* `lime`
* `emerald`
* `sky`
* `slate`

```js
accentColor: "sky"
```

### `design`

Controls the page width style.

Supported values:

- `default`
- `boxed`

```js
design: "default"
```

### `navbar`

Shows or hides the navbar.

```js
navbar: true
```

### `profile`

Defines the profile modal from JSON.

```js
profile: {
  title: "My Profile",
  avatar: "https://via.placeholder.com/80",
  fields: [
    { label: "Name", value: "Akhil" },
    { label: "Email", value: "akhil@example.com" }
  ],
  description: "Welcome to your dashboard.",
  stats: [
    { label: "Projects", value: "12" }
  ],
  actions: [
    { id: "logout", label: "Logout", variant: "secondary", closeOnClick: true }
  ]
}
```

### `pages`

Each page is rendered from the `pages` array.

```js
pages: [
  {
    id: "overview",
    title: "Overview",
    sections: []
  }
]
```

## Page Structure

Each page can support:

- `id`
- `title`
- `name`
- `description`
- `icon`
- `sections`
- `charts`
- `widgets`
- `elements`

### Full Page Example

```js
{
  id: "analytics",
  title: "Analytics",
  description: "Detailed analytics and performance metrics.",
  icon: "📈",
  sections: [
    {
      id: "distribution-section",
      title: "Distribution Analysis",
      gridCols: 2,
      widgets: []
    }
  ]
}
```

### Simple Page Example

```js
{
  name: "Analytics",
  charts: [
    { type: "bar", values: [10, 20, 30] }
  ]
}
```

## Section Structure

Each page contains sections.

A section supports:

- `id`
- `title`
- `description`
- `gridCols`
- `widgets`
- `elements`

```js
{
  id: "metrics-section",
  title: "Key Metrics",
  description: "Real-time performance indicators",
  gridCols: 4,
  widgets: []
}
```

`gridCols` controls how many cards appear per row.

## Supported Widget Types

The package currently supports:

- `stats-card`
- `cardDesign1`
- `cardDesign2`
- `cardDesign3`
- `bar-chart`
- `line-chart`
- `pie-chart`
- `area-chart`
- `donut-chart`
- `simple-list`
- `icon-list`
- `notification-list`
- `data-table`

The short aliases below are also normalized automatically:

- `bar`
- `line`
- `pie`
- `area`
- `donut`

## Component Blocks Guide

### `stats-card`

Used for KPIs and summary metrics.

```js
{
  id: "metric-users",
  type: "stats-card",
  title: "Total Users",
  label: "Users",
  value: 12453,
  change: 12.5,
  changeType: "positive",
  icon: "👥"
}
```

### `cardDesign1`

Used for clean compact insight cards.

```js
{
  id: "card-design1",
  type: "cardDesign1",
  title: "Minimalist Card",
  value: "2,450",
  label: "New Signups",
  icon: "✨",
  description: "Clean and simple card design",
  trend: "+15%"
}
```

### `cardDesign2`

Used for highlighted cards with richer emphasis.

```js
{
  id: "card-design2",
  type: "cardDesign2",
  title: "Featured Card",
  value: "42.5K",
  label: "Total Revenue",
  icon: "💎",
  description: "Highlighted card with accent color",
  chart: {
    type: "mini-bar",
    data: [12, 19, 3, 5, 2, 3]
  },
  trend: "+8.2%"
}
```

### `cardDesign3`

Used for advanced cards with supporting stat rows.

```js
{
  id: "card-design3",
  type: "cardDesign3",
  title: "Advanced Card",
  value: "94.2%",
  label: "Performance Score",
  icon: "⚡",
  description: "Card with additional metrics",
  stats: [
    { name: "Uptime", value: "99.9%" },
    { name: "Latency", value: "45ms" },
    { name: "Errors", value: "0.2%" }
  ],
  trend: "-0.1%"
}
```

### `line-chart`

Best for growth and time-series trends.

```js
{
  id: "chart-users",
  type: "line-chart",
  title: "User Growth",
  subtitle: "Last 12 months",
  dataKeys: ["Users", "Premium"],
  data: [
    { name: "Jan", Users: 4000, Premium: 2400 },
    { name: "Feb", Users: 3000, Premium: 1398 }
  ]
}
```

### `bar-chart`

Best for grouped comparison data.

```js
{
  id: "chart-revenue",
  type: "bar-chart",
  title: "Revenue by Product",
  subtitle: "Monthly comparison",
  dataKeys: ["Product A", "Product B", "Product C"],
  data: [
    { name: "Jan", "Product A": 4000, "Product B": 2400, "Product C": 1200 },
    { name: "Feb", "Product A": 3000, "Product B": 1398, "Product C": 1500 }
  ]
}
```

### `pie-chart`

Best for distribution views.

```js
{
  id: "chart-pie",
  type: "pie-chart",
  title: "Market Share",
  data: [
    { name: "Product A", value: 35 },
    { name: "Product B", value: 28 },
    { name: "Product C", value: 22 },
    { name: "Others", value: 15 }
  ]
}
```

### `donut-chart`

Best for segmentation with a cleaner circular presentation.

```js
{
  id: "chart-donut",
  type: "donut-chart",
  title: "User Segmentation",
  data: [
    { name: "Free", value: 45 },
    { name: "Premium", value: 35 },
    { name: "Enterprise", value: 20 }
  ]
}
```

### `area-chart`

Best for trend plus volume storytelling.

```js
{
  id: "chart-area",
  type: "area-chart",
  title: "Traffic Trends",
  dataKeys: ["Organic", "Paid", "Direct"],
  data: [
    { name: "Week 1", Organic: 2400, Paid: 1200, Direct: 800 },
    { name: "Week 2", Organic: 2210, Paid: 1290, Direct: 950 }
  ]
}
```

### `simple-list`

Best for ranked lists and compact information.

```js
{
  id: "list-simple",
  type: "simple-list",
  title: "Top Features",
  labelKey: "name",
  valueKey: "count",
  items: [
    { name: "Real-time Analytics", count: "1,234 users" },
    { name: "Custom Reports", count: "892 users" }
  ]
}
```

### `icon-list`

Best for timeline-style and activity content.

```js
{
  id: "list-icon",
  type: "icon-list",
  title: "Recent Activities",
  labelKey: "title",
  descriptionKey: "description",
  iconKey: "icon",
  items: [
    { icon: "✅", title: "New User Signup", description: "John Doe registered" },
    { icon: "💳", title: "Payment Received", description: "$5,000 from Acme Corp" }
  ]
}
```

### `notification-list`

Best for status messages and alerts.

```js
{
  id: "notifications",
  type: "notification-list",
  title: "Recent Notifications",
  titleKey: "title",
  messageKey: "message",
  typeKey: "type",
  iconKey: "icon",
  timeKey: "timestamp",
  notifications: [
    {
      icon: "✅",
      title: "Action Completed",
      message: "Your bulk export has finished processing",
      type: "success",
      timestamp: new Date()
    }
  ]
}
```

### `data-table`

Best for row-and-column business data.

```js
{
  id: "data-table",
  type: "data-table",
  title: "User Activity",
  columns: [
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "status", label: "Status" },
    { key: "joins", label: "Joins", type: "numeric" },
    { key: "lastActive", label: "Last Active" }
  ],
  data: [
    {
      name: "Alice Johnson",
      email: "alice@example.com",
      status: "Active",
      joins: 542,
      lastActive: "2 hours ago"
    }
  ]
}
```

## Full Advanced Example

Below is the complete advanced JSON example for a multi-page dashboard using cards, charts, lists, tables, and a profile modal.

```js
/**
 * Dashboard Configuration
 * Defines the structure, pages, sections, and widgets for the dashboard
 */

export const dashboardConfig = {
  // Dashboard name and global settings
  name: 'Dashboard Created Using akhilesh-ui-verse', // Dashboard title displayed in navbar and page titles
  layoutMode: 'sidebar', // 'sidebar' | 'top-nav' | 'minimal'
  theme: 'light', // 'light' | 'dark'
  accentColor: 'sky', // Primary brand color

  // Design mode: controls layout style - 'default' for full-width, 'boxed' for centered with margins
  design: 'default',

  // Navbar visibility: set to false to remove navbar and render single-page layout
  navbar: true,

  // Profile modal configuration - displayed in navbar or via config
  profile: {
    title: 'My Profile',
    avatar: 'https://ik.imagekit.io/akhil8605unicore/Akhilesh%20Profile%20PIC.jpg?updatedAt=1763131380442',
    fields: [
      { label: 'Name', value: 'Akhil' },
      { label: 'Email', value: 'akhil@example.com' },
      { label: 'Role', value: 'Admin' },
      { label: 'Status', value: 'Active' }
    ],
    description: 'Welcome to your dashboard. Manage your account and preferences here.',
    stats: [
      { label: 'Projects', value: '12' },
      { label: 'Tasks', value: '45' },
      { label: 'Teams', value: '8' }
    ],
    actions: [
      { id: 'edit-profile', label: 'Edit Profile', variant: 'primary', closeOnClick: false },
      { id: 'logout', label: 'Logout', variant: 'secondary', closeOnClick: true }
    ]
  },

  pages: [
    // Overview Page
    {
      id: 'overview',
      title: 'Overview',
      description: 'Welcome to your dashboard. Here\\'s a summary of your key metrics.',
      icon: '📊',
      sections: [
        // Key Metrics
        {
          id: 'metrics-section',
          title: 'Key Metrics',
          description: 'Real-time performance indicators',
          gridCols: 4,
          widgets: [
            {
              id: 'metric-users',
              type: 'stats-card',
              title: 'Total Users',
              label: 'Users',
              value: 12453,
              change: 12.5,
              changeType: 'positive',
              icon: '👥'
            },
            {
              id: 'metric-revenue',
              type: 'stats-card',
              title: 'Revenue',
              label: 'Total Revenue',
              value: 245680,
              change: 8.2,
              changeType: 'positive',
              icon: '💰'
            },
            {
              id: 'metric-conversion',
              type: 'stats-card',
              title: 'Conversion Rate',
              label: 'Conversion',
              value: 3.47,
              change: -1.2,
              changeType: 'negative',
              icon: '📈'
            },
            {
              id: 'metric-engagement',
              type: 'stats-card',
              title: 'Engagement',
              label: 'Avg. Engagement',
              value: 8.94,
              change: 5.8,
              changeType: 'positive',
              icon: '🎯'
            }
          ]
        },
        // Card Design Variants Section
        {
          id: 'card-designs-section',
          title: 'Card Design Variants',
          description: 'Different card layout options for your dashboard',
          gridCols: 3,
          widgets: [
            {
              id: 'card-design1',
              type: 'cardDesign1',
              title: 'Minimalist Card',
              value: '2,450',
              label: 'New Signups',
              icon: '✨',
              description: 'Clean and simple card design',
              trend: '+15%'
            },
            {
              id: 'card-design2',
              type: 'cardDesign2',
              title: 'Featured Card',
              value: '42.5K',
              label: 'Total Revenue',
              icon: '💎',
              description: 'Highlighted card with accent color',
              chart: {
                type: 'mini-bar',
                data: [12, 19, 3, 5, 2, 3]
              },
              trend: '+8.2%'
            },
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
                { name: 'Latency', value: '45ms' },
                { name: 'Errors', value: '0.2%' }
              ],
              trend: '-0.1%'
            }
          ]
        },
        // Charts Section
        {
          id: 'charts-section',
          title: 'Analytics',
          gridCols: 1,
          widgets: [
            {
              id: 'chart-users',
              type: 'line-chart',
              title: 'User Growth',
              subtitle: 'Last 12 months',
              dataKeys: ['Users', 'Premium'],
              data: [
                { name: 'Jan', Users: 4000, Premium: 2400 },
                { name: 'Feb', Users: 3000, Premium: 1398 },
                { name: 'Mar', Users: 2000, Premium: 9800 },
                { name: 'Apr', Users: 2780, Premium: 3908 },
                { name: 'May', Users: 1890, Premium: 4800 },
                { name: 'Jun', Users: 2390, Premium: 3800 },
                { name: 'Jul', Users: 3490, Premium: 4300 },
                { name: 'Aug', Users: 4200, Premium: 5100 },
                { name: 'Sep', Users: 3800, Premium: 4600 },
                { name: 'Oct', Users: 4500, Premium: 5200 },
                { name: 'Nov', Users: 5100, Premium: 5800 },
                { name: 'Dec', Users: 6200, Premium: 7200 }
              ]
            },
            {
              id: 'chart-revenue',
              type: 'bar-chart',
              title: 'Revenue by Product',
              subtitle: 'Monthly comparison',
              dataKeys: ['Product A', 'Product B', 'Product C'],
              data: [
                { name: 'Jan', 'Product A': 4000, 'Product B': 2400, 'Product C': 1200 },
                { name: 'Feb', 'Product A': 3000, 'Product B': 1398, 'Product C': 1500 },
                { name: 'Mar', 'Product A': 2000, 'Product B': 9800, 'Product C': 2200 },
                { name: 'Apr', 'Product A': 2780, 'Product B': 3908, 'Product C': 1600 },
                { name: 'May', 'Product A': 1890, 'Product B': 4800, 'Product C': 1800 },
                { name: 'Jun', 'Product A': 2390, 'Product B': 3800, 'Product C': 2100 },
                { name: 'Jan', 'Product A': 4000, 'Product B': 2400, 'Product C': 1200 },
                { name: 'Feb', 'Product A': 3000, 'Product B': 1398, 'Product C': 1500 },
                { name: 'Mar', 'Product A': 2000, 'Product B': 9800, 'Product C': 2200 },
                { name: 'Apr', 'Product A': 2780, 'Product B': 3908, 'Product C': 1600 },
                { name: 'May', 'Product A': 1890, 'Product B': 4800, 'Product C': 1800 },
                { name: 'Jun', 'Product A': 2390, 'Product B': 3800, 'Product C': 2100 },
                { name: 'Jan', 'Product A': 4000, 'Product B': 2400, 'Product C': 1200 },
                { name: 'Feb', 'Product A': 3000, 'Product B': 1398, 'Product C': 1500 },
                { name: 'Mar', 'Product A': 2000, 'Product B': 9800, 'Product C': 2200 },
                { name: 'Apr', 'Product A': 2780, 'Product B': 3908, 'Product C': 1600 },
                { name: 'May', 'Product A': 1890, 'Product B': 4800, 'Product C': 1800 },
                { name: 'Jun', 'Product A': 2390, 'Product B': 3800, 'Product C': 2100 }
              ]
            }
          ]
        }
      ]
    },

    // Analytics Page
    {
      id: 'analytics',
      title: 'Analytics',
      description: 'Detailed analytics and performance metrics.',
      icon: '📈',
      sections: [
        {
          id: 'distribution-section',
          title: 'Distribution Analysis',
          gridCols: 2,
          widgets: [
            {
              id: 'chart-pie',
              type: 'pie-chart',
              title: 'Market Share',
              data: [
                { name: 'Product A', value: 35 },
                { name: 'Product B', value: 28 },
                { name: 'Product C', value: 22 },
                { name: 'Others', value: 15 }
              ]
            },
            {
              id: 'chart-donut',
              type: 'donut-chart',
              title: 'User Segmentation',
              data: [
                { name: 'Free', value: 45 },
                { name: 'Premium', value: 35 },
                { name: 'Enterprise', value: 20 }
              ]
            },
          ]
        },
        {
          id: 'traffic-trends-section',
          title: ' ',
          gridCols: 1,
          widgets: [
            {
              id: 'chart-area',
              type: 'area-chart',
              title: 'Traffic Trends',
              dataKeys: ['Organic', 'Paid', 'Direct'],
              data: [
                { name: 'Week 1', Organic: 2400, Paid: 1200, Direct: 800 },
                { name: 'Week 2', Organic: 2210, Paid: 1290, Direct: 950 },
                { name: 'Week 3', Organic: 2290, Paid: 1200, Direct: 1100 },
                { name: 'Week 4', Organic: 2000, Paid: 1398, Direct: 1200 },
                { name: 'Week 5', Organic: 2181, Paid: 1800, Direct: 950 },
                { name: 'Week 6', Organic: 2500, Paid: 1908, Direct: 1200 },
                { name: 'Week 7', Organic: 2100, Paid: 2800, Direct: 1100 },
                { name: 'Week 8', Organic: 2400, Paid: 1908, Direct: 1050 }
              ]
            }
          ]
        }
      ],
    },

    // Data Page
    {
      id: 'data',
      title: 'Data',
      description: 'View and manage your data.',
      icon: '📋',
      sections: [
        {
          id: 'lists-section',
          title: 'Lists & Tables',
          gridCols: 2,
          widgets: [
            {
              id: 'list-simple',
              type: 'simple-list',
              title: 'Top Features',
              labelKey: 'name',
              valueKey: 'count',
              items: [
                { name: 'Real-time Analytics', count: '1,234 users' },
                { name: 'Custom Reports', count: '892 users' },
                { name: 'API Access', count: '456 users' },
                { name: 'Team Collaboration', count: '678 users' },
                { name: 'Data Export', count: '345 users' }
              ]
            },
            {
              id: 'list-icon',
              type: 'icon-list',
              title: 'Recent Activities',
              labelKey: 'title',
              descriptionKey: 'description',
              iconKey: 'icon',
              items: [
                { icon: '✅', title: 'New User Signup', description: 'John Doe registered' },
                { icon: '💳', title: 'Payment Received', description: '$5,000 from Acme Corp' },
                { icon: '📊', title: 'Report Generated', description: 'Q4 Performance Review' },
                { icon: '⚠️', title: 'System Alert', description: 'API rate limit reached' },
                { icon: '🔧', title: 'Update Released', description: 'Version 2.5.0 available' }
              ]
            }
          ]
        },
        {
          id: 'notifications-section',
          gridCols: 1,
          widgets: [
            {
              id: 'notifications',
              type: 'notification-list',
              title: 'Recent Notifications',
              titleKey: 'title',
              messageKey: 'message',
              typeKey: 'type',
              iconKey: 'icon',
              timeKey: 'timestamp',
              notifications: [
                { icon: '✅', title: 'Action Completed', message: 'Your bulk export has finished processing', type: 'success', timestamp: new Date(Date.now() - 300000) },
                { icon: '⚠️', title: 'Warning', message: 'Your API quota is at 85% usage', type: 'warning', timestamp: new Date(Date.now() - 600000) },
                { icon: 'ℹ️', title: 'Information', message: 'New feature available: Advanced Filters', type: 'info', timestamp: new Date(Date.now() - 900000) },
                { icon: '❌', title: 'Error', message: 'Failed to sync data from third-party service', type: 'error', timestamp: new Date(Date.now() - 1200000) }
              ]
            }
          ]
        },
        {
          id: 'table-section',
          gridCols: 1,
          widgets: [
            {
              id: 'data-table',
              type: 'data-table',
              title: 'User Activity',
              columns: [
                { key: 'name', label: 'Name' },
                { key: 'email', label: 'Email' },
                { key: 'status', label: 'Status' },
                { key: 'joins', label: 'Joins', type: 'numeric' },
                { key: 'lastActive', label: 'Last Active' }
              ],
              data: [
                { name: 'Alice Johnson', email: 'alice@example.com', status: 'Active', joins: 542, lastActive: '2 hours ago' },
                { name: 'Bob Smith', email: 'bob@example.com', status: 'Active', joins: 389, lastActive: '1 day ago' },
                { name: 'Carol Davis', email: 'carol@example.com', status: 'Inactive', joins: 267, lastActive: '1 week ago' },
                { name: 'David Wilson', email: 'david@example.com', status: 'Active', joins: 654, lastActive: '3 hours ago' },
                { name: 'Emma Brown', email: 'emma@example.com', status: 'Active', joins: 123, lastActive: '30 min ago' }
              ]
            }
          ]
        }
      ]
    }
  ]
};
```

## How To Build Your Own Dashboard

1. Create the root dashboard object
2. Add pages
3. Add sections
4. Add widgets inside sections
5. Choose the correct widget type for each use case
6. Pass the config into `AkDashboard`

```jsx
import { AkDashboard } from "akhilesh-ui-verse";
import { dashboardConfig } from "./dashboardConfig";

export default function App() {
  return <AkDashboard config={dashboardConfig} />;
}
```

## Best Practices

- Use `stats-card` for KPIs
- Use `line-chart` and `area-chart` for time-based trends
- Use `bar-chart` for category comparison
- Use `pie-chart` and `donut-chart` for distribution
- Use `simple-list` and `icon-list` for compact content blocks
- Use `data-table` for structured row-based business data
- Keep section titles short and clear
- Group related widgets together
- Use `gridCols` carefully so cards stay readable

## Build For npm

```bash
npm run build
```

## Run Locally

```bash
npm start
```

## Publish To npm

```bash
npm login
npm publish
```

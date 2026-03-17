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
    avatar: 'https://via.placeholder.com/80',
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
      description: 'Welcome to your dashboard. Here\'s a summary of your key metrics.',
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

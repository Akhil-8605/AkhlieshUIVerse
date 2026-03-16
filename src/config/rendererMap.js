import StatsCard from '../components/dashboard/StatsCard';
import CardDesign1 from '../components/cards/CardDesign1';
import CardDesign2 from '../components/cards/CardDesign2';
import CardDesign3 from '../components/cards/CardDesign3';
import BarChartWidget from '../components/charts/BarChartWidget';
import LineChartWidget from '../components/charts/LineChartWidget';
import PieChartWidget from '../components/charts/PieChartWidget';
import AreaChartWidget from '../components/charts/AreaChartWidget';
import DonutChartWidget from '../components/charts/DonutChartWidget';
import SimpleList from '../components/lists/SimpleList';
import IconList from '../components/lists/IconList';
import NotificationList from '../components/lists/NotificationList';
import DataTable from '../components/lists/DataTable';

/**
 * Renderer Map - Maps widget type strings to React components
 * Used by WidgetRenderer to dynamically render components based on config
 */
export const rendererMap = {
  // Dashboard Widgets
  'stats-card': StatsCard,
  
  // Card Design Variants
  'cardDesign1': CardDesign1,
  'cardDesign2': CardDesign2,
  'cardDesign3': CardDesign3,
  
  // Chart Widgets
  'bar-chart': BarChartWidget,
  'line-chart': LineChartWidget,
  'pie-chart': PieChartWidget,
  'area-chart': AreaChartWidget,
  'donut-chart': DonutChartWidget,
  
  // List Widgets
  'simple-list': SimpleList,
  'icon-list': IconList,
  'notification-list': NotificationList,
  'data-table': DataTable
};

export const widgetTypes = Object.keys(rendererMap);

/**
 * Get renderer for a widget type
 * @param {string} type - The widget type
 * @returns {React.Component} - The component to render
 */
export const getRenderer = (type) => {
  return rendererMap[type];
};

/**
 * Check if a widget type is registered
 * @param {string} type - The widget type
 * @returns {boolean} - True if registered
 */
export const isValidWidgetType = (type) => {
  return widgetTypes.includes(type);
};

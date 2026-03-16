import React from 'react';
import DashboardContainer from './components/dashboard/DashboardContainer';
import { rendererMap } from './config/rendererMap';
import { dashboardConfig } from './config/dashboardConfig';
import './styles/global.css';
import './styles/theme.css';
import './styles/layout.css';
import './styles/dashboard.css';
import './styles/charts.css';
import './styles/lists.css';
import './styles/animations.css';

function App() {
  return (
    <DashboardContainer 
      config={dashboardConfig} 
      rendererMap={rendererMap}
    />
  );
}

export default App;

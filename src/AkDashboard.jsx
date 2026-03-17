import React from 'react';
import DashboardContainer from './components/dashboard/DashboardContainer';
import { rendererMap } from './config/rendererMap';
import { parseConfig } from './utils/configParser';
import './styles/global.css';
import './styles/theme.css';
import './styles/layout.css';
import './styles/dashboard.css';
import './styles/charts.css';
import './styles/lists.css';
import './styles/animations.css';

const AkDashboard = ({ config, components = {} }) => {
  const parsedConfig = parseConfig(config);

  return (
    <DashboardContainer
      config={parsedConfig}
      rendererMap={{ ...rendererMap, ...components }}
    />
  );
};

export default AkDashboard;

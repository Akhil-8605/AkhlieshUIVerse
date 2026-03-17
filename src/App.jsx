import React from 'react';
import AkDashboard from './AkDashboard';
import { dashboardConfig } from './config/dashboardConfig';

function App() {
  return <AkDashboard config={dashboardConfig} />;
}

export default App;

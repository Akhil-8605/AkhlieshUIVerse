import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip
} from 'recharts';
import WidgetCard from '../dashboard/WidgetCard';
import { generateChartColors } from '../../utils/dataHelpers';
import '../../styles/charts.css';

const PieChartWidget = ({ 
  id,
  title = 'Pie Chart',
  subtitle,
  data = [],
  action
}) => {
  const colors = generateChartColors(data.length);

  return (
    <WidgetCard title={title} subtitle={subtitle} action={action}>
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{
                backgroundColor: 'var(--card-bg)',
                border: `1px solid var(--border-color)`,
                borderRadius: '8px'
              }}
              labelStyle={{ color: 'var(--text-primary)' }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </WidgetCard>
  );
};

export default PieChartWidget;

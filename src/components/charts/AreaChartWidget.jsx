import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import WidgetCard from '../dashboard/WidgetCard';
import { generateChartColors } from '../../utils/dataHelpers';
import '../../styles/charts.css';

const AreaChartWidget = ({ 
  id,
  title = 'Area Chart',
  subtitle,
  data = [],
  dataKeys = ['value'],
  action
}) => {
  const colors = generateChartColors(dataKeys.length);

  return (
    <WidgetCard title={title} subtitle={subtitle} action={action}>
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis dataKey="name" stroke="var(--text-secondary)" />
            <YAxis stroke="var(--text-secondary)" />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'var(--card-bg)',
                border: `1px solid var(--border-color)`,
                borderRadius: '8px'
              }}
              labelStyle={{ color: 'var(--text-primary)' }}
            />
            <Legend wrapperStyle={{ paddingTop: '1rem' }} />
            {dataKeys.map((key, idx) => (
              <Area 
                key={key} 
                type="monotone" 
                dataKey={key} 
                fill={colors[idx]} 
                stroke={colors[idx]}
                fillOpacity={0.6}
              />
            ))}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </WidgetCard>
  );
};

export default AreaChartWidget;

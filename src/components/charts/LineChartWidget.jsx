import React from 'react';
import {
  LineChart,
  Line,
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

const LineChartWidget = ({ 
  id,
  title = 'Line Chart',
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
          <LineChart data={data}>
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
              <Line 
                key={key} 
                type="monotone" 
                dataKey={key} 
                stroke={colors[idx]}
                strokeWidth={2}
                dot={{ fill: colors[idx], r: 4 }}
                activeDot={{ r: 6 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </WidgetCard>
  );
};

export default LineChartWidget;

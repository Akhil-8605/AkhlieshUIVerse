import React, { useState } from 'react';
import WidgetCard from '../dashboard/WidgetCard';
import EmptyState from '../dashboard/EmptyState';
import '../../styles/lists.css';

const DataTable = ({ 
  id,
  title = 'Table',
  subtitle,
  data = [],
  columns = [],
  action
}) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  if (!data || data.length === 0) {
    return (
      <WidgetCard title={title} subtitle={subtitle} action={action}>
        <EmptyState 
          icon="📊"
          title="No data"
          description="There is no data to display in this table."
        />
      </WidgetCard>
    );
  }

  const handleSort = (columnKey) => {
    setSortConfig({
      key: columnKey,
      direction: sortConfig.key === columnKey && sortConfig.direction === 'asc' ? 'desc' : 'asc'
    });
  };

  const getSortedData = () => {
    if (!sortConfig.key) return data;
    
    const sorted = [...data].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];
      
      if (typeof aValue === 'string') {
        return sortConfig.direction === 'asc' 
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }
      
      return sortConfig.direction === 'asc'
        ? aValue - bValue
        : bValue - aValue;
    });
    
    return sorted;
  };

  const sortedData = getSortedData();

  return (
    <WidgetCard title={title} subtitle={subtitle} action={action}>
      <div style={{ overflowX: 'auto' }}>
        <table className="data-table">
          <thead>
            <tr>
              {columns.map((column) => (
                <th 
                  key={column.key}
                  onClick={() => handleSort(column.key)}
                  style={{ cursor: 'pointer', userSelect: 'none' }}
                >
                  {column.label || column.key}
                  {sortConfig.key === column.key && (
                    <span style={{ marginLeft: '0.5rem' }}>
                      {sortConfig.direction === 'asc' ? '↑' : '↓'}
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedData.map((row, rowIdx) => (
              <tr key={rowIdx}>
                {columns.map((column) => (
                  <td 
                    key={`${rowIdx}-${column.key}`}
                    className={column.type === 'numeric' ? 'data-table-cell-numeric' : ''}
                  >
                    {row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </WidgetCard>
  );
};

export default DataTable;

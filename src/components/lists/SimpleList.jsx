import React from 'react';
import WidgetCard from '../dashboard/WidgetCard';
import EmptyState from '../dashboard/EmptyState';
import '../../styles/lists.css';

const SimpleList = ({ 
  id,
  title = 'List',
  subtitle,
  items = [],
  labelKey = 'label',
  valueKey = 'value',
  action
}) => {
  if (!items || items.length === 0) {
    return (
      <WidgetCard title={title} subtitle={subtitle} action={action}>
        <EmptyState 
          icon="📋"
          title="No items"
          description="There are no items to display."
        />
      </WidgetCard>
    );
  }

  return (
    <WidgetCard title={title} subtitle={subtitle} action={action}>
      <div className="simple-list">
        {items.map((item, idx) => (
          <div key={idx} className="simple-list-item">
            <div className="simple-list-item-label">
              {typeof item === 'object' ? item[labelKey] : item}
            </div>
            {valueKey && typeof item === 'object' && item[valueKey] && (
              <div className="simple-list-item-value">
                {item[valueKey]}
              </div>
            )}
          </div>
        ))}
      </div>
    </WidgetCard>
  );
};

export default SimpleList;

import React from 'react';
import WidgetCard from '../dashboard/WidgetCard';
import EmptyState from '../dashboard/EmptyState';
import '../../styles/lists.css';

const IconList = ({ 
  id,
  title = 'Items',
  subtitle,
  items = [],
  labelKey = 'label',
  descriptionKey = 'description',
  iconKey = 'icon',
  action
}) => {
  if (!items || items.length === 0) {
    return (
      <WidgetCard title={title} subtitle={subtitle} action={action}>
        <EmptyState 
          icon="🎯"
          title="No items"
          description="There are no items to display."
        />
      </WidgetCard>
    );
  }

  return (
    <WidgetCard title={title} subtitle={subtitle} action={action}>
      <div className="icon-list">
        {items.map((item, idx) => (
          <div key={idx} className="icon-list-item">
            {item[iconKey] && (
              <div className="icon-list-item-icon">{item[iconKey]}</div>
            )}
            <div className="icon-list-item-content">
              <div className="icon-list-item-label">{item[labelKey]}</div>
              {item[descriptionKey] && (
                <div className="icon-list-item-description">
                  {item[descriptionKey]}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </WidgetCard>
  );
};

export default IconList;

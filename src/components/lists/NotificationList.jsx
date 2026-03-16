import React from 'react';
import WidgetCard from '../dashboard/WidgetCard';
import EmptyState from '../dashboard/EmptyState';
import { formatDate } from '../../utils/dataHelpers';
import '../../styles/lists.css';

const NotificationList = ({ 
  id,
  title = 'Notifications',
  subtitle,
  notifications = [],
  titleKey = 'title',
  messageKey = 'message',
  typeKey = 'type',
  iconKey = 'icon',
  timeKey = 'timestamp',
  action
}) => {
  if (!notifications || notifications.length === 0) {
    return (
      <WidgetCard title={title} subtitle={subtitle} action={action}>
        <EmptyState 
          icon="🔔"
          title="No notifications"
          description="You're all caught up!"
        />
      </WidgetCard>
    );
  }

  return (
    <WidgetCard title={title} subtitle={subtitle} action={action}>
      <div className="notification-list">
        {notifications.map((notification, idx) => (
          <div 
            key={idx} 
            className={`notification-item ${notification[typeKey] || 'info'}`}
          >
            {notification[iconKey] && (
              <div className="notification-item-icon">
                {notification[iconKey]}
              </div>
            )}
            <div className="notification-item-content">
              <div className="notification-item-title">
                {notification[titleKey]}
              </div>
              {notification[messageKey] && (
                <div className="notification-item-message">
                  {notification[messageKey]}
                </div>
              )}
              {notification[timeKey] && (
                <div className="notification-item-time">
                  {formatDate(notification[timeKey], 'time')}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </WidgetCard>
  );
};

export default NotificationList;

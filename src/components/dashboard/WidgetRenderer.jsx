import React from 'react';
import EmptyState from './EmptyState';
import '../../styles/dashboard.css';

const WidgetRenderer = ({ widget, rendererMap = {} }) => {
  if (!widget) {
    return null;
  }

  // Get the renderer for this widget type
  const WidgetComponent = rendererMap[widget.type];

  if (!WidgetComponent) {
    return (
      <EmptyState
        icon="⚠️"
        title="Unknown Widget Type"
        description={`Widget type "${widget.type}" is not registered.`}
      />
    );
  }

  // Pass the widget config and data to the component
  return (
    <WidgetComponent {...widget} />
  );
};

export default WidgetRenderer;

import React from 'react';
import WidgetRenderer from './WidgetRenderer';
import '../../styles/dashboard.css';
import '../../styles/layout.css';

const SectionRenderer = ({ section, rendererMap = {} }) => {
  if (!section || !section.widgets) {
    return null;
  }

  const gridColsClass = `grid-cols-${section.gridCols || 1}`;

  return (
    <section className="section animate-fade-in">
      {section.title && <h2 className="section-title">{section.title}</h2>}
      {section.description && <p className="section-description">{section.description}</p>}
      
      <div className={`grid ${gridColsClass}`}>
        {section.widgets.map((widget) => (
          <WidgetRenderer 
            key={widget.id} 
            widget={widget}
            rendererMap={rendererMap}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionRenderer;

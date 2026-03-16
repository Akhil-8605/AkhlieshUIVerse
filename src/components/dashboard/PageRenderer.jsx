import React from 'react';
import Header from '../layout/Header';
import SectionRenderer from './SectionRenderer';
import '../../styles/layout.css';

const PageRenderer = ({ page, rendererMap = {} }) => {
  if (!page) {
    return null;
  }

  return (
    <div className="page animate-slide-up">
      {page.title && (
        <Header 
          title={page.title}
          description={page.description}
          icon={page.icon}
        />
      )}
      
      <div className="page-body">
        {page.sections && page.sections.length > 0 ? (
          page.sections.map((section) => (
            <SectionRenderer 
              key={section.id} 
              section={section}
              rendererMap={rendererMap}
            />
          ))
        ) : (
          <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-tertiary)' }}>
            No content available for this page.
          </div>
        )}
      </div>
    </div>
  );
};

export default PageRenderer;

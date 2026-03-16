/**
 * Configuration Parser Utility
 * Validates and processes dashboard configuration objects
 */

export const validateConfig = (config) => {
  if (!config) {
    throw new Error('Configuration object is required');
  }

  if (!config.pages || !Array.isArray(config.pages)) {
    throw new Error('Configuration must contain a pages array');
  }

  return true;
};

export const parseConfig = (config) => {
  validateConfig(config);

  // Set default values
  const parsedConfig = {
    name: config.name || 'Dashboard',
    layoutMode: config.layoutMode || 'sidebar', // 'sidebar', 'horizontal', 'minimal'
    theme: config.theme || 'light',
    accentColor: config.accentColor || 'blue',
    pages: config.pages.map(page => ({
      id: page.id,
      title: page.title,
      path: page.path,
      icon: page.icon || '📄',
      sections: page.sections || []
    }))
  };

  return parsedConfig;
};

export const getPageById = (config, pageId) => {
  return config.pages.find(page => page.id === pageId);
};

export const getSectionById = (sections, sectionId) => {
  return sections.find(section => section.id === sectionId);
};

export const getWidgetById = (widgets, widgetId) => {
  return widgets.find(widget => widget.id === widgetId);
};

export const validateWidget = (widget) => {
  const requiredFields = ['id', 'type'];
  
  for (const field of requiredFields) {
    if (!widget[field]) {
      throw new Error(`Widget is missing required field: ${field}`);
    }
  }

  return true;
};

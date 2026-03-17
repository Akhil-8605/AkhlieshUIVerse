/**
 * Configuration Parser Utility
 * Validates and normalizes dashboard configuration objects
 */

const slugify = (value, fallback = 'item') => {
  const normalizedValue = String(value || fallback)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  return normalizedValue || fallback;
};

const createSeriesData = (values = []) =>
  values.map((value, index) => ({
    name: `Item ${index + 1}`,
    value
  }));

const chartTypeMap = {
  bar: 'bar-chart',
  line: 'line-chart',
  area: 'area-chart',
  pie: 'pie-chart',
  donut: 'donut-chart'
};

const normalizeChartWidget = (chart, index) => {
  const normalizedType = chartTypeMap[chart.type] || chart.type;
  const baseWidget = {
    ...chart,
    id: chart.id || `chart-${index + 1}`,
    title: chart.title || `${chart.type || 'chart'} chart`,
    type: normalizedType
  };

  if (chart.values && !chart.data) {
    return {
      ...baseWidget,
      data: createSeriesData(chart.values),
      dataKeys: chart.dataKeys || ['value']
    };
  }

  return baseWidget;
};

const normalizeSectionWidget = (widget, widgetIndex, pageName) => ({
  ...widget,
  id: widget.id || `${slugify(pageName)}-widget-${widgetIndex + 1}`,
  type: chartTypeMap[widget.type] || widget.type
});

const normalizePage = (page, index) => {
  const pageName = page.name || page.title || `Page ${index + 1}`;
  const widgets = page.widgets || page.elements || [];
  const charts = page.charts || [];
  const hasSimplePageContent = widgets.length > 0 || charts.length > 0;

  const sections = hasSimplePageContent
    ? [
        {
          id: `${slugify(pageName)}-section`,
          title: page.sectionTitle,
          description: page.sectionDescription,
          gridCols: page.gridCols || 1,
          widgets: [
            ...widgets.map((widget, widgetIndex) =>
              normalizeSectionWidget(widget, widgetIndex, pageName)
            ),
            ...charts.map(normalizeChartWidget)
          ]
        }
      ]
    : (page.sections || []).map((section, sectionIndex) => ({
        ...section,
        id: section.id || `${slugify(pageName)}-section-${sectionIndex + 1}`,
        widgets: (section.widgets || section.elements || []).map((widget, widgetIndex) =>
          normalizeSectionWidget(widget, widgetIndex, pageName)
        )
      }));

  return {
    ...page,
    id: page.id || slugify(pageName, `page-${index + 1}`),
    title: page.title || pageName,
    icon: page.icon || null,
    sections
  };
};

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

  const normalizedPages = config.pages.map(normalizePage);
  const isSinglePage = normalizedPages.length === 1;

  return {
    name: config.name || 'Dashboard Created Using akhilesh-ui-verse',
    layoutMode: config.layoutMode || 'sidebar',
    theme: config.theme || 'light',
    accentColor: config.accentColor || 'blue',
    design: config.design || 'default',
    navbar: config.navbar ?? !isSinglePage,
    profile: config.profile,
    pages: normalizedPages
  };
};

export const getPageById = (config, pageId) => {
  return config.pages.find((page) => page.id === pageId);
};

export const getSectionById = (sections, sectionId) => {
  return sections.find((section) => section.id === sectionId);
};

export const getWidgetById = (widgets, widgetId) => {
  return widgets.find((widget) => widget.id === widgetId);
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

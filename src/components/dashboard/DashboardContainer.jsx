import React, { useState, useEffect } from 'react';
import Navbar from '../layout/Navbar';
import Sidebar from '../layout/Sidebar';
import PageRenderer from './PageRenderer';
import { useTheme } from '../../hooks/useTheme';
import { useResponsive } from '../../hooks/useResponsive';
import '../../styles/layout.css';

const DashboardContainer = ({ config, rendererMap = {} }) => {
  const [currentPageId, setCurrentPageId] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { theme, toggleTheme, accentColor, changeAccentColor } = useTheme();
  const { isMobile } = useResponsive();

  // Set initial page
  useEffect(() => {
    if (config.pages && config.pages.length > 0 && !currentPageId) {
      setCurrentPageId(config.pages[0].id);
    }
  }, [config, currentPageId]);

  // Close sidebar on mobile when navigating
  useEffect(() => {
    if (isMobile) {
      setSidebarOpen(false);
    }
  }, [isMobile]);

  const currentPage = config.pages?.find(p => p.id === currentPageId);

  const handlePageSelect = (pageId) => {
    setCurrentPageId(pageId);
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  const handleMenuToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSidebarToggle = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="app-container">
      {/* Sidebar */}
      {!isMobile && (
        <Sidebar
          items={config.pages.map(p => ({ id: p.id, label: p.title, icon: p.icon }))}
          activeId={currentPageId}
          onItemClick={handlePageSelect}
          collapsed={sidebarCollapsed}
          onToggleCollapse={handleSidebarToggle}
        />
      )}

      {/* Mobile Sidebar Overlay */}
      {isMobile && sidebarOpen && (
        <>
          <div
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 99,
              onClick: () => setSidebarOpen(false)
            }}
          />
          <Sidebar
            items={config.pages.map(p => ({ id: p.id, label: p.title, icon: p.icon }))}
            activeId={currentPageId}
            onItemClick={handlePageSelect}
            collapsed={false}
          />
        </>
      )}

      {/* Main Content */}
      <div className="app-content">
        {/* Navbar */}
        <Navbar
          brand={config.name || 'Dashboard'}
          actions={[
            {
              icon: theme === 'light' ? '🌙' : '☀️',
              onClick: toggleTheme,
              label: 'Toggle Theme'
            },
            {
              icon: '⚙️',
              onClick: () => console.log('Settings clicked'),
              label: 'Settings'
            }
          ]}
          onMenuToggle={handleMenuToggle}
        />

        {/* Page Content */}
        <div className="page-wrapper">
          {currentPage ? (
            <PageRenderer 
              page={currentPage}
              rendererMap={rendererMap}
            />
          ) : (
            <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-tertiary)' }}>
              Loading...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardContainer;

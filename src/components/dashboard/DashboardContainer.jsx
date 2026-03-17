import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../layout/Navbar';
import Sidebar from '../layout/Sidebar';
import PageRenderer from './PageRenderer';
import ProfileModal from '../modals/ProfileModal';
import { useTheme } from '../../hooks/useTheme';
import { useResponsive } from '../../hooks/useResponsive';
import '../../styles/layout.css';

const DashboardContainer = ({ config, rendererMap = {} }) => {
  const [currentPageId, setCurrentPageId] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const pageWrapperRef = useRef(null);
  const { theme, toggleTheme } = useTheme(
    config.accentColor || 'blue',
    config.theme || 'light'
  );
  const { isMobile } = useResponsive();
  
  // Get design mode and navbar visibility from config
  const designMode = config.design || 'default'; // 'default' | 'boxed'
  const showNavbar = config.navbar !== false; // Default to true
  const showSidebar = showNavbar; // Sidebar only shows when navbar is visible

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

  useEffect(() => {
    if (pageWrapperRef.current && typeof pageWrapperRef.current.scrollTo === 'function') {
      pageWrapperRef.current.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [currentPageId]);

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

  const handleProfileAction = (actionId) => {
    // Handler for profile modal actions - log action triggered, can be extended
    console.log('Profile action triggered:', actionId);
  };

  return (
    <div className={`app-container design-mode-${designMode}`}>
      {/* Profile Modal */}
      <ProfileModal
        isOpen={profileModalOpen}
        onClose={() => setProfileModalOpen(false)}
        profile={config.profile}
        onActionClick={handleProfileAction}
      />
      
      {/* Sidebar - Only shows when navbar is visible */}
      {!isMobile && showSidebar && (
        <Sidebar
          items={config.pages.map(p => ({ id: p.id, label: p.title, icon: p.icon }))}
          activeId={currentPageId}
          onItemClick={handlePageSelect}
          collapsed={sidebarCollapsed}
          onToggleCollapse={handleSidebarToggle}
        />
      )}

      {/* Mobile Sidebar Overlay - Only shows when navbar is visible */}
      {isMobile && sidebarOpen && showSidebar && (
        <>
          <div
            onClick={() => setSidebarOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 99
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
        {/* Navbar - Conditionally rendered based on config */}
        {showNavbar && (
          <Navbar
            brand={config.name || 'Dashboard'}
            actions={[
              {
                icon: '👤',
                onClick: () => setProfileModalOpen(true),
                label: 'Profile'
              },
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
        )}

        {/* Page Content */}
        <div
          ref={pageWrapperRef}
          className="page-wrapper"
        >
          {currentPage ? (
            <PageRenderer 
              key={currentPage.id}
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

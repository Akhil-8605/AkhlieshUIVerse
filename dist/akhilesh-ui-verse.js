(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('.app-container{display:flex;height:100%;width:100%;overflow:hidden}.app-content{flex:1;display:flex;flex-direction:column;overflow:hidden}.page-wrapper{flex:1;overflow-y:auto;overflow-x:hidden}.navbar{display:flex;align-items:center;justify-content:space-between;padding:1rem 2rem;background-color:var(--card-bg);border-bottom:1px solid var(--border-color);box-shadow:0 2px 4px #0000000d}.navbar-brand{font-size:1.375rem;font-weight:700;color:var(--text-primary);display:flex;align-items:center;gap:.75rem;letter-spacing:-.5px}.navbar-menu{display:flex;align-items:center;gap:2.5rem;flex:1;margin-left:3rem}.navbar-menu a{color:var(--text-secondary);text-decoration:none;font-weight:500;font-size:.9rem;transition:color .3s ease}.navbar-menu a:hover{color:var(--accent-color)}.navbar-actions{display:flex;align-items:center;gap:.75rem}.navbar-action-button{width:36px;height:36px;border-radius:8px;background:none;border:none;cursor:pointer;color:var(--text-secondary);display:flex;align-items:center;justify-content:center;font-size:1.1rem;transition:all .3s cubic-bezier(.4,0,.2,1)}.navbar-action-button:hover{background-color:var(--bg-secondary);color:var(--text-primary);transform:scale(1.05)}.navbar-menu-toggle{display:none;background:none;border:none;cursor:pointer;color:var(--text-secondary);font-size:1.25rem}.sidebar{width:260px;background-color:var(--card-bg);border-right:1px solid var(--border-color);overflow-y:auto;overflow-x:hidden;transition:all .3s cubic-bezier(.4,0,.2,1);display:flex;flex-direction:column;box-shadow:0 2px 4px #0000000d}.sidebar-title{font-size:1.25rem;font-weight:700;color:var(--text-primary);padding:1.75rem 1.5rem;text-transform:uppercase;letter-spacing:.5px}.sidebar.collapsed .sidebar-title{display:none}.sidebar.collapsed{width:80px}.sidebar-header{padding:1.3rem 1.5rem;border-bottom:1px solid var(--border-color);font-weight:700;color:var(--text-primary);font-size:.875rem;text-transform:uppercase;letter-spacing:.5px;color:var(--text-tertiary)}.sidebar-menu{flex:1;overflow-y:auto;padding:.75rem 0}.sidebar-item{display:flex;align-items:center;gap:.875rem;padding:.875rem 1.25rem;cursor:pointer;transition:all .3s cubic-bezier(.4,0,.2,1);color:var(--text-secondary);font-size:.9375rem;font-weight:500;position:relative;margin:.25rem .5rem;border-radius:8px}.sidebar-item:hover{background-color:var(--bg-secondary);color:var(--text-primary)}.sidebar-item.active{background-color:#3b82f61a;color:var(--accent-color);font-weight:600}.sidebar-item.active:before{content:"";position:absolute;left:0;top:0;bottom:0;width:3px;background:var(--accent-color);border-radius:0 3px 3px 0}.sidebar-icon{font-size:1.25rem;min-width:1.25rem;display:flex;align-items:center;justify-content:center}.sidebar-label{flex:1;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.sidebar.collapsed .sidebar-label{display:none}.sidebar.collapsed .sidebar-header{padding:1.3rem 1.5rem;text-align:center}.main-content{display:flex;flex-direction:column;flex:1;overflow:hidden}.page-header{position:relative;margin:2rem 1rem;margin-bottom:0;padding:2.5rem 2rem;background-color:var(--accent-color-light);border:1px solid var(--border-color);border-radius:19px}.page-header h1{font-size:2rem;font-weight:800;color:#fff;margin-bottom:.5rem;letter-spacing:-.5px}.page-header p{color:#fff;font-size:.95rem;line-height:1.5}.header-icon{font-size:5rem;color:var(--accent-color);margin-left:1rem;position:absolute;right:1rem;top:1rem;bottom:1rem}.page-body{flex:1;overflow-y:auto;padding:2rem;background-color:var(--bg-primary)}.grid{display:grid;gap:1.5rem}.grid-cols-1{grid-template-columns:1fr}.grid-cols-2{grid-template-columns:repeat(2,1fr)}.grid-cols-3{grid-template-columns:repeat(3,1fr)}.grid-cols-4{grid-template-columns:repeat(4,1fr)}.flex{display:flex}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.items-center{align-items:center}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.gap-1{gap:.25rem}.gap-2{gap:.5rem}.gap-3{gap:.75rem}.gap-4{gap:1rem}.gap-6{gap:1.5rem}.gap-8{gap:2rem}@media(max-width:768px){.navbar{padding:1rem;gap:.5rem}.navbar-menu{display:none}.navbar-brand{font-size:1.25rem}.sidebar{position:absolute;left:0;top:0;height:100%;z-index:100;transform:translate(-100%)}.sidebar.open{transform:translate(0)}.navbar-menu-toggle{display:flex}.page-wrapper{margin-left:0}.page-header{padding:1.5rem 1rem}.page-header h1{font-size:1.5rem}.page-body{padding:1rem}.grid-cols-2,.grid-cols-3,.grid-cols-4{grid-template-columns:1fr}}@media(max-width:480px){.navbar{flex-wrap:wrap}.navbar-brand{font-size:1rem}.page-body{padding:.75rem}.page-header h1{font-size:1.25rem}}.widget-card{background-color:var(--card-bg);border:1px solid var(--border-color);border-radius:8px;padding:1.5rem;box-shadow:var(--shadow-sm);transition:all .3s ease}.widget-card:hover{box-shadow:var(--shadow-md);border-color:var(--accent-color-light)}.widget-card-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem}.widget-card-title{font-size:1.125rem;font-weight:600;color:var(--text-primary)}.widget-card-subtitle{font-size:.875rem;color:var(--text-tertiary);margin-top:.25rem}.widget-card-action{padding:.5rem;background:none;border:none;cursor:pointer;color:var(--text-secondary);transition:color .2s ease}.widget-card-action:hover{color:var(--text-primary)}.stats-card{background:var(--card-bg);border:1px solid var(--border-color);border-radius:12px;padding:1.5rem;display:flex;flex-direction:column;gap:1rem;box-shadow:var(--shadow-sm);transition:all .3s cubic-bezier(.4,0,.2,1);position:relative;overflow:hidden}.stats-card:hover{transform:translateY(-4px);box-shadow:var(--shadow-lg);border-color:var(--accent-color)}.stats-card-header{display:flex;align-items:center;gap:.875rem}.stats-card-icon-wrapper{display:flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;background:linear-gradient(135deg,#3b82f61a,#60a5fa1a);border-radius:8px;flex-shrink:0}.stats-card-icon{font-size:1.5rem;display:block}.stats-card-title-section{display:flex;flex-direction:column;gap:.25rem;flex:1}.stats-card-title{font-size:.75rem;font-weight:600;text-transform:uppercase;letter-spacing:.5px;color:var(--text-tertiary)}.stats-card-label{font-size:.875rem;font-weight:500;color:var(--text-secondary)}.stats-card-body{display:flex;flex-direction:column;gap:.75rem}.stats-card-value{font-size:2.25rem;font-weight:800;color:var(--text-primary);line-height:1}.stats-card-change-badge{display:inline-flex;align-items:center;gap:.375rem;width:fit-content;padding:.375rem .75rem;background-color:var(--bg-secondary);border-radius:6px;font-size:.8125rem;font-weight:600}.stats-card-change-icon{display:inline-block;font-size:.875rem}.stats-card-change-value{display:inline-block}.stats-card-change-badge.positive{color:#10b981;background-color:#10b9811a}.stats-card-change-badge.negative{color:#ef4444;background-color:#ef44441a}.stats-card-change-badge.neutral{color:var(--text-secondary);background-color:var(--bg-secondary)}.stats-card-accent{position:absolute;bottom:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--accent-color),transparent)}.section{margin-bottom:2rem}.section-title{font-size:1.5rem;font-weight:700;color:var(--text-primary);margin-bottom:1rem}.section-description{color:var(--text-secondary);font-size:.95rem;margin-bottom:1.5rem}.page{animation:fadeIn .3s ease-out}.loading-state{display:flex;justify-content:center;align-items:center;min-height:200px}.loading-spinner{width:40px;height:40px;border:4px solid var(--border-color);border-top-color:var(--accent-color);border-radius:50%;animation:spin 1s linear infinite}.loading-skeleton{background:var(--bg-secondary);border-radius:8px;animation:shimmer 2s infinite;background-size:1000px 100%;background:linear-gradient(to right,var(--bg-secondary) 0%,var(--bg-tertiary) 50%,var(--bg-secondary) 100%)}.skeleton-card{width:100%;height:150px;margin-bottom:1rem}.skeleton-line{width:100%;height:12px;margin-bottom:.75rem}.skeleton-line.short{width:70%}.empty-state{display:flex;flex-direction:column;justify-content:center;align-items:center;min-height:300px;padding:2rem;text-align:center}.empty-state-icon{font-size:4rem;color:var(--text-tertiary);margin-bottom:1rem;opacity:.5}.empty-state-title{font-size:1.25rem;font-weight:600;color:var(--text-primary);margin-bottom:.5rem}.empty-state-description{color:var(--text-secondary);font-size:.95rem;max-width:300px}.toolbar{display:flex;justify-content:space-between;align-items:center;gap:1rem;margin-bottom:1.5rem;flex-wrap:wrap}.toolbar-left,.toolbar-right{display:flex;gap:1rem;align-items:center}.badge{display:inline-block;padding:.25rem .75rem;border-radius:999px;font-size:.75rem;font-weight:600;text-transform:uppercase}.badge-primary{background-color:var(--accent-color);color:#fff}.badge-success{background-color:var(--success-color);color:#fff}.badge-warning{background-color:var(--warning-color);color:#fff}.badge-error{background-color:var(--error-color);color:#fff}.badge-gray{background-color:var(--bg-secondary);color:var(--text-primary)}.card-design-1{background:var(--card-bg);border:1px solid var(--border-color);border-radius:8px;padding:1.5rem;box-shadow:var(--shadow-sm);transition:all .3s ease;display:flex;flex-direction:column;gap:1rem}.card-design-1:hover{box-shadow:var(--shadow-md);border-color:var(--accent-color);transform:translateY(-2px)}.card-design-1-header{display:flex;gap:.75rem;align-items:center}.card-design-1-icon{font-size:1.5rem}.card-design-1-title{font-size:1rem;font-weight:600;color:var(--text-primary)}.card-design-1-body{display:flex;flex-direction:column;gap:.25rem}.card-design-1-value{font-size:1.75rem;font-weight:700;color:var(--text-primary)}.card-design-1-label{font-size:.875rem;color:var(--text-secondary)}.card-design-1-description{font-size:.8rem;color:var(--text-tertiary);margin:.5rem 0 0}.card-design-1-footer{border-top:1px solid var(--border-color);padding-top:.75rem}.card-design-1-trend{font-size:.875rem;font-weight:600}.card-design-1-trend.positive{color:#10b981}.card-design-1-trend.negative{color:#ef4444}.card-design-2{background:var(--card-bg);border:2px solid var(--accent-color);border-radius:12px;padding:1.5rem;box-shadow:var(--shadow-md);transition:all .3s ease;position:relative;overflow:hidden}.card-design-2:hover{box-shadow:var(--shadow-lg);transform:translateY(-4px)}.card-design-2-accent{position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,var(--accent-color),var(--accent-color-light))}.card-design-2-header{display:flex;gap:1rem;margin-bottom:1rem;align-items:flex-start}.card-design-2-icon{font-size:2rem}.card-design-2-info{flex:1}.card-design-2-title{font-size:1.125rem;font-weight:700;color:var(--text-primary);margin:0 0 .25rem}.card-design-2-description{font-size:.8rem;color:var(--text-secondary);margin:0}.card-design-2-body{display:flex;flex-direction:column;gap:.5rem;margin-bottom:1rem}.card-design-2-value{font-size:2rem;font-weight:800;background:linear-gradient(135deg,var(--accent-color),var(--accent-color-light));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}.card-design-2-label{font-size:.875rem;color:var(--text-secondary);font-weight:500}.card-design-2-chart{width:100%;height:40px;margin-bottom:1rem;background:var(--bg-secondary);border-radius:4px;padding:.5rem 0}.card-design-2-chart svg{width:100%;height:100%}.card-design-2-footer{border-top:1px solid var(--border-color);padding-top:1rem}.card-design-2-trend{font-size:.9rem;font-weight:700}.card-design-2-trend.positive{color:#10b981}.card-design-2-trend.negative{color:#ef4444}.card-design-3{background:linear-gradient(135deg,var(--card-bg),var(--bg-secondary));border:1px solid var(--border-color);border-radius:12px;padding:1.5rem;box-shadow:var(--shadow-md);transition:all .3s ease}.card-design-3:hover{box-shadow:var(--shadow-lg);border-color:var(--accent-color);transform:translateY(-2px)}.card-design-3-header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:1.5rem;padding-bottom:1rem;border-bottom:1px solid var(--border-color)}.card-design-3-top{display:flex;gap:.75rem;align-items:center}.card-design-3-icon{font-size:1.75rem}.card-design-3-title{font-size:1.125rem;font-weight:700;color:var(--text-primary);margin:0}.card-design-3-trend{font-size:.875rem;font-weight:700;padding:.25rem .75rem;border-radius:6px;background:var(--bg-secondary)}.card-design-3-trend.positive{color:#10b981;background:#10b9811a}.card-design-3-trend.negative{color:#ef4444;background:#ef44441a}.card-design-3-body{display:flex;flex-direction:column;gap:.5rem;margin-bottom:1.5rem}.card-design-3-value{font-size:2.25rem;font-weight:800;color:var(--text-primary)}.card-design-3-label{font-size:.875rem;color:var(--text-secondary);font-weight:500}.card-design-3-description{font-size:.8rem;color:var(--text-tertiary);margin:.5rem 0 0}.card-design-3-stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(80px,1fr));gap:1rem}.card-design-3-stat-item{display:flex;flex-direction:column;gap:.25rem;padding:.75rem;background:var(--bg-secondary);border-radius:6px;text-align:center}.card-design-3-stat-name{font-size:.75rem;color:var(--text-tertiary);font-weight:500;text-transform:uppercase}.card-design-3-stat-value{font-size:1.125rem;font-weight:700;color:var(--text-primary)}@media(max-width:768px){.widget-card{padding:1rem}.stats-card{padding:1.25rem}.stats-card-header{gap:.75rem}.stats-card-icon-wrapper{width:2rem;height:2rem}.stats-card-icon{font-size:1.25rem}.stats-card-value{font-size:1.875rem}.stats-card-title-section{gap:.125rem}.stats-card-label{font-size:.8125rem}.toolbar{flex-direction:column;align-items:flex-start}.toolbar-right{width:100%}.section-title{font-size:1.25rem}}.modal-overlay{position:fixed;inset:0;background-color:#0f172a80;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);z-index:999;animation:fadeIn .3s ease}.modal-overlay.closing{animation:fadeOut .3s ease}.modal-container{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:1000;animation:slideUp .3s cubic-bezier(.4,0,.2,1)}.modal-container.closing{animation:slideDown .3s cubic-bezier(.4,0,.2,1)}@media(max-width:768px){.modal-container{inset:auto 0 0;transform:translate(0);animation:slideUpMobile .3s cubic-bezier(.4,0,.2,1)}.modal-container.closing{animation:slideDownMobile .3s cubic-bezier(.4,0,.2,1)}}.profile-modal{background:var(--card-bg);border-radius:16px;border:1px solid var(--border-color);box-shadow:0 20px 25px -5px #0000001a,0 10px 10px -5px #0000000a;width:90vw;max-width:500px;max-height:90vh;display:flex;flex-direction:column;overflow:hidden;animation:modalSlideUp .3s cubic-bezier(.4,0,.2,1)}@media(max-width:768px){.profile-modal{width:100%;max-width:none;border-radius:var(--radius-xl) var(--radius-xl) 0 0;max-height:85vh}}.modal-header{display:flex;align-items:center;justify-content:space-between;padding:1.5rem;border-bottom:1px solid var(--border-color);flex-shrink:0}.modal-title{font-size:1.25rem;font-weight:700;color:var(--text-primary);margin:0}.modal-close-btn{background:none;border:none;font-size:1.5rem;color:var(--text-tertiary);cursor:pointer;padding:.25rem;display:flex;align-items:center;justify-content:center;width:2rem;height:2rem;border-radius:var(--radius-md);transition:all .2s ease}.modal-close-btn:hover{background-color:var(--bg-secondary);color:var(--text-primary)}.modal-body{flex:1;overflow-y:auto;padding:1.5rem}.profile-avatar-section{text-align:center;margin-bottom:1.5rem;padding-bottom:1.5rem;border-bottom:1px solid var(--border-color);background:linear-gradient(135deg,#3b82f60d,#60a5fa0d);border-radius:12px;padding:2rem 1.5rem 1.5rem}.profile-avatar{width:100px;height:100px;border-radius:50%;border:4px solid var(--accent-color);object-fit:cover;box-shadow:0 8px 16px #3b82f633;transition:transform .3s cubic-bezier(.4,0,.2,1)}.profile-avatar:hover{transform:scale(1.05)}.profile-fields{display:flex;flex-direction:column;gap:1rem;margin-bottom:1.5rem}.profile-field{display:flex;justify-content:space-between;align-items:center;padding:.75rem;background-color:var(--bg-secondary);border-radius:var(--radius-md);border-left:3px solid var(--accent-color)}.profile-field-label{font-weight:600;color:var(--text-secondary);font-size:.875rem;text-transform:uppercase;letter-spacing:.5px}.profile-field-value{color:var(--text-primary);font-weight:500}.profile-description{margin-bottom:1.5rem;padding:1rem;background-color:var(--accent-bg);border-radius:var(--radius-md);border-left:3px solid var(--accent-color)}.profile-description p{margin:0;color:var(--text-secondary);font-size:.875rem;line-height:1.6}.profile-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin-bottom:1.5rem}.profile-stat-item{text-align:center;padding:1.25rem 1rem;background-color:var(--bg-secondary);border-radius:10px;border:1px solid var(--border-color);transition:all .3s cubic-bezier(.4,0,.2,1)}.profile-stat-item:hover{border-color:var(--accent-color);background-color:var(--card-bg);box-shadow:0 4px 12px #3b82f61a}.profile-stat-value{font-size:1.75rem;font-weight:800;color:var(--accent-color);display:block;margin-bottom:.25rem}.profile-stat-label{font-size:.75rem;color:var(--text-tertiary);text-transform:uppercase;letter-spacing:.5px;font-weight:600}.modal-footer{display:flex;gap:.75rem;padding:1.5rem;border-top:1px solid var(--border-color);flex-shrink:0;justify-content:flex-end}.modal-action-btn{padding:.75rem 1.5rem;border-radius:8px;font-size:.875rem;font-weight:600;border:none;cursor:pointer;transition:all .3s cubic-bezier(.4,0,.2,1);box-shadow:0 1px 2px #0000000d}.modal-action-btn.secondary{background-color:var(--bg-secondary);color:var(--text-primary);border:1px solid var(--border-color)}.modal-action-btn.secondary:hover{background-color:var(--border-color);border-color:var(--accent-color);box-shadow:0 4px 12px #0000001a;transform:translateY(-2px)}.modal-action-btn.primary{background:linear-gradient(135deg,var(--accent-color),var(--accent-color-light));color:#fff;border:none}.modal-action-btn.primary:hover{background:linear-gradient(135deg,var(--accent-color-dark),var(--accent-color));box-shadow:0 8px 16px #3b82f64d;transform:translateY(-2px)}.modal-action-btn.danger{background:linear-gradient(135deg,var(--error-color),#f87171);color:#fff;border:none}.modal-action-btn.danger:hover{background:linear-gradient(135deg,#dc2626,var(--error-color));box-shadow:0 8px 16px #ef44444d;transform:translateY(-2px)}@keyframes modalSlideUp{0%{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}@keyframes slideUp{0%{transform:translate(-50%,calc(-50% + 20px));opacity:0}to{transform:translate(-50%,-50%);opacity:1}}@keyframes slideDown{0%{transform:translate(-50%,-50%);opacity:1}to{transform:translate(-50%,calc(-50% + 20px));opacity:0}}@keyframes slideUpMobile{0%{transform:translateY(100%);opacity:0}to{transform:translateY(0);opacity:1}}@keyframes slideDownMobile{0%{transform:translateY(0);opacity:1}to{transform:translateY(100%);opacity:0}}.modal-body::-webkit-scrollbar{width:6px}.modal-body::-webkit-scrollbar-track{background:var(--bg-secondary);border-radius:var(--radius-xl)}.modal-body::-webkit-scrollbar-thumb{background:var(--border-color);border-radius:var(--radius-md)}.modal-body::-webkit-scrollbar-thumb:hover{background:var(--accent-color)}.chart-container{width:100%;height:100%;display:flex;justify-content:center;align-items:center}.chart-wrapper{width:100%;height:300px}.chart-wrapper.lg{height:400px}.chart-wrapper.sm{height:250px}.recharts-default-tooltip{background-color:var(--card-bg)!important;border:1px solid var(--border-color)!important;border-radius:8px!important;box-shadow:var(--shadow-md)!important}.recharts-default-tooltip .recharts-tooltip-label{color:var(--text-primary)!important;font-weight:600;margin-bottom:.5rem}.recharts-default-tooltip .recharts-tooltip-item{color:var(--text-secondary)!important}.bar-chart-container{width:100%}.bar-chart-legend{display:flex;justify-content:center;gap:2rem;margin-top:1rem;flex-wrap:wrap}.bar-chart-legend-item{display:flex;align-items:center;gap:.5rem;font-size:.875rem;color:var(--text-secondary)}.bar-chart-legend-dot{width:8px;height:8px;border-radius:2px}.line-chart-container{width:100%}.line-chart-legend{display:flex;justify-content:center;gap:2rem;margin-top:1rem;flex-wrap:wrap}.line-chart-legend-item{display:flex;align-items:center;gap:.5rem;font-size:.875rem;color:var(--text-secondary)}.line-chart-legend-indicator{width:12px;height:2px;border-radius:1px}.pie-chart-container{display:flex;justify-content:center;align-items:center;width:100%}.pie-chart-legend{display:flex;flex-direction:column;gap:.75rem;margin-left:2rem}.pie-chart-legend-item{display:flex;align-items:center;gap:.5rem;font-size:.875rem;color:var(--text-secondary)}.pie-chart-legend-dot{width:8px;height:8px;border-radius:50%}.area-chart-container{width:100%}.area-chart-legend{display:flex;justify-content:center;gap:2rem;margin-top:1rem;flex-wrap:wrap}.area-chart-legend-item{display:flex;align-items:center;gap:.5rem;font-size:.875rem;color:var(--text-secondary)}.area-chart-legend-indicator{width:12px;height:12px;border-radius:2px;opacity:.7}.donut-chart-container{display:flex;justify-content:center;align-items:center;width:100%}.donut-chart-legend{display:flex;flex-direction:column;gap:.75rem;margin-left:2rem}.donut-chart-legend-item{display:flex;align-items:center;gap:.5rem;font-size:.875rem;color:var(--text-secondary)}.donut-chart-legend-dot{width:8px;height:8px;border-radius:50%}@media(max-width:768px){.chart-wrapper{height:250px}.chart-wrapper.lg{height:300px}.pie-chart-container,.donut-chart-container{flex-direction:column}.pie-chart-legend,.donut-chart-legend{margin-left:0;margin-top:1rem}.bar-chart-legend,.line-chart-legend,.area-chart-legend{gap:1rem}}.simple-list{display:flex;flex-direction:column;gap:0}.simple-list-item{padding:1rem;border-bottom:1px solid var(--border-color);display:flex;justify-content:space-between;align-items:center;transition:background-color .2s ease}.simple-list-item:last-child{border-bottom:none}.simple-list-item:hover{background-color:var(--bg-secondary)}.simple-list-item-label{font-size:.95rem;color:var(--text-primary);font-weight:500}.simple-list-item-value{font-size:.95rem;color:var(--text-secondary)}.icon-list{display:flex;flex-direction:column;gap:0}.icon-list-item{padding:1rem;border-bottom:1px solid var(--border-color);display:flex;gap:1rem;align-items:center;transition:background-color .2s ease}.icon-list-item:last-child{border-bottom:none}.icon-list-item:hover{background-color:var(--bg-secondary)}.icon-list-item-icon{font-size:1.5rem;color:var(--accent-color);min-width:1.5rem;display:flex;align-items:center;justify-content:center}.icon-list-item-content{flex:1;display:flex;flex-direction:column;gap:.25rem}.icon-list-item-label{font-size:.95rem;color:var(--text-primary);font-weight:500}.icon-list-item-description{font-size:.85rem;color:var(--text-tertiary)}.notification-list{display:flex;flex-direction:column;gap:.75rem}.notification-item{padding:1rem;background-color:var(--bg-secondary);border-left:4px solid var(--accent-color);border-radius:4px;display:flex;gap:1rem;align-items:flex-start;transition:all .2s ease}.notification-item:hover{box-shadow:var(--shadow-sm);transform:translate(2px)}.notification-item.success{border-left-color:var(--success-color);background-color:#10b9810d}.notification-item.warning{border-left-color:var(--warning-color);background-color:#f59e0b0d}.notification-item.error{border-left-color:var(--error-color);background-color:#ef44440d}.notification-item.info{border-left-color:var(--info-color);background-color:#3b82f60d}.notification-item-icon{font-size:1.25rem;flex-shrink:0;margin-top:.125rem}.notification-item-content{flex:1;display:flex;flex-direction:column;gap:.25rem}.notification-item-title{font-size:.95rem;font-weight:600;color:var(--text-primary)}.notification-item-message{font-size:.85rem;color:var(--text-secondary)}.notification-item-time{font-size:.75rem;color:var(--text-tertiary);margin-top:.25rem}.data-table{width:100%;border-collapse:collapse}.data-table thead{background-color:var(--bg-secondary)}.data-table th{padding:1rem;text-align:left;font-weight:600;color:var(--text-primary);border-bottom:2px solid var(--border-color);font-size:.875rem;text-transform:uppercase;letter-spacing:.05em}.data-table td{padding:1rem;border-bottom:1px solid var(--border-color);color:var(--text-secondary);font-size:.95rem}.data-table tbody tr{transition:background-color .2s ease}.data-table tbody tr:hover{background-color:var(--bg-secondary)}.data-table tbody tr:last-child td{border-bottom:1px solid var(--border-color)}.data-table-cell-numeric{text-align:right;font-family:Monaco,Menlo,Courier New,monospace}.data-table-cell-status{display:inline-block}.pagination{display:flex;justify-content:center;align-items:center;gap:.5rem;margin-top:1.5rem}.pagination-button{padding:.5rem .75rem;border:1px solid var(--border-color);background-color:var(--bg-primary);color:var(--text-primary);border-radius:4px;cursor:pointer;font-size:.875rem;transition:all .2s ease}.pagination-button:hover:not(:disabled){border-color:var(--accent-color);color:var(--accent-color)}.pagination-button.active{background-color:var(--accent-color);color:#fff;border-color:var(--accent-color)}.pagination-button:disabled{opacity:.5;cursor:not-allowed}.pagination-info{font-size:.875rem;color:var(--text-secondary);margin:0 1rem}@media(max-width:768px){.simple-list-item,.icon-list-item{flex-direction:column;align-items:flex-start}.simple-list-item-value,.icon-list-item-content{width:100%}.notification-item{gap:.75rem;padding:.75rem}.data-table{font-size:.85rem}.data-table th,.data-table td{padding:.75rem .5rem}}*{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}body{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background-color:var(--bg-primary);color:var(--text-primary);transition:background-color .3s ease,color .3s ease}#root{width:100%;height:100vh;display:flex;flex-direction:column}a{color:inherit;text-decoration:none}button{font-family:inherit;cursor:pointer;border:none;background:none}input,textarea,select{font-family:inherit;font-size:inherit;color:inherit}::-webkit-scrollbar{width:8px;height:8px}::-webkit-scrollbar-track{background-color:var(--bg-secondary)}::-webkit-scrollbar-thumb{background-color:var(--border-color);border-radius:4px}::-webkit-scrollbar-thumb:hover{background-color:var(--text-secondary)}:root,html[data-theme=light]{--bg-primary: #ffffff;--bg-secondary: #f5f7fa;--bg-tertiary: #eef2f7;--card-bg: #ffffff;--card-bg-hover: #f9fafb;--text-primary: #1a1a1a;--text-secondary: #666666;--text-tertiary: #999999;--border-color: #e0e0e0;--border-color-light: #f0f0f0;--accent-color: #3b82f6;--accent-color-dark: #1d4ed8;--accent-color-light: #60a5fa;--success-color: #10b981;--warning-color: #f59e0b;--error-color: #ef4444;--info-color: #3b82f6;--shadow-sm: 0 1px 2px rgba(0, 0, 0, .05);--shadow-md: 0 4px 6px rgba(0, 0, 0, .1);--shadow-lg: 0 10px 15px rgba(0, 0, 0, .1);--shadow-xl: 0 20px 25px rgba(0, 0, 0, .1)}html[data-theme=dark]{--bg-primary: #0f172a;--bg-secondary: #1e293b;--bg-tertiary: #334155;--card-bg: #1e293b;--card-bg-hover: #334155;--text-primary: #f1f5f9;--text-secondary: #cbd5e1;--text-tertiary: #94a3b8;--border-color: #334155;--border-color-light: #475569;--accent-color: #60a5fa;--accent-color-dark: #1d4ed8;--accent-color-light: #93c5fd;--success-color: #10b981;--warning-color: #f59e0b;--error-color: #ef4444;--info-color: #60a5fa;--shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--shadow-md: 0 4px 6px rgba(0, 0, 0, .3);--shadow-lg: 0 10px 15px rgba(0, 0, 0, .3);--shadow-xl: 0 20px 25px rgba(0, 0, 0, .3)}html[data-accent=green]{--accent-color: #10b981;--accent-color-dark: #059669;--accent-color-light: #6ee7b7}html[data-accent=green] .stats-card-icon-wrapper{background:linear-gradient(135deg,#10b9811a,#6ee7b71a)}html[data-accent=purple]{--accent-color: #8b5cf6;--accent-color-dark: #6d28d9;--accent-color-light: #a78bfa}html[data-accent=purple] .stats-card-icon-wrapper{background:linear-gradient(135deg,#8b5cf61a,#a78bfa1a)}html[data-accent=orange]{--accent-color: #f97316;--accent-color-dark: #d97706;--accent-color-light: #fb923c}html[data-accent=orange] .stats-card-icon-wrapper{background:linear-gradient(135deg,#f973161a,#fb923c1a)}html[data-accent=red]{--accent-color: #ef4444;--accent-color-dark: #dc2626;--accent-color-light: #f87171}html[data-accent=red] .stats-card-icon-wrapper{background:linear-gradient(135deg,#ef44441a,#f871711a)}html[data-accent=blue]{--accent-color: #3b82f6;--accent-color-dark: #1d4ed8;--accent-color-light: #93c5fd}html[data-accent=blue] .stats-card-icon-wrapper{background:linear-gradient(135deg,#3b82f61a,#93c5fd1a)}html[data-accent=indigo]{--accent-color: #6366f1;--accent-color-dark: #4338ca;--accent-color-light: #a5b4fc}html[data-accent=indigo] .stats-card-icon-wrapper{background:linear-gradient(135deg,#6366f11a,#a5b4fc1a)}html[data-accent=cyan]{--accent-color: #06b6d4;--accent-color-dark: #0e7490;--accent-color-light: #67e8f9}html[data-accent=cyan] .stats-card-icon-wrapper{background:linear-gradient(135deg,#06b6d41a,#67e8f91a)}html[data-accent=teal]{--accent-color: #14b8a6;--accent-color-dark: #0f766e;--accent-color-light: #5eead4}html[data-accent=teal] .stats-card-icon-wrapper{background:linear-gradient(135deg,#14b8a61a,#5eead41a)}html[data-accent=pink]{--accent-color: #ec4899;--accent-color-dark: #be185d;--accent-color-light: #f9a8d4}html[data-accent=pink] .stats-card-icon-wrapper{background:linear-gradient(135deg,#ec48991a,#f9a8d41a)}html[data-accent=rose]{--accent-color: #f43f5e;--accent-color-dark: #be123c;--accent-color-light: #fda4af}html[data-accent=rose] .stats-card-icon-wrapper{background:linear-gradient(135deg,#f43f5e1a,#fda4af1a)}html[data-accent=amber]{--accent-color: #f59e0b;--accent-color-dark: #b45309;--accent-color-light: #fcd34d}html[data-accent=amber] .stats-card-icon-wrapper{background:linear-gradient(135deg,#f59e0b1a,#fcd34d1a)}html[data-accent=lime]{--accent-color: #84cc16;--accent-color-dark: #4d7c0f;--accent-color-light: #bef264}html[data-accent=lime] .stats-card-icon-wrapper{background:linear-gradient(135deg,#84cc161a,#bef2641a)}html[data-accent=emerald]{--accent-color: #10b981;--accent-color-dark: #047857;--accent-color-light: #6ee7b7}html[data-accent=emerald] .stats-card-icon-wrapper{background:linear-gradient(135deg,#10b9811a,#6ee7b71a)}html[data-accent=sky]{--accent-color: #0ea5e9;--accent-color-dark: #0369a1;--accent-color-light: #7dd3fc}html[data-accent=sky] .stats-card-icon-wrapper{background:linear-gradient(135deg,#0ea5e91a,#7dd3fc1a)}html[data-accent=slate]{--accent-color: #64748b;--accent-color-dark: #334155;--accent-color-light: #94a3b8}html[data-accent=slate] .stats-card-icon-wrapper{background:linear-gradient(135deg,#64748b1a,#94a3b81a)}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}@keyframes slideUp{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slideDown{0%{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}@keyframes slideLeft{0%{opacity:0;transform:translate(20px)}to{opacity:1;transform:translate(0)}}@keyframes slideRight{0%{opacity:0;transform:translate(-20px)}to{opacity:1;transform:translate(0)}}@keyframes pulse{0%,to{opacity:1}50%{opacity:.5}}@keyframes shimmer{0%{background-position:-1000px 0}to{background-position:1000px 0}}@keyframes bounce{0%,to{transform:translateY(0)}50%{transform:translateY(-5px)}}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.animate-fade-in{animation:fadeIn .3s ease-in}.animate-slide-up{animation:slideUp .3s ease-out}.animate-slide-left{animation:slideLeft .3s ease-out}.animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}.animate-shimmer{animation:shimmer 2s infinite;background:linear-gradient(to right,var(--bg-secondary) 0%,var(--bg-tertiary) 50%,var(--bg-secondary) 100%);background-size:1000px 100%}.animate-spin{animation:spin 1s linear infinite}.animate-bounce{animation:bounce 1s ease-in-out infinite}')),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import * as g from "react";
import nn, { useState as re, useEffect as fe, useRef as H, isValidElement as vt, forwardRef as Ce, useContext as yt, createContext as lt, useMemo as gt, useCallback as ie, useImperativeHandle as Oy, useLayoutEffect as Ve, cloneElement as In, createElement as Py, Children as Zw, memo as Po, Component as Jw, PureComponent as Ey } from "react";
import { createPortal as Qs } from "react-dom";
function an(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Xi = { exports: {} }, Kn = {};
var ud;
function Qw() {
  if (ud) return Kn;
  ud = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), t = /* @__PURE__ */ Symbol.for("react.fragment");
  function r(n, i, a) {
    var o = null;
    if (a !== void 0 && (o = "" + a), i.key !== void 0 && (o = "" + i.key), "key" in i) {
      a = {};
      for (var l in i)
        l !== "key" && (a[l] = i[l]);
    } else a = i;
    return i = a.ref, {
      $$typeof: e,
      type: n,
      key: o,
      ref: i !== void 0 ? i : null,
      props: a
    };
  }
  return Kn.Fragment = t, Kn.jsx = r, Kn.jsxs = r, Kn;
}
var qn = {};
var sd;
function eO() {
  return sd || (sd = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(k) {
      if (k == null) return null;
      if (typeof k == "function")
        return k.$$typeof === N ? null : k.displayName || k.name || null;
      if (typeof k == "string") return k;
      switch (k) {
        case h:
          return "Fragment";
        case b:
          return "Profiler";
        case y:
          return "StrictMode";
        case O:
          return "Suspense";
        case A:
          return "SuspenseList";
        case T:
          return "Activity";
      }
      if (typeof k == "object")
        switch (typeof k.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), k.$$typeof) {
          case m:
            return "Portal";
          case w:
            return k.displayName || "Context";
          case x:
            return (k._context.displayName || "Context") + ".Consumer";
          case P:
            var W = k.render;
            return k = k.displayName, k || (k = W.displayName || W.name || "", k = k !== "" ? "ForwardRef(" + k + ")" : "ForwardRef"), k;
          case _:
            return W = k.displayName || null, W !== null ? W : e(k.type) || "Memo";
          case C:
            W = k._payload, k = k._init;
            try {
              return e(k(W));
            } catch {
            }
        }
      return null;
    }
    function t(k) {
      return "" + k;
    }
    function r(k) {
      try {
        t(k);
        var W = !1;
      } catch {
        W = !0;
      }
      if (W) {
        W = console;
        var Y = W.error, J = typeof Symbol == "function" && Symbol.toStringTag && k[Symbol.toStringTag] || k.constructor.name || "Object";
        return Y.call(
          W,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          J
        ), t(k);
      }
    }
    function n(k) {
      if (k === h) return "<>";
      if (typeof k == "object" && k !== null && k.$$typeof === C)
        return "<...>";
      try {
        var W = e(k);
        return W ? "<" + W + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var k = j.A;
      return k === null ? null : k.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function o(k) {
      if (I.call(k, "key")) {
        var W = Object.getOwnPropertyDescriptor(k, "key").get;
        if (W && W.isReactWarning) return !1;
      }
      return k.key !== void 0;
    }
    function l(k, W) {
      function Y() {
        V || (V = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          W
        ));
      }
      Y.isReactWarning = !0, Object.defineProperty(k, "key", {
        get: Y,
        configurable: !0
      });
    }
    function u() {
      var k = e(this.type);
      return U[k] || (U[k] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), k = this.props.ref, k !== void 0 ? k : null;
    }
    function s(k, W, Y, J, He, _t) {
      var ve = Y.ref;
      return k = {
        $$typeof: p,
        type: k,
        key: W,
        props: Y,
        _owner: J
      }, (ve !== void 0 ? ve : null) !== null ? Object.defineProperty(k, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(k, "ref", { enumerable: !1, value: null }), k._store = {}, Object.defineProperty(k._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(k, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(k, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: He
      }), Object.defineProperty(k, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: _t
      }), Object.freeze && (Object.freeze(k.props), Object.freeze(k)), k;
    }
    function c(k, W, Y, J, He, _t) {
      var ve = W.children;
      if (ve !== void 0)
        if (J)
          if ($(ve)) {
            for (J = 0; J < ve.length; J++)
              f(ve[J]);
            Object.freeze && Object.freeze(ve);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(ve);
      if (I.call(W, "key")) {
        ve = e(k);
        var we = Object.keys(W).filter(function(R) {
          return R !== "key";
        });
        J = 0 < we.length ? "{key: someKey, " + we.join(": ..., ") + ": ...}" : "{key: someKey}", Z[ve + J] || (we = 0 < we.length ? "{" + we.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          J,
          ve,
          we,
          ve
        ), Z[ve + J] = !0);
      }
      if (ve = null, Y !== void 0 && (r(Y), ve = "" + Y), o(W) && (r(W.key), ve = "" + W.key), "key" in W) {
        Y = {};
        for (var z in W)
          z !== "key" && (Y[z] = W[z]);
      } else Y = W;
      return ve && l(
        Y,
        typeof k == "function" ? k.displayName || k.name || "Unknown" : k
      ), s(
        k,
        ve,
        Y,
        i(),
        He,
        _t
      );
    }
    function f(k) {
      d(k) ? k._store && (k._store.validated = 1) : typeof k == "object" && k !== null && k.$$typeof === C && (k._payload.status === "fulfilled" ? d(k._payload.value) && k._payload.value._store && (k._payload.value._store.validated = 1) : k._store && (k._store.validated = 1));
    }
    function d(k) {
      return typeof k == "object" && k !== null && k.$$typeof === p;
    }
    var v = nn, p = /* @__PURE__ */ Symbol.for("react.transitional.element"), m = /* @__PURE__ */ Symbol.for("react.portal"), h = /* @__PURE__ */ Symbol.for("react.fragment"), y = /* @__PURE__ */ Symbol.for("react.strict_mode"), b = /* @__PURE__ */ Symbol.for("react.profiler"), x = /* @__PURE__ */ Symbol.for("react.consumer"), w = /* @__PURE__ */ Symbol.for("react.context"), P = /* @__PURE__ */ Symbol.for("react.forward_ref"), O = /* @__PURE__ */ Symbol.for("react.suspense"), A = /* @__PURE__ */ Symbol.for("react.suspense_list"), _ = /* @__PURE__ */ Symbol.for("react.memo"), C = /* @__PURE__ */ Symbol.for("react.lazy"), T = /* @__PURE__ */ Symbol.for("react.activity"), N = /* @__PURE__ */ Symbol.for("react.client.reference"), j = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = Object.prototype.hasOwnProperty, $ = Array.isArray, K = console.createTask ? console.createTask : function() {
      return null;
    };
    v = {
      react_stack_bottom_frame: function(k) {
        return k();
      }
    };
    var V, U = {}, X = v.react_stack_bottom_frame.bind(
      v,
      a
    )(), q = K(n(a)), Z = {};
    qn.Fragment = h, qn.jsx = function(k, W, Y) {
      var J = 1e4 > j.recentlyCreatedOwnerStacks++;
      return c(
        k,
        W,
        Y,
        !1,
        J ? Error("react-stack-top-frame") : X,
        J ? K(n(k)) : q
      );
    }, qn.jsxs = function(k, W, Y) {
      var J = 1e4 > j.recentlyCreatedOwnerStacks++;
      return c(
        k,
        W,
        Y,
        !0,
        J ? Error("react-stack-top-frame") : X,
        J ? K(n(k)) : q
      );
    };
  })()), qn;
}
var cd;
function tO() {
  return cd || (cd = 1, process.env.NODE_ENV === "production" ? Xi.exports = Qw() : Xi.exports = eO()), Xi.exports;
}
var E = tO();
const rO = ({
  brand: e = "Dashboard Created By Using Akhilesh UI Verse",
  menu: t = [],
  actions: r = [],
  onMenuToggle: n
}) => /* @__PURE__ */ E.jsxs("nav", { className: "navbar", children: [
  /* @__PURE__ */ E.jsxs("div", { className: "navbar-brand", children: [
    /* @__PURE__ */ E.jsx(
      "button",
      {
        className: "navbar-menu-toggle",
        onClick: n,
        style: {
          display: "none",
          background: "none",
          border: "none",
          fontSize: "1.5rem",
          cursor: "pointer",
          color: "var(--text-primary)"
        },
        children: "☰"
      }
    ),
    e
  ] }),
  /* @__PURE__ */ E.jsx("div", { className: "navbar-menu", children: t.map((i, a) => /* @__PURE__ */ E.jsx("a", { href: i.href, style: { color: "var(--text-secondary)" }, children: i.label }, a)) }),
  /* @__PURE__ */ E.jsx("div", { className: "navbar-actions", children: r.map((i, a) => /* @__PURE__ */ E.jsx(
    "button",
    {
      onClick: i.onClick,
      className: "navbar-action-button",
      style: {
        padding: "0.5rem 1rem",
        background: "none",
        border: "none",
        cursor: "pointer",
        color: "var(--text-secondary)",
        transition: "color 0.2s ease"
      },
      children: i.icon || i.label
    },
    a
  )) })
] }), fd = ({
  items: e = [],
  activeId: t,
  onItemClick: r,
  collapsed: n = !1,
  onToggleCollapse: i
}) => /* @__PURE__ */ E.jsxs("aside", { className: `sidebar ${n ? "collapsed" : ""}`, children: [
  /* @__PURE__ */ E.jsxs("div", { className: "sidebar-header", children: [
    /* @__PURE__ */ E.jsx(
      "button",
      {
        onClick: i,
        style: {
          background: "none",
          border: "none",
          fontSize: "1.25rem",
          cursor: "pointer",
          color: "var(--text-primary)"
        },
        children: n ? "→" : "←"
      }
    ),
    /* @__PURE__ */ E.jsx("span", { className: `sidebar-title ${n ? "collapsed" : ""}`, children: "Dashboard" })
  ] }),
  /* @__PURE__ */ E.jsx("div", { className: "sidebar-menu", children: e.map((a) => /* @__PURE__ */ E.jsxs(
    "div",
    {
      className: `sidebar-item ${t === a.id ? "active" : ""}`,
      onClick: () => r(a.id),
      children: [
        /* @__PURE__ */ E.jsx("span", { className: "sidebar-icon", children: a.icon }),
        /* @__PURE__ */ E.jsx("span", { className: "sidebar-label", children: a.label })
      ]
    },
    a.id
  )) })
] }), nO = ({
  title: e = "Page Title",
  description: t = "",
  icon: r = null
}) => /* @__PURE__ */ E.jsxs("div", { className: "page-header", children: [
  /* @__PURE__ */ E.jsx("h1", { children: e }),
  t && /* @__PURE__ */ E.jsx("p", { children: t }),
  r && /* @__PURE__ */ E.jsx("span", { className: "header-icon", children: r })
] }), Oi = ({
  icon: e = "📭",
  title: t = "No data available",
  description: r = "There is nothing to display at the moment."
}) => /* @__PURE__ */ E.jsxs("div", { className: "empty-state", children: [
  /* @__PURE__ */ E.jsx("div", { className: "empty-state-icon", children: e }),
  /* @__PURE__ */ E.jsx("div", { className: "empty-state-title", children: t }),
  /* @__PURE__ */ E.jsx("div", { className: "empty-state-description", children: r })
] }), iO = ({ widget: e, rendererMap: t = {} }) => {
  if (!e)
    return null;
  const r = t[e.type];
  return r ? /* @__PURE__ */ E.jsx(r, { ...e }) : /* @__PURE__ */ E.jsx(
    Oi,
    {
      icon: "⚠️",
      title: "Unknown Widget Type",
      description: `Widget type "${e.type}" is not registered.`
    }
  );
}, aO = ({ section: e, pageId: t = "page", sectionIndex: r = 0, rendererMap: n = {} }) => {
  if (!e || !e.widgets)
    return null;
  const i = `grid-cols-${e.gridCols || 1}`;
  return /* @__PURE__ */ E.jsxs("section", { className: "section animate-fade-in", children: [
    e.title && /* @__PURE__ */ E.jsx("h2", { className: "section-title", children: e.title }),
    e.description && /* @__PURE__ */ E.jsx("p", { className: "section-description", children: e.description }),
    /* @__PURE__ */ E.jsx("div", { className: `grid ${i}`, children: e.widgets.map((a, o) => /* @__PURE__ */ E.jsx(
      iO,
      {
        widget: a,
        rendererMap: n
      },
      `${t}-${e.id || "section"}-${r}-${a.id || "widget"}-${o}`
    )) })
  ] });
}, oO = ({ page: e, rendererMap: t = {} }) => e ? /* @__PURE__ */ E.jsxs("div", { className: "page animate-slide-up", children: [
  e.title && /* @__PURE__ */ E.jsx(
    nO,
    {
      title: e.title,
      description: e.description,
      icon: e.icon
    }
  ),
  /* @__PURE__ */ E.jsx("div", { className: "page-body", children: e.sections && e.sections.length > 0 ? e.sections.map((r, n) => /* @__PURE__ */ E.jsx(
    aO,
    {
      pageId: e.id,
      section: r,
      sectionIndex: n,
      rendererMap: t
    },
    `${e.id}-${r.id || "section"}-${n}`
  )) : /* @__PURE__ */ E.jsx("div", { style: { textAlign: "center", padding: "2rem", color: "var(--text-tertiary)" }, children: "No content available for this page." }) })
] }) : null, lO = ({ isOpen: e, onClose: t, profile: r = {}, onActionClick: n = null }) => {
  const [i, a] = re(!1), o = () => {
    a(!0), setTimeout(() => {
      t(), a(!1);
    }, 300);
  };
  return e ? /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
    /* @__PURE__ */ E.jsx(
      "div",
      {
        className: `modal-overlay ${i ? "closing" : ""}`,
        onClick: o
      }
    ),
    /* @__PURE__ */ E.jsx("div", { className: `modal-container ${i ? "closing" : ""}`, children: /* @__PURE__ */ E.jsxs("div", { className: "profile-modal", children: [
      /* @__PURE__ */ E.jsxs("div", { className: "modal-header", children: [
        /* @__PURE__ */ E.jsx("h2", { className: "modal-title", children: r.title || "User Profile" }),
        /* @__PURE__ */ E.jsx(
          "button",
          {
            className: "modal-close-btn",
            onClick: o,
            "aria-label": "Close modal",
            children: "✕"
          }
        )
      ] }),
      /* @__PURE__ */ E.jsxs("div", { className: "modal-body", children: [
        r.avatar && /* @__PURE__ */ E.jsx("div", { className: "profile-avatar-section", children: /* @__PURE__ */ E.jsx(
          "img",
          {
            src: r.avatar,
            alt: "Profile avatar",
            className: "profile-avatar"
          }
        ) }),
        r.fields && r.fields.length > 0 && /* @__PURE__ */ E.jsx("div", { className: "profile-fields", children: r.fields.map((l, u) => /* @__PURE__ */ E.jsxs("div", { className: "profile-field", children: [
          /* @__PURE__ */ E.jsxs("span", { className: "profile-field-label", children: [
            l.label,
            ":"
          ] }),
          /* @__PURE__ */ E.jsx("span", { className: "profile-field-value", children: l.value })
        ] }, u)) }),
        r.description && /* @__PURE__ */ E.jsx("div", { className: "profile-description", children: /* @__PURE__ */ E.jsx("p", { children: r.description }) }),
        r.stats && r.stats.length > 0 && /* @__PURE__ */ E.jsx("div", { className: "profile-stats", children: r.stats.map((l, u) => /* @__PURE__ */ E.jsxs("div", { className: "profile-stat-item", children: [
          /* @__PURE__ */ E.jsx("div", { className: "profile-stat-value", children: l.value }),
          /* @__PURE__ */ E.jsx("div", { className: "profile-stat-label", children: l.label })
        ] }, u)) })
      ] }),
      r.actions && r.actions.length > 0 && /* @__PURE__ */ E.jsx("div", { className: "modal-footer", children: r.actions.map((l, u) => /* @__PURE__ */ E.jsx(
        "button",
        {
          className: `modal-action-btn ${l.variant || "secondary"}`,
          onClick: () => {
            n && n(l.id || l.label), l.closeOnClick && o();
          },
          children: l.label
        },
        u
      )) })
    ] }) })
  ] }) : null;
}, uO = (e = "blue", t = "light") => {
  const [r, n] = re(t), [i, a] = re(e);
  fe(() => {
    const u = localStorage.getItem("app-theme") || t;
    n(u), a(e), o(u, e);
  }, [e, t]);
  const o = (u, s) => {
    const c = document.documentElement;
    c.setAttribute("data-theme", u), s && s !== "blue" ? c.setAttribute("data-accent", s) : c.removeAttribute("data-accent");
  };
  return {
    theme: r,
    toggleTheme: () => {
      const u = r === "light" ? "dark" : "light";
      n(u), o(u, i), localStorage.setItem("app-theme", u);
    },
    accentColor: i,
    isDark: r === "dark"
  };
}, sO = () => {
  const [e, t] = re(!1), [r, n] = re(!1), [i, a] = re(!0), [o, l] = re(typeof window < "u" ? window.innerWidth : 0);
  return fe(() => {
    const u = () => {
      const s = window.innerWidth;
      l(s), t(s < 640), n(s >= 640 && s < 1024), a(s >= 1024);
    };
    return window.addEventListener("resize", u), u(), () => window.removeEventListener("resize", u);
  }, []), {
    isMobile: e,
    isTablet: r,
    isDesktop: i,
    width: o,
    breakpoint: e ? "mobile" : "desktop"
  };
}, cO = ({ config: e, rendererMap: t = {} }) => {
  const [r, n] = re(null), [i, a] = re(!0), [o, l] = re(!1), [u, s] = re(!1), c = H(null), { theme: f, toggleTheme: d } = uO(
    e.accentColor || "blue",
    e.theme || "light"
  ), { isMobile: v } = sO(), p = e.design || "default", m = e.navbar !== !1, h = m;
  fe(() => {
    e.pages && e.pages.length > 0 && !r && n(e.pages[0].id);
  }, [e, r]), fe(() => {
    v && a(!1);
  }, [v]), fe(() => {
    c.current && typeof c.current.scrollTo == "function" && c.current.scrollTo({ top: 0, behavior: "auto" });
  }, [r]);
  const y = e.pages?.find((O) => O.id === r), b = (O) => {
    n(O), v && a(!1);
  }, x = () => {
    a(!i);
  }, w = () => {
    l(!o);
  }, P = (O) => {
    console.log("Profile action triggered:", O);
  };
  return /* @__PURE__ */ E.jsxs("div", { className: `app-container design-mode-${p}`, children: [
    /* @__PURE__ */ E.jsx(
      lO,
      {
        isOpen: u,
        onClose: () => s(!1),
        profile: e.profile,
        onActionClick: P
      }
    ),
    !v && h && /* @__PURE__ */ E.jsx(
      fd,
      {
        items: e.pages.map((O) => ({ id: O.id, label: O.title, icon: O.icon })),
        activeId: r,
        onItemClick: b,
        collapsed: o,
        onToggleCollapse: w
      }
    ),
    v && i && h && /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
      /* @__PURE__ */ E.jsx(
        "div",
        {
          onClick: () => a(!1),
          style: {
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 99
          }
        }
      ),
      /* @__PURE__ */ E.jsx(
        fd,
        {
          items: e.pages.map((O) => ({ id: O.id, label: O.title, icon: O.icon })),
          activeId: r,
          onItemClick: b,
          collapsed: !1
        }
      )
    ] }),
    /* @__PURE__ */ E.jsxs("div", { className: "app-content", children: [
      m && /* @__PURE__ */ E.jsx(
        rO,
        {
          brand: e.name || "Dashboard",
          actions: [
            {
              icon: "👤",
              onClick: () => s(!0),
              label: "Profile"
            },
            {
              icon: f === "light" ? "🌙" : "☀️",
              onClick: d,
              label: "Toggle Theme"
            },
            {
              icon: "⚙️",
              onClick: () => console.log("Settings clicked"),
              label: "Settings"
            }
          ],
          onMenuToggle: x
        }
      ),
      /* @__PURE__ */ E.jsx(
        "div",
        {
          ref: c,
          className: "page-wrapper",
          children: y ? /* @__PURE__ */ E.jsx(
            oO,
            {
              page: y,
              rendererMap: t
            },
            y.id
          ) : /* @__PURE__ */ E.jsx("div", { style: { padding: "2rem", textAlign: "center", color: "var(--text-tertiary)" }, children: "Loading..." })
        }
      )
    ] })
  ] });
}, fO = (e) => typeof e != "number" ? e : e >= 1e6 ? (e / 1e6).toFixed(1) + "M" : e >= 1e3 ? (e / 1e3).toFixed(1) + "K" : e.toLocaleString(), dO = (e, t = "short") => {
  const r = new Date(e);
  return t === "short" ? r.toLocaleDateString("en-US", { month: "short", day: "numeric" }) : t === "long" ? r.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) : t === "time" ? r.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }) : r.toLocaleDateString();
}, Pi = (e = 5) => {
  const t = [
    "#3b82f6",
    // blue
    "#10b981",
    // green
    "#f59e0b",
    // amber
    "#ef4444",
    // red
    "#8b5cf6",
    // purple
    "#ec4899",
    // pink
    "#06b6d4",
    // cyan
    "#f97316"
    // orange
  ], r = [];
  for (let n = 0; n < e; n++)
    r.push(t[n % t.length]);
  return r;
}, vO = ({
  label: e,
  value: t,
  change: r,
  changeType: n = "neutral",
  icon: i = "📊",
  title: a = ""
}) => {
  const o = fO(t);
  return /* @__PURE__ */ E.jsxs("div", { className: "stats-card", children: [
    /* @__PURE__ */ E.jsxs("div", { className: "stats-card-header", children: [
      /* @__PURE__ */ E.jsx("div", { className: "stats-card-icon-wrapper", children: /* @__PURE__ */ E.jsx("span", { className: "stats-card-icon", children: i }) }),
      /* @__PURE__ */ E.jsxs("div", { className: "stats-card-title-section", children: [
        a && /* @__PURE__ */ E.jsx("div", { className: "stats-card-title", children: a }),
        /* @__PURE__ */ E.jsx("div", { className: "stats-card-label", children: e })
      ] })
    ] }),
    /* @__PURE__ */ E.jsxs("div", { className: "stats-card-body", children: [
      /* @__PURE__ */ E.jsx("div", { className: "stats-card-value", children: o }),
      r !== void 0 && /* @__PURE__ */ E.jsxs("div", { className: `stats-card-change-badge ${n}`, children: [
        /* @__PURE__ */ E.jsxs("span", { className: "stats-card-change-icon", children: [
          n === "positive" && "↑",
          n === "negative" && "↓",
          n === "neutral" && "→"
        ] }),
        /* @__PURE__ */ E.jsxs("span", { className: "stats-card-change-value", children: [
          Math.abs(r),
          "%"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ E.jsx("div", { className: "stats-card-accent" })
  ] });
}, pO = ({
  id: e,
  title: t = "Card Title",
  label: r = "Label",
  value: n = "0",
  icon: i = "📊",
  description: a = "",
  trend: o = ""
}) => /* @__PURE__ */ E.jsxs("div", { className: "card-design-1", children: [
  /* @__PURE__ */ E.jsxs("div", { className: "card-design-1-header", children: [
    /* @__PURE__ */ E.jsx("div", { className: "card-design-1-icon", children: i }),
    /* @__PURE__ */ E.jsx("div", { className: "card-design-1-title", children: t })
  ] }),
  /* @__PURE__ */ E.jsxs("div", { className: "card-design-1-body", children: [
    /* @__PURE__ */ E.jsx("div", { className: "card-design-1-value", children: n }),
    /* @__PURE__ */ E.jsx("div", { className: "card-design-1-label", children: r }),
    a && /* @__PURE__ */ E.jsx("p", { className: "card-design-1-description", children: a })
  ] }),
  o && /* @__PURE__ */ E.jsx("div", { className: "card-design-1-footer", children: /* @__PURE__ */ E.jsx("span", { className: `card-design-1-trend ${o.startsWith("-") ? "negative" : "positive"}`, children: o }) })
] }), hO = ({
  id: e,
  title: t = "Card Title",
  label: r = "Label",
  value: n = "0",
  icon: i = "💎",
  description: a = "",
  chart: o = null,
  trend: l = ""
}) => /* @__PURE__ */ E.jsxs("div", { className: "card-design-2", children: [
  /* @__PURE__ */ E.jsx("div", { className: "card-design-2-accent" }),
  /* @__PURE__ */ E.jsxs("div", { className: "card-design-2-header", children: [
    /* @__PURE__ */ E.jsx("div", { className: "card-design-2-icon", children: i }),
    /* @__PURE__ */ E.jsxs("div", { className: "card-design-2-info", children: [
      /* @__PURE__ */ E.jsx("h3", { className: "card-design-2-title", children: t }),
      /* @__PURE__ */ E.jsx("p", { className: "card-design-2-description", children: a })
    ] })
  ] }),
  /* @__PURE__ */ E.jsxs("div", { className: "card-design-2-body", children: [
    /* @__PURE__ */ E.jsx("div", { className: "card-design-2-value", children: n }),
    /* @__PURE__ */ E.jsx("div", { className: "card-design-2-label", children: r })
  ] }),
  o && /* @__PURE__ */ E.jsx("div", { className: "card-design-2-chart", children: /* @__PURE__ */ E.jsx("svg", { viewBox: "0 0 150 40", height: "40", preserveAspectRatio: "none", children: o.data && o.data.map((u, s, c) => {
    const f = s / (c.length - 1 || 1) * 150, d = Math.max(...c), v = 40 - u / d * 35;
    return /* @__PURE__ */ E.jsx(
      "rect",
      {
        x: f,
        y: v,
        width: 150 / c.length,
        height: 40 - v,
        fill: "var(--accent-color)",
        opacity: "0.7"
      },
      s
    );
  }) }) }),
  l && /* @__PURE__ */ E.jsx("div", { className: "card-design-2-footer", children: /* @__PURE__ */ E.jsx("span", { className: `card-design-2-trend ${l.startsWith("-") ? "negative" : "positive"}`, children: l }) })
] }), mO = ({
  id: e,
  title: t = "Card Title",
  label: r = "Label",
  value: n = "0",
  icon: i = "⚡",
  description: a = "",
  stats: o = [],
  trend: l = ""
}) => /* @__PURE__ */ E.jsxs("div", { className: "card-design-3", children: [
  /* @__PURE__ */ E.jsxs("div", { className: "card-design-3-header", children: [
    /* @__PURE__ */ E.jsxs("div", { className: "card-design-3-top", children: [
      /* @__PURE__ */ E.jsx("div", { className: "card-design-3-icon", children: i }),
      /* @__PURE__ */ E.jsx("h3", { className: "card-design-3-title", children: t })
    ] }),
    l && /* @__PURE__ */ E.jsx("span", { className: `card-design-3-trend ${l.startsWith("-") ? "negative" : "positive"}`, children: l })
  ] }),
  /* @__PURE__ */ E.jsxs("div", { className: "card-design-3-body", children: [
    /* @__PURE__ */ E.jsx("div", { className: "card-design-3-value", children: n }),
    /* @__PURE__ */ E.jsx("div", { className: "card-design-3-label", children: r }),
    a && /* @__PURE__ */ E.jsx("p", { className: "card-design-3-description", children: a })
  ] }),
  o && o.length > 0 && /* @__PURE__ */ E.jsx("div", { className: "card-design-3-stats", children: o.map((u, s) => /* @__PURE__ */ E.jsxs("div", { className: "card-design-3-stat-item", children: [
    /* @__PURE__ */ E.jsx("span", { className: "card-design-3-stat-name", children: u.name }),
    /* @__PURE__ */ E.jsx("span", { className: "card-design-3-stat-value", children: u.value })
  ] }, s)) })
] });
function Ay(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (r = Ay(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function te() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (t = Ay(e)) && (n && (n += " "), n += t);
  return n;
}
var yO = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"];
function ec(e) {
  if (typeof e != "string")
    return !1;
  var t = yO;
  return t.includes(e);
}
var gO = [
  "aria-activedescendant",
  "aria-atomic",
  "aria-autocomplete",
  "aria-busy",
  "aria-checked",
  "aria-colcount",
  "aria-colindex",
  "aria-colspan",
  "aria-controls",
  "aria-current",
  "aria-describedby",
  "aria-details",
  "aria-disabled",
  "aria-errormessage",
  "aria-expanded",
  "aria-flowto",
  "aria-haspopup",
  "aria-hidden",
  "aria-invalid",
  "aria-keyshortcuts",
  "aria-label",
  "aria-labelledby",
  "aria-level",
  "aria-live",
  "aria-modal",
  "aria-multiline",
  "aria-multiselectable",
  "aria-orientation",
  "aria-owns",
  "aria-placeholder",
  "aria-posinset",
  "aria-pressed",
  "aria-readonly",
  "aria-relevant",
  "aria-required",
  "aria-roledescription",
  "aria-rowcount",
  "aria-rowindex",
  "aria-rowspan",
  "aria-selected",
  "aria-setsize",
  "aria-sort",
  "aria-valuemax",
  "aria-valuemin",
  "aria-valuenow",
  "aria-valuetext",
  "className",
  "color",
  "height",
  "id",
  "lang",
  "max",
  "media",
  "method",
  "min",
  "name",
  "style",
  /*
   * removed 'type' SVGElementPropKey because we do not currently use any SVG elements
   * that can use it, and it conflicts with the recharts prop 'type'
   * https://github.com/recharts/recharts/pull/3327
   * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/type
   */
  // 'type',
  "target",
  "width",
  "role",
  "tabIndex",
  "accentHeight",
  "accumulate",
  "additive",
  "alignmentBaseline",
  "allowReorder",
  "alphabetic",
  "amplitude",
  "arabicForm",
  "ascent",
  "attributeName",
  "attributeType",
  "autoReverse",
  "azimuth",
  "baseFrequency",
  "baselineShift",
  "baseProfile",
  "bbox",
  "begin",
  "bias",
  "by",
  "calcMode",
  "capHeight",
  "clip",
  "clipPath",
  "clipPathUnits",
  "clipRule",
  "colorInterpolation",
  "colorInterpolationFilters",
  "colorProfile",
  "colorRendering",
  "contentScriptType",
  "contentStyleType",
  "cursor",
  "cx",
  "cy",
  "d",
  "decelerate",
  "descent",
  "diffuseConstant",
  "direction",
  "display",
  "divisor",
  "dominantBaseline",
  "dur",
  "dx",
  "dy",
  "edgeMode",
  "elevation",
  "enableBackground",
  "end",
  "exponent",
  "externalResourcesRequired",
  "fill",
  "fillOpacity",
  "fillRule",
  "filter",
  "filterRes",
  "filterUnits",
  "floodColor",
  "floodOpacity",
  "focusable",
  "fontFamily",
  "fontSize",
  "fontSizeAdjust",
  "fontStretch",
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "format",
  "from",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyphName",
  "glyphOrientationHorizontal",
  "glyphOrientationVertical",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "hanging",
  "horizAdvX",
  "horizOriginX",
  "href",
  "ideographic",
  "imageRendering",
  "in2",
  "in",
  "intercept",
  "k1",
  "k2",
  "k3",
  "k4",
  "k",
  "kernelMatrix",
  "kernelUnitLength",
  "kerning",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "letterSpacing",
  "lightingColor",
  "limitingConeAngle",
  "local",
  "markerEnd",
  "markerHeight",
  "markerMid",
  "markerStart",
  "markerUnits",
  "markerWidth",
  "mask",
  "maskContentUnits",
  "maskUnits",
  "mathematical",
  "mode",
  "numOctaves",
  "offset",
  "opacity",
  "operator",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "overlinePosition",
  "overlineThickness",
  "paintOrder",
  "panose1",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointerEvents",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "r",
  "radius",
  "refX",
  "refY",
  "renderingIntent",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "restart",
  "result",
  "rotate",
  "rx",
  "ry",
  "seed",
  "shapeRendering",
  "slope",
  "spacing",
  "specularConstant",
  "specularExponent",
  "speed",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stemh",
  "stemv",
  "stitchTiles",
  "stopColor",
  "stopOpacity",
  "strikethroughPosition",
  "strikethroughThickness",
  "string",
  "stroke",
  "strokeDasharray",
  "strokeDashoffset",
  "strokeLinecap",
  "strokeLinejoin",
  "strokeMiterlimit",
  "strokeOpacity",
  "strokeWidth",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textAnchor",
  "textDecoration",
  "textLength",
  "textRendering",
  "to",
  "transform",
  "u1",
  "u2",
  "underlinePosition",
  "underlineThickness",
  "unicode",
  "unicodeBidi",
  "unicodeRange",
  "unitsPerEm",
  "vAlphabetic",
  "values",
  "vectorEffect",
  "version",
  "vertAdvY",
  "vertOriginX",
  "vertOriginY",
  "vHanging",
  "vIdeographic",
  "viewTarget",
  "visibility",
  "vMathematical",
  "widths",
  "wordSpacing",
  "writingMode",
  "x1",
  "x2",
  "x",
  "xChannelSelector",
  "xHeight",
  "xlinkActuate",
  "xlinkArcrole",
  "xlinkHref",
  "xlinkRole",
  "xlinkShow",
  "xlinkTitle",
  "xlinkType",
  "xmlBase",
  "xmlLang",
  "xmlns",
  "xmlnsXlink",
  "xmlSpace",
  "y1",
  "y2",
  "y",
  "yChannelSelector",
  "z",
  "zoomAndPan",
  "ref",
  "key",
  "angle"
], bO = new Set(gO);
function Sy(e) {
  return typeof e != "string" ? !1 : bO.has(e);
}
function _y(e) {
  return typeof e == "string" && e.startsWith("data-");
}
function tt(e) {
  if (typeof e != "object" || e === null)
    return {};
  var t = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && (Sy(r) || _y(r)) && (t[r] = e[r]);
  return t;
}
function Gr(e) {
  if (e == null)
    return null;
  if (/* @__PURE__ */ vt(e) && typeof e.props == "object" && e.props !== null) {
    var t = e.props;
    return tt(t);
  }
  return typeof e == "object" && !Array.isArray(e) ? tt(e) : null;
}
function Ze(e) {
  var t = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && (Sy(r) || _y(r) || ec(r)) && (t[r] = e[r]);
  return t;
}
function xO(e) {
  return e == null ? null : /* @__PURE__ */ vt(e) ? Ze(e.props) : typeof e == "object" && !Array.isArray(e) ? Ze(e) : null;
}
var wO = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function Qu() {
  return Qu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Qu.apply(null, arguments);
}
function OO(e, t) {
  if (e == null) return {};
  var r, n, i = PO(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function PO(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var tc = /* @__PURE__ */ Ce((e, t) => {
  var {
    children: r,
    width: n,
    height: i,
    viewBox: a,
    className: o,
    style: l,
    title: u,
    desc: s
  } = e, c = OO(e, wO), f = a || {
    width: n,
    height: i,
    x: 0,
    y: 0
  }, d = te("recharts-surface", o);
  return /* @__PURE__ */ g.createElement("svg", Qu({}, Ze(c), {
    className: d,
    width: n,
    height: i,
    style: l,
    viewBox: "".concat(f.x, " ").concat(f.y, " ").concat(f.width, " ").concat(f.height),
    ref: t
  }), /* @__PURE__ */ g.createElement("title", null, u), /* @__PURE__ */ g.createElement("desc", null, s), r);
}), EO = ["children", "className"];
function es() {
  return es = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, es.apply(null, arguments);
}
function AO(e, t) {
  if (e == null) return {};
  var r, n, i = SO(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function SO(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var Oe = /* @__PURE__ */ g.forwardRef((e, t) => {
  var {
    children: r,
    className: n
  } = e, i = AO(e, EO), a = te("recharts-layer", n);
  return /* @__PURE__ */ g.createElement("g", es({
    className: a
  }, Ze(i), {
    ref: t
  }), r);
}), jy = /* @__PURE__ */ lt(null), _O = () => yt(jy);
function he(e) {
  return function() {
    return e;
  };
}
const Iy = Math.cos, Aa = Math.sin, Ct = Math.sqrt, Sa = Math.PI, Eo = 2 * Sa, ts = Math.PI, rs = 2 * ts, Mr = 1e-6, jO = rs - Mr;
function ky(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function IO(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return ky;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let i = 1, a = n.length; i < a; ++i)
      this._ += Math.round(arguments[i] * r) / r + n[i];
  };
}
class kO {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? ky : IO(t);
  }
  moveTo(t, r) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, r) {
    this._append`L${this._x1 = +t},${this._y1 = +r}`;
  }
  quadraticCurveTo(t, r, n, i) {
    this._append`Q${+t},${+r},${this._x1 = +n},${this._y1 = +i}`;
  }
  bezierCurveTo(t, r, n, i, a, o) {
    this._append`C${+t},${+r},${+n},${+i},${this._x1 = +a},${this._y1 = +o}`;
  }
  arcTo(t, r, n, i, a) {
    if (t = +t, r = +r, n = +n, i = +i, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
    let o = this._x1, l = this._y1, u = n - t, s = i - r, c = o - t, f = l - r, d = c * c + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (d > Mr) if (!(Math.abs(f * u - s * c) > Mr) || !a)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let v = n - o, p = i - l, m = u * u + s * s, h = v * v + p * p, y = Math.sqrt(m), b = Math.sqrt(d), x = a * Math.tan((ts - Math.acos((m + d - h) / (2 * y * b))) / 2), w = x / b, P = x / y;
      Math.abs(w - 1) > Mr && this._append`L${t + w * c},${r + w * f}`, this._append`A${a},${a},0,0,${+(f * v > c * p)},${this._x1 = t + P * u},${this._y1 = r + P * s}`;
    }
  }
  arc(t, r, n, i, a, o) {
    if (t = +t, r = +r, n = +n, o = !!o, n < 0) throw new Error(`negative radius: ${n}`);
    let l = n * Math.cos(i), u = n * Math.sin(i), s = t + l, c = r + u, f = 1 ^ o, d = o ? i - a : a - i;
    this._x1 === null ? this._append`M${s},${c}` : (Math.abs(this._x1 - s) > Mr || Math.abs(this._y1 - c) > Mr) && this._append`L${s},${c}`, n && (d < 0 && (d = d % rs + rs), d > jO ? this._append`A${n},${n},0,1,${f},${t - l},${r - u}A${n},${n},0,1,${f},${this._x1 = s},${this._y1 = c}` : d > Mr && this._append`A${n},${n},0,${+(d >= ts)},${f},${this._x1 = t + n * Math.cos(a)},${this._y1 = r + n * Math.sin(a)}`);
  }
  rect(t, r, n, i) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+i}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function rc(e) {
  let t = 3;
  return e.digits = function(r) {
    if (!arguments.length) return t;
    if (r == null)
      t = null;
    else {
      const n = Math.floor(r);
      if (!(n >= 0)) throw new RangeError(`invalid digits: ${r}`);
      t = n;
    }
    return e;
  }, () => new kO(t);
}
function nc(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Cy(e) {
  this._context = e;
}
Cy.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      // falls through
      default:
        this._context.lineTo(e, t);
        break;
    }
  }
};
function Ao(e) {
  return new Cy(e);
}
function Ty(e) {
  return e[0];
}
function Ny(e) {
  return e[1];
}
function Dy(e, t) {
  var r = he(!0), n = null, i = Ao, a = null, o = rc(l);
  e = typeof e == "function" ? e : e === void 0 ? Ty : he(e), t = typeof t == "function" ? t : t === void 0 ? Ny : he(t);
  function l(u) {
    var s, c = (u = nc(u)).length, f, d = !1, v;
    for (n == null && (a = i(v = o())), s = 0; s <= c; ++s)
      !(s < c && r(f = u[s], s, u)) === d && ((d = !d) ? a.lineStart() : a.lineEnd()), d && a.point(+e(f, s, u), +t(f, s, u));
    if (v) return a = null, v + "" || null;
  }
  return l.x = function(u) {
    return arguments.length ? (e = typeof u == "function" ? u : he(+u), l) : e;
  }, l.y = function(u) {
    return arguments.length ? (t = typeof u == "function" ? u : he(+u), l) : t;
  }, l.defined = function(u) {
    return arguments.length ? (r = typeof u == "function" ? u : he(!!u), l) : r;
  }, l.curve = function(u) {
    return arguments.length ? (i = u, n != null && (a = i(n)), l) : i;
  }, l.context = function(u) {
    return arguments.length ? (u == null ? n = a = null : a = i(n = u), l) : n;
  }, l;
}
function Zi(e, t, r) {
  var n = null, i = he(!0), a = null, o = Ao, l = null, u = rc(s);
  e = typeof e == "function" ? e : e === void 0 ? Ty : he(+e), t = typeof t == "function" ? t : he(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? Ny : he(+r);
  function s(f) {
    var d, v, p, m = (f = nc(f)).length, h, y = !1, b, x = new Array(m), w = new Array(m);
    for (a == null && (l = o(b = u())), d = 0; d <= m; ++d) {
      if (!(d < m && i(h = f[d], d, f)) === y)
        if (y = !y)
          v = d, l.areaStart(), l.lineStart();
        else {
          for (l.lineEnd(), l.lineStart(), p = d - 1; p >= v; --p)
            l.point(x[p], w[p]);
          l.lineEnd(), l.areaEnd();
        }
      y && (x[d] = +e(h, d, f), w[d] = +t(h, d, f), l.point(n ? +n(h, d, f) : x[d], r ? +r(h, d, f) : w[d]));
    }
    if (b) return l = null, b + "" || null;
  }
  function c() {
    return Dy().defined(i).curve(o).context(a);
  }
  return s.x = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : he(+f), n = null, s) : e;
  }, s.x0 = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : he(+f), s) : e;
  }, s.x1 = function(f) {
    return arguments.length ? (n = f == null ? null : typeof f == "function" ? f : he(+f), s) : n;
  }, s.y = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : he(+f), r = null, s) : t;
  }, s.y0 = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : he(+f), s) : t;
  }, s.y1 = function(f) {
    return arguments.length ? (r = f == null ? null : typeof f == "function" ? f : he(+f), s) : r;
  }, s.lineX0 = s.lineY0 = function() {
    return c().x(e).y(t);
  }, s.lineY1 = function() {
    return c().x(e).y(r);
  }, s.lineX1 = function() {
    return c().x(n).y(t);
  }, s.defined = function(f) {
    return arguments.length ? (i = typeof f == "function" ? f : he(!!f), s) : i;
  }, s.curve = function(f) {
    return arguments.length ? (o = f, a != null && (l = o(a)), s) : o;
  }, s.context = function(f) {
    return arguments.length ? (f == null ? a = l = null : l = o(a = f), s) : a;
  }, s;
}
class My {
  constructor(t, r) {
    this._context = t, this._x = r;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }
  point(t, r) {
    switch (t = +t, r = +r, this._point) {
      case 0: {
        this._point = 1, this._line ? this._context.lineTo(t, r) : this._context.moveTo(t, r);
        break;
      }
      case 1:
        this._point = 2;
      // falls through
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + t) / 2, this._y0, this._x0, r, t, r) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + r) / 2, t, this._y0, t, r);
        break;
      }
    }
    this._x0 = t, this._y0 = r;
  }
}
function CO(e) {
  return new My(e, !0);
}
function TO(e) {
  return new My(e, !1);
}
const ic = {
  draw(e, t) {
    const r = Ct(t / Sa);
    e.moveTo(r, 0), e.arc(0, 0, r, 0, Eo);
  }
}, NO = {
  draw(e, t) {
    const r = Ct(t / 5) / 2;
    e.moveTo(-3 * r, -r), e.lineTo(-r, -r), e.lineTo(-r, -3 * r), e.lineTo(r, -3 * r), e.lineTo(r, -r), e.lineTo(3 * r, -r), e.lineTo(3 * r, r), e.lineTo(r, r), e.lineTo(r, 3 * r), e.lineTo(-r, 3 * r), e.lineTo(-r, r), e.lineTo(-3 * r, r), e.closePath();
  }
}, $y = Ct(1 / 3), DO = $y * 2, MO = {
  draw(e, t) {
    const r = Ct(t / DO), n = r * $y;
    e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath();
  }
}, $O = {
  draw(e, t) {
    const r = Ct(t), n = -r / 2;
    e.rect(n, n, r, r);
  }
}, RO = 0.8908130915292852, Ry = Aa(Sa / 10) / Aa(7 * Sa / 10), LO = Aa(Eo / 10) * Ry, zO = -Iy(Eo / 10) * Ry, BO = {
  draw(e, t) {
    const r = Ct(t * RO), n = LO * r, i = zO * r;
    e.moveTo(0, -r), e.lineTo(n, i);
    for (let a = 1; a < 5; ++a) {
      const o = Eo * a / 5, l = Iy(o), u = Aa(o);
      e.lineTo(u * r, -l * r), e.lineTo(l * n - u * i, u * n + l * i);
    }
    e.closePath();
  }
}, Ol = Ct(3), FO = {
  draw(e, t) {
    const r = -Ct(t / (Ol * 3));
    e.moveTo(0, r * 2), e.lineTo(-Ol * r, -r), e.lineTo(Ol * r, -r), e.closePath();
  }
}, bt = -0.5, xt = Ct(3) / 2, ns = 1 / Ct(12), WO = (ns / 2 + 1) * 3, KO = {
  draw(e, t) {
    const r = Ct(t / WO), n = r / 2, i = r * ns, a = n, o = r * ns + r, l = -a, u = o;
    e.moveTo(n, i), e.lineTo(a, o), e.lineTo(l, u), e.lineTo(bt * n - xt * i, xt * n + bt * i), e.lineTo(bt * a - xt * o, xt * a + bt * o), e.lineTo(bt * l - xt * u, xt * l + bt * u), e.lineTo(bt * n + xt * i, bt * i - xt * n), e.lineTo(bt * a + xt * o, bt * o - xt * a), e.lineTo(bt * l + xt * u, bt * u - xt * l), e.closePath();
  }
};
function qO(e, t) {
  let r = null, n = rc(i);
  e = typeof e == "function" ? e : he(e || ic), t = typeof t == "function" ? t : he(t === void 0 ? 64 : +t);
  function i() {
    let a;
    if (r || (r = a = n()), e.apply(this, arguments).draw(r, +t.apply(this, arguments)), a) return r = null, a + "" || null;
  }
  return i.type = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : he(a), i) : e;
  }, i.size = function(a) {
    return arguments.length ? (t = typeof a == "function" ? a : he(+a), i) : t;
  }, i.context = function(a) {
    return arguments.length ? (r = a ?? null, i) : r;
  }, i;
}
function _a() {
}
function ja(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6
  );
}
function Ly(e) {
  this._context = e;
}
Ly.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        ja(this, this._x1, this._y1);
      // falls through
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      // falls through
      default:
        ja(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function UO(e) {
  return new Ly(e);
}
function zy(e) {
  this._context = e;
}
zy.prototype = {
  areaStart: _a,
  areaEnd: _a,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2), this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._x2 = e, this._y2 = t;
        break;
      case 1:
        this._point = 2, this._x3 = e, this._y3 = t;
        break;
      case 2:
        this._point = 3, this._x4 = e, this._y4 = t, this._context.moveTo((this._x0 + 4 * this._x1 + e) / 6, (this._y0 + 4 * this._y1 + t) / 6);
        break;
      default:
        ja(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function VO(e) {
  return new zy(e);
}
function By(e) {
  this._context = e;
}
By.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var r = (this._x0 + 4 * this._x1 + e) / 6, n = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n);
        break;
      case 3:
        this._point = 4;
      // falls through
      default:
        ja(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function HO(e) {
  return new By(e);
}
function Fy(e) {
  this._context = e;
}
Fy.prototype = {
  areaStart: _a,
  areaEnd: _a,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._point && this._context.closePath();
  },
  point: function(e, t) {
    e = +e, t = +t, this._point ? this._context.lineTo(e, t) : (this._point = 1, this._context.moveTo(e, t));
  }
};
function GO(e) {
  return new Fy(e);
}
function dd(e) {
  return e < 0 ? -1 : 1;
}
function vd(e, t, r) {
  var n = e._x1 - e._x0, i = t - e._x1, a = (e._y1 - e._y0) / (n || i < 0 && -0), o = (r - e._y1) / (i || n < 0 && -0), l = (a * i + o * n) / (n + i);
  return (dd(a) + dd(o)) * Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(l)) || 0;
}
function pd(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function Pl(e, t, r) {
  var n = e._x0, i = e._y0, a = e._x1, o = e._y1, l = (a - n) / 3;
  e._context.bezierCurveTo(n + l, i + l * t, a - l, o - l * r, a, o);
}
function Ia(e) {
  this._context = e;
}
Ia.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        Pl(this, this._t0, pd(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    var r = NaN;
    if (e = +e, t = +t, !(e === this._x1 && t === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, Pl(this, pd(this, r = vd(this, e, t)), r);
          break;
        default:
          Pl(this, this._t0, r = vd(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function Wy(e) {
  this._context = new Ky(e);
}
(Wy.prototype = Object.create(Ia.prototype)).point = function(e, t) {
  Ia.prototype.point.call(this, t, e);
};
function Ky(e) {
  this._context = e;
}
Ky.prototype = {
  moveTo: function(e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function(e, t, r, n, i, a) {
    this._context.bezierCurveTo(t, e, n, r, a, i);
  }
};
function YO(e) {
  return new Ia(e);
}
function XO(e) {
  return new Wy(e);
}
function qy(e) {
  this._context = e;
}
qy.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [], this._y = [];
  },
  lineEnd: function() {
    var e = this._x, t = this._y, r = e.length;
    if (r)
      if (this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]), r === 2)
        this._context.lineTo(e[1], t[1]);
      else
        for (var n = hd(e), i = hd(t), a = 0, o = 1; o < r; ++a, ++o)
          this._context.bezierCurveTo(n[0][a], i[0][a], n[1][a], i[1][a], e[o], t[o]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function hd(e) {
  var t, r = e.length - 1, n, i = new Array(r), a = new Array(r), o = new Array(r);
  for (i[0] = 0, a[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t) i[t] = 1, a[t] = 4, o[t] = 4 * e[t] + 2 * e[t + 1];
  for (i[r - 1] = 2, a[r - 1] = 7, o[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t) n = i[t] / a[t - 1], a[t] -= n, o[t] -= n * o[t - 1];
  for (i[r - 1] = o[r - 1] / a[r - 1], t = r - 2; t >= 0; --t) i[t] = (o[t] - i[t + 1]) / a[t];
  for (a[r - 1] = (e[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t) a[t] = 2 * e[t + 1] - i[t + 1];
  return [i, a];
}
function ZO(e) {
  return new qy(e);
}
function So(e, t) {
  this._context = e, this._t = t;
}
So.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN, this._point = 0;
  },
  lineEnd: function() {
    0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      // falls through
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, t), this._context.lineTo(e, t);
        else {
          var r = this._x * (1 - this._t) + e * this._t;
          this._context.lineTo(r, this._y), this._context.lineTo(r, t);
        }
        break;
      }
    }
    this._x = e, this._y = t;
  }
};
function JO(e) {
  return new So(e, 0.5);
}
function QO(e) {
  return new So(e, 0);
}
function eP(e) {
  return new So(e, 1);
}
function Yr(e, t) {
  if ((o = e.length) > 1)
    for (var r = 1, n, i, a = e[t[0]], o, l = a.length; r < o; ++r)
      for (i = a, a = e[t[r]], n = 0; n < l; ++n)
        a[n][1] += a[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1];
}
function is(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function tP(e, t) {
  return e[t];
}
function rP(e) {
  const t = [];
  return t.key = e, t;
}
function nP() {
  var e = he([]), t = is, r = Yr, n = tP;
  function i(a) {
    var o = Array.from(e.apply(this, arguments), rP), l, u = o.length, s = -1, c;
    for (const f of a)
      for (l = 0, ++s; l < u; ++l)
        (o[l][s] = [0, +n(f, o[l].key, s, a)]).data = f;
    for (l = 0, c = nc(t(o)); l < u; ++l)
      o[c[l]].index = l;
    return r(o, c), o;
  }
  return i.keys = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : he(Array.from(a)), i) : e;
  }, i.value = function(a) {
    return arguments.length ? (n = typeof a == "function" ? a : he(+a), i) : n;
  }, i.order = function(a) {
    return arguments.length ? (t = a == null ? is : typeof a == "function" ? a : he(Array.from(a)), i) : t;
  }, i.offset = function(a) {
    return arguments.length ? (r = a ?? Yr, i) : r;
  }, i;
}
function iP(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, i = 0, a = e[0].length, o; i < a; ++i) {
      for (o = r = 0; r < n; ++r) o += e[r][i][1] || 0;
      if (o) for (r = 0; r < n; ++r) e[r][i][1] /= o;
    }
    Yr(e, t);
  }
}
function aP(e, t) {
  if ((i = e.length) > 0) {
    for (var r = 0, n = e[t[0]], i, a = n.length; r < a; ++r) {
      for (var o = 0, l = 0; o < i; ++o) l += e[o][r][1] || 0;
      n[r][1] += n[r][0] = -l / 2;
    }
    Yr(e, t);
  }
}
function oP(e, t) {
  if (!(!((o = e.length) > 0) || !((a = (i = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, i, a, o; n < a; ++n) {
      for (var l = 0, u = 0, s = 0; l < o; ++l) {
        for (var c = e[t[l]], f = c[n][1] || 0, d = c[n - 1][1] || 0, v = (f - d) / 2, p = 0; p < l; ++p) {
          var m = e[t[p]], h = m[n][1] || 0, y = m[n - 1][1] || 0;
          v += h - y;
        }
        u += f, s += v * f;
      }
      i[n - 1][1] += i[n - 1][0] = r, u && (r -= s / u);
    }
    i[n - 1][1] += i[n - 1][0] = r, Yr(e, t);
  }
}
var El = {}, Al = {}, md;
function lP() {
  return md || (md = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r === "__proto__";
    }
    e.isUnsafeProperty = t;
  })(Al)), Al;
}
var Sl = {}, yd;
function Uy() {
  return yd || (yd = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      switch (typeof r) {
        case "number":
        case "symbol":
          return !1;
        case "string":
          return r.includes(".") || r.includes("[") || r.includes("]");
      }
    }
    e.isDeepKey = t;
  })(Sl)), Sl;
}
var _l = {}, gd;
function ac() {
  return gd || (gd = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return typeof r == "string" || typeof r == "symbol" ? r : Object.is(r?.valueOf?.(), -0) ? "-0" : String(r);
    }
    e.toKey = t;
  })(_l)), _l;
}
var jl = {}, Il = {}, bd;
function uP() {
  return bd || (bd = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      if (r == null)
        return "";
      if (typeof r == "string")
        return r;
      if (Array.isArray(r))
        return r.map(t).join(",");
      const n = String(r);
      return n === "0" && Object.is(Number(r), -0) ? "-0" : n;
    }
    e.toString = t;
  })(Il)), Il;
}
var xd;
function oc() {
  return xd || (xd = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ uP(), r = /* @__PURE__ */ ac();
    function n(i) {
      if (Array.isArray(i))
        return i.map(r.toKey);
      if (typeof i == "symbol")
        return [i];
      i = t.toString(i);
      const a = [], o = i.length;
      if (o === 0)
        return a;
      let l = 0, u = "", s = "", c = !1;
      for (i.charCodeAt(0) === 46 && (a.push(""), l++); l < o; ) {
        const f = i[l];
        s ? f === "\\" && l + 1 < o ? (l++, u += i[l]) : f === s ? s = "" : u += f : c ? f === '"' || f === "'" ? s = f : f === "]" ? (c = !1, a.push(u), u = "") : u += f : f === "[" ? (c = !0, u && (a.push(u), u = "")) : f === "." ? u && (a.push(u), u = "") : u += f, l++;
      }
      return u && a.push(u), a;
    }
    e.toPath = n;
  })(jl)), jl;
}
var wd;
function lc() {
  return wd || (wd = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ lP(), r = /* @__PURE__ */ Uy(), n = /* @__PURE__ */ ac(), i = /* @__PURE__ */ oc();
    function a(l, u, s) {
      if (l == null)
        return s;
      switch (typeof u) {
        case "string": {
          if (t.isUnsafeProperty(u))
            return s;
          const c = l[u];
          return c === void 0 ? r.isDeepKey(u) ? a(l, i.toPath(u), s) : s : c;
        }
        case "number":
        case "symbol": {
          typeof u == "number" && (u = n.toKey(u));
          const c = l[u];
          return c === void 0 ? s : c;
        }
        default: {
          if (Array.isArray(u))
            return o(l, u, s);
          if (Object.is(u?.valueOf(), -0) ? u = "-0" : u = String(u), t.isUnsafeProperty(u))
            return s;
          const c = l[u];
          return c === void 0 ? s : c;
        }
      }
    }
    function o(l, u, s) {
      if (u.length === 0)
        return s;
      let c = l;
      for (let f = 0; f < u.length; f++) {
        if (c == null || t.isUnsafeProperty(u[f]))
          return s;
        c = c[u[f]];
      }
      return c === void 0 ? s : c;
    }
    e.get = a;
  })(El)), El;
}
var kl, Od;
function sP() {
  return Od || (Od = 1, kl = lc().get), kl;
}
var cP = /* @__PURE__ */ sP();
const Xr = /* @__PURE__ */ an(cP);
var fP = 4;
function gr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : fP, r = 10 ** t, n = Math.round(e * r) / r;
  return Object.is(n, -0) ? 0 : n;
}
function Ae(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return e.reduce((i, a, o) => {
    var l = r[o - 1];
    return typeof l == "string" ? i + l + a : l !== void 0 ? i + gr(l) + a : i + a;
  }, "");
}
var Be = (e) => e === 0 ? 0 : e > 0 ? 1 : -1, It = (e) => typeof e == "number" && e != +e, Zr = (e) => typeof e == "string" && e.indexOf("%") === e.length - 1, L = (e) => (typeof e == "number" || e instanceof Number) && !It(e), Ft = (e) => L(e) || typeof e == "string", dP = 0, oi = (e) => {
  var t = ++dP;
  return "".concat(e || "").concat(t);
}, Xe = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (!L(t) && typeof t != "string")
    return n;
  var a;
  if (Zr(t)) {
    if (r == null)
      return n;
    var o = t.indexOf("%");
    a = r * parseFloat(t.slice(0, o)) / 100;
  } else
    a = +t;
  return It(a) && (a = n), i && r != null && a > r && (a = r), a;
}, Vy = (e) => {
  if (!Array.isArray(e))
    return !1;
  for (var t = e.length, r = {}, n = 0; n < t; n++)
    if (!r[String(e[n])])
      r[String(e[n])] = !0;
    else
      return !0;
  return !1;
};
function oe(e, t, r) {
  return L(e) && L(t) ? gr(e + r * (t - e)) : t;
}
function Hy(e, t, r) {
  if (!(!e || !e.length))
    return e.find((n) => n && (typeof t == "function" ? t(n) : Xr(n, t)) === r);
}
var ge = (e) => e === null || typeof e > "u", Ei = (e) => ge(e) ? e : "".concat(e.charAt(0).toUpperCase()).concat(e.slice(1));
function at(e) {
  return e != null;
}
function ar() {
}
var vP = ["type", "size", "sizeType"];
function as() {
  return as = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, as.apply(null, arguments);
}
function Pd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ed(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pd(Object(r), !0).forEach(function(n) {
      pP(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Pd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function pP(e, t, r) {
  return (t = hP(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function hP(e) {
  var t = mP(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function mP(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function yP(e, t) {
  if (e == null) return {};
  var r, n, i = gP(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function gP(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var Gy = {
  symbolCircle: ic,
  symbolCross: NO,
  symbolDiamond: MO,
  symbolSquare: $O,
  symbolStar: BO,
  symbolTriangle: FO,
  symbolWye: KO
}, bP = Math.PI / 180, xP = (e) => {
  var t = "symbol".concat(Ei(e));
  return Gy[t] || ic;
}, wP = (e, t, r) => {
  if (t === "area")
    return e;
  switch (r) {
    case "cross":
      return 5 * e * e / 9;
    case "diamond":
      return 0.5 * e * e / Math.sqrt(3);
    case "square":
      return e * e;
    case "star": {
      var n = 18 * bP;
      return 1.25 * e * e * (Math.tan(n) - Math.tan(n * 2) * Math.tan(n) ** 2);
    }
    case "triangle":
      return Math.sqrt(3) * e * e / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * e * e / 8;
    default:
      return Math.PI * e * e / 4;
  }
}, OP = (e, t) => {
  Gy["symbol".concat(Ei(e))] = t;
}, uc = (e) => {
  var {
    type: t = "circle",
    size: r = 64,
    sizeType: n = "area"
  } = e, i = yP(e, vP), a = Ed(Ed({}, i), {}, {
    type: t,
    size: r,
    sizeType: n
  }), o = "circle";
  typeof t == "string" && (o = t);
  var l = () => {
    var d = xP(o), v = qO().type(d).size(wP(r, n, o)), p = v();
    if (p !== null)
      return p;
  }, {
    className: u,
    cx: s,
    cy: c
  } = a, f = Ze(a);
  return L(s) && L(c) && L(r) ? /* @__PURE__ */ g.createElement("path", as({}, f, {
    className: te("recharts-symbols", u),
    transform: "translate(".concat(s, ", ").concat(c, ")"),
    d: l()
  })) : null;
};
uc.registerSymbol = OP;
var Yy = (e) => "radius" in e && "startAngle" in e && "endAngle" in e, sc = (e, t) => {
  if (!e || typeof e == "function" || typeof e == "boolean")
    return null;
  var r = e;
  if (/* @__PURE__ */ vt(e) && (r = e.props), typeof r != "object" && typeof r != "function")
    return null;
  var n = {};
  return Object.keys(r).forEach((i) => {
    ec(i) && typeof r[i] == "function" && (n[i] = ((a) => r[i](r, a)));
  }), n;
}, PP = (e, t, r) => (n) => (e(t, r, n), null), Ai = (e, t, r) => {
  if (e === null || typeof e != "object" && typeof e != "function")
    return null;
  var n = null;
  return Object.keys(e).forEach((i) => {
    var a = e[i];
    ec(i) && typeof a == "function" && (n || (n = {}), n[i] = PP(a, t, r));
  }), n;
};
function Ad(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function EP(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ad(Object(r), !0).forEach(function(n) {
      AP(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ad(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function AP(e, t, r) {
  return (t = SP(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function SP(e) {
  var t = _P(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function _P(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function je(e, t) {
  var r = EP({}, e), n = t, i = Object.keys(t), a = i.reduce((o, l) => (o[l] === void 0 && n[l] !== void 0 && (o[l] = n[l]), o), r);
  return a;
}
function ka() {
  return ka = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ka.apply(null, arguments);
}
function Sd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Xy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Sd(Object(r), !0).forEach(function(n) {
      jP(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function jP(e, t, r) {
  return (t = IP(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function IP(e) {
  var t = kP(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function kP(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ot = 32, CP = {
  align: "center",
  iconSize: 14,
  inactiveColor: "#ccc",
  layout: "horizontal",
  verticalAlign: "middle",
  labelStyle: {}
};
function TP(e) {
  if (typeof e == "object" && e !== null && "strokeDasharray" in e)
    return String(e.strokeDasharray);
}
function NP(e) {
  var {
    data: t,
    iconType: r,
    inactiveColor: n
  } = e, i = Ot / 2, a = Ot / 6, o = Ot / 3, l = t.inactive ? n : t.color, u = r ?? t.type;
  if (u === "none")
    return null;
  if (u === "plainline")
    return /* @__PURE__ */ g.createElement("line", {
      strokeWidth: 4,
      fill: "none",
      stroke: l,
      strokeDasharray: TP(t.payload),
      x1: 0,
      y1: i,
      x2: Ot,
      y2: i,
      className: "recharts-legend-icon"
    });
  if (u === "line")
    return /* @__PURE__ */ g.createElement("path", {
      strokeWidth: 4,
      fill: "none",
      stroke: l,
      d: "M0,".concat(i, "h").concat(o, `
            A`).concat(a, ",").concat(a, ",0,1,1,").concat(2 * o, ",").concat(i, `
            H`).concat(Ot, "M").concat(2 * o, ",").concat(i, `
            A`).concat(a, ",").concat(a, ",0,1,1,").concat(o, ",").concat(i),
      className: "recharts-legend-icon"
    });
  if (u === "rect")
    return /* @__PURE__ */ g.createElement("path", {
      stroke: "none",
      fill: l,
      d: "M0,".concat(Ot / 8, "h").concat(Ot, "v").concat(Ot * 3 / 4, "h").concat(-Ot, "z"),
      className: "recharts-legend-icon"
    });
  if (/* @__PURE__ */ g.isValidElement(t.legendIcon)) {
    var s = Xy({}, t);
    return delete s.legendIcon, /* @__PURE__ */ g.cloneElement(t.legendIcon, s);
  }
  return /* @__PURE__ */ g.createElement(uc, {
    fill: l,
    cx: i,
    cy: i,
    size: Ot,
    sizeType: "diameter",
    type: u
  });
}
function DP(e) {
  var {
    payload: t,
    iconSize: r,
    layout: n,
    formatter: i,
    inactiveColor: a,
    iconType: o,
    labelStyle: l
  } = e, u = {
    x: 0,
    y: 0,
    width: Ot,
    height: Ot
  }, s = {
    display: n === "horizontal" ? "inline-block" : "block",
    marginRight: 10
  }, c = {
    display: "inline-block",
    verticalAlign: "middle",
    marginRight: 4
  };
  return t.map((f, d) => {
    var v = f.formatter || i, p = te({
      "recharts-legend-item": !0,
      ["legend-item-".concat(d)]: !0,
      inactive: f.inactive
    });
    if (f.type === "none")
      return null;
    var m = typeof l == "object" ? Xy({}, l) : {};
    m.color = f.inactive ? a : m.color || f.color;
    var h = v ? v(f.value, f, d) : f.value;
    return /* @__PURE__ */ g.createElement("li", ka({
      className: p,
      style: s,
      key: "legend-item-".concat(d)
    }, Ai(e, f, d)), /* @__PURE__ */ g.createElement(tc, {
      width: r,
      height: r,
      viewBox: u,
      style: c,
      "aria-label": "".concat(h, " legend icon")
    }, /* @__PURE__ */ g.createElement(NP, {
      data: f,
      iconType: o,
      inactiveColor: a
    })), /* @__PURE__ */ g.createElement("span", {
      className: "recharts-legend-item-text",
      style: m
    }, h));
  });
}
var MP = (e) => {
  var t = je(e, CP), {
    payload: r,
    layout: n,
    align: i
  } = t;
  if (!r || !r.length)
    return null;
  var a = {
    padding: 0,
    margin: 0,
    textAlign: n === "horizontal" ? i : "left"
  };
  return /* @__PURE__ */ g.createElement("ul", {
    className: "recharts-default-legend",
    style: a
  }, /* @__PURE__ */ g.createElement(DP, ka({}, t, {
    payload: r
  })));
}, Cl = {}, Tl = {}, _d;
function $P() {
  return _d || (_d = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r, n) {
      const i = /* @__PURE__ */ new Map();
      for (let a = 0; a < r.length; a++) {
        const o = r[a], l = n(o, a, r);
        i.has(l) || i.set(l, o);
      }
      return Array.from(i.values());
    }
    e.uniqBy = t;
  })(Tl)), Tl;
}
var Nl = {}, jd;
function RP() {
  return jd || (jd = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r, n) {
      return function(...i) {
        return r.apply(this, i.slice(0, n));
      };
    }
    e.ary = t;
  })(Nl)), Nl;
}
var Dl = {}, Id;
function Zy() {
  return Id || (Id = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r;
    }
    e.identity = t;
  })(Dl)), Dl;
}
var Ml = {}, $l = {}, Rl = {}, kd;
function LP() {
  return kd || (kd = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return Number.isSafeInteger(r) && r >= 0;
    }
    e.isLength = t;
  })(Rl)), Rl;
}
var Cd;
function Jy() {
  return Cd || (Cd = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ LP();
    function r(n) {
      return n != null && typeof n != "function" && t.isLength(n.length);
    }
    e.isArrayLike = r;
  })($l)), $l;
}
var Ll = {}, Td;
function zP() {
  return Td || (Td = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return typeof r == "object" && r !== null;
    }
    e.isObjectLike = t;
  })(Ll)), Ll;
}
var Nd;
function BP() {
  return Nd || (Nd = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Jy(), r = /* @__PURE__ */ zP();
    function n(i) {
      return r.isObjectLike(i) && t.isArrayLike(i);
    }
    e.isArrayLikeObject = n;
  })(Ml)), Ml;
}
var zl = {}, Bl = {}, Dd;
function FP() {
  return Dd || (Dd = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ lc();
    function r(n) {
      return function(i) {
        return t.get(i, n);
      };
    }
    e.property = r;
  })(Bl)), Bl;
}
var Fl = {}, Wl = {}, Kl = {}, ql = {}, Md;
function Qy() {
  return Md || (Md = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r !== null && (typeof r == "object" || typeof r == "function");
    }
    e.isObject = t;
  })(ql)), ql;
}
var Ul = {}, $d;
function eg() {
  return $d || ($d = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r == null || typeof r != "object" && typeof r != "function";
    }
    e.isPrimitive = t;
  })(Ul)), Ul;
}
var Vl = {}, Rd;
function tg() {
  return Rd || (Rd = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r, n) {
      return r === n || Number.isNaN(r) && Number.isNaN(n);
    }
    e.isEqualsSameValueZero = t;
  })(Vl)), Vl;
}
var Ld;
function WP() {
  return Ld || (Ld = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Qy(), r = /* @__PURE__ */ eg(), n = /* @__PURE__ */ tg();
    function i(c, f, d) {
      return typeof d != "function" ? i(c, f, () => {
      }) : a(c, f, function v(p, m, h, y, b, x) {
        const w = d(p, m, h, y, b, x);
        return w !== void 0 ? !!w : a(p, m, v, x);
      }, /* @__PURE__ */ new Map());
    }
    function a(c, f, d, v) {
      if (f === c)
        return !0;
      switch (typeof f) {
        case "object":
          return o(c, f, d, v);
        case "function":
          return Object.keys(f).length > 0 ? a(c, { ...f }, d, v) : n.isEqualsSameValueZero(c, f);
        default:
          return t.isObject(c) ? typeof f == "string" ? f === "" : !0 : n.isEqualsSameValueZero(c, f);
      }
    }
    function o(c, f, d, v) {
      if (f == null)
        return !0;
      if (Array.isArray(f))
        return u(c, f, d, v);
      if (f instanceof Map)
        return l(c, f, d, v);
      if (f instanceof Set)
        return s(c, f, d, v);
      const p = Object.keys(f);
      if (c == null || r.isPrimitive(c))
        return p.length === 0;
      if (p.length === 0)
        return !0;
      if (v?.has(f))
        return v.get(f) === c;
      v?.set(f, c);
      try {
        for (let m = 0; m < p.length; m++) {
          const h = p[m];
          if (!r.isPrimitive(c) && !(h in c) || f[h] === void 0 && c[h] !== void 0 || f[h] === null && c[h] !== null || !d(c[h], f[h], h, c, f, v))
            return !1;
        }
        return !0;
      } finally {
        v?.delete(f);
      }
    }
    function l(c, f, d, v) {
      if (f.size === 0)
        return !0;
      if (!(c instanceof Map))
        return !1;
      for (const [p, m] of f.entries()) {
        const h = c.get(p);
        if (d(h, m, p, c, f, v) === !1)
          return !1;
      }
      return !0;
    }
    function u(c, f, d, v) {
      if (f.length === 0)
        return !0;
      if (!Array.isArray(c))
        return !1;
      const p = /* @__PURE__ */ new Set();
      for (let m = 0; m < f.length; m++) {
        const h = f[m];
        let y = !1;
        for (let b = 0; b < c.length; b++) {
          if (p.has(b))
            continue;
          const x = c[b];
          let w = !1;
          if (d(x, h, m, c, f, v) && (w = !0), w) {
            p.add(b), y = !0;
            break;
          }
        }
        if (!y)
          return !1;
      }
      return !0;
    }
    function s(c, f, d, v) {
      return f.size === 0 ? !0 : c instanceof Set ? u([...c], [...f], d, v) : !1;
    }
    e.isMatchWith = i, e.isSetMatch = s;
  })(Kl)), Kl;
}
var zd;
function rg() {
  return zd || (zd = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ WP();
    function r(n, i) {
      return t.isMatchWith(n, i, () => {
      });
    }
    e.isMatch = r;
  })(Wl)), Wl;
}
var Hl = {}, Gl = {}, Yl = {}, Bd;
function KP() {
  return Bd || (Bd = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return Object.getOwnPropertySymbols(r).filter((n) => Object.prototype.propertyIsEnumerable.call(r, n));
    }
    e.getSymbols = t;
  })(Yl)), Yl;
}
var Xl = {}, Fd;
function cc() {
  return Fd || (Fd = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r == null ? r === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(r);
    }
    e.getTag = t;
  })(Xl)), Xl;
}
var Zl = {}, Wd;
function ng() {
  return Wd || (Wd = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = "[object RegExp]", r = "[object String]", n = "[object Number]", i = "[object Boolean]", a = "[object Arguments]", o = "[object Symbol]", l = "[object Date]", u = "[object Map]", s = "[object Set]", c = "[object Array]", f = "[object Function]", d = "[object ArrayBuffer]", v = "[object Object]", p = "[object Error]", m = "[object DataView]", h = "[object Uint8Array]", y = "[object Uint8ClampedArray]", b = "[object Uint16Array]", x = "[object Uint32Array]", w = "[object BigUint64Array]", P = "[object Int8Array]", O = "[object Int16Array]", A = "[object Int32Array]", _ = "[object BigInt64Array]", C = "[object Float32Array]", T = "[object Float64Array]";
    e.argumentsTag = a, e.arrayBufferTag = d, e.arrayTag = c, e.bigInt64ArrayTag = _, e.bigUint64ArrayTag = w, e.booleanTag = i, e.dataViewTag = m, e.dateTag = l, e.errorTag = p, e.float32ArrayTag = C, e.float64ArrayTag = T, e.functionTag = f, e.int16ArrayTag = O, e.int32ArrayTag = A, e.int8ArrayTag = P, e.mapTag = u, e.numberTag = n, e.objectTag = v, e.regexpTag = t, e.setTag = s, e.stringTag = r, e.symbolTag = o, e.uint16ArrayTag = b, e.uint32ArrayTag = x, e.uint8ArrayTag = h, e.uint8ClampedArrayTag = y;
  })(Zl)), Zl;
}
var Jl = {}, Kd;
function qP() {
  return Kd || (Kd = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return ArrayBuffer.isView(r) && !(r instanceof DataView);
    }
    e.isTypedArray = t;
  })(Jl)), Jl;
}
var qd;
function ig() {
  return qd || (qd = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ KP(), r = /* @__PURE__ */ cc(), n = /* @__PURE__ */ ng(), i = /* @__PURE__ */ eg(), a = /* @__PURE__ */ qP();
    function o(c, f) {
      return l(c, void 0, c, /* @__PURE__ */ new Map(), f);
    }
    function l(c, f, d, v = /* @__PURE__ */ new Map(), p = void 0) {
      const m = p?.(c, f, d, v);
      if (m !== void 0)
        return m;
      if (i.isPrimitive(c))
        return c;
      if (v.has(c))
        return v.get(c);
      if (Array.isArray(c)) {
        const h = new Array(c.length);
        v.set(c, h);
        for (let y = 0; y < c.length; y++)
          h[y] = l(c[y], y, d, v, p);
        return Object.hasOwn(c, "index") && (h.index = c.index), Object.hasOwn(c, "input") && (h.input = c.input), h;
      }
      if (c instanceof Date)
        return new Date(c.getTime());
      if (c instanceof RegExp) {
        const h = new RegExp(c.source, c.flags);
        return h.lastIndex = c.lastIndex, h;
      }
      if (c instanceof Map) {
        const h = /* @__PURE__ */ new Map();
        v.set(c, h);
        for (const [y, b] of c)
          h.set(y, l(b, y, d, v, p));
        return h;
      }
      if (c instanceof Set) {
        const h = /* @__PURE__ */ new Set();
        v.set(c, h);
        for (const y of c)
          h.add(l(y, void 0, d, v, p));
        return h;
      }
      if (typeof Buffer < "u" && Buffer.isBuffer(c))
        return c.subarray();
      if (a.isTypedArray(c)) {
        const h = new (Object.getPrototypeOf(c)).constructor(c.length);
        v.set(c, h);
        for (let y = 0; y < c.length; y++)
          h[y] = l(c[y], y, d, v, p);
        return h;
      }
      if (c instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && c instanceof SharedArrayBuffer)
        return c.slice(0);
      if (c instanceof DataView) {
        const h = new DataView(c.buffer.slice(0), c.byteOffset, c.byteLength);
        return v.set(c, h), u(h, c, d, v, p), h;
      }
      if (typeof File < "u" && c instanceof File) {
        const h = new File([c], c.name, {
          type: c.type
        });
        return v.set(c, h), u(h, c, d, v, p), h;
      }
      if (typeof Blob < "u" && c instanceof Blob) {
        const h = new Blob([c], { type: c.type });
        return v.set(c, h), u(h, c, d, v, p), h;
      }
      if (c instanceof Error) {
        const h = structuredClone(c);
        return v.set(c, h), h.message = c.message, h.name = c.name, h.stack = c.stack, h.cause = c.cause, h.constructor = c.constructor, u(h, c, d, v, p), h;
      }
      if (c instanceof Boolean) {
        const h = new Boolean(c.valueOf());
        return v.set(c, h), u(h, c, d, v, p), h;
      }
      if (c instanceof Number) {
        const h = new Number(c.valueOf());
        return v.set(c, h), u(h, c, d, v, p), h;
      }
      if (c instanceof String) {
        const h = new String(c.valueOf());
        return v.set(c, h), u(h, c, d, v, p), h;
      }
      if (typeof c == "object" && s(c)) {
        const h = Object.create(Object.getPrototypeOf(c));
        return v.set(c, h), u(h, c, d, v, p), h;
      }
      return c;
    }
    function u(c, f, d = c, v, p) {
      const m = [...Object.keys(f), ...t.getSymbols(f)];
      for (let h = 0; h < m.length; h++) {
        const y = m[h], b = Object.getOwnPropertyDescriptor(c, y);
        (b == null || b.writable) && (c[y] = l(f[y], y, d, v, p));
      }
    }
    function s(c) {
      switch (r.getTag(c)) {
        case n.argumentsTag:
        case n.arrayTag:
        case n.arrayBufferTag:
        case n.dataViewTag:
        case n.booleanTag:
        case n.dateTag:
        case n.float32ArrayTag:
        case n.float64ArrayTag:
        case n.int8ArrayTag:
        case n.int16ArrayTag:
        case n.int32ArrayTag:
        case n.mapTag:
        case n.numberTag:
        case n.objectTag:
        case n.regexpTag:
        case n.setTag:
        case n.stringTag:
        case n.symbolTag:
        case n.uint8ArrayTag:
        case n.uint8ClampedArrayTag:
        case n.uint16ArrayTag:
        case n.uint32ArrayTag:
          return !0;
        default:
          return !1;
      }
    }
    e.cloneDeepWith = o, e.cloneDeepWithImpl = l, e.copyProperties = u;
  })(Gl)), Gl;
}
var Ud;
function UP() {
  return Ud || (Ud = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ ig();
    function r(n) {
      return t.cloneDeepWithImpl(n, void 0, n, /* @__PURE__ */ new Map(), void 0);
    }
    e.cloneDeep = r;
  })(Hl)), Hl;
}
var Vd;
function VP() {
  return Vd || (Vd = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ rg(), r = /* @__PURE__ */ UP();
    function n(i) {
      return i = r.cloneDeep(i), (a) => t.isMatch(a, i);
    }
    e.matches = n;
  })(Fl)), Fl;
}
var Ql = {}, eu = {}, tu = {}, Hd;
function HP() {
  return Hd || (Hd = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ ig(), r = /* @__PURE__ */ cc(), n = /* @__PURE__ */ ng();
    function i(a, o) {
      return t.cloneDeepWith(a, (l, u, s, c) => {
        const f = o?.(l, u, s, c);
        if (f !== void 0)
          return f;
        if (typeof a == "object") {
          if (r.getTag(a) === n.objectTag && typeof a.constructor != "function") {
            const d = {};
            return c.set(a, d), t.copyProperties(d, a, s, c), d;
          }
          switch (Object.prototype.toString.call(a)) {
            case n.numberTag:
            case n.stringTag:
            case n.booleanTag: {
              const d = new a.constructor(a?.valueOf());
              return t.copyProperties(d, a), d;
            }
            case n.argumentsTag: {
              const d = {};
              return t.copyProperties(d, a), d.length = a.length, d[Symbol.iterator] = a[Symbol.iterator], d;
            }
            default:
              return;
          }
        }
      });
    }
    e.cloneDeepWith = i;
  })(tu)), tu;
}
var Gd;
function GP() {
  return Gd || (Gd = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ HP();
    function r(n) {
      return t.cloneDeepWith(n);
    }
    e.cloneDeep = r;
  })(eu)), eu;
}
var ru = {}, nu = {}, Yd;
function ag() {
  return Yd || (Yd = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /^(?:0|[1-9]\d*)$/;
    function r(n, i = Number.MAX_SAFE_INTEGER) {
      switch (typeof n) {
        case "number":
          return Number.isInteger(n) && n >= 0 && n < i;
        case "symbol":
          return !1;
        case "string":
          return t.test(n);
      }
    }
    e.isIndex = r;
  })(nu)), nu;
}
var iu = {}, Xd;
function YP() {
  return Xd || (Xd = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ cc();
    function r(n) {
      return n !== null && typeof n == "object" && t.getTag(n) === "[object Arguments]";
    }
    e.isArguments = r;
  })(iu)), iu;
}
var Zd;
function XP() {
  return Zd || (Zd = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Uy(), r = /* @__PURE__ */ ag(), n = /* @__PURE__ */ YP(), i = /* @__PURE__ */ oc();
    function a(o, l) {
      let u;
      if (Array.isArray(l) ? u = l : typeof l == "string" && t.isDeepKey(l) && o?.[l] == null ? u = i.toPath(l) : u = [l], u.length === 0)
        return !1;
      let s = o;
      for (let c = 0; c < u.length; c++) {
        const f = u[c];
        if ((s == null || !Object.hasOwn(s, f)) && !((Array.isArray(s) || n.isArguments(s)) && r.isIndex(f) && f < s.length))
          return !1;
        s = s[f];
      }
      return !0;
    }
    e.has = a;
  })(ru)), ru;
}
var Jd;
function ZP() {
  return Jd || (Jd = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ rg(), r = /* @__PURE__ */ ac(), n = /* @__PURE__ */ GP(), i = /* @__PURE__ */ lc(), a = /* @__PURE__ */ XP();
    function o(l, u) {
      switch (typeof l) {
        case "object": {
          Object.is(l?.valueOf(), -0) && (l = "-0");
          break;
        }
        case "number": {
          l = r.toKey(l);
          break;
        }
      }
      return u = n.cloneDeep(u), function(s) {
        const c = i.get(s, l);
        return c === void 0 ? a.has(s, l) : u === void 0 ? c === void 0 : t.isMatch(c, u);
      };
    }
    e.matchesProperty = o;
  })(Ql)), Ql;
}
var Qd;
function JP() {
  return Qd || (Qd = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Zy(), r = /* @__PURE__ */ FP(), n = /* @__PURE__ */ VP(), i = /* @__PURE__ */ ZP();
    function a(o) {
      if (o == null)
        return t.identity;
      switch (typeof o) {
        case "function":
          return o;
        case "object":
          return Array.isArray(o) && o.length === 2 ? i.matchesProperty(o[0], o[1]) : n.matches(o);
        case "string":
        case "symbol":
        case "number":
          return r.property(o);
      }
    }
    e.iteratee = a;
  })(zl)), zl;
}
var ev;
function QP() {
  return ev || (ev = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ $P(), r = /* @__PURE__ */ RP(), n = /* @__PURE__ */ Zy(), i = /* @__PURE__ */ BP(), a = /* @__PURE__ */ JP();
    function o(l, u = n.identity) {
      return i.isArrayLikeObject(l) ? t.uniqBy(Array.from(l), r.ary(a.iteratee(u), 1)) : [];
    }
    e.uniqBy = o;
  })(Cl)), Cl;
}
var au, tv;
function eE() {
  return tv || (tv = 1, au = QP().uniqBy), au;
}
var tE = /* @__PURE__ */ eE();
const rv = /* @__PURE__ */ an(tE);
function og(e, t, r) {
  return t === !0 ? rv(e, r) : typeof t == "function" ? rv(e, t) : e;
}
var Ji = { exports: {} }, ou = {}, Qi = { exports: {} }, lu = {};
var nv;
function rE() {
  if (nv) return lu;
  nv = 1;
  var e = nn;
  function t(f, d) {
    return f === d && (f !== 0 || 1 / f === 1 / d) || f !== f && d !== d;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, i = e.useEffect, a = e.useLayoutEffect, o = e.useDebugValue;
  function l(f, d) {
    var v = d(), p = n({ inst: { value: v, getSnapshot: d } }), m = p[0].inst, h = p[1];
    return a(
      function() {
        m.value = v, m.getSnapshot = d, u(m) && h({ inst: m });
      },
      [f, v, d]
    ), i(
      function() {
        return u(m) && h({ inst: m }), f(function() {
          u(m) && h({ inst: m });
        });
      },
      [f]
    ), o(v), v;
  }
  function u(f) {
    var d = f.getSnapshot;
    f = f.value;
    try {
      var v = d();
      return !r(f, v);
    } catch {
      return !0;
    }
  }
  function s(f, d) {
    return d();
  }
  var c = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? s : l;
  return lu.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : c, lu;
}
var uu = {};
var iv;
function nE() {
  return iv || (iv = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(v, p) {
      return v === p && (v !== 0 || 1 / v === 1 / p) || v !== v && p !== p;
    }
    function t(v, p) {
      c || i.startTransition === void 0 || (c = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var m = p();
      if (!f) {
        var h = p();
        a(m, h) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), f = !0);
      }
      h = o({
        inst: { value: m, getSnapshot: p }
      });
      var y = h[0].inst, b = h[1];
      return u(
        function() {
          y.value = m, y.getSnapshot = p, r(y) && b({ inst: y });
        },
        [v, m, p]
      ), l(
        function() {
          return r(y) && b({ inst: y }), v(function() {
            r(y) && b({ inst: y });
          });
        },
        [v]
      ), s(m), m;
    }
    function r(v) {
      var p = v.getSnapshot;
      v = v.value;
      try {
        var m = p();
        return !a(v, m);
      } catch {
        return !0;
      }
    }
    function n(v, p) {
      return p();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var i = nn, a = typeof Object.is == "function" ? Object.is : e, o = i.useState, l = i.useEffect, u = i.useLayoutEffect, s = i.useDebugValue, c = !1, f = !1, d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? n : t;
    uu.useSyncExternalStore = i.useSyncExternalStore !== void 0 ? i.useSyncExternalStore : d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), uu;
}
var av;
function lg() {
  return av || (av = 1, process.env.NODE_ENV === "production" ? Qi.exports = rE() : Qi.exports = nE()), Qi.exports;
}
var ov;
function iE() {
  if (ov) return ou;
  ov = 1;
  var e = nn, t = lg();
  function r(s, c) {
    return s === c && (s !== 0 || 1 / s === 1 / c) || s !== s && c !== c;
  }
  var n = typeof Object.is == "function" ? Object.is : r, i = t.useSyncExternalStore, a = e.useRef, o = e.useEffect, l = e.useMemo, u = e.useDebugValue;
  return ou.useSyncExternalStoreWithSelector = function(s, c, f, d, v) {
    var p = a(null);
    if (p.current === null) {
      var m = { hasValue: !1, value: null };
      p.current = m;
    } else m = p.current;
    p = l(
      function() {
        function y(O) {
          if (!b) {
            if (b = !0, x = O, O = d(O), v !== void 0 && m.hasValue) {
              var A = m.value;
              if (v(A, O))
                return w = A;
            }
            return w = O;
          }
          if (A = w, n(x, O)) return A;
          var _ = d(O);
          return v !== void 0 && v(A, _) ? (x = O, A) : (x = O, w = _);
        }
        var b = !1, x, w, P = f === void 0 ? null : f;
        return [
          function() {
            return y(c());
          },
          P === null ? void 0 : function() {
            return y(P());
          }
        ];
      },
      [c, f, d, v]
    );
    var h = i(s, p[0], p[1]);
    return o(
      function() {
        m.hasValue = !0, m.value = h;
      },
      [h]
    ), u(h), h;
  }, ou;
}
var su = {};
var lv;
function aE() {
  return lv || (lv = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(s, c) {
      return s === c && (s !== 0 || 1 / s === 1 / c) || s !== s && c !== c;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = nn, r = lg(), n = typeof Object.is == "function" ? Object.is : e, i = r.useSyncExternalStore, a = t.useRef, o = t.useEffect, l = t.useMemo, u = t.useDebugValue;
    su.useSyncExternalStoreWithSelector = function(s, c, f, d, v) {
      var p = a(null);
      if (p.current === null) {
        var m = { hasValue: !1, value: null };
        p.current = m;
      } else m = p.current;
      p = l(
        function() {
          function y(O) {
            if (!b) {
              if (b = !0, x = O, O = d(O), v !== void 0 && m.hasValue) {
                var A = m.value;
                if (v(A, O))
                  return w = A;
              }
              return w = O;
            }
            if (A = w, n(x, O))
              return A;
            var _ = d(O);
            return v !== void 0 && v(A, _) ? (x = O, A) : (x = O, w = _);
          }
          var b = !1, x, w, P = f === void 0 ? null : f;
          return [
            function() {
              return y(c());
            },
            P === null ? void 0 : function() {
              return y(P());
            }
          ];
        },
        [c, f, d, v]
      );
      var h = i(s, p[0], p[1]);
      return o(
        function() {
          m.hasValue = !0, m.value = h;
        },
        [h]
      ), u(h), h;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), su;
}
var uv;
function oE() {
  return uv || (uv = 1, process.env.NODE_ENV === "production" ? Ji.exports = iE() : Ji.exports = aE()), Ji.exports;
}
var lE = oE(), fc = /* @__PURE__ */ lt(null), uE = (e) => e, de = () => {
  var e = yt(fc);
  return e ? e.store.dispatch : uE;
}, ba = () => {
}, sE = () => ba, cE = (e, t) => e === t;
function B(e) {
  var t = yt(fc), r = gt(() => t ? (n) => {
    if (n != null)
      return e(n);
  } : ba, [t, e]);
  return lE.useSyncExternalStoreWithSelector(t ? t.subscription.addNestedSub : sE, t ? t.store.getState : ba, t ? t.store.getState : ba, r, cE);
}
var fE = (e, t, r) => {
  if (t.length === 1 && t[0] === r) {
    let n = !1;
    try {
      const i = {};
      e(i) === i && (n = !0);
    } catch {
    }
    if (n) {
      let i;
      try {
        throw new Error();
      } catch (a) {
        ({ stack: i } = a);
      }
      console.warn(
        `The result function returned its own inputs without modification. e.g
\`createSelector([state => state.todos], todos => todos)\`
This could lead to inefficient memoization and unnecessary re-renders.
Ensure transformation logic is in the result function, and extraction logic is in the input selectors.`,
        { stack: i }
      );
    }
  }
}, dE = (e, t, r) => {
  const { memoize: n, memoizeOptions: i } = t, { inputSelectorResults: a, inputSelectorResultsCopy: o } = e, l = n(() => ({}), ...i);
  if (!(l.apply(null, a) === l.apply(null, o))) {
    let s;
    try {
      throw new Error();
    } catch (c) {
      ({ stack: s } = c);
    }
    console.warn(
      `An input selector returned a different result when passed same arguments.
This means your output selector will likely run more frequently than intended.
Avoid returning a new reference inside your input selector, e.g.
\`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)\``,
      {
        arguments: r,
        firstInputs: a,
        secondInputs: o,
        stack: s
      }
    );
  }
}, vE = {
  inputStabilityCheck: "once",
  identityFunctionCheck: "once"
};
function pE(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function hE(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(t);
}
function mE(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((r) => typeof r == "function")) {
    const r = e.map(
      (n) => typeof n == "function" ? `function ${n.name || "unnamed"}()` : typeof n
    ).join(", ");
    throw new TypeError(`${t}[${r}]`);
  }
}
var sv = (e) => Array.isArray(e) ? e : [e];
function yE(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return mE(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function cv(e, t) {
  const r = [], { length: n } = e;
  for (let i = 0; i < n; i++)
    r.push(e[i].apply(null, t));
  return r;
}
var gE = (e, t) => {
  const { identityFunctionCheck: r, inputStabilityCheck: n } = {
    ...vE,
    ...t
  };
  return {
    identityFunctionCheck: {
      shouldRun: r === "always" || r === "once" && e,
      run: fE
    },
    inputStabilityCheck: {
      shouldRun: n === "always" || n === "once" && e,
      run: dE
    }
  };
}, bE = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, xE = typeof WeakRef < "u" ? WeakRef : bE, wE = 0, fv = 1;
function ea() {
  return {
    s: wE,
    v: void 0,
    o: null,
    p: null
  };
}
function ug(e, t = {}) {
  let r = ea();
  const { resultEqualityCheck: n } = t;
  let i, a = 0;
  function o() {
    let l = r;
    const { length: u } = arguments;
    for (let f = 0, d = u; f < d; f++) {
      const v = arguments[f];
      if (typeof v == "function" || typeof v == "object" && v !== null) {
        let p = l.o;
        p === null && (l.o = p = /* @__PURE__ */ new WeakMap());
        const m = p.get(v);
        m === void 0 ? (l = ea(), p.set(v, l)) : l = m;
      } else {
        let p = l.p;
        p === null && (l.p = p = /* @__PURE__ */ new Map());
        const m = p.get(v);
        m === void 0 ? (l = ea(), p.set(v, l)) : l = m;
      }
    }
    const s = l;
    let c;
    if (l.s === fv)
      c = l.v;
    else if (c = e.apply(null, arguments), a++, n) {
      const f = i?.deref?.() ?? i;
      f != null && n(f, c) && (c = f, a !== 0 && a--), i = typeof c == "object" && c !== null || typeof c == "function" ? new xE(c) : c;
    }
    return s.s = fv, s.v = c, c;
  }
  return o.clearCache = () => {
    r = ea(), o.resetResultsCount();
  }, o.resultsCount = () => a, o.resetResultsCount = () => {
    a = 0;
  }, o;
}
function OE(e, ...t) {
  const r = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, n = (...i) => {
    let a = 0, o = 0, l, u = {}, s = i.pop();
    typeof s == "object" && (u = s, s = i.pop()), pE(
      s,
      `createSelector expects an output function after the inputs, but received: [${typeof s}]`
    );
    const c = {
      ...r,
      ...u
    }, {
      memoize: f,
      memoizeOptions: d = [],
      argsMemoize: v = ug,
      argsMemoizeOptions: p = [],
      devModeChecks: m = {}
    } = c, h = sv(d), y = sv(p), b = yE(i), x = f(function() {
      return a++, s.apply(
        null,
        arguments
      );
    }, ...h);
    let w = !0;
    const P = v(function() {
      o++;
      const A = cv(
        b,
        arguments
      );
      if (l = x.apply(null, A), process.env.NODE_ENV !== "production") {
        const { identityFunctionCheck: _, inputStabilityCheck: C } = gE(w, m);
        if (_.shouldRun && _.run(
          s,
          A,
          l
        ), C.shouldRun) {
          const T = cv(
            b,
            arguments
          );
          C.run(
            { inputSelectorResults: A, inputSelectorResultsCopy: T },
            { memoize: f, memoizeOptions: h },
            arguments
          );
        }
        w && (w = !1);
      }
      return l;
    }, ...y);
    return Object.assign(P, {
      resultFunc: s,
      memoizedResultFunc: x,
      dependencies: b,
      dependencyRecomputations: () => o,
      resetDependencyRecomputations: () => {
        o = 0;
      },
      lastResult: () => l,
      recomputations: () => a,
      resetRecomputations: () => {
        a = 0;
      },
      memoize: f,
      argsMemoize: v
    });
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var S = /* @__PURE__ */ OE(ug), PE = Object.assign(
  (e, t = S) => {
    hE(
      e,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
    );
    const r = Object.keys(e), n = r.map(
      (a) => e[a]
    );
    return t(
      n,
      (...a) => a.reduce((o, l, u) => (o[r[u]] = l, o), {})
    );
  },
  { withTypes: () => PE }
), cu = {}, fu = {}, du = {}, dv;
function EE() {
  return dv || (dv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(n) {
      return typeof n == "symbol" ? 1 : n === null ? 2 : n === void 0 ? 3 : n !== n ? 4 : 0;
    }
    const r = (n, i, a) => {
      if (n !== i) {
        const o = t(n), l = t(i);
        if (o === l && o === 0) {
          if (n < i)
            return a === "desc" ? 1 : -1;
          if (n > i)
            return a === "desc" ? -1 : 1;
        }
        return a === "desc" ? l - o : o - l;
      }
      return 0;
    };
    e.compareValues = r;
  })(du)), du;
}
var vu = {}, pu = {}, vv;
function sg() {
  return vv || (vv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return typeof r == "symbol" || r instanceof Symbol;
    }
    e.isSymbol = t;
  })(pu)), pu;
}
var pv;
function AE() {
  return pv || (pv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ sg(), r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
    function i(a, o) {
      return Array.isArray(a) ? !1 : typeof a == "number" || typeof a == "boolean" || a == null || t.isSymbol(a) ? !0 : typeof a == "string" && (n.test(a) || !r.test(a)) || o != null && Object.hasOwn(o, a);
    }
    e.isKey = i;
  })(vu)), vu;
}
var hv;
function SE() {
  return hv || (hv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ EE(), r = /* @__PURE__ */ AE(), n = /* @__PURE__ */ oc();
    function i(a, o, l, u) {
      if (a == null)
        return [];
      l = u ? void 0 : l, Array.isArray(a) || (a = Object.values(a)), Array.isArray(o) || (o = o == null ? [null] : [o]), o.length === 0 && (o = [null]), Array.isArray(l) || (l = l == null ? [] : [l]), l = l.map((v) => String(v));
      const s = (v, p) => {
        let m = v;
        for (let h = 0; h < p.length && m != null; ++h)
          m = m[p[h]];
        return m;
      }, c = (v, p) => p == null || v == null ? p : typeof v == "object" && "key" in v ? Object.hasOwn(p, v.key) ? p[v.key] : s(p, v.path) : typeof v == "function" ? v(p) : Array.isArray(v) ? s(p, v) : typeof p == "object" ? p[v] : p, f = o.map((v) => (Array.isArray(v) && v.length === 1 && (v = v[0]), v == null || typeof v == "function" || Array.isArray(v) || r.isKey(v) ? v : { key: v, path: n.toPath(v) }));
      return a.map((v) => ({
        original: v,
        criteria: f.map((p) => c(p, v))
      })).slice().sort((v, p) => {
        for (let m = 0; m < f.length; m++) {
          const h = t.compareValues(v.criteria[m], p.criteria[m], l[m]);
          if (h !== 0)
            return h;
        }
        return 0;
      }).map((v) => v.original);
    }
    e.orderBy = i;
  })(fu)), fu;
}
var hu = {}, mv;
function _E() {
  return mv || (mv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r, n = 1) {
      const i = [], a = Math.floor(n), o = (l, u) => {
        for (let s = 0; s < l.length; s++) {
          const c = l[s];
          Array.isArray(c) && u < a ? o(c, u + 1) : i.push(c);
        }
      };
      return o(r, 0), i;
    }
    e.flatten = t;
  })(hu)), hu;
}
var mu = {}, yv;
function cg() {
  return yv || (yv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ ag(), r = /* @__PURE__ */ Jy(), n = /* @__PURE__ */ Qy(), i = /* @__PURE__ */ tg();
    function a(o, l, u) {
      return n.isObject(u) && (typeof l == "number" && r.isArrayLike(u) && t.isIndex(l) && l < u.length || typeof l == "string" && l in u) ? i.isEqualsSameValueZero(u[l], o) : !1;
    }
    e.isIterateeCall = a;
  })(mu)), mu;
}
var gv;
function jE() {
  return gv || (gv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ SE(), r = /* @__PURE__ */ _E(), n = /* @__PURE__ */ cg();
    function i(a, ...o) {
      const l = o.length;
      return l > 1 && n.isIterateeCall(a, o[0], o[1]) ? o = [] : l > 2 && n.isIterateeCall(o[0], o[1], o[2]) && (o = [o[0]]), t.orderBy(a, r.flatten(o), ["asc"]);
    }
    e.sortBy = i;
  })(cu)), cu;
}
var yu, bv;
function IE() {
  return bv || (bv = 1, yu = jE().sortBy), yu;
}
var kE = /* @__PURE__ */ IE();
const _o = /* @__PURE__ */ an(kE);
var fg = (e) => e.legend.settings, CE = (e) => e.legend.size, TE = (e) => e.legend.payload, NE = S([TE, fg], (e, t) => {
  var {
    itemSorter: r
  } = t, n = e.flat(1);
  return r ? _o(n, r) : n;
});
function DE() {
  return B(NE);
}
var ta = 1;
function dg() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], [t, r] = re({
    height: 0,
    left: 0,
    top: 0,
    width: 0
  }), n = ie(
    (i) => {
      if (i != null) {
        var a = i.getBoundingClientRect(), o = {
          height: a.height,
          left: a.left,
          top: a.top,
          width: a.width
        };
        (Math.abs(o.height - t.height) > ta || Math.abs(o.left - t.left) > ta || Math.abs(o.top - t.top) > ta || Math.abs(o.width - t.width) > ta) && r({
          height: o.height,
          left: o.left,
          top: o.top,
          width: o.width
        });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t.width, t.height, t.top, t.left, ...e]
  );
  return [t, n];
}
function qe(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var ME = typeof Symbol == "function" && Symbol.observable || "@@observable", xv = ME, gu = () => Math.random().toString(36).substring(7).split("").join("."), $E = {
  INIT: `@@redux/INIT${/* @__PURE__ */ gu()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ gu()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${gu()}`
}, Kr = $E;
function Si(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function RE(e) {
  if (e === void 0)
    return "undefined";
  if (e === null)
    return "null";
  const t = typeof e;
  switch (t) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function":
      return t;
  }
  if (Array.isArray(e))
    return "array";
  if (BE(e))
    return "date";
  if (zE(e))
    return "error";
  const r = LE(e);
  switch (r) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return r;
  }
  return Object.prototype.toString.call(e).slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function LE(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function zE(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function BE(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function pr(e) {
  let t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = RE(e)), t;
}
function vg(e, t, r) {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? qe(2) : `Expected the root reducer to be a function. Instead, received: '${pr(e)}'`);
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? qe(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? qe(1) : `Expected the enhancer to be a function. Instead, received: '${pr(r)}'`);
    return r(vg)(e, t);
  }
  let n = e, i = t, a = /* @__PURE__ */ new Map(), o = a, l = 0, u = !1;
  function s() {
    o === a && (o = /* @__PURE__ */ new Map(), a.forEach((h, y) => {
      o.set(y, h);
    }));
  }
  function c() {
    if (u)
      throw new Error(process.env.NODE_ENV === "production" ? qe(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return i;
  }
  function f(h) {
    if (typeof h != "function")
      throw new Error(process.env.NODE_ENV === "production" ? qe(4) : `Expected the listener to be a function. Instead, received: '${pr(h)}'`);
    if (u)
      throw new Error(process.env.NODE_ENV === "production" ? qe(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let y = !0;
    s();
    const b = l++;
    return o.set(b, h), function() {
      if (y) {
        if (u)
          throw new Error(process.env.NODE_ENV === "production" ? qe(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        y = !1, s(), o.delete(b), a = null;
      }
    };
  }
  function d(h) {
    if (!Si(h))
      throw new Error(process.env.NODE_ENV === "production" ? qe(7) : `Actions must be plain objects. Instead, the actual type was: '${pr(h)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof h.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? qe(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof h.type != "string")
      throw new Error(process.env.NODE_ENV === "production" ? qe(17) : `Action "type" property must be a string. Instead, the actual type was: '${pr(h.type)}'. Value was: '${h.type}' (stringified)`);
    if (u)
      throw new Error(process.env.NODE_ENV === "production" ? qe(9) : "Reducers may not dispatch actions.");
    try {
      u = !0, i = n(i, h);
    } finally {
      u = !1;
    }
    return (a = o).forEach((b) => {
      b();
    }), h;
  }
  function v(h) {
    if (typeof h != "function")
      throw new Error(process.env.NODE_ENV === "production" ? qe(10) : `Expected the nextReducer to be a function. Instead, received: '${pr(h)}`);
    n = h, d({
      type: Kr.REPLACE
    });
  }
  function p() {
    const h = f;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(y) {
        if (typeof y != "object" || y === null)
          throw new Error(process.env.NODE_ENV === "production" ? qe(11) : `Expected the observer to be an object. Instead, received: '${pr(y)}'`);
        function b() {
          const w = y;
          w.next && w.next(c());
        }
        return b(), {
          unsubscribe: h(b)
        };
      },
      [xv]() {
        return this;
      }
    };
  }
  return d({
    type: Kr.INIT
  }), {
    dispatch: d,
    subscribe: f,
    getState: c,
    replaceReducer: v,
    [xv]: p
  };
}
function wv(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function FE(e, t, r, n) {
  const i = Object.keys(t), a = r && r.type === Kr.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (i.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!Si(e))
    return `The ${a} has unexpected type of "${pr(e)}". Expected argument to be an object with the following keys: "${i.join('", "')}"`;
  const o = Object.keys(e).filter((l) => !t.hasOwnProperty(l) && !n[l]);
  if (o.forEach((l) => {
    n[l] = !0;
  }), !(r && r.type === Kr.REPLACE) && o.length > 0)
    return `Unexpected ${o.length > 1 ? "keys" : "key"} "${o.join('", "')}" found in ${a}. Expected to find one of the known reducer keys instead: "${i.join('", "')}". Unexpected keys will be ignored.`;
}
function WE(e) {
  Object.keys(e).forEach((t) => {
    const r = e[t];
    if (typeof r(void 0, {
      type: Kr.INIT
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? qe(12) : `The slice reducer for key "${t}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof r(void 0, {
      type: Kr.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? qe(13) : `The slice reducer for key "${t}" returned undefined when probed with a random type. Don't try to handle '${Kr.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function pg(e) {
  const t = Object.keys(e), r = {};
  for (let o = 0; o < t.length; o++) {
    const l = t[o];
    process.env.NODE_ENV !== "production" && typeof e[l] > "u" && wv(`No reducer provided for key "${l}"`), typeof e[l] == "function" && (r[l] = e[l]);
  }
  const n = Object.keys(r);
  let i;
  process.env.NODE_ENV !== "production" && (i = {});
  let a;
  try {
    WE(r);
  } catch (o) {
    a = o;
  }
  return function(l = {}, u) {
    if (a)
      throw a;
    if (process.env.NODE_ENV !== "production") {
      const f = FE(l, r, u, i);
      f && wv(f);
    }
    let s = !1;
    const c = {};
    for (let f = 0; f < n.length; f++) {
      const d = n[f], v = r[d], p = l[d], m = v(p, u);
      if (typeof m > "u") {
        const h = u && u.type;
        throw new Error(process.env.NODE_ENV === "production" ? qe(14) : `When called with an action of type ${h ? `"${String(h)}"` : "(unknown type)"}, the slice reducer for key "${d}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      c[d] = m, s = s || m !== p;
    }
    return s = s || n.length !== Object.keys(l).length, s ? c : l;
  };
}
function Ca(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, r) => (...n) => t(r(...n)));
}
function KE(...e) {
  return (t) => (r, n) => {
    const i = t(r, n);
    let a = () => {
      throw new Error(process.env.NODE_ENV === "production" ? qe(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const o = {
      getState: i.getState,
      dispatch: (u, ...s) => a(u, ...s)
    }, l = e.map((u) => u(o));
    return a = Ca(...l)(i.dispatch), {
      ...i,
      dispatch: a
    };
  };
}
function dc(e) {
  return Si(e) && "type" in e && typeof e.type == "string";
}
var hg = /* @__PURE__ */ Symbol.for("immer-nothing"), Ov = /* @__PURE__ */ Symbol.for("immer-draftable"), rt = /* @__PURE__ */ Symbol.for("immer-state"), qE = process.env.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(e) {
    return `The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`;
  },
  function(e) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`;
  },
  "This object has been frozen and should not be mutated",
  function(e) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + e;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(e) {
    return `'current' expects a draft, got: ${e}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(e) {
    return `'original' expects a draft, got: ${e}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function ct(e, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const r = qE[e], n = Lr(r) ? r.apply(null, t) : r;
    throw new Error(`[Immer] ${n}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var dt = Object, Pn = dt.getPrototypeOf, Ta = "constructor", jo = "prototype", os = "configurable", Na = "enumerable", xa = "writable", li = "value", er = (e) => !!e && !!e[rt];
function kt(e) {
  return e ? mg(e) || ko(e) || !!e[Ov] || !!e[Ta]?.[Ov] || Co(e) || To(e) : !1;
}
var UE = dt[jo][Ta].toString(), Pv = /* @__PURE__ */ new WeakMap();
function mg(e) {
  if (!e || !vc(e))
    return !1;
  const t = Pn(e);
  if (t === null || t === dt[jo])
    return !0;
  const r = dt.hasOwnProperty.call(t, Ta) && t[Ta];
  if (r === Object)
    return !0;
  if (!Lr(r))
    return !1;
  let n = Pv.get(r);
  return n === void 0 && (n = Function.toString.call(r), Pv.set(r, n)), n === UE;
}
function Io(e, t, r = !0) {
  _i(e) === 0 ? (r ? Reflect.ownKeys(e) : dt.keys(e)).forEach((i) => {
    t(i, e[i], e);
  }) : e.forEach((n, i) => t(i, n, e));
}
function _i(e) {
  const t = e[rt];
  return t ? t.type_ : ko(e) ? 1 : Co(e) ? 2 : To(e) ? 3 : 0;
}
var Ev = (e, t, r = _i(e)) => r === 2 ? e.has(t) : dt[jo].hasOwnProperty.call(e, t), ls = (e, t, r = _i(e)) => (
  // @ts-ignore
  r === 2 ? e.get(t) : e[t]
), Da = (e, t, r, n = _i(e)) => {
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r;
};
function VE(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var ko = Array.isArray, Co = (e) => e instanceof Map, To = (e) => e instanceof Set, vc = (e) => typeof e == "object", Lr = (e) => typeof e == "function", bu = (e) => typeof e == "boolean";
function HE(e) {
  const t = +e;
  return Number.isInteger(t) && String(t) === e;
}
var Gt = (e) => e.copy_ || e.base_, pc = (e) => e.modified_ ? e.copy_ : e.base_;
function us(e, t) {
  if (Co(e))
    return new Map(e);
  if (To(e))
    return new Set(e);
  if (ko(e))
    return Array[jo].slice.call(e);
  const r = mg(e);
  if (t === !0 || t === "class_only" && !r) {
    const n = dt.getOwnPropertyDescriptors(e);
    delete n[rt];
    let i = Reflect.ownKeys(n);
    for (let a = 0; a < i.length; a++) {
      const o = i[a], l = n[o];
      l[xa] === !1 && (l[xa] = !0, l[os] = !0), (l.get || l.set) && (n[o] = {
        [os]: !0,
        [xa]: !0,
        // could live with !!desc.set as well here...
        [Na]: l[Na],
        [li]: e[o]
      });
    }
    return dt.create(Pn(e), n);
  } else {
    const n = Pn(e);
    if (n !== null && r)
      return { ...e };
    const i = dt.create(n);
    return dt.assign(i, e);
  }
}
function hc(e, t = !1) {
  return No(e) || er(e) || !kt(e) || (_i(e) > 1 && dt.defineProperties(e, {
    set: ra,
    add: ra,
    clear: ra,
    delete: ra
  }), dt.freeze(e), t && Io(
    e,
    (r, n) => {
      hc(n, !0);
    },
    !1
  )), e;
}
function GE() {
  ct(2);
}
var ra = {
  [li]: GE
};
function No(e) {
  return e === null || !vc(e) ? !0 : dt.isFrozen(e);
}
var Ma = "MapSet", ss = "Patches", Av = "ArrayMethods", yg = {};
function Jr(e) {
  const t = yg[e];
  return t || ct(0, e), t;
}
var Sv = (e) => !!yg[e], ui, gg = () => ui, YE = (e, t) => ({
  drafts_: [],
  parent_: e,
  immer_: t,
  // Whenever the modified draft contains a draft from another scope, we
  // need to prevent auto-freezing so the unowned draft can be finalized.
  canAutoFreeze_: !0,
  unfinalizedDrafts_: 0,
  handledSet_: /* @__PURE__ */ new Set(),
  processedForPatches_: /* @__PURE__ */ new Set(),
  mapSetPlugin_: Sv(Ma) ? Jr(Ma) : void 0,
  arrayMethodsPlugin_: Sv(Av) ? Jr(Av) : void 0
});
function _v(e, t) {
  t && (e.patchPlugin_ = Jr(ss), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function cs(e) {
  fs(e), e.drafts_.forEach(XE), e.drafts_ = null;
}
function fs(e) {
  e === ui && (ui = e.parent_);
}
var jv = (e) => ui = YE(ui, e);
function XE(e) {
  const t = e[rt];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function Iv(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  if (e !== void 0 && e !== r) {
    r[rt].modified_ && (cs(t), ct(4)), kt(e) && (e = kv(t, e));
    const { patchPlugin_: i } = t;
    i && i.generateReplacementPatches_(
      r[rt].base_,
      e,
      t
    );
  } else
    e = kv(t, r);
  return ZE(t, e, !0), cs(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== hg ? e : void 0;
}
function kv(e, t) {
  if (No(t))
    return t;
  const r = t[rt];
  if (!r)
    return $a(t, e.handledSet_, e);
  if (!Do(r, e))
    return t;
  if (!r.modified_)
    return r.base_;
  if (!r.finalized_) {
    const { callbacks_: n } = r;
    if (n)
      for (; n.length > 0; )
        n.pop()(e);
    wg(r, e);
  }
  return r.copy_;
}
function ZE(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && hc(t, r);
}
function bg(e) {
  e.finalized_ = !0, e.scope_.unfinalizedDrafts_--;
}
var Do = (e, t) => e.scope_ === t, JE = [];
function xg(e, t, r, n) {
  const i = Gt(e), a = e.type_;
  if (n !== void 0 && ls(i, n, a) === t) {
    Da(i, n, r, a);
    return;
  }
  if (!e.draftLocations_) {
    const l = e.draftLocations_ = /* @__PURE__ */ new Map();
    Io(i, (u, s) => {
      if (er(s)) {
        const c = l.get(s) || [];
        c.push(u), l.set(s, c);
      }
    });
  }
  const o = e.draftLocations_.get(t) ?? JE;
  for (const l of o)
    Da(i, l, r, a);
}
function QE(e, t, r) {
  e.callbacks_.push(function(i) {
    const a = t;
    if (!a || !Do(a, i))
      return;
    i.mapSetPlugin_?.fixSetContents(a);
    const o = pc(a);
    xg(e, a.draft_ ?? a, o, r), wg(a, i);
  });
}
function wg(e, t) {
  if (e.modified_ && !e.finalized_ && (e.type_ === 3 || e.type_ === 1 && e.allIndicesReassigned_ || (e.assigned_?.size ?? 0) > 0)) {
    const { patchPlugin_: n } = t;
    if (n) {
      const i = n.getPath(e);
      i && n.generatePatches_(e, i, t);
    }
    bg(e);
  }
}
function e1(e, t, r) {
  const { scope_: n } = e;
  if (er(r)) {
    const i = r[rt];
    Do(i, n) && i.callbacks_.push(function() {
      wa(e);
      const o = pc(i);
      xg(e, r, o, t);
    });
  } else kt(r) && e.callbacks_.push(function() {
    const a = Gt(e);
    e.type_ === 3 ? a.has(r) && $a(r, n.handledSet_, n) : ls(a, t, e.type_) === r && n.drafts_.length > 1 && (e.assigned_.get(t) ?? !1) === !0 && e.copy_ && $a(
      ls(e.copy_, t, e.type_),
      n.handledSet_,
      n
    );
  });
}
function $a(e, t, r) {
  return !r.immer_.autoFreeze_ && r.unfinalizedDrafts_ < 1 || er(e) || t.has(e) || !kt(e) || No(e) || (t.add(e), Io(e, (n, i) => {
    if (er(i)) {
      const a = i[rt];
      if (Do(a, r)) {
        const o = pc(a);
        Da(e, n, o, e.type_), bg(a);
      }
    } else kt(i) && $a(i, t, r);
  })), e;
}
function t1(e, t) {
  const r = ko(e), n = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : gg(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    // actually instantiated in `prepareCopy()`
    assigned_: void 0,
    // The parent draft state.
    parent_: t,
    // The base state.
    base_: e,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1,
    // `callbacks` actually gets assigned in `createProxy`
    callbacks_: void 0
  };
  let i = n, a = Ra;
  r && (i = [n], a = si);
  const { revoke: o, proxy: l } = Proxy.revocable(i, a);
  return n.draft_ = l, n.revoke_ = o, [l, n];
}
var Ra = {
  get(e, t) {
    if (t === rt)
      return e;
    let r = e.scope_.arrayMethodsPlugin_;
    const n = e.type_ === 1 && typeof t == "string";
    if (n && r?.isArrayOperationMethod(t))
      return r.createMethodInterceptor(e, t);
    const i = Gt(e);
    if (!Ev(i, t, e.type_))
      return r1(e, i, t);
    const a = i[t];
    if (e.finalized_ || !kt(a) || n && e.operationMethod && r?.isMutatingArrayMethod(
      e.operationMethod
    ) && HE(t))
      return a;
    if (a === xu(e.base_, t)) {
      wa(e);
      const o = e.type_ === 1 ? +t : t, l = vs(e.scope_, a, e, o);
      return e.copy_[o] = l;
    }
    return a;
  },
  has(e, t) {
    return t in Gt(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(Gt(e));
  },
  set(e, t, r) {
    const n = Og(Gt(e), t);
    if (n?.set)
      return n.set.call(e.draft_, r), !0;
    if (!e.modified_) {
      const i = xu(Gt(e), t), a = i?.[rt];
      if (a && a.base_ === r)
        return e.copy_[t] = r, e.assigned_.set(t, !1), !0;
      if (VE(r, i) && (r !== void 0 || Ev(e.base_, t, e.type_)))
        return !0;
      wa(e), ds(e);
    }
    return e.copy_[t] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r, e.assigned_.set(t, !0), e1(e, t, r)), !0;
  },
  deleteProperty(e, t) {
    return wa(e), xu(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_.set(t, !1), ds(e)) : e.assigned_.delete(t), e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const r = Gt(e), n = Reflect.getOwnPropertyDescriptor(r, t);
    return n && {
      [xa]: !0,
      [os]: e.type_ !== 1 || t !== "length",
      [Na]: n[Na],
      [li]: r[t]
    };
  },
  defineProperty() {
    ct(11);
  },
  getPrototypeOf(e) {
    return Pn(e.base_);
  },
  setPrototypeOf() {
    ct(12);
  }
}, si = {};
for (let e in Ra) {
  let t = Ra[e];
  si[e] = function() {
    const r = arguments;
    return r[0] = r[0][0], t.apply(this, r);
  };
}
si.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && ct(13), si.set.call(this, e, t, void 0);
};
si.set = function(e, t, r) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && ct(14), Ra.set.call(this, e[0], t, r, e[0]);
};
function xu(e, t) {
  const r = e[rt];
  return (r ? Gt(r) : e)[t];
}
function r1(e, t, r) {
  const n = Og(t, r);
  return n ? li in n ? n[li] : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    n.get?.call(e.draft_)
  ) : void 0;
}
function Og(e, t) {
  if (!(t in e))
    return;
  let r = Pn(e);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n)
      return n;
    r = Pn(r);
  }
}
function ds(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && ds(e.parent_));
}
function wa(e) {
  e.copy_ || (e.assigned_ = /* @__PURE__ */ new Map(), e.copy_ = us(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var n1 = class {
  constructor(t) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.useStrictIteration_ = !1, this.produce = (r, n, i) => {
      if (Lr(r) && !Lr(n)) {
        const o = n;
        n = r;
        const l = this;
        return function(s = o, ...c) {
          return l.produce(s, (f) => n.call(this, f, ...c));
        };
      }
      Lr(n) || ct(6), i !== void 0 && !Lr(i) && ct(7);
      let a;
      if (kt(r)) {
        const o = jv(this), l = vs(o, r, void 0);
        let u = !0;
        try {
          a = n(l), u = !1;
        } finally {
          u ? cs(o) : fs(o);
        }
        return _v(o, i), Iv(a, o);
      } else if (!r || !vc(r)) {
        if (a = n(r), a === void 0 && (a = r), a === hg && (a = void 0), this.autoFreeze_ && hc(a, !0), i) {
          const o = [], l = [];
          Jr(ss).generateReplacementPatches_(r, a, {
            patches_: o,
            inversePatches_: l
          }), i(o, l);
        }
        return a;
      } else
        ct(1, r);
    }, this.produceWithPatches = (r, n) => {
      if (Lr(r))
        return (l, ...u) => this.produceWithPatches(l, (s) => r(s, ...u));
      let i, a;
      return [this.produce(r, n, (l, u) => {
        i = l, a = u;
      }), i, a];
    }, bu(t?.autoFreeze) && this.setAutoFreeze(t.autoFreeze), bu(t?.useStrictShallowCopy) && this.setUseStrictShallowCopy(t.useStrictShallowCopy), bu(t?.useStrictIteration) && this.setUseStrictIteration(t.useStrictIteration);
  }
  createDraft(t) {
    kt(t) || ct(8), er(t) && (t = Pt(t));
    const r = jv(this), n = vs(r, t, void 0);
    return n[rt].isManual_ = !0, fs(r), n;
  }
  finishDraft(t, r) {
    const n = t && t[rt];
    (!n || !n.isManual_) && ct(9);
    const { scope_: i } = n;
    return _v(i, r), Iv(void 0, i);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(t) {
    this.autoFreeze_ = t;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(t) {
    this.useStrictShallowCopy_ = t;
  }
  /**
   * Pass false to use faster iteration that skips non-enumerable properties
   * but still handles symbols for compatibility.
   *
   * By default, strict iteration is enabled (includes all own properties).
   */
  setUseStrictIteration(t) {
    this.useStrictIteration_ = t;
  }
  shouldUseStrictIteration() {
    return this.useStrictIteration_;
  }
  applyPatches(t, r) {
    let n;
    for (n = r.length - 1; n >= 0; n--) {
      const a = r[n];
      if (a.path.length === 0 && a.op === "replace") {
        t = a.value;
        break;
      }
    }
    n > -1 && (r = r.slice(n + 1));
    const i = Jr(ss).applyPatches_;
    return er(t) ? i(t, r) : this.produce(
      t,
      (a) => i(a, r)
    );
  }
};
function vs(e, t, r, n) {
  const [i, a] = Co(t) ? Jr(Ma).proxyMap_(t, r) : To(t) ? Jr(Ma).proxySet_(t, r) : t1(t, r);
  return (r?.scope_ ?? gg()).drafts_.push(i), a.callbacks_ = r?.callbacks_ ?? [], a.key_ = n, r && n !== void 0 ? QE(r, a, n) : a.callbacks_.push(function(u) {
    u.mapSetPlugin_?.fixSetContents(a);
    const { patchPlugin_: s } = u;
    a.modified_ && s && s.generatePatches_(a, [], u);
  }), i;
}
function Pt(e) {
  return er(e) || ct(10, e), Pg(e);
}
function Pg(e) {
  if (!kt(e) || No(e))
    return e;
  const t = e[rt];
  let r, n = !0;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, r = us(e, t.scope_.immer_.useStrictShallowCopy_), n = t.scope_.immer_.shouldUseStrictIteration();
  } else
    r = us(e, !0);
  return Io(
    r,
    (i, a) => {
      Da(r, i, Pg(a));
    },
    n
  ), t && (t.finalized_ = !1), r;
}
var i1 = new n1(), Eg = i1.produce;
function Ag(e) {
  return ({ dispatch: r, getState: n }) => (i) => (a) => typeof a == "function" ? a(r, n, e) : i(a);
}
var a1 = Ag(), o1 = Ag, l1 = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? Ca : Ca.apply(null, arguments);
}, u1 = (e) => e && typeof e.match == "function";
function pt(e, t) {
  function r(...n) {
    if (t) {
      let i = t(...n);
      if (!i)
        throw new Error(process.env.NODE_ENV === "production" ? ae(0) : "prepareAction did not return an object");
      return {
        type: e,
        payload: i.payload,
        ..."meta" in i && {
          meta: i.meta
        },
        ..."error" in i && {
          error: i.error
        }
      };
    }
    return {
      type: e,
      payload: n[0]
    };
  }
  return r.toString = () => `${e}`, r.type = e, r.match = (n) => dc(n) && n.type === e, r;
}
function s1(e) {
  return typeof e == "function" && "type" in e && // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
  u1(e);
}
function c1(e) {
  const t = e ? `${e}`.split("/") : [], r = t[t.length - 1] || "actionCreator";
  return `Detected an action creator with type "${e || "unknown"}" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${r}())\` instead of \`dispatch(${r})\`. This is necessary even if the action has no payload.`;
}
function f1(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (r) => (n) => r(n);
  const {
    isActionCreator: t = s1
  } = e;
  return () => (r) => (n) => (t(n) && console.warn(c1(n.type)), r(n));
}
function Sg(e, t) {
  let r = 0;
  return {
    measureTime(n) {
      const i = Date.now();
      try {
        return n();
      } finally {
        const a = Date.now();
        r += a - i;
      }
    },
    warnIfExceeded() {
      r > e && console.warn(`${t} took ${r}ms, which is more than the warning threshold of ${e}ms. 
If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.
It is disabled in production builds, so you don't need to worry about that.`);
    }
  };
}
var _g = class ri extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, ri.prototype);
  }
  static get [Symbol.species]() {
    return ri;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new ri(...t[0].concat(this)) : new ri(...t.concat(this));
  }
};
function Cv(e) {
  return kt(e) ? Eg(e, () => {
  }) : e;
}
function na(e, t, r) {
  return e.has(t) ? e.get(t) : e.set(t, r(t)).get(t);
}
function d1(e) {
  return typeof e != "object" || e == null || Object.isFrozen(e);
}
function v1(e, t, r) {
  const n = jg(e, t, r);
  return {
    detectMutations() {
      return Ig(e, t, n, r);
    }
  };
}
function jg(e, t = [], r, n = "", i = /* @__PURE__ */ new Set()) {
  const a = {
    value: r
  };
  if (!e(r) && !i.has(r)) {
    i.add(r), a.children = {};
    const o = t.length > 0;
    for (const l in r) {
      const u = n ? n + "." + l : l;
      o && t.some((c) => c instanceof RegExp ? c.test(u) : u === c) || (a.children[l] = jg(e, t, r[l], u));
    }
  }
  return a;
}
function Ig(e, t = [], r, n, i = !1, a = "") {
  const o = r ? r.value : void 0, l = o === n;
  if (i && !l && !Number.isNaN(n))
    return {
      wasMutated: !0,
      path: a
    };
  if (e(o) || e(n))
    return {
      wasMutated: !1
    };
  const u = {};
  for (let c in r.children)
    u[c] = !0;
  for (let c in n)
    u[c] = !0;
  const s = t.length > 0;
  for (let c in u) {
    const f = a ? a + "." + c : c;
    if (s && t.some((p) => p instanceof RegExp ? p.test(f) : f === p))
      continue;
    const d = Ig(e, t, r.children[c], n[c], l, f);
    if (d.wasMutated)
      return d;
  }
  return {
    wasMutated: !1
  };
}
function p1(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (t) => (r) => t(r);
  {
    let t = function(l, u, s, c) {
      return JSON.stringify(l, r(u, c), s);
    }, r = function(l, u) {
      let s = [], c = [];
      return u || (u = function(f, d) {
        return s[0] === d ? "[Circular ~]" : "[Circular ~." + c.slice(0, s.indexOf(d)).join(".") + "]";
      }), function(f, d) {
        if (s.length > 0) {
          var v = s.indexOf(this);
          ~v ? s.splice(v + 1) : s.push(this), ~v ? c.splice(v, 1 / 0, f) : c.push(f), ~s.indexOf(d) && (d = u.call(this, f, d));
        } else s.push(d);
        return l == null ? d : l.call(this, f, d);
      };
    }, {
      isImmutable: n = d1,
      ignoredPaths: i,
      warnAfter: a = 32
    } = e;
    const o = v1.bind(null, n, i);
    return ({
      getState: l
    }) => {
      let u = l(), s = o(u), c;
      return (f) => (d) => {
        const v = Sg(a, "ImmutableStateInvariantMiddleware");
        v.measureTime(() => {
          if (u = l(), c = s.detectMutations(), s = o(u), c.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? ae(19) : `A state mutation was detected between dispatches, in the path '${c.path || ""}'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        });
        const p = f(d);
        return v.measureTime(() => {
          if (u = l(), c = s.detectMutations(), s = o(u), c.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? ae(20) : `A state mutation was detected inside a dispatch, in the path: ${c.path || ""}. Take a look at the reducer(s) handling the action ${t(d)}. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        }), v.warnIfExceeded(), p;
      };
    };
  }
}
function kg(e) {
  const t = typeof e;
  return e == null || t === "string" || t === "boolean" || t === "number" || Array.isArray(e) || Si(e);
}
function ps(e, t = "", r = kg, n, i = [], a) {
  let o;
  if (!r(e))
    return {
      keyPath: t || "<root>",
      value: e
    };
  if (typeof e != "object" || e === null || a?.has(e)) return !1;
  const l = n != null ? n(e) : Object.entries(e), u = i.length > 0;
  for (const [s, c] of l) {
    const f = t ? t + "." + s : s;
    if (!(u && i.some((v) => v instanceof RegExp ? v.test(f) : f === v))) {
      if (!r(c))
        return {
          keyPath: f,
          value: c
        };
      if (typeof c == "object" && (o = ps(c, f, r, n, i, a), o))
        return o;
    }
  }
  return a && Cg(e) && a.add(e), !1;
}
function Cg(e) {
  if (!Object.isFrozen(e)) return !1;
  for (const t of Object.values(e))
    if (!(typeof t != "object" || t === null) && !Cg(t))
      return !1;
  return !0;
}
function h1(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (t) => (r) => t(r);
  {
    const {
      isSerializable: t = kg,
      getEntries: r,
      ignoredActions: n = [],
      ignoredActionPaths: i = ["meta.arg", "meta.baseQueryMeta"],
      ignoredPaths: a = [],
      warnAfter: o = 32,
      ignoreState: l = !1,
      ignoreActions: u = !1,
      disableCache: s = !1
    } = e, c = !s && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
    return (f) => (d) => (v) => {
      if (!dc(v))
        return d(v);
      const p = d(v), m = Sg(o, "SerializableStateInvariantMiddleware");
      return !u && !(n.length && n.indexOf(v.type) !== -1) && m.measureTime(() => {
        const h = ps(v, "", t, r, i, c);
        if (h) {
          const {
            keyPath: y,
            value: b
          } = h;
          console.error(`A non-serializable value was detected in an action, in the path: \`${y}\`. Value:`, b, `
Take a look at the logic that dispatched this action: `, v, `
(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)`, `
(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)`);
        }
      }), l || (m.measureTime(() => {
        const h = f.getState(), y = ps(h, "", t, r, a, c);
        if (y) {
          const {
            keyPath: b,
            value: x
          } = y;
          console.error(`A non-serializable value was detected in the state, in the path: \`${b}\`. Value:`, x, `
Take a look at the reducer(s) handling this action type: ${v.type}.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`);
        }
      }), m.warnIfExceeded()), p;
    };
  }
}
function ia(e) {
  return typeof e == "boolean";
}
var m1 = () => function(t) {
  const {
    thunk: r = !0,
    immutableCheck: n = !0,
    serializableCheck: i = !0,
    actionCreatorCheck: a = !0
  } = t ?? {};
  let o = new _g();
  if (r && (ia(r) ? o.push(a1) : o.push(o1(r.extraArgument))), process.env.NODE_ENV !== "production") {
    if (n) {
      let l = {};
      ia(n) || (l = n), o.unshift(p1(l));
    }
    if (i) {
      let l = {};
      ia(i) || (l = i), o.push(h1(l));
    }
    if (a) {
      let l = {};
      ia(a) || (l = a), o.unshift(f1(l));
    }
  }
  return o;
}, Tg = "RTK_autoBatch", me = () => (e) => ({
  payload: e,
  meta: {
    [Tg]: !0
  }
}), Tv = (e) => (t) => {
  setTimeout(t, e);
}, Ng = (e = {
  type: "raf"
}) => (t) => (...r) => {
  const n = t(...r);
  let i = !0, a = !1, o = !1;
  const l = /* @__PURE__ */ new Set(), u = e.type === "tick" ? queueMicrotask : e.type === "raf" ? (
    // requestAnimationFrame won't exist in SSR environments. Fall back to a vague approximation just to keep from erroring.
    typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Tv(10)
  ) : e.type === "callback" ? e.queueNotification : Tv(e.timeout), s = () => {
    o = !1, a && (a = !1, l.forEach((c) => c()));
  };
  return Object.assign({}, n, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(c) {
      const f = () => i && c(), d = n.subscribe(f);
      return l.add(c), () => {
        d(), l.delete(c);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(c) {
      try {
        return i = !c?.meta?.[Tg], a = !i, a && (o || (o = !0, u(s))), n.dispatch(c);
      } finally {
        i = !0;
      }
    }
  });
}, y1 = (e) => function(r) {
  const {
    autoBatch: n = !0
  } = r ?? {};
  let i = new _g(e);
  return n && i.push(Ng(typeof n == "object" ? n : void 0)), i;
};
function g1(e) {
  const t = m1(), {
    reducer: r = void 0,
    middleware: n,
    devTools: i = !0,
    duplicateMiddlewareCheck: a = !0,
    preloadedState: o = void 0,
    enhancers: l = void 0
  } = e || {};
  let u;
  if (typeof r == "function")
    u = r;
  else if (Si(r))
    u = pg(r);
  else
    throw new Error(process.env.NODE_ENV === "production" ? ae(1) : "`reducer` is a required argument, and must be a function or an object of functions that can be passed to combineReducers");
  if (process.env.NODE_ENV !== "production" && n && typeof n != "function")
    throw new Error(process.env.NODE_ENV === "production" ? ae(2) : "`middleware` field must be a callback");
  let s;
  if (typeof n == "function") {
    if (s = n(t), process.env.NODE_ENV !== "production" && !Array.isArray(s))
      throw new Error(process.env.NODE_ENV === "production" ? ae(3) : "when using a middleware builder function, an array of middleware must be returned");
  } else
    s = t();
  if (process.env.NODE_ENV !== "production" && s.some((m) => typeof m != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? ae(4) : "each middleware provided to configureStore must be a function");
  if (process.env.NODE_ENV !== "production" && a) {
    let m = /* @__PURE__ */ new Set();
    s.forEach((h) => {
      if (m.has(h))
        throw new Error(process.env.NODE_ENV === "production" ? ae(42) : "Duplicate middleware references found when creating the store. Ensure that each middleware is only included once.");
      m.add(h);
    });
  }
  let c = Ca;
  i && (c = l1({
    // Enable capture of stack traces for dispatched Redux actions
    trace: process.env.NODE_ENV !== "production",
    ...typeof i == "object" && i
  }));
  const f = KE(...s), d = y1(f);
  if (process.env.NODE_ENV !== "production" && l && typeof l != "function")
    throw new Error(process.env.NODE_ENV === "production" ? ae(5) : "`enhancers` field must be a callback");
  let v = typeof l == "function" ? l(d) : d();
  if (process.env.NODE_ENV !== "production" && !Array.isArray(v))
    throw new Error(process.env.NODE_ENV === "production" ? ae(6) : "`enhancers` callback must return an array");
  if (process.env.NODE_ENV !== "production" && v.some((m) => typeof m != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? ae(7) : "each enhancer provided to configureStore must be a function");
  process.env.NODE_ENV !== "production" && s.length && !v.includes(f) && console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
  const p = c(...v);
  return vg(u, o, p);
}
function Dg(e) {
  const t = {}, r = [];
  let n;
  const i = {
    addCase(a, o) {
      if (process.env.NODE_ENV !== "production") {
        if (r.length > 0)
          throw new Error(process.env.NODE_ENV === "production" ? ae(26) : "`builder.addCase` should only be called before calling `builder.addMatcher`");
        if (n)
          throw new Error(process.env.NODE_ENV === "production" ? ae(27) : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
      }
      const l = typeof a == "string" ? a : a.type;
      if (!l)
        throw new Error(process.env.NODE_ENV === "production" ? ae(28) : "`builder.addCase` cannot be called with an empty action type");
      if (l in t)
        throw new Error(process.env.NODE_ENV === "production" ? ae(29) : `\`builder.addCase\` cannot be called with two reducers for the same action type '${l}'`);
      return t[l] = o, i;
    },
    addAsyncThunk(a, o) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? ae(43) : "`builder.addAsyncThunk` should only be called before calling `builder.addDefaultCase`");
      return o.pending && (t[a.pending.type] = o.pending), o.rejected && (t[a.rejected.type] = o.rejected), o.fulfilled && (t[a.fulfilled.type] = o.fulfilled), o.settled && r.push({
        matcher: a.settled,
        reducer: o.settled
      }), i;
    },
    addMatcher(a, o) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? ae(30) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
      return r.push({
        matcher: a,
        reducer: o
      }), i;
    },
    addDefaultCase(a) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? ae(31) : "`builder.addDefaultCase` can only be called once");
      return n = a, i;
    }
  };
  return e(i), [t, r, n];
}
function b1(e) {
  return typeof e == "function";
}
function x1(e, t) {
  if (process.env.NODE_ENV !== "production" && typeof t == "object")
    throw new Error(process.env.NODE_ENV === "production" ? ae(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [r, n, i] = Dg(t), a;
  if (b1(e))
    a = () => Cv(e());
  else {
    const l = Cv(e);
    a = () => l;
  }
  function o(l = a(), u) {
    let s = [r[u.type], ...n.filter(({
      matcher: c
    }) => c(u)).map(({
      reducer: c
    }) => c)];
    return s.filter((c) => !!c).length === 0 && (s = [i]), s.reduce((c, f) => {
      if (f)
        if (er(c)) {
          const v = f(c, u);
          return v === void 0 ? c : v;
        } else {
          if (kt(c))
            return Eg(c, (d) => f(d, u));
          {
            const d = f(c, u);
            if (d === void 0) {
              if (c === null)
                return c;
              throw Error("A case reducer on a non-draftable value must not return undefined");
            }
            return d;
          }
        }
      return c;
    }, l);
  }
  return o.getInitialState = a, o;
}
var w1 = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", O1 = (e = 21) => {
  let t = "", r = e;
  for (; r--; )
    t += w1[Math.random() * 64 | 0];
  return t;
}, P1 = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function E1(e, t) {
  return `${e}/${t}`;
}
function A1({
  creators: e
} = {}) {
  const t = e?.asyncThunk?.[P1];
  return function(n) {
    const {
      name: i,
      reducerPath: a = i
    } = n;
    if (!i)
      throw new Error(process.env.NODE_ENV === "production" ? ae(11) : "`name` is a required option for createSlice");
    typeof process < "u" && process.env.NODE_ENV === "development" && n.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const o = (typeof n.reducers == "function" ? n.reducers(_1()) : n.reducers) || {}, l = Object.keys(o), u = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, s = {
      addCase(x, w) {
        const P = typeof x == "string" ? x : x.type;
        if (!P)
          throw new Error(process.env.NODE_ENV === "production" ? ae(12) : "`context.addCase` cannot be called with an empty action type");
        if (P in u.sliceCaseReducersByType)
          throw new Error(process.env.NODE_ENV === "production" ? ae(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + P);
        return u.sliceCaseReducersByType[P] = w, s;
      },
      addMatcher(x, w) {
        return u.sliceMatchers.push({
          matcher: x,
          reducer: w
        }), s;
      },
      exposeAction(x, w) {
        return u.actionCreators[x] = w, s;
      },
      exposeCaseReducer(x, w) {
        return u.sliceCaseReducersByName[x] = w, s;
      }
    };
    l.forEach((x) => {
      const w = o[x], P = {
        reducerName: x,
        type: E1(i, x),
        createNotation: typeof n.reducers == "function"
      };
      I1(w) ? C1(P, w, s, t) : j1(P, w, s);
    });
    function c() {
      if (process.env.NODE_ENV !== "production" && typeof n.extraReducers == "object")
        throw new Error(process.env.NODE_ENV === "production" ? ae(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [x = {}, w = [], P = void 0] = typeof n.extraReducers == "function" ? Dg(n.extraReducers) : [n.extraReducers], O = {
        ...x,
        ...u.sliceCaseReducersByType
      };
      return x1(n.initialState, (A) => {
        for (let _ in O)
          A.addCase(_, O[_]);
        for (let _ of u.sliceMatchers)
          A.addMatcher(_.matcher, _.reducer);
        for (let _ of w)
          A.addMatcher(_.matcher, _.reducer);
        P && A.addDefaultCase(P);
      });
    }
    const f = (x) => x, d = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new WeakMap();
    let p;
    function m(x, w) {
      return p || (p = c()), p(x, w);
    }
    function h() {
      return p || (p = c()), p.getInitialState();
    }
    function y(x, w = !1) {
      function P(A) {
        let _ = A[x];
        if (typeof _ > "u") {
          if (w)
            _ = na(v, P, h);
          else if (process.env.NODE_ENV !== "production")
            throw new Error(process.env.NODE_ENV === "production" ? ae(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return _;
      }
      function O(A = f) {
        const _ = na(d, w, () => /* @__PURE__ */ new WeakMap());
        return na(_, A, () => {
          const C = {};
          for (const [T, N] of Object.entries(n.selectors ?? {}))
            C[T] = S1(N, A, () => na(v, A, h), w);
          return C;
        });
      }
      return {
        reducerPath: x,
        getSelectors: O,
        get selectors() {
          return O(P);
        },
        selectSlice: P
      };
    }
    const b = {
      name: i,
      reducer: m,
      actions: u.actionCreators,
      caseReducers: u.sliceCaseReducersByName,
      getInitialState: h,
      ...y(a),
      injectInto(x, {
        reducerPath: w,
        ...P
      } = {}) {
        const O = w ?? a;
        return x.inject({
          reducerPath: O,
          reducer: m
        }, P), {
          ...b,
          ...y(O, !0)
        };
      }
    };
    return b;
  };
}
function S1(e, t, r, n) {
  function i(a, ...o) {
    let l = t(a);
    if (typeof l > "u") {
      if (n)
        l = r();
      else if (process.env.NODE_ENV !== "production")
        throw new Error(process.env.NODE_ENV === "production" ? ae(16) : "selectState returned undefined for an uninjected slice reducer");
    }
    return e(l, ...o);
  }
  return i.unwrapped = e, i;
}
var Je = /* @__PURE__ */ A1();
function _1() {
  function e(t, r) {
    return {
      _reducerDefinitionType: "asyncThunk",
      payloadCreator: t,
      ...r
    };
  }
  return e.withTypes = () => e, {
    reducer(t) {
      return Object.assign({
        // hack so the wrapping function has the same name as the original
        // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
        [t.name](...r) {
          return t(...r);
        }
      }[t.name], {
        _reducerDefinitionType: "reducer"
        /* reducer */
      });
    },
    preparedReducer(t, r) {
      return {
        _reducerDefinitionType: "reducerWithPrepare",
        prepare: t,
        reducer: r
      };
    },
    asyncThunk: e
  };
}
function j1({
  type: e,
  reducerName: t,
  createNotation: r
}, n, i) {
  let a, o;
  if ("reducer" in n) {
    if (r && !k1(n))
      throw new Error(process.env.NODE_ENV === "production" ? ae(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    a = n.reducer, o = n.prepare;
  } else
    a = n;
  i.addCase(e, a).exposeCaseReducer(t, a).exposeAction(t, o ? pt(e, o) : pt(e));
}
function I1(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function k1(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function C1({
  type: e,
  reducerName: t
}, r, n, i) {
  if (!i)
    throw new Error(process.env.NODE_ENV === "production" ? ae(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  const {
    payloadCreator: a,
    fulfilled: o,
    pending: l,
    rejected: u,
    settled: s,
    options: c
  } = r, f = i(e, a, c);
  n.exposeAction(t, f), o && n.addCase(f.fulfilled, o), l && n.addCase(f.pending, l), u && n.addCase(f.rejected, u), s && n.addMatcher(f.settled, s), n.exposeCaseReducer(t, {
    fulfilled: o || aa,
    pending: l || aa,
    rejected: u || aa,
    settled: s || aa
  });
}
function aa() {
}
var T1 = "task", Mg = "listener", $g = "completed", mc = "cancelled", N1 = `task-${mc}`, D1 = `task-${$g}`, hs = `${Mg}-${mc}`, M1 = `${Mg}-${$g}`, Mo = class {
  constructor(e) {
    this.code = e, this.message = `${T1} ${mc} (reason: ${e})`;
  }
  name = "TaskAbortError";
  message;
}, yc = (e, t) => {
  if (typeof e != "function")
    throw new TypeError(process.env.NODE_ENV === "production" ? ae(32) : `${t} is not a function`);
}, La = () => {
}, Rg = (e, t = La) => (e.catch(t), e), Lg = (e, t) => (e.addEventListener("abort", t, {
  once: !0
}), () => e.removeEventListener("abort", t)), qr = (e) => {
  if (e.aborted)
    throw new Mo(e.reason);
};
function zg(e, t) {
  let r = La;
  return new Promise((n, i) => {
    const a = () => i(new Mo(e.reason));
    if (e.aborted) {
      a();
      return;
    }
    r = Lg(e, a), t.finally(() => r()).then(n, i);
  }).finally(() => {
    r = La;
  });
}
var $1 = async (e, t) => {
  try {
    return await Promise.resolve(), {
      status: "ok",
      value: await e()
    };
  } catch (r) {
    return {
      status: r instanceof Mo ? "cancelled" : "rejected",
      error: r
    };
  } finally {
    t?.();
  }
}, za = (e) => (t) => Rg(zg(e, t).then((r) => (qr(e), r))), Bg = (e) => {
  const t = za(e);
  return (r) => t(new Promise((n) => setTimeout(n, r)));
}, {
  assign: bn
} = Object, Nv = {}, ji = "listenerMiddleware", R1 = (e, t) => {
  const r = (n) => Lg(e, () => n.abort(e.reason));
  return (n, i) => {
    yc(n, "taskExecutor");
    const a = new AbortController();
    r(a);
    const o = $1(async () => {
      qr(e), qr(a.signal);
      const l = await n({
        pause: za(a.signal),
        delay: Bg(a.signal),
        signal: a.signal
      });
      return qr(a.signal), l;
    }, () => a.abort(D1));
    return i?.autoJoin && t.push(o.catch(La)), {
      result: za(e)(o),
      cancel() {
        a.abort(N1);
      }
    };
  };
}, L1 = (e, t) => {
  const r = async (n, i) => {
    qr(t);
    let a = () => {
    };
    const l = [new Promise((u, s) => {
      let c = e({
        predicate: n,
        effect: (f, d) => {
          d.unsubscribe(), u([f, d.getState(), d.getOriginalState()]);
        }
      });
      a = () => {
        c(), s();
      };
    })];
    i != null && l.push(new Promise((u) => setTimeout(u, i, null)));
    try {
      const u = await zg(t, Promise.race(l));
      return qr(t), u;
    } finally {
      a();
    }
  };
  return (n, i) => Rg(r(n, i));
}, Fg = (e) => {
  let {
    type: t,
    actionCreator: r,
    matcher: n,
    predicate: i,
    effect: a
  } = e;
  if (t)
    i = pt(t).match;
  else if (r)
    t = r.type, i = r.match;
  else if (n)
    i = n;
  else if (!i) throw new Error(process.env.NODE_ENV === "production" ? ae(21) : "Creating or removing a listener requires one of the known fields for matching an action");
  return yc(a, "options.listener"), {
    predicate: i,
    type: t,
    effect: a
  };
}, Wg = /* @__PURE__ */ bn((e) => {
  const {
    type: t,
    predicate: r,
    effect: n
  } = Fg(e);
  return {
    id: O1(),
    effect: n,
    type: t,
    predicate: r,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(process.env.NODE_ENV === "production" ? ae(22) : "Unsubscribe not initialized");
    }
  };
}, {
  withTypes: () => Wg
}), Dv = (e, t) => {
  const {
    type: r,
    effect: n,
    predicate: i
  } = Fg(t);
  return Array.from(e.values()).find((a) => (typeof r == "string" ? a.type === r : a.predicate === i) && a.effect === n);
}, ms = (e) => {
  e.pending.forEach((t) => {
    t.abort(hs);
  });
}, z1 = (e, t) => () => {
  for (const r of t.keys())
    ms(r);
  e.clear();
}, Mv = (e, t, r) => {
  try {
    e(t, r);
  } catch (n) {
    setTimeout(() => {
      throw n;
    }, 0);
  }
}, Kg = /* @__PURE__ */ bn(/* @__PURE__ */ pt(`${ji}/add`), {
  withTypes: () => Kg
}), B1 = /* @__PURE__ */ pt(`${ji}/removeAll`), qg = /* @__PURE__ */ bn(/* @__PURE__ */ pt(`${ji}/remove`), {
  withTypes: () => qg
}), F1 = (...e) => {
  console.error(`${ji}/error`, ...e);
}, Ii = (e = {}) => {
  const t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), n = (v) => {
    const p = r.get(v) ?? 0;
    r.set(v, p + 1);
  }, i = (v) => {
    const p = r.get(v) ?? 1;
    p === 1 ? r.delete(v) : r.set(v, p - 1);
  }, {
    extra: a,
    onError: o = F1
  } = e;
  yc(o, "onError");
  const l = (v) => (v.unsubscribe = () => t.delete(v.id), t.set(v.id, v), (p) => {
    v.unsubscribe(), p?.cancelActive && ms(v);
  }), u = (v) => {
    const p = Dv(t, v) ?? Wg(v);
    return l(p);
  };
  bn(u, {
    withTypes: () => u
  });
  const s = (v) => {
    const p = Dv(t, v);
    return p && (p.unsubscribe(), v.cancelActive && ms(p)), !!p;
  };
  bn(s, {
    withTypes: () => s
  });
  const c = async (v, p, m, h) => {
    const y = new AbortController(), b = L1(u, y.signal), x = [];
    try {
      v.pending.add(y), n(v), await Promise.resolve(v.effect(
        p,
        // Use assign() rather than ... to avoid extra helper functions added to bundle
        bn({}, m, {
          getOriginalState: h,
          condition: (w, P) => b(w, P).then(Boolean),
          take: b,
          delay: Bg(y.signal),
          pause: za(y.signal),
          extra: a,
          signal: y.signal,
          fork: R1(y.signal, x),
          unsubscribe: v.unsubscribe,
          subscribe: () => {
            t.set(v.id, v);
          },
          cancelActiveListeners: () => {
            v.pending.forEach((w, P, O) => {
              w !== y && (w.abort(hs), O.delete(w));
            });
          },
          cancel: () => {
            y.abort(hs), v.pending.delete(y);
          },
          throwIfCancelled: () => {
            qr(y.signal);
          }
        })
      ));
    } catch (w) {
      w instanceof Mo || Mv(o, w, {
        raisedBy: "effect"
      });
    } finally {
      await Promise.all(x), y.abort(M1), i(v), v.pending.delete(y);
    }
  }, f = z1(t, r);
  return {
    middleware: (v) => (p) => (m) => {
      if (!dc(m))
        return p(m);
      if (Kg.match(m))
        return u(m.payload);
      if (B1.match(m)) {
        f();
        return;
      }
      if (qg.match(m))
        return s(m.payload);
      let h = v.getState();
      const y = () => {
        if (h === Nv)
          throw new Error(process.env.NODE_ENV === "production" ? ae(23) : `${ji}: getOriginalState can only be called synchronously`);
        return h;
      };
      let b;
      try {
        if (b = p(m), t.size > 0) {
          const x = v.getState(), w = Array.from(t.values());
          for (const P of w) {
            let O = !1;
            try {
              O = P.predicate(m, x, h);
            } catch (A) {
              O = !1, Mv(o, A, {
                raisedBy: "predicate"
              });
            }
            O && c(P, m, v, y);
          }
        }
      } finally {
        h = Nv;
      }
      return b;
    },
    startListening: u,
    stopListening: s,
    clearListeners: f
  };
};
function ae(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var W1 = {
  layoutType: "horizontal",
  width: 0,
  height: 0,
  margin: {
    top: 5,
    right: 5,
    bottom: 5,
    left: 5
  },
  scale: 1
}, Ug = Je({
  name: "chartLayout",
  initialState: W1,
  reducers: {
    setLayout(e, t) {
      e.layoutType = t.payload;
    },
    setChartSize(e, t) {
      e.width = t.payload.width, e.height = t.payload.height;
    },
    setMargin(e, t) {
      var r, n, i, a;
      e.margin.top = (r = t.payload.top) !== null && r !== void 0 ? r : 0, e.margin.right = (n = t.payload.right) !== null && n !== void 0 ? n : 0, e.margin.bottom = (i = t.payload.bottom) !== null && i !== void 0 ? i : 0, e.margin.left = (a = t.payload.left) !== null && a !== void 0 ? a : 0;
    },
    setScale(e, t) {
      e.scale = t.payload;
    }
  }
}), {
  setMargin: K1,
  setLayout: q1,
  setChartSize: U1,
  setScale: V1
} = Ug.actions, H1 = Ug.reducer;
function Vg(e, t, r) {
  return Array.isArray(e) && e && t + r !== 0 ? e.slice(t, r + 1) : e;
}
function G(e) {
  return Number.isFinite(e);
}
function Wt(e) {
  return typeof e == "number" && e > 0 && Number.isFinite(e);
}
function $v(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function mn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $v(Object(r), !0).forEach(function(n) {
      G1(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $v(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function G1(e, t, r) {
  return (t = Y1(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Y1(e) {
  var t = X1(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function X1(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function le(e, t, r) {
  return ge(e) || ge(t) ? r : Ft(t) ? Xr(e, t, r) : typeof t == "function" ? t(e) : r;
}
var Z1 = (e, t, r) => {
  if (t && r) {
    var {
      width: n,
      height: i
    } = r, {
      align: a,
      verticalAlign: o,
      layout: l
    } = t;
    if ((l === "vertical" || l === "horizontal" && o === "middle") && a !== "center" && L(e[a]))
      return mn(mn({}, e), {}, {
        [a]: e[a] + (n || 0)
      });
    if ((l === "horizontal" || l === "vertical" && a === "center") && o !== "middle" && L(e[o]))
      return mn(mn({}, e), {}, {
        [o]: e[o] + (i || 0)
      });
  }
  return e;
}, Tt = (e, t) => e === "horizontal" && t === "xAxis" || e === "vertical" && t === "yAxis" || e === "centric" && t === "angleAxis" || e === "radial" && t === "radiusAxis", Hg = (e, t, r, n) => {
  if (n)
    return e.map((l) => l.coordinate);
  var i, a, o = e.map((l) => (l.coordinate === t && (i = !0), l.coordinate === r && (a = !0), l.coordinate));
  return i || o.push(t), a || o.push(r), o;
}, Gg = (e, t, r) => {
  if (!e)
    return null;
  var {
    duplicateDomain: n,
    type: i,
    range: a,
    scale: o,
    realScaleType: l,
    isCategorical: u,
    categoricalDomain: s,
    tickCount: c,
    ticks: f,
    niceTicks: d,
    axisType: v
  } = e;
  if (!o)
    return null;
  var p = l === "scaleBand" && o.bandwidth ? o.bandwidth() / 2 : 2, m = i === "category" && o.bandwidth ? o.bandwidth() / p : 0;
  if (m = v === "angleAxis" && a && a.length >= 2 ? Be(a[0] - a[1]) * 2 * m : m, f || d) {
    var h = (f || d || []).map((y, b) => {
      var x = n ? n.indexOf(y) : y, w = o.map(x);
      return G(w) ? {
        // If the scaleContent is not a number, the coordinate will be NaN.
        // That could be the case for example with a PointScale and a string as domain.
        coordinate: w + m,
        value: y,
        offset: m,
        index: b
      } : null;
    }).filter(at);
    return h;
  }
  return u && s ? s.map((y, b) => {
    var x = o.map(y);
    return G(x) ? {
      coordinate: x + m,
      value: y,
      index: b,
      offset: m
    } : null;
  }).filter(at) : o.ticks && c != null ? o.ticks(c).map((y, b) => {
    var x = o.map(y);
    return G(x) ? {
      coordinate: x + m,
      value: y,
      index: b,
      offset: m
    } : null;
  }).filter(at) : o.domain().map((y, b) => {
    var x = o.map(y);
    return G(x) ? {
      coordinate: x + m,
      // @ts-expect-error can't use Date as an index
      value: n ? n[y] : y,
      index: b,
      offset: m
    } : null;
  }).filter(at);
}, J1 = (e, t) => {
  if (!t || t.length !== 2 || !L(t[0]) || !L(t[1]))
    return e;
  var r = Math.min(t[0], t[1]), n = Math.max(t[0], t[1]), i = [e[0], e[1]];
  return (!L(e[0]) || e[0] < r) && (i[0] = r), (!L(e[1]) || e[1] > n) && (i[1] = n), i[0] > n && (i[0] = n), i[1] < r && (i[1] = r), i;
}, Q1 = (e) => {
  var t, r = e.length;
  if (!(r <= 0)) {
    var n = (t = e[0]) === null || t === void 0 ? void 0 : t.length;
    if (!(n == null || n <= 0))
      for (var i = 0; i < n; ++i)
        for (var a = 0, o = 0, l = 0; l < r; ++l) {
          var u = e[l], s = u?.[i];
          if (s != null) {
            var c = s[1], f = s[0], d = It(c) ? f : c;
            d >= 0 ? (s[0] = a, a += d, s[1] = a) : (s[0] = o, o += d, s[1] = o);
          }
        }
  }
}, eA = (e) => {
  var t, r = e.length;
  if (!(r <= 0)) {
    var n = (t = e[0]) === null || t === void 0 ? void 0 : t.length;
    if (!(n == null || n <= 0))
      for (var i = 0; i < n; ++i)
        for (var a = 0, o = 0; o < r; ++o) {
          var l = e[o], u = l?.[i];
          if (u != null) {
            var s = It(u[1]) ? u[0] : u[1];
            s >= 0 ? (u[0] = a, a += s, u[1] = a) : (u[0] = 0, u[1] = 0);
          }
        }
  }
}, tA = {
  sign: Q1,
  // @ts-expect-error definitelytyped types are incorrect
  expand: iP,
  // @ts-expect-error definitelytyped types are incorrect
  none: Yr,
  // @ts-expect-error definitelytyped types are incorrect
  silhouette: aP,
  // @ts-expect-error definitelytyped types are incorrect
  wiggle: oP,
  positive: eA
}, rA = (e, t, r) => {
  var n, i = (n = tA[r]) !== null && n !== void 0 ? n : Yr, a = nP().keys(t).value((l, u) => Number(le(l, u, 0))).order(is).offset(i), o = a(e);
  return o.forEach((l, u) => {
    l.forEach((s, c) => {
      var f = le(e[c], t[u], 0);
      Array.isArray(f) && f.length === 2 && L(f[0]) && L(f[1]) && (s[0] = f[0], s[1] = f[1]);
    });
  }), o;
};
function Yg(e) {
  return e == null ? void 0 : String(e);
}
function Ba(e) {
  var {
    axis: t,
    ticks: r,
    bandSize: n,
    entry: i,
    index: a,
    dataKey: o
  } = e;
  if (t.type === "category") {
    if (!t.allowDuplicatedCategory && t.dataKey && !ge(i[t.dataKey])) {
      var l = Hy(r, "value", i[t.dataKey]);
      if (l)
        return l.coordinate + n / 2;
    }
    return r != null && r[a] ? r[a].coordinate + n / 2 : null;
  }
  var u = le(i, ge(o) ? t.dataKey : o), s = t.scale.map(u);
  return L(s) ? s : null;
}
var Rv = (e) => {
  var {
    axis: t,
    ticks: r,
    offset: n,
    bandSize: i,
    entry: a,
    index: o
  } = e;
  if (t.type === "category")
    return r[o] ? r[o].coordinate + n : null;
  var l = le(a, t.dataKey, t.scale.domain()[o]);
  if (ge(l))
    return null;
  var u = t.scale.map(l);
  return L(u) ? u - i / 2 + n : null;
}, nA = (e) => {
  var {
    numericAxis: t
  } = e, r = t.scale.domain();
  if (t.type === "number") {
    var n = Math.min(r[0], r[1]), i = Math.max(r[0], r[1]);
    return n <= 0 && i >= 0 ? 0 : i < 0 ? i : n;
  }
  return r[0];
}, iA = (e) => {
  var t = e.flat(2).filter(L);
  return [Math.min(...t), Math.max(...t)];
}, aA = (e) => [e[0] === 1 / 0 ? 0 : e[0], e[1] === -1 / 0 ? 0 : e[1]], oA = (e, t, r) => {
  if (e != null)
    return aA(Object.keys(e).reduce((n, i) => {
      var a = e[i];
      if (!a)
        return n;
      var {
        stackedData: o
      } = a, l = o.reduce((u, s) => {
        var c = Vg(s, t, r), f = iA(c);
        return !G(f[0]) || !G(f[1]) ? u : [Math.min(u[0], f[0]), Math.max(u[1], f[1])];
      }, [1 / 0, -1 / 0]);
      return [Math.min(l[0], n[0]), Math.max(l[1], n[1])];
    }, [1 / 0, -1 / 0]));
}, Lv = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, zv = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, wr = (e, t, r) => {
  if (e && e.scale && e.scale.bandwidth) {
    var n = e.scale.bandwidth();
    if (!r || n > 0)
      return n;
  }
  if (e && t && t.length >= 2) {
    for (var i = _o(t, (c) => c.coordinate), a = 1 / 0, o = 1, l = i.length; o < l; o++) {
      var u = i[o], s = i[o - 1];
      a = Math.min((u?.coordinate || 0) - (s?.coordinate || 0), a);
    }
    return a === 1 / 0 ? 0 : a;
  }
  return r ? void 0 : 0;
};
function Bv(e) {
  var {
    tooltipEntrySettings: t,
    dataKey: r,
    payload: n,
    value: i,
    name: a
  } = e;
  return mn(mn({}, t), {}, {
    dataKey: r,
    payload: n,
    value: i,
    name: a
  });
}
function Ar(e, t) {
  if (e)
    return String(e);
  if (typeof t == "string")
    return t;
}
var lA = (e, t) => {
  if (t === "horizontal")
    return e.relativeX;
  if (t === "vertical")
    return e.relativeY;
}, uA = (e, t) => t === "centric" ? e.angle : e.radius, or = (e) => e.layout.width, lr = (e) => e.layout.height, sA = (e) => e.layout.scale, Xg = (e) => e.layout.margin, $o = S((e) => e.cartesianAxis.xAxis, (e) => Object.values(e)), Ro = S((e) => e.cartesianAxis.yAxis, (e) => Object.values(e)), Zg = "data-recharts-item-index", Jg = "data-recharts-item-id", ki = 60;
function Fv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function oa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Fv(Object(r), !0).forEach(function(n) {
      cA(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function cA(e, t, r) {
  return (t = fA(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function fA(e) {
  var t = dA(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function dA(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var vA = (e) => e.brush.height;
function pA(e) {
  var t = Ro(e);
  return t.reduce((r, n) => {
    if (n.orientation === "left" && !n.mirror && !n.hide) {
      var i = typeof n.width == "number" ? n.width : ki;
      return r + i;
    }
    return r;
  }, 0);
}
function hA(e) {
  var t = Ro(e);
  return t.reduce((r, n) => {
    if (n.orientation === "right" && !n.mirror && !n.hide) {
      var i = typeof n.width == "number" ? n.width : ki;
      return r + i;
    }
    return r;
  }, 0);
}
function mA(e) {
  var t = $o(e);
  return t.reduce((r, n) => n.orientation === "top" && !n.mirror && !n.hide ? r + n.height : r, 0);
}
function yA(e) {
  var t = $o(e);
  return t.reduce((r, n) => n.orientation === "bottom" && !n.mirror && !n.hide ? r + n.height : r, 0);
}
var $e = S([or, lr, Xg, vA, pA, hA, mA, yA, fg, CE], (e, t, r, n, i, a, o, l, u, s) => {
  var c = {
    left: (r.left || 0) + i,
    right: (r.right || 0) + a
  }, f = {
    top: (r.top || 0) + o,
    bottom: (r.bottom || 0) + l
  }, d = oa(oa({}, f), c), v = d.bottom;
  d.bottom += n, d = Z1(d, u, s);
  var p = e - d.left - d.right, m = t - d.top - d.bottom;
  return oa(oa({
    brushBottom: v
  }, d), {}, {
    // never return negative values for height and width
    width: Math.max(p, 0),
    height: Math.max(m, 0)
  });
}), gA = S($e, (e) => ({
  x: e.left,
  y: e.top,
  width: e.width,
  height: e.height
})), gc = S(or, lr, (e, t) => ({
  x: 0,
  y: 0,
  width: e,
  height: t
})), bA = /* @__PURE__ */ lt(null), Fe = () => yt(bA) != null, Lo = (e) => e.brush, zo = S([Lo, $e, Xg], (e, t, r) => ({
  height: e.height,
  x: L(e.x) ? e.x : t.left,
  y: L(e.y) ? e.y : t.top + t.height + t.brushBottom - (r?.bottom || 0),
  width: L(e.width) ? e.width : t.width
})), wu = {}, Ou = {}, Pu = {}, Wv;
function xA() {
  return Wv || (Wv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r, n, { signal: i, edges: a } = {}) {
      let o, l = null;
      const u = a != null && a.includes("leading"), s = a == null || a.includes("trailing"), c = () => {
        l !== null && (r.apply(o, l), o = void 0, l = null);
      }, f = () => {
        s && c(), m();
      };
      let d = null;
      const v = () => {
        d != null && clearTimeout(d), d = setTimeout(() => {
          d = null, f();
        }, n);
      }, p = () => {
        d !== null && (clearTimeout(d), d = null);
      }, m = () => {
        p(), o = void 0, l = null;
      }, h = () => {
        c();
      }, y = function(...b) {
        if (i?.aborted)
          return;
        o = this, l = b;
        const x = d == null;
        v(), u && x && c();
      };
      return y.schedule = v, y.cancel = m, y.flush = h, i?.addEventListener("abort", m, { once: !0 }), y;
    }
    e.debounce = t;
  })(Pu)), Pu;
}
var Kv;
function wA() {
  return Kv || (Kv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ xA();
    function r(n, i = 0, a = {}) {
      typeof a != "object" && (a = {});
      const { leading: o = !1, trailing: l = !0, maxWait: u } = a, s = Array(2);
      o && (s[0] = "leading"), l && (s[1] = "trailing");
      let c, f = null;
      const d = t.debounce(function(...m) {
        c = n.apply(this, m), f = null;
      }, i, { edges: s }), v = function(...m) {
        return u != null && (f === null && (f = Date.now()), Date.now() - f >= u) ? (c = n.apply(this, m), f = Date.now(), d.cancel(), d.schedule(), c) : (d.apply(this, m), c);
      }, p = () => (d.flush(), c);
      return v.cancel = d.cancel, v.flush = p, v;
    }
    e.debounce = r;
  })(Ou)), Ou;
}
var qv;
function OA() {
  return qv || (qv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ wA();
    function r(n, i = 0, a = {}) {
      const { leading: o = !0, trailing: l = !0 } = a;
      return t.debounce(n, i, {
        leading: o,
        maxWait: i,
        trailing: l
      });
    }
    e.throttle = r;
  })(wu)), wu;
}
var Eu, Uv;
function PA() {
  return Uv || (Uv = 1, Eu = OA().throttle), Eu;
}
var EA = /* @__PURE__ */ PA();
const AA = /* @__PURE__ */ an(EA);
var Fa = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    i[a - 2] = arguments[a];
  if (typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var o = 0;
      console.warn(r.replace(/%s/g, () => i[o++]));
    }
}, Rt = {
  width: "100%",
  height: "100%",
  debounce: 0,
  minWidth: 0,
  initialDimension: {
    width: -1,
    height: -1
  }
}, Qg = (e, t, r) => {
  var {
    width: n = Rt.width,
    height: i = Rt.height,
    aspect: a,
    maxHeight: o
  } = r, l = Zr(n) ? e : Number(n), u = Zr(i) ? t : Number(i);
  return a && a > 0 && (l ? u = l / a : u && (l = u * a), o && u != null && u > o && (u = o)), {
    calculatedWidth: l,
    calculatedHeight: u
  };
}, SA = {
  width: 0,
  height: 0,
  overflow: "visible"
}, _A = {
  width: 0,
  overflowX: "visible"
}, jA = {
  height: 0,
  overflowY: "visible"
}, IA = {}, kA = (e) => {
  var {
    width: t,
    height: r
  } = e, n = Zr(t), i = Zr(r);
  return n && i ? SA : n ? _A : i ? jA : IA;
};
function CA(e) {
  var {
    width: t,
    height: r,
    aspect: n
  } = e, i = t, a = r;
  return i === void 0 && a === void 0 ? (i = Rt.width, a = Rt.height) : i === void 0 ? i = n && n > 0 ? void 0 : Rt.width : a === void 0 && (a = n && n > 0 ? void 0 : Rt.height), {
    width: i,
    height: a
  };
}
function ys() {
  return ys = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ys.apply(null, arguments);
}
function Vv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Hv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vv(Object(r), !0).forEach(function(n) {
      TA(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function TA(e, t, r) {
  return (t = NA(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function NA(e) {
  var t = DA(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function DA(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var eb = /* @__PURE__ */ lt(Rt.initialDimension);
function MA(e) {
  return Wt(e.width) && Wt(e.height);
}
function tb(e) {
  var {
    children: t,
    width: r,
    height: n
  } = e, i = gt(() => ({
    width: r,
    height: n
  }), [r, n]);
  return MA(i) ? /* @__PURE__ */ g.createElement(eb.Provider, {
    value: i
  }, t) : null;
}
var bc = () => yt(eb), $A = /* @__PURE__ */ Ce((e, t) => {
  var {
    aspect: r,
    initialDimension: n = Rt.initialDimension,
    width: i,
    height: a,
    /*
     * default min-width to 0 if not specified - 'auto' causes issues with flexbox
     * https://github.com/recharts/recharts/issues/172
     */
    minWidth: o = Rt.minWidth,
    minHeight: l,
    maxHeight: u,
    children: s,
    debounce: c = Rt.debounce,
    id: f,
    className: d,
    onResize: v,
    style: p = {}
  } = e, m = H(null), h = H();
  h.current = v, Oy(t, () => m.current);
  var [y, b] = re({
    containerWidth: n.width,
    containerHeight: n.height
  }), x = ie((_, C) => {
    b((T) => {
      var N = Math.round(_), j = Math.round(C);
      return T.containerWidth === N && T.containerHeight === j ? T : {
        containerWidth: N,
        containerHeight: j
      };
    });
  }, []);
  fe(() => {
    if (m.current == null || typeof ResizeObserver > "u")
      return ar;
    var _ = (j) => {
      var I, $ = j[0];
      if ($ != null) {
        var {
          width: K,
          height: V
        } = $.contentRect;
        x(K, V), (I = h.current) === null || I === void 0 || I.call(h, K, V);
      }
    };
    c > 0 && (_ = AA(_, c, {
      trailing: !0,
      leading: !1
    }));
    var C = new ResizeObserver(_), {
      width: T,
      height: N
    } = m.current.getBoundingClientRect();
    return x(T, N), C.observe(m.current), () => {
      C.disconnect();
    };
  }, [x, c]);
  var {
    containerWidth: w,
    containerHeight: P
  } = y;
  Fa(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
  var {
    calculatedWidth: O,
    calculatedHeight: A
  } = Qg(w, P, {
    width: i,
    height: a,
    aspect: r,
    maxHeight: u
  });
  return Fa(O != null && O > 0 || A != null && A > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, O, A, i, a, o, l, r), /* @__PURE__ */ g.createElement("div", {
    id: f ? "".concat(f) : void 0,
    className: te("recharts-responsive-container", d),
    style: Hv(Hv({}, p), {}, {
      width: i,
      height: a,
      minWidth: o,
      minHeight: l,
      maxHeight: u
    }),
    ref: m
  }, /* @__PURE__ */ g.createElement("div", {
    style: kA({
      width: i,
      height: a
    })
  }, /* @__PURE__ */ g.createElement(tb, {
    width: O,
    height: A
  }, s)));
}), Ci = /* @__PURE__ */ Ce((e, t) => {
  var r = bc();
  if (Wt(r.width) && Wt(r.height))
    return e.children;
  var {
    width: n,
    height: i
  } = CA({
    width: e.width,
    height: e.height,
    aspect: e.aspect
  }), {
    calculatedWidth: a,
    calculatedHeight: o
  } = Qg(void 0, void 0, {
    width: n,
    height: i,
    aspect: e.aspect,
    maxHeight: e.maxHeight
  });
  return L(a) && L(o) ? /* @__PURE__ */ g.createElement(tb, {
    width: a,
    height: o
  }, e.children) : /* @__PURE__ */ g.createElement($A, ys({}, e, {
    width: n,
    height: i,
    ref: t
  }));
});
function xc(e) {
  if (e)
    return {
      x: e.x,
      y: e.y,
      upperWidth: "upperWidth" in e ? e.upperWidth : e.width,
      lowerWidth: "lowerWidth" in e ? e.lowerWidth : e.width,
      width: e.width,
      height: e.height
    };
}
var Bo = () => {
  var e, t = Fe(), r = B(gA), n = B(zo), i = (e = B(Lo)) === null || e === void 0 ? void 0 : e.padding;
  return !t || !n || !i ? r : {
    width: n.width - i.left - i.right,
    height: n.height - i.top - i.bottom,
    x: i.left,
    y: i.top
  };
}, RA = {
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  width: 0,
  height: 0,
  brushBottom: 0
}, rb = () => {
  var e;
  return (e = B($e)) !== null && e !== void 0 ? e : RA;
}, wc = () => B(or), Oc = () => B(lr), LA = () => B((e) => e.layout.margin), ee = (e) => e.layout.layoutType, Sr = () => B(ee), Pc = () => {
  var e = Sr();
  if (e === "horizontal" || e === "vertical")
    return e;
}, nb = (e) => {
  var t = e.layout.layoutType;
  if (t === "centric" || t === "radial")
    return t;
}, zA = () => {
  var e = Sr();
  return e !== void 0;
}, Ti = (e) => {
  var t = de(), r = Fe(), {
    width: n,
    height: i
  } = e, a = bc(), o = n, l = i;
  return a && (o = a.width > 0 ? a.width : n, l = a.height > 0 ? a.height : i), fe(() => {
    !r && Wt(o) && Wt(l) && t(U1({
      width: o,
      height: l
    }));
  }, [t, r, o, l]), null;
}, ib = /* @__PURE__ */ Symbol.for("immer-nothing"), Gv = /* @__PURE__ */ Symbol.for("immer-draftable"), ht = /* @__PURE__ */ Symbol.for("immer-state"), BA = process.env.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(e) {
    return `The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`;
  },
  function(e) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`;
  },
  "This object has been frozen and should not be mutated",
  function(e) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + e;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(e) {
    return `'current' expects a draft, got: ${e}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(e) {
    return `'original' expects a draft, got: ${e}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function it(e, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const r = BA[e], n = typeof r == "function" ? r.apply(null, t) : r;
    throw new Error(`[Immer] ${n}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var ci = Object.getPrototypeOf;
function En(e) {
  return !!e && !!e[ht];
}
function Qr(e) {
  return e ? ab(e) || Array.isArray(e) || !!e[Gv] || !!e.constructor?.[Gv] || Ni(e) || Wo(e) : !1;
}
var FA = Object.prototype.constructor.toString(), Yv = /* @__PURE__ */ new WeakMap();
function ab(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  if (t === null || t === Object.prototype)
    return !0;
  const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  if (r === Object)
    return !0;
  if (typeof r != "function")
    return !1;
  let n = Yv.get(r);
  return n === void 0 && (n = Function.toString.call(r), Yv.set(r, n)), n === FA;
}
function Wa(e, t, r = !0) {
  Fo(e) === 0 ? (r ? Reflect.ownKeys(e) : Object.keys(e)).forEach((i) => {
    t(i, e[i], e);
  }) : e.forEach((n, i) => t(i, n, e));
}
function Fo(e) {
  const t = e[ht];
  return t ? t.type_ : Array.isArray(e) ? 1 : Ni(e) ? 2 : Wo(e) ? 3 : 0;
}
function gs(e, t) {
  return Fo(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function ob(e, t, r) {
  const n = Fo(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r;
}
function WA(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Ni(e) {
  return e instanceof Map;
}
function Wo(e) {
  return e instanceof Set;
}
function $r(e) {
  return e.copy_ || e.base_;
}
function bs(e, t) {
  if (Ni(e))
    return new Map(e);
  if (Wo(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const r = ab(e);
  if (t === !0 || t === "class_only" && !r) {
    const n = Object.getOwnPropertyDescriptors(e);
    delete n[ht];
    let i = Reflect.ownKeys(n);
    for (let a = 0; a < i.length; a++) {
      const o = i[a], l = n[o];
      l.writable === !1 && (l.writable = !0, l.configurable = !0), (l.get || l.set) && (n[o] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: l.enumerable,
        value: e[o]
      });
    }
    return Object.create(ci(e), n);
  } else {
    const n = ci(e);
    if (n !== null && r)
      return { ...e };
    const i = Object.create(n);
    return Object.assign(i, e);
  }
}
function Ec(e, t = !1) {
  return Ko(e) || En(e) || !Qr(e) || (Fo(e) > 1 && Object.defineProperties(e, {
    set: la,
    add: la,
    clear: la,
    delete: la
  }), Object.freeze(e), t && Object.values(e).forEach((r) => Ec(r, !0))), e;
}
function KA() {
  it(2);
}
var la = {
  value: KA
};
function Ko(e) {
  return e === null || typeof e != "object" ? !0 : Object.isFrozen(e);
}
var qA = {};
function en(e) {
  const t = qA[e];
  return t || it(0, e), t;
}
var fi;
function lb() {
  return fi;
}
function UA(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function Xv(e, t) {
  t && (en("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function xs(e) {
  ws(e), e.drafts_.forEach(VA), e.drafts_ = null;
}
function ws(e) {
  e === fi && (fi = e.parent_);
}
function Zv(e) {
  return fi = UA(fi, e);
}
function VA(e) {
  const t = e[ht];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function Jv(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return e !== void 0 && e !== r ? (r[ht].modified_ && (xs(t), it(4)), Qr(e) && (e = Ka(t, e), t.parent_ || qa(t, e)), t.patches_ && en("Patches").generateReplacementPatches_(
    r[ht].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = Ka(t, r, []), xs(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== ib ? e : void 0;
}
function Ka(e, t, r) {
  if (Ko(t))
    return t;
  const n = e.immer_.shouldUseStrictIteration(), i = t[ht];
  if (!i)
    return Wa(
      t,
      (a, o) => Qv(e, i, t, a, o, r),
      n
    ), t;
  if (i.scope_ !== e)
    return t;
  if (!i.modified_)
    return qa(e, i.base_, !0), i.base_;
  if (!i.finalized_) {
    i.finalized_ = !0, i.scope_.unfinalizedDrafts_--;
    const a = i.copy_;
    let o = a, l = !1;
    i.type_ === 3 && (o = new Set(a), a.clear(), l = !0), Wa(
      o,
      (u, s) => Qv(
        e,
        i,
        a,
        u,
        s,
        r,
        l
      ),
      n
    ), qa(e, a, !1), r && e.patches_ && en("Patches").generatePatches_(
      i,
      r,
      e.patches_,
      e.inversePatches_
    );
  }
  return i.copy_;
}
function Qv(e, t, r, n, i, a, o) {
  if (i == null || typeof i != "object" && !o)
    return;
  const l = Ko(i);
  if (!(l && !o)) {
    if (process.env.NODE_ENV !== "production" && i === r && it(5), En(i)) {
      const u = a && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
      !gs(t.assigned_, n) ? a.concat(n) : void 0, s = Ka(e, i, u);
      if (ob(r, n, s), En(s))
        e.canAutoFreeze_ = !1;
      else
        return;
    } else o && r.add(i);
    if (Qr(i) && !l) {
      if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1 || t && t.base_ && t.base_[n] === i && l)
        return;
      Ka(e, i), (!t || !t.scope_.parent_) && typeof n != "symbol" && (Ni(r) ? r.has(n) : Object.prototype.propertyIsEnumerable.call(r, n)) && qa(e, i);
    }
  }
}
function qa(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Ec(t, r);
}
function HA(e, t) {
  const r = Array.isArray(e), n = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : lb(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: t,
    // The base state.
    base_: e,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let i = n, a = Ac;
  r && (i = [n], a = di);
  const { revoke: o, proxy: l } = Proxy.revocable(i, a);
  return n.draft_ = l, n.revoke_ = o, l;
}
var Ac = {
  get(e, t) {
    if (t === ht)
      return e;
    const r = $r(e);
    if (!gs(r, t))
      return GA(e, r, t);
    const n = r[t];
    return e.finalized_ || !Qr(n) ? n : n === Au(e.base_, t) ? (Su(e), e.copy_[t] = Ps(n, e)) : n;
  },
  has(e, t) {
    return t in $r(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys($r(e));
  },
  set(e, t, r) {
    const n = ub($r(e), t);
    if (n?.set)
      return n.set.call(e.draft_, r), !0;
    if (!e.modified_) {
      const i = Au($r(e), t), a = i?.[ht];
      if (a && a.base_ === r)
        return e.copy_[t] = r, e.assigned_[t] = !1, !0;
      if (WA(r, i) && (r !== void 0 || gs(e.base_, t)))
        return !0;
      Su(e), Os(e);
    }
    return e.copy_[t] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return Au(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, Su(e), Os(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const r = $r(e), n = Reflect.getOwnPropertyDescriptor(r, t);
    return n && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: n.enumerable,
      value: r[t]
    };
  },
  defineProperty() {
    it(11);
  },
  getPrototypeOf(e) {
    return ci(e.base_);
  },
  setPrototypeOf() {
    it(12);
  }
}, di = {};
Wa(Ac, (e, t) => {
  di[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
di.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && it(13), di.set.call(this, e, t, void 0);
};
di.set = function(e, t, r) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && it(14), Ac.set.call(this, e[0], t, r, e[0]);
};
function Au(e, t) {
  const r = e[ht];
  return (r ? $r(r) : e)[t];
}
function GA(e, t, r) {
  const n = ub(t, r);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    n.get?.call(e.draft_)
  ) : void 0;
}
function ub(e, t) {
  if (!(t in e))
    return;
  let r = ci(e);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n)
      return n;
    r = ci(r);
  }
}
function Os(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Os(e.parent_));
}
function Su(e) {
  e.copy_ || (e.copy_ = bs(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var YA = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.useStrictIteration_ = !0, this.produce = (t, r, n) => {
      if (typeof t == "function" && typeof r != "function") {
        const a = r;
        r = t;
        const o = this;
        return function(u = a, ...s) {
          return o.produce(u, (c) => r.call(this, c, ...s));
        };
      }
      typeof r != "function" && it(6), n !== void 0 && typeof n != "function" && it(7);
      let i;
      if (Qr(t)) {
        const a = Zv(this), o = Ps(t, void 0);
        let l = !0;
        try {
          i = r(o), l = !1;
        } finally {
          l ? xs(a) : ws(a);
        }
        return Xv(a, n), Jv(i, a);
      } else if (!t || typeof t != "object") {
        if (i = r(t), i === void 0 && (i = t), i === ib && (i = void 0), this.autoFreeze_ && Ec(i, !0), n) {
          const a = [], o = [];
          en("Patches").generateReplacementPatches_(t, i, a, o), n(a, o);
        }
        return i;
      } else
        it(1, t);
    }, this.produceWithPatches = (t, r) => {
      if (typeof t == "function")
        return (o, ...l) => this.produceWithPatches(o, (u) => t(u, ...l));
      let n, i;
      return [this.produce(t, r, (o, l) => {
        n = o, i = l;
      }), n, i];
    }, typeof e?.autoFreeze == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof e?.useStrictShallowCopy == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy), typeof e?.useStrictIteration == "boolean" && this.setUseStrictIteration(e.useStrictIteration);
  }
  createDraft(e) {
    Qr(e) || it(8), En(e) && (e = XA(e));
    const t = Zv(this), r = Ps(e, void 0);
    return r[ht].isManual_ = !0, ws(t), r;
  }
  finishDraft(e, t) {
    const r = e && e[ht];
    (!r || !r.isManual_) && it(9);
    const { scope_: n } = r;
    return Xv(n, t), Jv(void 0, n);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  /**
   * Pass false to use faster iteration that skips non-enumerable properties
   * but still handles symbols for compatibility.
   *
   * By default, strict iteration is enabled (includes all own properties).
   */
  setUseStrictIteration(e) {
    this.useStrictIteration_ = e;
  }
  shouldUseStrictIteration() {
    return this.useStrictIteration_;
  }
  applyPatches(e, t) {
    let r;
    for (r = t.length - 1; r >= 0; r--) {
      const i = t[r];
      if (i.path.length === 0 && i.op === "replace") {
        e = i.value;
        break;
      }
    }
    r > -1 && (t = t.slice(r + 1));
    const n = en("Patches").applyPatches_;
    return En(e) ? n(e, t) : this.produce(
      e,
      (i) => n(i, t)
    );
  }
};
function Ps(e, t) {
  const r = Ni(e) ? en("MapSet").proxyMap_(e, t) : Wo(e) ? en("MapSet").proxySet_(e, t) : HA(e, t);
  return (t ? t.scope_ : lb()).drafts_.push(r), r;
}
function XA(e) {
  return En(e) || it(10, e), sb(e);
}
function sb(e) {
  if (!Qr(e) || Ko(e))
    return e;
  const t = e[ht];
  let r, n = !0;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, r = bs(e, t.scope_.immer_.useStrictShallowCopy_), n = t.scope_.immer_.shouldUseStrictIteration();
  } else
    r = bs(e, !0);
  return Wa(
    r,
    (i, a) => {
      ob(r, i, sb(a));
    },
    n
  ), t && (t.finalized_ = !1), r;
}
var ZA = new YA();
ZA.produce;
var JA = {
  settings: {
    layout: "horizontal",
    align: "center",
    verticalAlign: "middle",
    itemSorter: "value"
  },
  size: {
    width: 0,
    height: 0
  },
  payload: []
}, cb = Je({
  name: "legend",
  initialState: JA,
  reducers: {
    setLegendSize(e, t) {
      e.size.width = t.payload.width, e.size.height = t.payload.height;
    },
    setLegendSettings(e, t) {
      e.settings.align = t.payload.align, e.settings.layout = t.payload.layout, e.settings.verticalAlign = t.payload.verticalAlign, e.settings.itemSorter = t.payload.itemSorter;
    },
    addLegendPayload: {
      reducer(e, t) {
        e.payload.push(t.payload);
      },
      prepare: me()
    },
    replaceLegendPayload: {
      reducer(e, t) {
        var {
          prev: r,
          next: n
        } = t.payload, i = Pt(e).payload.indexOf(r);
        i > -1 && (e.payload[i] = n);
      },
      prepare: me()
    },
    removeLegendPayload: {
      reducer(e, t) {
        var r = Pt(e).payload.indexOf(t.payload);
        r > -1 && e.payload.splice(r, 1);
      },
      prepare: me()
    }
  }
}), {
  setLegendSize: ep,
  setLegendSettings: QA,
  addLegendPayload: fb,
  replaceLegendPayload: db,
  removeLegendPayload: vb
} = cb.actions, eS = cb.reducer, ua = { exports: {} }, _u = {};
var tp;
function tS() {
  if (tp) return _u;
  tp = 1;
  var e = nn;
  function t(u, s) {
    return u === s && (u !== 0 || 1 / u === 1 / s) || u !== u && s !== s;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useSyncExternalStore, i = e.useRef, a = e.useEffect, o = e.useMemo, l = e.useDebugValue;
  return _u.useSyncExternalStoreWithSelector = function(u, s, c, f, d) {
    var v = i(null);
    if (v.current === null) {
      var p = { hasValue: !1, value: null };
      v.current = p;
    } else p = v.current;
    v = o(
      function() {
        function h(P) {
          if (!y) {
            if (y = !0, b = P, P = f(P), d !== void 0 && p.hasValue) {
              var O = p.value;
              if (d(O, P))
                return x = O;
            }
            return x = P;
          }
          if (O = x, r(b, P)) return O;
          var A = f(P);
          return d !== void 0 && d(O, A) ? (b = P, O) : (b = P, x = A);
        }
        var y = !1, b, x, w = c === void 0 ? null : c;
        return [
          function() {
            return h(s());
          },
          w === null ? void 0 : function() {
            return h(w());
          }
        ];
      },
      [s, c, f, d]
    );
    var m = n(u, v[0], v[1]);
    return a(
      function() {
        p.hasValue = !0, p.value = m;
      },
      [m]
    ), l(m), m;
  }, _u;
}
var ju = {};
var rp;
function rS() {
  return rp || (rp = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(u, s) {
      return u === s && (u !== 0 || 1 / u === 1 / s) || u !== u && s !== s;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = nn, r = typeof Object.is == "function" ? Object.is : e, n = t.useSyncExternalStore, i = t.useRef, a = t.useEffect, o = t.useMemo, l = t.useDebugValue;
    ju.useSyncExternalStoreWithSelector = function(u, s, c, f, d) {
      var v = i(null);
      if (v.current === null) {
        var p = { hasValue: !1, value: null };
        v.current = p;
      } else p = v.current;
      v = o(
        function() {
          function h(P) {
            if (!y) {
              if (y = !0, b = P, P = f(P), d !== void 0 && p.hasValue) {
                var O = p.value;
                if (d(O, P))
                  return x = O;
              }
              return x = P;
            }
            if (O = x, r(b, P))
              return O;
            var A = f(P);
            return d !== void 0 && d(O, A) ? (b = P, O) : (b = P, x = A);
          }
          var y = !1, b, x, w = c === void 0 ? null : c;
          return [
            function() {
              return h(s());
            },
            w === null ? void 0 : function() {
              return h(w());
            }
          ];
        },
        [s, c, f, d]
      );
      var m = n(u, v[0], v[1]);
      return a(
        function() {
          p.hasValue = !0, p.value = m;
        },
        [m]
      ), l(m), m;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), ju;
}
var np;
function nS() {
  return np || (np = 1, process.env.NODE_ENV === "production" ? ua.exports = tS() : ua.exports = rS()), ua.exports;
}
nS();
function iS(e) {
  e();
}
function aS() {
  let e = null, t = null;
  return {
    clear() {
      e = null, t = null;
    },
    notify() {
      iS(() => {
        let r = e;
        for (; r; )
          r.callback(), r = r.next;
      });
    },
    get() {
      const r = [];
      let n = e;
      for (; n; )
        r.push(n), n = n.next;
      return r;
    },
    subscribe(r) {
      let n = !0;
      const i = t = {
        callback: r,
        next: null,
        prev: t
      };
      return i.prev ? i.prev.next = i : e = i, function() {
        !n || e === null || (n = !1, i.next ? i.next.prev = i.prev : t = i.prev, i.prev ? i.prev.next = i.next : e = i.next);
      };
    }
  };
}
var ip = {
  notify() {
  },
  get: () => []
};
function oS(e, t) {
  let r, n = ip, i = 0, a = !1;
  function o(m) {
    c();
    const h = n.subscribe(m);
    let y = !1;
    return () => {
      y || (y = !0, h(), f());
    };
  }
  function l() {
    n.notify();
  }
  function u() {
    p.onStateChange && p.onStateChange();
  }
  function s() {
    return a;
  }
  function c() {
    i++, r || (r = e.subscribe(u), n = aS());
  }
  function f() {
    i--, r && i === 0 && (r(), r = void 0, n.clear(), n = ip);
  }
  function d() {
    a || (a = !0, c());
  }
  function v() {
    a && (a = !1, f());
  }
  const p = {
    addNestedSub: o,
    notifyNestedSubs: l,
    handleChangeWrapper: u,
    isSubscribed: s,
    trySubscribe: d,
    tryUnsubscribe: v,
    getListeners: () => n
  };
  return p;
}
var lS = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", uS = /* @__PURE__ */ lS(), sS = () => typeof navigator < "u" && navigator.product === "ReactNative", cS = /* @__PURE__ */ sS(), fS = () => uS || cS ? g.useLayoutEffect : g.useEffect, dS = /* @__PURE__ */ fS();
function ap(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function vS(e, t) {
  if (ap(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (let i = 0; i < r.length; i++)
    if (!Object.prototype.hasOwnProperty.call(t, r[i]) || !ap(e[r[i]], t[r[i]]))
      return !1;
  return !0;
}
var pS = /* @__PURE__ */ Symbol.for("react-redux-context"), hS = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function mS() {
  if (!g.createContext) return {};
  const e = hS[pS] ??= /* @__PURE__ */ new Map();
  let t = e.get(g.createContext);
  return t || (t = g.createContext(
    null
  ), process.env.NODE_ENV !== "production" && (t.displayName = "ReactRedux"), e.set(g.createContext, t)), t;
}
var yS = /* @__PURE__ */ mS();
function gS(e) {
  const { children: t, context: r, serverState: n, store: i } = e, a = g.useMemo(() => {
    const u = oS(i), s = {
      store: i,
      subscription: u,
      getServerState: n ? () => n : void 0
    };
    if (process.env.NODE_ENV === "production")
      return s;
    {
      const { identityFunctionCheck: c = "once", stabilityCheck: f = "once" } = e;
      return /* @__PURE__ */ Object.assign(s, {
        stabilityCheck: f,
        identityFunctionCheck: c
      });
    }
  }, [i, n]), o = g.useMemo(() => i.getState(), [i]);
  dS(() => {
    const { subscription: u } = a;
    return u.onStateChange = u.notifyNestedSubs, u.trySubscribe(), o !== i.getState() && u.notifyNestedSubs(), () => {
      u.tryUnsubscribe(), u.onStateChange = void 0;
    };
  }, [a, o]);
  const l = r || yS;
  return /* @__PURE__ */ g.createElement(l.Provider, { value: a }, t);
}
var bS = gS, xS = /* @__PURE__ */ new Set([
  "axisLine",
  "tickLine",
  "activeBar",
  "activeDot",
  "activeLabel",
  "activeShape",
  "allowEscapeViewBox",
  "background",
  "cursor",
  "dot",
  "label",
  "line",
  "margin",
  "padding",
  "position",
  "shape",
  "style",
  "tick",
  "wrapperStyle",
  // radius can be an array of 4 numbers, easy to compare shallowly
  "radius",
  "throttledEvents"
]);
function wS(e, t) {
  return e == null && t == null ? !0 : typeof e == "number" && typeof t == "number" ? e === t || e !== e && t !== t : e === t;
}
function on(e, t) {
  var r = /* @__PURE__ */ new Set([...Object.keys(e), ...Object.keys(t)]);
  for (var n of r)
    if (xS.has(n)) {
      if (e[n] == null && t[n] == null)
        continue;
      if (!vS(e[n], t[n]))
        return !1;
    } else if (!wS(e[n], t[n]))
      return !1;
  return !0;
}
var OS = ["contextPayload"];
function Es() {
  return Es = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Es.apply(null, arguments);
}
function op(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function An(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? op(Object(r), !0).forEach(function(n) {
      PS(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : op(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function PS(e, t, r) {
  return (t = ES(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ES(e) {
  var t = AS(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function AS(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function SS(e, t) {
  if (e == null) return {};
  var r, n, i = _S(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function _S(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function jS(e) {
  return e.value;
}
function IS(e) {
  var {
    contextPayload: t
  } = e, r = SS(e, OS), n = og(t, e.payloadUniqBy, jS), i = An(An({}, r), {}, {
    payload: n
  });
  return /* @__PURE__ */ g.isValidElement(e.content) ? /* @__PURE__ */ g.cloneElement(e.content, i) : typeof e.content == "function" ? /* @__PURE__ */ g.createElement(e.content, i) : /* @__PURE__ */ g.createElement(MP, i);
}
function kS(e, t, r, n, i, a) {
  var {
    layout: o,
    align: l,
    verticalAlign: u
  } = t, s, c;
  return (!e || (e.left === void 0 || e.left === null) && (e.right === void 0 || e.right === null)) && (l === "center" && o === "vertical" ? s = {
    left: ((n || 0) - a.width) / 2
  } : s = l === "right" ? {
    right: r && r.right || 0
  } : {
    left: r && r.left || 0
  }), (!e || (e.top === void 0 || e.top === null) && (e.bottom === void 0 || e.bottom === null)) && (u === "middle" ? c = {
    top: ((i || 0) - a.height) / 2
  } : c = u === "bottom" ? {
    bottom: r && r.bottom || 0
  } : {
    top: r && r.top || 0
  }), An(An({}, s), c);
}
function CS(e) {
  var t = de();
  return fe(() => {
    t(QA(e));
  }, [t, e]), null;
}
function TS(e) {
  var t = de();
  return fe(() => (t(ep(e)), () => {
    t(ep({
      width: 0,
      height: 0
    }));
  }), [t, e]), null;
}
function NS(e, t, r, n) {
  return e === "vertical" && t != null ? {
    height: t
  } : e === "horizontal" ? {
    width: r || n
  } : null;
}
var DS = {
  align: "center",
  iconSize: 14,
  inactiveColor: "#ccc",
  itemSorter: "value",
  layout: "horizontal",
  verticalAlign: "bottom"
};
function MS(e) {
  var t = je(e, DS), r = DE(), n = _O(), i = LA(), {
    width: a,
    height: o,
    wrapperStyle: l,
    portal: u
  } = t, [s, c] = dg([r]), f = wc(), d = Oc();
  if (f == null || d == null)
    return null;
  var v = f - (i?.left || 0) - (i?.right || 0), p = NS(t.layout, o, a, v), m = u ? l : An(An({
    position: "absolute",
    width: p?.width || a || "auto",
    height: p?.height || o || "auto"
  }, kS(l, t, i, f, d, s)), l), h = u ?? n;
  if (h == null || r == null)
    return null;
  var y = /* @__PURE__ */ g.createElement("div", {
    className: "recharts-legend-wrapper",
    style: m,
    ref: c
  }, /* @__PURE__ */ g.createElement(CS, {
    layout: t.layout,
    align: t.align,
    verticalAlign: t.verticalAlign,
    itemSorter: t.itemSorter
  }), !u && /* @__PURE__ */ g.createElement(TS, {
    width: s.width,
    height: s.height
  }), /* @__PURE__ */ g.createElement(IS, Es({}, t, p, {
    margin: i,
    chartWidth: f,
    chartHeight: d,
    contextPayload: r
  })));
  return /* @__PURE__ */ Qs(y, h);
}
var kn = /* @__PURE__ */ g.memo(MS, on);
kn.displayName = "Legend";
function As() {
  return As = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, As.apply(null, arguments);
}
function lp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Un(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? lp(Object(r), !0).forEach(function(n) {
      $S(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : lp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function $S(e, t, r) {
  return (t = RS(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function RS(e) {
  var t = LS(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function LS(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function zS(e) {
  return Array.isArray(e) && Ft(e[0]) && Ft(e[1]) ? e.join(" ~ ") : e;
}
var sn = {
  separator: " : ",
  contentStyle: {
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  },
  itemStyle: {
    display: "block",
    paddingTop: 4,
    paddingBottom: 4,
    color: "#000"
  },
  labelStyle: {},
  accessibilityLayer: !1
};
function BS(e, t) {
  return t == null ? e : _o(e, t);
}
var FS = (e) => {
  var {
    separator: t = sn.separator,
    contentStyle: r,
    itemStyle: n,
    labelStyle: i = sn.labelStyle,
    payload: a,
    formatter: o,
    itemSorter: l,
    wrapperClassName: u,
    labelClassName: s,
    label: c,
    labelFormatter: f,
    accessibilityLayer: d = sn.accessibilityLayer
  } = e, v = () => {
    if (a && a.length) {
      var P = {
        padding: 0,
        margin: 0
      }, O = BS(a, l), A = O.map((_, C) => {
        if (_.type === "none")
          return null;
        var T = _.formatter || o || zS, {
          value: N,
          name: j
        } = _, I = N, $ = j;
        if (T) {
          var K = T(N, j, _, C, a);
          if (Array.isArray(K))
            [I, $] = K;
          else if (K != null)
            I = K;
          else
            return null;
        }
        var V = Un(Un({}, sn.itemStyle), {}, {
          color: _.color || sn.itemStyle.color
        }, n);
        return /* @__PURE__ */ g.createElement("li", {
          className: "recharts-tooltip-item",
          key: "tooltip-item-".concat(C),
          style: V
        }, Ft($) ? /* @__PURE__ */ g.createElement("span", {
          className: "recharts-tooltip-item-name"
        }, $) : null, Ft($) ? /* @__PURE__ */ g.createElement("span", {
          className: "recharts-tooltip-item-separator"
        }, t) : null, /* @__PURE__ */ g.createElement("span", {
          className: "recharts-tooltip-item-value"
        }, I), /* @__PURE__ */ g.createElement("span", {
          className: "recharts-tooltip-item-unit"
        }, _.unit || ""));
      });
      return /* @__PURE__ */ g.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: P
      }, A);
    }
    return null;
  }, p = Un(Un({}, sn.contentStyle), r), m = Un({
    margin: 0
  }, i), h = !ge(c), y = h ? c : "", b = te("recharts-default-tooltip", u), x = te("recharts-tooltip-label", s);
  h && f && a !== void 0 && a !== null && (y = f(c, a));
  var w = d ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ g.createElement("div", As({
    className: b,
    style: p
  }, w), /* @__PURE__ */ g.createElement("p", {
    className: x,
    style: m
  }, /* @__PURE__ */ g.isValidElement(y) ? y : "".concat(y)), v());
}, Vn = "recharts-tooltip-wrapper", WS = {
  visibility: "hidden"
};
function KS(e) {
  var {
    coordinate: t,
    translateX: r,
    translateY: n
  } = e;
  return te(Vn, {
    ["".concat(Vn, "-right")]: L(r) && t && L(t.x) && r >= t.x,
    ["".concat(Vn, "-left")]: L(r) && t && L(t.x) && r < t.x,
    ["".concat(Vn, "-bottom")]: L(n) && t && L(t.y) && n >= t.y,
    ["".concat(Vn, "-top")]: L(n) && t && L(t.y) && n < t.y
  });
}
function up(e) {
  var {
    allowEscapeViewBox: t,
    coordinate: r,
    key: n,
    offset: i,
    position: a,
    reverseDirection: o,
    tooltipDimension: l,
    viewBox: u,
    viewBoxDimension: s
  } = e;
  if (a && L(a[n]))
    return a[n];
  var c = r[n] - l - (i > 0 ? i : 0), f = r[n] + i;
  if (t[n])
    return o[n] ? c : f;
  var d = u[n];
  if (d == null)
    return 0;
  if (o[n]) {
    var v = c, p = d;
    return v < p ? Math.max(f, d) : Math.max(c, d);
  }
  if (s == null)
    return 0;
  var m = f + l, h = d + s;
  return m > h ? Math.max(c, d) : Math.max(f, d);
}
function qS(e) {
  var {
    translateX: t,
    translateY: r,
    useTranslate3d: n
  } = e;
  return {
    transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)")
  };
}
function US(e) {
  var {
    allowEscapeViewBox: t,
    coordinate: r,
    offsetTop: n,
    offsetLeft: i,
    position: a,
    reverseDirection: o,
    tooltipBox: l,
    useTranslate3d: u,
    viewBox: s
  } = e, c, f, d;
  return l.height > 0 && l.width > 0 && r ? (f = up({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "x",
    offset: i,
    position: a,
    reverseDirection: o,
    tooltipDimension: l.width,
    viewBox: s,
    viewBoxDimension: s.width
  }), d = up({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "y",
    offset: n,
    position: a,
    reverseDirection: o,
    tooltipDimension: l.height,
    viewBox: s,
    viewBoxDimension: s.height
  }), c = qS({
    translateX: f,
    translateY: d,
    useTranslate3d: u
  })) : c = WS, {
    cssProperties: c,
    cssClasses: KS({
      translateX: f,
      translateY: d,
      coordinate: r
    })
  };
}
var VS = () => !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout), Di = {
  isSsr: VS()
};
function pb() {
  var [e, t] = re(() => Di.isSsr || !window.matchMedia ? !1 : window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  return fe(() => {
    if (window.matchMedia) {
      var r = window.matchMedia("(prefers-reduced-motion: reduce)"), n = () => {
        t(r.matches);
      };
      return r.addEventListener("change", n), () => {
        r.removeEventListener("change", n);
      };
    }
  }, []), e;
}
function sp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function cn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? sp(Object(r), !0).forEach(function(n) {
      HS(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function HS(e, t, r) {
  return (t = GS(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function GS(e) {
  var t = YS(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function YS(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function XS(e) {
  if (!(e.prefersReducedMotion && e.isAnimationActive === "auto") && e.isAnimationActive && e.active)
    return "transform ".concat(e.animationDuration, "ms ").concat(e.animationEasing);
}
function ZS(e) {
  var t, r, n, i, a, o, l = pb(), [u, s] = g.useState(() => ({
    dismissed: !1,
    dismissedAtCoordinate: {
      x: 0,
      y: 0
    }
  }));
  g.useEffect(() => {
    var p = (m) => {
      if (m.key === "Escape") {
        var h, y, b, x;
        s({
          dismissed: !0,
          dismissedAtCoordinate: {
            x: (h = (y = e.coordinate) === null || y === void 0 ? void 0 : y.x) !== null && h !== void 0 ? h : 0,
            y: (b = (x = e.coordinate) === null || x === void 0 ? void 0 : x.y) !== null && b !== void 0 ? b : 0
          }
        });
      }
    };
    return document.addEventListener("keydown", p), () => {
      document.removeEventListener("keydown", p);
    };
  }, [(t = e.coordinate) === null || t === void 0 ? void 0 : t.x, (r = e.coordinate) === null || r === void 0 ? void 0 : r.y]), u.dismissed && (((n = (i = e.coordinate) === null || i === void 0 ? void 0 : i.x) !== null && n !== void 0 ? n : 0) !== u.dismissedAtCoordinate.x || ((a = (o = e.coordinate) === null || o === void 0 ? void 0 : o.y) !== null && a !== void 0 ? a : 0) !== u.dismissedAtCoordinate.y) && s(cn(cn({}, u), {}, {
    dismissed: !1
  }));
  var {
    cssClasses: c,
    cssProperties: f
  } = US({
    allowEscapeViewBox: e.allowEscapeViewBox,
    coordinate: e.coordinate,
    offsetLeft: typeof e.offset == "number" ? e.offset : e.offset.x,
    offsetTop: typeof e.offset == "number" ? e.offset : e.offset.y,
    position: e.position,
    reverseDirection: e.reverseDirection,
    tooltipBox: {
      height: e.lastBoundingBox.height,
      width: e.lastBoundingBox.width
    },
    useTranslate3d: e.useTranslate3d,
    viewBox: e.viewBox
  }), d = e.hasPortalFromProps ? {} : cn(cn({
    transition: XS({
      prefersReducedMotion: l,
      isAnimationActive: e.isAnimationActive,
      active: e.active,
      animationDuration: e.animationDuration,
      animationEasing: e.animationEasing
    })
  }, f), {}, {
    pointerEvents: "none",
    position: "absolute",
    top: 0,
    left: 0
  }), v = cn(cn({}, d), {}, {
    visibility: !u.dismissed && e.active && e.hasPayload ? "visible" : "hidden"
  }, e.wrapperStyle);
  return /* @__PURE__ */ g.createElement("div", {
    // @ts-expect-error typescript library does not recognize xmlns attribute, but it's required for an HTML chunk inside SVG.
    xmlns: "http://www.w3.org/1999/xhtml",
    tabIndex: -1,
    className: c,
    style: v,
    ref: e.innerRef
  }, e.children);
}
var JS = /* @__PURE__ */ g.memo(ZS), hb = () => {
  var e;
  return (e = B((t) => t.rootProps.accessibilityLayer)) !== null && e !== void 0 ? e : !0;
};
function Ss() {
  return Ss = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ss.apply(null, arguments);
}
function cp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function fp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? cp(Object(r), !0).forEach(function(n) {
      QS(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : cp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function QS(e, t, r) {
  return (t = e_(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function e_(e) {
  var t = t_(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function t_(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var dp = {
  curveBasisClosed: VO,
  curveBasisOpen: HO,
  curveBasis: UO,
  curveBumpX: CO,
  curveBumpY: TO,
  curveLinearClosed: GO,
  curveLinear: Ao,
  curveMonotoneX: YO,
  curveMonotoneY: XO,
  curveNatural: ZO,
  curveStep: JO,
  curveStepAfter: eP,
  curveStepBefore: QO
}, Ua = (e) => G(e.x) && G(e.y), vp = (e) => e.base != null && Ua(e.base) && Ua(e), Hn = (e) => e.x, Gn = (e) => e.y, r_ = (e, t) => {
  if (typeof e == "function")
    return e;
  var r = "curve".concat(Ei(e));
  if ((r === "curveMonotone" || r === "curveBump") && t) {
    var n = dp["".concat(r).concat(t === "vertical" ? "Y" : "X")];
    if (n)
      return n;
  }
  return dp[r] || Ao;
}, pp = {
  connectNulls: !1,
  type: "linear"
}, n_ = (e) => {
  var {
    type: t = pp.type,
    points: r = [],
    baseLine: n,
    layout: i,
    connectNulls: a = pp.connectNulls
  } = e, o = r_(t, i), l = a ? r.filter(Ua) : r;
  if (Array.isArray(n)) {
    var u, s = r.map((p, m) => fp(fp({}, p), {}, {
      base: n[m]
    }));
    i === "vertical" ? u = Zi().y(Gn).x1(Hn).x0((p) => p.base.x) : u = Zi().x(Hn).y1(Gn).y0((p) => p.base.y);
    var c = u.defined(vp).curve(o), f = a ? s.filter(vp) : s;
    return c(f);
  }
  var d;
  i === "vertical" && L(n) ? d = Zi().y(Gn).x1(Hn).x0(n) : L(n) ? d = Zi().x(Hn).y1(Gn).y0(n) : d = Dy().x(Hn).y(Gn);
  var v = d.defined(Ua).curve(o);
  return v(l);
}, xn = (e) => {
  var {
    className: t,
    points: r,
    path: n,
    pathRef: i
  } = e, a = Sr();
  if ((!r || !r.length) && !n)
    return null;
  var o = {
    type: e.type,
    points: e.points,
    baseLine: e.baseLine,
    layout: e.layout || a,
    connectNulls: e.connectNulls
  }, l = r && r.length ? n_(o) : n;
  return /* @__PURE__ */ g.createElement("path", Ss({}, tt(e), sc(e), {
    className: te("recharts-curve", t),
    d: l === null ? void 0 : l,
    ref: i
  }));
}, i_ = ["x", "y", "top", "left", "width", "height", "className"];
function _s() {
  return _s = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, _s.apply(null, arguments);
}
function hp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function a_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hp(Object(r), !0).forEach(function(n) {
      o_(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function o_(e, t, r) {
  return (t = l_(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function l_(e) {
  var t = u_(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function u_(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function s_(e, t) {
  if (e == null) return {};
  var r, n, i = c_(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function c_(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var f_ = (e, t, r, n, i, a) => "M".concat(e, ",").concat(i, "v").concat(n, "M").concat(a, ",").concat(t, "h").concat(r), d_ = (e) => {
  var {
    x: t = 0,
    y: r = 0,
    top: n = 0,
    left: i = 0,
    width: a = 0,
    height: o = 0,
    className: l
  } = e, u = s_(e, i_), s = a_({
    x: t,
    y: r,
    top: n,
    left: i,
    width: a,
    height: o
  }, u);
  return !L(t) || !L(r) || !L(a) || !L(o) || !L(n) || !L(i) ? null : /* @__PURE__ */ g.createElement("path", _s({}, Ze(s), {
    className: te("recharts-cross", l),
    d: f_(t, r, a, o, n, i)
  }));
};
function v_(e, t, r, n) {
  var i = n / 2;
  return {
    stroke: "none",
    fill: "#ccc",
    x: e === "horizontal" ? t.x - i : r.left + 0.5,
    y: e === "horizontal" ? r.top + 0.5 : t.y - i,
    width: e === "horizontal" ? n : r.width - 1,
    height: e === "horizontal" ? r.height - 1 : n
  };
}
function mp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function yp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? mp(Object(r), !0).forEach(function(n) {
      p_(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function p_(e, t, r) {
  return (t = h_(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function h_(e) {
  var t = m_(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function m_(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var y_ = (e) => e.replace(/([A-Z])/g, (t) => "-".concat(t.toLowerCase())), mb = (e, t, r) => e.map((n) => "".concat(y_(n), " ").concat(t, "ms ").concat(r)).join(","), g_ = (e, t) => [Object.keys(e), Object.keys(t)].reduce((r, n) => r.filter((i) => n.includes(i))), vi = (e, t) => Object.keys(t).reduce((r, n) => yp(yp({}, r), {}, {
  [n]: e(n, t[n])
}), {});
function gp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Me(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? gp(Object(r), !0).forEach(function(n) {
      b_(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function b_(e, t, r) {
  return (t = x_(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function x_(e) {
  var t = w_(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function w_(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Va = (e, t, r) => e + (t - e) * r, js = (e) => {
  var {
    from: t,
    to: r
  } = e;
  return t !== r;
}, yb = (e, t, r) => {
  var n = vi((i, a) => {
    if (js(a)) {
      var [o, l] = e(a.from, a.to, a.velocity);
      return Me(Me({}, a), {}, {
        from: o,
        velocity: l
      });
    }
    return a;
  }, t);
  return r < 1 ? vi((i, a) => js(a) && n[i] != null ? Me(Me({}, a), {}, {
    velocity: Va(a.velocity, n[i].velocity, r),
    from: Va(a.from, n[i].from, r)
  }) : a, t) : yb(e, n, r - 1);
};
function O_(e, t, r, n, i, a) {
  var o, l = n.reduce((d, v) => Me(Me({}, d), {}, {
    [v]: {
      from: e[v],
      velocity: 0,
      to: t[v]
    }
  }), {}), u = () => vi((d, v) => v.from, l), s = () => !Object.values(l).filter(js).length, c = null, f = (d) => {
    o || (o = d);
    var v = d - o, p = v / r.dt;
    l = yb(r, l, p), i(Me(Me(Me({}, e), t), u())), o = d, s() || (c = a.setTimeout(f));
  };
  return () => (c = a.setTimeout(f), () => {
    var d;
    (d = c) === null || d === void 0 || d();
  });
}
function P_(e, t, r, n, i, a, o) {
  var l = null, u = i.reduce((f, d) => {
    var v = e[d], p = t[d];
    return v == null || p == null ? f : Me(Me({}, f), {}, {
      [d]: [v, p]
    });
  }, {}), s, c = (f) => {
    s || (s = f);
    var d = (f - s) / n, v = vi((m, h) => Va(...h, r(d)), u);
    if (a(Me(Me(Me({}, e), t), v)), d < 1)
      l = o.setTimeout(c);
    else {
      var p = vi((m, h) => Va(...h, r(1)), u);
      a(Me(Me(Me({}, e), t), p));
    }
  };
  return () => (l = o.setTimeout(c), () => {
    var f;
    (f = l) === null || f === void 0 || f();
  });
}
const E_ = (e, t, r, n, i, a) => {
  var o = g_(e, t);
  return r == null ? () => (i(Me(Me({}, e), t)), () => {
  }) : r.isStepper === !0 ? O_(e, t, r, o, i, a) : P_(e, t, r, n, o, i, a);
};
var Ha = 1e-4, gb = (e, t) => [0, 3 * e, 3 * t - 6 * e, 3 * e - 3 * t + 1], bb = (e, t) => e.map((r, n) => r * t ** n).reduce((r, n) => r + n), bp = (e, t) => (r) => {
  var n = gb(e, t);
  return bb(n, r);
}, A_ = (e, t) => (r) => {
  var n = gb(e, t), i = [...n.map((a, o) => a * o).slice(1), 0];
  return bb(i, r);
}, S_ = (e) => {
  var t, r = e.split("(");
  if (r.length !== 2 || r[0] !== "cubic-bezier")
    return null;
  var n = (t = r[1]) === null || t === void 0 || (t = t.split(")")[0]) === null || t === void 0 ? void 0 : t.split(",");
  if (n == null || n.length !== 4)
    return null;
  var i = n.map((a) => parseFloat(a));
  return [i[0], i[1], i[2], i[3]];
}, __ = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  if (r.length === 1)
    switch (r[0]) {
      case "linear":
        return [0, 0, 1, 1];
      case "ease":
        return [0.25, 0.1, 0.25, 1];
      case "ease-in":
        return [0.42, 0, 1, 1];
      case "ease-out":
        return [0.42, 0, 0.58, 1];
      case "ease-in-out":
        return [0, 0, 0.58, 1];
      default: {
        var i = S_(r[0]);
        if (i)
          return i;
      }
    }
  return r.length === 4 ? r : [0, 0, 1, 1];
}, j_ = (e, t, r, n) => {
  var i = bp(e, r), a = bp(t, n), o = A_(e, r), l = (s) => s > 1 ? 1 : s < 0 ? 0 : s, u = (s) => {
    for (var c = s > 1 ? 1 : s, f = c, d = 0; d < 8; ++d) {
      var v = i(f) - c, p = o(f);
      if (Math.abs(v - c) < Ha || p < Ha)
        return a(f);
      f = l(f - v / p);
    }
    return a(f);
  };
  return u.isStepper = !1, u;
}, xp = function() {
  return j_(...__(...arguments));
}, I_ = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, {
    stiff: r = 100,
    damping: n = 8,
    dt: i = 17
  } = t, a = (o, l, u) => {
    var s = -(o - l) * r, c = u * n, f = u + (s - c) * i / 1e3, d = u * i / 1e3 + o;
    return Math.abs(d - l) < Ha && Math.abs(f) < Ha ? [l, 0] : [d, f];
  };
  return a.isStepper = !0, a.dt = i, a;
}, k_ = (e) => {
  if (typeof e == "string")
    switch (e) {
      case "ease":
      case "ease-in-out":
      case "ease-out":
      case "ease-in":
      case "linear":
        return xp(e);
      case "spring":
        return I_();
      default:
        if (e.split("(")[0] === "cubic-bezier")
          return xp(e);
    }
  return typeof e == "function" ? e : null;
};
function C_(e) {
  var t, r = () => null, n = !1, i = null, a = (o) => {
    if (!n) {
      if (Array.isArray(o)) {
        if (!o.length)
          return;
        var l = o, [u, ...s] = l;
        if (typeof u == "number") {
          i = e.setTimeout(a.bind(null, s), u);
          return;
        }
        a(u), i = e.setTimeout(a.bind(null, s));
        return;
      }
      typeof o == "string" && (t = o, r(t)), typeof o == "object" && (t = o, r(t)), typeof o == "function" && o();
    }
  };
  return {
    stop: () => {
      n = !0;
    },
    start: (o) => {
      n = !1, i && (i(), i = null), a(o);
    },
    subscribe: (o) => (r = o, () => {
      r = () => null;
    }),
    getTimeoutController: () => e
  };
}
class T_ {
  setTimeout(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = performance.now(), i = null, a = (o) => {
      o - n >= r ? t(o) : typeof requestAnimationFrame == "function" && (i = requestAnimationFrame(a));
    };
    return i = requestAnimationFrame(a), () => {
      i != null && cancelAnimationFrame(i);
    };
  }
}
function N_() {
  return C_(new T_());
}
var D_ = /* @__PURE__ */ lt(N_);
function M_(e, t) {
  var r = yt(D_);
  return gt(() => t ?? r(e), [e, t, r]);
}
var $_ = {
  begin: 0,
  duration: 1e3,
  easing: "ease",
  isActive: !0,
  canBegin: !0,
  onAnimationEnd: () => {
  },
  onAnimationStart: () => {
  }
}, wp = {
  t: 0
}, Iu = {
  t: 1
};
function Cn(e) {
  var t = je(e, $_), {
    isActive: r,
    canBegin: n,
    duration: i,
    easing: a,
    begin: o,
    onAnimationEnd: l,
    onAnimationStart: u,
    children: s
  } = t, c = pb(), f = r === "auto" ? !Di.isSsr && !c : r, d = M_(t.animationId, t.animationManager), [v, p] = re(f ? wp : Iu), m = H(null);
  return fe(() => {
    f || p(Iu);
  }, [f]), fe(() => {
    if (!f || !n)
      return ar;
    var h = E_(wp, Iu, k_(a), i, p, d.getTimeoutController()), y = () => {
      m.current = h();
    };
    return d.start([u, o, y, i, l]), () => {
      d.stop(), m.current && m.current(), l();
    };
  }, [f, n, i, a, o, u, l, d]), s(v.t);
}
function Tn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "animation-", r = H(oi(t)), n = H(e);
  return n.current !== e && (r.current = oi(t), n.current = e), r.current;
}
var R_ = ["radius"], L_ = ["radius"], Op, Pp, Ep, Ap, Sp, _p, jp, Ip, kp, Cp;
function Tp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Np(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Tp(Object(r), !0).forEach(function(n) {
      z_(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Tp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function z_(e, t, r) {
  return (t = B_(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function B_(e) {
  var t = F_(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function F_(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ga() {
  return Ga = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ga.apply(null, arguments);
}
function Dp(e, t) {
  if (e == null) return {};
  var r, n, i = W_(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function W_(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function Nt(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var Mp = (e, t, r, n, i) => {
  var a = gr(r), o = gr(n), l = Math.min(Math.abs(a) / 2, Math.abs(o) / 2), u = o >= 0 ? 1 : -1, s = a >= 0 ? 1 : -1, c = o >= 0 && a >= 0 || o < 0 && a < 0 ? 1 : 0, f;
  if (l > 0 && Array.isArray(i)) {
    for (var d = [0, 0, 0, 0], v = 0, p = 4; v < p; v++) {
      var m, h = (m = i[v]) !== null && m !== void 0 ? m : 0;
      d[v] = h > l ? l : h;
    }
    f = Ae(Op || (Op = Nt(["M", ",", ""])), e, t + u * d[0]), d[0] > 0 && (f += Ae(Pp || (Pp = Nt(["A ", ",", ",0,0,", ",", ",", ""])), d[0], d[0], c, e + s * d[0], t)), f += Ae(Ep || (Ep = Nt(["L ", ",", ""])), e + r - s * d[1], t), d[1] > 0 && (f += Ae(Ap || (Ap = Nt(["A ", ",", ",0,0,", `,
        `, ",", ""])), d[1], d[1], c, e + r, t + u * d[1])), f += Ae(Sp || (Sp = Nt(["L ", ",", ""])), e + r, t + n - u * d[2]), d[2] > 0 && (f += Ae(_p || (_p = Nt(["A ", ",", ",0,0,", `,
        `, ",", ""])), d[2], d[2], c, e + r - s * d[2], t + n)), f += Ae(jp || (jp = Nt(["L ", ",", ""])), e + s * d[3], t + n), d[3] > 0 && (f += Ae(Ip || (Ip = Nt(["A ", ",", ",0,0,", `,
        `, ",", ""])), d[3], d[3], c, e, t + n - u * d[3])), f += "Z";
  } else if (l > 0 && i === +i && i > 0) {
    var y = Math.min(l, i);
    f = Ae(kp || (kp = Nt(["M ", ",", `
            A `, ",", ",0,0,", ",", ",", `
            L `, ",", `
            A `, ",", ",0,0,", ",", ",", `
            L `, ",", `
            A `, ",", ",0,0,", ",", ",", `
            L `, ",", `
            A `, ",", ",0,0,", ",", ",", " Z"])), e, t + u * y, y, y, c, e + s * y, t, e + r - s * y, t, y, y, c, e + r, t + u * y, e + r, t + n - u * y, y, y, c, e + r - s * y, t + n, e + s * y, t + n, y, y, c, e, t + n - u * y);
  } else
    f = Ae(Cp || (Cp = Nt(["M ", ",", " h ", " v ", " h ", " Z"])), e, t, r, n, -r);
  return f;
}, $p = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  radius: 0,
  isAnimationActive: !1,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, xb = (e) => {
  var t = je(e, $p), r = H(null), [n, i] = re(-1);
  fe(() => {
    if (r.current && r.current.getTotalLength)
      try {
        var U = r.current.getTotalLength();
        U && i(U);
      } catch {
      }
  }, []);
  var {
    x: a,
    y: o,
    width: l,
    height: u,
    radius: s,
    className: c
  } = t, {
    animationEasing: f,
    animationDuration: d,
    animationBegin: v,
    isAnimationActive: p,
    isUpdateAnimationActive: m
  } = t, h = H(l), y = H(u), b = H(a), x = H(o), w = gt(() => ({
    x: a,
    y: o,
    width: l,
    height: u,
    radius: s
  }), [a, o, l, u, s]), P = Tn(w, "rectangle-");
  if (a !== +a || o !== +o || l !== +l || u !== +u || l === 0 || u === 0)
    return null;
  var O = te("recharts-rectangle", c);
  if (!m) {
    var A = Ze(t), {
      radius: _
    } = A, C = Dp(A, R_);
    return /* @__PURE__ */ g.createElement("path", Ga({}, C, {
      x: gr(a),
      y: gr(o),
      width: gr(l),
      height: gr(u),
      radius: typeof s == "number" ? s : void 0,
      className: O,
      d: Mp(a, o, l, u, s)
    }));
  }
  var T = h.current, N = y.current, j = b.current, I = x.current, $ = "0px ".concat(n === -1 ? 1 : n, "px"), K = "".concat(n, "px ").concat(n, "px"), V = mb(["strokeDasharray"], d, typeof f == "string" ? f : $p.animationEasing);
  return /* @__PURE__ */ g.createElement(Cn, {
    animationId: P,
    key: P,
    canBegin: n > 0,
    duration: d,
    easing: f,
    isActive: m,
    begin: v
  }, (U) => {
    var X = oe(T, l, U), q = oe(N, u, U), Z = oe(j, a, U), k = oe(I, o, U);
    r.current && (h.current = X, y.current = q, b.current = Z, x.current = k);
    var W;
    p ? U > 0 ? W = {
      transition: V,
      strokeDasharray: K
    } : W = {
      strokeDasharray: $
    } : W = {
      strokeDasharray: K
    };
    var Y = Ze(t), {
      radius: J
    } = Y, He = Dp(Y, L_);
    return /* @__PURE__ */ g.createElement("path", Ga({}, He, {
      radius: typeof s == "number" ? s : void 0,
      className: O,
      d: Mp(Z, k, X, q, s),
      ref: r,
      style: Np(Np({}, W), t.style)
    }));
  });
};
function Rp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Lp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Rp(Object(r), !0).forEach(function(n) {
      K_(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Rp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function K_(e, t, r) {
  return (t = q_(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function q_(e) {
  var t = U_(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function U_(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ya = Math.PI / 180, V_ = (e) => e * 180 / Math.PI, Ie = (e, t, r, n) => ({
  x: e + Math.cos(-Ya * n) * r,
  y: t + Math.sin(-Ya * n) * r
}), wb = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  return Math.min(Math.abs(t - (n.left || 0) - (n.right || 0)), Math.abs(r - (n.top || 0) - (n.bottom || 0))) / 2;
}, H_ = (e, t) => {
  var {
    x: r,
    y: n
  } = e, {
    x: i,
    y: a
  } = t;
  return Math.sqrt((r - i) ** 2 + (n - a) ** 2);
}, G_ = (e, t) => {
  var {
    x: r,
    y: n
  } = e, {
    cx: i,
    cy: a
  } = t, o = H_({
    x: r,
    y: n
  }, {
    x: i,
    y: a
  });
  if (o <= 0)
    return {
      radius: o,
      angle: 0
    };
  var l = (r - i) / o, u = Math.acos(l);
  return n > a && (u = 2 * Math.PI - u), {
    radius: o,
    angle: V_(u),
    angleInRadian: u
  };
}, Y_ = (e) => {
  var {
    startAngle: t,
    endAngle: r
  } = e, n = Math.floor(t / 360), i = Math.floor(r / 360), a = Math.min(n, i);
  return {
    startAngle: t - a * 360,
    endAngle: r - a * 360
  };
}, X_ = (e, t) => {
  var {
    startAngle: r,
    endAngle: n
  } = t, i = Math.floor(r / 360), a = Math.floor(n / 360), o = Math.min(i, a);
  return e + o * 360;
}, Z_ = (e, t) => {
  var {
    relativeX: r,
    relativeY: n
  } = e, {
    radius: i,
    angle: a
  } = G_({
    x: r,
    y: n
  }, t), {
    innerRadius: o,
    outerRadius: l
  } = t;
  if (i < o || i > l || i === 0)
    return null;
  var {
    startAngle: u,
    endAngle: s
  } = Y_(t), c = a, f;
  if (u <= s) {
    for (; c > s; )
      c -= 360;
    for (; c < u; )
      c += 360;
    f = c >= u && c <= s;
  } else {
    for (; c > u; )
      c -= 360;
    for (; c < s; )
      c += 360;
    f = c >= s && c <= u;
  }
  return f ? Lp(Lp({}, t), {}, {
    radius: i,
    angle: X_(c, t)
  }) : null;
};
function Ob(e) {
  var {
    cx: t,
    cy: r,
    radius: n,
    startAngle: i,
    endAngle: a
  } = e, o = Ie(t, r, n, i), l = Ie(t, r, n, a);
  return {
    points: [o, l],
    cx: t,
    cy: r,
    radius: n,
    startAngle: i,
    endAngle: a
  };
}
var zp, Bp, Fp, Wp, Kp, qp, Up;
function Is() {
  return Is = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Is.apply(null, arguments);
}
function zr(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var J_ = (e, t) => {
  var r = Be(t - e), n = Math.min(Math.abs(t - e), 359.999);
  return r * n;
}, sa = (e) => {
  var {
    cx: t,
    cy: r,
    radius: n,
    angle: i,
    sign: a,
    isExternal: o,
    cornerRadius: l,
    cornerIsExternal: u
  } = e, s = l * (o ? 1 : -1) + n, c = Math.asin(l / s) / Ya, f = u ? i : i + a * c, d = Ie(t, r, s, f), v = Ie(t, r, n, f), p = u ? i - a * c : i, m = Ie(t, r, s * Math.cos(c * Ya), p);
  return {
    center: d,
    circleTangency: v,
    lineTangency: m,
    theta: c
  };
}, Pb = (e) => {
  var {
    cx: t,
    cy: r,
    innerRadius: n,
    outerRadius: i,
    startAngle: a,
    endAngle: o
  } = e, l = J_(a, o), u = a + l, s = Ie(t, r, i, a), c = Ie(t, r, i, u), f = Ae(zp || (zp = zr(["M ", ",", `
    A `, ",", `,0,
    `, ",", `,
    `, ",", `
  `])), s.x, s.y, i, i, +(Math.abs(l) > 180), +(a > u), c.x, c.y);
  if (n > 0) {
    var d = Ie(t, r, n, a), v = Ie(t, r, n, u);
    f += Ae(Bp || (Bp = zr(["L ", ",", `
            A `, ",", `,0,
            `, ",", `,
            `, ",", " Z"])), v.x, v.y, n, n, +(Math.abs(l) > 180), +(a <= u), d.x, d.y);
  } else
    f += Ae(Fp || (Fp = zr(["L ", ",", " Z"])), t, r);
  return f;
}, Q_ = (e) => {
  var {
    cx: t,
    cy: r,
    innerRadius: n,
    outerRadius: i,
    cornerRadius: a,
    forceCornerRadius: o,
    cornerIsExternal: l,
    startAngle: u,
    endAngle: s
  } = e, c = Be(s - u), {
    circleTangency: f,
    lineTangency: d,
    theta: v
  } = sa({
    cx: t,
    cy: r,
    radius: i,
    angle: u,
    sign: c,
    cornerRadius: a,
    cornerIsExternal: l
  }), {
    circleTangency: p,
    lineTangency: m,
    theta: h
  } = sa({
    cx: t,
    cy: r,
    radius: i,
    angle: s,
    sign: -c,
    cornerRadius: a,
    cornerIsExternal: l
  }), y = l ? Math.abs(u - s) : Math.abs(u - s) - v - h;
  if (y < 0)
    return o ? Ae(Wp || (Wp = zr(["M ", ",", `
        a`, ",", ",0,0,1,", `,0
        a`, ",", ",0,0,1,", `,0
      `])), d.x, d.y, a, a, a * 2, a, a, -a * 2) : Pb({
      cx: t,
      cy: r,
      innerRadius: n,
      outerRadius: i,
      startAngle: u,
      endAngle: s
    });
  var b = Ae(Kp || (Kp = zr(["M ", ",", `
    A`, ",", ",0,0,", ",", ",", `
    A`, ",", ",0,", ",", ",", ",", `
    A`, ",", ",0,0,", ",", ",", `
  `])), d.x, d.y, a, a, +(c < 0), f.x, f.y, i, i, +(y > 180), +(c < 0), p.x, p.y, a, a, +(c < 0), m.x, m.y);
  if (n > 0) {
    var {
      circleTangency: x,
      lineTangency: w,
      theta: P
    } = sa({
      cx: t,
      cy: r,
      radius: n,
      angle: u,
      sign: c,
      isExternal: !0,
      cornerRadius: a,
      cornerIsExternal: l
    }), {
      circleTangency: O,
      lineTangency: A,
      theta: _
    } = sa({
      cx: t,
      cy: r,
      radius: n,
      angle: s,
      sign: -c,
      isExternal: !0,
      cornerRadius: a,
      cornerIsExternal: l
    }), C = l ? Math.abs(u - s) : Math.abs(u - s) - P - _;
    if (C < 0 && a === 0)
      return "".concat(b, "L").concat(t, ",").concat(r, "Z");
    b += Ae(qp || (qp = zr(["L", ",", `
      A`, ",", ",0,0,", ",", ",", `
      A`, ",", ",0,", ",", ",", ",", `
      A`, ",", ",0,0,", ",", ",", "Z"])), A.x, A.y, a, a, +(c < 0), O.x, O.y, n, n, +(C > 180), +(c > 0), x.x, x.y, a, a, +(c < 0), w.x, w.y);
  } else
    b += Ae(Up || (Up = zr(["L", ",", "Z"])), t, r);
  return b;
}, ej = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: !1,
  cornerIsExternal: !1
}, Eb = (e) => {
  var t = je(e, ej), {
    cx: r,
    cy: n,
    innerRadius: i,
    outerRadius: a,
    cornerRadius: o,
    forceCornerRadius: l,
    cornerIsExternal: u,
    startAngle: s,
    endAngle: c,
    className: f
  } = t;
  if (a < i || s === c)
    return null;
  var d = te("recharts-sector", f), v = a - i, p = Xe(o, v, 0, !0), m;
  return p > 0 && Math.abs(s - c) < 360 ? m = Q_({
    cx: r,
    cy: n,
    innerRadius: i,
    outerRadius: a,
    cornerRadius: Math.min(p, v / 2),
    forceCornerRadius: l,
    cornerIsExternal: u,
    startAngle: s,
    endAngle: c
  }) : m = Pb({
    cx: r,
    cy: n,
    innerRadius: i,
    outerRadius: a,
    startAngle: s,
    endAngle: c
  }), /* @__PURE__ */ g.createElement("path", Is({}, Ze(t), {
    className: d,
    d: m
  }));
};
function tj(e, t, r) {
  if (e === "horizontal")
    return [{
      x: t.x,
      y: r.top
    }, {
      x: t.x,
      y: r.top + r.height
    }];
  if (e === "vertical")
    return [{
      x: r.left,
      y: t.y
    }, {
      x: r.left + r.width,
      y: t.y
    }];
  if (Yy(t)) {
    if (e === "centric") {
      var {
        cx: n,
        cy: i,
        innerRadius: a,
        outerRadius: o,
        angle: l
      } = t, u = Ie(n, i, a, l), s = Ie(n, i, o, l);
      return [{
        x: u.x,
        y: u.y
      }, {
        x: s.x,
        y: s.y
      }];
    }
    return Ob(t);
  }
}
var ku = {}, Cu = {}, Tu = {}, Vp;
function rj() {
  return Vp || (Vp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ sg();
    function r(n) {
      return t.isSymbol(n) ? NaN : Number(n);
    }
    e.toNumber = r;
  })(Tu)), Tu;
}
var Hp;
function nj() {
  return Hp || (Hp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ rj();
    function r(n) {
      return n ? (n = t.toNumber(n), n === 1 / 0 || n === -1 / 0 ? (n < 0 ? -1 : 1) * Number.MAX_VALUE : n === n ? n : 0) : n === 0 ? n : 0;
    }
    e.toFinite = r;
  })(Cu)), Cu;
}
var Gp;
function ij() {
  return Gp || (Gp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ cg(), r = /* @__PURE__ */ nj();
    function n(i, a, o) {
      o && typeof o != "number" && t.isIterateeCall(i, a, o) && (a = o = void 0), i = r.toFinite(i), a === void 0 ? (a = i, i = 0) : a = r.toFinite(a), o = o === void 0 ? i < a ? 1 : -1 : r.toFinite(o);
      const l = Math.max(Math.ceil((a - i) / (o || 1)), 0), u = new Array(l);
      for (let s = 0; s < l; s++)
        u[s] = i, i += o;
      return u;
    }
    e.range = n;
  })(ku)), ku;
}
var Nu, Yp;
function aj() {
  return Yp || (Yp = 1, Nu = ij().range), Nu;
}
var oj = /* @__PURE__ */ aj();
const Ab = /* @__PURE__ */ an(oj);
var ur = (e) => e.chartData, qo = S([ur], (e) => {
  var t = e.chartData != null ? e.chartData.length - 1 : 0;
  return {
    chartData: e.chartData,
    computedData: e.computedData,
    dataEndIndex: t,
    dataStartIndex: 0
  };
}), Sc = (e, t, r, n) => n ? qo(e) : ur(e), Sb = (e, t, r) => r ? qo(e) : ur(e);
function zt(e) {
  if (Array.isArray(e) && e.length === 2) {
    var [t, r] = e;
    if (G(t) && G(r))
      return !0;
  }
  return !1;
}
function Xp(e, t, r) {
  return r ? e : [Math.min(e[0], t[0]), Math.max(e[1], t[1])];
}
function _b(e, t) {
  if (t && typeof e != "function" && Array.isArray(e) && e.length === 2) {
    var [r, n] = e, i, a;
    if (G(r))
      i = r;
    else if (typeof r == "function")
      return;
    if (G(n))
      a = n;
    else if (typeof n == "function")
      return;
    var o = [i, a];
    if (zt(o))
      return o;
  }
}
function lj(e, t, r) {
  if (!(!r && t == null)) {
    if (typeof e == "function" && t != null)
      try {
        var n = e(t, r);
        if (zt(n))
          return Xp(n, t, r);
      } catch {
      }
    if (Array.isArray(e) && e.length === 2) {
      var [i, a] = e, o, l;
      if (i === "auto")
        t != null && (o = Math.min(...t));
      else if (L(i))
        o = i;
      else if (typeof i == "function")
        try {
          t != null && (o = i(t?.[0]));
        } catch {
        }
      else if (typeof i == "string" && Lv.test(i)) {
        var u = Lv.exec(i);
        if (u == null || u[1] == null || t == null)
          o = void 0;
        else {
          var s = +u[1];
          o = t[0] - s;
        }
      } else
        o = t?.[0];
      if (a === "auto")
        t != null && (l = Math.max(...t));
      else if (L(a))
        l = a;
      else if (typeof a == "function")
        try {
          t != null && (l = a(t?.[1]));
        } catch {
        }
      else if (typeof a == "string" && zv.test(a)) {
        var c = zv.exec(a);
        if (c == null || c[1] == null || t == null)
          l = void 0;
        else {
          var f = +c[1];
          l = t[1] + f;
        }
      } else
        l = t?.[1];
      var d = [o, l];
      if (zt(d))
        return t == null ? d : Xp(d, t, r);
    }
  }
}
var Nn = 1e9, uj = {
  // These values must be integers within the stated ranges (inclusive).
  // Most of these values can be changed during run-time using `Decimal.config`.
  // The maximum number of significant digits of the result of a calculation or base conversion.
  // E.g. `Decimal.config({ precision: 20 });`
  precision: 20,
  // 1 to MAX_DIGITS
  // The rounding mode used by default by `toInteger`, `toDecimalPlaces`, `toExponential`,
  // `toFixed`, `toPrecision` and `toSignificantDigits`.
  //
  // ROUND_UP         0 Away from zero.
  // ROUND_DOWN       1 Towards zero.
  // ROUND_CEIL       2 Towards +Infinity.
  // ROUND_FLOOR      3 Towards -Infinity.
  // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
  // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
  // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
  // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
  // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
  //
  // E.g.
  // `Decimal.rounding = 4;`
  // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
  rounding: 4,
  // 0 to 8
  // The exponent value at and beneath which `toString` returns exponential notation.
  // JavaScript numbers: -7
  toExpNeg: -7,
  // 0 to -MAX_E
  // The exponent value at and above which `toString` returns exponential notation.
  // JavaScript numbers: 21
  toExpPos: 21,
  // 0 to MAX_E
  // The natural logarithm of 10.
  // 115 digits
  LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
}, jc, xe = !0, At = "[DecimalError] ", Ur = At + "Invalid argument: ", _c = At + "Exponent out of range: ", Dn = Math.floor, Rr = Math.pow, sj = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, ft, ze = 1e7, ye = 7, jb = 9007199254740991, Xa = Dn(jb / ye), F = {};
F.absoluteValue = F.abs = function() {
  var e = new this.constructor(this);
  return e.s && (e.s = 1), e;
};
F.comparedTo = F.cmp = function(e) {
  var t, r, n, i, a = this;
  if (e = new a.constructor(e), a.s !== e.s) return a.s || -e.s;
  if (a.e !== e.e) return a.e > e.e ^ a.s < 0 ? 1 : -1;
  for (n = a.d.length, i = e.d.length, t = 0, r = n < i ? n : i; t < r; ++t)
    if (a.d[t] !== e.d[t]) return a.d[t] > e.d[t] ^ a.s < 0 ? 1 : -1;
  return n === i ? 0 : n > i ^ a.s < 0 ? 1 : -1;
};
F.decimalPlaces = F.dp = function() {
  var e = this, t = e.d.length - 1, r = (t - e.e) * ye;
  if (t = e.d[t], t) for (; t % 10 == 0; t /= 10) r--;
  return r < 0 ? 0 : r;
};
F.dividedBy = F.div = function(e) {
  return Jt(this, new this.constructor(e));
};
F.dividedToIntegerBy = F.idiv = function(e) {
  var t = this, r = t.constructor;
  return pe(Jt(t, new r(e), 0, 1), r.precision);
};
F.equals = F.eq = function(e) {
  return !this.cmp(e);
};
F.exponent = function() {
  return ke(this);
};
F.greaterThan = F.gt = function(e) {
  return this.cmp(e) > 0;
};
F.greaterThanOrEqualTo = F.gte = function(e) {
  return this.cmp(e) >= 0;
};
F.isInteger = F.isint = function() {
  return this.e > this.d.length - 2;
};
F.isNegative = F.isneg = function() {
  return this.s < 0;
};
F.isPositive = F.ispos = function() {
  return this.s > 0;
};
F.isZero = function() {
  return this.s === 0;
};
F.lessThan = F.lt = function(e) {
  return this.cmp(e) < 0;
};
F.lessThanOrEqualTo = F.lte = function(e) {
  return this.cmp(e) < 1;
};
F.logarithm = F.log = function(e) {
  var t, r = this, n = r.constructor, i = n.precision, a = i + 5;
  if (e === void 0)
    e = new n(10);
  else if (e = new n(e), e.s < 1 || e.eq(ft)) throw Error(At + "NaN");
  if (r.s < 1) throw Error(At + (r.s ? "NaN" : "-Infinity"));
  return r.eq(ft) ? new n(0) : (xe = !1, t = Jt(pi(r, a), pi(e, a), a), xe = !0, pe(t, i));
};
F.minus = F.sub = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? Cb(t, e) : Ib(t, (e.s = -e.s, e));
};
F.modulo = F.mod = function(e) {
  var t, r = this, n = r.constructor, i = n.precision;
  if (e = new n(e), !e.s) throw Error(At + "NaN");
  return r.s ? (xe = !1, t = Jt(r, e, 0, 1).times(e), xe = !0, r.minus(t)) : pe(new n(r), i);
};
F.naturalExponential = F.exp = function() {
  return kb(this);
};
F.naturalLogarithm = F.ln = function() {
  return pi(this);
};
F.negated = F.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s || 0, e;
};
F.plus = F.add = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? Ib(t, e) : Cb(t, (e.s = -e.s, e));
};
F.precision = F.sd = function(e) {
  var t, r, n, i = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Ur + e);
  if (t = ke(i) + 1, n = i.d.length - 1, r = n * ye + 1, n = i.d[n], n) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = i.d[0]; n >= 10; n /= 10) r++;
  }
  return e && t > r ? t : r;
};
F.squareRoot = F.sqrt = function() {
  var e, t, r, n, i, a, o, l = this, u = l.constructor;
  if (l.s < 1) {
    if (!l.s) return new u(0);
    throw Error(At + "NaN");
  }
  for (e = ke(l), xe = !1, i = Math.sqrt(+l), i == 0 || i == 1 / 0 ? (t = Lt(l.d), (t.length + e) % 2 == 0 && (t += "0"), i = Math.sqrt(t), e = Dn((e + 1) / 2) - (e < 0 || e % 2), i == 1 / 0 ? t = "5e" + e : (t = i.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new u(t)) : n = new u(i.toString()), r = u.precision, i = o = r + 3; ; )
    if (a = n, n = a.plus(Jt(l, a, o + 2)).times(0.5), Lt(a.d).slice(0, o) === (t = Lt(n.d)).slice(0, o)) {
      if (t = t.slice(o - 3, o + 1), i == o && t == "4999") {
        if (pe(a, r + 1, 0), a.times(a).eq(l)) {
          n = a;
          break;
        }
      } else if (t != "9999")
        break;
      o += 4;
    }
  return xe = !0, pe(n, r);
};
F.times = F.mul = function(e) {
  var t, r, n, i, a, o, l, u, s, c = this, f = c.constructor, d = c.d, v = (e = new f(e)).d;
  if (!c.s || !e.s) return new f(0);
  for (e.s *= c.s, r = c.e + e.e, u = d.length, s = v.length, u < s && (a = d, d = v, v = a, o = u, u = s, s = o), a = [], o = u + s, n = o; n--; ) a.push(0);
  for (n = s; --n >= 0; ) {
    for (t = 0, i = u + n; i > n; )
      l = a[i] + v[n] * d[i - n - 1] + t, a[i--] = l % ze | 0, t = l / ze | 0;
    a[i] = (a[i] + t) % ze | 0;
  }
  for (; !a[--o]; ) a.pop();
  return t ? ++r : a.shift(), e.d = a, e.e = r, xe ? pe(e, f.precision) : e;
};
F.toDecimalPlaces = F.todp = function(e, t) {
  var r = this, n = r.constructor;
  return r = new n(r), e === void 0 ? r : (Kt(e, 0, Nn), t === void 0 ? t = n.rounding : Kt(t, 0, 8), pe(r, e + ke(r) + 1, t));
};
F.toExponential = function(e, t) {
  var r, n = this, i = n.constructor;
  return e === void 0 ? r = tn(n, !0) : (Kt(e, 0, Nn), t === void 0 ? t = i.rounding : Kt(t, 0, 8), n = pe(new i(n), e + 1, t), r = tn(n, !0, e + 1)), r;
};
F.toFixed = function(e, t) {
  var r, n, i = this, a = i.constructor;
  return e === void 0 ? tn(i) : (Kt(e, 0, Nn), t === void 0 ? t = a.rounding : Kt(t, 0, 8), n = pe(new a(i), e + ke(i) + 1, t), r = tn(n.abs(), !1, e + ke(n) + 1), i.isneg() && !i.isZero() ? "-" + r : r);
};
F.toInteger = F.toint = function() {
  var e = this, t = e.constructor;
  return pe(new t(e), ke(e) + 1, t.rounding);
};
F.toNumber = function() {
  return +this;
};
F.toPower = F.pow = function(e) {
  var t, r, n, i, a, o, l = this, u = l.constructor, s = 12, c = +(e = new u(e));
  if (!e.s) return new u(ft);
  if (l = new u(l), !l.s) {
    if (e.s < 1) throw Error(At + "Infinity");
    return l;
  }
  if (l.eq(ft)) return l;
  if (n = u.precision, e.eq(ft)) return pe(l, n);
  if (t = e.e, r = e.d.length - 1, o = t >= r, a = l.s, o) {
    if ((r = c < 0 ? -c : c) <= jb) {
      for (i = new u(ft), t = Math.ceil(n / ye + 4), xe = !1; r % 2 && (i = i.times(l), Jp(i.d, t)), r = Dn(r / 2), r !== 0; )
        l = l.times(l), Jp(l.d, t);
      return xe = !0, e.s < 0 ? new u(ft).div(i) : pe(i, n);
    }
  } else if (a < 0) throw Error(At + "NaN");
  return a = a < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1, l.s = 1, xe = !1, i = e.times(pi(l, n + s)), xe = !0, i = kb(i), i.s = a, i;
};
F.toPrecision = function(e, t) {
  var r, n, i = this, a = i.constructor;
  return e === void 0 ? (r = ke(i), n = tn(i, r <= a.toExpNeg || r >= a.toExpPos)) : (Kt(e, 1, Nn), t === void 0 ? t = a.rounding : Kt(t, 0, 8), i = pe(new a(i), e, t), r = ke(i), n = tn(i, e <= r || r <= a.toExpNeg, e)), n;
};
F.toSignificantDigits = F.tosd = function(e, t) {
  var r = this, n = r.constructor;
  return e === void 0 ? (e = n.precision, t = n.rounding) : (Kt(e, 1, Nn), t === void 0 ? t = n.rounding : Kt(t, 0, 8)), pe(new n(r), e, t);
};
F.toString = F.valueOf = F.val = F.toJSON = F[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = function() {
  var e = this, t = ke(e), r = e.constructor;
  return tn(e, t <= r.toExpNeg || t >= r.toExpPos);
};
function Ib(e, t) {
  var r, n, i, a, o, l, u, s, c = e.constructor, f = c.precision;
  if (!e.s || !t.s)
    return t.s || (t = new c(e)), xe ? pe(t, f) : t;
  if (u = e.d, s = t.d, o = e.e, i = t.e, u = u.slice(), a = o - i, a) {
    for (a < 0 ? (n = u, a = -a, l = s.length) : (n = s, i = o, l = u.length), o = Math.ceil(f / ye), l = o > l ? o + 1 : l + 1, a > l && (a = l, n.length = 1), n.reverse(); a--; ) n.push(0);
    n.reverse();
  }
  for (l = u.length, a = s.length, l - a < 0 && (a = l, n = s, s = u, u = n), r = 0; a; )
    r = (u[--a] = u[a] + s[a] + r) / ze | 0, u[a] %= ze;
  for (r && (u.unshift(r), ++i), l = u.length; u[--l] == 0; ) u.pop();
  return t.d = u, t.e = i, xe ? pe(t, f) : t;
}
function Kt(e, t, r) {
  if (e !== ~~e || e < t || e > r)
    throw Error(Ur + e);
}
function Lt(e) {
  var t, r, n, i = e.length - 1, a = "", o = e[0];
  if (i > 0) {
    for (a += o, t = 1; t < i; t++)
      n = e[t] + "", r = ye - n.length, r && (a += hr(r)), a += n;
    o = e[t], n = o + "", r = ye - n.length, r && (a += hr(r));
  } else if (o === 0)
    return "0";
  for (; o % 10 === 0; ) o /= 10;
  return a + o;
}
var Jt = /* @__PURE__ */ (function() {
  function e(n, i) {
    var a, o = 0, l = n.length;
    for (n = n.slice(); l--; )
      a = n[l] * i + o, n[l] = a % ze | 0, o = a / ze | 0;
    return o && n.unshift(o), n;
  }
  function t(n, i, a, o) {
    var l, u;
    if (a != o)
      u = a > o ? 1 : -1;
    else
      for (l = u = 0; l < a; l++)
        if (n[l] != i[l]) {
          u = n[l] > i[l] ? 1 : -1;
          break;
        }
    return u;
  }
  function r(n, i, a) {
    for (var o = 0; a--; )
      n[a] -= o, o = n[a] < i[a] ? 1 : 0, n[a] = o * ze + n[a] - i[a];
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function(n, i, a, o) {
    var l, u, s, c, f, d, v, p, m, h, y, b, x, w, P, O, A, _, C = n.constructor, T = n.s == i.s ? 1 : -1, N = n.d, j = i.d;
    if (!n.s) return new C(n);
    if (!i.s) throw Error(At + "Division by zero");
    for (u = n.e - i.e, A = j.length, P = N.length, v = new C(T), p = v.d = [], s = 0; j[s] == (N[s] || 0); ) ++s;
    if (j[s] > (N[s] || 0) && --u, a == null ? b = a = C.precision : o ? b = a + (ke(n) - ke(i)) + 1 : b = a, b < 0) return new C(0);
    if (b = b / ye + 2 | 0, s = 0, A == 1)
      for (c = 0, j = j[0], b++; (s < P || c) && b--; s++)
        x = c * ze + (N[s] || 0), p[s] = x / j | 0, c = x % j | 0;
    else {
      for (c = ze / (j[0] + 1) | 0, c > 1 && (j = e(j, c), N = e(N, c), A = j.length, P = N.length), w = A, m = N.slice(0, A), h = m.length; h < A; ) m[h++] = 0;
      _ = j.slice(), _.unshift(0), O = j[0], j[1] >= ze / 2 && ++O;
      do
        c = 0, l = t(j, m, A, h), l < 0 ? (y = m[0], A != h && (y = y * ze + (m[1] || 0)), c = y / O | 0, c > 1 ? (c >= ze && (c = ze - 1), f = e(j, c), d = f.length, h = m.length, l = t(f, m, d, h), l == 1 && (c--, r(f, A < d ? _ : j, d))) : (c == 0 && (l = c = 1), f = j.slice()), d = f.length, d < h && f.unshift(0), r(m, f, h), l == -1 && (h = m.length, l = t(j, m, A, h), l < 1 && (c++, r(m, A < h ? _ : j, h))), h = m.length) : l === 0 && (c++, m = [0]), p[s++] = c, l && m[0] ? m[h++] = N[w] || 0 : (m = [N[w]], h = 1);
      while ((w++ < P || m[0] !== void 0) && b--);
    }
    return p[0] || p.shift(), v.e = u, pe(v, o ? a + ke(v) + 1 : a);
  };
})();
function kb(e, t) {
  var r, n, i, a, o, l, u = 0, s = 0, c = e.constructor, f = c.precision;
  if (ke(e) > 16) throw Error(_c + ke(e));
  if (!e.s) return new c(ft);
  for (xe = !1, l = f, o = new c(0.03125); e.abs().gte(0.1); )
    e = e.times(o), s += 5;
  for (n = Math.log(Rr(2, s)) / Math.LN10 * 2 + 5 | 0, l += n, r = i = a = new c(ft), c.precision = l; ; ) {
    if (i = pe(i.times(e), l), r = r.times(++u), o = a.plus(Jt(i, r, l)), Lt(o.d).slice(0, l) === Lt(a.d).slice(0, l)) {
      for (; s--; ) a = pe(a.times(a), l);
      return c.precision = f, t == null ? (xe = !0, pe(a, f)) : a;
    }
    a = o;
  }
}
function ke(e) {
  for (var t = e.e * ye, r = e.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function Du(e, t, r) {
  if (t > e.LN10.sd())
    throw xe = !0, r && (e.precision = r), Error(At + "LN10 precision limit exceeded");
  return pe(new e(e.LN10), t);
}
function hr(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function pi(e, t) {
  var r, n, i, a, o, l, u, s, c, f = 1, d = 10, v = e, p = v.d, m = v.constructor, h = m.precision;
  if (v.s < 1) throw Error(At + (v.s ? "NaN" : "-Infinity"));
  if (v.eq(ft)) return new m(0);
  if (t == null ? (xe = !1, s = h) : s = t, v.eq(10))
    return t == null && (xe = !0), Du(m, s);
  if (s += d, m.precision = s, r = Lt(p), n = r.charAt(0), a = ke(v), Math.abs(a) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
      v = v.times(e), r = Lt(v.d), n = r.charAt(0), f++;
    a = ke(v), n > 1 ? (v = new m("0." + r), a++) : v = new m(n + "." + r.slice(1));
  } else
    return u = Du(m, s + 2, h).times(a + ""), v = pi(new m(n + "." + r.slice(1)), s - d).plus(u), m.precision = h, t == null ? (xe = !0, pe(v, h)) : v;
  for (l = o = v = Jt(v.minus(ft), v.plus(ft), s), c = pe(v.times(v), s), i = 3; ; ) {
    if (o = pe(o.times(c), s), u = l.plus(Jt(o, new m(i), s)), Lt(u.d).slice(0, s) === Lt(l.d).slice(0, s))
      return l = l.times(2), a !== 0 && (l = l.plus(Du(m, s + 2, h).times(a + ""))), l = Jt(l, new m(f), s), m.precision = h, t == null ? (xe = !0, pe(l, h)) : l;
    l = u, i += 2;
  }
}
function Zp(e, t) {
  var r, n, i;
  for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; ) ++n;
  for (i = t.length; t.charCodeAt(i - 1) === 48; ) --i;
  if (t = t.slice(n, i), t) {
    if (i -= n, r = r - n - 1, e.e = Dn(r / ye), e.d = [], n = (r + 1) % ye, r < 0 && (n += ye), n < i) {
      for (n && e.d.push(+t.slice(0, n)), i -= ye; n < i; ) e.d.push(+t.slice(n, n += ye));
      t = t.slice(n), n = ye - t.length;
    } else
      n -= i;
    for (; n--; ) t += "0";
    if (e.d.push(+t), xe && (e.e > Xa || e.e < -Xa)) throw Error(_c + r);
  } else
    e.s = 0, e.e = 0, e.d = [0];
  return e;
}
function pe(e, t, r) {
  var n, i, a, o, l, u, s, c, f = e.d;
  for (o = 1, a = f[0]; a >= 10; a /= 10) o++;
  if (n = t - o, n < 0)
    n += ye, i = t, s = f[c = 0];
  else {
    if (c = Math.ceil((n + 1) / ye), a = f.length, c >= a) return e;
    for (s = a = f[c], o = 1; a >= 10; a /= 10) o++;
    n %= ye, i = n - ye + o;
  }
  if (r !== void 0 && (a = Rr(10, o - i - 1), l = s / a % 10 | 0, u = t < 0 || f[c + 1] !== void 0 || s % a, u = r < 4 ? (l || u) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : l > 5 || l == 5 && (r == 4 || u || r == 6 && // Check whether the digit to the left of the rounding digit is odd.
  (n > 0 ? i > 0 ? s / Rr(10, o - i) : 0 : f[c - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7))), t < 1 || !f[0])
    return u ? (a = ke(e), f.length = 1, t = t - a - 1, f[0] = Rr(10, (ye - t % ye) % ye), e.e = Dn(-t / ye) || 0) : (f.length = 1, f[0] = e.e = e.s = 0), e;
  if (n == 0 ? (f.length = c, a = 1, c--) : (f.length = c + 1, a = Rr(10, ye - n), f[c] = i > 0 ? (s / Rr(10, o - i) % Rr(10, i) | 0) * a : 0), u)
    for (; ; )
      if (c == 0) {
        (f[0] += a) == ze && (f[0] = 1, ++e.e);
        break;
      } else {
        if (f[c] += a, f[c] != ze) break;
        f[c--] = 0, a = 1;
      }
  for (n = f.length; f[--n] === 0; ) f.pop();
  if (xe && (e.e > Xa || e.e < -Xa))
    throw Error(_c + ke(e));
  return e;
}
function Cb(e, t) {
  var r, n, i, a, o, l, u, s, c, f, d = e.constructor, v = d.precision;
  if (!e.s || !t.s)
    return t.s ? t.s = -t.s : t = new d(e), xe ? pe(t, v) : t;
  if (u = e.d, f = t.d, n = t.e, s = e.e, u = u.slice(), o = s - n, o) {
    for (c = o < 0, c ? (r = u, o = -o, l = f.length) : (r = f, n = s, l = u.length), i = Math.max(Math.ceil(v / ye), l) + 2, o > i && (o = i, r.length = 1), r.reverse(), i = o; i--; ) r.push(0);
    r.reverse();
  } else {
    for (i = u.length, l = f.length, c = i < l, c && (l = i), i = 0; i < l; i++)
      if (u[i] != f[i]) {
        c = u[i] < f[i];
        break;
      }
    o = 0;
  }
  for (c && (r = u, u = f, f = r, t.s = -t.s), l = u.length, i = f.length - l; i > 0; --i) u[l++] = 0;
  for (i = f.length; i > o; ) {
    if (u[--i] < f[i]) {
      for (a = i; a && u[--a] === 0; ) u[a] = ze - 1;
      --u[a], u[i] += ze;
    }
    u[i] -= f[i];
  }
  for (; u[--l] === 0; ) u.pop();
  for (; u[0] === 0; u.shift()) --n;
  return u[0] ? (t.d = u, t.e = n, xe ? pe(t, v) : t) : new d(0);
}
function tn(e, t, r) {
  var n, i = ke(e), a = Lt(e.d), o = a.length;
  return t ? (r && (n = r - o) > 0 ? a = a.charAt(0) + "." + a.slice(1) + hr(n) : o > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (i < 0 ? "e" : "e+") + i) : i < 0 ? (a = "0." + hr(-i - 1) + a, r && (n = r - o) > 0 && (a += hr(n))) : i >= o ? (a += hr(i + 1 - o), r && (n = r - i - 1) > 0 && (a = a + "." + hr(n))) : ((n = i + 1) < o && (a = a.slice(0, n) + "." + a.slice(n)), r && (n = r - o) > 0 && (i + 1 === o && (a += "."), a += hr(n))), e.s < 0 ? "-" + a : a;
}
function Jp(e, t) {
  if (e.length > t)
    return e.length = t, !0;
}
function Tb(e) {
  var t, r, n;
  function i(a) {
    var o = this;
    if (!(o instanceof i)) return new i(a);
    if (o.constructor = i, a instanceof i) {
      o.s = a.s, o.e = a.e, o.d = (a = a.d) ? a.slice() : a;
      return;
    }
    if (typeof a == "number") {
      if (a * 0 !== 0)
        throw Error(Ur + a);
      if (a > 0)
        o.s = 1;
      else if (a < 0)
        a = -a, o.s = -1;
      else {
        o.s = 0, o.e = 0, o.d = [0];
        return;
      }
      if (a === ~~a && a < 1e7) {
        o.e = 0, o.d = [a];
        return;
      }
      return Zp(o, a.toString());
    } else if (typeof a != "string")
      throw Error(Ur + a);
    if (a.charCodeAt(0) === 45 ? (a = a.slice(1), o.s = -1) : o.s = 1, sj.test(a)) Zp(o, a);
    else throw Error(Ur + a);
  }
  if (i.prototype = F, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.clone = Tb, i.config = i.set = cj, e === void 0 && (e = {}), e)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; ) e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
  return i.config(e), i;
}
function cj(e) {
  if (!e || typeof e != "object")
    throw Error(At + "Object expected");
  var t, r, n, i = [
    "precision",
    1,
    Nn,
    "rounding",
    0,
    8,
    "toExpNeg",
    -1 / 0,
    0,
    "toExpPos",
    0,
    1 / 0
  ];
  for (t = 0; t < i.length; t += 3)
    if ((n = e[r = i[t]]) !== void 0)
      if (Dn(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
      else throw Error(Ur + r + ": " + n);
  if ((n = e[r = "LN10"]) !== void 0)
    if (n == Math.LN10) this[r] = new this(n);
    else throw Error(Ur + r + ": " + n);
  return this;
}
var jc = Tb(uj);
ft = new jc(1);
const Q = jc;
function Nb(e) {
  var t;
  return e === 0 ? t = 1 : t = Math.floor(new Q(e).abs().log(10).toNumber()) + 1, t;
}
function Db(e, t, r) {
  for (var n = new Q(e), i = 0, a = []; n.lt(t) && i < 1e5; )
    a.push(n.toNumber()), n = n.add(r), i++;
  return a;
}
var Mb = (e) => {
  var [t, r] = e, [n, i] = [t, r];
  return t > r && ([n, i] = [r, t]), [n, i];
}, Ic = (e, t, r) => {
  if (e.lte(0))
    return new Q(0);
  var n = Nb(e.toNumber()), i = new Q(10).pow(n), a = e.div(i), o = n !== 1 ? 0.05 : 0.1, l = new Q(Math.ceil(a.div(o).toNumber())).add(r).mul(o), u = l.mul(i);
  return t ? new Q(u.toNumber()) : new Q(Math.ceil(u.toNumber()));
}, $b = (e, t, r) => {
  var n;
  if (e.lte(0))
    return new Q(0);
  var i = [1, 2, 2.5, 5], a = e.toNumber(), o = Math.floor(new Q(a).abs().log(10).toNumber()), l = new Q(10).pow(o), u = e.div(l).toNumber(), s = i.findIndex((v) => v >= u - 1e-10);
  if (s === -1 && (l = l.mul(10), s = 0), s += r, s >= i.length) {
    var c = Math.floor(s / i.length);
    s %= i.length, l = l.mul(new Q(10).pow(c));
  }
  var f = (n = i[s]) !== null && n !== void 0 ? n : 1, d = new Q(f).mul(l);
  return t ? d : new Q(Math.ceil(d.toNumber()));
}, fj = (e, t, r) => {
  var n = new Q(1), i = new Q(e);
  if (!i.isint() && r) {
    var a = Math.abs(e);
    a < 1 ? (n = new Q(10).pow(Nb(e) - 1), i = new Q(Math.floor(i.div(n).toNumber())).mul(n)) : a > 1 && (i = new Q(Math.floor(e)));
  } else e === 0 ? i = new Q(Math.floor((t - 1) / 2)) : r || (i = new Q(Math.floor(e)));
  for (var o = Math.floor((t - 1) / 2), l = [], u = 0; u < t; u++)
    l.push(i.add(new Q(u - o).mul(n)).toNumber());
  return l;
}, Rb = function(t, r, n, i) {
  var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0, o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : Ic;
  if (!Number.isFinite((r - t) / (n - 1)))
    return {
      step: new Q(0),
      tickMin: new Q(0),
      tickMax: new Q(0)
    };
  var l = o(new Q(r).sub(t).div(n - 1), i, a), u;
  t <= 0 && r >= 0 ? u = new Q(0) : (u = new Q(t).add(r).div(2), u = u.sub(new Q(u).mod(l)));
  var s = Math.ceil(u.sub(t).div(l).toNumber()), c = Math.ceil(new Q(r).sub(u).div(l).toNumber()), f = s + c + 1;
  return f > n ? Rb(t, r, n, i, a + 1, o) : (f < n && (c = r > 0 ? c + (n - f) : c, s = r > 0 ? s : s + (n - f)), {
    step: l,
    tickMin: u.sub(new Q(s).mul(l)),
    tickMax: u.add(new Q(c).mul(l))
  });
}, Qp = function(t) {
  var [r, n] = t, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "auto", l = Math.max(i, 2), [u, s] = Mb([r, n]);
  if (u === -1 / 0 || s === 1 / 0) {
    var c = s === 1 / 0 ? [u, ...Array(i - 1).fill(1 / 0)] : [...Array(i - 1).fill(-1 / 0), s];
    return r > n ? c.reverse() : c;
  }
  if (u === s)
    return fj(u, i, a);
  var f = o === "snap125" ? $b : Ic, {
    step: d,
    tickMin: v,
    tickMax: p
  } = Rb(u, s, l, a, 0, f), m = Db(v, p.add(new Q(0.1).mul(d)), d);
  return r > n ? m.reverse() : m;
}, eh = function(t, r) {
  var [n, i] = t, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "auto", [l, u] = Mb([n, i]);
  if (l === -1 / 0 || u === 1 / 0)
    return [n, i];
  if (l === u)
    return [l];
  var s = o === "snap125" ? $b : Ic, c = Math.max(r, 2), f = s(new Q(u).sub(l).div(c - 1), a, 0), d = [...Db(new Q(l), new Q(u), f), u];
  return a === !1 && (d = d.map((v) => Math.round(v))), n > i ? d.reverse() : d;
}, Lb = (e) => e.rootProps.maxBarSize, dj = (e) => e.rootProps.barGap, zb = (e) => e.rootProps.barCategoryGap, vj = (e) => e.rootProps.barSize, Mi = (e) => e.rootProps.stackOffset, Bb = (e) => e.rootProps.reverseStackOrder, kc = (e) => e.options.chartName, Cc = (e) => e.rootProps.syncId, Fb = (e) => e.rootProps.syncMethod, Tc = (e) => e.options.eventEmitter, pj = (e) => e.rootProps.baseValue, _e = {
  /**
   * CartesianGrid and PolarGrid
   */
  grid: -100,
  /**
   * Background of Bar and RadialBar.
   * This is not visible by default but can be enabled by setting background={true} on Bar or RadialBar.
   */
  barBackground: -50,
  /*
   * other chart elements or custom elements without specific zIndex
   * render in here, at zIndex 0
   */
  /**
   * Area, Pie, Radar, and ReferenceArea
   */
  area: 100,
  /**
   * Cursor is embedded inside Tooltip and controlled by it.
   * The Tooltip itself has a separate portal and is not included in the zIndex system;
   * Cursor is the decoration inside the chart area. CursorRectangle is a rectangle box.
   * It renders below bar so that in a stacked bar chart the cursor rectangle does not hide the other bars.
   */
  cursorRectangle: 200,
  /**
   * Bar and RadialBar
   */
  bar: 300,
  /**
   * Line and ReferenceLine, and ErrorBor
   */
  line: 400,
  /**
   * XAxis and YAxis and PolarAngleAxis and PolarRadiusAxis ticks and lines and children
   */
  axis: 500,
  /**
   * Scatter and ReferenceDot,
   * and Dots of Line and Area and Radar if they have dot=true
   */
  scatter: 600,
  /**
   * Hovering over a Bar or RadialBar renders a highlight rectangle
   */
  activeBar: 1e3,
  /**
   * Cursor is embedded inside Tooltip and controlled by it.
   * The Tooltip itself has a separate portal and is not included in the zIndex system;
   * Cursor is the decoration inside the chart area, usually a cross or a box.
   * CursorLine is a line cursor rendered in Line, Area, Scatter, Radar charts.
   * It renders above the Line and Scatter so that it is always visible.
   * It renders below active dot so that the dot is always visible and shows the current point.
   * We're also assuming that the active dot is small enough that it does not fully cover the cursor line.
   *
   * This also applies to the radial cursor in RadialBarChart.
   */
  cursorLine: 1100,
  /**
   * Hovering over a Point in Line, Area, Scatter, Radar renders a highlight dot
   */
  activeDot: 1200,
  /**
   * LabelList and Label, including Axis labels
   */
  label: 2e3
}, Cr = {
  allowDecimals: !1,
  // if I set this to false then Tooltip synchronisation stops working in Radar, wtf
  allowDataOverflow: !1,
  angleAxisId: 0,
  reversed: !1,
  scale: "auto",
  tick: !0,
  type: "auto"
}, Dt = {
  allowDataOverflow: !1,
  allowDecimals: !1,
  allowDuplicatedCategory: !0,
  includeHidden: !1,
  radiusAxisId: 0,
  reversed: !1,
  scale: "auto",
  tick: !0,
  tickCount: 5,
  type: "auto"
}, Uo = (e, t) => {
  if (!(!e || !t))
    return e != null && e.reversed ? [t[1], t[0]] : t;
};
function Vo(e, t, r) {
  if (r !== "auto")
    return r;
  if (e != null)
    return Tt(e, t) ? "category" : "number";
}
function th(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Za(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? th(Object(r), !0).forEach(function(n) {
      hj(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : th(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function hj(e, t, r) {
  return (t = mj(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function mj(e) {
  var t = yj(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function yj(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var rh = {
  allowDataOverflow: Cr.allowDataOverflow,
  allowDecimals: Cr.allowDecimals,
  allowDuplicatedCategory: !1,
  // defaultPolarAngleAxisProps.allowDuplicatedCategory has it set to true but the actual axis rendering ignores the prop because reasons,
  dataKey: void 0,
  domain: void 0,
  id: Cr.angleAxisId,
  includeHidden: !1,
  name: void 0,
  reversed: Cr.reversed,
  scale: Cr.scale,
  tick: Cr.tick,
  tickCount: void 0,
  ticks: void 0,
  type: Cr.type,
  unit: void 0,
  niceTicks: "auto"
}, nh = {
  allowDataOverflow: Dt.allowDataOverflow,
  allowDecimals: Dt.allowDecimals,
  allowDuplicatedCategory: Dt.allowDuplicatedCategory,
  dataKey: void 0,
  domain: void 0,
  id: Dt.radiusAxisId,
  includeHidden: Dt.includeHidden,
  name: void 0,
  reversed: Dt.reversed,
  scale: Dt.scale,
  tick: Dt.tick,
  tickCount: Dt.tickCount,
  ticks: void 0,
  type: Dt.type,
  unit: void 0,
  niceTicks: "auto"
}, gj = (e, t) => {
  if (t != null)
    return e.polarAxis.angleAxis[t];
}, Nc = S([gj, nb], (e, t) => {
  var r;
  if (e != null)
    return e;
  var n = (r = Vo(t, "angleAxis", rh.type)) !== null && r !== void 0 ? r : "category";
  return Za(Za({}, rh), {}, {
    type: n
  });
}), bj = (e, t) => e.polarAxis.radiusAxis[t], Dc = S([bj, nb], (e, t) => {
  var r;
  if (e != null)
    return e;
  var n = (r = Vo(t, "radiusAxis", nh.type)) !== null && r !== void 0 ? r : "category";
  return Za(Za({}, nh), {}, {
    type: n
  });
}), Ho = (e) => e.polarOptions, Mc = S([or, lr, $e], wb), Wb = S([Ho, Mc], (e, t) => {
  if (e != null)
    return Xe(e.innerRadius, t, 0);
}), Kb = S([Ho, Mc], (e, t) => {
  if (e != null)
    return Xe(e.outerRadius, t, t * 0.8);
}), xj = (e) => {
  if (e == null)
    return [0, 0];
  var {
    startAngle: t,
    endAngle: r
  } = e;
  return [t, r];
}, qb = S([Ho], xj);
S([Nc, qb], Uo);
var Ub = S([Mc, Wb, Kb], (e, t, r) => {
  if (!(e == null || t == null || r == null))
    return [t, r];
});
S([Dc, Ub], Uo);
var Vb = S([ee, Ho, Wb, Kb, or, lr], (e, t, r, n, i, a) => {
  if (!(e !== "centric" && e !== "radial" || t == null || r == null || n == null)) {
    var {
      cx: o,
      cy: l,
      startAngle: u,
      endAngle: s
    } = t;
    return {
      cx: Xe(o, i, i / 2),
      cy: Xe(l, a, a / 2),
      innerRadius: r,
      outerRadius: n,
      startAngle: u,
      endAngle: s,
      clockWise: !1
      // this property look useful, why not use it?
    };
  }
}), Pe = (e, t) => t, $i = (e, t, r) => r;
function Go(e) {
  return e?.id;
}
function Hb(e, t, r) {
  var {
    chartData: n = []
  } = t, {
    allowDuplicatedCategory: i,
    dataKey: a
  } = r, o = /* @__PURE__ */ new Map();
  return e.forEach((l) => {
    var u, s = (u = l.data) !== null && u !== void 0 ? u : n;
    if (!(s == null || s.length === 0)) {
      var c = Go(l);
      s.forEach((f, d) => {
        var v = a == null || i ? d : String(le(f, a, null)), p = le(f, l.dataKey, 0), m;
        o.has(v) ? m = o.get(v) : m = {}, Object.assign(m, {
          [c]: p
        }), o.set(v, m);
      });
    }
  }), Array.from(o.values());
}
function Yo(e) {
  return "stackId" in e && e.stackId != null && e.dataKey != null;
}
var Xo = (e, t) => e === t ? !0 : e == null || t == null ? !1 : e[0] === t[0] && e[1] === t[1];
function Zo(e, t) {
  return Array.isArray(e) && Array.isArray(t) && e.length === 0 && t.length === 0 ? !0 : e === t;
}
function wj(e, t) {
  if (e.length === t.length) {
    for (var r = 0; r < e.length; r++)
      if (e[r] !== t[r])
        return !1;
    return !0;
  }
  return !1;
}
var We = (e) => {
  var t = ee(e);
  return t === "horizontal" ? "xAxis" : t === "vertical" ? "yAxis" : t === "centric" ? "angleAxis" : "radiusAxis";
}, Mn = (e) => e.tooltip.settings.axisId;
function $c(e) {
  if (e != null) {
    var t = e.ticks, r = e.bandwidth, n = e.range(), i = [Math.min(...n), Math.max(...n)];
    return {
      domain: () => e.domain(),
      range: (function(a) {
        function o() {
          return a.apply(this, arguments);
        }
        return o.toString = function() {
          return a.toString();
        }, o;
      })(() => i),
      rangeMin: () => i[0],
      rangeMax: () => i[1],
      isInRange(a) {
        var o = i[0], l = i[1];
        return o <= l ? a >= o && a <= l : a >= l && a <= o;
      },
      bandwidth: r ? () => r.call(e) : void 0,
      ticks: t ? (a) => t.call(e, a) : void 0,
      map: (a, o) => {
        var l = e(a);
        if (l != null) {
          if (e.bandwidth && o !== null && o !== void 0 && o.position) {
            var u = e.bandwidth();
            switch (o.position) {
              case "middle":
                l += u / 2;
                break;
              case "end":
                l += u;
                break;
            }
          }
          return l;
        }
      }
    };
  }
}
var Gb = (e, t) => {
  if (t != null)
    switch (e) {
      case "linear": {
        if (!zt(t)) {
          for (var r, n, i = 0; i < t.length; i++) {
            var a = t[i];
            G(a) && ((r === void 0 || a < r) && (r = a), (n === void 0 || a > n) && (n = a));
          }
          return r !== void 0 && n !== void 0 ? [r, n] : void 0;
        }
        return t;
      }
      default:
        return t;
    }
};
function br(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Oj(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Rc(e) {
  let t, r, n;
  e.length !== 2 ? (t = br, r = (l, u) => br(e(l), u), n = (l, u) => e(l) - u) : (t = e === br || e === Oj ? e : Pj, r = e, n = e);
  function i(l, u, s = 0, c = l.length) {
    if (s < c) {
      if (t(u, u) !== 0) return c;
      do {
        const f = s + c >>> 1;
        r(l[f], u) < 0 ? s = f + 1 : c = f;
      } while (s < c);
    }
    return s;
  }
  function a(l, u, s = 0, c = l.length) {
    if (s < c) {
      if (t(u, u) !== 0) return c;
      do {
        const f = s + c >>> 1;
        r(l[f], u) <= 0 ? s = f + 1 : c = f;
      } while (s < c);
    }
    return s;
  }
  function o(l, u, s = 0, c = l.length) {
    const f = i(l, u, s, c - 1);
    return f > s && n(l[f - 1], u) > -n(l[f], u) ? f - 1 : f;
  }
  return { left: i, center: o, right: a };
}
function Pj() {
  return 0;
}
function Yb(e) {
  return e === null ? NaN : +e;
}
function* Ej(e, t) {
  for (let r of e)
    r != null && (r = +r) >= r && (yield r);
}
const Aj = Rc(br), Ri = Aj.right;
Rc(Yb).center;
class ih extends Map {
  constructor(t, r = jj) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [n, i] of t) this.set(n, i);
  }
  get(t) {
    return super.get(ah(this, t));
  }
  has(t) {
    return super.has(ah(this, t));
  }
  set(t, r) {
    return super.set(Sj(this, t), r);
  }
  delete(t) {
    return super.delete(_j(this, t));
  }
}
function ah({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function Sj({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function _j({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) && (r = e.get(n), e.delete(n)), r;
}
function jj(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function Ij(e = br) {
  if (e === br) return Xb;
  if (typeof e != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e(t, r);
    return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0);
  };
}
function Xb(e, t) {
  return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : e > t ? 1 : 0);
}
const kj = Math.sqrt(50), Cj = Math.sqrt(10), Tj = Math.sqrt(2);
function Ja(e, t, r) {
  const n = (t - e) / Math.max(0, r), i = Math.floor(Math.log10(n)), a = n / Math.pow(10, i), o = a >= kj ? 10 : a >= Cj ? 5 : a >= Tj ? 2 : 1;
  let l, u, s;
  return i < 0 ? (s = Math.pow(10, -i) / o, l = Math.round(e * s), u = Math.round(t * s), l / s < e && ++l, u / s > t && --u, s = -s) : (s = Math.pow(10, i) * o, l = Math.round(e / s), u = Math.round(t / s), l * s < e && ++l, u * s > t && --u), u < l && 0.5 <= r && r < 2 ? Ja(e, t, r * 2) : [l, u, s];
}
function ks(e, t, r) {
  if (t = +t, e = +e, r = +r, !(r > 0)) return [];
  if (e === t) return [e];
  const n = t < e, [i, a, o] = n ? Ja(t, e, r) : Ja(e, t, r);
  if (!(a >= i)) return [];
  const l = a - i + 1, u = new Array(l);
  if (n)
    if (o < 0) for (let s = 0; s < l; ++s) u[s] = (a - s) / -o;
    else for (let s = 0; s < l; ++s) u[s] = (a - s) * o;
  else if (o < 0) for (let s = 0; s < l; ++s) u[s] = (i + s) / -o;
  else for (let s = 0; s < l; ++s) u[s] = (i + s) * o;
  return u;
}
function Cs(e, t, r) {
  return t = +t, e = +e, r = +r, Ja(e, t, r)[2];
}
function Ts(e, t, r) {
  t = +t, e = +e, r = +r;
  const n = t < e, i = n ? Cs(t, e, r) : Cs(e, t, r);
  return (n ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function oh(e, t) {
  let r;
  for (const n of e)
    n != null && (r < n || r === void 0 && n >= n) && (r = n);
  return r;
}
function lh(e, t) {
  let r;
  for (const n of e)
    n != null && (r > n || r === void 0 && n >= n) && (r = n);
  return r;
}
function Zb(e, t, r = 0, n = 1 / 0, i) {
  if (t = Math.floor(t), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(e.length - 1, n)), !(r <= t && t <= n)) return e;
  for (i = i === void 0 ? Xb : Ij(i); n > r; ) {
    if (n - r > 600) {
      const u = n - r + 1, s = t - r + 1, c = Math.log(u), f = 0.5 * Math.exp(2 * c / 3), d = 0.5 * Math.sqrt(c * f * (u - f) / u) * (s - u / 2 < 0 ? -1 : 1), v = Math.max(r, Math.floor(t - s * f / u + d)), p = Math.min(n, Math.floor(t + (u - s) * f / u + d));
      Zb(e, t, v, p, i);
    }
    const a = e[t];
    let o = r, l = n;
    for (Yn(e, r, t), i(e[n], a) > 0 && Yn(e, r, n); o < l; ) {
      for (Yn(e, o, l), ++o, --l; i(e[o], a) < 0; ) ++o;
      for (; i(e[l], a) > 0; ) --l;
    }
    i(e[r], a) === 0 ? Yn(e, r, l) : (++l, Yn(e, l, n)), l <= t && (r = l + 1), t <= l && (n = l - 1);
  }
  return e;
}
function Yn(e, t, r) {
  const n = e[t];
  e[t] = e[r], e[r] = n;
}
function Nj(e, t, r) {
  if (e = Float64Array.from(Ej(e)), !(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return lh(e);
    if (t >= 1) return oh(e);
    var n, i = (n - 1) * t, a = Math.floor(i), o = oh(Zb(e, a).subarray(0, a + 1)), l = lh(e.subarray(a + 1));
    return o + (l - o) * (i - a);
  }
}
function Dj(e, t, r = Yb) {
  if (!(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return +r(e[0], 0, e);
    if (t >= 1) return +r(e[n - 1], n - 1, e);
    var n, i = (n - 1) * t, a = Math.floor(i), o = +r(e[a], a, e), l = +r(e[a + 1], a + 1, e);
    return o + (l - o) * (i - a);
  }
}
function Mj(e, t, r) {
  e = +e, t = +t, r = (i = arguments.length) < 2 ? (t = e, e = 0, 1) : i < 3 ? 1 : +r;
  for (var n = -1, i = Math.max(0, Math.ceil((t - e) / r)) | 0, a = new Array(i); ++n < i; )
    a[n] = e + n * r;
  return a;
}
function St(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
function sr(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof e == "function" ? this.interpolator(e) : this.range(e);
      break;
    }
    default: {
      this.domain(e), typeof t == "function" ? this.interpolator(t) : this.range(t);
      break;
    }
  }
  return this;
}
const Ns = /* @__PURE__ */ Symbol("implicit");
function Lc() {
  var e = new ih(), t = [], r = [], n = Ns;
  function i(a) {
    let o = e.get(a);
    if (o === void 0) {
      if (n !== Ns) return n;
      e.set(a, o = t.push(a) - 1);
    }
    return r[o % r.length];
  }
  return i.domain = function(a) {
    if (!arguments.length) return t.slice();
    t = [], e = new ih();
    for (const o of a)
      e.has(o) || e.set(o, t.push(o) - 1);
    return i;
  }, i.range = function(a) {
    return arguments.length ? (r = Array.from(a), i) : r.slice();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return Lc(t, r).unknown(n);
  }, St.apply(i, arguments), i;
}
function zc() {
  var e = Lc().unknown(void 0), t = e.domain, r = e.range, n = 0, i = 1, a, o, l = !1, u = 0, s = 0, c = 0.5;
  delete e.unknown;
  function f() {
    var d = t().length, v = i < n, p = v ? i : n, m = v ? n : i;
    a = (m - p) / Math.max(1, d - u + s * 2), l && (a = Math.floor(a)), p += (m - p - a * (d - u)) * c, o = a * (1 - u), l && (p = Math.round(p), o = Math.round(o));
    var h = Mj(d).map(function(y) {
      return p + a * y;
    });
    return r(v ? h.reverse() : h);
  }
  return e.domain = function(d) {
    return arguments.length ? (t(d), f()) : t();
  }, e.range = function(d) {
    return arguments.length ? ([n, i] = d, n = +n, i = +i, f()) : [n, i];
  }, e.rangeRound = function(d) {
    return [n, i] = d, n = +n, i = +i, l = !0, f();
  }, e.bandwidth = function() {
    return o;
  }, e.step = function() {
    return a;
  }, e.round = function(d) {
    return arguments.length ? (l = !!d, f()) : l;
  }, e.padding = function(d) {
    return arguments.length ? (u = Math.min(1, s = +d), f()) : u;
  }, e.paddingInner = function(d) {
    return arguments.length ? (u = Math.min(1, d), f()) : u;
  }, e.paddingOuter = function(d) {
    return arguments.length ? (s = +d, f()) : s;
  }, e.align = function(d) {
    return arguments.length ? (c = Math.max(0, Math.min(1, d)), f()) : c;
  }, e.copy = function() {
    return zc(t(), [n, i]).round(l).paddingInner(u).paddingOuter(s).align(c);
  }, St.apply(f(), arguments);
}
function Jb(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return Jb(t());
  }, e;
}
function $j() {
  return Jb(zc.apply(null, arguments).paddingInner(1));
}
function Bc(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function Qb(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function Li() {
}
var hi = 0.7, Qa = 1 / hi, wn = "\\s*([+-]?\\d+)\\s*", mi = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Bt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Rj = /^#([0-9a-f]{3,8})$/, Lj = new RegExp(`^rgb\\(${wn},${wn},${wn}\\)$`), zj = new RegExp(`^rgb\\(${Bt},${Bt},${Bt}\\)$`), Bj = new RegExp(`^rgba\\(${wn},${wn},${wn},${mi}\\)$`), Fj = new RegExp(`^rgba\\(${Bt},${Bt},${Bt},${mi}\\)$`), Wj = new RegExp(`^hsl\\(${mi},${Bt},${Bt}\\)$`), Kj = new RegExp(`^hsla\\(${mi},${Bt},${Bt},${mi}\\)$`), uh = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
Bc(Li, yi, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: sh,
  // Deprecated! Use color.formatHex.
  formatHex: sh,
  formatHex8: qj,
  formatHsl: Uj,
  formatRgb: ch,
  toString: ch
});
function sh() {
  return this.rgb().formatHex();
}
function qj() {
  return this.rgb().formatHex8();
}
function Uj() {
  return e0(this).formatHsl();
}
function ch() {
  return this.rgb().formatRgb();
}
function yi(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = Rj.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? fh(t) : r === 3 ? new ot(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? ca(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? ca(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Lj.exec(e)) ? new ot(t[1], t[2], t[3], 1) : (t = zj.exec(e)) ? new ot(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Bj.exec(e)) ? ca(t[1], t[2], t[3], t[4]) : (t = Fj.exec(e)) ? ca(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Wj.exec(e)) ? ph(t[1], t[2] / 100, t[3] / 100, 1) : (t = Kj.exec(e)) ? ph(t[1], t[2] / 100, t[3] / 100, t[4]) : uh.hasOwnProperty(e) ? fh(uh[e]) : e === "transparent" ? new ot(NaN, NaN, NaN, 0) : null;
}
function fh(e) {
  return new ot(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function ca(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new ot(e, t, r, n);
}
function Vj(e) {
  return e instanceof Li || (e = yi(e)), e ? (e = e.rgb(), new ot(e.r, e.g, e.b, e.opacity)) : new ot();
}
function Ds(e, t, r, n) {
  return arguments.length === 1 ? Vj(e) : new ot(e, t, r, n ?? 1);
}
function ot(e, t, r, n) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +n;
}
Bc(ot, Ds, Qb(Li, {
  brighter(e) {
    return e = e == null ? Qa : Math.pow(Qa, e), new ot(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? hi : Math.pow(hi, e), new ot(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new ot(Vr(this.r), Vr(this.g), Vr(this.b), eo(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: dh,
  // Deprecated! Use color.formatHex.
  formatHex: dh,
  formatHex8: Hj,
  formatRgb: vh,
  toString: vh
}));
function dh() {
  return `#${Br(this.r)}${Br(this.g)}${Br(this.b)}`;
}
function Hj() {
  return `#${Br(this.r)}${Br(this.g)}${Br(this.b)}${Br((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function vh() {
  const e = eo(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Vr(this.r)}, ${Vr(this.g)}, ${Vr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function eo(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Vr(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Br(e) {
  return e = Vr(e), (e < 16 ? "0" : "") + e.toString(16);
}
function ph(e, t, r, n) {
  return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new jt(e, t, r, n);
}
function e0(e) {
  if (e instanceof jt) return new jt(e.h, e.s, e.l, e.opacity);
  if (e instanceof Li || (e = yi(e)), !e) return new jt();
  if (e instanceof jt) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, n = e.b / 255, i = Math.min(t, r, n), a = Math.max(t, r, n), o = NaN, l = a - i, u = (a + i) / 2;
  return l ? (t === a ? o = (r - n) / l + (r < n) * 6 : r === a ? o = (n - t) / l + 2 : o = (t - r) / l + 4, l /= u < 0.5 ? a + i : 2 - a - i, o *= 60) : l = u > 0 && u < 1 ? 0 : o, new jt(o, l, u, e.opacity);
}
function Gj(e, t, r, n) {
  return arguments.length === 1 ? e0(e) : new jt(e, t, r, n ?? 1);
}
function jt(e, t, r, n) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +n;
}
Bc(jt, Gj, Qb(Li, {
  brighter(e) {
    return e = e == null ? Qa : Math.pow(Qa, e), new jt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? hi : Math.pow(hi, e), new jt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, i = 2 * r - n;
    return new ot(
      Mu(e >= 240 ? e - 240 : e + 120, i, n),
      Mu(e, i, n),
      Mu(e < 120 ? e + 240 : e - 120, i, n),
      this.opacity
    );
  },
  clamp() {
    return new jt(hh(this.h), fa(this.s), fa(this.l), eo(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = eo(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${hh(this.h)}, ${fa(this.s) * 100}%, ${fa(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function hh(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function fa(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Mu(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const Fc = (e) => () => e;
function Yj(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function Xj(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(n) {
    return Math.pow(e + n * t, r);
  };
}
function Zj(e) {
  return (e = +e) == 1 ? t0 : function(t, r) {
    return r - t ? Xj(t, r, e) : Fc(isNaN(t) ? r : t);
  };
}
function t0(e, t) {
  var r = t - e;
  return r ? Yj(e, r) : Fc(isNaN(e) ? t : e);
}
const mh = (function e(t) {
  var r = Zj(t);
  function n(i, a) {
    var o = r((i = Ds(i)).r, (a = Ds(a)).r), l = r(i.g, a.g), u = r(i.b, a.b), s = t0(i.opacity, a.opacity);
    return function(c) {
      return i.r = o(c), i.g = l(c), i.b = u(c), i.opacity = s(c), i + "";
    };
  }
  return n.gamma = e, n;
})(1);
function Jj(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, n = t.slice(), i;
  return function(a) {
    for (i = 0; i < r; ++i) n[i] = e[i] * (1 - a) + t[i] * a;
    return n;
  };
}
function Qj(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function eI(e, t) {
  var r = t ? t.length : 0, n = e ? Math.min(r, e.length) : 0, i = new Array(n), a = new Array(r), o;
  for (o = 0; o < n; ++o) i[o] = $n(e[o], t[o]);
  for (; o < r; ++o) a[o] = t[o];
  return function(l) {
    for (o = 0; o < n; ++o) a[o] = i[o](l);
    return a;
  };
}
function tI(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(n) {
    return r.setTime(e * (1 - n) + t * n), r;
  };
}
function to(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function rI(e, t) {
  var r = {}, n = {}, i;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t)
    i in e ? r[i] = $n(e[i], t[i]) : n[i] = t[i];
  return function(a) {
    for (i in r) n[i] = r[i](a);
    return n;
  };
}
var Ms = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, $u = new RegExp(Ms.source, "g");
function nI(e) {
  return function() {
    return e;
  };
}
function iI(e) {
  return function(t) {
    return e(t) + "";
  };
}
function aI(e, t) {
  var r = Ms.lastIndex = $u.lastIndex = 0, n, i, a, o = -1, l = [], u = [];
  for (e = e + "", t = t + ""; (n = Ms.exec(e)) && (i = $u.exec(t)); )
    (a = i.index) > r && (a = t.slice(r, a), l[o] ? l[o] += a : l[++o] = a), (n = n[0]) === (i = i[0]) ? l[o] ? l[o] += i : l[++o] = i : (l[++o] = null, u.push({ i: o, x: to(n, i) })), r = $u.lastIndex;
  return r < t.length && (a = t.slice(r), l[o] ? l[o] += a : l[++o] = a), l.length < 2 ? u[0] ? iI(u[0].x) : nI(t) : (t = u.length, function(s) {
    for (var c = 0, f; c < t; ++c) l[(f = u[c]).i] = f.x(s);
    return l.join("");
  });
}
function $n(e, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? Fc(t) : (r === "number" ? to : r === "string" ? (n = yi(t)) ? (t = n, mh) : aI : t instanceof yi ? mh : t instanceof Date ? tI : Qj(t) ? Jj : Array.isArray(t) ? eI : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? rI : to)(e, t);
}
function Wc(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function oI(e, t) {
  t === void 0 && (t = e, e = $n);
  for (var r = 0, n = t.length - 1, i = t[0], a = new Array(n < 0 ? 0 : n); r < n; ) a[r] = e(i, i = t[++r]);
  return function(o) {
    var l = Math.max(0, Math.min(n - 1, Math.floor(o *= n)));
    return a[l](o - l);
  };
}
function lI(e) {
  return function() {
    return e;
  };
}
function ro(e) {
  return +e;
}
var yh = [0, 1];
function et(e) {
  return e;
}
function $s(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : lI(isNaN(t) ? NaN : 0.5);
}
function uI(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(n) {
    return Math.max(e, Math.min(t, n));
  };
}
function sI(e, t, r) {
  var n = e[0], i = e[1], a = t[0], o = t[1];
  return i < n ? (n = $s(i, n), a = r(o, a)) : (n = $s(n, i), a = r(a, o)), function(l) {
    return a(n(l));
  };
}
function cI(e, t, r) {
  var n = Math.min(e.length, t.length) - 1, i = new Array(n), a = new Array(n), o = -1;
  for (e[n] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < n; )
    i[o] = $s(e[o], e[o + 1]), a[o] = r(t[o], t[o + 1]);
  return function(l) {
    var u = Ri(e, l, 1, n) - 1;
    return a[u](i[u](l));
  };
}
function zi(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Jo() {
  var e = yh, t = yh, r = $n, n, i, a, o = et, l, u, s;
  function c() {
    var d = Math.min(e.length, t.length);
    return o !== et && (o = uI(e[0], e[d - 1])), l = d > 2 ? cI : sI, u = s = null, f;
  }
  function f(d) {
    return d == null || isNaN(d = +d) ? a : (u || (u = l(e.map(n), t, r)))(n(o(d)));
  }
  return f.invert = function(d) {
    return o(i((s || (s = l(t, e.map(n), to)))(d)));
  }, f.domain = function(d) {
    return arguments.length ? (e = Array.from(d, ro), c()) : e.slice();
  }, f.range = function(d) {
    return arguments.length ? (t = Array.from(d), c()) : t.slice();
  }, f.rangeRound = function(d) {
    return t = Array.from(d), r = Wc, c();
  }, f.clamp = function(d) {
    return arguments.length ? (o = d ? !0 : et, c()) : o !== et;
  }, f.interpolate = function(d) {
    return arguments.length ? (r = d, c()) : r;
  }, f.unknown = function(d) {
    return arguments.length ? (a = d, f) : a;
  }, function(d, v) {
    return n = d, i = v, c();
  };
}
function Kc() {
  return Jo()(et, et);
}
function fI(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function no(e, t) {
  if (!isFinite(e) || e === 0) return null;
  var r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e"), n = e.slice(0, r);
  return [
    n.length > 1 ? n[0] + n.slice(2) : n,
    +e.slice(r + 1)
  ];
}
function Sn(e) {
  return e = no(Math.abs(e)), e ? e[1] : NaN;
}
function dI(e, t) {
  return function(r, n) {
    for (var i = r.length, a = [], o = 0, l = e[0], u = 0; i > 0 && l > 0 && (u + l + 1 > n && (l = Math.max(1, n - u)), a.push(r.substring(i -= l, i + l)), !((u += l + 1) > n)); )
      l = e[o = (o + 1) % e.length];
    return a.reverse().join(t);
  };
}
function vI(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var pI = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function gi(e) {
  if (!(t = pI.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new qc({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10]
  });
}
gi.prototype = qc.prototype;
function qc(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
qc.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function hI(e) {
  e: for (var t = e.length, r = 1, n = -1, i; r < t; ++r)
    switch (e[r]) {
      case ".":
        n = i = r;
        break;
      case "0":
        n === 0 && (n = r), i = r;
        break;
      default:
        if (!+e[r]) break e;
        n > 0 && (n = 0);
        break;
    }
  return n > 0 ? e.slice(0, n) + e.slice(i + 1) : e;
}
var io;
function mI(e, t) {
  var r = no(e, t);
  if (!r) return io = void 0, e.toPrecision(t);
  var n = r[0], i = r[1], a = i - (io = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = n.length;
  return a === o ? n : a > o ? n + new Array(a - o + 1).join("0") : a > 0 ? n.slice(0, a) + "." + n.slice(a) : "0." + new Array(1 - a).join("0") + no(e, Math.max(0, t + a - 1))[0];
}
function gh(e, t) {
  var r = no(e, t);
  if (!r) return e + "";
  var n = r[0], i = r[1];
  return i < 0 ? "0." + new Array(-i).join("0") + n : n.length > i + 1 ? n.slice(0, i + 1) + "." + n.slice(i + 1) : n + new Array(i - n.length + 2).join("0");
}
const bh = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: fI,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => gh(e * 100, t),
  r: gh,
  s: mI,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function xh(e) {
  return e;
}
var wh = Array.prototype.map, Oh = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function yI(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? xh : dI(wh.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", n = e.currency === void 0 ? "" : e.currency[1] + "", i = e.decimal === void 0 ? "." : e.decimal + "", a = e.numerals === void 0 ? xh : vI(wh.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", l = e.minus === void 0 ? "−" : e.minus + "", u = e.nan === void 0 ? "NaN" : e.nan + "";
  function s(f, d) {
    f = gi(f);
    var v = f.fill, p = f.align, m = f.sign, h = f.symbol, y = f.zero, b = f.width, x = f.comma, w = f.precision, P = f.trim, O = f.type;
    O === "n" ? (x = !0, O = "g") : bh[O] || (w === void 0 && (w = 12), P = !0, O = "g"), (y || v === "0" && p === "=") && (y = !0, v = "0", p = "=");
    var A = (d && d.prefix !== void 0 ? d.prefix : "") + (h === "$" ? r : h === "#" && /[boxX]/.test(O) ? "0" + O.toLowerCase() : ""), _ = (h === "$" ? n : /[%p]/.test(O) ? o : "") + (d && d.suffix !== void 0 ? d.suffix : ""), C = bh[O], T = /[defgprs%]/.test(O);
    w = w === void 0 ? 6 : /[gprs]/.test(O) ? Math.max(1, Math.min(21, w)) : Math.max(0, Math.min(20, w));
    function N(j) {
      var I = A, $ = _, K, V, U;
      if (O === "c")
        $ = C(j) + $, j = "";
      else {
        j = +j;
        var X = j < 0 || 1 / j < 0;
        if (j = isNaN(j) ? u : C(Math.abs(j), w), P && (j = hI(j)), X && +j == 0 && m !== "+" && (X = !1), I = (X ? m === "(" ? m : l : m === "-" || m === "(" ? "" : m) + I, $ = (O === "s" && !isNaN(j) && io !== void 0 ? Oh[8 + io / 3] : "") + $ + (X && m === "(" ? ")" : ""), T) {
          for (K = -1, V = j.length; ++K < V; )
            if (U = j.charCodeAt(K), 48 > U || U > 57) {
              $ = (U === 46 ? i + j.slice(K + 1) : j.slice(K)) + $, j = j.slice(0, K);
              break;
            }
        }
      }
      x && !y && (j = t(j, 1 / 0));
      var q = I.length + j.length + $.length, Z = q < b ? new Array(b - q + 1).join(v) : "";
      switch (x && y && (j = t(Z + j, Z.length ? b - $.length : 1 / 0), Z = ""), p) {
        case "<":
          j = I + j + $ + Z;
          break;
        case "=":
          j = I + Z + j + $;
          break;
        case "^":
          j = Z.slice(0, q = Z.length >> 1) + I + j + $ + Z.slice(q);
          break;
        default:
          j = Z + I + j + $;
          break;
      }
      return a(j);
    }
    return N.toString = function() {
      return f + "";
    }, N;
  }
  function c(f, d) {
    var v = Math.max(-8, Math.min(8, Math.floor(Sn(d) / 3))) * 3, p = Math.pow(10, -v), m = s((f = gi(f), f.type = "f", f), { suffix: Oh[8 + v / 3] });
    return function(h) {
      return m(p * h);
    };
  }
  return {
    format: s,
    formatPrefix: c
  };
}
var da, Uc, r0;
gI({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function gI(e) {
  return da = yI(e), Uc = da.format, r0 = da.formatPrefix, da;
}
function bI(e) {
  return Math.max(0, -Sn(Math.abs(e)));
}
function xI(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Sn(t) / 3))) * 3 - Sn(Math.abs(e)));
}
function wI(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, Sn(t) - Sn(e)) + 1;
}
function n0(e, t, r, n) {
  var i = Ts(e, t, r), a;
  switch (n = gi(n ?? ",f"), n.type) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return n.precision == null && !isNaN(a = xI(i, o)) && (n.precision = a), r0(n, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(a = wI(i, Math.max(Math.abs(e), Math.abs(t)))) && (n.precision = a - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(a = bI(i)) && (n.precision = a - (n.type === "%") * 2);
      break;
    }
  }
  return Uc(n);
}
function _r(e) {
  var t = e.domain;
  return e.ticks = function(r) {
    var n = t();
    return ks(n[0], n[n.length - 1], r ?? 10);
  }, e.tickFormat = function(r, n) {
    var i = t();
    return n0(i[0], i[i.length - 1], r ?? 10, n);
  }, e.nice = function(r) {
    r == null && (r = 10);
    var n = t(), i = 0, a = n.length - 1, o = n[i], l = n[a], u, s, c = 10;
    for (l < o && (s = o, o = l, l = s, s = i, i = a, a = s); c-- > 0; ) {
      if (s = Cs(o, l, r), s === u)
        return n[i] = o, n[a] = l, t(n);
      if (s > 0)
        o = Math.floor(o / s) * s, l = Math.ceil(l / s) * s;
      else if (s < 0)
        o = Math.ceil(o * s) / s, l = Math.floor(l * s) / s;
      else
        break;
      u = s;
    }
    return e;
  }, e;
}
function i0() {
  var e = Kc();
  return e.copy = function() {
    return zi(e, i0());
  }, St.apply(e, arguments), _r(e);
}
function a0(e) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (e = Array.from(n, ro), r) : e.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.copy = function() {
    return a0(e).unknown(t);
  }, e = arguments.length ? Array.from(e, ro) : [0, 1], _r(r);
}
function o0(e, t) {
  e = e.slice();
  var r = 0, n = e.length - 1, i = e[r], a = e[n], o;
  return a < i && (o = r, r = n, n = o, o = i, i = a, a = o), e[r] = t.floor(i), e[n] = t.ceil(a), e;
}
function Ph(e) {
  return Math.log(e);
}
function Eh(e) {
  return Math.exp(e);
}
function OI(e) {
  return -Math.log(-e);
}
function PI(e) {
  return -Math.exp(-e);
}
function EI(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function AI(e) {
  return e === 10 ? EI : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function SI(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function Ah(e) {
  return (t, r) => -e(-t, r);
}
function Vc(e) {
  const t = e(Ph, Eh), r = t.domain;
  let n = 10, i, a;
  function o() {
    return i = SI(n), a = AI(n), r()[0] < 0 ? (i = Ah(i), a = Ah(a), e(OI, PI)) : e(Ph, Eh), t;
  }
  return t.base = function(l) {
    return arguments.length ? (n = +l, o()) : n;
  }, t.domain = function(l) {
    return arguments.length ? (r(l), o()) : r();
  }, t.ticks = (l) => {
    const u = r();
    let s = u[0], c = u[u.length - 1];
    const f = c < s;
    f && ([s, c] = [c, s]);
    let d = i(s), v = i(c), p, m;
    const h = l == null ? 10 : +l;
    let y = [];
    if (!(n % 1) && v - d < h) {
      if (d = Math.floor(d), v = Math.ceil(v), s > 0) {
        for (; d <= v; ++d)
          for (p = 1; p < n; ++p)
            if (m = d < 0 ? p / a(-d) : p * a(d), !(m < s)) {
              if (m > c) break;
              y.push(m);
            }
      } else for (; d <= v; ++d)
        for (p = n - 1; p >= 1; --p)
          if (m = d > 0 ? p / a(-d) : p * a(d), !(m < s)) {
            if (m > c) break;
            y.push(m);
          }
      y.length * 2 < h && (y = ks(s, c, h));
    } else
      y = ks(d, v, Math.min(v - d, h)).map(a);
    return f ? y.reverse() : y;
  }, t.tickFormat = (l, u) => {
    if (l == null && (l = 10), u == null && (u = n === 10 ? "s" : ","), typeof u != "function" && (!(n % 1) && (u = gi(u)).precision == null && (u.trim = !0), u = Uc(u)), l === 1 / 0) return u;
    const s = Math.max(1, n * l / t.ticks().length);
    return (c) => {
      let f = c / a(Math.round(i(c)));
      return f * n < n - 0.5 && (f *= n), f <= s ? u(c) : "";
    };
  }, t.nice = () => r(o0(r(), {
    floor: (l) => a(Math.floor(i(l))),
    ceil: (l) => a(Math.ceil(i(l)))
  })), t;
}
function l0() {
  const e = Vc(Jo()).domain([1, 10]);
  return e.copy = () => zi(e, l0()).base(e.base()), St.apply(e, arguments), e;
}
function Sh(e) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function _h(e) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function Hc(e) {
  var t = 1, r = e(Sh(t), _h(t));
  return r.constant = function(n) {
    return arguments.length ? e(Sh(t = +n), _h(t)) : t;
  }, _r(r);
}
function u0() {
  var e = Hc(Jo());
  return e.copy = function() {
    return zi(e, u0()).constant(e.constant());
  }, St.apply(e, arguments);
}
function jh(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function _I(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function jI(e) {
  return e < 0 ? -e * e : e * e;
}
function Gc(e) {
  var t = e(et, et), r = 1;
  function n() {
    return r === 1 ? e(et, et) : r === 0.5 ? e(_I, jI) : e(jh(r), jh(1 / r));
  }
  return t.exponent = function(i) {
    return arguments.length ? (r = +i, n()) : r;
  }, _r(t);
}
function Yc() {
  var e = Gc(Jo());
  return e.copy = function() {
    return zi(e, Yc()).exponent(e.exponent());
  }, St.apply(e, arguments), e;
}
function II() {
  return Yc.apply(null, arguments).exponent(0.5);
}
function Ih(e) {
  return Math.sign(e) * e * e;
}
function kI(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function s0() {
  var e = Kc(), t = [0, 1], r = !1, n;
  function i(a) {
    var o = kI(e(a));
    return isNaN(o) ? n : r ? Math.round(o) : o;
  }
  return i.invert = function(a) {
    return e.invert(Ih(a));
  }, i.domain = function(a) {
    return arguments.length ? (e.domain(a), i) : e.domain();
  }, i.range = function(a) {
    return arguments.length ? (e.range((t = Array.from(a, ro)).map(Ih)), i) : t.slice();
  }, i.rangeRound = function(a) {
    return i.range(a).round(!0);
  }, i.round = function(a) {
    return arguments.length ? (r = !!a, i) : r;
  }, i.clamp = function(a) {
    return arguments.length ? (e.clamp(a), i) : e.clamp();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return s0(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
  }, St.apply(i, arguments), _r(i);
}
function c0() {
  var e = [], t = [], r = [], n;
  function i() {
    var o = 0, l = Math.max(1, t.length);
    for (r = new Array(l - 1); ++o < l; ) r[o - 1] = Dj(e, o / l);
    return a;
  }
  function a(o) {
    return o == null || isNaN(o = +o) ? n : t[Ri(r, o)];
  }
  return a.invertExtent = function(o) {
    var l = t.indexOf(o);
    return l < 0 ? [NaN, NaN] : [
      l > 0 ? r[l - 1] : e[0],
      l < r.length ? r[l] : e[e.length - 1]
    ];
  }, a.domain = function(o) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let l of o) l != null && !isNaN(l = +l) && e.push(l);
    return e.sort(br), i();
  }, a.range = function(o) {
    return arguments.length ? (t = Array.from(o), i()) : t.slice();
  }, a.unknown = function(o) {
    return arguments.length ? (n = o, a) : n;
  }, a.quantiles = function() {
    return r.slice();
  }, a.copy = function() {
    return c0().domain(e).range(t).unknown(n);
  }, St.apply(a, arguments);
}
function f0() {
  var e = 0, t = 1, r = 1, n = [0.5], i = [0, 1], a;
  function o(u) {
    return u != null && u <= u ? i[Ri(n, u, 0, r)] : a;
  }
  function l() {
    var u = -1;
    for (n = new Array(r); ++u < r; ) n[u] = ((u + 1) * t - (u - r) * e) / (r + 1);
    return o;
  }
  return o.domain = function(u) {
    return arguments.length ? ([e, t] = u, e = +e, t = +t, l()) : [e, t];
  }, o.range = function(u) {
    return arguments.length ? (r = (i = Array.from(u)).length - 1, l()) : i.slice();
  }, o.invertExtent = function(u) {
    var s = i.indexOf(u);
    return s < 0 ? [NaN, NaN] : s < 1 ? [e, n[0]] : s >= r ? [n[r - 1], t] : [n[s - 1], n[s]];
  }, o.unknown = function(u) {
    return arguments.length && (a = u), o;
  }, o.thresholds = function() {
    return n.slice();
  }, o.copy = function() {
    return f0().domain([e, t]).range(i).unknown(a);
  }, St.apply(_r(o), arguments);
}
function d0() {
  var e = [0.5], t = [0, 1], r, n = 1;
  function i(a) {
    return a != null && a <= a ? t[Ri(e, a, 0, n)] : r;
  }
  return i.domain = function(a) {
    return arguments.length ? (e = Array.from(a), n = Math.min(e.length, t.length - 1), i) : e.slice();
  }, i.range = function(a) {
    return arguments.length ? (t = Array.from(a), n = Math.min(e.length, t.length - 1), i) : t.slice();
  }, i.invertExtent = function(a) {
    var o = t.indexOf(a);
    return [e[o - 1], e[o]];
  }, i.unknown = function(a) {
    return arguments.length ? (r = a, i) : r;
  }, i.copy = function() {
    return d0().domain(e).range(t).unknown(r);
  }, St.apply(i, arguments);
}
const Ru = /* @__PURE__ */ new Date(), Lu = /* @__PURE__ */ new Date();
function Re(e, t, r, n) {
  function i(a) {
    return e(a = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+a)), a;
  }
  return i.floor = (a) => (e(a = /* @__PURE__ */ new Date(+a)), a), i.ceil = (a) => (e(a = new Date(a - 1)), t(a, 1), e(a), a), i.round = (a) => {
    const o = i(a), l = i.ceil(a);
    return a - o < l - a ? o : l;
  }, i.offset = (a, o) => (t(a = /* @__PURE__ */ new Date(+a), o == null ? 1 : Math.floor(o)), a), i.range = (a, o, l) => {
    const u = [];
    if (a = i.ceil(a), l = l == null ? 1 : Math.floor(l), !(a < o) || !(l > 0)) return u;
    let s;
    do
      u.push(s = /* @__PURE__ */ new Date(+a)), t(a, l), e(a);
    while (s < a && a < o);
    return u;
  }, i.filter = (a) => Re((o) => {
    if (o >= o) for (; e(o), !a(o); ) o.setTime(o - 1);
  }, (o, l) => {
    if (o >= o)
      if (l < 0) for (; ++l <= 0; )
        for (; t(o, -1), !a(o); )
          ;
      else for (; --l >= 0; )
        for (; t(o, 1), !a(o); )
          ;
  }), r && (i.count = (a, o) => (Ru.setTime(+a), Lu.setTime(+o), e(Ru), e(Lu), Math.floor(r(Ru, Lu))), i.every = (a) => (a = Math.floor(a), !isFinite(a) || !(a > 0) ? null : a > 1 ? i.filter(n ? (o) => n(o) % a === 0 : (o) => i.count(0, o) % a === 0) : i)), i;
}
const ao = Re(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
ao.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? Re((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : ao);
ao.range;
const Xt = 1e3, Et = Xt * 60, Zt = Et * 60, tr = Zt * 24, Xc = tr * 7, kh = tr * 30, zu = tr * 365, Fr = Re((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Xt);
}, (e, t) => (t - e) / Xt, (e) => e.getUTCSeconds());
Fr.range;
const Zc = Re((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Xt);
}, (e, t) => {
  e.setTime(+e + t * Et);
}, (e, t) => (t - e) / Et, (e) => e.getMinutes());
Zc.range;
const Jc = Re((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * Et);
}, (e, t) => (t - e) / Et, (e) => e.getUTCMinutes());
Jc.range;
const Qc = Re((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Xt - e.getMinutes() * Et);
}, (e, t) => {
  e.setTime(+e + t * Zt);
}, (e, t) => (t - e) / Zt, (e) => e.getHours());
Qc.range;
const ef = Re((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Zt);
}, (e, t) => (t - e) / Zt, (e) => e.getUTCHours());
ef.range;
const Bi = Re(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Et) / tr,
  (e) => e.getDate() - 1
);
Bi.range;
const Qo = Re((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / tr, (e) => e.getUTCDate() - 1);
Qo.range;
const v0 = Re((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / tr, (e) => Math.floor(e / tr));
v0.range;
function ln(e) {
  return Re((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * Et) / Xc);
}
const el = ln(0), oo = ln(1), CI = ln(2), TI = ln(3), _n = ln(4), NI = ln(5), DI = ln(6);
el.range;
oo.range;
CI.range;
TI.range;
_n.range;
NI.range;
DI.range;
function un(e) {
  return Re((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / Xc);
}
const tl = un(0), lo = un(1), MI = un(2), $I = un(3), jn = un(4), RI = un(5), LI = un(6);
tl.range;
lo.range;
MI.range;
$I.range;
jn.range;
RI.range;
LI.range;
const tf = Re((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
tf.range;
const rf = Re((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
rf.range;
const rr = Re((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
rr.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Re((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
rr.range;
const nr = Re((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
nr.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Re((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
nr.range;
function p0(e, t, r, n, i, a) {
  const o = [
    [Fr, 1, Xt],
    [Fr, 5, 5 * Xt],
    [Fr, 15, 15 * Xt],
    [Fr, 30, 30 * Xt],
    [a, 1, Et],
    [a, 5, 5 * Et],
    [a, 15, 15 * Et],
    [a, 30, 30 * Et],
    [i, 1, Zt],
    [i, 3, 3 * Zt],
    [i, 6, 6 * Zt],
    [i, 12, 12 * Zt],
    [n, 1, tr],
    [n, 2, 2 * tr],
    [r, 1, Xc],
    [t, 1, kh],
    [t, 3, 3 * kh],
    [e, 1, zu]
  ];
  function l(s, c, f) {
    const d = c < s;
    d && ([s, c] = [c, s]);
    const v = f && typeof f.range == "function" ? f : u(s, c, f), p = v ? v.range(s, +c + 1) : [];
    return d ? p.reverse() : p;
  }
  function u(s, c, f) {
    const d = Math.abs(c - s) / f, v = Rc(([, , h]) => h).right(o, d);
    if (v === o.length) return e.every(Ts(s / zu, c / zu, f));
    if (v === 0) return ao.every(Math.max(Ts(s, c, f), 1));
    const [p, m] = o[d / o[v - 1][2] < o[v][2] / d ? v - 1 : v];
    return p.every(m);
  }
  return [l, u];
}
const [zI, BI] = p0(nr, rf, tl, v0, ef, Jc), [FI, WI] = p0(rr, tf, el, Bi, Qc, Zc);
function Bu(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Fu(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Xn(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function KI(e) {
  var t = e.dateTime, r = e.date, n = e.time, i = e.periods, a = e.days, o = e.shortDays, l = e.months, u = e.shortMonths, s = Zn(i), c = Jn(i), f = Zn(a), d = Jn(a), v = Zn(o), p = Jn(o), m = Zn(l), h = Jn(l), y = Zn(u), b = Jn(u), x = {
    a: U,
    A: X,
    b: q,
    B: Z,
    c: null,
    d: $h,
    e: $h,
    f: dk,
    g: Ok,
    G: Ek,
    H: sk,
    I: ck,
    j: fk,
    L: h0,
    m: vk,
    M: pk,
    p: k,
    q: W,
    Q: zh,
    s: Bh,
    S: hk,
    u: mk,
    U: yk,
    V: gk,
    w: bk,
    W: xk,
    x: null,
    X: null,
    y: wk,
    Y: Pk,
    Z: Ak,
    "%": Lh
  }, w = {
    a: Y,
    A: J,
    b: He,
    B: _t,
    c: null,
    d: Rh,
    e: Rh,
    f: Ik,
    g: zk,
    G: Fk,
    H: Sk,
    I: _k,
    j: jk,
    L: y0,
    m: kk,
    M: Ck,
    p: ve,
    q: we,
    Q: zh,
    s: Bh,
    S: Tk,
    u: Nk,
    U: Dk,
    V: Mk,
    w: $k,
    W: Rk,
    x: null,
    X: null,
    y: Lk,
    Y: Bk,
    Z: Wk,
    "%": Lh
  }, P = {
    a: T,
    A: N,
    b: j,
    B: I,
    c: $,
    d: Dh,
    e: Dh,
    f: ak,
    g: Nh,
    G: Th,
    H: Mh,
    I: Mh,
    j: tk,
    L: ik,
    m: ek,
    M: rk,
    p: C,
    q: QI,
    Q: lk,
    s: uk,
    S: nk,
    u: GI,
    U: YI,
    V: XI,
    w: HI,
    W: ZI,
    x: K,
    X: V,
    y: Nh,
    Y: Th,
    Z: JI,
    "%": ok
  };
  x.x = O(r, x), x.X = O(n, x), x.c = O(t, x), w.x = O(r, w), w.X = O(n, w), w.c = O(t, w);
  function O(z, R) {
    return function(M) {
      var D = [], Te = -1, ue = 0, ut = z.length, st, kr, ld;
      for (M instanceof Date || (M = /* @__PURE__ */ new Date(+M)); ++Te < ut; )
        z.charCodeAt(Te) === 37 && (D.push(z.slice(ue, Te)), (kr = Ch[st = z.charAt(++Te)]) != null ? st = z.charAt(++Te) : kr = st === "e" ? " " : "0", (ld = R[st]) && (st = ld(M, kr)), D.push(st), ue = Te + 1);
      return D.push(z.slice(ue, Te)), D.join("");
    };
  }
  function A(z, R) {
    return function(M) {
      var D = Xn(1900, void 0, 1), Te = _(D, z, M += "", 0), ue, ut;
      if (Te != M.length) return null;
      if ("Q" in D) return new Date(D.Q);
      if ("s" in D) return new Date(D.s * 1e3 + ("L" in D ? D.L : 0));
      if (R && !("Z" in D) && (D.Z = 0), "p" in D && (D.H = D.H % 12 + D.p * 12), D.m === void 0 && (D.m = "q" in D ? D.q : 0), "V" in D) {
        if (D.V < 1 || D.V > 53) return null;
        "w" in D || (D.w = 1), "Z" in D ? (ue = Fu(Xn(D.y, 0, 1)), ut = ue.getUTCDay(), ue = ut > 4 || ut === 0 ? lo.ceil(ue) : lo(ue), ue = Qo.offset(ue, (D.V - 1) * 7), D.y = ue.getUTCFullYear(), D.m = ue.getUTCMonth(), D.d = ue.getUTCDate() + (D.w + 6) % 7) : (ue = Bu(Xn(D.y, 0, 1)), ut = ue.getDay(), ue = ut > 4 || ut === 0 ? oo.ceil(ue) : oo(ue), ue = Bi.offset(ue, (D.V - 1) * 7), D.y = ue.getFullYear(), D.m = ue.getMonth(), D.d = ue.getDate() + (D.w + 6) % 7);
      } else ("W" in D || "U" in D) && ("w" in D || (D.w = "u" in D ? D.u % 7 : "W" in D ? 1 : 0), ut = "Z" in D ? Fu(Xn(D.y, 0, 1)).getUTCDay() : Bu(Xn(D.y, 0, 1)).getDay(), D.m = 0, D.d = "W" in D ? (D.w + 6) % 7 + D.W * 7 - (ut + 5) % 7 : D.w + D.U * 7 - (ut + 6) % 7);
      return "Z" in D ? (D.H += D.Z / 100 | 0, D.M += D.Z % 100, Fu(D)) : Bu(D);
    };
  }
  function _(z, R, M, D) {
    for (var Te = 0, ue = R.length, ut = M.length, st, kr; Te < ue; ) {
      if (D >= ut) return -1;
      if (st = R.charCodeAt(Te++), st === 37) {
        if (st = R.charAt(Te++), kr = P[st in Ch ? R.charAt(Te++) : st], !kr || (D = kr(z, M, D)) < 0) return -1;
      } else if (st != M.charCodeAt(D++))
        return -1;
    }
    return D;
  }
  function C(z, R, M) {
    var D = s.exec(R.slice(M));
    return D ? (z.p = c.get(D[0].toLowerCase()), M + D[0].length) : -1;
  }
  function T(z, R, M) {
    var D = v.exec(R.slice(M));
    return D ? (z.w = p.get(D[0].toLowerCase()), M + D[0].length) : -1;
  }
  function N(z, R, M) {
    var D = f.exec(R.slice(M));
    return D ? (z.w = d.get(D[0].toLowerCase()), M + D[0].length) : -1;
  }
  function j(z, R, M) {
    var D = y.exec(R.slice(M));
    return D ? (z.m = b.get(D[0].toLowerCase()), M + D[0].length) : -1;
  }
  function I(z, R, M) {
    var D = m.exec(R.slice(M));
    return D ? (z.m = h.get(D[0].toLowerCase()), M + D[0].length) : -1;
  }
  function $(z, R, M) {
    return _(z, t, R, M);
  }
  function K(z, R, M) {
    return _(z, r, R, M);
  }
  function V(z, R, M) {
    return _(z, n, R, M);
  }
  function U(z) {
    return o[z.getDay()];
  }
  function X(z) {
    return a[z.getDay()];
  }
  function q(z) {
    return u[z.getMonth()];
  }
  function Z(z) {
    return l[z.getMonth()];
  }
  function k(z) {
    return i[+(z.getHours() >= 12)];
  }
  function W(z) {
    return 1 + ~~(z.getMonth() / 3);
  }
  function Y(z) {
    return o[z.getUTCDay()];
  }
  function J(z) {
    return a[z.getUTCDay()];
  }
  function He(z) {
    return u[z.getUTCMonth()];
  }
  function _t(z) {
    return l[z.getUTCMonth()];
  }
  function ve(z) {
    return i[+(z.getUTCHours() >= 12)];
  }
  function we(z) {
    return 1 + ~~(z.getUTCMonth() / 3);
  }
  return {
    format: function(z) {
      var R = O(z += "", x);
      return R.toString = function() {
        return z;
      }, R;
    },
    parse: function(z) {
      var R = A(z += "", !1);
      return R.toString = function() {
        return z;
      }, R;
    },
    utcFormat: function(z) {
      var R = O(z += "", w);
      return R.toString = function() {
        return z;
      }, R;
    },
    utcParse: function(z) {
      var R = A(z += "", !0);
      return R.toString = function() {
        return z;
      }, R;
    }
  };
}
var Ch = { "-": "", _: " ", 0: "0" }, Ke = /^\s*\d+/, qI = /^%/, UI = /[\\^$*+?|[\]().{}]/g;
function ne(e, t, r) {
  var n = e < 0 ? "-" : "", i = (n ? -e : e) + "", a = i.length;
  return n + (a < r ? new Array(r - a + 1).join(t) + i : i);
}
function VI(e) {
  return e.replace(UI, "\\$&");
}
function Zn(e) {
  return new RegExp("^(?:" + e.map(VI).join("|") + ")", "i");
}
function Jn(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function HI(e, t, r) {
  var n = Ke.exec(t.slice(r, r + 1));
  return n ? (e.w = +n[0], r + n[0].length) : -1;
}
function GI(e, t, r) {
  var n = Ke.exec(t.slice(r, r + 1));
  return n ? (e.u = +n[0], r + n[0].length) : -1;
}
function YI(e, t, r) {
  var n = Ke.exec(t.slice(r, r + 2));
  return n ? (e.U = +n[0], r + n[0].length) : -1;
}
function XI(e, t, r) {
  var n = Ke.exec(t.slice(r, r + 2));
  return n ? (e.V = +n[0], r + n[0].length) : -1;
}
function ZI(e, t, r) {
  var n = Ke.exec(t.slice(r, r + 2));
  return n ? (e.W = +n[0], r + n[0].length) : -1;
}
function Th(e, t, r) {
  var n = Ke.exec(t.slice(r, r + 4));
  return n ? (e.y = +n[0], r + n[0].length) : -1;
}
function Nh(e, t, r) {
  var n = Ke.exec(t.slice(r, r + 2));
  return n ? (e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function JI(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function QI(e, t, r) {
  var n = Ke.exec(t.slice(r, r + 1));
  return n ? (e.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function ek(e, t, r) {
  var n = Ke.exec(t.slice(r, r + 2));
  return n ? (e.m = n[0] - 1, r + n[0].length) : -1;
}
function Dh(e, t, r) {
  var n = Ke.exec(t.slice(r, r + 2));
  return n ? (e.d = +n[0], r + n[0].length) : -1;
}
function tk(e, t, r) {
  var n = Ke.exec(t.slice(r, r + 3));
  return n ? (e.m = 0, e.d = +n[0], r + n[0].length) : -1;
}
function Mh(e, t, r) {
  var n = Ke.exec(t.slice(r, r + 2));
  return n ? (e.H = +n[0], r + n[0].length) : -1;
}
function rk(e, t, r) {
  var n = Ke.exec(t.slice(r, r + 2));
  return n ? (e.M = +n[0], r + n[0].length) : -1;
}
function nk(e, t, r) {
  var n = Ke.exec(t.slice(r, r + 2));
  return n ? (e.S = +n[0], r + n[0].length) : -1;
}
function ik(e, t, r) {
  var n = Ke.exec(t.slice(r, r + 3));
  return n ? (e.L = +n[0], r + n[0].length) : -1;
}
function ak(e, t, r) {
  var n = Ke.exec(t.slice(r, r + 6));
  return n ? (e.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function ok(e, t, r) {
  var n = qI.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function lk(e, t, r) {
  var n = Ke.exec(t.slice(r));
  return n ? (e.Q = +n[0], r + n[0].length) : -1;
}
function uk(e, t, r) {
  var n = Ke.exec(t.slice(r));
  return n ? (e.s = +n[0], r + n[0].length) : -1;
}
function $h(e, t) {
  return ne(e.getDate(), t, 2);
}
function sk(e, t) {
  return ne(e.getHours(), t, 2);
}
function ck(e, t) {
  return ne(e.getHours() % 12 || 12, t, 2);
}
function fk(e, t) {
  return ne(1 + Bi.count(rr(e), e), t, 3);
}
function h0(e, t) {
  return ne(e.getMilliseconds(), t, 3);
}
function dk(e, t) {
  return h0(e, t) + "000";
}
function vk(e, t) {
  return ne(e.getMonth() + 1, t, 2);
}
function pk(e, t) {
  return ne(e.getMinutes(), t, 2);
}
function hk(e, t) {
  return ne(e.getSeconds(), t, 2);
}
function mk(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function yk(e, t) {
  return ne(el.count(rr(e) - 1, e), t, 2);
}
function m0(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? _n(e) : _n.ceil(e);
}
function gk(e, t) {
  return e = m0(e), ne(_n.count(rr(e), e) + (rr(e).getDay() === 4), t, 2);
}
function bk(e) {
  return e.getDay();
}
function xk(e, t) {
  return ne(oo.count(rr(e) - 1, e), t, 2);
}
function wk(e, t) {
  return ne(e.getFullYear() % 100, t, 2);
}
function Ok(e, t) {
  return e = m0(e), ne(e.getFullYear() % 100, t, 2);
}
function Pk(e, t) {
  return ne(e.getFullYear() % 1e4, t, 4);
}
function Ek(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? _n(e) : _n.ceil(e), ne(e.getFullYear() % 1e4, t, 4);
}
function Ak(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + ne(t / 60 | 0, "0", 2) + ne(t % 60, "0", 2);
}
function Rh(e, t) {
  return ne(e.getUTCDate(), t, 2);
}
function Sk(e, t) {
  return ne(e.getUTCHours(), t, 2);
}
function _k(e, t) {
  return ne(e.getUTCHours() % 12 || 12, t, 2);
}
function jk(e, t) {
  return ne(1 + Qo.count(nr(e), e), t, 3);
}
function y0(e, t) {
  return ne(e.getUTCMilliseconds(), t, 3);
}
function Ik(e, t) {
  return y0(e, t) + "000";
}
function kk(e, t) {
  return ne(e.getUTCMonth() + 1, t, 2);
}
function Ck(e, t) {
  return ne(e.getUTCMinutes(), t, 2);
}
function Tk(e, t) {
  return ne(e.getUTCSeconds(), t, 2);
}
function Nk(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function Dk(e, t) {
  return ne(tl.count(nr(e) - 1, e), t, 2);
}
function g0(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? jn(e) : jn.ceil(e);
}
function Mk(e, t) {
  return e = g0(e), ne(jn.count(nr(e), e) + (nr(e).getUTCDay() === 4), t, 2);
}
function $k(e) {
  return e.getUTCDay();
}
function Rk(e, t) {
  return ne(lo.count(nr(e) - 1, e), t, 2);
}
function Lk(e, t) {
  return ne(e.getUTCFullYear() % 100, t, 2);
}
function zk(e, t) {
  return e = g0(e), ne(e.getUTCFullYear() % 100, t, 2);
}
function Bk(e, t) {
  return ne(e.getUTCFullYear() % 1e4, t, 4);
}
function Fk(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? jn(e) : jn.ceil(e), ne(e.getUTCFullYear() % 1e4, t, 4);
}
function Wk() {
  return "+0000";
}
function Lh() {
  return "%";
}
function zh(e) {
  return +e;
}
function Bh(e) {
  return Math.floor(+e / 1e3);
}
var fn, b0, x0;
Kk({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function Kk(e) {
  return fn = KI(e), b0 = fn.format, fn.parse, x0 = fn.utcFormat, fn.utcParse, fn;
}
function qk(e) {
  return new Date(e);
}
function Uk(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function nf(e, t, r, n, i, a, o, l, u, s) {
  var c = Kc(), f = c.invert, d = c.domain, v = s(".%L"), p = s(":%S"), m = s("%I:%M"), h = s("%I %p"), y = s("%a %d"), b = s("%b %d"), x = s("%B"), w = s("%Y");
  function P(O) {
    return (u(O) < O ? v : l(O) < O ? p : o(O) < O ? m : a(O) < O ? h : n(O) < O ? i(O) < O ? y : b : r(O) < O ? x : w)(O);
  }
  return c.invert = function(O) {
    return new Date(f(O));
  }, c.domain = function(O) {
    return arguments.length ? d(Array.from(O, Uk)) : d().map(qk);
  }, c.ticks = function(O) {
    var A = d();
    return e(A[0], A[A.length - 1], O ?? 10);
  }, c.tickFormat = function(O, A) {
    return A == null ? P : s(A);
  }, c.nice = function(O) {
    var A = d();
    return (!O || typeof O.range != "function") && (O = t(A[0], A[A.length - 1], O ?? 10)), O ? d(o0(A, O)) : c;
  }, c.copy = function() {
    return zi(c, nf(e, t, r, n, i, a, o, l, u, s));
  }, c;
}
function Vk() {
  return St.apply(nf(FI, WI, rr, tf, el, Bi, Qc, Zc, Fr, b0).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function Hk() {
  return St.apply(nf(zI, BI, nr, rf, tl, Qo, ef, Jc, Fr, x0).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function rl() {
  var e = 0, t = 1, r, n, i, a, o = et, l = !1, u;
  function s(f) {
    return f == null || isNaN(f = +f) ? u : o(i === 0 ? 0.5 : (f = (a(f) - r) * i, l ? Math.max(0, Math.min(1, f)) : f));
  }
  s.domain = function(f) {
    return arguments.length ? ([e, t] = f, r = a(e = +e), n = a(t = +t), i = r === n ? 0 : 1 / (n - r), s) : [e, t];
  }, s.clamp = function(f) {
    return arguments.length ? (l = !!f, s) : l;
  }, s.interpolator = function(f) {
    return arguments.length ? (o = f, s) : o;
  };
  function c(f) {
    return function(d) {
      var v, p;
      return arguments.length ? ([v, p] = d, o = f(v, p), s) : [o(0), o(1)];
    };
  }
  return s.range = c($n), s.rangeRound = c(Wc), s.unknown = function(f) {
    return arguments.length ? (u = f, s) : u;
  }, function(f) {
    return a = f, r = f(e), n = f(t), i = r === n ? 0 : 1 / (n - r), s;
  };
}
function jr(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function w0() {
  var e = _r(rl()(et));
  return e.copy = function() {
    return jr(e, w0());
  }, sr.apply(e, arguments);
}
function O0() {
  var e = Vc(rl()).domain([1, 10]);
  return e.copy = function() {
    return jr(e, O0()).base(e.base());
  }, sr.apply(e, arguments);
}
function P0() {
  var e = Hc(rl());
  return e.copy = function() {
    return jr(e, P0()).constant(e.constant());
  }, sr.apply(e, arguments);
}
function af() {
  var e = Gc(rl());
  return e.copy = function() {
    return jr(e, af()).exponent(e.exponent());
  }, sr.apply(e, arguments);
}
function Gk() {
  return af.apply(null, arguments).exponent(0.5);
}
function E0() {
  var e = [], t = et;
  function r(n) {
    if (n != null && !isNaN(n = +n)) return t((Ri(e, n, 1) - 1) / (e.length - 1));
  }
  return r.domain = function(n) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let i of n) i != null && !isNaN(i = +i) && e.push(i);
    return e.sort(br), r;
  }, r.interpolator = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.range = function() {
    return e.map((n, i) => t(i / (e.length - 1)));
  }, r.quantiles = function(n) {
    return Array.from({ length: n + 1 }, (i, a) => Nj(e, a / n));
  }, r.copy = function() {
    return E0(t).domain(e);
  }, sr.apply(r, arguments);
}
function nl() {
  var e = 0, t = 0.5, r = 1, n = 1, i, a, o, l, u, s = et, c, f = !1, d;
  function v(m) {
    return isNaN(m = +m) ? d : (m = 0.5 + ((m = +c(m)) - a) * (n * m < n * a ? l : u), s(f ? Math.max(0, Math.min(1, m)) : m));
  }
  v.domain = function(m) {
    return arguments.length ? ([e, t, r] = m, i = c(e = +e), a = c(t = +t), o = c(r = +r), l = i === a ? 0 : 0.5 / (a - i), u = a === o ? 0 : 0.5 / (o - a), n = a < i ? -1 : 1, v) : [e, t, r];
  }, v.clamp = function(m) {
    return arguments.length ? (f = !!m, v) : f;
  }, v.interpolator = function(m) {
    return arguments.length ? (s = m, v) : s;
  };
  function p(m) {
    return function(h) {
      var y, b, x;
      return arguments.length ? ([y, b, x] = h, s = oI(m, [y, b, x]), v) : [s(0), s(0.5), s(1)];
    };
  }
  return v.range = p($n), v.rangeRound = p(Wc), v.unknown = function(m) {
    return arguments.length ? (d = m, v) : d;
  }, function(m) {
    return c = m, i = m(e), a = m(t), o = m(r), l = i === a ? 0 : 0.5 / (a - i), u = a === o ? 0 : 0.5 / (o - a), n = a < i ? -1 : 1, v;
  };
}
function A0() {
  var e = _r(nl()(et));
  return e.copy = function() {
    return jr(e, A0());
  }, sr.apply(e, arguments);
}
function S0() {
  var e = Vc(nl()).domain([0.1, 1, 10]);
  return e.copy = function() {
    return jr(e, S0()).base(e.base());
  }, sr.apply(e, arguments);
}
function _0() {
  var e = Hc(nl());
  return e.copy = function() {
    return jr(e, _0()).constant(e.constant());
  }, sr.apply(e, arguments);
}
function of() {
  var e = Gc(nl());
  return e.copy = function() {
    return jr(e, of()).exponent(e.exponent());
  }, sr.apply(e, arguments);
}
function Yk() {
  return of.apply(null, arguments).exponent(0.5);
}
const ni = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  scaleBand: zc,
  scaleDiverging: A0,
  scaleDivergingLog: S0,
  scaleDivergingPow: of,
  scaleDivergingSqrt: Yk,
  scaleDivergingSymlog: _0,
  scaleIdentity: a0,
  scaleImplicit: Ns,
  scaleLinear: i0,
  scaleLog: l0,
  scaleOrdinal: Lc,
  scalePoint: $j,
  scalePow: Yc,
  scaleQuantile: c0,
  scaleQuantize: f0,
  scaleRadial: s0,
  scaleSequential: w0,
  scaleSequentialLog: O0,
  scaleSequentialPow: af,
  scaleSequentialQuantile: E0,
  scaleSequentialSqrt: Gk,
  scaleSequentialSymlog: P0,
  scaleSqrt: II,
  scaleSymlog: u0,
  scaleThreshold: d0,
  scaleTime: Vk,
  scaleUtc: Hk,
  tickFormat: n0
}, Symbol.toStringTag, { value: "Module" }));
function Xk(e) {
  if (e in ni)
    return ni[e]();
  var t = "scale".concat(Ei(e));
  if (t in ni)
    return ni[t]();
}
function Fh(e, t, r) {
  if (typeof e == "function")
    return e.copy().domain(t).range(r);
  if (e != null) {
    var n = Xk(e);
    if (n != null)
      return n.domain(t).range(r), n;
  }
}
function lf(e, t, r, n) {
  if (!(r == null || n == null))
    return typeof e.scale == "function" ? Fh(e.scale, r, n) : Fh(t, r, n);
}
function Zk(e) {
  return "scale".concat(Ei(e));
}
function Jk(e) {
  return Zk(e) in ni;
}
var j0 = (e, t, r) => {
  if (e != null) {
    var {
      scale: n,
      type: i
    } = e;
    if (n === "auto")
      return i === "category" && r && (r.indexOf("LineChart") >= 0 || r.indexOf("AreaChart") >= 0 || r.indexOf("ComposedChart") >= 0 && !t) ? "point" : i === "category" ? "band" : "linear";
    if (typeof n == "string")
      return Jk(n) ? n : "point";
  }
};
function Qk(e, t) {
  for (var r = 0, n = e.length, i = e[0] < e[e.length - 1]; r < n; ) {
    var a = Math.floor((r + n) / 2);
    (i ? e[a] < t : e[a] > t) ? r = a + 1 : n = a;
  }
  return r;
}
function I0(e, t) {
  if (e) {
    var r = t ?? e.domain(), n = r.map((a) => {
      var o;
      return (o = e(a)) !== null && o !== void 0 ? o : 0;
    }), i = e.range();
    if (!(r.length === 0 || i.length < 2))
      return (a) => {
        var o, l, u = Qk(n, a);
        if (u <= 0)
          return r[0];
        if (u >= r.length)
          return r[r.length - 1];
        var s = (o = n[u - 1]) !== null && o !== void 0 ? o : 0, c = (l = n[u]) !== null && l !== void 0 ? l : 0;
        return Math.abs(a - s) <= Math.abs(a - c) ? r[u - 1] : r[u];
      };
  }
}
function eC(e) {
  if (e != null)
    return "invert" in e && typeof e.invert == "function" ? e.invert.bind(e) : I0(e, void 0);
}
function Wh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function uo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Wh(Object(r), !0).forEach(function(n) {
      tC(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Wh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function tC(e, t, r) {
  return (t = rC(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function rC(e) {
  var t = nC(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function nC(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Rs = [0, "auto"], Ne = {
  allowDataOverflow: !1,
  allowDecimals: !0,
  allowDuplicatedCategory: !0,
  angle: 0,
  dataKey: void 0,
  domain: void 0,
  height: 30,
  hide: !0,
  id: 0,
  includeHidden: !1,
  interval: "preserveEnd",
  minTickGap: 5,
  mirror: !1,
  name: void 0,
  orientation: "bottom",
  padding: {
    left: 0,
    right: 0
  },
  reversed: !1,
  scale: "auto",
  tick: !0,
  tickCount: 5,
  tickFormatter: void 0,
  ticks: void 0,
  type: "category",
  unit: void 0,
  niceTicks: "auto"
}, k0 = (e, t) => e.cartesianAxis.xAxis[t], cr = (e, t) => {
  var r = k0(e, t);
  return r ?? Ne;
}, De = {
  allowDataOverflow: !1,
  allowDecimals: !0,
  allowDuplicatedCategory: !0,
  angle: 0,
  dataKey: void 0,
  domain: Rs,
  hide: !0,
  id: 0,
  includeHidden: !1,
  interval: "preserveEnd",
  minTickGap: 5,
  mirror: !1,
  name: void 0,
  orientation: "left",
  padding: {
    top: 0,
    bottom: 0
  },
  reversed: !1,
  scale: "auto",
  tick: !0,
  tickCount: 5,
  tickFormatter: void 0,
  ticks: void 0,
  type: "number",
  unit: void 0,
  niceTicks: "auto",
  width: ki
}, C0 = (e, t) => e.cartesianAxis.yAxis[t], fr = (e, t) => {
  var r = C0(e, t);
  return r ?? De;
}, iC = {
  domain: [0, "auto"],
  includeHidden: !1,
  reversed: !1,
  allowDataOverflow: !1,
  allowDuplicatedCategory: !1,
  dataKey: void 0,
  id: 0,
  name: "",
  range: [64, 64],
  scale: "auto",
  type: "number",
  unit: ""
}, uf = (e, t) => {
  var r = e.cartesianAxis.zAxis[t];
  return r ?? iC;
}, Se = (e, t, r) => {
  switch (t) {
    case "xAxis":
      return cr(e, r);
    case "yAxis":
      return fr(e, r);
    case "zAxis":
      return uf(e, r);
    case "angleAxis":
      return Nc(e, r);
    case "radiusAxis":
      return Dc(e, r);
    default:
      throw new Error("Unexpected axis type: ".concat(t));
  }
}, aC = (e, t, r) => {
  switch (t) {
    case "xAxis":
      return cr(e, r);
    case "yAxis":
      return fr(e, r);
    default:
      throw new Error("Unexpected axis type: ".concat(t));
  }
}, Rn = (e, t, r) => {
  switch (t) {
    case "xAxis":
      return cr(e, r);
    case "yAxis":
      return fr(e, r);
    case "angleAxis":
      return Nc(e, r);
    case "radiusAxis":
      return Dc(e, r);
    default:
      throw new Error("Unexpected axis type: ".concat(t));
  }
}, T0 = (e) => e.graphicalItems.cartesianItems.some((t) => t.type === "bar") || e.graphicalItems.polarItems.some((t) => t.type === "radialBar");
function sf(e, t) {
  return (r) => {
    switch (e) {
      case "xAxis":
        return "xAxisId" in r && r.xAxisId === t;
      case "yAxis":
        return "yAxisId" in r && r.yAxisId === t;
      case "zAxis":
        return "zAxisId" in r && r.zAxisId === t;
      case "angleAxis":
        return "angleAxisId" in r && r.angleAxisId === t;
      case "radiusAxis":
        return "radiusAxisId" in r && r.radiusAxisId === t;
      default:
        return !1;
    }
  };
}
var Fi = (e) => e.graphicalItems.cartesianItems, oC = S([Pe, $i], sf), cf = (e, t, r) => e.filter(r).filter((n) => t?.includeHidden === !0 ? !0 : !n.hide), Wi = S([Fi, Se, oC], cf, {
  memoizeOptions: {
    resultEqualityCheck: Zo
  }
}), N0 = S([Wi], (e) => e.filter((t) => t.type === "area" || t.type === "bar").filter(Yo)), D0 = (e) => e.filter((t) => !("stackId" in t) || t.stackId === void 0), lC = S([Wi], D0), ff = (e) => e.map((t) => t.data).filter(Boolean).flat(1), uC = S([Wi], ff, {
  memoizeOptions: {
    resultEqualityCheck: Zo
  }
}), df = (e, t) => {
  var {
    chartData: r = [],
    dataStartIndex: n,
    dataEndIndex: i
  } = t;
  return e.length > 0 ? e : r.slice(n, i + 1);
}, vf = S([uC, Sc], df), pf = (e, t, r) => t?.dataKey != null ? e.map((n) => ({
  value: le(n, t.dataKey)
})) : r.length > 0 ? r.map((n) => n.dataKey).flatMap((n) => e.map((i) => ({
  value: le(i, n)
}))) : e.map((n) => ({
  value: n
})), Ki = S([vf, Se, Wi], pf);
function On(e) {
  if (Ft(e) || e instanceof Date) {
    var t = Number(e);
    if (G(t))
      return t;
  }
}
function Kh(e) {
  if (Array.isArray(e)) {
    var t = [On(e[0]), On(e[1])];
    return zt(t) ? t : void 0;
  }
  var r = On(e);
  if (r != null)
    return [r, r];
}
function ir(e) {
  return e.map(On).filter(at);
}
function sC(e, t) {
  var r = On(e), n = On(t);
  return r == null && n == null ? 0 : r == null ? -1 : n == null ? 1 : r - n;
}
var cC = S([Ki], (e) => e?.map((t) => t.value).sort(sC));
function M0(e, t) {
  switch (e) {
    case "xAxis":
      return t.direction === "x";
    case "yAxis":
      return t.direction === "y";
    default:
      return !1;
  }
}
function fC(e, t, r) {
  return !r || typeof t != "number" || It(t) ? [] : r.length ? ir(r.flatMap((n) => {
    var i = le(e, n.dataKey), a, o;
    if (Array.isArray(i) ? [a, o] = i : a = o = i, !(!G(a) || !G(o)))
      return [t - a, t + o];
  })) : [];
}
var Le = (e) => {
  var t = We(e), r = Mn(e);
  return Rn(e, t, r);
}, qi = S([Le], (e) => e?.dataKey), dC = S([N0, Sc, Le], Hb), $0 = (e, t, r, n) => {
  var i = {}, a = t.reduce((o, l) => {
    if (l.stackId == null)
      return o;
    var u = o[l.stackId];
    return u == null && (u = []), u.push(l), o[l.stackId] = u, o;
  }, i);
  return Object.fromEntries(Object.entries(a).map((o) => {
    var [l, u] = o, s = n ? [...u].reverse() : u, c = s.map(Go);
    return [l, {
      // @ts-expect-error getStackedData requires that the input is array of objects, Recharts does not test for that
      stackedData: rA(e, c, r),
      graphicalItems: s
    }];
  }));
}, so = S([dC, N0, Mi, Bb], $0), R0 = (e, t, r, n) => {
  var {
    dataStartIndex: i,
    dataEndIndex: a
  } = t;
  if (n == null && r !== "zAxis") {
    var o = oA(e, i, a);
    if (!(o != null && o[0] === 0 && o[1] === 0))
      return o;
  }
}, vC = S([Se], (e) => e.allowDataOverflow), hf = (e) => {
  var t;
  if (e == null || !("domain" in e))
    return Rs;
  if (e.domain != null)
    return e.domain;
  if ("ticks" in e && e.ticks != null) {
    if (e.type === "number") {
      var r = ir(e.ticks);
      return [Math.min(...r), Math.max(...r)];
    }
    if (e.type === "category")
      return e.ticks.map(String);
  }
  return (t = e?.domain) !== null && t !== void 0 ? t : Rs;
}, mf = S([Se], hf), yf = S([mf, vC], _b), pC = S([so, ur, Pe, yf], R0, {
  memoizeOptions: {
    resultEqualityCheck: Xo
  }
}), il = (e) => e.errorBars, hC = (e, t, r) => e.flatMap((n) => t[n.id]).filter(Boolean).filter((n) => M0(r, n)), co = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var i = r.filter(Boolean);
  if (i.length !== 0) {
    var a = i.flat(), o = Math.min(...a), l = Math.max(...a);
    return [o, l];
  }
}, gf = (e, t, r, n, i) => {
  var a, o;
  if (r.length > 0 && e.forEach((l) => {
    r.forEach((u) => {
      var s, c, f = (s = n[u.id]) === null || s === void 0 ? void 0 : s.filter((y) => M0(i, y)), d = le(l, (c = t.dataKey) !== null && c !== void 0 ? c : u.dataKey), v = fC(l, d, f);
      if (v.length >= 2) {
        var p = Math.min(...v), m = Math.max(...v);
        (a == null || p < a) && (a = p), (o == null || m > o) && (o = m);
      }
      var h = Kh(d);
      h != null && (a = a == null ? h[0] : Math.min(a, h[0]), o = o == null ? h[1] : Math.max(o, h[1]));
    });
  }), t?.dataKey != null && e.forEach((l) => {
    var u = Kh(le(l, t.dataKey));
    u != null && (a = a == null ? u[0] : Math.min(a, u[0]), o = o == null ? u[1] : Math.max(o, u[1]));
  }), G(a) && G(o))
    return [a, o];
}, mC = S([vf, Se, lC, il, Pe], gf, {
  memoizeOptions: {
    resultEqualityCheck: Xo
  }
});
function yC(e) {
  var {
    value: t
  } = e;
  if (Ft(t) || t instanceof Date)
    return t;
}
var gC = (e, t, r) => {
  var n = e.map(yC).filter((i) => i != null);
  return r && (t.dataKey == null || t.allowDuplicatedCategory && Vy(n)) ? Ab(0, e.length) : t.allowDuplicatedCategory ? n : Array.from(new Set(n));
}, L0 = (e) => e.referenceElements.dots, Ln = (e, t, r) => e.filter((n) => n.ifOverflow === "extendDomain").filter((n) => t === "xAxis" ? n.xAxisId === r : n.yAxisId === r), bC = S([L0, Pe, $i], Ln), z0 = (e) => e.referenceElements.areas, xC = S([z0, Pe, $i], Ln), B0 = (e) => e.referenceElements.lines, wC = S([B0, Pe, $i], Ln), F0 = (e, t) => {
  if (e != null) {
    var r = ir(e.map((n) => t === "xAxis" ? n.x : n.y));
    if (r.length !== 0)
      return [Math.min(...r), Math.max(...r)];
  }
}, OC = S(bC, Pe, F0), W0 = (e, t) => {
  if (e != null) {
    var r = ir(e.flatMap((n) => [t === "xAxis" ? n.x1 : n.y1, t === "xAxis" ? n.x2 : n.y2]));
    if (r.length !== 0)
      return [Math.min(...r), Math.max(...r)];
  }
}, PC = S([xC, Pe], W0);
function EC(e) {
  var t;
  if (e.x != null)
    return ir([e.x]);
  var r = (t = e.segment) === null || t === void 0 ? void 0 : t.map((n) => n.x);
  return r == null || r.length === 0 ? [] : ir(r);
}
function AC(e) {
  var t;
  if (e.y != null)
    return ir([e.y]);
  var r = (t = e.segment) === null || t === void 0 ? void 0 : t.map((n) => n.y);
  return r == null || r.length === 0 ? [] : ir(r);
}
var K0 = (e, t) => {
  if (e != null) {
    var r = e.flatMap((n) => t === "xAxis" ? EC(n) : AC(n));
    if (r.length !== 0)
      return [Math.min(...r), Math.max(...r)];
  }
}, SC = S([wC, Pe], K0), _C = S(OC, SC, PC, (e, t, r) => co(e, r, t)), bf = (e, t, r, n, i, a, o, l) => {
  if (r != null)
    return r;
  var u = o === "vertical" && l === "xAxis" || o === "horizontal" && l === "yAxis", s = u ? co(n, a, i) : co(a, i);
  return lj(t, s, e.allowDataOverflow);
}, jC = S([Se, mf, yf, pC, mC, _C, ee, Pe], bf, {
  memoizeOptions: {
    resultEqualityCheck: Xo
  }
}), IC = [0, 1], xf = (e, t, r, n, i, a, o) => {
  if (!((e == null || r == null || r.length === 0) && o === void 0)) {
    var {
      dataKey: l,
      type: u
    } = e, s = Tt(t, a);
    if (s && l == null) {
      var c;
      return Ab(0, (c = r?.length) !== null && c !== void 0 ? c : 0);
    }
    return u === "category" ? gC(n, e, s) : i === "expand" ? IC : o;
  }
}, wf = S([Se, ee, vf, Ki, Mi, Pe, jC], xf), Ir = S([Se, T0, kc], j0), Of = (e, t, r) => {
  var {
    niceTicks: n
  } = t;
  if (n !== "none") {
    var i = hf(t), a = Array.isArray(i) && (i[0] === "auto" || i[1] === "auto");
    if ((n === "snap125" || n === "adaptive") && t != null && t.tickCount && zt(e)) {
      if (a)
        return Qp(e, t.tickCount, t.allowDecimals, n);
      if (t.type === "number")
        return eh(e, t.tickCount, t.allowDecimals, n);
    }
    if (n === "auto" && r === "linear" && t != null && t.tickCount) {
      if (a && zt(e))
        return Qp(e, t.tickCount, t.allowDecimals, "adaptive");
      if (t.type === "number" && zt(e))
        return eh(e, t.tickCount, t.allowDecimals, "adaptive");
    }
  }
}, Pf = S([wf, Rn, Ir], Of), Ef = (e, t, r, n) => {
  if (
    /*
     * Angle axis for some reason uses nice ticks when rendering axis tick labels,
     * but doesn't use nice ticks for extending domain like all the other axes do.
     * Not really sure why? Is there a good reason,
     * or is it just because someone added support for nice ticks to the other axes and forgot this one?
     */
    n !== "angleAxis" && e?.type === "number" && zt(t) && Array.isArray(r) && r.length > 0
  ) {
    var i, a, o = t[0], l = (i = r[0]) !== null && i !== void 0 ? i : 0, u = t[1], s = (a = r[r.length - 1]) !== null && a !== void 0 ? a : 0;
    return [Math.min(o, l), Math.max(u, s)];
  }
  return t;
}, kC = S([Se, wf, Pf, Pe], Ef), CC = S(Ki, Se, (e, t) => {
  if (!(!t || t.type !== "number")) {
    var r = 1 / 0, n = Array.from(ir(e.map((f) => f.value))).sort((f, d) => f - d), i = n[0], a = n[n.length - 1];
    if (i == null || a == null)
      return 1 / 0;
    var o = a - i;
    if (o === 0)
      return 1 / 0;
    for (var l = 0; l < n.length - 1; l++) {
      var u = n[l], s = n[l + 1];
      if (!(u == null || s == null)) {
        var c = s - u;
        r = Math.min(r, c);
      }
    }
    return r / o;
  }
}), q0 = S(CC, ee, zb, $e, (e, t, r, n, i) => i, (e, t, r, n, i) => {
  if (!G(e))
    return 0;
  var a = t === "vertical" ? n.height : n.width;
  if (i === "gap")
    return e * a / 2;
  if (i === "no-gap") {
    var o = Xe(r, e * a), l = e * a / 2;
    return l - o - (l - o) / a * o;
  }
  return 0;
}), TC = (e, t, r) => {
  var n = cr(e, t);
  return n == null || typeof n.padding != "string" ? 0 : q0(e, "xAxis", t, r, n.padding);
}, NC = (e, t, r) => {
  var n = fr(e, t);
  return n == null || typeof n.padding != "string" ? 0 : q0(e, "yAxis", t, r, n.padding);
}, DC = S(cr, TC, (e, t) => {
  var r, n;
  if (e == null)
    return {
      left: 0,
      right: 0
    };
  var {
    padding: i
  } = e;
  return typeof i == "string" ? {
    left: t,
    right: t
  } : {
    left: ((r = i.left) !== null && r !== void 0 ? r : 0) + t,
    right: ((n = i.right) !== null && n !== void 0 ? n : 0) + t
  };
}), MC = S(fr, NC, (e, t) => {
  var r, n;
  if (e == null)
    return {
      top: 0,
      bottom: 0
    };
  var {
    padding: i
  } = e;
  return typeof i == "string" ? {
    top: t,
    bottom: t
  } : {
    top: ((r = i.top) !== null && r !== void 0 ? r : 0) + t,
    bottom: ((n = i.bottom) !== null && n !== void 0 ? n : 0) + t
  };
}), $C = S([$e, DC, zo, Lo, (e, t, r) => r], (e, t, r, n, i) => {
  var {
    padding: a
  } = n;
  return i ? [a.left, r.width - a.right] : [e.left + t.left, e.left + e.width - t.right];
}), RC = S([$e, ee, MC, zo, Lo, (e, t, r) => r], (e, t, r, n, i, a) => {
  var {
    padding: o
  } = i;
  return a ? [n.height - o.bottom, o.top] : t === "horizontal" ? [e.top + e.height - r.bottom, e.top + r.top] : [e.top + r.top, e.top + e.height - r.bottom];
}), Ui = (e, t, r, n) => {
  var i;
  switch (t) {
    case "xAxis":
      return $C(e, r, n);
    case "yAxis":
      return RC(e, r, n);
    case "zAxis":
      return (i = uf(e, r)) === null || i === void 0 ? void 0 : i.range;
    case "angleAxis":
      return qb(e);
    case "radiusAxis":
      return Ub(e, r);
    default:
      return;
  }
}, U0 = S([Se, Ui], Uo), LC = S([Ir, kC], Gb), Af = S([Se, Ir, LC, U0], lf), V0 = (e, t, r, n) => {
  if (!(r == null || r.dataKey == null)) {
    var {
      type: i,
      scale: a
    } = r, o = Tt(e, n);
    if (o && (i === "number" || a !== "auto"))
      return t.map((l) => l.value);
  }
}, Sf = S([ee, Ki, Rn, Pe], V0), al = S([Af], $c);
S([Af], eC);
S([Af, cC], I0);
S([Wi, il, Pe], hC);
function H0(e, t) {
  return e.id < t.id ? -1 : e.id > t.id ? 1 : 0;
}
var ol = (e, t) => t, ll = (e, t, r) => r, zC = S($o, ol, ll, (e, t, r) => e.filter((n) => n.orientation === t).filter((n) => n.mirror === r).sort(H0)), BC = S(Ro, ol, ll, (e, t, r) => e.filter((n) => n.orientation === t).filter((n) => n.mirror === r).sort(H0)), G0 = (e, t) => ({
  width: e.width,
  height: t.height
}), FC = (e, t) => {
  var r = typeof t.width == "number" ? t.width : ki;
  return {
    width: r,
    height: e.height
  };
}, Y0 = S($e, cr, G0), WC = (e, t, r) => {
  switch (t) {
    case "top":
      return e.top;
    case "bottom":
      return r - e.bottom;
    default:
      return 0;
  }
}, KC = (e, t, r) => {
  switch (t) {
    case "left":
      return e.left;
    case "right":
      return r - e.right;
    default:
      return 0;
  }
}, qC = S(lr, $e, zC, ol, ll, (e, t, r, n, i) => {
  var a = {}, o;
  return r.forEach((l) => {
    var u = G0(t, l);
    o == null && (o = WC(t, n, e));
    var s = n === "top" && !i || n === "bottom" && i;
    a[l.id] = o - Number(s) * u.height, o += (s ? -1 : 1) * u.height;
  }), a;
}), UC = S(or, $e, BC, ol, ll, (e, t, r, n, i) => {
  var a = {}, o;
  return r.forEach((l) => {
    var u = FC(t, l);
    o == null && (o = KC(t, n, e));
    var s = n === "left" && !i || n === "right" && i;
    a[l.id] = o - Number(s) * u.width, o += (s ? -1 : 1) * u.width;
  }), a;
}), VC = (e, t) => {
  var r = cr(e, t);
  if (r != null)
    return qC(e, r.orientation, r.mirror);
}, HC = S([$e, cr, VC, (e, t) => t], (e, t, r, n) => {
  if (t != null) {
    var i = r?.[n];
    return i == null ? {
      x: e.left,
      y: 0
    } : {
      x: e.left,
      y: i
    };
  }
}), GC = (e, t) => {
  var r = fr(e, t);
  if (r != null)
    return UC(e, r.orientation, r.mirror);
}, YC = S([$e, fr, GC, (e, t) => t], (e, t, r, n) => {
  if (t != null) {
    var i = r?.[n];
    return i == null ? {
      x: 0,
      y: e.top
    } : {
      x: i,
      y: e.top
    };
  }
}), X0 = S($e, fr, (e, t) => {
  var r = typeof t.width == "number" ? t.width : ki;
  return {
    width: r,
    height: e.height
  };
}), qh = (e, t, r) => {
  switch (t) {
    case "xAxis":
      return Y0(e, r).width;
    case "yAxis":
      return X0(e, r).height;
    default:
      return;
  }
}, Z0 = (e, t, r, n) => {
  if (r != null) {
    var {
      allowDuplicatedCategory: i,
      type: a,
      dataKey: o
    } = r, l = Tt(e, n), u = t.map((s) => s.value);
    if (o && l && a === "category" && i && Vy(u))
      return u;
  }
}, _f = S([ee, Ki, Se, Pe], Z0), Uh = S([ee, aC, Ir, al, _f, Sf, Ui, Pf, Pe], (e, t, r, n, i, a, o, l, u) => {
  if (t != null) {
    var s = Tt(e, u);
    return {
      angle: t.angle,
      interval: t.interval,
      minTickGap: t.minTickGap,
      orientation: t.orientation,
      tick: t.tick,
      tickCount: t.tickCount,
      tickFormatter: t.tickFormatter,
      ticks: t.ticks,
      type: t.type,
      unit: t.unit,
      axisType: u,
      categoricalDomain: a,
      duplicateDomain: i,
      isCategorical: s,
      niceTicks: l,
      range: o,
      realScaleType: r,
      scale: n
    };
  }
}), XC = (e, t, r, n, i, a, o, l, u) => {
  if (!(t == null || n == null)) {
    var s = Tt(e, u), {
      type: c,
      ticks: f,
      tickCount: d
    } = t, v = (
      // @ts-expect-error This is testing for `scaleBand` but for band axis the type is reported as `band` so this looks like a dead code with a workaround elsewhere?
      r === "scaleBand" && typeof n.bandwidth == "function" ? n.bandwidth() / 2 : 2
    ), p = c === "category" && n.bandwidth ? n.bandwidth() / v : 0;
    p = u === "angleAxis" && a != null && a.length >= 2 ? Be(a[0] - a[1]) * 2 * p : p;
    var m = f || i;
    return m ? m.map((h, y) => {
      var b = o ? o.indexOf(h) : h, x = n.map(b);
      return G(x) ? {
        index: y,
        coordinate: x + p,
        value: h,
        offset: p
      } : null;
    }).filter(at) : s && l ? l.map((h, y) => {
      var b = n.map(h);
      return G(b) ? {
        coordinate: b + p,
        value: h,
        index: y,
        offset: p
      } : null;
    }).filter(at) : n.ticks ? n.ticks(d).map((h, y) => {
      var b = n.map(h);
      return G(b) ? {
        coordinate: b + p,
        value: h,
        index: y,
        offset: p
      } : null;
    }).filter(at) : n.domain().map((h, y) => {
      var b = n.map(h);
      return G(b) ? {
        coordinate: b + p,
        // @ts-expect-error can't use Date as index
        value: o ? o[h] : h,
        index: y,
        offset: p
      } : null;
    }).filter(at);
  }
}, J0 = S([ee, Rn, Ir, al, Pf, Ui, _f, Sf, Pe], XC), ZC = (e, t, r, n, i, a, o) => {
  if (!(t == null || r == null || n == null || n[0] === n[1])) {
    var l = Tt(e, o), {
      tickCount: u
    } = t, s = 0;
    return s = o === "angleAxis" && n?.length >= 2 ? Be(n[0] - n[1]) * 2 * s : s, l && a ? a.map((c, f) => {
      var d = r.map(c);
      return G(d) ? {
        coordinate: d + s,
        value: c,
        index: f,
        offset: s
      } : null;
    }).filter(at) : r.ticks ? r.ticks(u).map((c, f) => {
      var d = r.map(c);
      return G(d) ? {
        coordinate: d + s,
        value: c,
        index: f,
        offset: s
      } : null;
    }).filter(at) : r.domain().map((c, f) => {
      var d = r.map(c);
      return G(d) ? {
        coordinate: d + s,
        // @ts-expect-error can't use unknown as index
        value: i ? i[c] : c,
        index: f,
        offset: s
      } : null;
    }).filter(at);
  }
}, qt = S([ee, Rn, al, Ui, _f, Sf, Pe], ZC), Ut = S(Se, al, (e, t) => {
  if (!(e == null || t == null))
    return uo(uo({}, e), {}, {
      scale: t
    });
}), JC = S([Se, Ir, wf, U0], lf), QC = S([JC], $c);
S((e, t, r) => uf(e, r), QC, (e, t) => {
  if (!(e == null || t == null))
    return uo(uo({}, e), {}, {
      scale: t
    });
});
var eT = S([ee, $o, Ro], (e, t, r) => {
  switch (e) {
    case "horizontal":
      return t.some((n) => n.reversed) ? "right-to-left" : "left-to-right";
    case "vertical":
      return r.some((n) => n.reversed) ? "bottom-to-top" : "top-to-bottom";
    // TODO: make this better. For now, right arrow triggers "forward", left arrow "back"
    // however, the tooltip moves an unintuitive direction because of how the indices are rendered
    case "centric":
    case "radial":
      return "left-to-right";
    default:
      return;
  }
}), tT = (e, t, r) => {
  var n;
  return (n = e.renderedTicks[t]) === null || n === void 0 ? void 0 : n[r];
};
S([tT], (e) => {
  if (!(!e || e.length === 0))
    return (t) => {
      var r, n = 1 / 0, i = e[0];
      for (var a of e) {
        var o = Math.abs(a.coordinate - t);
        o < n && (n = o, i = a);
      }
      return (r = i) === null || r === void 0 ? void 0 : r.value;
    };
});
var Q0 = (e) => e.options.defaultTooltipEventType, ex = (e) => e.options.validateTooltipEventTypes;
function tx(e, t, r) {
  if (e == null)
    return t;
  var n = e ? "axis" : "item";
  return r == null ? t : r.includes(n) ? n : t;
}
function jf(e, t) {
  var r = Q0(e), n = ex(e);
  return tx(t, r, n);
}
function rT(e) {
  return B((t) => jf(t, e));
}
var rx = (e, t) => {
  var r, n = Number(t);
  if (!(It(n) || t == null))
    return n >= 0 ? e == null || (r = e[n]) === null || r === void 0 ? void 0 : r.value : void 0;
}, nT = (e) => e.tooltip.settings, yr = {
  active: !1,
  index: null,
  dataKey: void 0,
  graphicalItemId: void 0,
  coordinate: void 0
}, iT = {
  itemInteraction: {
    click: yr,
    hover: yr
  },
  axisInteraction: {
    click: yr,
    hover: yr
  },
  keyboardInteraction: yr,
  syncInteraction: {
    active: !1,
    index: null,
    dataKey: void 0,
    label: void 0,
    coordinate: void 0,
    sourceViewBox: void 0,
    graphicalItemId: void 0
  },
  tooltipItemPayloads: [],
  settings: {
    shared: void 0,
    trigger: "hover",
    axisId: 0,
    active: !1,
    defaultIndex: void 0
  }
}, nx = Je({
  name: "tooltip",
  initialState: iT,
  reducers: {
    addTooltipEntrySettings: {
      reducer(e, t) {
        e.tooltipItemPayloads.push(t.payload);
      },
      prepare: me()
    },
    replaceTooltipEntrySettings: {
      reducer(e, t) {
        var {
          prev: r,
          next: n
        } = t.payload, i = Pt(e).tooltipItemPayloads.indexOf(r);
        i > -1 && (e.tooltipItemPayloads[i] = n);
      },
      prepare: me()
    },
    removeTooltipEntrySettings: {
      reducer(e, t) {
        var r = Pt(e).tooltipItemPayloads.indexOf(t.payload);
        r > -1 && e.tooltipItemPayloads.splice(r, 1);
      },
      prepare: me()
    },
    setTooltipSettingsState(e, t) {
      e.settings = t.payload;
    },
    setActiveMouseOverItemIndex(e, t) {
      e.syncInteraction.active = !1, e.keyboardInteraction.active = !1, e.itemInteraction.hover.active = !0, e.itemInteraction.hover.index = t.payload.activeIndex, e.itemInteraction.hover.dataKey = t.payload.activeDataKey, e.itemInteraction.hover.graphicalItemId = t.payload.activeGraphicalItemId, e.itemInteraction.hover.coordinate = t.payload.activeCoordinate;
    },
    mouseLeaveChart(e) {
      e.itemInteraction.hover.active = !1, e.axisInteraction.hover.active = !1;
    },
    mouseLeaveItem(e) {
      e.itemInteraction.hover.active = !1;
    },
    setActiveClickItemIndex(e, t) {
      e.syncInteraction.active = !1, e.itemInteraction.click.active = !0, e.keyboardInteraction.active = !1, e.itemInteraction.click.index = t.payload.activeIndex, e.itemInteraction.click.dataKey = t.payload.activeDataKey, e.itemInteraction.click.graphicalItemId = t.payload.activeGraphicalItemId, e.itemInteraction.click.coordinate = t.payload.activeCoordinate;
    },
    setMouseOverAxisIndex(e, t) {
      e.syncInteraction.active = !1, e.axisInteraction.hover.active = !0, e.keyboardInteraction.active = !1, e.axisInteraction.hover.index = t.payload.activeIndex, e.axisInteraction.hover.dataKey = t.payload.activeDataKey, e.axisInteraction.hover.coordinate = t.payload.activeCoordinate;
    },
    setMouseClickAxisIndex(e, t) {
      e.syncInteraction.active = !1, e.keyboardInteraction.active = !1, e.axisInteraction.click.active = !0, e.axisInteraction.click.index = t.payload.activeIndex, e.axisInteraction.click.dataKey = t.payload.activeDataKey, e.axisInteraction.click.coordinate = t.payload.activeCoordinate;
    },
    setSyncInteraction(e, t) {
      e.syncInteraction = t.payload;
    },
    setKeyboardInteraction(e, t) {
      e.keyboardInteraction.active = t.payload.active, e.keyboardInteraction.index = t.payload.activeIndex, e.keyboardInteraction.coordinate = t.payload.activeCoordinate;
    }
  }
}), {
  addTooltipEntrySettings: aT,
  replaceTooltipEntrySettings: oT,
  removeTooltipEntrySettings: lT,
  setTooltipSettingsState: uT,
  setActiveMouseOverItemIndex: ix,
  mouseLeaveItem: sT,
  mouseLeaveChart: ax,
  setActiveClickItemIndex: cT,
  setMouseOverAxisIndex: ox,
  setMouseClickAxisIndex: fT,
  setSyncInteraction: Ls,
  setKeyboardInteraction: fo
} = nx.actions, dT = nx.reducer;
function Vh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function va(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vh(Object(r), !0).forEach(function(n) {
      vT(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function vT(e, t, r) {
  return (t = pT(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function pT(e) {
  var t = hT(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function hT(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function mT(e, t, r) {
  return t === "axis" ? r === "click" ? e.axisInteraction.click : e.axisInteraction.hover : r === "click" ? e.itemInteraction.click : e.itemInteraction.hover;
}
function yT(e) {
  return e.index != null;
}
var lx = (e, t, r, n) => {
  if (t == null)
    return yr;
  var i = mT(e, t, r);
  if (i == null)
    return yr;
  if (i.active)
    return i;
  if (e.keyboardInteraction.active)
    return e.keyboardInteraction;
  if (e.syncInteraction.active && e.syncInteraction.index != null)
    return e.syncInteraction;
  var a = e.settings.active === !0;
  if (yT(i)) {
    if (a)
      return va(va({}, i), {}, {
        active: !0
      });
  } else if (n != null)
    return {
      active: !0,
      coordinate: void 0,
      dataKey: void 0,
      index: n,
      graphicalItemId: void 0
    };
  return va(va({}, yr), {}, {
    coordinate: i.coordinate
  });
};
function gT(e) {
  if (typeof e == "number")
    return Number.isFinite(e) ? e : void 0;
  if (e instanceof Date) {
    var t = e.valueOf();
    return Number.isFinite(t) ? t : void 0;
  }
  var r = Number(e);
  return Number.isFinite(r) ? r : void 0;
}
function bT(e, t) {
  var r = gT(e), n = t[0], i = t[1];
  if (r === void 0)
    return !1;
  var a = Math.min(n, i), o = Math.max(n, i);
  return r >= a && r <= o;
}
function xT(e, t, r) {
  if (r == null || t == null)
    return !0;
  var n = le(e, t);
  return n == null || !zt(r) ? !0 : bT(n, r);
}
var If = (e, t, r, n) => {
  var i = e?.index;
  if (i == null)
    return null;
  var a = Number(i);
  if (!G(a))
    return i;
  var o = 0, l = 1 / 0;
  t.length > 0 && (l = t.length - 1);
  var u = Math.max(o, Math.min(a, l)), s = t[u];
  return s == null || xT(s, r, n) ? String(u) : null;
}, ux = (e, t, r, n, i, a, o) => {
  if (a != null) {
    var l = o[0], u = l?.getPosition(a);
    if (u != null)
      return u;
    var s = i?.[Number(a)];
    if (s)
      return r === "horizontal" ? {
        x: s.coordinate,
        y: (n.top + t) / 2
      } : {
        x: (n.left + e) / 2,
        y: s.coordinate
      };
  }
}, sx = (e, t, r, n) => {
  if (t === "axis")
    return e.tooltipItemPayloads;
  if (e.tooltipItemPayloads.length === 0)
    return [];
  var i;
  if (r === "hover" ? i = e.itemInteraction.hover.graphicalItemId : i = e.itemInteraction.click.graphicalItemId, e.syncInteraction.active && i == null)
    return e.tooltipItemPayloads;
  if (i == null && n != null) {
    var a = e.tooltipItemPayloads[0];
    return a != null ? [a] : [];
  }
  return e.tooltipItemPayloads.filter((o) => {
    var l;
    return ((l = o.settings) === null || l === void 0 ? void 0 : l.graphicalItemId) === i;
  });
}, cx = (e) => e.options.tooltipPayloadSearcher, zn = (e) => e.tooltip;
function Hh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Gh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hh(Object(r), !0).forEach(function(n) {
      wT(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function wT(e, t, r) {
  return (t = OT(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function OT(e) {
  var t = PT(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function PT(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ET(e) {
  if (typeof e == "string" || typeof e == "number")
    return e;
}
function AT(e) {
  if (typeof e == "string" || typeof e == "number" || typeof e == "boolean")
    return e;
}
function ST(e) {
  if (typeof e == "string" || typeof e == "number")
    return e;
  if (typeof e == "function")
    return (t) => e(t);
}
function Yh(e) {
  if (typeof e == "string")
    return e;
}
function _T(e) {
  if (!(e == null || typeof e != "object")) {
    var t = "name" in e ? ET(e.name) : void 0, r = "unit" in e ? AT(e.unit) : void 0, n = "dataKey" in e ? ST(e.dataKey) : void 0, i = "payload" in e ? e.payload : void 0, a = "color" in e ? Yh(e.color) : void 0, o = "fill" in e ? Yh(e.fill) : void 0;
    return {
      name: t,
      unit: r,
      dataKey: n,
      payload: i,
      color: a,
      fill: o
    };
  }
}
function jT(e, t) {
  return e ?? t;
}
var fx = (e, t, r, n, i, a, o) => {
  if (!(t == null || a == null)) {
    var {
      chartData: l,
      computedData: u,
      dataStartIndex: s,
      dataEndIndex: c
    } = r, f = [];
    return e.reduce((d, v) => {
      var p, {
        dataDefinedOnItem: m,
        settings: h
      } = v, y = jT(m, l), b = Array.isArray(y) ? Vg(y, s, c) : y, x = (p = h?.dataKey) !== null && p !== void 0 ? p : n, w = h?.nameKey, P;
      if (n && Array.isArray(b) && /*
       * findEntryInArray won't work for Scatter because Scatter provides an array of arrays
       * as tooltip payloads and findEntryInArray is not prepared to handle that.
       * Sad but also ScatterChart only allows 'item' tooltipEventType
       * and also this is only a problem if there are multiple Scatters and each has its own data array
       * so let's fix that some other time.
       */
      !Array.isArray(b[0]) && /*
       * If the tooltipEventType is 'axis', we should search for the dataKey in the sliced data
       * because thanks to allowDuplicatedCategory=false, the order of elements in the array
       * no longer matches the order of elements in the original data
       * and so we need to search by the active dataKey + label rather than by index.
       *
       * The same happens if multiple graphical items are present in the chart
       * and each of them has its own data array. Those arrays get concatenated
       * and again the tooltip index no longer matches the original data.
       *
       * On the other hand the tooltipEventType 'item' should always search by index
       * because we get the index from interacting over the individual elements
       * which is always accurate, irrespective of the allowDuplicatedCategory setting.
       */
      o === "axis" ? P = Hy(b, n, i) : P = a(b, t, u, w), Array.isArray(P))
        P.forEach((A) => {
          var _, C, T = _T(A), N = T?.name, j = T?.dataKey, I = T?.payload, $ = Gh(Gh({}, h), {}, {
            name: N,
            unit: T?.unit,
            // Preserve item-level color/fill from graphical items.
            color: (_ = T?.color) !== null && _ !== void 0 ? _ : h?.color,
            fill: (C = T?.fill) !== null && C !== void 0 ? C : h?.fill
          });
          d.push(Bv({
            tooltipEntrySettings: $,
            dataKey: j,
            payload: I,
            value: le(I, j),
            name: N == null ? void 0 : String(N)
          }));
        });
      else {
        var O;
        d.push(Bv({
          tooltipEntrySettings: h,
          dataKey: x,
          payload: P,
          // getValueByDataKey does not validate the output type
          value: le(P, x),
          // getValueByDataKey does not validate the output type
          name: (O = le(P, w)) !== null && O !== void 0 ? O : h?.name
        }));
      }
      return d;
    }, f);
  }
}, kf = S([Le, T0, kc], j0), IT = S([(e) => e.graphicalItems.cartesianItems, (e) => e.graphicalItems.polarItems], (e, t) => [...e, ...t]), kT = S([We, Mn], sf), Bn = S([IT, Le, kT], cf, {
  memoizeOptions: {
    resultEqualityCheck: Zo
  }
}), CT = S([Bn], (e) => e.filter(Yo)), TT = S([Bn], ff, {
  memoizeOptions: {
    resultEqualityCheck: Zo
  }
}), Fn = S([TT, ur], df), NT = S([CT, ur, Le], Hb), Cf = S([Fn, Le, Bn], pf), dx = S([Le], hf), DT = S([Le], (e) => e.allowDataOverflow), vx = S([dx, DT], _b), MT = S([Bn], (e) => e.filter(Yo)), $T = S([NT, MT, Mi, Bb], $0), RT = S([$T, ur, We, vx], R0), LT = S([Bn], D0), zT = S([Fn, Le, LT, il, We], gf, {
  memoizeOptions: {
    resultEqualityCheck: Xo
  }
}), BT = S([L0, We, Mn], Ln), FT = S([BT, We], F0), WT = S([z0, We, Mn], Ln), KT = S([WT, We], W0), qT = S([B0, We, Mn], Ln), UT = S([qT, We], K0), VT = S([FT, UT, KT], co), HT = S([Le, dx, vx, RT, zT, VT, ee, We], bf), Vi = S([Le, ee, Fn, Cf, Mi, We, HT], xf), GT = S([Vi, Le, kf], Of), YT = S([Le, Vi, GT, We], Ef), px = (e) => {
  var t = We(e), r = Mn(e), n = !1;
  return Ui(e, t, r, n);
}, hx = S([Le, px], Uo), XT = S([Le, kf, YT, hx], lf), mx = S([XT], $c), ZT = S([ee, Cf, Le, We], Z0), JT = S([ee, Cf, Le, We], V0), QT = (e, t, r, n, i, a, o, l) => {
  if (t) {
    var {
      type: u
    } = t, s = Tt(e, l);
    if (n) {
      var c = r === "scaleBand" && n.bandwidth ? n.bandwidth() / 2 : 2, f = u === "category" && n.bandwidth ? n.bandwidth() / c : 0;
      return f = l === "angleAxis" && i != null && i?.length >= 2 ? Be(i[0] - i[1]) * 2 * f : f, s && o ? o.map((d, v) => {
        var p = n.map(d);
        return G(p) ? {
          coordinate: p + f,
          value: d,
          index: v,
          offset: f
        } : null;
      }).filter(at) : n.domain().map((d, v) => {
        var p = n.map(d);
        return G(p) ? {
          coordinate: p + f,
          // @ts-expect-error can't use Date as an index
          value: a ? a[d] : d,
          index: v,
          offset: f
        } : null;
      }).filter(at);
    }
  }
}, dr = S([ee, Le, kf, mx, px, ZT, JT, We], QT), Tf = S([Q0, ex, nT], (e, t, r) => tx(r.shared, e, t)), yx = (e) => e.tooltip.settings.trigger, Nf = (e) => e.tooltip.settings.defaultIndex, Hi = S([zn, Tf, yx, Nf], lx), Or = S([Hi, Fn, qi, Vi], If), gx = S([dr, Or], rx), Df = S([Hi], (e) => {
  if (e)
    return e.dataKey;
}), bx = S([Hi], (e) => {
  if (e)
    return e.graphicalItemId;
}), xx = S([zn, Tf, yx, Nf], sx), eN = S([or, lr, ee, $e, dr, Nf, xx], ux), tN = S([Hi, eN], (e, t) => e != null && e.coordinate ? e.coordinate : t), rN = S([Hi], (e) => {
  var t;
  return (t = e?.active) !== null && t !== void 0 ? t : !1;
}), nN = S([xx, Or, ur, qi, gx, cx, Tf], fx), iN = S([nN], (e) => {
  if (e != null) {
    var t = e.map((r) => r.payload).filter((r) => r != null);
    return Array.from(new Set(t));
  }
});
function Xh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Zh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Xh(Object(r), !0).forEach(function(n) {
      aN(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function aN(e, t, r) {
  return (t = oN(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function oN(e) {
  var t = lN(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function lN(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var uN = () => B(Le), sN = () => {
  var e = uN(), t = B(dr), r = B(mx);
  return wr(!e || !r ? void 0 : Zh(Zh({}, e), {}, {
    scale: r
  }), t);
};
function Jh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function dn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Jh(Object(r), !0).forEach(function(n) {
      cN(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Jh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function cN(e, t, r) {
  return (t = fN(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function fN(e) {
  var t = dN(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function dN(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var vN = (e, t, r, n) => {
  var i = t.find((a) => a && a.index === r);
  if (i) {
    if (e === "horizontal")
      return {
        x: i.coordinate,
        y: n.relativeY
      };
    if (e === "vertical")
      return {
        x: n.relativeX,
        y: i.coordinate
      };
  }
  return {
    x: 0,
    y: 0
  };
}, pN = (e, t, r, n) => {
  var i = t.find((s) => s && s.index === r);
  if (i) {
    if (e === "centric") {
      var a = i.coordinate, {
        radius: o
      } = n;
      return dn(dn(dn({}, n), Ie(n.cx, n.cy, o, a)), {}, {
        angle: a,
        radius: o
      });
    }
    var l = i.coordinate, {
      angle: u
    } = n;
    return dn(dn(dn({}, n), Ie(n.cx, n.cy, l, u)), {}, {
      angle: u,
      radius: l
    });
  }
  return {
    angle: 0,
    clockWise: !1,
    cx: 0,
    cy: 0,
    endAngle: 0,
    innerRadius: 0,
    outerRadius: 0,
    radius: 0,
    startAngle: 0,
    x: 0,
    y: 0
  };
};
function hN(e, t) {
  var {
    relativeX: r,
    relativeY: n
  } = e;
  return r >= t.left && r <= t.left + t.width && n >= t.top && n <= t.top + t.height;
}
var wx = (e, t, r, n, i) => {
  var a, o = (a = t?.length) !== null && a !== void 0 ? a : 0;
  if (o <= 1 || e == null)
    return 0;
  if (n === "angleAxis" && i != null && Math.abs(Math.abs(i[1] - i[0]) - 360) <= 1e-6)
    for (var l = 0; l < o; l++) {
      var u, s, c, f, d, v = l > 0 ? (u = r[l - 1]) === null || u === void 0 ? void 0 : u.coordinate : (s = r[o - 1]) === null || s === void 0 ? void 0 : s.coordinate, p = (c = r[l]) === null || c === void 0 ? void 0 : c.coordinate, m = l >= o - 1 ? (f = r[0]) === null || f === void 0 ? void 0 : f.coordinate : (d = r[l + 1]) === null || d === void 0 ? void 0 : d.coordinate, h = void 0;
      if (!(v == null || p == null || m == null))
        if (Be(p - v) !== Be(m - p)) {
          var y = [];
          if (Be(m - p) === Be(i[1] - i[0])) {
            h = m;
            var b = p + i[1] - i[0];
            y[0] = Math.min(b, (b + v) / 2), y[1] = Math.max(b, (b + v) / 2);
          } else {
            h = v;
            var x = m + i[1] - i[0];
            y[0] = Math.min(p, (x + p) / 2), y[1] = Math.max(p, (x + p) / 2);
          }
          var w = [Math.min(p, (h + p) / 2), Math.max(p, (h + p) / 2)];
          if (e > w[0] && e <= w[1] || e >= y[0] && e <= y[1]) {
            var P;
            return (P = r[l]) === null || P === void 0 ? void 0 : P.index;
          }
        } else {
          var O = Math.min(v, m), A = Math.max(v, m);
          if (e > (O + p) / 2 && e <= (A + p) / 2) {
            var _;
            return (_ = r[l]) === null || _ === void 0 ? void 0 : _.index;
          }
        }
    }
  else if (t)
    for (var C = 0; C < o; C++) {
      var T = t[C];
      if (T != null) {
        var N = t[C + 1], j = t[C - 1];
        if (C === 0 && N != null && e <= (T.coordinate + N.coordinate) / 2 || C === o - 1 && j != null && e > (T.coordinate + j.coordinate) / 2 || C > 0 && C < o - 1 && j != null && N != null && e > (T.coordinate + j.coordinate) / 2 && e <= (T.coordinate + N.coordinate) / 2)
          return T.index;
      }
    }
  return -1;
}, Ox = () => B(kc), Mf = (e, t) => t, Px = (e, t, r) => r, $f = (e, t, r, n) => n, mN = S(dr, (e) => _o(e, (t) => t.coordinate)), Rf = S([zn, Mf, Px, $f], lx), Lf = S([Rf, Fn, qi, Vi], If), yN = (e, t, r) => {
  if (t != null) {
    var n = zn(e);
    return t === "axis" ? r === "hover" ? n.axisInteraction.hover.dataKey : n.axisInteraction.click.dataKey : r === "hover" ? n.itemInteraction.hover.dataKey : n.itemInteraction.click.dataKey;
  }
}, Ex = S([zn, Mf, Px, $f], sx), vo = S([or, lr, ee, $e, dr, $f, Ex], ux), gN = S([Rf, vo], (e, t) => {
  var r;
  return (r = e.coordinate) !== null && r !== void 0 ? r : t;
}), Ax = S([dr, Lf], rx), bN = S([Ex, Lf, ur, qi, Ax, cx, Mf], fx), xN = S([Rf, Lf], (e, t) => ({
  isActive: e.active && t != null,
  activeIndex: t
})), wN = (e, t, r, n, i, a, o) => {
  if (!(!e || !r || !n || !i) && hN(e, o)) {
    var l = lA(e, t), u = wx(l, a, i, r, n), s = vN(t, i, u, e);
    return {
      activeIndex: String(u),
      activeCoordinate: s
    };
  }
}, ON = (e, t, r, n, i, a, o) => {
  if (!(!e || !n || !i || !a || !r)) {
    var l = Z_(e, r);
    if (l) {
      var u = uA(l, t), s = wx(u, o, a, n, i), c = pN(t, a, s, l);
      return {
        activeIndex: String(s),
        activeCoordinate: c
      };
    }
  }
}, PN = (e, t, r, n, i, a, o, l) => {
  if (!(!e || !t || !n || !i || !a))
    return t === "horizontal" || t === "vertical" ? wN(e, t, n, i, a, o, l) : ON(e, t, r, n, i, a, o);
}, EN = S((e) => e.zIndex.zIndexMap, (e, t) => t, (e, t, r) => r, (e, t, r) => {
  if (t != null) {
    var n = e[t];
    if (n != null)
      return r ? n.panoramaElement : n.element;
  }
}), AN = S((e) => e.zIndex.zIndexMap, (e) => {
  var t = Object.keys(e).map((n) => parseInt(n, 10)).concat(Object.values(_e)), r = Array.from(new Set(t));
  return r.sort((n, i) => n - i);
}, {
  memoizeOptions: {
    resultEqualityCheck: wj
  }
});
function Qh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function em(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Qh(Object(r), !0).forEach(function(n) {
      SN(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function SN(e, t, r) {
  return (t = _N(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function _N(e) {
  var t = jN(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function jN(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var IN = {}, kN = {
  zIndexMap: Object.values(_e).reduce((e, t) => em(em({}, e), {}, {
    [t]: {
      element: void 0,
      panoramaElement: void 0,
      consumers: 0
    }
  }), IN)
}, CN = new Set(Object.values(_e));
function TN(e) {
  return CN.has(e);
}
var Sx = Je({
  name: "zIndex",
  initialState: kN,
  reducers: {
    registerZIndexPortal: {
      reducer: (e, t) => {
        var {
          zIndex: r
        } = t.payload;
        e.zIndexMap[r] ? e.zIndexMap[r].consumers += 1 : e.zIndexMap[r] = {
          consumers: 1,
          element: void 0,
          panoramaElement: void 0
        };
      },
      prepare: me()
    },
    unregisterZIndexPortal: {
      reducer: (e, t) => {
        var {
          zIndex: r
        } = t.payload;
        e.zIndexMap[r] && (e.zIndexMap[r].consumers -= 1, e.zIndexMap[r].consumers <= 0 && !TN(r) && delete e.zIndexMap[r]);
      },
      prepare: me()
    },
    registerZIndexPortalElement: {
      reducer: (e, t) => {
        var {
          zIndex: r,
          element: n,
          isPanorama: i
        } = t.payload;
        e.zIndexMap[r] ? i ? e.zIndexMap[r].panoramaElement = n : e.zIndexMap[r].element = n : e.zIndexMap[r] = {
          consumers: 0,
          element: i ? void 0 : n,
          panoramaElement: i ? n : void 0
        };
      },
      prepare: me()
    },
    unregisterZIndexPortalElement: {
      reducer: (e, t) => {
        var {
          zIndex: r
        } = t.payload;
        e.zIndexMap[r] && (t.payload.isPanorama ? e.zIndexMap[r].panoramaElement = void 0 : e.zIndexMap[r].element = void 0);
      },
      prepare: me()
    }
  }
}), {
  registerZIndexPortal: NN,
  unregisterZIndexPortal: DN,
  registerZIndexPortalElement: MN,
  unregisterZIndexPortalElement: $N
} = Sx.actions, RN = Sx.reducer;
function nt(e) {
  var {
    zIndex: t,
    children: r
  } = e, n = zA(), i = n && t !== void 0 && t !== 0, a = Fe(), o = de();
  Ve(() => i ? (o(NN({
    zIndex: t
  })), () => {
    o(DN({
      zIndex: t
    }));
  }) : ar, [o, t, i]);
  var l = B((u) => EN(u, t, a));
  return i ? l ? /* @__PURE__ */ Qs(r, l) : null : r;
}
function zs() {
  return zs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, zs.apply(null, arguments);
}
function tm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function pa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? tm(Object(r), !0).forEach(function(n) {
      LN(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function LN(e, t, r) {
  return (t = zN(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function zN(e) {
  var t = BN(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function BN(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function FN(e) {
  var {
    cursor: t,
    cursorComp: r,
    cursorProps: n
  } = e;
  return /* @__PURE__ */ vt(t) ? /* @__PURE__ */ In(t, n) : /* @__PURE__ */ Py(r, n);
}
function WN(e) {
  var t, {
    coordinate: r,
    payload: n,
    index: i,
    offset: a,
    tooltipAxisBandSize: o,
    layout: l,
    cursor: u,
    tooltipEventType: s,
    chartName: c
  } = e, f = r, d = n, v = i;
  if (!u || !f || c !== "ScatterChart" && s !== "axis")
    return null;
  var p, m, h;
  if (c === "ScatterChart")
    p = f, m = d_, h = _e.cursorLine;
  else if (c === "BarChart")
    p = v_(l, f, a, o), m = xb, h = _e.cursorRectangle;
  else if (l === "radial" && Yy(f)) {
    var {
      cx: y,
      cy: b,
      radius: x,
      startAngle: w,
      endAngle: P
    } = Ob(f);
    p = {
      cx: y,
      cy: b,
      startAngle: w,
      endAngle: P,
      innerRadius: x,
      outerRadius: x
    }, m = Eb, h = _e.cursorLine;
  } else
    p = {
      points: tj(l, f, a)
    }, m = xn, h = _e.cursorLine;
  var O = typeof u == "object" && "className" in u ? u.className : void 0, A = pa(pa(pa(pa({
    stroke: "#ccc",
    pointerEvents: "none"
  }, a), p), Gr(u)), {}, {
    payload: d,
    payloadIndex: v,
    className: te("recharts-tooltip-cursor", O)
  });
  return /* @__PURE__ */ g.createElement(nt, {
    zIndex: (t = e.zIndex) !== null && t !== void 0 ? t : h
  }, /* @__PURE__ */ g.createElement(FN, {
    cursor: u,
    cursorComp: m,
    cursorProps: A
  }));
}
function KN(e) {
  var t = sN(), r = rb(), n = Sr(), i = Ox();
  return t == null || r == null || n == null || i == null ? null : /* @__PURE__ */ g.createElement(WN, zs({}, e, {
    offset: r,
    layout: n,
    tooltipAxisBandSize: t,
    chartName: i
  }));
}
var _x = /* @__PURE__ */ lt(null), qN = () => yt(_x), Wu = { exports: {} }, rm;
function UN() {
  return rm || (rm = 1, (function(e) {
    var t = Object.prototype.hasOwnProperty, r = "~";
    function n() {
    }
    Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (r = !1));
    function i(u, s, c) {
      this.fn = u, this.context = s, this.once = c || !1;
    }
    function a(u, s, c, f, d) {
      if (typeof c != "function")
        throw new TypeError("The listener must be a function");
      var v = new i(c, f || u, d), p = r ? r + s : s;
      return u._events[p] ? u._events[p].fn ? u._events[p] = [u._events[p], v] : u._events[p].push(v) : (u._events[p] = v, u._eventsCount++), u;
    }
    function o(u, s) {
      --u._eventsCount === 0 ? u._events = new n() : delete u._events[s];
    }
    function l() {
      this._events = new n(), this._eventsCount = 0;
    }
    l.prototype.eventNames = function() {
      var s = [], c, f;
      if (this._eventsCount === 0) return s;
      for (f in c = this._events)
        t.call(c, f) && s.push(r ? f.slice(1) : f);
      return Object.getOwnPropertySymbols ? s.concat(Object.getOwnPropertySymbols(c)) : s;
    }, l.prototype.listeners = function(s) {
      var c = r ? r + s : s, f = this._events[c];
      if (!f) return [];
      if (f.fn) return [f.fn];
      for (var d = 0, v = f.length, p = new Array(v); d < v; d++)
        p[d] = f[d].fn;
      return p;
    }, l.prototype.listenerCount = function(s) {
      var c = r ? r + s : s, f = this._events[c];
      return f ? f.fn ? 1 : f.length : 0;
    }, l.prototype.emit = function(s, c, f, d, v, p) {
      var m = r ? r + s : s;
      if (!this._events[m]) return !1;
      var h = this._events[m], y = arguments.length, b, x;
      if (h.fn) {
        switch (h.once && this.removeListener(s, h.fn, void 0, !0), y) {
          case 1:
            return h.fn.call(h.context), !0;
          case 2:
            return h.fn.call(h.context, c), !0;
          case 3:
            return h.fn.call(h.context, c, f), !0;
          case 4:
            return h.fn.call(h.context, c, f, d), !0;
          case 5:
            return h.fn.call(h.context, c, f, d, v), !0;
          case 6:
            return h.fn.call(h.context, c, f, d, v, p), !0;
        }
        for (x = 1, b = new Array(y - 1); x < y; x++)
          b[x - 1] = arguments[x];
        h.fn.apply(h.context, b);
      } else {
        var w = h.length, P;
        for (x = 0; x < w; x++)
          switch (h[x].once && this.removeListener(s, h[x].fn, void 0, !0), y) {
            case 1:
              h[x].fn.call(h[x].context);
              break;
            case 2:
              h[x].fn.call(h[x].context, c);
              break;
            case 3:
              h[x].fn.call(h[x].context, c, f);
              break;
            case 4:
              h[x].fn.call(h[x].context, c, f, d);
              break;
            default:
              if (!b) for (P = 1, b = new Array(y - 1); P < y; P++)
                b[P - 1] = arguments[P];
              h[x].fn.apply(h[x].context, b);
          }
      }
      return !0;
    }, l.prototype.on = function(s, c, f) {
      return a(this, s, c, f, !1);
    }, l.prototype.once = function(s, c, f) {
      return a(this, s, c, f, !0);
    }, l.prototype.removeListener = function(s, c, f, d) {
      var v = r ? r + s : s;
      if (!this._events[v]) return this;
      if (!c)
        return o(this, v), this;
      var p = this._events[v];
      if (p.fn)
        p.fn === c && (!d || p.once) && (!f || p.context === f) && o(this, v);
      else {
        for (var m = 0, h = [], y = p.length; m < y; m++)
          (p[m].fn !== c || d && !p[m].once || f && p[m].context !== f) && h.push(p[m]);
        h.length ? this._events[v] = h.length === 1 ? h[0] : h : o(this, v);
      }
      return this;
    }, l.prototype.removeAllListeners = function(s) {
      var c;
      return s ? (c = r ? r + s : s, this._events[c] && o(this, c)) : (this._events = new n(), this._eventsCount = 0), this;
    }, l.prototype.off = l.prototype.removeListener, l.prototype.addListener = l.prototype.on, l.prefixed = r, l.EventEmitter = l, e.exports = l;
  })(Wu)), Wu.exports;
}
var VN = UN();
const HN = /* @__PURE__ */ an(VN);
var bi = new HN(), Bs = "recharts.syncEvent.tooltip", nm = "recharts.syncEvent.brush", ul = (e, t) => {
  if (t && Array.isArray(e)) {
    var r = Number.parseInt(t, 10);
    if (!It(r))
      return e[r];
  }
}, GN = {
  chartName: "",
  tooltipPayloadSearcher: () => {
  },
  eventEmitter: void 0,
  defaultTooltipEventType: "axis"
}, jx = Je({
  name: "options",
  initialState: GN,
  reducers: {
    createEventEmitter: (e) => {
      e.eventEmitter == null && (e.eventEmitter = /* @__PURE__ */ Symbol("rechartsEventEmitter"));
    }
  }
}), YN = jx.reducer, {
  createEventEmitter: XN
} = jx.actions;
function ZN(e) {
  return e.tooltip.syncInteraction;
}
var JN = {
  chartData: void 0,
  computedData: void 0,
  dataStartIndex: 0,
  dataEndIndex: 0
}, Ix = Je({
  name: "chartData",
  initialState: JN,
  reducers: {
    setChartData(e, t) {
      if (e.chartData = t.payload, t.payload == null) {
        e.dataStartIndex = 0, e.dataEndIndex = 0;
        return;
      }
      t.payload.length > 0 && e.dataEndIndex !== t.payload.length - 1 && (e.dataEndIndex = t.payload.length - 1);
    },
    setComputedData(e, t) {
      e.computedData = t.payload;
    },
    setDataStartEndIndexes(e, t) {
      var {
        startIndex: r,
        endIndex: n
      } = t.payload;
      r != null && (e.dataStartIndex = r), n != null && (e.dataEndIndex = n);
    }
  }
}), {
  setChartData: im,
  setDataStartEndIndexes: QN,
  setComputedData: IF
} = Ix.actions, eD = Ix.reducer, tD = ["x", "y"];
function am(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function vn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? am(Object(r), !0).forEach(function(n) {
      rD(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : am(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function rD(e, t, r) {
  return (t = nD(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function nD(e) {
  var t = iD(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function iD(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function aD(e, t) {
  if (e == null) return {};
  var r, n, i = oD(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function oD(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function lD() {
  var e = B(Cc), t = B(Tc), r = de(), n = B(Fb), i = B(dr), a = Sr(), o = Bo(), l = B((u) => u.rootProps.className);
  fe(() => {
    if (e == null)
      return ar;
    var u = (s, c, f) => {
      if (t !== f && e === s) {
        if (n === "index") {
          var d;
          if (o && c !== null && c !== void 0 && (d = c.payload) !== null && d !== void 0 && d.coordinate && c.payload.sourceViewBox) {
            var v = c.payload.coordinate, {
              x: p,
              y: m
            } = v, h = aD(v, tD), {
              x: y,
              y: b,
              width: x,
              height: w
            } = c.payload.sourceViewBox, P = vn(vn({}, h), {}, {
              x: o.x + (x ? (p - y) / x : 0) * o.width,
              y: o.y + (w ? (m - b) / w : 0) * o.height
            });
            r(vn(vn({}, c), {}, {
              payload: vn(vn({}, c.payload), {}, {
                coordinate: P
              })
            }));
          } else
            r(c);
          return;
        }
        if (i != null) {
          var O;
          if (typeof n == "function") {
            var A = {
              activeTooltipIndex: c.payload.index == null ? void 0 : Number(c.payload.index),
              isTooltipActive: c.payload.active,
              activeIndex: c.payload.index == null ? void 0 : Number(c.payload.index),
              activeLabel: c.payload.label,
              activeDataKey: c.payload.dataKey,
              activeCoordinate: c.payload.coordinate
            }, _ = n(i, A);
            O = i[_];
          } else n === "value" && (O = i.find((V) => String(V.value) === c.payload.label));
          var {
            coordinate: C
          } = c.payload;
          if (O == null || c.payload.active === !1 || C == null || o == null) {
            r(Ls({
              active: !1,
              coordinate: void 0,
              dataKey: void 0,
              index: null,
              label: void 0,
              sourceViewBox: void 0,
              graphicalItemId: void 0
            }));
            return;
          }
          var {
            x: T,
            y: N
          } = C, j = Math.min(T, o.x + o.width), I = Math.min(N, o.y + o.height), $ = {
            x: a === "horizontal" ? O.coordinate : j,
            y: a === "horizontal" ? I : O.coordinate
          }, K = Ls({
            active: c.payload.active,
            coordinate: $,
            dataKey: c.payload.dataKey,
            index: String(O.index),
            label: c.payload.label,
            sourceViewBox: c.payload.sourceViewBox,
            graphicalItemId: c.payload.graphicalItemId
          });
          r(K);
        }
      }
    };
    return bi.on(Bs, u), () => {
      bi.off(Bs, u);
    };
  }, [l, r, t, e, n, i, a, o]);
}
function uD() {
  var e = B(Cc), t = B(Tc), r = de();
  fe(() => {
    if (e == null)
      return ar;
    var n = (i, a, o) => {
      t !== o && e === i && r(QN(a));
    };
    return bi.on(nm, n), () => {
      bi.off(nm, n);
    };
  }, [r, t, e]);
}
function sD() {
  var e = de();
  fe(() => {
    e(XN());
  }, [e]), lD(), uD();
}
function cD(e, t, r, n, i, a) {
  var o = B((p) => yN(p, e, t)), l = B(bx), u = B(Tc), s = B(Cc), c = B(Fb), f = B(ZN), d = f?.active, v = Bo();
  fe(() => {
    if (!d && s != null && u != null) {
      var p = Ls({
        active: a,
        coordinate: r,
        dataKey: o,
        index: i,
        label: typeof n == "number" ? String(n) : n,
        sourceViewBox: v,
        graphicalItemId: l
      });
      bi.emit(Bs, s, p, u);
    }
  }, [d, r, o, l, i, n, u, s, c, a, v]);
}
function om(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function lm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? om(Object(r), !0).forEach(function(n) {
      fD(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : om(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function fD(e, t, r) {
  return (t = dD(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function dD(e) {
  var t = vD(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function vD(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function pD(e) {
  return e.dataKey;
}
function hD(e, t) {
  return /* @__PURE__ */ g.isValidElement(e) ? /* @__PURE__ */ g.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ g.createElement(e, t) : /* @__PURE__ */ g.createElement(FS, t);
}
var um = [], mD = {
  allowEscapeViewBox: {
    x: !1,
    y: !1
  },
  animationDuration: 400,
  animationEasing: "ease",
  axisId: 0,
  contentStyle: {},
  cursor: !0,
  filterNull: !0,
  includeHidden: !1,
  isAnimationActive: "auto",
  itemSorter: "name",
  itemStyle: {},
  labelStyle: {},
  offset: 10,
  reverseDirection: {
    x: !1,
    y: !1
  },
  separator: " : ",
  trigger: "hover",
  useTranslate3d: !1,
  wrapperStyle: {}
};
function Gi(e) {
  var t, r, n = je(e, mD), {
    active: i,
    allowEscapeViewBox: a,
    animationDuration: o,
    animationEasing: l,
    content: u,
    filterNull: s,
    isAnimationActive: c,
    offset: f,
    payloadUniqBy: d,
    position: v,
    reverseDirection: p,
    useTranslate3d: m,
    wrapperStyle: h,
    cursor: y,
    shared: b,
    trigger: x,
    defaultIndex: w,
    portal: P,
    axisId: O
  } = n, A = de(), _ = typeof w == "number" ? String(w) : w;
  fe(() => {
    A(uT({
      shared: b,
      trigger: x,
      axisId: O,
      active: i,
      defaultIndex: _
    }));
  }, [A, b, x, O, i, _]);
  var C = Bo(), T = hb(), N = rT(b), {
    activeIndex: j,
    isActive: I
  } = (t = B((we) => xN(we, N, x, _))) !== null && t !== void 0 ? t : {}, $ = B((we) => bN(we, N, x, _)), K = B((we) => Ax(we, N, x, _)), V = B((we) => gN(we, N, x, _)), U = $, X = qN(), q = (r = i ?? I) !== null && r !== void 0 ? r : !1, [Z, k] = dg([U, q]), W = N === "axis" ? K : void 0;
  cD(N, x, V, W, j, q);
  var Y = P ?? X;
  if (Y == null || C == null || N == null)
    return null;
  var J = U ?? um;
  q || (J = um), s && J.length && (J = og(J.filter((we) => we.value != null && (we.hide !== !0 || n.includeHidden)), d, pD));
  var He = J.length > 0, _t = lm(lm({}, n), {}, {
    payload: J,
    label: W,
    active: q,
    activeIndex: j,
    coordinate: V,
    accessibilityLayer: T
  }), ve = /* @__PURE__ */ g.createElement(JS, {
    allowEscapeViewBox: a,
    animationDuration: o,
    animationEasing: l,
    isAnimationActive: c,
    active: q,
    coordinate: V,
    hasPayload: He,
    offset: f,
    position: v,
    reverseDirection: p,
    useTranslate3d: m,
    viewBox: C,
    wrapperStyle: h,
    lastBoundingBox: Z,
    innerRef: k,
    hasPortalFromProps: !!P
  }, hD(u, _t));
  return /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ Qs(ve, Y), q && /* @__PURE__ */ g.createElement(KN, {
    cursor: y,
    tooltipEventType: N,
    coordinate: V,
    payload: J,
    index: j
  }));
}
var Wn = (e) => null;
Wn.displayName = "Cell";
function yD(e, t, r) {
  return (t = gD(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function gD(e) {
  var t = bD(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function bD(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
class xD {
  constructor(t) {
    yD(this, "cache", /* @__PURE__ */ new Map()), this.maxSize = t;
  }
  get(t) {
    var r = this.cache.get(t);
    return r !== void 0 && (this.cache.delete(t), this.cache.set(t, r)), r;
  }
  set(t, r) {
    if (this.cache.has(t))
      this.cache.delete(t);
    else if (this.cache.size >= this.maxSize) {
      var n = this.cache.keys().next().value;
      n != null && this.cache.delete(n);
    }
    this.cache.set(t, r);
  }
  clear() {
    this.cache.clear();
  }
  size() {
    return this.cache.size;
  }
}
function sm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function wD(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? sm(Object(r), !0).forEach(function(n) {
      OD(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function OD(e, t, r) {
  return (t = PD(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function PD(e) {
  var t = ED(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function ED(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var AD = {
  cacheSize: 2e3,
  enableCache: !0
}, kx = wD({}, AD), cm = new xD(kx.cacheSize), SD = {
  position: "absolute",
  top: "-20000px",
  left: 0,
  padding: 0,
  margin: 0,
  border: "none",
  whiteSpace: "pre"
}, fm = "recharts_measurement_span";
function _D(e, t) {
  var r = t.fontSize || "", n = t.fontFamily || "", i = t.fontWeight || "", a = t.fontStyle || "", o = t.letterSpacing || "", l = t.textTransform || "";
  return "".concat(e, "|").concat(r, "|").concat(n, "|").concat(i, "|").concat(a, "|").concat(o, "|").concat(l);
}
var dm = (e, t) => {
  try {
    var r = document.getElementById(fm);
    r || (r = document.createElement("span"), r.setAttribute("id", fm), r.setAttribute("aria-hidden", "true"), document.body.appendChild(r)), Object.assign(r.style, SD, t), r.textContent = "".concat(e);
    var n = r.getBoundingClientRect();
    return {
      width: n.width,
      height: n.height
    };
  } catch {
    return {
      width: 0,
      height: 0
    };
  }
}, ai = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (t == null || Di.isSsr)
    return {
      width: 0,
      height: 0
    };
  if (!kx.enableCache)
    return dm(t, r);
  var n = _D(t, r), i = cm.get(n);
  if (i)
    return i;
  var a = dm(t, r);
  return cm.set(n, a), a;
}, Cx;
function jD(e, t, r) {
  return (t = ID(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ID(e) {
  var t = kD(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function kD(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var vm = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, pm = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, CD = /^(px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q)$/, TD = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, ND = {
  cm: 96 / 2.54,
  mm: 96 / 25.4,
  pt: 96 / 72,
  pc: 96 / 6,
  in: 96,
  Q: 96 / (2.54 * 40),
  px: 1
}, DD = ["cm", "mm", "pt", "pc", "in", "Q", "px"];
function MD(e) {
  return DD.includes(e);
}
var yn = "NaN";
function $D(e, t) {
  return e * ND[t];
}
class Ue {
  static parse(t) {
    var r, [, n, i] = (r = TD.exec(t)) !== null && r !== void 0 ? r : [];
    return n == null ? Ue.NaN : new Ue(parseFloat(n), i ?? "");
  }
  constructor(t, r) {
    this.num = t, this.unit = r, this.num = t, this.unit = r, It(t) && (this.unit = ""), r !== "" && !CD.test(r) && (this.num = NaN, this.unit = ""), MD(r) && (this.num = $D(t, r), this.unit = "px");
  }
  add(t) {
    return this.unit !== t.unit ? new Ue(NaN, "") : new Ue(this.num + t.num, this.unit);
  }
  subtract(t) {
    return this.unit !== t.unit ? new Ue(NaN, "") : new Ue(this.num - t.num, this.unit);
  }
  multiply(t) {
    return this.unit !== "" && t.unit !== "" && this.unit !== t.unit ? new Ue(NaN, "") : new Ue(this.num * t.num, this.unit || t.unit);
  }
  divide(t) {
    return this.unit !== "" && t.unit !== "" && this.unit !== t.unit ? new Ue(NaN, "") : new Ue(this.num / t.num, this.unit || t.unit);
  }
  toString() {
    return "".concat(this.num).concat(this.unit);
  }
  isNaN() {
    return It(this.num);
  }
}
Cx = Ue;
jD(Ue, "NaN", new Cx(NaN, ""));
function Tx(e) {
  if (e == null || e.includes(yn))
    return yn;
  for (var t = e; t.includes("*") || t.includes("/"); ) {
    var r, [, n, i, a] = (r = vm.exec(t)) !== null && r !== void 0 ? r : [], o = Ue.parse(n ?? ""), l = Ue.parse(a ?? ""), u = i === "*" ? o.multiply(l) : o.divide(l);
    if (u.isNaN())
      return yn;
    t = t.replace(vm, u.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var s, [, c, f, d] = (s = pm.exec(t)) !== null && s !== void 0 ? s : [], v = Ue.parse(c ?? ""), p = Ue.parse(d ?? ""), m = f === "+" ? v.add(p) : v.subtract(p);
    if (m.isNaN())
      return yn;
    t = t.replace(pm, m.toString());
  }
  return t;
}
var hm = /\(([^()]*)\)/;
function RD(e) {
  for (var t = e, r; (r = hm.exec(t)) != null; ) {
    var [, n] = r;
    t = t.replace(hm, Tx(n));
  }
  return t;
}
function LD(e) {
  var t = e.replace(/\s+/g, "");
  return t = RD(t), t = Tx(t), t;
}
function zD(e) {
  try {
    return LD(e);
  } catch {
    return yn;
  }
}
function Ku(e) {
  var t = zD(e.slice(5, -1));
  return t === yn ? "" : t;
}
var BD = ["x", "y", "lineHeight", "capHeight", "fill", "scaleToFit", "textAnchor", "verticalAnchor"], FD = ["dx", "dy", "angle", "className", "breakAll"];
function Fs() {
  return Fs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Fs.apply(null, arguments);
}
function mm(e, t) {
  if (e == null) return {};
  var r, n, i = WD(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function WD(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var Nx = /[ \f\n\r\t\v\u2028\u2029]+/, Dx = (e) => {
  var {
    children: t,
    breakAll: r,
    style: n
  } = e;
  try {
    var i = [];
    ge(t) || (r ? i = t.toString().split("") : i = t.toString().split(Nx));
    var a = i.map((l) => ({
      word: l,
      width: ai(l, n).width
    })), o = r ? 0 : ai(" ", n).width;
    return {
      wordsWithComputedWidth: a,
      spaceWidth: o
    };
  } catch {
    return null;
  }
};
function Mx(e) {
  return e === "start" || e === "middle" || e === "end" || e === "inherit";
}
function KD(e) {
  return ge(e) || typeof e == "string" || typeof e == "number" || typeof e == "boolean";
}
var $x = (e, t, r, n) => e.reduce((i, a) => {
  var {
    word: o,
    width: l
  } = a, u = i[i.length - 1];
  if (u && l != null && (t == null || n || u.width + l + r < Number(t)))
    u.words.push(o), u.width += l + r;
  else {
    var s = {
      words: [o],
      width: l
    };
    i.push(s);
  }
  return i;
}, []), Rx = (e) => e.reduce((t, r) => t.width > r.width ? t : r), qD = "…", ym = (e, t, r, n, i, a, o, l) => {
  var u = e.slice(0, t), s = Dx({
    breakAll: r,
    style: n,
    children: u + qD
  });
  if (!s)
    return [!1, []];
  var c = $x(s.wordsWithComputedWidth, a, o, l), f = c.length > i || Rx(c).width > Number(a);
  return [f, c];
}, UD = (e, t, r, n, i) => {
  var {
    maxLines: a,
    children: o,
    style: l,
    breakAll: u
  } = e, s = L(a), c = String(o), f = $x(t, n, r, i);
  if (!s || i)
    return f;
  var d = f.length > a || Rx(f).width > Number(n);
  if (!d)
    return f;
  for (var v = 0, p = c.length - 1, m = 0, h; v <= p && m <= c.length - 1; ) {
    var y = Math.floor((v + p) / 2), b = y - 1, [x, w] = ym(c, b, u, l, a, n, r, i), [P] = ym(c, y, u, l, a, n, r, i);
    if (!x && !P && (v = y + 1), x && P && (p = y - 1), !x && P) {
      h = w;
      break;
    }
    m++;
  }
  return h || f;
}, gm = (e) => {
  var t = ge(e) ? [] : e.toString().split(Nx);
  return [{
    words: t,
    width: void 0
  }];
}, VD = (e) => {
  var {
    width: t,
    scaleToFit: r,
    children: n,
    style: i,
    breakAll: a,
    maxLines: o
  } = e;
  if ((t || r) && !Di.isSsr) {
    var l, u, s = Dx({
      breakAll: a,
      children: n,
      style: i
    });
    if (s) {
      var {
        wordsWithComputedWidth: c,
        spaceWidth: f
      } = s;
      l = c, u = f;
    } else
      return gm(n);
    return UD({
      breakAll: a,
      children: n,
      maxLines: o,
      style: i
    }, l, u, t, !!r);
  }
  return gm(n);
}, Lx = "#808080", HD = {
  angle: 0,
  breakAll: !1,
  // Magic number from d3
  capHeight: "0.71em",
  fill: Lx,
  lineHeight: "1em",
  scaleToFit: !1,
  textAnchor: "start",
  // Maintain compat with existing charts / default SVG behavior
  verticalAnchor: "end",
  x: 0,
  y: 0
}, sl = /* @__PURE__ */ Ce((e, t) => {
  var r = je(e, HD), {
    x: n,
    y: i,
    lineHeight: a,
    capHeight: o,
    fill: l,
    scaleToFit: u,
    textAnchor: s,
    verticalAnchor: c
  } = r, f = mm(r, BD), d = gt(() => VD({
    breakAll: f.breakAll,
    children: f.children,
    maxLines: f.maxLines,
    scaleToFit: u,
    style: f.style,
    width: f.width
  }), [f.breakAll, f.children, f.maxLines, u, f.style, f.width]), {
    dx: v,
    dy: p,
    angle: m,
    className: h,
    breakAll: y
  } = f, b = mm(f, FD);
  if (!Ft(n) || !Ft(i) || d.length === 0)
    return null;
  var x = Number(n) + (L(v) ? v : 0), w = Number(i) + (L(p) ? p : 0);
  if (!G(x) || !G(w))
    return null;
  var P;
  switch (c) {
    case "start":
      P = Ku("calc(".concat(o, ")"));
      break;
    case "middle":
      P = Ku("calc(".concat((d.length - 1) / 2, " * -").concat(a, " + (").concat(o, " / 2))"));
      break;
    default:
      P = Ku("calc(".concat(d.length - 1, " * -").concat(a, ")"));
      break;
  }
  var O = [], A = d[0];
  if (u && A != null) {
    var _ = A.width, {
      width: C
    } = f;
    O.push("scale(".concat(L(C) && L(_) ? C / _ : 1, ")"));
  }
  return m && O.push("rotate(".concat(m, ", ").concat(x, ", ").concat(w, ")")), O.length && (b.transform = O.join(" ")), /* @__PURE__ */ g.createElement("text", Fs({}, Ze(b), {
    ref: t,
    x,
    y: w,
    className: te("recharts-text", h),
    textAnchor: s,
    fill: l.includes("url") ? Lx : l
  }), d.map((T, N) => {
    var j = T.words.join(y ? "" : " ");
    return (
      // duplicate words will cause duplicate keys which is why we add the array index here
      /* @__PURE__ */ g.createElement("tspan", {
        x,
        dy: N === 0 ? P : a,
        key: "".concat(j, "-").concat(N)
      }, j)
    );
  }));
});
sl.displayName = "Text";
function bm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Mt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? bm(Object(r), !0).forEach(function(n) {
      GD(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : bm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function GD(e, t, r) {
  return (t = YD(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function YD(e) {
  var t = XD(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function XD(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ZD = (e) => {
  var {
    viewBox: t,
    position: r,
    offset: n = 0,
    parentViewBox: i
  } = e, {
    x: a,
    y: o,
    height: l,
    upperWidth: u,
    lowerWidth: s
  } = xc(t), c = a, f = a + (u - s) / 2, d = (c + f) / 2, v = (u + s) / 2, p = c + u / 2, m = l >= 0 ? 1 : -1, h = m * n, y = m > 0 ? "end" : "start", b = m > 0 ? "start" : "end", x = u >= 0 ? 1 : -1, w = x * n, P = x > 0 ? "end" : "start", O = x > 0 ? "start" : "end", A = i;
  if (r === "top") {
    var _ = {
      x: c + u / 2,
      y: o - h,
      horizontalAnchor: "middle",
      verticalAnchor: y
    };
    return A && (_.height = Math.max(o - A.y, 0), _.width = u), _;
  }
  if (r === "bottom") {
    var C = {
      x: f + s / 2,
      y: o + l + h,
      horizontalAnchor: "middle",
      verticalAnchor: b
    };
    return A && (C.height = Math.max(A.y + A.height - (o + l), 0), C.width = s), C;
  }
  if (r === "left") {
    var T = {
      x: d - w,
      y: o + l / 2,
      horizontalAnchor: P,
      verticalAnchor: "middle"
    };
    return A && (T.width = Math.max(T.x - A.x, 0), T.height = l), T;
  }
  if (r === "right") {
    var N = {
      x: d + v + w,
      y: o + l / 2,
      horizontalAnchor: O,
      verticalAnchor: "middle"
    };
    return A && (N.width = Math.max(A.x + A.width - N.x, 0), N.height = l), N;
  }
  var j = A ? {
    width: v,
    height: l
  } : {};
  return r === "insideLeft" ? Mt({
    x: d + w,
    y: o + l / 2,
    horizontalAnchor: O,
    verticalAnchor: "middle"
  }, j) : r === "insideRight" ? Mt({
    x: d + v - w,
    y: o + l / 2,
    horizontalAnchor: P,
    verticalAnchor: "middle"
  }, j) : r === "insideTop" ? Mt({
    x: c + u / 2,
    y: o + h,
    horizontalAnchor: "middle",
    verticalAnchor: b
  }, j) : r === "insideBottom" ? Mt({
    x: f + s / 2,
    y: o + l - h,
    horizontalAnchor: "middle",
    verticalAnchor: y
  }, j) : r === "insideTopLeft" ? Mt({
    x: c + w,
    y: o + h,
    horizontalAnchor: O,
    verticalAnchor: b
  }, j) : r === "insideTopRight" ? Mt({
    x: c + u - w,
    y: o + h,
    horizontalAnchor: P,
    verticalAnchor: b
  }, j) : r === "insideBottomLeft" ? Mt({
    x: f + w,
    y: o + l - h,
    horizontalAnchor: O,
    verticalAnchor: y
  }, j) : r === "insideBottomRight" ? Mt({
    x: f + s - w,
    y: o + l - h,
    horizontalAnchor: P,
    verticalAnchor: y
  }, j) : r && typeof r == "object" && (L(r.x) || Zr(r.x)) && (L(r.y) || Zr(r.y)) ? Mt({
    x: a + Xe(r.x, v),
    y: o + Xe(r.y, l),
    horizontalAnchor: "end",
    verticalAnchor: "end"
  }, j) : Mt({
    x: p,
    y: o + l / 2,
    horizontalAnchor: "middle",
    verticalAnchor: "middle"
  }, j);
}, JD = ["labelRef"], QD = ["content"];
function xm(e, t) {
  if (e == null) return {};
  var r, n, i = eM(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function eM(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function wm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ii(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? wm(Object(r), !0).forEach(function(n) {
      tM(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function tM(e, t, r) {
  return (t = rM(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function rM(e) {
  var t = nM(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function nM(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Yt() {
  return Yt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Yt.apply(null, arguments);
}
var zx = /* @__PURE__ */ lt(null), iM = (e) => {
  var {
    x: t,
    y: r,
    upperWidth: n,
    lowerWidth: i,
    width: a,
    height: o,
    children: l
  } = e, u = gt(() => ({
    x: t,
    y: r,
    upperWidth: n,
    lowerWidth: i,
    width: a,
    height: o
  }), [t, r, n, i, a, o]);
  return /* @__PURE__ */ g.createElement(zx.Provider, {
    value: u
  }, l);
}, Bx = () => {
  var e = yt(zx), t = Bo();
  return e || (t ? xc(t) : void 0);
}, aM = /* @__PURE__ */ lt(null), oM = () => {
  var e = yt(aM), t = B(Vb);
  return e || t;
}, lM = (e) => {
  var {
    value: t,
    formatter: r
  } = e, n = ge(e.children) ? t : e.children;
  return typeof r == "function" ? r(n) : n;
}, zf = (e) => e != null && typeof e == "function", uM = (e, t) => {
  var r = Be(t - e), n = Math.min(Math.abs(t - e), 360);
  return r * n;
}, sM = (e, t, r, n, i) => {
  var {
    offset: a,
    className: o
  } = e, {
    cx: l,
    cy: u,
    innerRadius: s,
    outerRadius: c,
    startAngle: f,
    endAngle: d,
    clockWise: v
  } = i, p = (s + c) / 2, m = uM(f, d), h = m >= 0 ? 1 : -1, y, b;
  switch (t) {
    case "insideStart":
      y = f + h * a, b = v;
      break;
    case "insideEnd":
      y = d - h * a, b = !v;
      break;
    case "end":
      y = d + h * a, b = v;
      break;
    default:
      throw new Error("Unsupported position ".concat(t));
  }
  b = m <= 0 ? b : !b;
  var x = Ie(l, u, p, y), w = Ie(l, u, p, y + (b ? 1 : -1) * 359), P = "M".concat(x.x, ",").concat(x.y, `
    A`).concat(p, ",").concat(p, ",0,1,").concat(b ? 0 : 1, `,
    `).concat(w.x, ",").concat(w.y), O = ge(e.id) ? oi("recharts-radial-line-") : e.id;
  return /* @__PURE__ */ g.createElement("text", Yt({}, n, {
    dominantBaseline: "central",
    className: te("recharts-radial-bar-label", o)
  }), /* @__PURE__ */ g.createElement("defs", null, /* @__PURE__ */ g.createElement("path", {
    id: O,
    d: P
  })), /* @__PURE__ */ g.createElement("textPath", {
    xlinkHref: "#".concat(O)
  }, r));
}, cM = (e, t, r) => {
  var {
    cx: n,
    cy: i,
    innerRadius: a,
    outerRadius: o,
    startAngle: l,
    endAngle: u
  } = e, s = (l + u) / 2;
  if (r === "outside") {
    var {
      x: c,
      y: f
    } = Ie(n, i, o + t, s);
    return {
      x: c,
      y: f,
      textAnchor: c >= n ? "start" : "end",
      verticalAnchor: "middle"
    };
  }
  if (r === "center")
    return {
      x: n,
      y: i,
      textAnchor: "middle",
      verticalAnchor: "middle"
    };
  if (r === "centerTop")
    return {
      x: n,
      y: i,
      textAnchor: "middle",
      verticalAnchor: "start"
    };
  if (r === "centerBottom")
    return {
      x: n,
      y: i,
      textAnchor: "middle",
      verticalAnchor: "end"
    };
  var d = (a + o) / 2, {
    x: v,
    y: p
  } = Ie(n, i, d, s);
  return {
    x: v,
    y: p,
    textAnchor: "middle",
    verticalAnchor: "middle"
  };
}, Oa = (e) => e != null && "cx" in e && L(e.cx), fM = {
  angle: 0,
  offset: 5,
  zIndex: _e.label,
  position: "middle",
  textBreakAll: !1
};
function dM(e) {
  if (!Oa(e))
    return e;
  var {
    cx: t,
    cy: r,
    outerRadius: n
  } = e, i = n * 2;
  return {
    x: t - n,
    y: r - n,
    width: i,
    upperWidth: i,
    lowerWidth: i,
    height: i
  };
}
function mr(e) {
  var t = je(e, fM), {
    viewBox: r,
    parentViewBox: n,
    position: i,
    value: a,
    children: o,
    content: l,
    className: u = "",
    textBreakAll: s,
    labelRef: c
  } = t, f = oM(), d = Bx(), v = i === "center" ? d : f ?? d, p, m, h;
  r == null ? p = v : Oa(r) ? p = r : p = xc(r);
  var y = dM(p);
  if (!p || ge(a) && ge(o) && !/* @__PURE__ */ vt(l) && typeof l != "function")
    return null;
  var b = ii(ii({}, t), {}, {
    viewBox: p
  });
  if (/* @__PURE__ */ vt(l)) {
    var {
      labelRef: x
    } = b, w = xm(b, JD);
    return /* @__PURE__ */ In(l, w);
  }
  if (typeof l == "function") {
    var {
      content: P
    } = b, O = xm(b, QD);
    if (m = /* @__PURE__ */ Py(l, O), /* @__PURE__ */ vt(m))
      return m;
  } else
    m = lM(t);
  var A = Ze(t);
  if (Oa(p)) {
    if (i === "insideStart" || i === "insideEnd" || i === "end")
      return sM(t, i, m, A, p);
    h = cM(p, t.offset, t.position);
  } else {
    if (!y)
      return null;
    var _ = ZD({
      viewBox: y,
      position: i,
      offset: t.offset,
      parentViewBox: Oa(n) ? void 0 : n
    });
    h = ii(ii({
      x: _.x,
      y: _.y,
      textAnchor: _.horizontalAnchor,
      verticalAnchor: _.verticalAnchor
    }, _.width !== void 0 ? {
      width: _.width
    } : {}), _.height !== void 0 ? {
      height: _.height
    } : {});
  }
  return /* @__PURE__ */ g.createElement(nt, {
    zIndex: t.zIndex
  }, /* @__PURE__ */ g.createElement(sl, Yt({
    ref: c,
    className: te("recharts-label", u)
  }, A, h, {
    /*
     * textAnchor is decided by default based on the `position`
     * but we allow overriding via props for precise control.
     */
    textAnchor: Mx(A.textAnchor) ? A.textAnchor : h.textAnchor,
    breakAll: s
  }), m));
}
mr.displayName = "Label";
var vM = (e, t, r) => {
  if (!e)
    return null;
  var n = {
    viewBox: t,
    labelRef: r
  };
  return e === !0 ? /* @__PURE__ */ g.createElement(mr, Yt({
    key: "label-implicit"
  }, n)) : Ft(e) ? /* @__PURE__ */ g.createElement(mr, Yt({
    key: "label-implicit",
    value: e
  }, n)) : /* @__PURE__ */ vt(e) ? e.type === mr ? /* @__PURE__ */ In(e, ii({
    key: "label-implicit"
  }, n)) : /* @__PURE__ */ g.createElement(mr, Yt({
    key: "label-implicit",
    content: e
  }, n)) : zf(e) ? /* @__PURE__ */ g.createElement(mr, Yt({
    key: "label-implicit",
    content: e
  }, n)) : e && typeof e == "object" ? /* @__PURE__ */ g.createElement(mr, Yt({}, e, {
    key: "label-implicit"
  }, n)) : null;
};
function pM(e) {
  var {
    label: t,
    labelRef: r
  } = e, n = Bx();
  return vM(t, n, r) || null;
}
var hM = ["valueAccessor"], mM = ["dataKey", "clockWise", "id", "textBreakAll", "zIndex"];
function po() {
  return po = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, po.apply(null, arguments);
}
function Om(e, t) {
  if (e == null) return {};
  var r, n, i = yM(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function yM(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var gM = (e) => {
  var t = Array.isArray(e.value) ? e.value[e.value.length - 1] : e.value;
  if (KD(t))
    return t;
}, Fx = /* @__PURE__ */ lt(void 0), Bf = Fx.Provider, Wx = /* @__PURE__ */ lt(void 0), bM = Wx.Provider;
function xM() {
  return yt(Fx);
}
function wM() {
  return yt(Wx);
}
function Pa(e) {
  var {
    valueAccessor: t = gM
  } = e, r = Om(e, hM), {
    dataKey: n,
    clockWise: i,
    id: a,
    textBreakAll: o,
    zIndex: l
  } = r, u = Om(r, mM), s = xM(), c = wM(), f = s || c;
  return !f || !f.length ? null : /* @__PURE__ */ g.createElement(nt, {
    zIndex: l ?? _e.label
  }, /* @__PURE__ */ g.createElement(Oe, {
    className: "recharts-label-list"
  }, f.map((d, v) => {
    var p, m = ge(n) ? t(d, v) : le(d.payload, n), h = ge(a) ? {} : {
      id: "".concat(a, "-").concat(v)
    };
    return /* @__PURE__ */ g.createElement(mr, po({
      key: "label-".concat(v)
    }, Ze(d), u, h, {
      /*
       * Prefer to use the explicit fill from LabelList props.
       * Only in an absence of that, fall back to the fill of the entry.
       * The entry fill can be quite difficult to see especially in Bar, Pie, RadialBar in inside positions.
       * On the other hand it's quite convenient in Scatter, Line, or when the position is outside the Bar, Pie filled shapes.
       */
      fill: (p = r.fill) !== null && p !== void 0 ? p : d.fill,
      parentViewBox: d.parentViewBox,
      value: m,
      textBreakAll: o,
      viewBox: d.viewBox,
      index: v,
      zIndex: 0
    }));
  })));
}
Pa.displayName = "LabelList";
function cl(e) {
  var {
    label: t
  } = e;
  return t ? t === !0 ? /* @__PURE__ */ g.createElement(Pa, {
    key: "labelList-implicit"
  }) : /* @__PURE__ */ g.isValidElement(t) || zf(t) ? /* @__PURE__ */ g.createElement(Pa, {
    key: "labelList-implicit",
    content: t
  }) : typeof t == "object" ? /* @__PURE__ */ g.createElement(Pa, po({
    key: "labelList-implicit"
  }, t, {
    type: String(t.type)
  })) : null : null;
}
function Ws() {
  return Ws = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ws.apply(null, arguments);
}
var Kx = (e) => {
  var {
    cx: t,
    cy: r,
    r: n,
    className: i
  } = e, a = te("recharts-dot", i);
  return L(t) && L(r) && L(n) ? /* @__PURE__ */ g.createElement("circle", Ws({}, tt(e), sc(e), {
    className: a,
    cx: t,
    cy: r,
    r: n
  })) : null;
}, qx = (e) => e.graphicalItems.polarItems, OM = S([Pe, $i], sf), fl = S([qx, Se, OM], cf), PM = S([fl], ff), dl = S([PM, qo], df), EM = S([dl, Se, fl], pf);
S([dl, Se, fl], (e, t, r) => r.length > 0 ? e.flatMap((n) => r.flatMap((i) => {
  var a, o = le(n, (a = t.dataKey) !== null && a !== void 0 ? a : i.dataKey);
  return {
    value: o,
    errorDomain: []
    // polar charts do not have error bars
  };
})).filter(Boolean) : t?.dataKey != null ? e.map((n) => ({
  value: le(n, t.dataKey),
  errorDomain: []
})) : e.map((n) => ({
  value: n,
  errorDomain: []
})));
var Pm = () => {
}, AM = S([dl, Se, fl, il, Pe], gf), SM = S([Se, mf, yf, Pm, AM, Pm, ee, Pe], bf), Ux = S([Se, ee, dl, EM, Mi, Pe, SM], xf), _M = S([Ux, Rn, Ir], Of), jM = S([Se, Ux, _M, Pe], Ef);
S([Ir, jM], Gb);
var IM = {
  radiusAxis: {},
  angleAxis: {}
}, Vx = Je({
  name: "polarAxis",
  initialState: IM,
  reducers: {
    addRadiusAxis(e, t) {
      e.radiusAxis[t.payload.id] = t.payload;
    },
    removeRadiusAxis(e, t) {
      delete e.radiusAxis[t.payload.id];
    },
    addAngleAxis(e, t) {
      e.angleAxis[t.payload.id] = t.payload;
    },
    removeAngleAxis(e, t) {
      delete e.angleAxis[t.payload.id];
    }
  }
}), {
  addRadiusAxis: kF,
  removeRadiusAxis: CF,
  addAngleAxis: TF,
  removeAngleAxis: NF
} = Vx.actions, kM = Vx.reducer;
function Hx(e) {
  return e && typeof e == "object" && "className" in e && typeof e.className == "string" ? e.className : "";
}
function Em(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Am(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Em(Object(r), !0).forEach(function(n) {
      CM(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Em(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function CM(e, t, r) {
  return (t = TM(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function TM(e) {
  var t = NM(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function NM(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var DM = (e, t) => t, Ff = S([qx, DM], (e, t) => e.filter((r) => r.type === "pie").find((r) => r.id === t)), MM = [], Wf = (e, t, r) => r?.length === 0 ? MM : r, Gx = S([qo, Ff, Wf], (e, t, r) => {
  var {
    chartData: n
  } = e;
  if (t != null) {
    var i;
    if (t?.data != null && t.data.length > 0 ? i = t.data : i = n, (!i || !i.length) && r != null && (i = r.map((a) => Am(Am({}, t.presentationProps), a.props))), i != null)
      return i;
  }
}), $M = S([Gx, Ff, Wf], (e, t, r) => {
  if (!(e == null || t == null))
    return e.map((n, i) => {
      var a, o = le(n, t.nameKey, t.name), l;
      return r != null && (a = r[i]) !== null && a !== void 0 && (a = a.props) !== null && a !== void 0 && a.fill ? l = r[i].props.fill : typeof n == "object" && n != null && "fill" in n ? l = n.fill : l = t.fill, {
        value: Ar(o, t.dataKey),
        color: l,
        // @ts-expect-error Legend payload.payload says it wants objects but our data can be unknown
        payload: n,
        type: t.legendType
      };
    });
}), RM = S([Gx, Ff, Wf, $e], (e, t, r, n) => {
  if (!(t == null || e == null))
    return W$({
      offset: n,
      pieSettings: t,
      displayedData: e,
      cells: r
    });
}), ha = { exports: {} }, se = {};
var Sm;
function LM() {
  if (Sm) return se;
  Sm = 1;
  var e = 60103, t = 60106, r = 60107, n = 60108, i = 60114, a = 60109, o = 60110, l = 60112, u = 60113, s = 60120, c = 60115, f = 60116, d = 60121, v = 60122, p = 60117, m = 60129, h = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var y = Symbol.for;
    e = y("react.element"), t = y("react.portal"), r = y("react.fragment"), n = y("react.strict_mode"), i = y("react.profiler"), a = y("react.provider"), o = y("react.context"), l = y("react.forward_ref"), u = y("react.suspense"), s = y("react.suspense_list"), c = y("react.memo"), f = y("react.lazy"), d = y("react.block"), v = y("react.server.block"), p = y("react.fundamental"), m = y("react.debug_trace_mode"), h = y("react.legacy_hidden");
  }
  function b(I) {
    if (typeof I == "object" && I !== null) {
      var $ = I.$$typeof;
      switch ($) {
        case e:
          switch (I = I.type, I) {
            case r:
            case i:
            case n:
            case u:
            case s:
              return I;
            default:
              switch (I = I && I.$$typeof, I) {
                case o:
                case l:
                case f:
                case c:
                case a:
                  return I;
                default:
                  return $;
              }
          }
        case t:
          return $;
      }
    }
  }
  var x = a, w = e, P = l, O = r, A = f, _ = c, C = t, T = i, N = n, j = u;
  return se.ContextConsumer = o, se.ContextProvider = x, se.Element = w, se.ForwardRef = P, se.Fragment = O, se.Lazy = A, se.Memo = _, se.Portal = C, se.Profiler = T, se.StrictMode = N, se.Suspense = j, se.isAsyncMode = function() {
    return !1;
  }, se.isConcurrentMode = function() {
    return !1;
  }, se.isContextConsumer = function(I) {
    return b(I) === o;
  }, se.isContextProvider = function(I) {
    return b(I) === a;
  }, se.isElement = function(I) {
    return typeof I == "object" && I !== null && I.$$typeof === e;
  }, se.isForwardRef = function(I) {
    return b(I) === l;
  }, se.isFragment = function(I) {
    return b(I) === r;
  }, se.isLazy = function(I) {
    return b(I) === f;
  }, se.isMemo = function(I) {
    return b(I) === c;
  }, se.isPortal = function(I) {
    return b(I) === t;
  }, se.isProfiler = function(I) {
    return b(I) === i;
  }, se.isStrictMode = function(I) {
    return b(I) === n;
  }, se.isSuspense = function(I) {
    return b(I) === u;
  }, se.isValidElementType = function(I) {
    return typeof I == "string" || typeof I == "function" || I === r || I === i || I === m || I === n || I === u || I === s || I === h || typeof I == "object" && I !== null && (I.$$typeof === f || I.$$typeof === c || I.$$typeof === a || I.$$typeof === o || I.$$typeof === l || I.$$typeof === p || I.$$typeof === d || I[0] === v);
  }, se.typeOf = b, se;
}
var ce = {};
var _m;
function zM() {
  return _m || (_m = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = 60103, t = 60106, r = 60107, n = 60108, i = 60114, a = 60109, o = 60110, l = 60112, u = 60113, s = 60120, c = 60115, f = 60116, d = 60121, v = 60122, p = 60117, m = 60129, h = 60131;
    if (typeof Symbol == "function" && Symbol.for) {
      var y = Symbol.for;
      e = y("react.element"), t = y("react.portal"), r = y("react.fragment"), n = y("react.strict_mode"), i = y("react.profiler"), a = y("react.provider"), o = y("react.context"), l = y("react.forward_ref"), u = y("react.suspense"), s = y("react.suspense_list"), c = y("react.memo"), f = y("react.lazy"), d = y("react.block"), v = y("react.server.block"), p = y("react.fundamental"), y("react.scope"), y("react.opaque.id"), m = y("react.debug_trace_mode"), y("react.offscreen"), h = y("react.legacy_hidden");
    }
    var b = !1;
    function x(M) {
      return !!(typeof M == "string" || typeof M == "function" || M === r || M === i || M === m || M === n || M === u || M === s || M === h || b || typeof M == "object" && M !== null && (M.$$typeof === f || M.$$typeof === c || M.$$typeof === a || M.$$typeof === o || M.$$typeof === l || M.$$typeof === p || M.$$typeof === d || M[0] === v));
    }
    function w(M) {
      if (typeof M == "object" && M !== null) {
        var D = M.$$typeof;
        switch (D) {
          case e:
            var Te = M.type;
            switch (Te) {
              case r:
              case i:
              case n:
              case u:
              case s:
                return Te;
              default:
                var ue = Te && Te.$$typeof;
                switch (ue) {
                  case o:
                  case l:
                  case f:
                  case c:
                  case a:
                    return ue;
                  default:
                    return D;
                }
            }
          case t:
            return D;
        }
      }
    }
    var P = o, O = a, A = e, _ = l, C = r, T = f, N = c, j = t, I = i, $ = n, K = u, V = !1, U = !1;
    function X(M) {
      return V || (V = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function q(M) {
      return U || (U = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Z(M) {
      return w(M) === o;
    }
    function k(M) {
      return w(M) === a;
    }
    function W(M) {
      return typeof M == "object" && M !== null && M.$$typeof === e;
    }
    function Y(M) {
      return w(M) === l;
    }
    function J(M) {
      return w(M) === r;
    }
    function He(M) {
      return w(M) === f;
    }
    function _t(M) {
      return w(M) === c;
    }
    function ve(M) {
      return w(M) === t;
    }
    function we(M) {
      return w(M) === i;
    }
    function z(M) {
      return w(M) === n;
    }
    function R(M) {
      return w(M) === u;
    }
    ce.ContextConsumer = P, ce.ContextProvider = O, ce.Element = A, ce.ForwardRef = _, ce.Fragment = C, ce.Lazy = T, ce.Memo = N, ce.Portal = j, ce.Profiler = I, ce.StrictMode = $, ce.Suspense = K, ce.isAsyncMode = X, ce.isConcurrentMode = q, ce.isContextConsumer = Z, ce.isContextProvider = k, ce.isElement = W, ce.isForwardRef = Y, ce.isFragment = J, ce.isLazy = He, ce.isMemo = _t, ce.isPortal = ve, ce.isProfiler = we, ce.isStrictMode = z, ce.isSuspense = R, ce.isValidElementType = x, ce.typeOf = w;
  })()), ce;
}
var jm;
function BM() {
  return jm || (jm = 1, process.env.NODE_ENV === "production" ? ha.exports = LM() : ha.exports = zM()), ha.exports;
}
var FM = BM(), Im = (e) => typeof e == "string" ? e : e ? e.displayName || e.name || "Component" : "", km = null, qu = null, Yx = (e) => {
  if (e === km && Array.isArray(qu))
    return qu;
  var t = [];
  return Zw.forEach(e, (r) => {
    ge(r) || (FM.isFragment(r) ? t = t.concat(Yx(r.props.children)) : t.push(r));
  }), qu = t, km = e, t;
};
function Kf(e, t) {
  var r = [], n = [];
  return Array.isArray(t) ? n = t.map((i) => Im(i)) : n = [Im(t)], Yx(e).forEach((i) => {
    var a = Xr(i, "type.displayName") || Xr(i, "type.name");
    a && n.indexOf(a) !== -1 && r.push(i);
  }), r;
}
var qf = (e) => e && typeof e == "object" && "clipDot" in e ? !!e.clipDot : !0, Uu = {}, Cm;
function WM() {
  return Cm || (Cm = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      if (typeof r != "object" || r == null)
        return !1;
      if (Object.getPrototypeOf(r) === null)
        return !0;
      if (Object.prototype.toString.call(r) !== "[object Object]") {
        const i = r[Symbol.toStringTag];
        return i == null || !Object.getOwnPropertyDescriptor(r, Symbol.toStringTag)?.writable ? !1 : r.toString() === `[object ${i}]`;
      }
      let n = r;
      for (; Object.getPrototypeOf(n) !== null; )
        n = Object.getPrototypeOf(n);
      return Object.getPrototypeOf(r) === n;
    }
    e.isPlainObject = t;
  })(Uu)), Uu;
}
var Vu, Tm;
function KM() {
  return Tm || (Tm = 1, Vu = WM().isPlainObject), Vu;
}
var qM = /* @__PURE__ */ KM();
const UM = /* @__PURE__ */ an(qM);
var Nm, Dm, Mm, $m, Rm;
function Lm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function zm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Lm(Object(r), !0).forEach(function(n) {
      VM(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Lm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function VM(e, t, r) {
  return (t = HM(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function HM(e) {
  var t = GM(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function GM(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ho() {
  return ho = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ho.apply(null, arguments);
}
function Qn(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var Bm = (e, t, r, n, i) => {
  var a = r - n, o;
  return o = Ae(Nm || (Nm = Qn(["M ", ",", ""])), e, t), o += Ae(Dm || (Dm = Qn(["L ", ",", ""])), e + r, t), o += Ae(Mm || (Mm = Qn(["L ", ",", ""])), e + r - a / 2, t + i), o += Ae($m || ($m = Qn(["L ", ",", ""])), e + r - a / 2 - n, t + i), o += Ae(Rm || (Rm = Qn(["L ", ",", " Z"])), e, t), o;
}, YM = {
  x: 0,
  y: 0,
  upperWidth: 0,
  lowerWidth: 0,
  height: 0,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, XM = (e) => {
  var t = je(e, YM), {
    x: r,
    y: n,
    upperWidth: i,
    lowerWidth: a,
    height: o,
    className: l
  } = t, {
    animationEasing: u,
    animationDuration: s,
    animationBegin: c,
    isUpdateAnimationActive: f
  } = t, d = H(null), [v, p] = re(-1), m = H(i), h = H(a), y = H(o), b = H(r), x = H(n), w = Tn(e, "trapezoid-");
  if (fe(() => {
    if (d.current && d.current.getTotalLength)
      try {
        var $ = d.current.getTotalLength();
        $ && p($);
      } catch {
      }
  }, []), r !== +r || n !== +n || i !== +i || a !== +a || o !== +o || i === 0 && a === 0 || o === 0)
    return null;
  var P = te("recharts-trapezoid", l);
  if (!f)
    return /* @__PURE__ */ g.createElement("g", null, /* @__PURE__ */ g.createElement("path", ho({}, Ze(t), {
      className: P,
      d: Bm(r, n, i, a, o)
    })));
  var O = m.current, A = h.current, _ = y.current, C = b.current, T = x.current, N = "0px ".concat(v === -1 ? 1 : v, "px"), j = "".concat(v, "px ").concat(v, "px"), I = mb(["strokeDasharray"], s, u);
  return /* @__PURE__ */ g.createElement(Cn, {
    animationId: w,
    key: w,
    canBegin: v > 0,
    duration: s,
    easing: u,
    isActive: f,
    begin: c
  }, ($) => {
    var K = oe(O, i, $), V = oe(A, a, $), U = oe(_, o, $), X = oe(C, r, $), q = oe(T, n, $);
    d.current && (m.current = K, h.current = V, y.current = U, b.current = X, x.current = q);
    var Z = $ > 0 ? {
      transition: I,
      strokeDasharray: j
    } : {
      strokeDasharray: N
    };
    return /* @__PURE__ */ g.createElement("path", ho({}, Ze(t), {
      className: P,
      d: Bm(X, q, K, V, U),
      ref: d,
      style: zm(zm({}, Z), t.style)
    }));
  });
}, ZM = ["option", "shapeType", "activeClassName", "inActiveClassName"];
function JM(e, t) {
  if (e == null) return {};
  var r, n, i = QM(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function QM(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function Fm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function mo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Fm(Object(r), !0).forEach(function(n) {
      e$(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function e$(e, t, r) {
  return (t = t$(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function t$(e) {
  var t = r$(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function r$(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function n$(e, t) {
  return mo(mo({}, t), e);
}
function i$(e, t) {
  return e === "symbols";
}
function Wm(e) {
  var {
    shapeType: t,
    elementProps: r
  } = e;
  switch (t) {
    case "rectangle":
      return /* @__PURE__ */ g.createElement(xb, r);
    case "trapezoid":
      return /* @__PURE__ */ g.createElement(XM, r);
    case "sector":
      return /* @__PURE__ */ g.createElement(Eb, r);
    case "symbols":
      if (i$(t))
        return /* @__PURE__ */ g.createElement(uc, r);
      break;
    case "curve":
      return /* @__PURE__ */ g.createElement(xn, r);
    default:
      return null;
  }
}
function a$(e) {
  return /* @__PURE__ */ vt(e) ? e.props : e;
}
function Uf(e) {
  var {
    option: t,
    shapeType: r,
    activeClassName: n = "recharts-active-shape",
    inActiveClassName: i = "recharts-shape"
  } = e, a = JM(e, ZM), o;
  if (/* @__PURE__ */ vt(t))
    o = /* @__PURE__ */ In(t, mo(mo({}, a), a$(t)));
  else if (typeof t == "function")
    o = t(a, a.index);
  else if (UM(t) && typeof t != "boolean") {
    var l = n$(t, a);
    o = /* @__PURE__ */ g.createElement(Wm, {
      shapeType: r,
      elementProps: l
    });
  } else {
    var u = a;
    o = /* @__PURE__ */ g.createElement(Wm, {
      shapeType: r,
      elementProps: u
    });
  }
  return a.isActive ? /* @__PURE__ */ g.createElement(Oe, {
    className: n
  }, o) : /* @__PURE__ */ g.createElement(Oe, {
    className: i
  }, o);
}
var Vf = (e, t, r) => {
  var n = de();
  return (i, a) => (o) => {
    e?.(i, a, o), n(ix({
      activeIndex: String(a),
      activeDataKey: t,
      activeCoordinate: i.tooltipPosition,
      activeGraphicalItemId: r
    }));
  };
}, Hf = (e) => {
  var t = de();
  return (r, n) => (i) => {
    e?.(r, n, i), t(sT());
  };
}, Gf = (e, t, r) => {
  var n = de();
  return (i, a) => (o) => {
    e?.(i, a, o), n(cT({
      activeIndex: String(a),
      activeDataKey: t,
      activeCoordinate: i.tooltipPosition,
      activeGraphicalItemId: r
    }));
  };
};
function vl(e) {
  var {
    tooltipEntrySettings: t
  } = e, r = de(), n = Fe(), i = H(null);
  return Ve(() => {
    n || (i.current === null ? r(aT(t)) : i.current !== t && r(oT({
      prev: i.current,
      next: t
    })), i.current = t);
  }, [t, r, n]), Ve(() => () => {
    i.current && (r(lT(i.current)), i.current = null);
  }, [r]), null;
}
function Yf(e) {
  var {
    legendPayload: t
  } = e, r = de(), n = Fe(), i = H(null);
  return Ve(() => {
    n || (i.current === null ? r(fb(t)) : i.current !== t && r(db({
      prev: i.current,
      next: t
    })), i.current = t);
  }, [r, n, t]), Ve(() => () => {
    i.current && (r(vb(i.current)), i.current = null);
  }, [r]), null;
}
function o$(e) {
  var {
    legendPayload: t
  } = e, r = de(), n = B(ee), i = H(null);
  return Ve(() => {
    n !== "centric" && n !== "radial" || (i.current === null ? r(fb(t)) : i.current !== t && r(db({
      prev: i.current,
      next: t
    })), i.current = t);
  }, [r, n, t]), Ve(() => () => {
    i.current && (r(vb(i.current)), i.current = null);
  }, [r]), null;
}
var Hu, l$ = () => {
  var [e] = g.useState(() => oi("uid-"));
  return e;
}, u$ = (Hu = g.useId) !== null && Hu !== void 0 ? Hu : l$;
function s$(e, t) {
  var r = u$();
  return t || (e ? "".concat(e, "-").concat(r) : r);
}
var c$ = /* @__PURE__ */ lt(void 0), pl = (e) => {
  var {
    id: t,
    type: r,
    children: n
  } = e, i = s$("recharts-".concat(r), t);
  return /* @__PURE__ */ g.createElement(c$.Provider, {
    value: i
  }, n(i));
}, f$ = {
  cartesianItems: [],
  polarItems: []
}, Xx = Je({
  name: "graphicalItems",
  initialState: f$,
  reducers: {
    addCartesianGraphicalItem: {
      reducer(e, t) {
        e.cartesianItems.push(t.payload);
      },
      prepare: me()
    },
    replaceCartesianGraphicalItem: {
      reducer(e, t) {
        var {
          prev: r,
          next: n
        } = t.payload, i = Pt(e).cartesianItems.indexOf(r);
        i > -1 && (e.cartesianItems[i] = n);
      },
      prepare: me()
    },
    removeCartesianGraphicalItem: {
      reducer(e, t) {
        var r = Pt(e).cartesianItems.indexOf(t.payload);
        r > -1 && e.cartesianItems.splice(r, 1);
      },
      prepare: me()
    },
    addPolarGraphicalItem: {
      reducer(e, t) {
        e.polarItems.push(t.payload);
      },
      prepare: me()
    },
    removePolarGraphicalItem: {
      reducer(e, t) {
        var r = Pt(e).polarItems.indexOf(t.payload);
        r > -1 && e.polarItems.splice(r, 1);
      },
      prepare: me()
    },
    replacePolarGraphicalItem: {
      reducer(e, t) {
        var {
          prev: r,
          next: n
        } = t.payload, i = Pt(e).polarItems.indexOf(r);
        i > -1 && (e.polarItems[i] = n);
      },
      prepare: me()
    }
  }
}), {
  addCartesianGraphicalItem: d$,
  replaceCartesianGraphicalItem: v$,
  removeCartesianGraphicalItem: p$,
  addPolarGraphicalItem: h$,
  removePolarGraphicalItem: m$,
  replacePolarGraphicalItem: y$
} = Xx.actions, g$ = Xx.reducer, b$ = (e) => {
  var t = de(), r = H(null);
  return Ve(() => {
    r.current === null ? t(d$(e)) : r.current !== e && t(v$({
      prev: r.current,
      next: e
    })), r.current = e;
  }, [t, e]), Ve(() => () => {
    r.current && (t(p$(r.current)), r.current = null);
  }, [t]), null;
}, Xf = /* @__PURE__ */ Po(b$), x$ = (e) => {
  var t = de(), r = H(null);
  return Ve(() => {
    r.current === null ? t(h$(e)) : r.current !== e && t(y$({
      prev: r.current,
      next: e
    })), r.current = e;
  }, [t, e]), Ve(() => () => {
    r.current && (t(m$(r.current)), r.current = null);
  }, [t]), null;
}, w$ = /* @__PURE__ */ Po(x$), O$ = ["key"], P$ = ["onMouseEnter", "onClick", "onMouseLeave"], E$ = ["id"], A$ = ["id"];
function Pr() {
  return Pr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Pr.apply(null, arguments);
}
function hl(e, t) {
  if (e == null) return {};
  var r, n, i = S$(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function S$(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function Km(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function be(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Km(Object(r), !0).forEach(function(n) {
      _$(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Km(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function _$(e, t, r) {
  return (t = j$(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function j$(e) {
  var t = I$(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function I$(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function k$(e) {
  var t = gt(() => Kf(e.children, Wn), [e.children]), r = B((n) => $M(n, e.id, t));
  return r == null ? null : /* @__PURE__ */ g.createElement(o$, {
    legendPayload: r
  });
}
function C$(e) {
  if (!(e == null || typeof e == "boolean" || typeof e == "function")) {
    if (/* @__PURE__ */ g.isValidElement(e)) {
      var t, r = (t = e.props) === null || t === void 0 ? void 0 : t.fill;
      return typeof r == "string" ? r : void 0;
    }
    var {
      fill: n
    } = e;
    return typeof n == "string" ? n : void 0;
  }
}
var T$ = /* @__PURE__ */ g.memo((e) => {
  var {
    dataKey: t,
    nameKey: r,
    sectors: n,
    stroke: i,
    strokeWidth: a,
    fill: o,
    name: l,
    hide: u,
    tooltipType: s,
    id: c,
    activeShape: f
  } = e, d = C$(f), v = n.map((m) => {
    var h = m.tooltipPayload;
    return d == null || h == null ? h : h.map((y) => be(be({}, y), {}, {
      color: d,
      fill: d
    }));
  }), p = {
    dataDefinedOnItem: v,
    getPosition: (m) => {
      var h;
      return (h = n[Number(m)]) === null || h === void 0 ? void 0 : h.tooltipPosition;
    },
    settings: {
      stroke: i,
      strokeWidth: a,
      fill: o,
      dataKey: t,
      nameKey: r,
      name: Ar(l, t),
      hide: u,
      type: s,
      color: o,
      unit: "",
      // why doesn't Pie support unit?
      graphicalItemId: c
    }
  };
  return /* @__PURE__ */ g.createElement(vl, {
    tooltipEntrySettings: p
  });
}), N$ = (e, t) => e > t ? "start" : e < t ? "end" : "middle", D$ = (e, t, r) => Xe(typeof t == "function" ? t(e) : t, r, r * 0.8), M$ = (e, t, r) => {
  var {
    top: n,
    left: i,
    width: a,
    height: o
  } = t, l = wb(a, o), u = i + Xe(e.cx, a, a / 2), s = n + Xe(e.cy, o, o / 2), c = Xe(e.innerRadius, l, 0), f = D$(r, e.outerRadius, l), d = e.maxRadius || Math.sqrt(a * a + o * o) / 2;
  return {
    cx: u,
    cy: s,
    innerRadius: c,
    outerRadius: f,
    maxRadius: d
  };
}, $$ = (e, t) => {
  var r = Be(t - e), n = Math.min(Math.abs(t - e), 360);
  return r * n;
}, R$ = (e, t) => {
  if (/* @__PURE__ */ g.isValidElement(e))
    return /* @__PURE__ */ g.cloneElement(e, t);
  if (typeof e == "function")
    return e(t);
  var r = te("recharts-pie-label-line", typeof e != "boolean" ? e.className : ""), {
    key: n
  } = t, i = hl(t, O$);
  return /* @__PURE__ */ g.createElement(xn, Pr({}, i, {
    type: "linear",
    className: r
  }));
}, L$ = (e, t, r) => {
  if (/* @__PURE__ */ g.isValidElement(e))
    return /* @__PURE__ */ g.cloneElement(e, t);
  var n = r;
  if (typeof e == "function" && (n = e(t), /* @__PURE__ */ g.isValidElement(n)))
    return n;
  var i = te("recharts-pie-label-text", Hx(e));
  return /* @__PURE__ */ g.createElement(sl, Pr({}, t, {
    alignmentBaseline: "middle",
    className: i
  }), n);
};
function z$(e) {
  var {
    sectors: t,
    props: r,
    showLabels: n
  } = e, {
    label: i,
    labelLine: a,
    dataKey: o
  } = r;
  if (!n || !i || !t)
    return null;
  var l = tt(r), u = Gr(i), s = Gr(a), c = typeof i == "object" && "offsetRadius" in i && typeof i.offsetRadius == "number" && i.offsetRadius || 20, f = t.map((d, v) => {
    var p = (d.startAngle + d.endAngle) / 2, m = Ie(d.cx, d.cy, d.outerRadius + c, p), h = be(be(be(be({}, l), d), {}, {
      // @ts-expect-error customLabelProps is contributing unknown props
      stroke: "none"
    }, u), {}, {
      index: v,
      textAnchor: N$(m.x, d.cx)
    }, m), y = be(be(be(be({}, l), d), {}, {
      // @ts-expect-error customLabelLineProps is contributing unknown props
      fill: "none",
      // @ts-expect-error customLabelLineProps is contributing unknown props
      stroke: d.fill
    }, s), {}, {
      index: v,
      points: [Ie(d.cx, d.cy, d.outerRadius, p), m],
      key: "line"
    });
    return /* @__PURE__ */ g.createElement(nt, {
      zIndex: _e.label,
      key: "label-".concat(d.startAngle, "-").concat(d.endAngle, "-").concat(d.midAngle, "-").concat(v)
    }, /* @__PURE__ */ g.createElement(Oe, null, a && R$(a, y), L$(i, h, le(d, o))));
  });
  return /* @__PURE__ */ g.createElement(Oe, {
    className: "recharts-pie-labels"
  }, f);
}
function B$(e) {
  var {
    sectors: t,
    props: r,
    showLabels: n
  } = e, {
    label: i
  } = r;
  return typeof i == "object" && i != null && "position" in i ? /* @__PURE__ */ g.createElement(cl, {
    label: i
  }) : /* @__PURE__ */ g.createElement(z$, {
    sectors: t,
    props: r,
    showLabels: n
  });
}
function F$(e) {
  var {
    sectors: t,
    activeShape: r,
    inactiveShape: n,
    allOtherPieProps: i,
    shape: a,
    id: o
  } = e, l = B(Or), u = B(Df), s = B(bx), {
    onMouseEnter: c,
    onClick: f,
    onMouseLeave: d
  } = i, v = hl(i, P$), p = Vf(c, i.dataKey, o), m = Hf(d), h = Gf(f, i.dataKey, o);
  return t == null || t.length === 0 ? null : /* @__PURE__ */ g.createElement(g.Fragment, null, t.map((y, b) => {
    if (y?.startAngle === 0 && y?.endAngle === 0 && t.length !== 1) return null;
    var x = s == null || s === o, w = String(b) === l && (u == null || i.dataKey === u) && x, P = l ? n : null, O = r && w ? r : P, A = be(be({}, y), {}, {
      stroke: y.stroke,
      tabIndex: -1,
      [Zg]: b,
      [Jg]: o
    });
    return /* @__PURE__ */ g.createElement(Oe, Pr({
      key: "sector-".concat(y?.startAngle, "-").concat(y?.endAngle, "-").concat(y.midAngle, "-").concat(b),
      tabIndex: -1,
      className: "recharts-pie-sector"
    }, Ai(v, y, b), {
      onMouseEnter: p(y, b),
      onMouseLeave: m(y, b),
      onClick: h(y, b)
    }), /* @__PURE__ */ g.createElement(Uf, Pr({
      option: a ?? O,
      index: b,
      shapeType: "sector",
      isActive: w
    }, A)));
  }));
}
function W$(e) {
  var t, {
    pieSettings: r,
    displayedData: n,
    cells: i,
    offset: a
  } = e, {
    cornerRadius: o,
    startAngle: l,
    endAngle: u,
    dataKey: s,
    nameKey: c,
    tooltipType: f
  } = r, d = Math.abs(r.minAngle), v = $$(l, u), p = Math.abs(v), m = n.length <= 1 ? 0 : (t = r.paddingAngle) !== null && t !== void 0 ? t : 0, h = n.filter((O) => le(O, s, 0) !== 0).length, y = (p >= 360 ? h : h - 1) * m, b = p - h * d - y, x = n.reduce((O, A) => {
    var _ = le(A, s, 0);
    return O + (L(_) ? _ : 0);
  }, 0), w;
  if (x > 0) {
    var P;
    w = n.map((O, A) => {
      var _ = le(O, s, 0), C = le(O, c, A), T = M$(r, a, O), N = (L(_) ? _ : 0) / x, j, I = be(be({}, O), i && i[A] && i[A].props), $ = I != null && "fill" in I && typeof I.fill == "string" ? I.fill : r.fill;
      A ? j = P.endAngle + Be(v) * m * (_ !== 0 ? 1 : 0) : j = l;
      var K = j + Be(v) * ((_ !== 0 ? d : 0) + N * b), V = (j + K) / 2, U = (T.innerRadius + T.outerRadius) / 2, X = [{
        name: C,
        value: _,
        payload: I,
        dataKey: s,
        type: f,
        color: $,
        fill: $,
        graphicalItemId: r.id
      }], q = Ie(T.cx, T.cy, U, V);
      return P = be(be(be(be({}, r.presentationProps), {}, {
        percent: N,
        cornerRadius: typeof o == "string" ? parseFloat(o) : o,
        name: C,
        tooltipPayload: X,
        midAngle: V,
        middleRadius: U,
        tooltipPosition: q
      }, I), T), {}, {
        value: _,
        dataKey: s,
        startAngle: j,
        endAngle: K,
        payload: I,
        paddingAngle: Be(v) * m
      }), P;
    });
  }
  return w;
}
function K$(e) {
  var {
    showLabels: t,
    sectors: r,
    children: n
  } = e, i = gt(() => !t || !r ? [] : r.map((a) => ({
    value: a.value,
    payload: a.payload,
    clockWise: !1,
    parentViewBox: void 0,
    viewBox: {
      cx: a.cx,
      cy: a.cy,
      innerRadius: a.innerRadius,
      outerRadius: a.outerRadius,
      startAngle: a.startAngle,
      endAngle: a.endAngle,
      clockWise: !1
    },
    fill: a.fill
  })), [r, t]);
  return /* @__PURE__ */ g.createElement(bM, {
    value: t ? i : void 0
  }, n);
}
function q$(e) {
  var {
    props: t,
    previousSectorsRef: r,
    id: n
  } = e, {
    sectors: i,
    isAnimationActive: a,
    animationBegin: o,
    animationDuration: l,
    animationEasing: u,
    activeShape: s,
    inactiveShape: c,
    onAnimationStart: f,
    onAnimationEnd: d
  } = t, v = Tn(t, "recharts-pie-"), p = r.current, [m, h] = re(!1), y = ie(() => {
    typeof d == "function" && d(), h(!1);
  }, [d]), b = ie(() => {
    typeof f == "function" && f(), h(!0);
  }, [f]);
  return /* @__PURE__ */ g.createElement(K$, {
    showLabels: !m,
    sectors: i
  }, /* @__PURE__ */ g.createElement(Cn, {
    animationId: v,
    begin: o,
    duration: l,
    isActive: a,
    easing: u,
    onAnimationStart: b,
    onAnimationEnd: y,
    key: v
  }, (x) => {
    var w, P = [], O = i && i[0], A = (w = O?.startAngle) !== null && w !== void 0 ? w : 0;
    return i?.forEach((_, C) => {
      var T = p && p[C], N = C > 0 ? Xr(_, "paddingAngle", 0) : 0;
      if (T) {
        var j = oe(T.endAngle - T.startAngle, _.endAngle - _.startAngle, x), I = be(be({}, _), {}, {
          startAngle: A + N,
          endAngle: A + j + N
        });
        P.push(I), A = I.endAngle;
      } else {
        var {
          endAngle: $,
          startAngle: K
        } = _, V = oe(0, $ - K, x), U = be(be({}, _), {}, {
          startAngle: A + N,
          endAngle: A + V + N
        });
        P.push(U), A = U.endAngle;
      }
    }), r.current = P, /* @__PURE__ */ g.createElement(Oe, null, /* @__PURE__ */ g.createElement(F$, {
      sectors: P,
      activeShape: s,
      inactiveShape: c,
      allOtherPieProps: t,
      shape: t.shape,
      id: n
    }));
  }), /* @__PURE__ */ g.createElement(B$, {
    showLabels: !m,
    sectors: i,
    props: t
  }), t.children);
}
var U$ = {
  animationBegin: 400,
  animationDuration: 1500,
  animationEasing: "ease",
  cx: "50%",
  cy: "50%",
  dataKey: "value",
  endAngle: 360,
  fill: "#808080",
  hide: !1,
  innerRadius: 0,
  isAnimationActive: "auto",
  label: !1,
  labelLine: !0,
  legendType: "rect",
  minAngle: 0,
  nameKey: "name",
  outerRadius: "80%",
  paddingAngle: 0,
  rootTabIndex: 0,
  startAngle: 0,
  stroke: "#fff",
  zIndex: _e.area
};
function V$(e) {
  var {
    id: t
  } = e, r = hl(e, E$), {
    hide: n,
    className: i,
    rootTabIndex: a
  } = e, o = gt(() => Kf(e.children, Wn), [e.children]), l = B((c) => RM(c, t, o)), u = H(null), s = te("recharts-pie", i);
  return n || l == null ? (u.current = null, /* @__PURE__ */ g.createElement(Oe, {
    tabIndex: a,
    className: s
  })) : /* @__PURE__ */ g.createElement(nt, {
    zIndex: e.zIndex
  }, /* @__PURE__ */ g.createElement(T$, {
    dataKey: e.dataKey,
    nameKey: e.nameKey,
    sectors: l,
    stroke: e.stroke,
    strokeWidth: e.strokeWidth,
    fill: e.fill,
    name: e.name,
    hide: e.hide,
    tooltipType: e.tooltipType,
    id: t,
    activeShape: e.activeShape
  }), /* @__PURE__ */ g.createElement(Oe, {
    tabIndex: a,
    className: s
  }, /* @__PURE__ */ g.createElement(q$, {
    props: be(be({}, r), {}, {
      sectors: l
    }),
    previousSectorsRef: u,
    id: t
  })));
}
function H$(e) {
  var t = je(e, U$), {
    id: r
  } = t, n = hl(t, A$), i = tt(n);
  return /* @__PURE__ */ g.createElement(pl, {
    id: r,
    type: "pie"
  }, (a) => /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(w$, {
    type: "pie",
    id: a,
    data: n.data,
    dataKey: n.dataKey,
    hide: n.hide,
    angleAxisId: 0,
    radiusAxisId: 0,
    name: n.name,
    nameKey: n.nameKey,
    tooltipType: n.tooltipType,
    legendType: n.legendType,
    fill: n.fill,
    cx: n.cx,
    cy: n.cy,
    startAngle: n.startAngle,
    endAngle: n.endAngle,
    paddingAngle: n.paddingAngle,
    minAngle: n.minAngle,
    innerRadius: n.innerRadius,
    outerRadius: n.outerRadius,
    cornerRadius: n.cornerRadius,
    presentationProps: i,
    maxRadius: t.maxRadius
  }), /* @__PURE__ */ g.createElement(k$, Pr({}, n, {
    id: a
  })), /* @__PURE__ */ g.createElement(V$, Pr({}, n, {
    id: a
  }))));
}
var Zf = H$;
Zf.displayName = "Pie";
var G$ = ["points"];
function qm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Gu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qm(Object(r), !0).forEach(function(n) {
      Y$(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Y$(e, t, r) {
  return (t = X$(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function X$(e) {
  var t = Z$(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Z$(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function yo() {
  return yo = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, yo.apply(null, arguments);
}
function J$(e, t) {
  if (e == null) return {};
  var r, n, i = Q$(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function Q$(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function eR(e) {
  var {
    option: t,
    dotProps: r,
    className: n
  } = e;
  if (/* @__PURE__ */ vt(t))
    return /* @__PURE__ */ In(t, r);
  if (typeof t == "function")
    return t(r);
  var i = te(n, typeof t != "boolean" ? t.className : ""), a = r ?? {}, {
    points: o
  } = a, l = J$(a, G$);
  return /* @__PURE__ */ g.createElement(Kx, yo({}, l, {
    className: i
  }));
}
function tR(e, t) {
  return e == null ? !1 : t ? !0 : e.length === 1;
}
function Zx(e) {
  var {
    points: t,
    dot: r,
    className: n,
    dotClassName: i,
    dataKey: a,
    baseProps: o,
    needClip: l,
    clipPathId: u,
    zIndex: s = _e.scatter
  } = e;
  if (!tR(t, r))
    return null;
  var c = qf(r), f = xO(r), d = t.map((p, m) => {
    var h, y, b = Gu(Gu(Gu({
      r: 3
    }, o), f), {}, {
      index: m,
      cx: (h = p.x) !== null && h !== void 0 ? h : void 0,
      cy: (y = p.y) !== null && y !== void 0 ? y : void 0,
      dataKey: a,
      value: p.value,
      payload: p.payload,
      points: t
    });
    return /* @__PURE__ */ g.createElement(eR, {
      key: "dot-".concat(m),
      option: r,
      dotProps: b,
      className: i
    });
  }), v = {};
  return l && u != null && (v.clipPath = "url(#clipPath-".concat(c ? "" : "dots-").concat(u, ")")), /* @__PURE__ */ g.createElement(nt, {
    zIndex: s
  }, /* @__PURE__ */ g.createElement(Oe, yo({
    className: n
  }, v), d));
}
function Um(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Vm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Um(Object(r), !0).forEach(function(n) {
      rR(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Um(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function rR(e, t, r) {
  return (t = nR(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function nR(e) {
  var t = iR(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function iR(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Jx = 0, aR = {
  xAxis: {},
  yAxis: {},
  zAxis: {}
}, Qx = Je({
  name: "cartesianAxis",
  initialState: aR,
  reducers: {
    addXAxis: {
      reducer(e, t) {
        e.xAxis[t.payload.id] = t.payload;
      },
      prepare: me()
    },
    replaceXAxis: {
      reducer(e, t) {
        var {
          prev: r,
          next: n
        } = t.payload;
        e.xAxis[r.id] !== void 0 && (r.id !== n.id && delete e.xAxis[r.id], e.xAxis[n.id] = n);
      },
      prepare: me()
    },
    removeXAxis: {
      reducer(e, t) {
        delete e.xAxis[t.payload.id];
      },
      prepare: me()
    },
    addYAxis: {
      reducer(e, t) {
        e.yAxis[t.payload.id] = t.payload;
      },
      prepare: me()
    },
    replaceYAxis: {
      reducer(e, t) {
        var {
          prev: r,
          next: n
        } = t.payload;
        e.yAxis[r.id] !== void 0 && (r.id !== n.id && delete e.yAxis[r.id], e.yAxis[n.id] = n);
      },
      prepare: me()
    },
    removeYAxis: {
      reducer(e, t) {
        delete e.yAxis[t.payload.id];
      },
      prepare: me()
    },
    addZAxis: {
      reducer(e, t) {
        e.zAxis[t.payload.id] = t.payload;
      },
      prepare: me()
    },
    replaceZAxis: {
      reducer(e, t) {
        var {
          prev: r,
          next: n
        } = t.payload;
        e.zAxis[r.id] !== void 0 && (r.id !== n.id && delete e.zAxis[r.id], e.zAxis[n.id] = n);
      },
      prepare: me()
    },
    removeZAxis: {
      reducer(e, t) {
        delete e.zAxis[t.payload.id];
      },
      prepare: me()
    },
    updateYAxisWidth(e, t) {
      var {
        id: r,
        width: n
      } = t.payload, i = e.yAxis[r];
      if (i) {
        var a, o = i.widthHistory || [];
        if (o.length === 3 && o[0] === o[2] && n === o[1] && n !== i.width && Math.abs(n - ((a = o[0]) !== null && a !== void 0 ? a : 0)) <= 1)
          return;
        var l = [...o, n].slice(-3);
        e.yAxis[r] = Vm(Vm({}, i), {}, {
          width: n,
          widthHistory: l
        });
      }
    }
  }
}), {
  addXAxis: oR,
  replaceXAxis: lR,
  removeXAxis: uR,
  addYAxis: sR,
  replaceYAxis: cR,
  removeYAxis: fR,
  addZAxis: DF,
  replaceZAxis: MF,
  removeZAxis: $F,
  updateYAxisWidth: dR
} = Qx.actions, vR = Qx.reducer, pR = S([$e], (e) => ({
  top: e.top,
  bottom: e.bottom,
  left: e.left,
  right: e.right
})), hR = S([pR, or, lr], (e, t, r) => {
  if (!(!e || t == null || r == null))
    return {
      x: e.left,
      y: e.top,
      width: Math.max(0, t - e.left - e.right),
      height: Math.max(0, r - e.top - e.bottom)
    };
}), ml = () => B(hR), mR = () => B(iN);
function Hm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Yu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hm(Object(r), !0).forEach(function(n) {
      yR(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function yR(e, t, r) {
  return (t = gR(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function gR(e) {
  var t = bR(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function bR(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var xR = (e) => {
  var {
    point: t,
    childIndex: r,
    mainColor: n,
    activeDot: i,
    dataKey: a,
    clipPath: o
  } = e;
  if (i === !1 || t.x == null || t.y == null)
    return null;
  var l = {
    index: r,
    dataKey: a,
    cx: t.x,
    cy: t.y,
    r: 4,
    fill: n ?? "none",
    strokeWidth: 2,
    stroke: "#fff",
    payload: t.payload,
    value: t.value
  }, u = Yu(Yu(Yu({}, l), Gr(i)), sc(i)), s;
  return /* @__PURE__ */ vt(i) ? s = /* @__PURE__ */ In(i, u) : typeof i == "function" ? s = i(u) : s = /* @__PURE__ */ g.createElement(Kx, u), /* @__PURE__ */ g.createElement(Oe, {
    className: "recharts-active-dot",
    clipPath: o
  }, s);
};
function Ks(e) {
  var {
    points: t,
    mainColor: r,
    activeDot: n,
    itemDataKey: i,
    clipPath: a,
    zIndex: o = _e.activeDot
  } = e, l = B(Or), u = mR();
  if (t == null || u == null)
    return null;
  var s = t.find((c) => u.includes(c.payload));
  return ge(s) ? null : /* @__PURE__ */ g.createElement(nt, {
    zIndex: o
  }, /* @__PURE__ */ g.createElement(xR, {
    point: s,
    childIndex: Number(l),
    mainColor: r,
    dataKey: i,
    activeDot: n,
    clipPath: a
  }));
}
var Gm = (e, t, r) => {
  var n = r ?? e;
  if (!ge(n))
    return Xe(n, t, 0);
}, wR = (e, t, r) => {
  var n = {}, i = e.filter(Yo), a = e.filter((s) => s.stackId == null), o = i.reduce((s, c) => {
    var f = s[c.stackId];
    return f == null && (f = []), f.push(c), s[c.stackId] = f, s;
  }, n), l = Object.entries(o).map((s) => {
    var c, [f, d] = s, v = d.map((m) => m.dataKey), p = Gm(t, r, (c = d[0]) === null || c === void 0 ? void 0 : c.barSize);
    return {
      stackId: f,
      dataKeys: v,
      barSize: p
    };
  }), u = a.map((s) => {
    var c = [s.dataKey].filter((d) => d != null), f = Gm(t, r, s.barSize);
    return {
      stackId: void 0,
      dataKeys: c,
      barSize: f
    };
  });
  return [...l, ...u];
};
function Ym(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ma(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ym(Object(r), !0).forEach(function(n) {
      OR(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ym(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function OR(e, t, r) {
  return (t = PR(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function PR(e) {
  var t = ER(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function ER(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function AR(e, t, r, n, i) {
  var a, o = n.length;
  if (!(o < 1)) {
    var l = Xe(e, r, 0, !0), u, s = [];
    if (G((a = n[0]) === null || a === void 0 ? void 0 : a.barSize)) {
      var c = !1, f = r / o, d = n.reduce((b, x) => b + (x.barSize || 0), 0);
      d += (o - 1) * l, d >= r && (d -= (o - 1) * l, l = 0), d >= r && f > 0 && (c = !0, f *= 0.9, d = o * f);
      var v = (r - d) / 2 >> 0, p = {
        offset: v - l,
        size: 0
      };
      u = n.reduce((b, x) => {
        var w, P = {
          stackId: x.stackId,
          dataKeys: x.dataKeys,
          position: {
            offset: p.offset + p.size + l,
            size: c ? f : (w = x.barSize) !== null && w !== void 0 ? w : 0
          }
        }, O = [...b, P];
        return p = P.position, O;
      }, s);
    } else {
      var m = Xe(t, r, 0, !0);
      r - 2 * m - (o - 1) * l <= 0 && (l = 0);
      var h = (r - 2 * m - (o - 1) * l) / o;
      h > 1 && (h >>= 0);
      var y = G(i) ? Math.min(h, i) : h;
      u = n.reduce((b, x, w) => [...b, {
        stackId: x.stackId,
        dataKeys: x.dataKeys,
        position: {
          offset: m + (h + l) * w + (h - y) / 2,
          size: y
        }
      }], s);
    }
    return u;
  }
}
var SR = (e, t, r, n, i, a, o) => {
  var l = ge(o) ? t : o, u = AR(r, n, i !== a ? i : a, e, l);
  return i !== a && u != null && (u = u.map((s) => ma(ma({}, s), {}, {
    position: ma(ma({}, s.position), {}, {
      offset: s.position.offset - i / 2
    })
  }))), u;
}, _R = (e, t) => {
  var r = Go(t);
  if (!(!e || r == null || t == null)) {
    var {
      stackId: n
    } = t;
    if (n != null) {
      var i = e[n];
      if (i) {
        var {
          stackedData: a
        } = i;
        if (a)
          return a.find((o) => o.key === r);
      }
    }
  }
}, jR = (e, t) => {
  if (!(e == null || t == null)) {
    var r = e.find((n) => n.stackId === t.stackId && t.dataKey != null && n.dataKeys.includes(t.dataKey));
    if (r != null)
      return r.position;
  }
};
function IR(e, t) {
  return e && typeof e == "object" && "zIndex" in e && typeof e.zIndex == "number" && G(e.zIndex) ? e.zIndex : t;
}
var ew = (e) => {
  var {
    chartData: t
  } = e, r = de(), n = Fe();
  return fe(() => n ? () => {
  } : (r(im(t)), () => {
    r(im(void 0));
  }), [t, r, n]), null;
}, Xm = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  padding: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
}, tw = Je({
  name: "brush",
  initialState: Xm,
  reducers: {
    setBrushSettings(e, t) {
      return t.payload == null ? Xm : t.payload;
    }
  }
}), {
  setBrushSettings: RF
} = tw.actions, kR = tw.reducer;
function CR(e) {
  return (e % 180 + 180) % 180;
}
var TR = function(t) {
  var {
    width: r,
    height: n
  } = t, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = CR(i), o = a * Math.PI / 180, l = Math.atan(n / r), u = o > l && o < Math.PI - l ? n / Math.sin(o) : r / Math.cos(o);
  return Math.abs(u);
}, NR = {
  dots: [],
  areas: [],
  lines: []
}, rw = Je({
  name: "referenceElements",
  initialState: NR,
  reducers: {
    addDot: (e, t) => {
      e.dots.push(t.payload);
    },
    removeDot: (e, t) => {
      var r = Pt(e).dots.findIndex((n) => n === t.payload);
      r !== -1 && e.dots.splice(r, 1);
    },
    addArea: (e, t) => {
      e.areas.push(t.payload);
    },
    removeArea: (e, t) => {
      var r = Pt(e).areas.findIndex((n) => n === t.payload);
      r !== -1 && e.areas.splice(r, 1);
    },
    addLine: (e, t) => {
      e.lines.push(t.payload);
    },
    removeLine: (e, t) => {
      var r = Pt(e).lines.findIndex((n) => n === t.payload);
      r !== -1 && e.lines.splice(r, 1);
    }
  }
}), {
  addDot: LF,
  removeDot: zF,
  addArea: BF,
  removeArea: FF,
  addLine: WF,
  removeLine: KF
} = rw.actions, DR = rw.reducer, MR = /* @__PURE__ */ lt(void 0), $R = (e) => {
  var {
    children: t
  } = e, [r] = re("".concat(oi("recharts"), "-clip")), n = ml();
  if (n == null)
    return null;
  var {
    x: i,
    y: a,
    width: o,
    height: l
  } = n;
  return /* @__PURE__ */ g.createElement(MR.Provider, {
    value: r
  }, /* @__PURE__ */ g.createElement("defs", null, /* @__PURE__ */ g.createElement("clipPath", {
    id: r
  }, /* @__PURE__ */ g.createElement("rect", {
    x: i,
    y: a,
    height: l,
    width: o
  }))), t);
};
function nw(e, t) {
  if (t < 1)
    return [];
  if (t === 1)
    return e;
  for (var r = [], n = 0; n < e.length; n += t) {
    var i = e[n];
    i !== void 0 && r.push(i);
  }
  return r;
}
function RR(e, t, r) {
  var n = {
    width: e.width + t.width,
    height: e.height + t.height
  };
  return TR(n, r);
}
function LR(e, t, r) {
  var n = r === "width", {
    x: i,
    y: a,
    width: o,
    height: l
  } = e;
  return t === 1 ? {
    start: n ? i : a,
    end: n ? i + o : a + l
  } : {
    start: n ? i + o : a + l,
    end: n ? i : a
  };
}
function xi(e, t, r, n, i) {
  if (e * t < e * n || e * t > e * i)
    return !1;
  var a = r();
  return e * (t - e * a / 2 - n) >= 0 && e * (t + e * a / 2 - i) <= 0;
}
function zR(e, t) {
  return nw(e, t + 1);
}
function BR(e, t, r, n, i) {
  for (var a = (n || []).slice(), {
    start: o,
    end: l
  } = t, u = 0, s = 1, c = o, f = function() {
    var p = n?.[u];
    if (p === void 0)
      return {
        v: nw(n, s)
      };
    var m = u, h, y = () => (h === void 0 && (h = r(p, m)), h), b = p.coordinate, x = u === 0 || xi(e, b, y, c, l);
    x || (u = 0, c = o, s += 1), x && (c = b + e * (y() / 2 + i), u += s);
  }, d; s <= a.length; )
    if (d = f(), d) return d.v;
  return [];
}
function FR(e, t, r, n, i) {
  var a = (n || []).slice(), o = a.length;
  if (o === 0)
    return [];
  for (var {
    start: l,
    end: u
  } = t, s = 1; s <= o; s++) {
    for (var c = (o - 1) % s, f = l, d = !0, v = function() {
      var w = n[m];
      if (w == null)
        return 0;
      var P = m, O, A = () => (O === void 0 && (O = r(w, P)), O), _ = w.coordinate, C = m === c || xi(e, _, A, f, u);
      if (!C)
        return d = !1, 1;
      C && (f = _ + e * (A() / 2 + i));
    }, p, m = c; m < o && (p = v(), !(p !== 0 && p === 1)); m += s)
      ;
    if (d) {
      for (var h = [], y = c; y < o; y += s) {
        var b = n[y];
        b != null && h.push(b);
      }
      return h;
    }
  }
  return [];
}
function Zm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ge(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zm(Object(r), !0).forEach(function(n) {
      WR(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function WR(e, t, r) {
  return (t = KR(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function KR(e) {
  var t = qR(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function qR(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function UR(e, t, r, n, i) {
  for (var a = (n || []).slice(), o = a.length, {
    start: l
  } = t, {
    end: u
  } = t, s = function(d) {
    var v = a[d];
    if (v == null)
      return 1;
    var p = v, m, h = () => (m === void 0 && (m = r(v, d)), m);
    if (d === o - 1) {
      var y = e * (p.coordinate + e * h() / 2 - u);
      a[d] = p = Ge(Ge({}, p), {}, {
        tickCoord: y > 0 ? p.coordinate - y * e : p.coordinate
      });
    } else
      a[d] = p = Ge(Ge({}, p), {}, {
        tickCoord: p.coordinate
      });
    if (p.tickCoord != null) {
      var b = xi(e, p.tickCoord, h, l, u);
      b && (u = p.tickCoord - e * (h() / 2 + i), a[d] = Ge(Ge({}, p), {}, {
        isShow: !0
      }));
    }
  }, c = o - 1; c >= 0; c--)
    s(c);
  return a;
}
function VR(e, t, r, n, i, a) {
  var o = (n || []).slice(), l = o.length, {
    start: u,
    end: s
  } = t;
  if (a) {
    var c = n[l - 1];
    if (c != null) {
      var f = r(c, l - 1), d = e * (c.coordinate + e * f / 2 - s);
      if (o[l - 1] = c = Ge(Ge({}, c), {}, {
        tickCoord: d > 0 ? c.coordinate - d * e : c.coordinate
      }), c.tickCoord != null) {
        var v = xi(e, c.tickCoord, () => f, u, s);
        v && (s = c.tickCoord - e * (f / 2 + i), o[l - 1] = Ge(Ge({}, c), {}, {
          isShow: !0
        }));
      }
    }
  }
  for (var p = a ? l - 1 : l, m = function(b) {
    var x = o[b];
    if (x == null)
      return 1;
    var w = x, P, O = () => (P === void 0 && (P = r(x, b)), P);
    if (b === 0) {
      var A = e * (w.coordinate - e * O() / 2 - u);
      o[b] = w = Ge(Ge({}, w), {}, {
        tickCoord: A < 0 ? w.coordinate - A * e : w.coordinate
      });
    } else
      o[b] = w = Ge(Ge({}, w), {}, {
        tickCoord: w.coordinate
      });
    if (w.tickCoord != null) {
      var _ = xi(e, w.tickCoord, O, u, s);
      _ && (u = w.tickCoord + e * (O() / 2 + i), o[b] = Ge(Ge({}, w), {}, {
        isShow: !0
      }));
    }
  }, h = 0; h < p; h++)
    m(h);
  return o;
}
function Jf(e, t, r) {
  var {
    tick: n,
    ticks: i,
    viewBox: a,
    minTickGap: o,
    orientation: l,
    interval: u,
    tickFormatter: s,
    unit: c,
    angle: f
  } = e;
  if (!i || !i.length || !n)
    return [];
  if (L(u) || Di.isSsr) {
    var d;
    return (d = zR(i, L(u) ? u : 0)) !== null && d !== void 0 ? d : [];
  }
  var v = [], p = l === "top" || l === "bottom" ? "width" : "height", m = c && p === "width" ? ai(c, {
    fontSize: t,
    letterSpacing: r
  }) : {
    width: 0,
    height: 0
  }, h = (P, O) => {
    var A = typeof s == "function" ? s(P.value, O) : P.value;
    return p === "width" ? RR(ai(A, {
      fontSize: t,
      letterSpacing: r
    }), m, f) : ai(A, {
      fontSize: t,
      letterSpacing: r
    })[p];
  }, y = i[0], b = i[1], x = i.length >= 2 && y != null && b != null ? Be(b.coordinate - y.coordinate) : 1, w = LR(a, x, p);
  return u === "equidistantPreserveStart" ? BR(x, w, h, i, o) : u === "equidistantPreserveEnd" ? FR(x, w, h, i, o) : (u === "preserveStart" || u === "preserveStartEnd" ? v = VR(x, w, h, i, o, u === "preserveStartEnd") : v = UR(x, w, h, i, o), v.filter((P) => P.isShow));
}
var HR = (e) => {
  var {
    ticks: t,
    label: r,
    labelGapWithTick: n = 5,
    // Default gap between label and tick
    tickSize: i = 0,
    tickMargin: a = 0
  } = e, o = 0;
  if (t) {
    Array.from(t).forEach((c) => {
      if (c) {
        var f = c.getBoundingClientRect();
        f.width > o && (o = f.width);
      }
    });
    var l = r ? r.getBoundingClientRect().width : 0, u = i + a, s = o + u + l + (r ? n : 0);
    return Math.round(s);
  }
  return 0;
}, GR = {
  xAxis: {},
  yAxis: {}
}, iw = Je({
  name: "renderedTicks",
  initialState: GR,
  reducers: {
    setRenderedTicks: (e, t) => {
      var {
        axisType: r,
        axisId: n,
        ticks: i
      } = t.payload;
      e[r][n] = i;
    },
    removeRenderedTicks: (e, t) => {
      var {
        axisType: r,
        axisId: n
      } = t.payload;
      delete e[r][n];
    }
  }
}), {
  setRenderedTicks: YR,
  removeRenderedTicks: XR
} = iw.actions, ZR = iw.reducer, JR = ["axisLine", "width", "height", "className", "hide", "ticks", "axisType", "axisId"];
function QR(e, t) {
  if (e == null) return {};
  var r, n, i = eL(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function eL(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function rn() {
  return rn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, rn.apply(null, arguments);
}
function Jm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ee(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Jm(Object(r), !0).forEach(function(n) {
      tL(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Jm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function tL(e, t, r) {
  return (t = rL(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function rL(e) {
  var t = nL(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function nL(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Qt = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  viewBox: {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  // The orientation of axis
  orientation: "bottom",
  // The ticks
  ticks: [],
  stroke: "#666",
  tickLine: !0,
  axisLine: !0,
  tick: !0,
  mirror: !1,
  minTickGap: 5,
  // The width or height of tick
  tickSize: 6,
  tickMargin: 2,
  interval: "preserveEnd",
  zIndex: _e.axis
};
function iL(e) {
  var {
    x: t,
    y: r,
    width: n,
    height: i,
    orientation: a,
    mirror: o,
    axisLine: l,
    otherSvgProps: u
  } = e;
  if (!l)
    return null;
  var s = Ee(Ee(Ee({}, u), tt(l)), {}, {
    fill: "none"
  });
  if (a === "top" || a === "bottom") {
    var c = +(a === "top" && !o || a === "bottom" && o);
    s = Ee(Ee({}, s), {}, {
      x1: t,
      y1: r + c * i,
      x2: t + n,
      y2: r + c * i
    });
  } else {
    var f = +(a === "left" && !o || a === "right" && o);
    s = Ee(Ee({}, s), {}, {
      x1: t + f * n,
      y1: r,
      x2: t + f * n,
      y2: r + i
    });
  }
  return /* @__PURE__ */ g.createElement("line", rn({}, s, {
    className: te("recharts-cartesian-axis-line", Xr(l, "className"))
  }));
}
function aL(e, t, r, n, i, a, o, l, u) {
  var s, c, f, d, v, p, m = l ? -1 : 1, h = e.tickSize || o, y = L(e.tickCoord) ? e.tickCoord : e.coordinate;
  switch (a) {
    case "top":
      s = c = e.coordinate, d = r + +!l * i, f = d - m * h, p = f - m * u, v = y;
      break;
    case "left":
      f = d = e.coordinate, c = t + +!l * n, s = c - m * h, v = s - m * u, p = y;
      break;
    case "right":
      f = d = e.coordinate, c = t + +l * n, s = c + m * h, v = s + m * u, p = y;
      break;
    default:
      s = c = e.coordinate, d = r + +l * i, f = d + m * h, p = f + m * u, v = y;
      break;
  }
  return {
    line: {
      x1: s,
      y1: f,
      x2: c,
      y2: d
    },
    tick: {
      x: v,
      y: p
    }
  };
}
function oL(e, t) {
  switch (e) {
    case "left":
      return t ? "start" : "end";
    case "right":
      return t ? "end" : "start";
    default:
      return "middle";
  }
}
function lL(e, t) {
  switch (e) {
    case "left":
    case "right":
      return "middle";
    case "top":
      return t ? "start" : "end";
    default:
      return t ? "end" : "start";
  }
}
function uL(e) {
  var {
    option: t,
    tickProps: r,
    value: n
  } = e, i, a = te(r.className, "recharts-cartesian-axis-tick-value");
  if (/* @__PURE__ */ g.isValidElement(t))
    i = /* @__PURE__ */ g.cloneElement(t, Ee(Ee({}, r), {}, {
      className: a
    }));
  else if (typeof t == "function")
    i = t(Ee(Ee({}, r), {}, {
      className: a
    }));
  else {
    var o = "recharts-cartesian-axis-tick-value";
    typeof t != "boolean" && (o = te(o, Hx(t))), i = /* @__PURE__ */ g.createElement(sl, rn({}, r, {
      className: o
    }), n);
  }
  return i;
}
function sL(e) {
  var {
    ticks: t,
    axisType: r,
    axisId: n
  } = e, i = de();
  return fe(() => {
    if (n == null || r == null)
      return ar;
    var a = t.map((o) => ({
      value: o.value,
      coordinate: o.coordinate,
      offset: o.offset,
      index: o.index
    }));
    return i(YR({
      ticks: a,
      axisId: n,
      axisType: r
    })), () => {
      i(XR({
        axisId: n,
        axisType: r
      }));
    };
  }, [i, t, n, r]), null;
}
var cL = /* @__PURE__ */ Ce((e, t) => {
  var {
    ticks: r = [],
    tick: n,
    tickLine: i,
    stroke: a,
    tickFormatter: o,
    unit: l,
    padding: u,
    tickTextProps: s,
    orientation: c,
    mirror: f,
    x: d,
    y: v,
    width: p,
    height: m,
    tickSize: h,
    tickMargin: y,
    fontSize: b,
    letterSpacing: x,
    getTicksConfig: w,
    events: P,
    axisType: O,
    axisId: A
  } = e, _ = Jf(Ee(Ee({}, w), {}, {
    ticks: r
  }), b, x), C = tt(w), T = Gr(n), N = Mx(C.textAnchor) ? C.textAnchor : oL(c, f), j = lL(c, f), I = {};
  typeof i == "object" && (I = i);
  var $ = Ee(Ee({}, C), {}, {
    fill: "none"
  }, I), K = _.map((X) => Ee({
    entry: X
  }, aL(X, d, v, p, m, c, h, f, y))), V = K.map((X) => {
    var {
      entry: q,
      line: Z
    } = X;
    return /* @__PURE__ */ g.createElement(Oe, {
      className: "recharts-cartesian-axis-tick",
      key: "tick-".concat(q.value, "-").concat(q.coordinate, "-").concat(q.tickCoord)
    }, i && /* @__PURE__ */ g.createElement("line", rn({}, $, Z, {
      className: te("recharts-cartesian-axis-tick-line", Xr(i, "className"))
    })));
  }), U = K.map((X, q) => {
    var Z, k, {
      entry: W,
      tick: Y
    } = X, J = Ee(Ee(Ee(Ee({
      verticalAnchor: j
    }, C), {}, {
      textAnchor: N,
      stroke: "none",
      fill: a
    }, Y), {}, {
      index: q,
      payload: W,
      visibleTicksCount: _.length,
      tickFormatter: o,
      padding: u
    }, s), {}, {
      angle: (Z = (k = s?.angle) !== null && k !== void 0 ? k : C.angle) !== null && Z !== void 0 ? Z : 0
    }), He = Ee(Ee({}, J), T);
    return /* @__PURE__ */ g.createElement(Oe, rn({
      className: "recharts-cartesian-axis-tick-label",
      key: "tick-label-".concat(W.value, "-").concat(W.coordinate, "-").concat(W.tickCoord)
    }, Ai(P, W, q)), n && /* @__PURE__ */ g.createElement(uL, {
      option: n,
      tickProps: He,
      value: "".concat(typeof o == "function" ? o(W.value, q) : W.value).concat(l || "")
    }));
  });
  return /* @__PURE__ */ g.createElement("g", {
    className: "recharts-cartesian-axis-ticks recharts-".concat(O, "-ticks")
  }, /* @__PURE__ */ g.createElement(sL, {
    ticks: _,
    axisId: A,
    axisType: O
  }), U.length > 0 && /* @__PURE__ */ g.createElement(nt, {
    zIndex: _e.label
  }, /* @__PURE__ */ g.createElement("g", {
    className: "recharts-cartesian-axis-tick-labels recharts-".concat(O, "-tick-labels"),
    ref: t
  }, U)), V.length > 0 && /* @__PURE__ */ g.createElement("g", {
    className: "recharts-cartesian-axis-tick-lines recharts-".concat(O, "-tick-lines")
  }, V));
}), fL = /* @__PURE__ */ Ce((e, t) => {
  var {
    axisLine: r,
    width: n,
    height: i,
    className: a,
    hide: o,
    ticks: l,
    axisType: u,
    axisId: s
  } = e, c = QR(e, JR), [f, d] = re(""), [v, p] = re(""), m = H(null);
  Oy(t, () => ({
    getCalculatedWidth: () => {
      var y;
      return HR({
        ticks: m.current,
        label: (y = e.labelRef) === null || y === void 0 ? void 0 : y.current,
        labelGapWithTick: 5,
        tickSize: e.tickSize,
        tickMargin: e.tickMargin
      });
    }
  }));
  var h = ie((y) => {
    if (y) {
      var b = y.getElementsByClassName("recharts-cartesian-axis-tick-value");
      m.current = b;
      var x = b[0];
      if (x) {
        var w = window.getComputedStyle(x), P = w.fontSize, O = w.letterSpacing;
        (P !== f || O !== v) && (d(P), p(O));
      }
    }
  }, [f, v]);
  return o || n != null && n <= 0 || i != null && i <= 0 ? null : /* @__PURE__ */ g.createElement(nt, {
    zIndex: e.zIndex
  }, /* @__PURE__ */ g.createElement(Oe, {
    className: te("recharts-cartesian-axis", a)
  }, /* @__PURE__ */ g.createElement(iL, {
    x: e.x,
    y: e.y,
    width: n,
    height: i,
    orientation: e.orientation,
    mirror: e.mirror,
    axisLine: r,
    otherSvgProps: tt(e)
  }), /* @__PURE__ */ g.createElement(cL, {
    ref: h,
    axisType: u,
    events: c,
    fontSize: f,
    getTicksConfig: e,
    height: e.height,
    letterSpacing: v,
    mirror: e.mirror,
    orientation: e.orientation,
    padding: e.padding,
    stroke: e.stroke,
    tick: e.tick,
    tickFormatter: e.tickFormatter,
    tickLine: e.tickLine,
    tickMargin: e.tickMargin,
    tickSize: e.tickSize,
    tickTextProps: e.tickTextProps,
    ticks: l,
    unit: e.unit,
    width: e.width,
    x: e.x,
    y: e.y,
    axisId: s
  }), /* @__PURE__ */ g.createElement(iM, {
    x: e.x,
    y: e.y,
    width: e.width,
    height: e.height,
    lowerWidth: e.width,
    upperWidth: e.width
  }, /* @__PURE__ */ g.createElement(pM, {
    label: e.label,
    labelRef: e.labelRef
  }), e.children)));
}), Qf = /* @__PURE__ */ g.forwardRef((e, t) => {
  var r = je(e, Qt);
  return /* @__PURE__ */ g.createElement(fL, rn({}, r, {
    ref: t
  }));
});
Qf.displayName = "CartesianAxis";
var dL = ["x1", "y1", "x2", "y2", "key"], vL = ["offset"], pL = ["xAxisId", "yAxisId"], hL = ["xAxisId", "yAxisId"];
function Qm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ye(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Qm(Object(r), !0).forEach(function(n) {
      mL(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function mL(e, t, r) {
  return (t = yL(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function yL(e) {
  var t = gL(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function gL(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Wr() {
  return Wr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Wr.apply(null, arguments);
}
function go(e, t) {
  if (e == null) return {};
  var r, n, i = bL(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function bL(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var xL = (e) => {
  var {
    fill: t
  } = e;
  if (!t || t === "none")
    return null;
  var {
    fillOpacity: r,
    x: n,
    y: i,
    width: a,
    height: o,
    ry: l
  } = e;
  return /* @__PURE__ */ g.createElement("rect", {
    x: n,
    y: i,
    ry: l,
    width: a,
    height: o,
    stroke: "none",
    fill: t,
    fillOpacity: r,
    className: "recharts-cartesian-grid-bg"
  });
};
function aw(e) {
  var {
    option: t,
    lineItemProps: r
  } = e, n;
  if (/* @__PURE__ */ g.isValidElement(t))
    n = /* @__PURE__ */ g.cloneElement(t, r);
  else if (typeof t == "function")
    n = t(r);
  else {
    var i, {
      x1: a,
      y1: o,
      x2: l,
      y2: u,
      key: s
    } = r, c = go(r, dL), f = (i = tt(c)) !== null && i !== void 0 ? i : {}, {
      offset: d
    } = f, v = go(f, vL);
    n = /* @__PURE__ */ g.createElement("line", Wr({}, v, {
      x1: a,
      y1: o,
      x2: l,
      y2: u,
      fill: "none",
      key: s
    }));
  }
  return n;
}
function wL(e) {
  var {
    x: t,
    width: r,
    horizontal: n = !0,
    horizontalPoints: i
  } = e;
  if (!n || !i || !i.length)
    return null;
  var {
    xAxisId: a,
    yAxisId: o
  } = e, l = go(e, pL), u = i.map((s, c) => {
    var f = Ye(Ye({}, l), {}, {
      x1: t,
      y1: s,
      x2: t + r,
      y2: s,
      key: "line-".concat(c),
      index: c
    });
    return /* @__PURE__ */ g.createElement(aw, {
      key: "line-".concat(c),
      option: n,
      lineItemProps: f
    });
  });
  return /* @__PURE__ */ g.createElement("g", {
    className: "recharts-cartesian-grid-horizontal"
  }, u);
}
function OL(e) {
  var {
    y: t,
    height: r,
    vertical: n = !0,
    verticalPoints: i
  } = e;
  if (!n || !i || !i.length)
    return null;
  var {
    xAxisId: a,
    yAxisId: o
  } = e, l = go(e, hL), u = i.map((s, c) => {
    var f = Ye(Ye({}, l), {}, {
      x1: s,
      y1: t,
      x2: s,
      y2: t + r,
      key: "line-".concat(c),
      index: c
    });
    return /* @__PURE__ */ g.createElement(aw, {
      option: n,
      lineItemProps: f,
      key: "line-".concat(c)
    });
  });
  return /* @__PURE__ */ g.createElement("g", {
    className: "recharts-cartesian-grid-vertical"
  }, u);
}
function PL(e) {
  var {
    horizontalFill: t,
    fillOpacity: r,
    x: n,
    y: i,
    width: a,
    height: o,
    horizontalPoints: l,
    horizontal: u = !0
  } = e;
  if (!u || !t || !t.length || l == null)
    return null;
  var s = l.map((f) => Math.round(f + i - i)).sort((f, d) => f - d);
  i !== s[0] && s.unshift(0);
  var c = s.map((f, d) => {
    var v = s[d + 1], p = v == null, m = p ? i + o - f : v - f;
    if (m <= 0)
      return null;
    var h = d % t.length;
    return /* @__PURE__ */ g.createElement("rect", {
      key: "react-".concat(d),
      y: f,
      x: n,
      height: m,
      width: a,
      stroke: "none",
      fill: t[h],
      fillOpacity: r,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ g.createElement("g", {
    className: "recharts-cartesian-gridstripes-horizontal"
  }, c);
}
function EL(e) {
  var {
    vertical: t = !0,
    verticalFill: r,
    fillOpacity: n,
    x: i,
    y: a,
    width: o,
    height: l,
    verticalPoints: u
  } = e;
  if (!t || !r || !r.length)
    return null;
  var s = u.map((f) => Math.round(f + i - i)).sort((f, d) => f - d);
  i !== s[0] && s.unshift(0);
  var c = s.map((f, d) => {
    var v = s[d + 1], p = v == null, m = p ? i + o - f : v - f;
    if (m <= 0)
      return null;
    var h = d % r.length;
    return /* @__PURE__ */ g.createElement("rect", {
      key: "react-".concat(d),
      x: f,
      y: a,
      width: m,
      height: l,
      stroke: "none",
      fill: r[h],
      fillOpacity: n,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ g.createElement("g", {
    className: "recharts-cartesian-gridstripes-vertical"
  }, c);
}
var AL = (e, t) => {
  var {
    xAxis: r,
    width: n,
    height: i,
    offset: a
  } = e;
  return Hg(Jf(Ye(Ye(Ye({}, Qt), r), {}, {
    ticks: Gg(r),
    viewBox: {
      x: 0,
      y: 0,
      width: n,
      height: i
    }
  })), a.left, a.left + a.width, t);
}, SL = (e, t) => {
  var {
    yAxis: r,
    width: n,
    height: i,
    offset: a
  } = e;
  return Hg(Jf(Ye(Ye(Ye({}, Qt), r), {}, {
    ticks: Gg(r),
    viewBox: {
      x: 0,
      y: 0,
      width: n,
      height: i
    }
  })), a.top, a.top + a.height, t);
}, _L = {
  horizontal: !0,
  vertical: !0,
  // The ordinates of horizontal grid lines
  horizontalPoints: [],
  // The abscissas of vertical grid lines
  verticalPoints: [],
  stroke: "#ccc",
  fill: "none",
  // The fill of colors of grid lines
  verticalFill: [],
  horizontalFill: [],
  xAxisId: 0,
  yAxisId: 0,
  syncWithTicks: !1,
  zIndex: _e.grid
};
function yl(e) {
  var t = wc(), r = Oc(), n = rb(), i = Ye(Ye({}, je(e, _L)), {}, {
    x: L(e.x) ? e.x : n.left,
    y: L(e.y) ? e.y : n.top,
    width: L(e.width) ? e.width : n.width,
    height: L(e.height) ? e.height : n.height
  }), {
    xAxisId: a,
    yAxisId: o,
    x: l,
    y: u,
    width: s,
    height: c,
    syncWithTicks: f,
    horizontalValues: d,
    verticalValues: v
  } = i, p = Fe(), m = B((C) => Uh(C, "xAxis", a, p)), h = B((C) => Uh(C, "yAxis", o, p));
  if (!Wt(s) || !Wt(c) || !L(l) || !L(u))
    return null;
  var y = i.verticalCoordinatesGenerator || AL, b = i.horizontalCoordinatesGenerator || SL, {
    horizontalPoints: x,
    verticalPoints: w
  } = i;
  if ((!x || !x.length) && typeof b == "function") {
    var P = d && d.length, O = b({
      yAxis: h ? Ye(Ye({}, h), {}, {
        ticks: P ? d : h.ticks
      }) : void 0,
      width: t ?? s,
      height: r ?? c,
      offset: n
    }, P ? !0 : f);
    Fa(Array.isArray(O), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(typeof O, "]")), Array.isArray(O) && (x = O);
  }
  if ((!w || !w.length) && typeof y == "function") {
    var A = v && v.length, _ = y({
      xAxis: m ? Ye(Ye({}, m), {}, {
        ticks: A ? v : m.ticks
      }) : void 0,
      width: t ?? s,
      height: r ?? c,
      offset: n
    }, A ? !0 : f);
    Fa(Array.isArray(_), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(typeof _, "]")), Array.isArray(_) && (w = _);
  }
  return /* @__PURE__ */ g.createElement(nt, {
    zIndex: i.zIndex
  }, /* @__PURE__ */ g.createElement("g", {
    className: "recharts-cartesian-grid"
  }, /* @__PURE__ */ g.createElement(xL, {
    fill: i.fill,
    fillOpacity: i.fillOpacity,
    x: i.x,
    y: i.y,
    width: i.width,
    height: i.height,
    ry: i.ry
  }), /* @__PURE__ */ g.createElement(PL, Wr({}, i, {
    horizontalPoints: x
  })), /* @__PURE__ */ g.createElement(EL, Wr({}, i, {
    verticalPoints: w
  })), /* @__PURE__ */ g.createElement(wL, Wr({}, i, {
    offset: n,
    horizontalPoints: x,
    xAxis: m,
    yAxis: h
  })), /* @__PURE__ */ g.createElement(OL, Wr({}, i, {
    offset: n,
    verticalPoints: w,
    xAxis: m,
    yAxis: h
  }))));
}
yl.displayName = "CartesianGrid";
var jL = {}, ow = Je({
  name: "errorBars",
  initialState: jL,
  reducers: {
    addErrorBar: (e, t) => {
      var {
        itemId: r,
        errorBar: n
      } = t.payload;
      e[r] || (e[r] = []), e[r].push(n);
    },
    replaceErrorBar: (e, t) => {
      var {
        itemId: r,
        prev: n,
        next: i
      } = t.payload;
      e[r] && (e[r] = e[r].map((a) => a.dataKey === n.dataKey && a.direction === n.direction ? i : a));
    },
    removeErrorBar: (e, t) => {
      var {
        itemId: r,
        errorBar: n
      } = t.payload;
      e[r] && (e[r] = e[r].filter((i) => i.dataKey !== n.dataKey || i.direction !== n.direction));
    }
  }
}), {
  addErrorBar: qF,
  replaceErrorBar: UF,
  removeErrorBar: VF
} = ow.actions, IL = ow.reducer, kL = ["children"];
function CL(e, t) {
  if (e == null) return {};
  var r, n, i = TL(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function TL(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var NL = {
  data: [],
  xAxisId: "xAxis-0",
  yAxisId: "yAxis-0",
  dataPointFormatter: () => ({
    x: 0,
    y: 0,
    value: 0
  }),
  errorBarOffset: 0
}, DL = /* @__PURE__ */ lt(NL);
function lw(e) {
  var {
    children: t
  } = e, r = CL(e, kL);
  return /* @__PURE__ */ g.createElement(DL.Provider, {
    value: r
  }, t);
}
function gl(e, t) {
  var r, n, i = B((s) => cr(s, e)), a = B((s) => fr(s, t)), o = (r = i?.allowDataOverflow) !== null && r !== void 0 ? r : Ne.allowDataOverflow, l = (n = a?.allowDataOverflow) !== null && n !== void 0 ? n : De.allowDataOverflow, u = o || l;
  return {
    needClip: u,
    needClipX: o,
    needClipY: l
  };
}
function ed(e) {
  var {
    xAxisId: t,
    yAxisId: r,
    clipPathId: n
  } = e, i = ml(), {
    needClipX: a,
    needClipY: o,
    needClip: l
  } = gl(t, r);
  if (!l || !i)
    return null;
  var {
    x: u,
    y: s,
    width: c,
    height: f
  } = i;
  return /* @__PURE__ */ g.createElement("clipPath", {
    id: "clipPath-".concat(n)
  }, /* @__PURE__ */ g.createElement("rect", {
    x: a ? u : u - c / 2,
    y: o ? s : s - f / 2,
    width: a ? c : c * 2,
    height: o ? f : f * 2
  }));
}
var uw = (e, t, r, n) => Ut(e, "xAxis", t, n), sw = (e, t, r, n) => qt(e, "xAxis", t, n), cw = (e, t, r, n) => Ut(e, "yAxis", r, n), fw = (e, t, r, n) => qt(e, "yAxis", r, n), ML = S([ee, uw, cw, sw, fw], (e, t, r, n, i) => Tt(e, "xAxis") ? wr(t, n, !1) : wr(r, i, !1)), $L = (e, t, r, n, i) => i;
function RL(e) {
  return e.type === "line";
}
var LL = S([Fi, $L], (e, t) => e.filter(RL).find((r) => r.id === t)), zL = S([ee, uw, cw, sw, fw, LL, ML, Sc], (e, t, r, n, i, a, o, l) => {
  var {
    chartData: u,
    dataStartIndex: s,
    dataEndIndex: c
  } = l;
  if (!(a == null || t == null || r == null || n == null || i == null || n.length === 0 || i.length === 0 || o == null || e !== "horizontal" && e !== "vertical")) {
    var {
      dataKey: f,
      data: d
    } = a, v;
    if (d != null && d.length > 0 ? v = d : v = u?.slice(s, c + 1), v != null)
      return a2({
        layout: e,
        xAxis: t,
        yAxis: r,
        xAxisTicks: n,
        yAxisTicks: i,
        dataKey: f,
        bandSize: o,
        displayedData: v
      });
  }
});
function dw(e) {
  var t = Gr(e), r = 3, n = 2;
  if (t != null) {
    var {
      r: i,
      strokeWidth: a
    } = t, o = Number(i), l = Number(a);
    return (Number.isNaN(o) || o < 0) && (o = r), (Number.isNaN(l) || l < 0) && (l = n), {
      r: o,
      strokeWidth: l
    };
  }
  return {
    r,
    strokeWidth: n
  };
}
var BL = ["id"], FL = ["type", "layout", "connectNulls", "needClip", "shape"], WL = ["activeDot", "animateNewValues", "animationBegin", "animationDuration", "animationEasing", "connectNulls", "dot", "hide", "isAnimationActive", "label", "legendType", "xAxisId", "yAxisId", "id"];
function wi() {
  return wi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, wi.apply(null, arguments);
}
function ey(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function $t(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ey(Object(r), !0).forEach(function(n) {
      KL(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ey(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function KL(e, t, r) {
  return (t = qL(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function qL(e) {
  var t = UL(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function UL(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function td(e, t) {
  if (e == null) return {};
  var r, n, i = VL(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function VL(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var HL = (e) => {
  var {
    dataKey: t,
    name: r,
    stroke: n,
    legendType: i,
    hide: a
  } = e;
  return [{
    inactive: a,
    dataKey: t,
    type: i,
    color: n,
    value: Ar(r, t),
    payload: e
  }];
}, GL = /* @__PURE__ */ g.memo((e) => {
  var {
    dataKey: t,
    data: r,
    stroke: n,
    strokeWidth: i,
    fill: a,
    name: o,
    hide: l,
    unit: u,
    tooltipType: s,
    id: c
  } = e, f = {
    dataDefinedOnItem: r,
    getPosition: ar,
    settings: {
      stroke: n,
      strokeWidth: i,
      fill: a,
      dataKey: t,
      nameKey: void 0,
      name: Ar(o, t),
      hide: l,
      type: s,
      color: n,
      unit: u,
      graphicalItemId: c
    }
  };
  return /* @__PURE__ */ g.createElement(vl, {
    tooltipEntrySettings: f
  });
}), vw = (e, t) => "".concat(t, "px ").concat(e, "px");
function YL(e, t) {
  for (var r = e.length % 2 !== 0 ? [...e, 0] : e, n = [], i = 0; i < t; ++i)
    n.push(...r);
  return n;
}
var XL = (e, t, r) => {
  var n = r.reduce((d, v) => d + v, 0);
  if (!n)
    return vw(t, e);
  for (var i = Math.floor(e / n), a = e % n, o = [], l = 0, u = 0; l < r.length; u += (s = r[l]) !== null && s !== void 0 ? s : 0, ++l) {
    var s, c = r[l];
    if (c != null && u + c > a) {
      o = [...r.slice(0, l), a - u];
      break;
    }
  }
  var f = o.length % 2 === 0 ? [0, t] : [t];
  return [...YL(r, i), ...o, ...f].map((d) => "".concat(d, "px")).join(", ");
};
function ZL(e) {
  var {
    clipPathId: t,
    points: r,
    props: n
  } = e, {
    dot: i,
    dataKey: a,
    needClip: o
  } = n, {
    id: l
  } = n, u = td(n, BL), s = tt(u);
  return /* @__PURE__ */ g.createElement(Zx, {
    points: r,
    dot: i,
    className: "recharts-line-dots",
    dotClassName: "recharts-line-dot",
    dataKey: a,
    baseProps: s,
    needClip: o,
    clipPathId: t
  });
}
function JL(e) {
  var {
    showLabels: t,
    children: r,
    points: n
  } = e, i = gt(() => n?.map((a) => {
    var o, l, u = {
      x: (o = a.x) !== null && o !== void 0 ? o : 0,
      y: (l = a.y) !== null && l !== void 0 ? l : 0,
      width: 0,
      lowerWidth: 0,
      upperWidth: 0,
      height: 0
    };
    return $t($t({}, u), {}, {
      value: a.value,
      payload: a.payload,
      viewBox: u,
      /*
       * Line is not passing parentViewBox to the LabelList so the labels can escape - looks like a bug, should we pass parentViewBox?
       * Or should this just be the root chart viewBox?
       */
      parentViewBox: void 0,
      fill: void 0
    });
  }), [n]);
  return /* @__PURE__ */ g.createElement(Bf, {
    value: t ? i : void 0
  }, r);
}
function ty(e) {
  var {
    clipPathId: t,
    pathRef: r,
    points: n,
    strokeDasharray: i,
    props: a
  } = e, {
    type: o,
    layout: l,
    connectNulls: u,
    needClip: s,
    shape: c
  } = a, f = td(a, FL), d = $t($t({}, Ze(f)), {}, {
    fill: "none",
    className: "recharts-line-curve",
    clipPath: s ? "url(#clipPath-".concat(t, ")") : void 0,
    points: n,
    type: o,
    layout: l,
    connectNulls: u,
    strokeDasharray: i ?? a.strokeDasharray
  });
  return /* @__PURE__ */ g.createElement(g.Fragment, null, n?.length > 1 && /* @__PURE__ */ g.createElement(Uf, wi({
    shapeType: "curve",
    option: c
  }, d, {
    pathRef: r
  })), /* @__PURE__ */ g.createElement(ZL, {
    points: n,
    clipPathId: t,
    props: a
  }));
}
function QL(e) {
  try {
    return e && e.getTotalLength && e.getTotalLength() || 0;
  } catch {
    return 0;
  }
}
function e2(e) {
  var {
    clipPathId: t,
    props: r,
    pathRef: n,
    previousPointsRef: i,
    longestAnimatedLengthRef: a
  } = e, {
    points: o,
    strokeDasharray: l,
    isAnimationActive: u,
    animationBegin: s,
    animationDuration: c,
    animationEasing: f,
    animateNewValues: d,
    width: v,
    height: p,
    onAnimationEnd: m,
    onAnimationStart: h
  } = r, y = i.current, b = Tn(o, "recharts-line-"), x = H(b), [w, P] = re(!1), O = !w, A = ie(() => {
    typeof m == "function" && m(), P(!1);
  }, [m]), _ = ie(() => {
    typeof h == "function" && h(), P(!0);
  }, [h]), C = QL(n.current), T = H(0);
  x.current !== b && (T.current = a.current, x.current = b);
  var N = T.current;
  return /* @__PURE__ */ g.createElement(JL, {
    points: o,
    showLabels: O
  }, r.children, /* @__PURE__ */ g.createElement(Cn, {
    animationId: b,
    begin: s,
    duration: c,
    isActive: u,
    easing: f,
    onAnimationEnd: A,
    onAnimationStart: _,
    key: b
  }, (j) => {
    var I = oe(N, C + N, j), $ = Math.min(I, C), K;
    if (u)
      if (l) {
        var V = "".concat(l).split(/[,\s]+/gim).map((q) => parseFloat(q));
        K = XL($, C, V);
      } else
        K = vw(C, $);
    else
      K = l == null ? void 0 : String(l);
    if (j > 0 && C > 0 && (i.current = o, a.current = Math.max(a.current, $)), y) {
      var U = y.length / o.length, X = j === 1 ? o : o.map((q, Z) => {
        var k = Math.floor(Z * U);
        if (y[k]) {
          var W = y[k];
          return $t($t({}, q), {}, {
            x: oe(W.x, q.x, j),
            y: oe(W.y, q.y, j)
          });
        }
        return d ? $t($t({}, q), {}, {
          x: oe(v * 2, q.x, j),
          y: oe(p / 2, q.y, j)
        }) : $t($t({}, q), {}, {
          x: q.x,
          y: q.y
        });
      });
      return i.current = X, /* @__PURE__ */ g.createElement(ty, {
        props: r,
        points: X,
        clipPathId: t,
        pathRef: n,
        strokeDasharray: K
      });
    }
    return /* @__PURE__ */ g.createElement(ty, {
      props: r,
      points: o,
      clipPathId: t,
      pathRef: n,
      strokeDasharray: K
    });
  }), /* @__PURE__ */ g.createElement(cl, {
    label: r.label
  }));
}
function t2(e) {
  var {
    clipPathId: t,
    props: r
  } = e, n = H(null), i = H(0), a = H(null);
  return /* @__PURE__ */ g.createElement(e2, {
    props: r,
    clipPathId: t,
    previousPointsRef: n,
    longestAnimatedLengthRef: i,
    pathRef: a
  });
}
var r2 = (e, t) => {
  var r, n;
  return {
    x: (r = e.x) !== null && r !== void 0 ? r : void 0,
    y: (n = e.y) !== null && n !== void 0 ? n : void 0,
    value: e.value,
    // getValueByDataKey does not validate the output type
    errorVal: le(e.payload, t)
  };
};
class n2 extends Jw {
  render() {
    var {
      hide: t,
      dot: r,
      points: n,
      className: i,
      xAxisId: a,
      yAxisId: o,
      top: l,
      left: u,
      width: s,
      height: c,
      id: f,
      needClip: d,
      zIndex: v
    } = this.props;
    if (t)
      return null;
    var p = te("recharts-line", i), m = f, {
      r: h,
      strokeWidth: y
    } = dw(r), b = qf(r), x = h * 2 + y, w = d ? "url(#clipPath-".concat(b ? "" : "dots-").concat(m, ")") : void 0;
    return /* @__PURE__ */ g.createElement(nt, {
      zIndex: v
    }, /* @__PURE__ */ g.createElement(Oe, {
      className: p
    }, d && /* @__PURE__ */ g.createElement("defs", null, /* @__PURE__ */ g.createElement(ed, {
      clipPathId: m,
      xAxisId: a,
      yAxisId: o
    }), !b && /* @__PURE__ */ g.createElement("clipPath", {
      id: "clipPath-dots-".concat(m)
    }, /* @__PURE__ */ g.createElement("rect", {
      x: u - x / 2,
      y: l - x / 2,
      width: s + x,
      height: c + x
    }))), /* @__PURE__ */ g.createElement(lw, {
      xAxisId: a,
      yAxisId: o,
      data: n,
      dataPointFormatter: r2,
      errorBarOffset: 0
    }, /* @__PURE__ */ g.createElement(t2, {
      props: this.props,
      clipPathId: m
    }))), /* @__PURE__ */ g.createElement(Ks, {
      activeDot: this.props.activeDot,
      points: n,
      mainColor: this.props.stroke,
      itemDataKey: this.props.dataKey,
      clipPath: w
    }));
  }
}
var pw = {
  activeDot: !0,
  animateNewValues: !0,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease",
  connectNulls: !1,
  dot: !0,
  fill: "#fff",
  hide: !1,
  isAnimationActive: "auto",
  label: !1,
  legendType: "line",
  stroke: "#3182bd",
  strokeWidth: 1,
  xAxisId: 0,
  yAxisId: 0,
  zIndex: _e.line,
  type: "linear"
};
function i2(e) {
  var t = je(e, pw), {
    activeDot: r,
    animateNewValues: n,
    animationBegin: i,
    animationDuration: a,
    animationEasing: o,
    connectNulls: l,
    dot: u,
    hide: s,
    isAnimationActive: c,
    label: f,
    legendType: d,
    xAxisId: v,
    yAxisId: p,
    id: m
  } = t, h = td(t, WL), {
    needClip: y
  } = gl(v, p), b = ml(), x = Sr(), w = Fe(), P = B((T) => zL(T, v, p, w, m));
  if (x !== "horizontal" && x !== "vertical" || P == null || b == null)
    return null;
  var {
    height: O,
    width: A,
    x: _,
    y: C
  } = b;
  return /* @__PURE__ */ g.createElement(n2, wi({}, h, {
    id: m,
    connectNulls: l,
    dot: u,
    activeDot: r,
    animateNewValues: n,
    animationBegin: i,
    animationDuration: a,
    animationEasing: o,
    isAnimationActive: c,
    hide: s,
    label: f,
    legendType: d,
    xAxisId: v,
    yAxisId: p,
    points: P,
    layout: x,
    height: O,
    width: A,
    left: _,
    top: C,
    needClip: y
  }));
}
function a2(e) {
  var {
    layout: t,
    xAxis: r,
    yAxis: n,
    xAxisTicks: i,
    yAxisTicks: a,
    dataKey: o,
    bandSize: l,
    displayedData: u
  } = e;
  return u.map((s, c) => {
    var f = le(s, o);
    if (t === "horizontal") {
      var d = Ba({
        axis: r,
        ticks: i,
        bandSize: l,
        entry: s,
        index: c
      }), v = ge(f) ? null : n.scale.map(f);
      return {
        x: d,
        y: v ?? null,
        value: f,
        payload: s
      };
    }
    var p = ge(f) ? null : r.scale.map(f), m = Ba({
      axis: n,
      ticks: a,
      bandSize: l,
      entry: s,
      index: c
    });
    return p == null || m == null ? null : {
      x: p,
      y: m,
      value: f,
      payload: s
    };
  }).filter(Boolean);
}
function o2(e) {
  var t = je(e, pw), r = Fe();
  return /* @__PURE__ */ g.createElement(pl, {
    id: t.id,
    type: "line"
  }, (n) => /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(Yf, {
    legendPayload: HL(t)
  }), /* @__PURE__ */ g.createElement(GL, {
    dataKey: t.dataKey,
    data: t.data,
    stroke: t.stroke,
    strokeWidth: t.strokeWidth,
    fill: t.fill,
    name: t.name,
    hide: t.hide,
    unit: t.unit,
    tooltipType: t.tooltipType,
    id: n
  }), /* @__PURE__ */ g.createElement(Xf, {
    type: "line",
    id: n,
    data: t.data,
    xAxisId: t.xAxisId,
    yAxisId: t.yAxisId,
    zAxisId: 0,
    dataKey: t.dataKey,
    hide: t.hide,
    isPanorama: r
  }), /* @__PURE__ */ g.createElement(i2, wi({}, t, {
    id: n
  }))));
}
var hw = /* @__PURE__ */ g.memo(o2, on);
hw.displayName = "Line";
function Vt(e, t) {
  var r, n;
  return (r = (n = e.graphicalItems.cartesianItems.find((i) => i.id === t)) === null || n === void 0 ? void 0 : n.xAxisId) !== null && r !== void 0 ? r : Jx;
}
function Ht(e, t) {
  var r, n;
  return (r = (n = e.graphicalItems.cartesianItems.find((i) => i.id === t)) === null || n === void 0 ? void 0 : n.yAxisId) !== null && r !== void 0 ? r : Jx;
}
var mw = (e, t, r) => Ut(e, "xAxis", Vt(e, t), r), yw = (e, t, r) => qt(e, "xAxis", Vt(e, t), r), gw = (e, t, r) => Ut(e, "yAxis", Ht(e, t), r), bw = (e, t, r) => qt(e, "yAxis", Ht(e, t), r), l2 = S([ee, mw, gw, yw, bw], (e, t, r, n, i) => Tt(e, "xAxis") ? wr(t, n, !1) : wr(r, i, !1)), u2 = (e, t) => t, xw = S([Fi, u2], (e, t) => e.filter((r) => r.type === "area").find((r) => r.id === t)), ww = (e) => {
  var t = ee(e), r = Tt(t, "xAxis");
  return r ? "yAxis" : "xAxis";
}, s2 = (e, t) => {
  var r = ww(e);
  return r === "yAxis" ? Ht(e, t) : Vt(e, t);
}, c2 = (e, t, r) => so(e, ww(e), s2(e, t), r), f2 = S([xw, c2], (e, t) => {
  var r;
  if (!(e == null || t == null)) {
    var {
      stackId: n
    } = e, i = Go(e);
    if (!(n == null || i == null)) {
      var a = (r = t[n]) === null || r === void 0 ? void 0 : r.stackedData, o = a?.find((l) => l.key === i);
      if (o != null)
        return o.map((l) => [l[0], l[1]]);
    }
  }
}), d2 = S([ee, mw, gw, yw, bw, f2, Sb, l2, xw, pj], (e, t, r, n, i, a, o, l, u, s) => {
  var {
    chartData: c,
    dataStartIndex: f,
    dataEndIndex: d
  } = o;
  if (!(u == null || e !== "horizontal" && e !== "vertical" || t == null || r == null || n == null || i == null || n.length === 0 || i.length === 0 || l == null)) {
    var {
      data: v
    } = u, p;
    if (v && v.length > 0 ? p = v : p = c?.slice(f, d + 1), p != null)
      return T2({
        layout: e,
        xAxis: t,
        yAxis: r,
        xAxisTicks: n,
        yAxisTicks: i,
        dataStartIndex: f,
        areaSettings: u,
        stackedData: a,
        displayedData: p,
        chartBaseValue: s,
        bandSize: l
      });
  }
}), v2 = ["id"], p2 = ["activeDot", "animationBegin", "animationDuration", "animationEasing", "connectNulls", "dot", "fill", "fillOpacity", "hide", "isAnimationActive", "legendType", "stroke", "xAxisId", "yAxisId"];
function Hr() {
  return Hr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Hr.apply(null, arguments);
}
function Ow(e, t) {
  if (e == null) return {};
  var r, n, i = h2(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function h2(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function ry(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function gn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ry(Object(r), !0).forEach(function(n) {
      m2(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ry(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function m2(e, t, r) {
  return (t = y2(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function y2(e) {
  var t = g2(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function g2(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function bo(e, t) {
  return e && e !== "none" ? e : t;
}
var b2 = (e) => {
  var {
    dataKey: t,
    name: r,
    stroke: n,
    fill: i,
    legendType: a,
    hide: o
  } = e;
  return [{
    inactive: o,
    dataKey: t,
    type: a,
    color: bo(n, i),
    value: Ar(r, t),
    payload: e
  }];
}, x2 = /* @__PURE__ */ g.memo((e) => {
  var {
    dataKey: t,
    data: r,
    stroke: n,
    strokeWidth: i,
    fill: a,
    name: o,
    hide: l,
    unit: u,
    tooltipType: s,
    id: c
  } = e, f = {
    dataDefinedOnItem: r,
    getPosition: ar,
    settings: {
      stroke: n,
      strokeWidth: i,
      fill: a,
      dataKey: t,
      nameKey: void 0,
      name: Ar(o, t),
      hide: l,
      type: s,
      color: bo(n, a),
      unit: u,
      graphicalItemId: c
    }
  };
  return /* @__PURE__ */ g.createElement(vl, {
    tooltipEntrySettings: f
  });
});
function w2(e) {
  var {
    clipPathId: t,
    points: r,
    props: n
  } = e, {
    needClip: i,
    dot: a,
    dataKey: o
  } = n, l = tt(n);
  return /* @__PURE__ */ g.createElement(Zx, {
    points: r,
    dot: a,
    className: "recharts-area-dots",
    dotClassName: "recharts-area-dot",
    dataKey: o,
    baseProps: l,
    needClip: i,
    clipPathId: t
  });
}
function O2(e) {
  var {
    showLabels: t,
    children: r,
    points: n
  } = e, i = n.map((a) => {
    var o, l, u = {
      x: (o = a.x) !== null && o !== void 0 ? o : 0,
      y: (l = a.y) !== null && l !== void 0 ? l : 0,
      width: 0,
      lowerWidth: 0,
      upperWidth: 0,
      height: 0
    };
    return gn(gn({}, u), {}, {
      value: a.value,
      payload: a.payload,
      parentViewBox: void 0,
      viewBox: u,
      fill: void 0
    });
  });
  return /* @__PURE__ */ g.createElement(Bf, {
    value: t ? i : void 0
  }, r);
}
function ny(e) {
  var {
    points: t,
    baseLine: r,
    needClip: n,
    clipPathId: i,
    props: a
  } = e, {
    layout: o,
    type: l,
    stroke: u,
    connectNulls: s,
    isRange: c
  } = a, {
    id: f
  } = a, d = Ow(a, v2), v = tt(d), p = Ze(d);
  return /* @__PURE__ */ g.createElement(g.Fragment, null, t?.length > 1 && /* @__PURE__ */ g.createElement(Oe, {
    clipPath: n ? "url(#clipPath-".concat(i, ")") : void 0
  }, /* @__PURE__ */ g.createElement(xn, Hr({}, p, {
    id: f,
    points: t,
    connectNulls: s,
    type: l,
    baseLine: r,
    layout: o,
    stroke: "none",
    className: "recharts-area-area"
  })), u !== "none" && /* @__PURE__ */ g.createElement(xn, Hr({}, v, {
    className: "recharts-area-curve",
    layout: o,
    type: l,
    connectNulls: s,
    fill: "none",
    points: t
  })), u !== "none" && c && Array.isArray(r) && /* @__PURE__ */ g.createElement(xn, Hr({}, v, {
    className: "recharts-area-curve",
    layout: o,
    type: l,
    connectNulls: s,
    fill: "none",
    points: r
  }))), /* @__PURE__ */ g.createElement(w2, {
    points: t,
    props: d,
    clipPathId: i
  }));
}
function P2(e) {
  var t, r, {
    alpha: n,
    baseLine: i,
    points: a,
    strokeWidth: o
  } = e, l = (t = a[0]) === null || t === void 0 ? void 0 : t.y, u = (r = a[a.length - 1]) === null || r === void 0 ? void 0 : r.y;
  if (!G(l) || !G(u))
    return null;
  var s = n * Math.abs(l - u), c = Math.max(...a.map((f) => f.x || 0));
  return L(i) ? c = Math.max(i, c) : i && Array.isArray(i) && i.length && (c = Math.max(...i.map((f) => f.x || 0), c)), L(c) ? /* @__PURE__ */ g.createElement("rect", {
    x: 0,
    y: l < u ? l : l - s,
    width: c + (o ? parseInt("".concat(o), 10) : 1),
    height: Math.floor(s)
  }) : null;
}
function E2(e) {
  var t, r, {
    alpha: n,
    baseLine: i,
    points: a,
    strokeWidth: o
  } = e, l = (t = a[0]) === null || t === void 0 ? void 0 : t.x, u = (r = a[a.length - 1]) === null || r === void 0 ? void 0 : r.x;
  if (!G(l) || !G(u))
    return null;
  var s = n * Math.abs(l - u), c = Math.max(...a.map((f) => f.y || 0));
  return L(i) ? c = Math.max(i, c) : i && Array.isArray(i) && i.length && (c = Math.max(...i.map((f) => f.y || 0), c)), L(c) ? /* @__PURE__ */ g.createElement("rect", {
    x: l < u ? l : l - s,
    y: 0,
    width: s,
    height: Math.floor(c + (o ? parseInt("".concat(o), 10) : 1))
  }) : null;
}
function A2(e) {
  var {
    alpha: t,
    layout: r,
    points: n,
    baseLine: i,
    strokeWidth: a
  } = e;
  return r === "vertical" ? /* @__PURE__ */ g.createElement(P2, {
    alpha: t,
    points: n,
    baseLine: i,
    strokeWidth: a
  }) : /* @__PURE__ */ g.createElement(E2, {
    alpha: t,
    points: n,
    baseLine: i,
    strokeWidth: a
  });
}
function S2(e) {
  var {
    needClip: t,
    clipPathId: r,
    props: n,
    previousPointsRef: i,
    previousBaselineRef: a
  } = e, {
    points: o,
    baseLine: l,
    isAnimationActive: u,
    animationBegin: s,
    animationDuration: c,
    animationEasing: f,
    onAnimationStart: d,
    onAnimationEnd: v
  } = n, p = gt(() => ({
    points: o,
    baseLine: l
  }), [o, l]), m = Tn(p, "recharts-area-"), h = Pc(), [y, b] = re(!1), x = !y, w = ie(() => {
    typeof v == "function" && v(), b(!1);
  }, [v]), P = ie(() => {
    typeof d == "function" && d(), b(!0);
  }, [d]);
  if (h == null)
    return null;
  var O = i.current, A = a.current;
  return /* @__PURE__ */ g.createElement(O2, {
    showLabels: x,
    points: o
  }, n.children, /* @__PURE__ */ g.createElement(Cn, {
    animationId: m,
    begin: s,
    duration: c,
    isActive: u,
    easing: f,
    onAnimationEnd: w,
    onAnimationStart: P,
    key: m
  }, (_) => {
    if (O) {
      var C = O.length / o.length, T = (
        /*
         * Here it is important that at the very end of the animation, on the last frame,
         * we render the original points without any interpolation.
         * This is needed because the code above is checking for reference equality to decide if the animation should run
         * and if we create a new array instance (even if the numbers were the same)
         * then we would break animations.
         */
        _ === 1 ? o : o.map((j, I) => {
          var $ = Math.floor(I * C);
          if (O[$]) {
            var K = O[$];
            return gn(gn({}, j), {}, {
              x: oe(K.x, j.x, _),
              y: oe(K.y, j.y, _)
            });
          }
          return j;
        })
      ), N;
      return L(l) ? N = oe(A, l, _) : ge(l) || It(l) ? N = oe(A, 0, _) : N = l.map((j, I) => {
        var $ = Math.floor(I * C);
        if (Array.isArray(A) && A[$]) {
          var K = A[$];
          return gn(gn({}, j), {}, {
            x: oe(K.x, j.x, _),
            y: oe(K.y, j.y, _)
          });
        }
        return j;
      }), _ > 0 && (i.current = T, a.current = N), /* @__PURE__ */ g.createElement(ny, {
        points: T,
        baseLine: N,
        needClip: t,
        clipPathId: r,
        props: n
      });
    }
    return _ > 0 && (i.current = o, a.current = l), /* @__PURE__ */ g.createElement(Oe, null, u && /* @__PURE__ */ g.createElement("defs", null, /* @__PURE__ */ g.createElement("clipPath", {
      id: "animationClipPath-".concat(r)
    }, /* @__PURE__ */ g.createElement(A2, {
      alpha: _,
      points: o,
      baseLine: l,
      layout: h,
      strokeWidth: n.strokeWidth
    }))), /* @__PURE__ */ g.createElement(Oe, {
      clipPath: "url(#animationClipPath-".concat(r, ")")
    }, /* @__PURE__ */ g.createElement(ny, {
      points: o,
      baseLine: l,
      needClip: t,
      clipPathId: r,
      props: n
    })));
  }), /* @__PURE__ */ g.createElement(cl, {
    label: n.label
  }));
}
function _2(e) {
  var {
    needClip: t,
    clipPathId: r,
    props: n
  } = e, i = H(null), a = H();
  return /* @__PURE__ */ g.createElement(S2, {
    needClip: t,
    clipPathId: r,
    props: n,
    previousPointsRef: i,
    previousBaselineRef: a
  });
}
class j2 extends Ey {
  render() {
    var {
      hide: t,
      dot: r,
      points: n,
      className: i,
      top: a,
      left: o,
      needClip: l,
      xAxisId: u,
      yAxisId: s,
      width: c,
      height: f,
      id: d,
      baseLine: v,
      zIndex: p
    } = this.props;
    if (t)
      return null;
    var m = te("recharts-area", i), h = d, {
      r: y,
      strokeWidth: b
    } = dw(r), x = qf(r), w = y * 2 + b, P = l ? "url(#clipPath-".concat(x ? "" : "dots-").concat(h, ")") : void 0;
    return /* @__PURE__ */ g.createElement(nt, {
      zIndex: p
    }, /* @__PURE__ */ g.createElement(Oe, {
      className: m
    }, l && /* @__PURE__ */ g.createElement("defs", null, /* @__PURE__ */ g.createElement(ed, {
      clipPathId: h,
      xAxisId: u,
      yAxisId: s
    }), !x && /* @__PURE__ */ g.createElement("clipPath", {
      id: "clipPath-dots-".concat(h)
    }, /* @__PURE__ */ g.createElement("rect", {
      x: o - w / 2,
      y: a - w / 2,
      width: c + w,
      height: f + w
    }))), /* @__PURE__ */ g.createElement(_2, {
      needClip: l,
      clipPathId: h,
      props: this.props
    })), /* @__PURE__ */ g.createElement(Ks, {
      points: n,
      mainColor: bo(this.props.stroke, this.props.fill),
      itemDataKey: this.props.dataKey,
      activeDot: this.props.activeDot,
      clipPath: P
    }), this.props.isRange && Array.isArray(v) && /* @__PURE__ */ g.createElement(Ks, {
      points: v,
      mainColor: bo(this.props.stroke, this.props.fill),
      itemDataKey: this.props.dataKey,
      activeDot: this.props.activeDot,
      clipPath: P
    }));
  }
}
var I2 = {
  activeDot: !0,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease",
  connectNulls: !1,
  dot: !1,
  fill: "#3182bd",
  fillOpacity: 0.6,
  hide: !1,
  isAnimationActive: "auto",
  legendType: "line",
  stroke: "#3182bd",
  strokeWidth: 1,
  type: "linear",
  label: !1,
  xAxisId: 0,
  yAxisId: 0,
  zIndex: _e.area
};
function k2(e) {
  var t, {
    activeDot: r,
    animationBegin: n,
    animationDuration: i,
    animationEasing: a,
    connectNulls: o,
    dot: l,
    fill: u,
    fillOpacity: s,
    hide: c,
    isAnimationActive: f,
    legendType: d,
    stroke: v,
    xAxisId: p,
    yAxisId: m
  } = e, h = Ow(e, p2), y = Sr(), b = Ox(), {
    needClip: x
  } = gl(p, m), w = Fe(), {
    points: P,
    isRange: O,
    baseLine: A
  } = (t = B((I) => d2(I, e.id, w))) !== null && t !== void 0 ? t : {}, _ = ml();
  if (y !== "horizontal" && y !== "vertical" || _ == null || b !== "AreaChart" && b !== "ComposedChart")
    return null;
  var {
    height: C,
    width: T,
    x: N,
    y: j
  } = _;
  return !P || !P.length ? null : /* @__PURE__ */ g.createElement(j2, Hr({}, h, {
    activeDot: r,
    animationBegin: n,
    animationDuration: i,
    animationEasing: a,
    baseLine: A,
    connectNulls: o,
    dot: l,
    fill: u,
    fillOpacity: s,
    height: C,
    hide: c,
    layout: y,
    isAnimationActive: f,
    isRange: O,
    legendType: d,
    needClip: x,
    points: P,
    stroke: v,
    width: T,
    left: N,
    top: j,
    xAxisId: p,
    yAxisId: m
  }));
}
var C2 = (e, t, r, n, i) => {
  var a = r ?? t;
  if (L(a))
    return a;
  var o = e === "horizontal" ? i : n, l = o.scale.domain();
  if (o.type === "number") {
    var u = Math.max(l[0], l[1]), s = Math.min(l[0], l[1]);
    return a === "dataMin" ? s : a === "dataMax" || u < 0 ? u : Math.max(Math.min(l[0], l[1]), 0);
  }
  return a === "dataMin" ? l[0] : a === "dataMax" ? l[1] : l[0];
};
function T2(e) {
  var {
    areaSettings: {
      connectNulls: t,
      baseValue: r,
      dataKey: n
    },
    stackedData: i,
    layout: a,
    chartBaseValue: o,
    xAxis: l,
    yAxis: u,
    displayedData: s,
    dataStartIndex: c,
    xAxisTicks: f,
    yAxisTicks: d,
    bandSize: v
  } = e, p = i && i.length, m = C2(a, o, r, l, u), h = a === "horizontal", y = !1, b = s.map((w, P) => {
    var O, A, _, C;
    if (p)
      C = i[c + P];
    else {
      var T = le(w, n);
      Array.isArray(T) ? (C = T, y = !0) : C = [m, T];
    }
    var N = (O = (A = C) === null || A === void 0 ? void 0 : A[1]) !== null && O !== void 0 ? O : null, j = N == null || p && !t && le(w, n) == null;
    if (h) {
      var I;
      return {
        x: Ba({
          axis: l,
          ticks: f,
          bandSize: v,
          entry: w,
          index: P
        }),
        y: j ? null : (I = u.scale.map(N)) !== null && I !== void 0 ? I : null,
        value: C,
        payload: w
      };
    }
    return {
      x: j ? null : (_ = l.scale.map(N)) !== null && _ !== void 0 ? _ : null,
      y: Ba({
        axis: u,
        ticks: d,
        bandSize: v,
        entry: w,
        index: P
      }),
      value: C,
      payload: w
    };
  }), x;
  return p || y ? x = b.map((w) => {
    var P, O = Array.isArray(w.value) ? w.value[0] : null;
    if (h) {
      var A;
      return {
        x: w.x,
        y: O != null && w.y != null && (A = u.scale.map(O)) !== null && A !== void 0 ? A : null,
        payload: w.payload
      };
    }
    return {
      x: O != null && (P = l.scale.map(O)) !== null && P !== void 0 ? P : null,
      y: w.y,
      payload: w.payload
    };
  }) : x = h ? u.scale.map(m) : l.scale.map(m), {
    points: b,
    baseLine: x ?? 0,
    isRange: y
  };
}
function N2(e) {
  var t = je(e, I2), r = Fe();
  return /* @__PURE__ */ g.createElement(pl, {
    id: t.id,
    type: "area"
  }, (n) => /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(Yf, {
    legendPayload: b2(t)
  }), /* @__PURE__ */ g.createElement(x2, {
    dataKey: t.dataKey,
    data: t.data,
    stroke: t.stroke,
    strokeWidth: t.strokeWidth,
    fill: t.fill,
    name: t.name,
    hide: t.hide,
    unit: t.unit,
    tooltipType: t.tooltipType,
    id: n
  }), /* @__PURE__ */ g.createElement(Xf, {
    type: "area",
    id: n,
    data: t.data,
    dataKey: t.dataKey,
    xAxisId: t.xAxisId,
    yAxisId: t.yAxisId,
    zAxisId: 0,
    stackId: Yg(t.stackId),
    hide: t.hide,
    barSize: void 0,
    baseValue: t.baseValue,
    isPanorama: r,
    connectNulls: t.connectNulls
  }), /* @__PURE__ */ g.createElement(k2, Hr({}, t, {
    id: n
  }))));
}
var Pw = /* @__PURE__ */ g.memo(N2, on);
Pw.displayName = "Area";
var D2 = process.env.NODE_ENV === "production", Xu = "Invariant failed";
function M2(e, t) {
  if (D2)
    throw new Error(Xu);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(Xu, ": ").concat(r) : Xu;
  throw new Error(n);
}
function qs() {
  return qs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, qs.apply(null, arguments);
}
function rd(e) {
  return /* @__PURE__ */ g.createElement(Uf, qs({
    shapeType: "rectangle",
    activeClassName: "recharts-active-bar",
    inActiveClassName: "recharts-inactive-bar"
  }, e));
}
var $2 = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return (n, i) => {
    if (L(t)) return t;
    var a = L(n) || ge(n);
    return a ? t(n, i) : (a || M2(!1, "minPointSize callback function received a value with type of ".concat(typeof n, ". Currently only numbers or null/undefined are supported.")), r);
  };
}, R2 = (e, t, r) => r, L2 = (e, t) => t, Yi = S([Fi, L2], (e, t) => e.filter((r) => r.type === "bar").find((r) => r.id === t)), z2 = S([Yi], (e) => e?.maxBarSize), B2 = (e, t, r, n) => n, F2 = S([ee, Fi, Vt, Ht, R2], (e, t, r, n, i) => t.filter((a) => e === "horizontal" ? a.xAxisId === r : a.yAxisId === n).filter((a) => a.isPanorama === i).filter((a) => a.hide === !1).filter((a) => a.type === "bar")), W2 = (e, t, r) => {
  var n = ee(e), i = Vt(e, t), a = Ht(e, t);
  if (!(i == null || a == null))
    return n === "horizontal" ? so(e, "yAxis", a, r) : so(e, "xAxis", i, r);
}, K2 = (e, t) => {
  var r = ee(e), n = Vt(e, t), i = Ht(e, t);
  if (!(n == null || i == null))
    return r === "horizontal" ? qh(e, "xAxis", n) : qh(e, "yAxis", i);
}, q2 = S([F2, vj, K2], wR), U2 = (e, t, r) => {
  var n, i, a = Yi(e, t);
  if (a == null)
    return 0;
  var o = Vt(e, t), l = Ht(e, t);
  if (o == null || l == null)
    return 0;
  var u = ee(e), s = Lb(e), {
    maxBarSize: c
  } = a, f = ge(c) ? s : c, d, v;
  return u === "horizontal" ? (d = Ut(e, "xAxis", o, r), v = qt(e, "xAxis", o, r)) : (d = Ut(e, "yAxis", l, r), v = qt(e, "yAxis", l, r)), (n = (i = wr(d, v, !0)) !== null && i !== void 0 ? i : f) !== null && n !== void 0 ? n : 0;
}, Ew = (e, t, r) => {
  var n = ee(e), i = Vt(e, t), a = Ht(e, t);
  if (!(i == null || a == null)) {
    var o, l;
    return n === "horizontal" ? (o = Ut(e, "xAxis", i, r), l = qt(e, "xAxis", i, r)) : (o = Ut(e, "yAxis", a, r), l = qt(e, "yAxis", a, r)), wr(o, l);
  }
}, V2 = S([q2, Lb, dj, zb, U2, Ew, z2], SR), H2 = (e, t, r) => {
  var n = Vt(e, t);
  if (n != null)
    return Ut(e, "xAxis", n, r);
}, G2 = (e, t, r) => {
  var n = Ht(e, t);
  if (n != null)
    return Ut(e, "yAxis", n, r);
}, Y2 = (e, t, r) => {
  var n = Vt(e, t);
  if (n != null)
    return qt(e, "xAxis", n, r);
}, X2 = (e, t, r) => {
  var n = Ht(e, t);
  if (n != null)
    return qt(e, "yAxis", n, r);
}, Z2 = S([V2, Yi], jR), J2 = S([W2, Yi], _R), Q2 = S([$e, gc, H2, G2, Y2, X2, Z2, ee, Sb, Ew, J2, Yi, B2], (e, t, r, n, i, a, o, l, u, s, c, f, d) => {
  var {
    chartData: v,
    dataStartIndex: p,
    dataEndIndex: m
  } = u;
  if (!(f == null || o == null || t == null || l !== "horizontal" && l !== "vertical" || r == null || n == null || i == null || a == null || s == null)) {
    var {
      data: h
    } = f, y;
    if (h != null && h.length > 0 ? y = h : y = v?.slice(p, m + 1), y != null)
      return _z({
        layout: l,
        barSettings: f,
        pos: o,
        parentViewBox: t,
        bandSize: s,
        xAxis: r,
        yAxis: n,
        xAxisTicks: i,
        yAxisTicks: a,
        stackedData: c,
        displayedData: y,
        offset: e,
        cells: d,
        dataStartIndex: p
      });
  }
}), ez = ["index"];
function Us() {
  return Us = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Us.apply(null, arguments);
}
function tz(e, t) {
  if (e == null) return {};
  var r, n, i = rz(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function rz(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var Aw = /* @__PURE__ */ lt(void 0), nz = (e) => {
  var t = yt(Aw);
  if (t != null)
    return t.stackId;
  if (e != null)
    return Yg(e);
}, iz = (e, t) => "recharts-bar-stack-clip-path-".concat(e, "-").concat(t), az = (e) => {
  var t = yt(Aw);
  if (t != null) {
    var {
      stackId: r
    } = t;
    return "url(#".concat(iz(r, e), ")");
  }
}, Sw = (e) => {
  var {
    index: t
  } = e, r = tz(e, ez), n = az(t);
  return /* @__PURE__ */ g.createElement(Oe, Us({
    className: "recharts-bar-stack-layer",
    clipPath: n
  }, r));
}, oz = ["onMouseEnter", "onMouseLeave", "onClick"], lz = ["value", "background", "tooltipPosition"], uz = ["id"], sz = ["onMouseEnter", "onClick", "onMouseLeave"];
function Er() {
  return Er = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Er.apply(null, arguments);
}
function iy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Qe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? iy(Object(r), !0).forEach(function(n) {
      cz(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : iy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function cz(e, t, r) {
  return (t = fz(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function fz(e) {
  var t = dz(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function dz(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function xo(e, t) {
  if (e == null) return {};
  var r, n, i = vz(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function vz(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var pz = (e) => {
  var {
    dataKey: t,
    name: r,
    fill: n,
    legendType: i,
    hide: a
  } = e;
  return [{
    inactive: a,
    dataKey: t,
    type: i,
    color: n,
    value: Ar(r, t),
    payload: e
  }];
}, hz = /* @__PURE__ */ g.memo((e) => {
  var {
    dataKey: t,
    stroke: r,
    strokeWidth: n,
    fill: i,
    name: a,
    hide: o,
    unit: l,
    tooltipType: u,
    id: s
  } = e, c = {
    dataDefinedOnItem: void 0,
    getPosition: ar,
    settings: {
      stroke: r,
      strokeWidth: n,
      fill: i,
      dataKey: t,
      nameKey: void 0,
      name: Ar(a, t),
      hide: o,
      type: u,
      color: i,
      unit: l,
      graphicalItemId: s
    }
  };
  return /* @__PURE__ */ g.createElement(vl, {
    tooltipEntrySettings: c
  });
});
function mz(e) {
  var t = B(Or), {
    data: r,
    dataKey: n,
    background: i,
    allOtherBarProps: a
  } = e, {
    onMouseEnter: o,
    onMouseLeave: l,
    onClick: u
  } = a, s = xo(a, oz), c = Vf(o, n, a.id), f = Hf(l), d = Gf(u, n, a.id);
  if (!i || r == null)
    return null;
  var v = Gr(i);
  return /* @__PURE__ */ g.createElement(nt, {
    zIndex: IR(i, _e.barBackground)
  }, r.map((p, m) => {
    var {
      value: h,
      background: y,
      tooltipPosition: b
    } = p, x = xo(p, lz);
    if (!y)
      return null;
    var w = c(p, m), P = f(p, m), O = d(p, m), A = Qe(Qe(Qe(Qe(Qe({
      option: i,
      isActive: String(m) === t
    }, x), {}, {
      // @ts-expect-error backgroundProps is contributing unknown props
      fill: "#eee"
    }, y), v), Ai(s, p, m)), {}, {
      onMouseEnter: w,
      onMouseLeave: P,
      onClick: O,
      dataKey: n,
      index: m,
      className: "recharts-bar-background-rectangle"
    });
    return /* @__PURE__ */ g.createElement(rd, Er({
      key: "background-bar-".concat(m)
    }, A));
  }));
}
function yz(e) {
  var {
    showLabels: t,
    children: r,
    rects: n
  } = e, i = n?.map((a) => {
    var o = {
      x: a.x,
      y: a.y,
      width: a.width,
      lowerWidth: a.width,
      upperWidth: a.width,
      height: a.height
    };
    return Qe(Qe({}, o), {}, {
      value: a.value,
      payload: a.payload,
      parentViewBox: a.parentViewBox,
      viewBox: o,
      fill: a.fill
    });
  });
  return /* @__PURE__ */ g.createElement(Bf, {
    value: t ? i : void 0
  }, r);
}
function gz(e) {
  var {
    shape: t,
    activeBar: r,
    baseProps: n,
    entry: i,
    index: a,
    dataKey: o
  } = e, l = B(Or), u = B(Df), s = r && String(i.originalDataIndex) === l && (u == null || o === u), [c, f] = re(!1), [d, v] = re(!1);
  fe(() => {
    var x;
    return s ? (f(!0), x = requestAnimationFrame(() => {
      v(!0);
    })) : v(!1), () => {
      cancelAnimationFrame(x);
    };
  }, [s]);
  var p = ie(() => {
    s || f(!1);
  }, [s]), m = s && d, h = s || c, y;
  s ? r === !0 ? y = t : y = r : y = t;
  var b = /* @__PURE__ */ g.createElement(rd, Er({}, n, {
    name: String(n.name)
  }, i, {
    isActive: m,
    option: y,
    index: a,
    dataKey: o,
    onTransitionEnd: p
  }));
  return h ? /* @__PURE__ */ g.createElement(nt, {
    zIndex: _e.activeBar
  }, /* @__PURE__ */ g.createElement(Sw, {
    index: i.originalDataIndex
  }, b)) : b;
}
function bz(e) {
  var {
    shape: t,
    baseProps: r,
    entry: n,
    index: i,
    dataKey: a
  } = e;
  return /* @__PURE__ */ g.createElement(rd, Er({}, r, {
    name: String(r.name)
  }, n, {
    isActive: !1,
    option: t,
    index: i,
    dataKey: a
  }));
}
function xz(e) {
  var t, {
    data: r,
    props: n
  } = e, i = (t = tt(n)) !== null && t !== void 0 ? t : {}, {
    id: a
  } = i, o = xo(i, uz), {
    shape: l,
    dataKey: u,
    activeBar: s
  } = n, {
    onMouseEnter: c,
    onClick: f,
    onMouseLeave: d
  } = n, v = xo(n, sz), p = Vf(c, u, a), m = Hf(d), h = Gf(f, u, a);
  return r ? /* @__PURE__ */ g.createElement(g.Fragment, null, r.map((y, b) => /* @__PURE__ */ g.createElement(Sw, Er({
    index: y.originalDataIndex,
    key: "rectangle-".concat(y?.x, "-").concat(y?.y, "-").concat(y?.value, "-").concat(b),
    className: "recharts-bar-rectangle"
  }, Ai(v, y, b), {
    onMouseEnter: p(y, b),
    onMouseLeave: m(y, b),
    onClick: h(y, b)
  }), s ? /* @__PURE__ */ g.createElement(gz, {
    shape: l,
    activeBar: s,
    baseProps: o,
    entry: y,
    index: b,
    dataKey: u
  }) : (
    /*
     * If the `activeBar` prop is falsy, then let's call the variant without hooks.
     * Using the `selectActiveTooltipIndex` selector is usually fast
     * but in charts with large-ish amount of data even the few nanoseconds add up to a noticeable jank.
     * If the activeBar is false then we don't need to know which index is active - because we won't use it anyway.
     * So let's just skip the hooks altogether. That way, React can skip rendering the component,
     * and can skip the tree reconciliation for its children too.
     * Because we can't call hooks conditionally, we need to have a separate component for that.
     */
    /* @__PURE__ */ g.createElement(bz, {
      shape: l,
      baseProps: o,
      entry: y,
      index: b,
      dataKey: u
    })
  )))) : null;
}
function wz(e) {
  var {
    props: t,
    previousRectanglesRef: r
  } = e, {
    data: n,
    layout: i,
    isAnimationActive: a,
    animationBegin: o,
    animationDuration: l,
    animationEasing: u,
    onAnimationEnd: s,
    onAnimationStart: c
  } = t, f = r.current, d = Tn(t, "recharts-bar-"), [v, p] = re(!1), m = !v, h = ie(() => {
    typeof s == "function" && s(), p(!1);
  }, [s]), y = ie(() => {
    typeof c == "function" && c(), p(!0);
  }, [c]);
  return /* @__PURE__ */ g.createElement(yz, {
    showLabels: m,
    rects: n
  }, /* @__PURE__ */ g.createElement(Cn, {
    animationId: d,
    begin: o,
    duration: l,
    isActive: a,
    easing: u,
    onAnimationEnd: h,
    onAnimationStart: y,
    key: d
  }, (b) => {
    var x = b === 1 ? n : n?.map((w, P) => {
      var O = f && f[P];
      if (O)
        return Qe(Qe({}, w), {}, {
          x: oe(O.x, w.x, b),
          y: oe(O.y, w.y, b),
          width: oe(O.width, w.width, b),
          height: oe(O.height, w.height, b)
        });
      if (i === "horizontal") {
        var A = oe(0, w.height, b), _ = oe(w.stackedBarStart, w.y, b);
        return Qe(Qe({}, w), {}, {
          y: _,
          height: A
        });
      }
      var C = oe(0, w.width, b), T = oe(w.stackedBarStart, w.x, b);
      return Qe(Qe({}, w), {}, {
        width: C,
        x: T
      });
    });
    return b > 0 && (r.current = x ?? null), x == null ? null : /* @__PURE__ */ g.createElement(Oe, null, /* @__PURE__ */ g.createElement(xz, {
      props: t,
      data: x
    }));
  }), /* @__PURE__ */ g.createElement(cl, {
    label: t.label
  }), t.children);
}
function Oz(e) {
  var t = H(null);
  return /* @__PURE__ */ g.createElement(wz, {
    previousRectanglesRef: t,
    props: e
  });
}
var _w = 0, Pz = (e, t) => {
  var r = Array.isArray(e.value) ? e.value[1] : e.value;
  return {
    x: e.x,
    y: e.y,
    value: r,
    // getValueByDataKey does not validate the output type
    errorVal: le(e, t)
  };
};
class Ez extends Ey {
  render() {
    var {
      hide: t,
      data: r,
      dataKey: n,
      className: i,
      xAxisId: a,
      yAxisId: o,
      needClip: l,
      background: u,
      id: s
    } = this.props;
    if (t || r == null)
      return null;
    var c = te("recharts-bar", i), f = s;
    return /* @__PURE__ */ g.createElement(Oe, {
      className: c,
      id: s
    }, l && /* @__PURE__ */ g.createElement("defs", null, /* @__PURE__ */ g.createElement(ed, {
      clipPathId: f,
      xAxisId: a,
      yAxisId: o
    })), /* @__PURE__ */ g.createElement(Oe, {
      className: "recharts-bar-rectangles",
      clipPath: l ? "url(#clipPath-".concat(f, ")") : void 0
    }, /* @__PURE__ */ g.createElement(mz, {
      data: r,
      dataKey: n,
      background: u,
      allOtherBarProps: this.props
    }), /* @__PURE__ */ g.createElement(Oz, this.props)));
  }
}
var Az = {
  activeBar: !1,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "ease",
  background: !1,
  hide: !1,
  isAnimationActive: "auto",
  label: !1,
  legendType: "rect",
  minPointSize: _w,
  xAxisId: 0,
  yAxisId: 0,
  zIndex: _e.bar
};
function Sz(e) {
  var {
    xAxisId: t,
    yAxisId: r,
    hide: n,
    legendType: i,
    minPointSize: a,
    activeBar: o,
    animationBegin: l,
    animationDuration: u,
    animationEasing: s,
    isAnimationActive: c
  } = e, {
    needClip: f
  } = gl(t, r), d = Sr(), v = Fe(), p = Kf(e.children, Wn), m = B((b) => Q2(b, e.id, v, p));
  if (d !== "vertical" && d !== "horizontal")
    return null;
  var h, y = m?.[0];
  return y == null || y.height == null || y.width == null ? h = 0 : h = d === "vertical" ? y.height / 2 : y.width / 2, /* @__PURE__ */ g.createElement(lw, {
    xAxisId: t,
    yAxisId: r,
    data: m,
    dataPointFormatter: Pz,
    errorBarOffset: h
  }, /* @__PURE__ */ g.createElement(Ez, Er({}, e, {
    layout: d,
    needClip: f,
    data: m,
    xAxisId: t,
    yAxisId: r,
    hide: n,
    legendType: i,
    minPointSize: a,
    activeBar: o,
    animationBegin: l,
    animationDuration: u,
    animationEasing: s,
    isAnimationActive: c
  })));
}
function _z(e) {
  var {
    layout: t,
    barSettings: {
      dataKey: r,
      minPointSize: n,
      hasCustomShape: i
    },
    pos: a,
    bandSize: o,
    xAxis: l,
    yAxis: u,
    xAxisTicks: s,
    yAxisTicks: c,
    stackedData: f,
    displayedData: d,
    offset: v,
    cells: p,
    parentViewBox: m,
    dataStartIndex: h
  } = e, y = t === "horizontal" ? u : l, b = f ? y.scale.domain() : null, x = nA({
    numericAxis: y
  }), w = y.scale.map(x);
  return d.map((P, O) => {
    var A, _, C, T, N, j;
    if (f) {
      var I = f[O + h];
      if (I == null)
        return null;
      A = J1(I, b);
    } else
      A = le(P, r), Array.isArray(A) || (A = [x, A]);
    var $ = $2(n, _w)(A[1], O);
    if (t === "horizontal") {
      var K, V = u.scale.map(A[0]), U = u.scale.map(A[1]);
      if (V == null || U == null)
        return null;
      _ = Rv({
        axis: l,
        ticks: s,
        bandSize: o,
        offset: a.offset,
        entry: P,
        index: O
      }), C = (K = U ?? V) !== null && K !== void 0 ? K : void 0, T = a.size;
      var X = V - U;
      if (N = It(X) ? 0 : X, j = {
        x: _,
        y: v.top,
        width: T,
        height: v.height
      }, Math.abs($) > 0 && Math.abs(N) < Math.abs($)) {
        var q = Be(N || $) * (Math.abs($) - Math.abs(N));
        C -= q, N += q;
      }
    } else {
      var Z = l.scale.map(A[0]), k = l.scale.map(A[1]);
      if (Z == null || k == null)
        return null;
      if (_ = Z, C = Rv({
        axis: u,
        ticks: c,
        bandSize: o,
        offset: a.offset,
        entry: P,
        index: O
      }), T = k - Z, N = a.size, j = {
        x: v.left,
        y: C,
        width: v.width,
        height: N
      }, Math.abs($) > 0 && Math.abs(T) < Math.abs($)) {
        var W = Be(T || $) * (Math.abs($) - Math.abs(T));
        T += W;
      }
    }
    if (_ == null || C == null || T == null || N == null || !i && (T === 0 || N === 0))
      return null;
    var Y = Qe(Qe({}, P), {}, {
      stackedBarStart: w,
      x: _,
      y: C,
      width: T,
      height: N,
      value: f ? A : A[1],
      payload: P,
      background: j,
      tooltipPosition: {
        x: _ + T / 2,
        y: C + N / 2
      },
      parentViewBox: m,
      originalDataIndex: O
    }, p && p[O] && p[O].props);
    return Y;
  }).filter(Boolean);
}
function jz(e) {
  var t = je(e, Az), r = nz(t.stackId), n = Fe();
  return /* @__PURE__ */ g.createElement(pl, {
    id: t.id,
    type: "bar"
  }, (i) => /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(Yf, {
    legendPayload: pz(t)
  }), /* @__PURE__ */ g.createElement(hz, {
    dataKey: t.dataKey,
    stroke: t.stroke,
    strokeWidth: t.strokeWidth,
    fill: t.fill,
    name: t.name,
    hide: t.hide,
    unit: t.unit,
    tooltipType: t.tooltipType,
    id: i
  }), /* @__PURE__ */ g.createElement(Xf, {
    type: "bar",
    id: i,
    data: void 0,
    xAxisId: t.xAxisId,
    yAxisId: t.yAxisId,
    zAxisId: 0,
    dataKey: t.dataKey,
    stackId: r,
    hide: t.hide,
    barSize: t.barSize,
    minPointSize: t.minPointSize,
    maxBarSize: t.maxBarSize,
    isPanorama: n,
    hasCustomShape: t.shape != null
  }), /* @__PURE__ */ g.createElement(nt, {
    zIndex: t.zIndex
  }, /* @__PURE__ */ g.createElement(Sz, Er({}, t, {
    id: i
  })))));
}
var jw = /* @__PURE__ */ g.memo(jz, on);
jw.displayName = "Bar";
var Iz = ["domain", "range"], kz = ["domain", "range"];
function ay(e, t) {
  if (e == null) return {};
  var r, n, i = Cz(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function Cz(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function oy(e, t) {
  return e === t ? !0 : Array.isArray(e) && e.length === 2 && Array.isArray(t) && t.length === 2 ? e[0] === t[0] && e[1] === t[1] : !1;
}
function Iw(e, t) {
  if (e === t)
    return !0;
  var {
    domain: r,
    range: n
  } = e, i = ay(e, Iz), {
    domain: a,
    range: o
  } = t, l = ay(t, kz);
  return !oy(r, a) || !oy(n, o) ? !1 : on(i, l);
}
var Tz = ["type"], Nz = ["dangerouslySetInnerHTML", "ticks", "scale"], Dz = ["id", "scale"];
function Vs() {
  return Vs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Vs.apply(null, arguments);
}
function ly(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function uy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ly(Object(r), !0).forEach(function(n) {
      Mz(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ly(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Mz(e, t, r) {
  return (t = $z(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function $z(e) {
  var t = Rz(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Rz(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Hs(e, t) {
  if (e == null) return {};
  var r, n, i = Lz(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function Lz(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function zz(e) {
  var t = de(), r = H(null), n = Pc(), {
    type: i
  } = e, a = Hs(e, Tz), o = Vo(n, "xAxis", i), l = gt(() => {
    if (o != null)
      return uy(uy({}, a), {}, {
        type: o
      });
  }, [a, o]);
  return Ve(() => {
    l != null && (r.current === null ? t(oR(l)) : r.current !== l && t(lR({
      prev: r.current,
      next: l
    })), r.current = l);
  }, [l, t]), Ve(() => () => {
    r.current && (t(uR(r.current)), r.current = null);
  }, [t]), null;
}
var Bz = (e) => {
  var {
    xAxisId: t,
    className: r
  } = e, n = B(gc), i = Fe(), a = "xAxis", o = B((y) => J0(y, a, t, i)), l = B((y) => Y0(y, t)), u = B((y) => HC(y, t)), s = B((y) => k0(y, t));
  if (l == null || u == null || s == null)
    return null;
  var {
    dangerouslySetInnerHTML: c,
    ticks: f,
    scale: d
  } = e, v = Hs(e, Nz), {
    id: p,
    scale: m
  } = s, h = Hs(s, Dz);
  return /* @__PURE__ */ g.createElement(Qf, Vs({}, v, h, {
    x: u.x,
    y: u.y,
    width: l.width,
    height: l.height,
    className: te("recharts-".concat(a, " ").concat(a), r),
    viewBox: n,
    ticks: o,
    axisType: a,
    axisId: t
  }));
}, Fz = {
  allowDataOverflow: Ne.allowDataOverflow,
  allowDecimals: Ne.allowDecimals,
  allowDuplicatedCategory: Ne.allowDuplicatedCategory,
  angle: Ne.angle,
  axisLine: Qt.axisLine,
  height: Ne.height,
  hide: !1,
  includeHidden: Ne.includeHidden,
  interval: Ne.interval,
  label: !1,
  minTickGap: Ne.minTickGap,
  mirror: Ne.mirror,
  orientation: Ne.orientation,
  padding: Ne.padding,
  reversed: Ne.reversed,
  scale: Ne.scale,
  tick: Ne.tick,
  tickCount: Ne.tickCount,
  tickLine: Qt.tickLine,
  tickSize: Qt.tickSize,
  type: Ne.type,
  niceTicks: Ne.niceTicks,
  xAxisId: 0
}, Wz = (e) => {
  var t = je(e, Fz);
  return /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(zz, {
    allowDataOverflow: t.allowDataOverflow,
    allowDecimals: t.allowDecimals,
    allowDuplicatedCategory: t.allowDuplicatedCategory,
    angle: t.angle,
    dataKey: t.dataKey,
    domain: t.domain,
    height: t.height,
    hide: t.hide,
    id: t.xAxisId,
    includeHidden: t.includeHidden,
    interval: t.interval,
    minTickGap: t.minTickGap,
    mirror: t.mirror,
    name: t.name,
    orientation: t.orientation,
    padding: t.padding,
    reversed: t.reversed,
    scale: t.scale,
    tick: t.tick,
    tickCount: t.tickCount,
    tickFormatter: t.tickFormatter,
    ticks: t.ticks,
    type: t.type,
    unit: t.unit,
    niceTicks: t.niceTicks
  }), /* @__PURE__ */ g.createElement(Bz, t));
}, bl = /* @__PURE__ */ g.memo(Wz, Iw);
bl.displayName = "XAxis";
var Kz = ["type"], qz = ["dangerouslySetInnerHTML", "ticks", "scale"], Uz = ["id", "scale"];
function Gs() {
  return Gs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Gs.apply(null, arguments);
}
function sy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function cy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? sy(Object(r), !0).forEach(function(n) {
      Vz(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Vz(e, t, r) {
  return (t = Hz(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Hz(e) {
  var t = Gz(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Gz(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ys(e, t) {
  if (e == null) return {};
  var r, n, i = Yz(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function Yz(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function Xz(e) {
  var t = de(), r = H(null), n = Pc(), {
    type: i
  } = e, a = Ys(e, Kz), o = Vo(n, "yAxis", i), l = gt(() => {
    if (o != null)
      return cy(cy({}, a), {}, {
        type: o
      });
  }, [o, a]);
  return Ve(() => {
    l != null && (r.current === null ? t(sR(l)) : r.current !== l && t(cR({
      prev: r.current,
      next: l
    })), r.current = l);
  }, [l, t]), Ve(() => () => {
    r.current && (t(fR(r.current)), r.current = null);
  }, [t]), null;
}
function Zz(e) {
  var {
    yAxisId: t,
    className: r,
    width: n,
    label: i
  } = e, a = H(null), o = H(null), l = B(gc), u = Fe(), s = de(), c = "yAxis", f = B((O) => X0(O, t)), d = B((O) => YC(O, t)), v = B((O) => J0(O, c, t, u)), p = B((O) => C0(O, t));
  if (Ve(() => {
    if (!(n !== "auto" || !f || zf(i) || /* @__PURE__ */ vt(i) || p == null)) {
      var O = a.current;
      if (O) {
        var A = O.getCalculatedWidth();
        Math.round(f.width) !== Math.round(A) && s(dR({
          id: t,
          width: A
        }));
      }
    }
  }, [
    // The dependency on cartesianAxisRef.current is not needed because useLayoutEffect will run after every render.
    // The ref will be populated by then.
    // To re-run this effect when ticks change, we can depend on the ticks array from the store.
    v,
    f,
    s,
    i,
    t,
    n,
    p
  ]), f == null || d == null || p == null)
    return null;
  var {
    dangerouslySetInnerHTML: m,
    ticks: h,
    scale: y
  } = e, b = Ys(e, qz), {
    id: x,
    scale: w
  } = p, P = Ys(p, Uz);
  return /* @__PURE__ */ g.createElement(Qf, Gs({}, b, P, {
    ref: a,
    labelRef: o,
    x: d.x,
    y: d.y,
    tickTextProps: n === "auto" ? {
      width: void 0
    } : {
      width: n
    },
    width: f.width,
    height: f.height,
    className: te("recharts-".concat(c, " ").concat(c), r),
    viewBox: l,
    ticks: v,
    axisType: c,
    axisId: t
  }));
}
var Jz = {
  allowDataOverflow: De.allowDataOverflow,
  allowDecimals: De.allowDecimals,
  allowDuplicatedCategory: De.allowDuplicatedCategory,
  angle: De.angle,
  axisLine: Qt.axisLine,
  hide: !1,
  includeHidden: De.includeHidden,
  interval: De.interval,
  label: !1,
  minTickGap: De.minTickGap,
  mirror: De.mirror,
  orientation: De.orientation,
  padding: De.padding,
  reversed: De.reversed,
  scale: De.scale,
  tick: De.tick,
  tickCount: De.tickCount,
  tickLine: Qt.tickLine,
  tickSize: Qt.tickSize,
  type: De.type,
  niceTicks: De.niceTicks,
  width: De.width,
  yAxisId: 0
}, Qz = (e) => {
  var t = je(e, Jz);
  return /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(Xz, {
    interval: t.interval,
    id: t.yAxisId,
    scale: t.scale,
    type: t.type,
    domain: t.domain,
    allowDataOverflow: t.allowDataOverflow,
    dataKey: t.dataKey,
    allowDuplicatedCategory: t.allowDuplicatedCategory,
    allowDecimals: t.allowDecimals,
    tickCount: t.tickCount,
    padding: t.padding,
    includeHidden: t.includeHidden,
    reversed: t.reversed,
    ticks: t.ticks,
    width: t.width,
    orientation: t.orientation,
    mirror: t.mirror,
    hide: t.hide,
    unit: t.unit,
    name: t.name,
    angle: t.angle,
    minTickGap: t.minTickGap,
    tick: t.tick,
    tickFormatter: t.tickFormatter,
    niceTicks: t.niceTicks
  }), /* @__PURE__ */ g.createElement(Zz, t));
}, xl = /* @__PURE__ */ g.memo(Qz, Iw);
xl.displayName = "YAxis";
var eB = (e, t) => t, nd = S([eB, ee, Vb, We, hx, dr, mN, $e], PN);
function tB(e) {
  return "getBBox" in e.currentTarget && typeof e.currentTarget.getBBox == "function";
}
function id(e) {
  var t = e.currentTarget.getBoundingClientRect(), r, n;
  if (tB(e)) {
    var i = e.currentTarget.getBBox();
    r = i.width > 0 ? t.width / i.width : 1, n = i.height > 0 ? t.height / i.height : 1;
  } else {
    var a = e.currentTarget;
    r = a.offsetWidth > 0 ? t.width / a.offsetWidth : 1, n = a.offsetHeight > 0 ? t.height / a.offsetHeight : 1;
  }
  var o = (l, u) => ({
    /*
     * Here it's important to use:
     * - event.clientX and event.clientY to get the mouse position relative to the viewport, including scroll.
     * - pageX and pageY are not used because they are relative to the whole document, and ignore scroll.
     * - rect.left and rect.top are used to get the position of the chart relative to the viewport.
     * - offsetX and offsetY are not used because they are relative to the offset parent
     *  which may or may not be the same as the clientX and clientY, depending on the position of the chart in the DOM
     *  and surrounding element styles. CSS position: relative, absolute, fixed, will change the offset parent.
     * - scaleX and scaleY are necessary for when the chart element is scaled using CSS `transform: scale(N)`.
     */
    relativeX: Math.round((l - t.left) / r),
    relativeY: Math.round((u - t.top) / n)
  });
  return "touches" in e ? Array.from(e.touches).map((l) => o(l.clientX, l.clientY)) : o(e.clientX, e.clientY);
}
var kw = pt("mouseClick"), Cw = Ii();
Cw.startListening({
  actionCreator: kw,
  effect: (e, t) => {
    var r = e.payload, n = nd(t.getState(), id(r));
    n?.activeIndex != null && t.dispatch(fT({
      activeIndex: n.activeIndex,
      activeDataKey: void 0,
      activeCoordinate: n.activeCoordinate
    }));
  }
});
var Xs = pt("mouseMove"), Tw = Ii(), pn = null, Tr = null, Zu = null;
Tw.startListening({
  actionCreator: Xs,
  effect: (e, t) => {
    var r = e.payload, n = t.getState(), {
      throttleDelay: i,
      throttledEvents: a
    } = n.eventSettings, o = a === "all" || a?.includes("mousemove");
    pn !== null && (cancelAnimationFrame(pn), pn = null), Tr !== null && (typeof i != "number" || !o) && (clearTimeout(Tr), Tr = null), Zu = id(r);
    var l = () => {
      var u = t.getState(), s = jf(u, u.tooltip.settings.shared);
      if (!Zu) {
        pn = null, Tr = null;
        return;
      }
      if (s === "axis") {
        var c = nd(u, Zu);
        c?.activeIndex != null ? t.dispatch(ox({
          activeIndex: c.activeIndex,
          activeDataKey: void 0,
          activeCoordinate: c.activeCoordinate
        })) : t.dispatch(ax());
      }
      pn = null, Tr = null;
    };
    if (!o) {
      l();
      return;
    }
    i === "raf" ? pn = requestAnimationFrame(l) : typeof i == "number" && Tr === null && (Tr = setTimeout(l, i));
  }
});
function rB(e, t) {
  return t instanceof HTMLElement ? "HTMLElement <".concat(t.tagName, ' class="').concat(t.className, '">') : t === window ? "global.window" : e === "children" && typeof t == "object" && t !== null ? "<<CHILDREN>>" : t;
}
var fy = {
  accessibilityLayer: !0,
  barCategoryGap: "10%",
  barGap: 4,
  barSize: void 0,
  className: void 0,
  maxBarSize: void 0,
  stackOffset: "none",
  syncId: void 0,
  syncMethod: "index",
  baseValue: void 0,
  reverseStackOrder: !1
}, Nw = Je({
  name: "rootProps",
  initialState: fy,
  reducers: {
    updateOptions: (e, t) => {
      var r;
      e.accessibilityLayer = t.payload.accessibilityLayer, e.barCategoryGap = t.payload.barCategoryGap, e.barGap = (r = t.payload.barGap) !== null && r !== void 0 ? r : fy.barGap, e.barSize = t.payload.barSize, e.maxBarSize = t.payload.maxBarSize, e.stackOffset = t.payload.stackOffset, e.syncId = t.payload.syncId, e.syncMethod = t.payload.syncMethod, e.className = t.payload.className, e.baseValue = t.payload.baseValue, e.reverseStackOrder = t.payload.reverseStackOrder;
    }
  }
}), nB = Nw.reducer, {
  updateOptions: iB
} = Nw.actions, aB = null, oB = {
  updatePolarOptions: (e, t) => e === null ? t.payload : (e.startAngle = t.payload.startAngle, e.endAngle = t.payload.endAngle, e.cx = t.payload.cx, e.cy = t.payload.cy, e.innerRadius = t.payload.innerRadius, e.outerRadius = t.payload.outerRadius, e)
}, Dw = Je({
  name: "polarOptions",
  initialState: aB,
  reducers: oB
}), {
  updatePolarOptions: lB
} = Dw.actions, uB = Dw.reducer, Mw = pt("keyDown"), $w = pt("focus"), Rw = pt("blur"), wl = Ii(), hn = null, Nr = null, ya = null;
wl.startListening({
  actionCreator: Mw,
  effect: (e, t) => {
    ya = e.payload, hn !== null && (cancelAnimationFrame(hn), hn = null);
    var r = t.getState(), {
      throttleDelay: n,
      throttledEvents: i
    } = r.eventSettings, a = i === "all" || i.includes("keydown");
    Nr !== null && (typeof n != "number" || !a) && (clearTimeout(Nr), Nr = null);
    var o = () => {
      try {
        var l = t.getState(), u = l.rootProps.accessibilityLayer !== !1;
        if (!u)
          return;
        var {
          keyboardInteraction: s
        } = l.tooltip, c = ya;
        if (c !== "ArrowRight" && c !== "ArrowLeft" && c !== "Enter")
          return;
        var f = If(s, Fn(l), qi(l), Vi(l)), d = f == null ? -1 : Number(f);
        if (!Number.isFinite(d) || d < 0)
          return;
        var v = dr(l);
        if (c === "Enter") {
          var p = vo(l, "axis", "hover", String(s.index));
          t.dispatch(fo({
            active: !s.active,
            activeIndex: s.index,
            activeCoordinate: p
          }));
          return;
        }
        var m = eT(l), h = m === "left-to-right" ? 1 : -1, y = c === "ArrowRight" ? 1 : -1, b = d + y * h;
        if (v == null || b >= v.length || b < 0)
          return;
        var x = vo(l, "axis", "hover", String(b));
        t.dispatch(fo({
          active: !0,
          activeIndex: b.toString(),
          activeCoordinate: x
        }));
      } finally {
        hn = null, Nr = null;
      }
    };
    if (!a) {
      o();
      return;
    }
    n === "raf" ? hn = requestAnimationFrame(o) : typeof n == "number" && Nr === null && (o(), ya = null, Nr = setTimeout(() => {
      ya ? o() : (Nr = null, hn = null);
    }, n));
  }
});
wl.startListening({
  actionCreator: $w,
  effect: (e, t) => {
    var r = t.getState(), n = r.rootProps.accessibilityLayer !== !1;
    if (n) {
      var {
        keyboardInteraction: i
      } = r.tooltip;
      if (!i.active && i.index == null) {
        var a = "0", o = vo(r, "axis", "hover", String(a));
        t.dispatch(fo({
          active: !0,
          activeIndex: a,
          activeCoordinate: o
        }));
      }
    }
  }
});
wl.startListening({
  actionCreator: Rw,
  effect: (e, t) => {
    var r = t.getState(), n = r.rootProps.accessibilityLayer !== !1;
    if (n) {
      var {
        keyboardInteraction: i
      } = r.tooltip;
      i.active && t.dispatch(fo({
        active: !1,
        activeIndex: i.index,
        activeCoordinate: i.coordinate
      }));
    }
  }
});
function Lw(e) {
  e.persist();
  var {
    currentTarget: t
  } = e;
  return new Proxy(e, {
    get: (r, n) => {
      if (n === "currentTarget")
        return t;
      var i = Reflect.get(r, n);
      return typeof i == "function" ? i.bind(r) : i;
    }
  });
}
var wt = pt("externalEvent"), zw = Ii(), ga = /* @__PURE__ */ new Map(), ei = /* @__PURE__ */ new Map(), Ju = /* @__PURE__ */ new Map();
zw.startListening({
  actionCreator: wt,
  effect: (e, t) => {
    var {
      handler: r,
      reactEvent: n
    } = e.payload;
    if (r != null) {
      var i = n.type, a = Lw(n);
      Ju.set(i, {
        handler: r,
        reactEvent: a
      });
      var o = ga.get(i);
      o !== void 0 && (cancelAnimationFrame(o), ga.delete(i));
      var l = t.getState(), {
        throttleDelay: u,
        throttledEvents: s
      } = l.eventSettings, c = s, f = c === "all" || c?.includes(i), d = ei.get(i);
      d !== void 0 && (typeof u != "number" || !f) && (clearTimeout(d), ei.delete(i));
      var v = () => {
        var h = Ju.get(i);
        try {
          if (!h)
            return;
          var {
            handler: y,
            reactEvent: b
          } = h, x = t.getState(), w = {
            activeCoordinate: tN(x),
            activeDataKey: Df(x),
            activeIndex: Or(x),
            activeLabel: gx(x),
            activeTooltipIndex: Or(x),
            isTooltipActive: rN(x)
          };
          y && y(w, b);
        } finally {
          ga.delete(i), ei.delete(i), Ju.delete(i);
        }
      };
      if (!f) {
        v();
        return;
      }
      if (u === "raf") {
        var p = requestAnimationFrame(v);
        ga.set(i, p);
      } else if (typeof u == "number") {
        if (!ei.has(i)) {
          v();
          var m = setTimeout(v, u);
          ei.set(i, m);
        }
      } else
        v();
    }
  }
});
var sB = S([zn], (e) => e.tooltipItemPayloads), cB = S([sB, (e, t) => t, (e, t, r) => r], (e, t, r) => {
  if (t != null) {
    var n = e.find((a) => a.settings.graphicalItemId === r);
    if (n != null) {
      var {
        getPosition: i
      } = n;
      if (i != null)
        return i(t);
    }
  }
}), Bw = pt("touchMove"), Fw = Ii(), Dr = null, vr = null, dy = null, ti = null;
Fw.startListening({
  actionCreator: Bw,
  effect: (e, t) => {
    var r = e.payload;
    if (!(r.touches == null || r.touches.length === 0)) {
      ti = Lw(r);
      var n = t.getState(), {
        throttleDelay: i,
        throttledEvents: a
      } = n.eventSettings, o = a === "all" || a.includes("touchmove");
      Dr !== null && (cancelAnimationFrame(Dr), Dr = null), vr !== null && (typeof i != "number" || !o) && (clearTimeout(vr), vr = null), dy = Array.from(r.touches).map((u) => id({
        clientX: u.clientX,
        clientY: u.clientY,
        currentTarget: r.currentTarget
      }));
      var l = () => {
        if (ti != null) {
          var u = t.getState(), s = jf(u, u.tooltip.settings.shared);
          if (s === "axis") {
            var c, f = (c = dy) === null || c === void 0 ? void 0 : c[0];
            if (f == null) {
              Dr = null, vr = null;
              return;
            }
            var d = nd(u, f);
            d?.activeIndex != null && t.dispatch(ox({
              activeIndex: d.activeIndex,
              activeDataKey: void 0,
              activeCoordinate: d.activeCoordinate
            }));
          } else if (s === "item") {
            var v, p = ti.touches[0];
            if (document.elementFromPoint == null || p == null)
              return;
            var m = document.elementFromPoint(p.clientX, p.clientY);
            if (!m || !m.getAttribute)
              return;
            var h = m.getAttribute(Zg), y = (v = m.getAttribute(Jg)) !== null && v !== void 0 ? v : void 0, b = Bn(u).find((P) => P.id === y);
            if (h == null || b == null || y == null)
              return;
            var {
              dataKey: x
            } = b, w = cB(u, h, y);
            t.dispatch(ix({
              activeDataKey: x,
              activeIndex: h,
              activeCoordinate: w,
              activeGraphicalItemId: y
            }));
          }
          Dr = null, vr = null;
        }
      };
      if (!o) {
        l();
        return;
      }
      i === "raf" ? Dr = requestAnimationFrame(l) : typeof i == "number" && vr === null && (l(), ti = null, vr = setTimeout(() => {
        ti ? l() : (vr = null, Dr = null);
      }, i));
    }
  }
});
var ad = {
  throttleDelay: "raf",
  throttledEvents: ["mousemove", "touchmove", "pointermove", "scroll", "wheel"]
}, Ww = Je({
  name: "eventSettings",
  initialState: ad,
  reducers: {
    setEventSettings: (e, t) => {
      t.payload.throttleDelay != null && (e.throttleDelay = t.payload.throttleDelay), t.payload.throttledEvents != null && (e.throttledEvents = t.payload.throttledEvents);
    }
  }
}), {
  setEventSettings: fB
} = Ww.actions, dB = Ww.reducer, vB = pg({
  brush: kR,
  cartesianAxis: vR,
  chartData: eD,
  errorBars: IL,
  eventSettings: dB,
  graphicalItems: g$,
  layout: H1,
  legend: eS,
  options: YN,
  polarAxis: kM,
  polarOptions: uB,
  referenceElements: DR,
  renderedTicks: ZR,
  rootProps: nB,
  tooltip: dT,
  zIndex: RN
}), pB = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "Chart";
  return g1({
    reducer: vB,
    // redux-toolkit v1 types are unhappy with the preloadedState type. Remove the `as any` when bumping to v2
    preloadedState: t,
    // @ts-expect-error redux-toolkit v1 types are unhappy with the middleware array. Remove this comment when bumping to v2
    middleware: (n) => {
      var i;
      return n({
        serializableCheck: !1,
        immutableCheck: !["commonjs", "es6", "production"].includes((i = "es6") !== null && i !== void 0 ? i : "")
      }).concat([Cw.middleware, Tw.middleware, wl.middleware, zw.middleware, Fw.middleware]);
    },
    /*
     * I can't find out how to satisfy typescript here.
     * We return `EnhancerArray<[StoreEnhancer<{}, {}>, StoreEnhancer]>` from this function,
     * but the types say we should return `EnhancerArray<StoreEnhancer<{}, {}>`.
     * Looks like it's badly inferred generics, but it won't allow me to provide the correct type manually either.
     * So let's just ignore the error for now.
     */
    // @ts-expect-error mismatched generics
    enhancers: (n) => {
      var i = n;
      return typeof n == "function" && (i = n()), i.concat(Ng({
        type: "raf"
      }));
    },
    devTools: {
      serialize: {
        replacer: rB
      },
      name: "recharts-".concat(r)
    }
  });
};
function Kw(e) {
  var {
    preloadedState: t,
    children: r,
    reduxStoreName: n
  } = e, i = Fe(), a = H(null);
  if (i)
    return r;
  a.current == null && (a.current = pB(t, n));
  var o = fc;
  return /* @__PURE__ */ g.createElement(bS, {
    context: o,
    store: a.current
  }, r);
}
function hB(e) {
  var {
    layout: t,
    margin: r
  } = e, n = de(), i = Fe();
  return fe(() => {
    i || (n(q1(t)), n(K1(r)));
  }, [n, i, t, r]), null;
}
var qw = /* @__PURE__ */ Po(hB, on);
function Uw(e) {
  var t = de();
  return fe(() => {
    t(iB(e));
  }, [t, e]), null;
}
var mB = (e) => {
  var t = de();
  return fe(() => {
    t(fB(e));
  }, [t, e]), null;
}, Vw = /* @__PURE__ */ Po(mB, on);
function vy(e) {
  var {
    zIndex: t,
    isPanorama: r
  } = e, n = H(null), i = de();
  return Ve(() => (n.current && i(MN({
    zIndex: t,
    element: n.current,
    isPanorama: r
  })), () => {
    i($N({
      zIndex: t,
      isPanorama: r
    }));
  }), [i, t, r]), /* @__PURE__ */ g.createElement("g", {
    tabIndex: -1,
    ref: n,
    className: "recharts-zIndex-layer_".concat(t)
  });
}
function py(e) {
  var {
    children: t,
    isPanorama: r
  } = e, n = B(AN);
  if (!n || n.length === 0)
    return t;
  var i = n.filter((o) => o < 0), a = n.filter((o) => o > 0);
  return /* @__PURE__ */ g.createElement(g.Fragment, null, i.map((o) => /* @__PURE__ */ g.createElement(vy, {
    key: o,
    zIndex: o,
    isPanorama: r
  })), t, a.map((o) => /* @__PURE__ */ g.createElement(vy, {
    key: o,
    zIndex: o,
    isPanorama: r
  })));
}
var yB = ["children"];
function gB(e, t) {
  if (e == null) return {};
  var r, n, i = bB(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function bB(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function wo() {
  return wo = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, wo.apply(null, arguments);
}
var xB = {
  width: "100%",
  height: "100%",
  /*
   * display: block is necessary here because the default for an SVG is display: inline,
   * which in some browsers (Chrome) adds a little bit of extra space above and below the SVG
   * to make space for the descender of letters like "g" and "y". This throws off the height calculation
   * and causes the container to grow indefinitely on each render with responsive=true.
   * Display: block removes that extra space.
   *
   * Interestingly, Firefox does not have this problem, but it doesn't hurt to add the style anyway.
   */
  display: "block"
}, wB = /* @__PURE__ */ Ce((e, t) => {
  var r = wc(), n = Oc(), i = hb();
  if (!Wt(r) || !Wt(n))
    return null;
  var {
    children: a,
    otherAttributes: o,
    title: l,
    desc: u
  } = e, s, c;
  return o != null && (typeof o.tabIndex == "number" ? s = o.tabIndex : s = i ? 0 : void 0, typeof o.role == "string" ? c = o.role : c = i ? "application" : void 0), /* @__PURE__ */ g.createElement(tc, wo({}, o, {
    title: l,
    desc: u,
    role: c,
    tabIndex: s,
    width: r,
    height: n,
    style: xB,
    ref: t
  }), a);
}), OB = (e) => {
  var {
    children: t
  } = e, r = B(zo);
  if (!r)
    return null;
  var {
    width: n,
    height: i,
    y: a,
    x: o
  } = r;
  return /* @__PURE__ */ g.createElement(tc, {
    width: n,
    height: i,
    x: o,
    y: a
  }, t);
}, hy = /* @__PURE__ */ Ce((e, t) => {
  var {
    children: r
  } = e, n = gB(e, yB), i = Fe();
  return i ? /* @__PURE__ */ g.createElement(OB, null, /* @__PURE__ */ g.createElement(py, {
    isPanorama: !0
  }, r)) : /* @__PURE__ */ g.createElement(wB, wo({
    ref: t
  }, n), /* @__PURE__ */ g.createElement(py, {
    isPanorama: !1
  }, r));
});
function PB() {
  var e = de(), [t, r] = re(null), n = B(sA);
  return fe(() => {
    if (t != null) {
      var i = t.getBoundingClientRect(), a = i.width / t.offsetWidth;
      G(a) && a !== n && e(V1(a));
    }
  }, [t, e, n]), r;
}
function my(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function EB(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? my(Object(r), !0).forEach(function(n) {
      AB(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : my(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function AB(e, t, r) {
  return (t = SB(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function SB(e) {
  var t = _B(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function _B(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function xr() {
  return xr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, xr.apply(null, arguments);
}
var jB = () => (sD(), null);
function Oo(e) {
  if (typeof e == "number")
    return e;
  if (typeof e == "string") {
    var t = parseFloat(e);
    if (!Number.isNaN(t))
      return t;
  }
  return 0;
}
var IB = /* @__PURE__ */ Ce((e, t) => {
  var r, n, i = H(null), [a, o] = re({
    containerWidth: Oo((r = e.style) === null || r === void 0 ? void 0 : r.width),
    containerHeight: Oo((n = e.style) === null || n === void 0 ? void 0 : n.height)
  }), l = ie((s, c) => {
    o((f) => {
      var d = Math.round(s), v = Math.round(c);
      return f.containerWidth === d && f.containerHeight === v ? f : {
        containerWidth: d,
        containerHeight: v
      };
    });
  }, []), u = ie((s) => {
    if (typeof t == "function" && t(s), s != null && typeof ResizeObserver < "u") {
      var {
        width: c,
        height: f
      } = s.getBoundingClientRect();
      l(c, f);
      var d = (p) => {
        var m = p[0];
        if (m != null) {
          var {
            width: h,
            height: y
          } = m.contentRect;
          l(h, y);
        }
      }, v = new ResizeObserver(d);
      v.observe(s), i.current = v;
    }
  }, [t, l]);
  return fe(() => () => {
    var s = i.current;
    s?.disconnect();
  }, [l]), /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(Ti, {
    width: a.containerWidth,
    height: a.containerHeight
  }), /* @__PURE__ */ g.createElement("div", xr({
    ref: u
  }, e)));
}), kB = /* @__PURE__ */ Ce((e, t) => {
  var {
    width: r,
    height: n
  } = e, [i, a] = re({
    containerWidth: Oo(r),
    containerHeight: Oo(n)
  }), o = ie((u, s) => {
    a((c) => {
      var f = Math.round(u), d = Math.round(s);
      return c.containerWidth === f && c.containerHeight === d ? c : {
        containerWidth: f,
        containerHeight: d
      };
    });
  }, []), l = ie((u) => {
    if (typeof t == "function" && t(u), u != null) {
      var {
        width: s,
        height: c
      } = u.getBoundingClientRect();
      o(s, c);
    }
  }, [t, o]);
  return /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(Ti, {
    width: i.containerWidth,
    height: i.containerHeight
  }), /* @__PURE__ */ g.createElement("div", xr({
    ref: l
  }, e)));
}), CB = /* @__PURE__ */ Ce((e, t) => {
  var {
    width: r,
    height: n
  } = e;
  return /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(Ti, {
    width: r,
    height: n
  }), /* @__PURE__ */ g.createElement("div", xr({
    ref: t
  }, e)));
}), TB = /* @__PURE__ */ Ce((e, t) => {
  var {
    width: r,
    height: n
  } = e;
  return typeof r == "string" || typeof n == "string" ? /* @__PURE__ */ g.createElement(kB, xr({}, e, {
    ref: t
  })) : typeof r == "number" && typeof n == "number" ? /* @__PURE__ */ g.createElement(CB, xr({}, e, {
    width: r,
    height: n,
    ref: t
  })) : /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(Ti, {
    width: r,
    height: n
  }), /* @__PURE__ */ g.createElement("div", xr({
    ref: t
  }, e)));
});
function NB(e) {
  return e ? IB : TB;
}
var DB = /* @__PURE__ */ Ce((e, t) => {
  var {
    children: r,
    className: n,
    height: i,
    onClick: a,
    onContextMenu: o,
    onDoubleClick: l,
    onMouseDown: u,
    onMouseEnter: s,
    onMouseLeave: c,
    onMouseMove: f,
    onMouseUp: d,
    onTouchEnd: v,
    onTouchMove: p,
    onTouchStart: m,
    style: h,
    width: y,
    responsive: b,
    dispatchTouchEvents: x = !0
  } = e, w = H(null), P = de(), [O, A] = re(null), [_, C] = re(null), T = PB(), N = bc(), j = N?.width > 0 ? N.width : y, I = N?.height > 0 ? N.height : i, $ = ie((R) => {
    T(R), typeof t == "function" && t(R), A(R), C(R), R != null && (w.current = R);
  }, [T, t, A, C]), K = ie((R) => {
    P(kw(R)), P(wt({
      handler: a,
      reactEvent: R
    }));
  }, [P, a]), V = ie((R) => {
    P(Xs(R)), P(wt({
      handler: s,
      reactEvent: R
    }));
  }, [P, s]), U = ie((R) => {
    P(ax()), P(wt({
      handler: c,
      reactEvent: R
    }));
  }, [P, c]), X = ie((R) => {
    P(Xs(R)), P(wt({
      handler: f,
      reactEvent: R
    }));
  }, [P, f]), q = ie(() => {
    P($w());
  }, [P]), Z = ie(() => {
    P(Rw());
  }, [P]), k = ie((R) => {
    P(Mw(R.key));
  }, [P]), W = ie((R) => {
    P(wt({
      handler: o,
      reactEvent: R
    }));
  }, [P, o]), Y = ie((R) => {
    P(wt({
      handler: l,
      reactEvent: R
    }));
  }, [P, l]), J = ie((R) => {
    P(wt({
      handler: u,
      reactEvent: R
    }));
  }, [P, u]), He = ie((R) => {
    P(wt({
      handler: d,
      reactEvent: R
    }));
  }, [P, d]), _t = ie((R) => {
    P(wt({
      handler: m,
      reactEvent: R
    }));
  }, [P, m]), ve = ie((R) => {
    x && P(Bw(R)), P(wt({
      handler: p,
      reactEvent: R
    }));
  }, [P, x, p]), we = ie((R) => {
    P(wt({
      handler: v,
      reactEvent: R
    }));
  }, [P, v]), z = NB(b);
  return /* @__PURE__ */ g.createElement(_x.Provider, {
    value: O
  }, /* @__PURE__ */ g.createElement(jy.Provider, {
    value: _
  }, /* @__PURE__ */ g.createElement(z, {
    width: j ?? h?.width,
    height: I ?? h?.height,
    className: te("recharts-wrapper", n),
    style: EB({
      position: "relative",
      cursor: "default",
      width: j,
      height: I
    }, h),
    onClick: K,
    onContextMenu: W,
    onDoubleClick: Y,
    onFocus: q,
    onBlur: Z,
    onKeyDown: k,
    onMouseDown: J,
    onMouseEnter: V,
    onMouseLeave: U,
    onMouseMove: X,
    onMouseUp: He,
    onTouchEnd: we,
    onTouchMove: ve,
    onTouchStart: _t,
    ref: $
  }, /* @__PURE__ */ g.createElement(jB, null), r)));
}), MB = ["width", "height", "responsive", "children", "className", "style", "compact", "title", "desc"];
function $B(e, t) {
  if (e == null) return {};
  var r, n, i = RB(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function RB(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var Hw = /* @__PURE__ */ Ce((e, t) => {
  var {
    width: r,
    height: n,
    responsive: i,
    children: a,
    className: o,
    style: l,
    compact: u,
    title: s,
    desc: c
  } = e, f = $B(e, MB), d = tt(f);
  return u ? /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(Ti, {
    width: r,
    height: n
  }), /* @__PURE__ */ g.createElement(hy, {
    otherAttributes: d,
    title: s,
    desc: c
  }, a)) : /* @__PURE__ */ g.createElement(DB, {
    className: o,
    style: l,
    width: r,
    height: n,
    responsive: i ?? !1,
    onClick: e.onClick,
    onMouseLeave: e.onMouseLeave,
    onMouseEnter: e.onMouseEnter,
    onMouseMove: e.onMouseMove,
    onMouseDown: e.onMouseDown,
    onMouseUp: e.onMouseUp,
    onContextMenu: e.onContextMenu,
    onDoubleClick: e.onDoubleClick,
    onTouchStart: e.onTouchStart,
    onTouchMove: e.onTouchMove,
    onTouchEnd: e.onTouchEnd
  }, /* @__PURE__ */ g.createElement(hy, {
    otherAttributes: d,
    title: s,
    desc: c,
    ref: t
  }, /* @__PURE__ */ g.createElement($R, null, a)));
});
function Zs() {
  return Zs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Zs.apply(null, arguments);
}
function yy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function LB(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yy(Object(r), !0).forEach(function(n) {
      zB(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function zB(e, t, r) {
  return (t = BB(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function BB(e) {
  var t = FB(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function FB(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var WB = {
  top: 5,
  right: 5,
  bottom: 5,
  left: 5
}, KB = LB({
  accessibilityLayer: !0,
  barCategoryGap: "10%",
  barGap: 4,
  layout: "horizontal",
  margin: WB,
  responsive: !1,
  reverseStackOrder: !1,
  stackOffset: "none",
  syncMethod: "index"
}, ad), od = /* @__PURE__ */ Ce(function(t, r) {
  var n, i = je(t.categoricalChartProps, KB), {
    chartName: a,
    defaultTooltipEventType: o,
    validateTooltipEventTypes: l,
    tooltipPayloadSearcher: u,
    categoricalChartProps: s
  } = t, c = {
    chartName: a,
    defaultTooltipEventType: o,
    validateTooltipEventTypes: l,
    tooltipPayloadSearcher: u,
    eventEmitter: void 0
  };
  return /* @__PURE__ */ g.createElement(Kw, {
    preloadedState: {
      options: c
    },
    reduxStoreName: (n = s.id) !== null && n !== void 0 ? n : a
  }, /* @__PURE__ */ g.createElement(ew, {
    chartData: s.data
  }), /* @__PURE__ */ g.createElement(qw, {
    layout: i.layout,
    margin: i.margin
  }), /* @__PURE__ */ g.createElement(Vw, {
    throttleDelay: i.throttleDelay,
    throttledEvents: i.throttledEvents
  }), /* @__PURE__ */ g.createElement(Uw, {
    baseValue: i.baseValue,
    accessibilityLayer: i.accessibilityLayer,
    barCategoryGap: i.barCategoryGap,
    maxBarSize: i.maxBarSize,
    stackOffset: i.stackOffset,
    barGap: i.barGap,
    barSize: i.barSize,
    syncId: i.syncId,
    syncMethod: i.syncMethod,
    className: i.className,
    reverseStackOrder: i.reverseStackOrder
  }), /* @__PURE__ */ g.createElement(Hw, Zs({}, i, {
    ref: r
  })));
}), qB = ["axis"], UB = /* @__PURE__ */ Ce((e, t) => /* @__PURE__ */ g.createElement(od, {
  chartName: "LineChart",
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: qB,
  tooltipPayloadSearcher: ul,
  categoricalChartProps: e,
  ref: t
})), VB = ["axis", "item"], HB = /* @__PURE__ */ Ce((e, t) => /* @__PURE__ */ g.createElement(od, {
  chartName: "BarChart",
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: VB,
  tooltipPayloadSearcher: ul,
  categoricalChartProps: e,
  ref: t
}));
function GB(e) {
  var t = de();
  return fe(() => {
    t(lB(e));
  }, [t, e]), null;
}
var YB = ["layout"];
function Js() {
  return Js = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Js.apply(null, arguments);
}
function XB(e, t) {
  if (e == null) return {};
  var r, n, i = ZB(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function ZB(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function gy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function JB(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? gy(Object(r), !0).forEach(function(n) {
      QB(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function QB(e, t, r) {
  return (t = eF(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function eF(e) {
  var t = tF(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function tF(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var rF = {
  top: 5,
  right: 5,
  bottom: 5,
  left: 5
}, Gw = JB({
  accessibilityLayer: !0,
  stackOffset: "none",
  barCategoryGap: "10%",
  barGap: 4,
  margin: rF,
  reverseStackOrder: !1,
  syncMethod: "index",
  layout: "radial",
  responsive: !1,
  cx: "50%",
  cy: "50%",
  innerRadius: 0,
  outerRadius: "80%"
}, ad), nF = /* @__PURE__ */ Ce(function(t, r) {
  var n, i = je(t.categoricalChartProps, Gw), {
    layout: a
  } = i, o = XB(i, YB), {
    chartName: l,
    defaultTooltipEventType: u,
    validateTooltipEventTypes: s,
    tooltipPayloadSearcher: c
  } = t, f = {
    chartName: l,
    defaultTooltipEventType: u,
    validateTooltipEventTypes: s,
    tooltipPayloadSearcher: c,
    eventEmitter: void 0
  };
  return /* @__PURE__ */ g.createElement(Kw, {
    preloadedState: {
      options: f
    },
    reduxStoreName: (n = i.id) !== null && n !== void 0 ? n : l
  }, /* @__PURE__ */ g.createElement(ew, {
    chartData: i.data
  }), /* @__PURE__ */ g.createElement(qw, {
    layout: a,
    margin: i.margin
  }), /* @__PURE__ */ g.createElement(Vw, {
    throttleDelay: i.throttleDelay,
    throttledEvents: i.throttledEvents
  }), /* @__PURE__ */ g.createElement(Uw, {
    baseValue: void 0,
    accessibilityLayer: i.accessibilityLayer,
    barCategoryGap: i.barCategoryGap,
    maxBarSize: i.maxBarSize,
    stackOffset: i.stackOffset,
    barGap: i.barGap,
    barSize: i.barSize,
    syncId: i.syncId,
    syncMethod: i.syncMethod,
    className: i.className,
    reverseStackOrder: i.reverseStackOrder
  }), /* @__PURE__ */ g.createElement(GB, {
    cx: i.cx,
    cy: i.cy,
    startAngle: i.startAngle,
    endAngle: i.endAngle,
    innerRadius: i.innerRadius,
    outerRadius: i.outerRadius
  }), /* @__PURE__ */ g.createElement(Hw, Js({}, o, {
    ref: r
  })));
});
function by(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function xy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? by(Object(r), !0).forEach(function(n) {
      iF(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : by(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function iF(e, t, r) {
  return (t = aF(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function aF(e) {
  var t = oF(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function oF(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var lF = ["item"], uF = xy(xy({}, Gw), {}, {
  layout: "centric",
  startAngle: 0,
  endAngle: 360
}), Yw = /* @__PURE__ */ Ce((e, t) => {
  var r = je(e, uF);
  return /* @__PURE__ */ g.createElement(nF, {
    chartName: "PieChart",
    defaultTooltipEventType: "item",
    validateTooltipEventTypes: lF,
    tooltipPayloadSearcher: ul,
    categoricalChartProps: r,
    ref: t
  });
}), sF = ["axis"], cF = /* @__PURE__ */ Ce((e, t) => /* @__PURE__ */ g.createElement(od, {
  chartName: "AreaChart",
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: sF,
  tooltipPayloadSearcher: ul,
  categoricalChartProps: e,
  ref: t
}));
const mt = ({
  title: e,
  subtitle: t,
  children: r,
  action: n,
  className: i = ""
}) => /* @__PURE__ */ E.jsxs("div", { className: `widget-card ${i}`, children: [
  /* @__PURE__ */ E.jsxs("div", { className: "widget-card-header", children: [
    /* @__PURE__ */ E.jsxs("div", { children: [
      /* @__PURE__ */ E.jsx("div", { className: "widget-card-title", children: e }),
      t && /* @__PURE__ */ E.jsx("div", { className: "widget-card-subtitle", children: t })
    ] }),
    n && /* @__PURE__ */ E.jsx("button", { className: "widget-card-action", onClick: n.onClick, children: n.icon || "⋮" })
  ] }),
  /* @__PURE__ */ E.jsx("div", { className: "widget-card-content", children: r })
] }), fF = ({
  id: e,
  title: t = "Bar Chart",
  subtitle: r,
  data: n = [],
  dataKeys: i = ["value"],
  action: a
}) => {
  const o = Pi(i.length);
  return /* @__PURE__ */ E.jsx(mt, { title: t, subtitle: r, action: a, children: /* @__PURE__ */ E.jsx("div", { className: "chart-wrapper", children: /* @__PURE__ */ E.jsx(Ci, { width: "100%", height: "100%", children: /* @__PURE__ */ E.jsxs(HB, { data: n, children: [
    /* @__PURE__ */ E.jsx(yl, { strokeDasharray: "3 3", stroke: "var(--border-color)" }),
    /* @__PURE__ */ E.jsx(bl, { dataKey: "name", stroke: "var(--text-secondary)" }),
    /* @__PURE__ */ E.jsx(xl, { stroke: "var(--text-secondary)" }),
    /* @__PURE__ */ E.jsx(
      Gi,
      {
        contentStyle: {
          backgroundColor: "var(--card-bg)",
          border: "1px solid var(--border-color)",
          borderRadius: "8px"
        },
        labelStyle: { color: "var(--text-primary)" }
      }
    ),
    /* @__PURE__ */ E.jsx(kn, { wrapperStyle: { paddingTop: "1rem" } }),
    i.map((l, u) => /* @__PURE__ */ E.jsx(jw, { dataKey: l, fill: o[u], radius: [8, 8, 0, 0] }, l))
  ] }) }) }) });
}, dF = ({
  id: e,
  title: t = "Line Chart",
  subtitle: r,
  data: n = [],
  dataKeys: i = ["value"],
  action: a
}) => {
  const o = Pi(i.length);
  return /* @__PURE__ */ E.jsx(mt, { title: t, subtitle: r, action: a, children: /* @__PURE__ */ E.jsx("div", { className: "chart-wrapper", children: /* @__PURE__ */ E.jsx(Ci, { width: "100%", height: "100%", children: /* @__PURE__ */ E.jsxs(UB, { data: n, children: [
    /* @__PURE__ */ E.jsx(yl, { strokeDasharray: "3 3", stroke: "var(--border-color)" }),
    /* @__PURE__ */ E.jsx(bl, { dataKey: "name", stroke: "var(--text-secondary)" }),
    /* @__PURE__ */ E.jsx(xl, { stroke: "var(--text-secondary)" }),
    /* @__PURE__ */ E.jsx(
      Gi,
      {
        contentStyle: {
          backgroundColor: "var(--card-bg)",
          border: "1px solid var(--border-color)",
          borderRadius: "8px"
        },
        labelStyle: { color: "var(--text-primary)" }
      }
    ),
    /* @__PURE__ */ E.jsx(kn, { wrapperStyle: { paddingTop: "1rem" } }),
    i.map((l, u) => /* @__PURE__ */ E.jsx(
      hw,
      {
        type: "monotone",
        dataKey: l,
        stroke: o[u],
        strokeWidth: 2,
        dot: { fill: o[u], r: 4 },
        activeDot: { r: 6 }
      },
      l
    ))
  ] }) }) }) });
}, vF = ({
  id: e,
  title: t = "Pie Chart",
  subtitle: r,
  data: n = [],
  action: i
}) => {
  const a = Pi(n.length);
  return /* @__PURE__ */ E.jsx(mt, { title: t, subtitle: r, action: i, children: /* @__PURE__ */ E.jsx("div", { className: "chart-wrapper", children: /* @__PURE__ */ E.jsx(Ci, { width: "100%", height: "100%", children: /* @__PURE__ */ E.jsxs(Yw, { children: [
    /* @__PURE__ */ E.jsx(
      Zf,
      {
        data: n,
        cx: "50%",
        cy: "50%",
        labelLine: !1,
        label: ({ name: o, percent: l }) => `${o} ${(l * 100).toFixed(0)}%`,
        outerRadius: 80,
        fill: "#8884d8",
        dataKey: "value",
        children: n.map((o, l) => /* @__PURE__ */ E.jsx(Wn, { fill: a[l] }, `cell-${l}`))
      }
    ),
    /* @__PURE__ */ E.jsx(
      Gi,
      {
        contentStyle: {
          backgroundColor: "var(--card-bg)",
          border: "1px solid var(--border-color)",
          borderRadius: "8px"
        },
        labelStyle: { color: "var(--text-primary)" }
      }
    ),
    /* @__PURE__ */ E.jsx(kn, {})
  ] }) }) }) });
}, pF = ({
  id: e,
  title: t = "Area Chart",
  subtitle: r,
  data: n = [],
  dataKeys: i = ["value"],
  action: a
}) => {
  const o = Pi(i.length);
  return /* @__PURE__ */ E.jsx(mt, { title: t, subtitle: r, action: a, children: /* @__PURE__ */ E.jsx("div", { className: "chart-wrapper", children: /* @__PURE__ */ E.jsx(Ci, { width: "100%", height: "100%", children: /* @__PURE__ */ E.jsxs(cF, { data: n, children: [
    /* @__PURE__ */ E.jsx(yl, { strokeDasharray: "3 3", stroke: "var(--border-color)" }),
    /* @__PURE__ */ E.jsx(bl, { dataKey: "name", stroke: "var(--text-secondary)" }),
    /* @__PURE__ */ E.jsx(xl, { stroke: "var(--text-secondary)" }),
    /* @__PURE__ */ E.jsx(
      Gi,
      {
        contentStyle: {
          backgroundColor: "var(--card-bg)",
          border: "1px solid var(--border-color)",
          borderRadius: "8px"
        },
        labelStyle: { color: "var(--text-primary)" }
      }
    ),
    /* @__PURE__ */ E.jsx(kn, { wrapperStyle: { paddingTop: "1rem" } }),
    i.map((l, u) => /* @__PURE__ */ E.jsx(
      Pw,
      {
        type: "monotone",
        dataKey: l,
        fill: o[u],
        stroke: o[u],
        fillOpacity: 0.6
      },
      l
    ))
  ] }) }) }) });
}, hF = ({
  id: e,
  title: t = "Donut Chart",
  subtitle: r,
  data: n = [],
  action: i
}) => {
  const a = Pi(n.length);
  return /* @__PURE__ */ E.jsx(mt, { title: t, subtitle: r, action: i, children: /* @__PURE__ */ E.jsx("div", { className: "chart-wrapper", children: /* @__PURE__ */ E.jsx(Ci, { width: "100%", height: "100%", children: /* @__PURE__ */ E.jsxs(Yw, { children: [
    /* @__PURE__ */ E.jsx(
      Zf,
      {
        data: n,
        cx: "50%",
        cy: "50%",
        innerRadius: 60,
        outerRadius: 90,
        fill: "#8884d8",
        paddingAngle: 2,
        dataKey: "value",
        label: ({ name: o, percent: l }) => `${o} ${(l * 100).toFixed(0)}%`,
        children: n.map((o, l) => /* @__PURE__ */ E.jsx(Wn, { fill: a[l] }, `cell-${l}`))
      }
    ),
    /* @__PURE__ */ E.jsx(
      Gi,
      {
        contentStyle: {
          backgroundColor: "var(--card-bg)",
          border: "1px solid var(--border-color)",
          borderRadius: "8px"
        },
        labelStyle: { color: "var(--text-primary)" }
      }
    ),
    /* @__PURE__ */ E.jsx(kn, {})
  ] }) }) }) });
}, mF = ({
  id: e,
  title: t = "List",
  subtitle: r,
  items: n = [],
  labelKey: i = "label",
  valueKey: a = "value",
  action: o
}) => !n || n.length === 0 ? /* @__PURE__ */ E.jsx(mt, { title: t, subtitle: r, action: o, children: /* @__PURE__ */ E.jsx(
  Oi,
  {
    icon: "📋",
    title: "No items",
    description: "There are no items to display."
  }
) }) : /* @__PURE__ */ E.jsx(mt, { title: t, subtitle: r, action: o, children: /* @__PURE__ */ E.jsx("div", { className: "simple-list", children: n.map((l, u) => /* @__PURE__ */ E.jsxs("div", { className: "simple-list-item", children: [
  /* @__PURE__ */ E.jsx("div", { className: "simple-list-item-label", children: typeof l == "object" ? l[i] : l }),
  a && typeof l == "object" && l[a] && /* @__PURE__ */ E.jsx("div", { className: "simple-list-item-value", children: l[a] })
] }, u)) }) }), yF = ({
  id: e,
  title: t = "Items",
  subtitle: r,
  items: n = [],
  labelKey: i = "label",
  descriptionKey: a = "description",
  iconKey: o = "icon",
  action: l
}) => !n || n.length === 0 ? /* @__PURE__ */ E.jsx(mt, { title: t, subtitle: r, action: l, children: /* @__PURE__ */ E.jsx(
  Oi,
  {
    icon: "🎯",
    title: "No items",
    description: "There are no items to display."
  }
) }) : /* @__PURE__ */ E.jsx(mt, { title: t, subtitle: r, action: l, children: /* @__PURE__ */ E.jsx("div", { className: "icon-list", children: n.map((u, s) => /* @__PURE__ */ E.jsxs("div", { className: "icon-list-item", children: [
  u[o] && /* @__PURE__ */ E.jsx("div", { className: "icon-list-item-icon", children: u[o] }),
  /* @__PURE__ */ E.jsxs("div", { className: "icon-list-item-content", children: [
    /* @__PURE__ */ E.jsx("div", { className: "icon-list-item-label", children: u[i] }),
    u[a] && /* @__PURE__ */ E.jsx("div", { className: "icon-list-item-description", children: u[a] })
  ] })
] }, s)) }) }), gF = ({
  id: e,
  title: t = "Notifications",
  subtitle: r,
  notifications: n = [],
  titleKey: i = "title",
  messageKey: a = "message",
  typeKey: o = "type",
  iconKey: l = "icon",
  timeKey: u = "timestamp",
  action: s
}) => !n || n.length === 0 ? /* @__PURE__ */ E.jsx(mt, { title: t, subtitle: r, action: s, children: /* @__PURE__ */ E.jsx(
  Oi,
  {
    icon: "🔔",
    title: "No notifications",
    description: "You're all caught up!"
  }
) }) : /* @__PURE__ */ E.jsx(mt, { title: t, subtitle: r, action: s, children: /* @__PURE__ */ E.jsx("div", { className: "notification-list", children: n.map((c, f) => /* @__PURE__ */ E.jsxs(
  "div",
  {
    className: `notification-item ${c[o] || "info"}`,
    children: [
      c[l] && /* @__PURE__ */ E.jsx("div", { className: "notification-item-icon", children: c[l] }),
      /* @__PURE__ */ E.jsxs("div", { className: "notification-item-content", children: [
        /* @__PURE__ */ E.jsx("div", { className: "notification-item-title", children: c[i] }),
        c[a] && /* @__PURE__ */ E.jsx("div", { className: "notification-item-message", children: c[a] }),
        c[u] && /* @__PURE__ */ E.jsx("div", { className: "notification-item-time", children: dO(c[u], "time") })
      ] })
    ]
  },
  f
)) }) }), bF = ({
  id: e,
  title: t = "Table",
  subtitle: r,
  data: n = [],
  columns: i = [],
  action: a
}) => {
  const [o, l] = re({ key: null, direction: "asc" });
  if (!n || n.length === 0)
    return /* @__PURE__ */ E.jsx(mt, { title: t, subtitle: r, action: a, children: /* @__PURE__ */ E.jsx(
      Oi,
      {
        icon: "📊",
        title: "No data",
        description: "There is no data to display in this table."
      }
    ) });
  const u = (f) => {
    l({
      key: f,
      direction: o.key === f && o.direction === "asc" ? "desc" : "asc"
    });
  }, c = o.key ? [...n].sort((d, v) => {
    const p = d[o.key], m = v[o.key];
    return typeof p == "string" ? o.direction === "asc" ? p.localeCompare(m) : m.localeCompare(p) : o.direction === "asc" ? p - m : m - p;
  }) : n;
  return /* @__PURE__ */ E.jsx(mt, { title: t, subtitle: r, action: a, children: /* @__PURE__ */ E.jsx("div", { style: { overflowX: "auto" }, children: /* @__PURE__ */ E.jsxs("table", { className: "data-table", children: [
    /* @__PURE__ */ E.jsx("thead", { children: /* @__PURE__ */ E.jsx("tr", { children: i.map((f) => /* @__PURE__ */ E.jsxs(
      "th",
      {
        onClick: () => u(f.key),
        style: { cursor: "pointer", userSelect: "none" },
        children: [
          f.label || f.key,
          o.key === f.key && /* @__PURE__ */ E.jsx("span", { style: { marginLeft: "0.5rem" }, children: o.direction === "asc" ? "↑" : "↓" })
        ]
      },
      f.key
    )) }) }),
    /* @__PURE__ */ E.jsx("tbody", { children: c.map((f, d) => /* @__PURE__ */ E.jsx("tr", { children: i.map((v) => /* @__PURE__ */ E.jsx(
      "td",
      {
        className: v.type === "numeric" ? "data-table-cell-numeric" : "",
        children: f[v.key]
      },
      `${d}-${v.key}`
    )) }, d)) })
  ] }) }) });
}, xF = {
  // Dashboard Widgets
  "stats-card": vO,
  // Card Design Variants
  cardDesign1: pO,
  cardDesign2: hO,
  cardDesign3: mO,
  // Chart Widgets
  "bar-chart": fF,
  "line-chart": dF,
  "pie-chart": vF,
  "area-chart": pF,
  "donut-chart": hF,
  // List Widgets
  "simple-list": mF,
  "icon-list": yF,
  "notification-list": gF,
  "data-table": bF
}, Ea = (e, t = "item") => String(e || t).trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || t, wF = (e = []) => e.map((t, r) => ({
  name: `Item ${r + 1}`,
  value: t
})), Xw = {
  bar: "bar-chart",
  line: "line-chart",
  area: "area-chart",
  pie: "pie-chart",
  donut: "donut-chart"
}, OF = (e, t) => {
  const r = Xw[e.type] || e.type, n = {
    ...e,
    id: e.id || `chart-${t + 1}`,
    title: e.title || `${e.type || "chart"} chart`,
    type: r
  };
  return e.values && !e.data ? {
    ...n,
    data: wF(e.values),
    dataKeys: e.dataKeys || ["value"]
  } : n;
}, wy = (e, t, r) => ({
  ...e,
  id: e.id || `${Ea(r)}-widget-${t + 1}`,
  type: Xw[e.type] || e.type
}), PF = (e, t) => {
  const r = e.name || e.title || `Page ${t + 1}`, n = e.widgets || e.elements || [], i = e.charts || [], o = n.length > 0 || i.length > 0 ? [
    {
      id: `${Ea(r)}-section`,
      title: e.sectionTitle,
      description: e.sectionDescription,
      gridCols: e.gridCols || 1,
      widgets: [
        ...n.map(
          (l, u) => wy(l, u, r)
        ),
        ...i.map(OF)
      ]
    }
  ] : (e.sections || []).map((l, u) => ({
    ...l,
    id: l.id || `${Ea(r)}-section-${u + 1}`,
    widgets: (l.widgets || l.elements || []).map(
      (s, c) => wy(s, c, r)
    )
  }));
  return {
    ...e,
    id: e.id || Ea(r, `page-${t + 1}`),
    title: e.title || r,
    icon: e.icon || null,
    sections: o
  };
}, EF = (e) => {
  if (!e)
    throw new Error("Configuration object is required");
  if (!e.pages || !Array.isArray(e.pages))
    throw new Error("Configuration must contain a pages array");
  return !0;
}, AF = (e) => {
  EF(e);
  const t = e.pages.map(PF), r = t.length === 1;
  return {
    name: e.name || "Dashboard Created Using akhilesh-ui-verse",
    layoutMode: e.layoutMode || "sidebar",
    theme: e.theme || "light",
    accentColor: e.accentColor || "blue",
    design: e.design || "default",
    navbar: e.navbar ?? !r,
    profile: e.profile,
    pages: t
  };
}, HF = ({ config: e, components: t = {} }) => {
  const r = AF(e);
  return /* @__PURE__ */ E.jsx(
    cO,
    {
      config: r,
      rendererMap: { ...xF, ...t }
    }
  );
};
export {
  HF as AkDashboard
};

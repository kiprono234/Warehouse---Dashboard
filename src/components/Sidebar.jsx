import React from 'react';
import PropTypes from 'prop-types';

const navItems = [
  { label: 'Dashboard', icon: '⌂' },
  { label: 'Inventory', icon: '▣' },
  { label: 'Inbound', icon: '⇅' },
  { label: 'Outbound', icon: '⇅' },
  { label: 'Movements', icon: '↔' },
  { label: 'Reports', icon: '▤' },
  { label: 'Users & Roles', icon: '◍' },
  { label: 'Settings', icon: '⚙' },
];

export default function Sidebar({ activeNav = 'Dashboard', onNavClick = () => {} }) {
  return (
    <aside className="sidebar" aria-label="Main sidebar">
      <div className="sidebar-brand">
        <div className="brand-mark" aria-hidden="true" />
        <div className="brand-text">
          <strong>Warehouse</strong>
          <span>.</span>
        </div>
      </div>

      <nav className="sidebar-nav" aria-label="Sidebar navigation">
        <ul className="nav-list">
          {navItems.map((item) => {
            const isActive = item.label === activeNav;
            return (
              <li key={item.label}>
                <button
                  type="button"
                  className={`nav-item ${isActive ? 'active' : ''}`}
                  onClick={() => onNavClick(item.label)}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span className="nav-icon" aria-hidden="true">{item.icon}</span>
                  <span className="nav-label">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="sidebar-footer">Warehouse Management</div>
    </aside>
  );
}

Sidebar.propTypes = {
  activeNav: PropTypes.string,
  onNavClick: PropTypes.func,
};
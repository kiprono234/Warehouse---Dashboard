const navItems = [
    { label: 'Dashboard', icon: '⌂', active: true },
    { label: 'Inventory', icon: '▣' },
    { label: 'Inbound', icon: '⇅' },
    { label: 'Outbound', icon: '⇅' },
    { label: 'Movements', icon: '↔' },
    { label: 'Reports', icon: '▤' },
    { label: 'Users & Roles', icon: '◍' },
    { label: 'Settings', icon: '⚙' },
  ];
  
  export default function Sidebar() {
    return (
      <aside className="sidebar">
        <div className="sidebar-brand">
          <div className="brand-mark" />
          <div className="brand-text">
            <strong>Warehouse</strong>
            <span>.</span>
          </div>
        </div>
  
        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <button
              type="button"
              key={item.label}
              className={`nav-item ${item.active ? 'active' : ''}`}
            >
              <span className="nav-icon">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
  
        <div className="sidebar-footer">Warehouse Management</div>
      </aside>
    );
  }
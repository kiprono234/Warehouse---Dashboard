export default function Header() {
    return (
      <>
        <div className="topbar">
          <div className="topbar-left">
            <div className="window-dots">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </div>
          </div>
  
          <div className="topbar-right">
            <button className="icon-btn" type="button">⌕</button>
            <button className="icon-btn" type="button">🔔</button>
            <button className="icon-btn" type="button">⚙</button>
          </div>
        </div>
  
        <div className="page-header">
          <div className="warehouse-title">
            <strong> Warehouse Dashboard Overview</strong>
          </div>
  
          <div className="header-actions">
            <button className="icon-btn" type="button">⊕</button>
            <button className="icon-btn" type="button">☰</button>
            <div className="user-chip">
              <div className="avatar" />
              <span>User.</span>
            </div>
          </div>
        </div>
  
        <div className="welcome-row">
          <div className="welcome-meta">
            <div className="avatar large" />
            <div>
              <strong>Welcome, !</strong>
              <p>Here&apos;s what&apos;s happening in your warehouse today.</p>
            </div>
          </div>
  
          <div className="welcome-actions">
            <button className="icon-btn" type="button">🔔</button>
            <button className="icon-btn" type="button">?</button>
          </div>
        </div>
      </>
    );
  }
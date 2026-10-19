export default function StatCard({ title, value, unit, change, trend, description, accent }) {
    const getIconClass = () => {
      if (accent === 'green') return 'green';
      if (accent === 'blue') return 'blue';
      return 'red';
    };
  
    const getIconSymbol = () => {
      if (accent === 'green') return '▣';
      if (accent === 'blue') return '▤';
      return '⚠';
    };
  
    return (
      <div className={`stat-card ${accent === 'red' ? 'danger' : ''}`}>
        <div className={`stat-icon ${getIconClass()}`}>
          {getIconSymbol()}
        </div>
        <div className="stat-main">
          <h3>{title}</h3>
          <div className="stat-value">
            <span className="number">{value}</span>
            <span className="unit">{unit}</span>
          </div>
          <div className={`stat-meta ${trend}`}>
            <span>{change}</span>
            <span>{description}</span>
          </div>
        </div>
      </div>
    );
  }
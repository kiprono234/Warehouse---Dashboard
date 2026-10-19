export default function StockChart({ data }) {
    const total = data.reduce((sum, item) => sum + item.value, 0);
  
    return (
      <div className="card-panel">
        <div className="card-header">
          <h3>Stock Overview</h3>
          <a href="#view">View Details</a>
        </div>
  
        <div className="bar-chart">
          <div className="bar-group">
            <div className="bar-stack">
              {data.map((item) => (
                <span
                  key={item.label}
                  className={`segment ${item.color}`}
                  style={{ height: `${(item.value / total) * 100}%` }}
                />
              ))}
            </div>
          </div>
        </div>
  
        <div className="legend">
          {data.map((item) => (
            <span key={item.label}>
              <i className={`swatch ${item.color}`} />
              {item.label}
            </span>
          ))}
        </div>
      </div>
    );
  }
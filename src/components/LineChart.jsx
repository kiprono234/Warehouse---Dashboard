export default function LineChart({ data }) {
    const maxValue = 32;
  
    return (
      <div className="card-panel">
        <div className="card-header">
          <h3>Inbound vs Outbound</h3>
          <a href="#view">Last 7 days</a>
        </div>
  
        <div className="line-chart">
          <svg viewBox="0 0 420 160" preserveAspectRatio="none">
            <g>
              {Array.from({ length: 5 }).map((_, i) => (
                <line
                  key={`grid-${i}`}
                  x1="0"
                  x2="420"
                  y1={20 + i * 30}
                  y2={20 + i * 30}
                  stroke="rgba(255,255,255,0.08)"
                  strokeDasharray="4 6"
                />
              ))}
  
              <polyline
                fill="none"
                stroke="#4cc4ff"
                strokeWidth="3"
                points="0,120 45,105 90,110 135,90 180,75 225,98 270,84 315,76 360,70 420,86"
              />
  
              <polyline
                fill="none"
                stroke="#4cd8a7"
                strokeWidth="3"
                points="0,110 45,100 90,86 135,80 180,68 225,72 270,66 315,74 360,60 420,74"
              />
            </g>
          </svg>
        </div>
  
        <div className="axis-labels">
          {data.slice(0, 9).map((item) => (
            <span key={item.day}>{item.day}</span>
          ))}
        </div>
  
        <div className="legend">
          <span><i className="swatch blue" />Inbound</span>
          <span><i className="swatch green" />Outbound</span>
        </div>
      </div>
    );
  }
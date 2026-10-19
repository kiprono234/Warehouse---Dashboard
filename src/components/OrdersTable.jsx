export default function OrdersTable({ title, data, isStock = false }) {
    return (
      <div className="card-panel">
        <div className="card-header">
          <h3>{title}</h3>
          <a href="#view">View All</a>
        </div>
  
        <table className="data-table">
          <thead>
            <tr>
              {isStock ? (
                <>
                  <th>SKU</th>
                  <th>Product Name</th>
                  <th>Stock</th>
                </>
              ) : (
                <>
                  <th>Order ID</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Date</th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={isStock ? row.sku : row.id}>
                {isStock ? (
                  <>
                    <td>{row.sku}</td>
                    <td>{row.product}</td>
                    <td>
                      <span className="stock-cell">
                        <i className="stock-icon" />
                        {row.stock}
                      </span>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{row.id}</td>
                    <td>{row.type}</td>
                    <td>
                      <span className={`badge ${row.status.toLowerCase().replace(/\s/g, '')}`}>
                        {row.status}
                      </span>
                    </td>
                    <td>{row.date}</td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
export default function WarehouseMap() {
    return (
      <div className="map-panel">
        <div className="card-header">
          <h3>Warehouse Map</h3>
          <a href="#view">View Details</a>
        </div>
  
        <div className="warehouse-map">
          <div className="zone zone-a">Zone A</div>
          <div className="zone zone-b">Zone B</div>
          <div className="zone zone-c">Zone C</div>
          <div className="warehouse-base" />
          <div className="shelf shelf-1" />
          <div className="shelf shelf-2" />
          <div className="shelf shelf-3" />
          <div className="pallet pallet-1" />
          <div className="pallet pallet-2" />
          <div className="pallet pallet-3" />
          <div className="pallet pallet-4" />
          <div className="shipping" />
        </div>
      </div>
    );
  }
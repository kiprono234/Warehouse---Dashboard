import { useState } from 'react';
import './styles/dashboard.scss';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatCard from './components/StatCard';
import StockChart from './components/StockChart';
import LineChart from './components/LineChart';
import OrdersTable from './components/OrdersTable';
import TaskList from './components/TaskList';
import WarehouseMap from './components/WarehouseMap';
import {
  stats,
  recentOrdersData,
  lowStockData,
  tasksData,
  stockChartData,
  lineChartData,
} from './data/dashboardData';

function App() {
  const [activeNav, setActiveNav] = useState('Dashboard');

  return (
    <div className="app-shell">
      <Sidebar activeNav={activeNav} onNavClick={setActiveNav} />

      <main className="dashboard-shell">
        <Header />

        <section className="content-area">
          {/* Stats Grid */}
          <div className="stats-grid">
            {stats.map((stat) => (
              <StatCard key={stat.title} {...stat} />
            ))}
          </div>

          {/* Charts */}
          <div className="panel-grid">
            <StockChart data={stockChartData} />
            <LineChart data={lineChartData} />
          </div>

          {/* Tables */}
          <div className="bottom-grid">
            <OrdersTable title="Recent Orders" data={recentOrdersData} />
            <OrdersTable title="Low Stock Items" data={lowStockData} isStock />
          </div>

          {/* Task List & Warehouse Map */}
          <div className="lower-grid">
            <TaskList tasks={tasksData} />
            <WarehouseMap />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
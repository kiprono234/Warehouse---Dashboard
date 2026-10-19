export const stats = [
    {
      title: 'Total Stock',
      value: '12,450',
      unit: 'items',
      change: '+12%',
      trend: 'up',
      description: 'vs. last week',
      accent: 'green',
    },
    {
      title: 'Inbound Orders',
      value: '8',
      unit: 'pending',
      change: '+2',
      trend: 'up',
      description: 'vs. yesterday',
      accent: 'blue',
    },
    {
      title: 'Outbound Orders',
      value: '15',
      unit: 'pending',
      change: '+4',
      trend: 'up',
      description: 'vs. yesterday',
      accent: 'blue',
    },
    {
      title: 'Low Stock Alerts',
      value: '5',
      unit: 'items',
      change: '-2',
      trend: 'down',
      description: 'vs. last week',
      accent: 'red',
    },
  ];
  
  export const recentOrdersData = [
    { id: '#PO-1023', type: 'Purchase', status: 'Received', date: 'Today' },
    { id: '#SO-2048', type: 'Sales', status: 'Picking', date: '02/14/2024' },
    { id: '#PO-1021', type: 'Purchase', status: 'Pending', date: '02/13/2024' },
    { id: '#SO-2045', type: 'Sales', status: 'Shipped', date: '02/12/2024' },
    { id: '#PO-1018', type: 'Purchase', status: 'Received', date: '02/11/2024' },
  ];
  
  export const lowStockData = [
    { sku: 'ELE-1124', product: 'Wireless Mouse', stock: 5 },
    { sku: 'PHM-2098', product: 'Asiri Tablets', stock: 8 },
    { sku: 'FMCG-3010', product: 'Canned Soup', stock: 12 },
    { sku: 'ELE-1076', product: 'USB Keyboard', stock: 4 },
    { sku: 'GEN-1405', product: 'Packing Tape', stock: 7 },
  ];
  
  export const tasksData = [
    { id: 1, text: 'Receive shipment PO-1023', completed: true },
    { id: 2, text: 'Pick order SO-2048', completed: true },
    { id: 3, text: 'Audit aisle B3', completed: false },
  ];

export const stockChartData = [
  { label: "Electronics", value: 4500, color: "blue" },
  { label: "FMCG", value: 3200, color: "green" },
  { label: "Healthcare", value: 2800, color: "orange" },
  { label: "General", value: 1950, color: "gray" },
];

export const lineChartData = [
  { day: "Mon" },
  { day: "Tue" },
  { day: "Wed" },
  { day: "Thu" },
  { day: "Fri" },
  { day: "Sat" },
  { day: "Sun" },
];

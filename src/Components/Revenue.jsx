import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
} from 'recharts';

const dummyData = [
  { month: 'Jan', revenue: 1200 },
  { month: 'Feb', revenue: 2100 },
  { month: 'Mar', revenue: 800 },
  { month: 'Apr', revenue: 1600 },
  { month: 'May', revenue: 1900 },
  { month: 'Jun', revenue: 2300 },
  { month: 'Jul', revenue: 2300 },
  { month: 'Aug', revenue: 2300 },
  { month: 'Sept', revenue: 2300 },
  { month: 'Oct', revenue: 2300 },
  { month: 'Nov', revenue: 2300 },
  { month: 'Dec', revenue: 2300 },
];

const Revenue = () => {
  const totalRevenue = dummyData.reduce((sum, entry) => sum + entry.revenue, 0);

  return (
    <div className="bg-white rounded-xl shadow-md p-4 max-h-min flex-1">
      <div className="mb-2">
        <h2 className="text-md font-semibold text-gray-700">Earnings Report</h2>
        <p className="text-xs text-gray-500">This chart shows your monthly income.</p>
      </div>

      <div className="mb-4">
        <h3 className="text-sm font-medium text-gray-600">
          Total Revenue: <span className="text-green-600 font-bold">₱{totalRevenue.toLocaleString()}</span>
        </h3>
      </div>

      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={dummyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" fontSize={10} />
            <YAxis tickFormatter={(val) => `₱${val}`} fontSize={10} />
            <Tooltip formatter={(value) => `₱${value}`} />
            <Bar dataKey="revenue" fill="#10b981" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Revenue;

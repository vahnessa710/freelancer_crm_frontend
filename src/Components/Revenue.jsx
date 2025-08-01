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
];

const Revenue = () => {
  const totalRevenue = dummyData.reduce((sum, entry) => sum + entry.revenue, 0);

  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-4xl">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-700">Earnings Report</h2>
        <p className="text-sm text-gray-500">This chart shows your monthly income.</p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-600">Total Revenue: <span className="text-green-600 font-bold">₱{totalRevenue.toLocaleString()}</span></h3>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={dummyData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis tickFormatter={(val) => `₱${val}`} />
          <Tooltip formatter={(value) => `₱${value}`} />
          <Bar dataKey="revenue" fill="#10b981" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Revenue;

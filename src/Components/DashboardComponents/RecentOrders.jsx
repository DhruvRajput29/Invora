const RecentOrders = ({ orders }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm mt-6 p-5">
      <div className="flex justify-between items-center mb-5">
        <div>
          <h2 className="font-semibold text-lg">
            Recent Orders
          </h2>

          <p className="text-sm text-gray-400">
            Latest customer orders
          </p>
        </div>

        <button className="border-2 rounded-full px-4 py-2 text-sm transition-all hover:bg-blue-500 hover:text-white ">
          View All
        </button>
      </div>

      <table className="w-full">
        <thead className="border-b">
          <tr className="text-left text-gray-500">
            <th className="py-3">#ID</th>
            <th>Customer</th>
            <th>Status</th>
            <th>Total</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr
              key={order.id}
              className="border-b last:border-none"
            >
              <td className="py-4">{order.id}</td>

              <td>{order.customer}</td>

              <td>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  {order.status}
                </span>
              </td>

              <td className="text-blue-600 font-semibold">
                {order.total}
              </td>

              <td>{order.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;
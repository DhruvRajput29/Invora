const filters = [
  "All",
  "Inventory",
  "Invoices",
  "Orders",
  "Suppliers",
  "Customers",
  "System",
];

const NotificationFilters = ({ filter, setFilter }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm">
      <div className="flex flex-wrap gap-3">
        {filters.map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`px-5 py-2 rounded-full font-medium transition
              
              ${
                filter === item
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }
              
            `}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NotificationFilters;

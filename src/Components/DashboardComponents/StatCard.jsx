const StatCard = ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-5 relative hover:shadow-md transition">
      <div
        className={`w-5 h-5 rounded-full absolute right-5 top-6 ${item.dot}`}
      ></div>

      <p className="text-gray-500 text-lg">{item.title}</p>

      <h2 className="text-3xl font-bold mt-2">{item.value}</h2>

      <p className="text-green-500 text-sm mt-3">{item.growth}</p>
    </div>
  );
};

export default StatCard;
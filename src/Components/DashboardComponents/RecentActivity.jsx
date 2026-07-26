const RecentActivity = ({ activities }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5">
      <h2 className="font-semibold text-lg mb-6">
        Recent Activity
      </h2>

      <div className="space-y-6">
        {activities.map((item, index) => (
          <div className="flex gap-3" key={index}>
            <div className={`w-3 h-3 rounded-full mt-2 ${item.color}`}></div>

            <div>
              <p className="font-medium">{item.title}</p>

              <p className="text-gray-400 text-sm">
                {item.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
import { BellOff } from "lucide-react";

const NotificationEmpty = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-16">
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center">
          <BellOff size={40} className="text-gray-400" />
        </div>

        <h2 className="mt-6 text-xl font-semibold text-gray-700">
          No Notifications Found
        </h2>

        <p className="mt-2 text-gray-500 text-center max-w-md">
          There are currently no notifications available for the selected
          filter.
        </p>
      </div>
    </div>
  );
};

export default NotificationEmpty;

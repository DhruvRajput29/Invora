import {
  AlertTriangle,
  Package,
  FileText,
  ShoppingCart,
  Truck,
  Users,
  Settings,
  CheckCircle2,
} from "lucide-react";

const NotificationCard = ({ notification }) => {
  const getIcon = () => {
    switch (notification.category) {
      case "Inventory":
        return <Package size={22} className="text-blue-600" />;

      case "Invoices":
        return <FileText size={22} className="text-green-600" />;

      case "Orders":
        return <ShoppingCart size={22} className="text-purple-600" />;

      case "Suppliers":
        return <Truck size={22} className="text-orange-600" />;

      case "Customers":
        return <Users size={22} className="text-pink-600" />;

      case "System":
        return <Settings size={22} className="text-gray-600" />;

      default:
        return <AlertTriangle size={22} className="text-red-600" />;
    }
  };

  const getPriorityStyle = () => {
    switch (notification.priority) {
      case "High":
        return "bg-red-100 text-red-700";

      case "Medium":
        return "bg-yellow-100 text-yellow-700";

      case "Low":
        return "bg-green-100 text-green-700";

      default:
        return "bg-blue-100 text-blue-700";
    }
  };

  return (
    <div
      className={`bg-white border rounded-2xl shadow-sm p-5 transition hover:shadow-md hover:border-blue-300`}
    >
      <div className="flex justify-between gap-5">
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
            {getIcon()}
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-lg font-semibold text-gray-800">
                {notification.title}
              </h3>

              {!notification.read && (
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
              )}
            </div>

            <p className="text-gray-600 mt-2 leading-7">
              {notification.message}
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-4">
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${getPriorityStyle()}`}
              >
                {notification.priority}
              </span>

              <span className="text-sm text-gray-500">
                {notification.category}
              </span>
            </div>
          </div>
        </div>

        <div className="text-right">
          <p className="text-sm text-gray-500">{notification.time}</p>

          {notification.read && (
            <div className="flex justify-end mt-4">
              <CheckCircle2 size={18} className="text-green-500" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;

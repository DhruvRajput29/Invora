import { BellRing, CheckCheck } from "lucide-react";

const NotificationHeader = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <div className="flex items-center gap-3">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 flex gap-2 items-center">
                <BellRing size={24} className="text-blue-600" />
                Notifications
              </h1>

              <p className="text-gray-500 mt-1">
                Stay updated with inventory, invoices, orders and system alerts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationHeader;

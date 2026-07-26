import { useState } from "react";
import NotificationHeader from "./NotificationHeader";
import NotificationFilters from "./NotificationFilters";
import NotificationList from "./NotificationList";
import notifications from "../../Data/NotificationData";
import { sortNotifications } from "../../Data/NotificationUtils";

const Notification = () => {
  const [filter, setFilter] = useState("All");

  const filteredNotifications =
    filter === "All"
      ? notifications
      : notifications.filter((item) => item.category === filter);

  const sortedNotifications = sortNotifications(filteredNotifications);

  return (
    <div className="space-y-6">
      <NotificationHeader />

      <NotificationFilters filter={filter} setFilter={setFilter} />

      <NotificationList notifications={sortedNotifications} />
    </div>
  );
};

export default Notification;

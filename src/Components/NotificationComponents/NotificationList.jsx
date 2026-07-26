import NotificationCard from "./NotificationCard";
import NotificationEmpty from "./NotificationEmpty";

const NotificationList = ({ notifications }) => {
  if (notifications.length === 0) {
    return <NotificationEmpty />;
  }

  return (
    <div className="space-y-4">
      {notifications.map((notification) => (
        <NotificationCard key={notification.id} notification={notification} />
      ))}
    </div>
  );
};

export default NotificationList;

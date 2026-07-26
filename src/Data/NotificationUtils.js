export const sortNotifications = (notifications) => {
  return [...notifications].sort((a, b) => {
    if (a.read === b.read) return 0;

    return a.read ? 1 : -1;
  });
};
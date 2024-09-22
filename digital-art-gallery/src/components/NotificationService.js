export const sendNotification = (message) => {
    // Assuming browser notification permissions are granted
    new Notification('Digital Art Gallery', { body: message });
  };
  
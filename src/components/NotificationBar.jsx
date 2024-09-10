import { FaBell } from 'react-icons/fa'; // Notification bell icon from react-icons

const NotificationBar = () => {
  return (
    <div className="bg-yellow-400 text-gray-900 py-2 px-4 flex items-center justify-center space-x-3 text-sm">
      <FaBell className="text-lg" />
      <p>Special Offer! Get 20% off on all services this month. 🎉</p>
    </div>
  );
};

export default NotificationBar;

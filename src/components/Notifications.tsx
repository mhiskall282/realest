import React, { useState } from 'react';
import { Bell, X, MessageSquare, Calendar, DollarSign, Heart } from 'lucide-react';

interface Notification {
  id: number;
  type: 'message' | 'appointment' | 'offer' | 'favorite';
  title: string;
  description: string;
  time: string;
  read: boolean;
}

const notifications: Notification[] = [
  {
    id: 1,
    type: 'message',
    title: 'New Message',
    description: 'Emma Thompson sent you a message about Modern Luxury Villa',
    time: '5 minutes ago',
    read: false
  },
  {
    id: 2,
    type: 'appointment',
    title: 'Upcoming Viewing',
    description: 'Reminder: Property viewing at Downtown Penthouse tomorrow at 2:30 PM',
    time: '1 hour ago',
    read: false
  },
  {
    id: 3,
    type: 'offer',
    title: 'New Offer',
    description: 'You received a new offer for Beachfront Paradise',
    time: '2 hours ago',
    read: true
  },
  {
    id: 4,
    type: 'favorite',
    title: 'Property Saved',
    description: 'Michael Brown saved Modern Luxury Villa to favorites',
    time: '3 hours ago',
    read: true
  }
];

const NotificationIcon = ({ type }: { type: Notification['type'] }) => {
  switch (type) {
    case 'message':
      return <MessageSquare className="h-5 w-5 text-blue-400" />;
    case 'appointment':
      return <Calendar className="h-5 w-5 text-green-400" />;
    case 'offer':
      return <DollarSign className="h-5 w-5 text-yellow-400" />;
    case 'favorite':
      return <Heart className="h-5 w-5 text-red-400" />;
    default:
      return <Bell className="h-5 w-5" />;
  }
};

const Notifications = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notificationsList, setNotificationsList] = useState(notifications);

  const unreadCount = notificationsList.filter(n => !n.read).length;

  const markAsRead = (id: number) => {
    setNotificationsList(prev =>
      prev.map(notification =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const removeNotification = (id: number) => {
    setNotificationsList(prev =>
      prev.filter(notification => notification.id !== id)
    );
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-gray-400 hover:text-primary transition-colors"
      >
        <Bell className="h-6 w-6" />
        {unreadCount > 0 && (
          <div className="absolute top-0 right-0 w-5 h-5 bg-primary text-secondary rounded-full flex items-center justify-center text-xs">
            {unreadCount}
          </div>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-secondary-light rounded-lg shadow-lg overflow-hidden z-50">
          <div className="p-4 border-b border-gray-700">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">Notifications</h3>
              <button className="text-sm text-primary hover:text-primary-dark">
                Mark all as read
              </button>
            </div>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {notificationsList.length > 0 ? (
              notificationsList.map(notification => (
                <div
                  key={notification.id}
                  className={`p-4 border-b border-gray-700 hover:bg-secondary transition-colors ${
                    !notification.read ? 'bg-secondary/50' : ''
                  }`}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <NotificationIcon type={notification.type} />
                    </div>
                    <div className="ml-3 flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">{notification.title}</p>
                          <p className="text-sm text-gray-400">
                            {notification.description}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {notification.time}
                          </p>
                        </div>
                        <button
                          onClick={() => removeNotification(notification.id)}
                          className="text-gray-400 hover:text-primary"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                  {!notification.read && (
                    <button
                      onClick={() => markAsRead(notification.id)}
                      className="mt-2 text-xs text-primary hover:text-primary-dark"
                    >
                      Mark as read
                    </button>
                  )}
                </div>
              ))
            ) : (
              <div className="p-4 text-center text-gray-400">
                No notifications
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Notifications;
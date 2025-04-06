import React, { useState } from 'react';
import { Search, Send, User, Phone, Mail } from 'lucide-react';

interface Message {
  id: number;
  sender: string;
  receiver: string;
  content: string;
  timestamp: string;
  read: boolean;
}

interface Contact {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  online: boolean;
}

const contacts: Contact[] = [
  {
    id: 1,
    name: "Emma Thompson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    lastMessage: "Is the villa still available?",
    lastMessageTime: "10:30 AM",
    unreadCount: 2,
    online: true
  },
  {
    id: 2,
    name: "Michael Brown",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    lastMessage: "When can we schedule a viewing?",
    lastMessageTime: "Yesterday",
    unreadCount: 0,
    online: false
  },
  {
    id: 3,
    name: "Sarah Wilson",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    lastMessage: "Thank you for the tour",
    lastMessageTime: "2 days ago",
    unreadCount: 1,
    online: true
  }
];

const messages: Message[] = [
  {
    id: 1,
    sender: "Emma Thompson",
    receiver: "me",
    content: "Hi, I'm interested in the Modern Luxury Villa. Is it still available?",
    timestamp: "10:30 AM",
    read: true
  },
  {
    id: 2,
    sender: "me",
    receiver: "Emma Thompson",
    content: "Yes, it's still available! Would you like to schedule a viewing?",
    timestamp: "10:35 AM",
    read: true
  },
  {
    id: 3,
    sender: "Emma Thompson",
    receiver: "me",
    content: "That would be great! What times are available this week?",
    timestamp: "10:40 AM",
    read: false
  }
];

const Messages = () => {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(contacts[0]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    
    // Here we would typically send the message to the backend
    console.log('Sending message:', newMessage);
    setNewMessage('');
  };

  return (
    <div className="pt-20 px-4 min-h-screen">
      <div className="container mx-auto">
        <div className="bg-secondary-light rounded-lg overflow-hidden">
          <div className="grid grid-cols-12 h-[calc(100vh-120px)]">
            {/* Contacts Sidebar */}
            <div className="col-span-4 border-r border-gray-700">
              <div className="p-4">
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search contacts..."
                    className="w-full bg-secondary border border-gray-600 rounded-lg pl-10 pr-4 py-2"
                  />
                </div>
                <div className="space-y-2">
                  {contacts.map(contact => (
                    <button
                      key={contact.id}
                      onClick={() => setSelectedContact(contact)}
                      className={`w-full p-3 rounded-lg flex items-center space-x-3 hover:bg-secondary transition-colors ${
                        selectedContact?.id === contact.id ? 'bg-secondary' : ''
                      }`}
                    >
                      <div className="relative">
                        <img
                          src={contact.avatar}
                          alt={contact.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        {contact.online && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-secondary-light"></div>
                        )}
                      </div>
                      <div className="flex-1 text-left">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold">{contact.name}</span>
                          <span className="text-xs text-gray-400">{contact.lastMessageTime}</span>
                        </div>
                        <p className="text-sm text-gray-400 truncate">{contact.lastMessage}</p>
                      </div>
                      {contact.unreadCount > 0 && (
                        <div className="bg-primary text-secondary w-5 h-5 rounded-full flex items-center justify-center text-xs">
                          {contact.unreadCount}
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Chat Area */}
            <div className="col-span-8 flex flex-col">
              {selectedContact ? (
                <>
                  {/* Chat Header */}
                  <div className="p-4 border-b border-gray-700 flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <img
                        src={selectedContact.avatar}
                        alt={selectedContact.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-semibold">{selectedContact.name}</h3>
                        <p className="text-sm text-gray-400">
                          {selectedContact.online ? 'Online' : 'Offline'}
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-4">
                      <button className="text-gray-400 hover:text-primary">
                        <Phone className="h-5 w-5" />
                      </button>
                      <button className="text-gray-400 hover:text-primary">
                        <Mail className="h-5 w-5" />
                      </button>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map(message => (
                      <div
                        key={message.id}
                        className={`flex ${
                          message.sender === 'me' ? 'justify-end' : 'justify-start'
                        }`}
                      >
                        <div
                          className={`max-w-[70%] rounded-lg p-3 ${
                            message.sender === 'me'
                              ? 'bg-primary text-secondary'
                              : 'bg-secondary'
                          }`}
                        >
                          <p>{message.content}</p>
                          <p className="text-xs mt-1 opacity-70">{message.timestamp}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Message Input */}
                  <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-700">
                    <div className="flex space-x-4">
                      <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type your message..."
                        className="flex-1 bg-secondary border border-gray-600 rounded-lg px-4 py-2"
                      />
                      <button
                        type="submit"
                        className="bg-primary text-secondary px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
                      >
                        <Send className="h-5 w-5" />
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center">
                  <p className="text-gray-400">Select a contact to start messaging</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
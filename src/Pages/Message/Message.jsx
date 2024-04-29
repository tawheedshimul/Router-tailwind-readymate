import React, { useState, useRef, useEffect } from 'react';

const Message = () => {
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: "John Doe",
      text: "Hello! How are you?",
      timestamp: "12:30 PM",
      isSent: false,
    },
    {
      sender: "Jane Smith",
      text: "I'm doing great, thank you! How about you?",
      timestamp: "12:32 PM",
      isSent: true,
    },
    {
      sender: "John Doe",
      text: "Hello! How are you?",
      timestamp: "12:30 PM",
      isSent: false,
    },
    {
      sender: "Jane Smith",
      text: "I'm doing great, thank you! How about you?",
      timestamp: "12:32 PM",
      isSent: true,
    },
    {
      sender: "John Doe",
      text: "Hello! How are you?",
      timestamp: "12:30 PM",
      isSent: false,
    },
    {
      sender: "Jane Smith",
      text: "I'm doing great, thank you! How about you?",
      timestamp: "12:32 PM",
      isSent: true,
    },
    {
      sender: "John Doe",
      text: "Hello! How are you?",
      timestamp: "12:30 PM",
      isSent: false,
    },
    {
      sender: "Jane Smith",
      text: "I'm doing great, thank you! How about you?",
      timestamp: "12:32 PM",
      isSent: true,
    },
    {
      sender: "John Doe",
      text: "Hello! How are you?",
      timestamp: "12:30 PM",
      isSent: false,
    },
    {
      sender: "Jane Smith",
      text: "I'm doing great, thank you! How about you?",
      timestamp: "12:32 PM",
      isSent: true,
    },
    // Add more message objects as needed
  ]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleMessageSend = () => {
    if (inputText.trim() !== '') {
      const newMessage = {
        sender: "You",
        text: inputText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isSent: true,
      };
      setMessages([...messages, newMessage]);
      setInputText('');
    }
  };

  return (
    <div className="flex flex-col h-screen">
        <div></div>
      <div className="overflow-y-auto  flex-grow px-4 py-2">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.isSent ? 'justify-end' : 'justify-start'} mb-4`}
          >
            <div
              className={`${
                message.isSent ? 'bg-pink-500 text-white rounded-br-none' : 'bg-gray-200 text-gray-700 rounded-bl-none'
              } p-4 max-w-xs rounded-lg shadow-md`}
            >
              {!message.isSent && <p className="text-xs mb-1">{message.sender}</p>}
              <p className="text-sm">{message.text}</p>
              <p className="text-xs mt-1">{message.timestamp}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="flex items-center border-t border-gray-300 p-2">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type your message..."
          className="flex-grow px-3 text-black py-2 mr-2 border border-gray-300 rounded-md focus:outline-none"
        />
        <button
          onClick={handleMessageSend}
          className="px-4 py-2 bg-sky-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Send
        </button>
      </div>
      <div className='mb-[60px] md:hidden'></div>
    </div>
  );
};

export default Message;

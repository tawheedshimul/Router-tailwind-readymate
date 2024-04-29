import React, { useState, useRef, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, onSnapshot, query, orderBy, serverTimestamp } from 'firebase/firestore';

// Initialize Firebase (replace with your actual config)
const firebaseConfig = {
    apiKey: "AIzaSyBMmXXWShrGZgD028qM46ElPipaVK6ti4A",
    authDomain: "tchat-832bb.firebaseapp.com",
    projectId: "tchat-832bb",
    storageBucket: "tchat-832bb.appspot.com",
    messagingSenderId: "396691519873",
    appId: "1:396691519873:web:89db7e527ccd9fdfc09080"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

const Message = () => {
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const messagesRef = collection(firestore, 'messages');
    const q = query(messagesRef, orderBy('timestamp'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const updatedMessages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setMessages(updatedMessages);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleMessageSend = async () => {
    if (inputText.trim() !== '') {
      const newMessage = {
        sender: "You",
        text: inputText,
        timestamp: serverTimestamp(), // Use server timestamp
        isSent: true,
      };

      try {
        await addDoc(collection(firestore, 'messages'), newMessage);
        setInputText('');
        inputRef.current.focus();
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  return (
    <div className="flex flex-col">
      <div className="overflow-y-auto flex-grow px-4 py-2">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isSent ? 'justify-end' : 'justify-start'} mb-4`}
          >
            <div
              className={`${message.isSent ? 'bg-pink-500 text-white rounded-br-none' : 'bg-gray-200 text-gray-700 rounded-bl-none'
                } p-4 max-w-xs rounded-lg shadow-md`}
            >
              {!message.isSent && <p className="text-xs mb-1">{message.sender}</p>}
              <p className="text-sm">{message.text}</p>
              <p className="text-xs mt-1">{message.timestamp?.toDate().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="flex mb-[60px] md:mb-0 items-center border-t border-gray-300 p-2">
        <input
          ref={inputRef}
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
    </div>
  );
};

export default Message;

import axios from "axios";
import React, { useEffect, useState } from "react";
const ChatPage = () => {
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    try {
      const { data } = await axios.get("/api/chat");
      setChats(data);
    } catch (error) {
      console.error("Error fetching chats:", error);
    }
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <React.Fragment>
      <div className="chat">
        {chats.map((chat) => (
          <div key={chat.id}>{chat.chatName}</div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default ChatPage;

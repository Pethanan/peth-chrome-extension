import React from "react";
import "./ChatBox.css";
import SendQuery from "./SendQuery";

const ChatBox = () => {
  return (
    <div className="chatbox-container">
      <header>Chat Gpt</header>
      <section>Messages</section>
      <SendQuery />
    </div>
  );
};

export default ChatBox;

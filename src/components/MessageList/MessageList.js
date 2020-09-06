import React from "react";

const Message = ({ text, time }) => (
  <li>
    <header>{time}</header>
    <p>{text}</p>
  </li>
);

const MessageList = ({ messages }) => {
  return (
    <ul>
      {messages.map((message, i) => (
        <Message {...message} key={i} />
      ))}
    </ul>
  );
};

export default MessageList;

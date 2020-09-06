import React, { useRef, useState, useEffect } from "react";

import { CHAT } from "constants/api-endpoints.constants";
import { HOST } from "constants/environment.constants";
import { MessageList, ChatForm } from "components";

function App() {
  const ws = useRef(null);
  const [wsReadyState, setWsReadyState] = useState(ws.readyState);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    ws.current = new WebSocket(`ws://${HOST}/${CHAT}`);
    ws.current.onopen = () => {
      setWsReadyState(ws.current.readyState);
    };
    ws.current.onmessage = ({ data }) =>
      setMessages((messages) => [...messages, JSON.parse(data)]);
    ws.current.onclose = () => {
      setWsReadyState(ws.current.readyState);
    };
    return () => {
      ws.current.close();
    };
  }, [ws]);

  const handleSendMessage = (text) => {
    ws.current.send(
      JSON.stringify({
        text,
        time: new Date().toLocaleTimeString(),
      })
    );
  };
  return (
    <>
      <div
        style={{
          width: 10,
          height: 10,
          borderRadius: 100,
          backgroundColor: wsReadyState !== 1 ? "red" : "green",
        }}
      />
      <MessageList messages={messages} />
      <ChatForm onSubmit={handleSendMessage} disabled={wsReadyState !== 1} />
    </>
  );
}

export default App;

import { useRef, useState, useEffect } from "react";

const useWebsocketChat = (url, userName) => {
  const ws = useRef(null);
  const [readyState, setReadyState] = useState(ws.readyState);
  const [numberOfClients, setNumberOfClients] = useState();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    ws.current = new WebSocket(url);
    setReadyState(ws.current.readyState);

    ws.current.onopen = () => {
      setReadyState(ws.current.readyState);
    };
    ws.current.onmessage = ({ data }) => {
      const { numberOfClients, ...message } = JSON.parse(data);
      setNumberOfClients(numberOfClients);
      if (message.text) {
        setMessages((messages) => [...messages, message]);
      }
    };
    ws.current.onclose = () => {
      setReadyState(ws.current.readyState);
    };
    return () => {
      ws.current.close();
    };
  }, [url, ws]);

  const sendMessage = (text) => {
    const newMessage = {
      author: userName,
      text,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    // since the server does not broadcast messages from this client,
    // append it "manually", then send
    setMessages((messages) => [...messages, newMessage]);
    ws.current.send(JSON.stringify(newMessage));
  };
  return {
    status: {
      connecting: readyState === 0,
      ready: readyState === 1,
      closed: readyState === 2 || readyState === 3,
    },
    sendMessage,
    messages,
    numberOfClients,
  };
};

export default useWebsocketChat;

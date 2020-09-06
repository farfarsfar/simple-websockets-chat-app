import { CHAT } from "./constants/api-endpoints.constants";
import { SERVER_PORT } from "./constants/environment.constants";
const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: SERVER_PORT, path: `/${CHAT}` });

function heartbeat() {
  this.isAlive = true;
}

wss.on("connection", function connection(ws) {
  ws.isAlive = true;
  ws.on("pong", heartbeat);

  ws.on("message", function incoming(data) {
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  });
  wss.clients.forEach((client) => {
    client.send(JSON.stringify({ numberOfClients: wss.clients.size }));
  });
});

const interval = setInterval(function ping() {
  wss.clients.forEach(function each(ws) {
    if (ws.isAlive === false) return ws.terminate();
    ws.send(JSON.stringify({ numberOfClients: wss.clients.size }));

    ws.isAlive = false;
    ws.ping(() => {});
  });
}, 10000);

wss.on("close", function close() {
  clearInterval(interval);
});

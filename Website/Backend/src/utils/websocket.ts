import { WebSocketServer } from 'ws';
import { Server } from 'http';

let wss: WebSocketServer;

export const initWebSocket = (server: Server) => {
  wss = new WebSocketServer({ server });

  wss.on('connection', (ws) => {
    console.log('New client connected');
    
    ws.on('close', () => {
      console.log('Client disconnected');
    });
  });

  return wss;
};

export const broadcastData = (data: any) => {
  if (!wss) return;
  
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(data));
    }
  });
};
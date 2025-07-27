import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

interface CarData {
  name: string;
  mph: number;
  gasLevel: number;
  temperature: number;
  zeroToSixty: number;
  lapTime: number;
}

const useWebSocket = (url: string) => {
  const [data, setData] = useState<CarData | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const socket: Socket = io(url, {
      transports: ['websocket'], // optional, can help avoid long-polling fallback
    });

    socket.on('connect', () => {
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    socket.on('data', (newData: CarData) => {
      setData(newData);
    });

    socket.on('connect_error', (err) => {
      console.error('Socket connection error:', err);
    });

    return () => {
      socket.disconnect();
    };
  }, [url]);

  return { data, isConnected };
};

export default useWebSocket;

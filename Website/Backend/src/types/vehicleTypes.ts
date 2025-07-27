/**
## 🏷️ LABEL MAKER FILE
 * Creates special labels for our data so TypeScript understands:
 * - "User" means an object with name/email/password
 * - "Product" means something with price/description
 */

export interface VehicleData {
  mph: number;
  gasLevel: number;
  acceleration: number;
  lapTime: number;
  engineTemp: number;
  timestamp: number;
}

export interface WebSocketMessage {
  type: 'data' | 'command' | 'status';
  payload: VehicleData | string;
}
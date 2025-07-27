#include <Arduino.h>
#include <WiFi.h>
#include <WebSocketsClient.h>
#include <ArduinoJson.h>

const char* ssid = "YOUR_WIFI_SSID";
const char* password = "YOUR_WIFI_PASSWORD";
const char* websocket_server = "your-backend-ip";
const int websocket_port = 5000;
const char* websocket_path = "/";

WebSocketsClient webSocket;

// Simulated sensor readings (replace with actual sensor code)
float readSpeed() { return random(0, 150); } // mph
float readGasLevel() { return random(0, 100); } // percentage
float readAcceleration() { return random(-20, 20) / 10.0; } // m/s²
float readLapTime() { return random(60, 120); } // seconds
float readEngineTemp() { return random(160, 250); } // °F

void webSocketEvent(WStype_t type, uint8_t * payload, size_t length) {
  switch(type) {
    case WStype_DISCONNECTED:
      Serial.println("Disconnected from WebSocket server");
      break;
    case WStype_CONNECTED:
      Serial.println("Connected to WebSocket server");
      break;
    case WStype_TEXT:
      Serial.print("Received: ");
      Serial.println((char*)payload);
      break;
    case WStype_ERROR:
      Serial.println("WebSocket error");
      break;
  }
}

void sendVehicleData() {
  JsonDocument doc;
  doc["mph"] = readSpeed();
  doc["gasLevel"] = readGasLevel();
  doc["acceleration"] = readAcceleration();
  doc["lapTime"] = readLapTime();
  doc["engineTemp"] = readEngineTemp();
  doc["timestamp"] = millis();

  String jsonString;
  serializeJson(doc, jsonString);
  
  webSocket.sendTXT(jsonString);
  Serial.println("Sent: " + jsonString);
}

void setup() {
  Serial.begin(115200);
  
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\nWiFi connected\nIP: " + WiFi.localIP().toString());

  webSocket.begin(websocket_server, websocket_port, websocket_path);
  webSocket.onEvent(webSocketEvent);
}

void loop() {
  webSocket.loop();
  
  static unsigned long lastSend = 0;
  if (millis() - lastSend > 1000) { // Send every 1 second
    lastSend = millis();
    sendVehicleData();
  }
}
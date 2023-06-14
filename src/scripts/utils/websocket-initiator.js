const WebSocketInitiator = {
  init(url) {
    const websocket = new WebSocket(url);
    websocket.onmessage = this._onMessageHandler;
  },

  _onMessageHandler(message) {
    console.log(message.data);
    console.log(JSON.parse(message.data));
  },
};

export default WebSocketInitiator;

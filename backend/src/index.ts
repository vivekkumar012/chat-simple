import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({port: 8080})

let allSockets: WebSocket[] = [];

wss.on("connection", (socket) => {
    console.log("Server Connected");
    allSockets.push(socket);

    socket.on("message", (message) => {
        for(let i=0; i<allSockets.length; i++) {
            const s = allSockets[i];

            s?.send(message.toString()+":sent from the server");
        }
    })
})
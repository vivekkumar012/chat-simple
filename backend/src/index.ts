import { WebSocketServer } from "ws";

const wss = new WebSocketServer({port: 8080})

wss.on("connection", (socket) => {
    console.log("User Connected");

    socket.on("message", (message) => {
        console.log("message received" +  message.toString());
    })
})
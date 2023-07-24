import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

class User {
    constructor(public name: string) {}
}

class Room {
    constructor(public name: string) {}
}

const users: User[] = [];
const rooms: Room[] = [];

wss.on("connection", (ws) => {
    ws.on("error", console.error);

    ws.on("message", (data) => {
        let user_message = data.toString();

        let { command, body } = getCommandAndBody(user_message);

        switch (command) {
            case "join": {
                users.push(new User(body));
            }
        }
    });
});

function getCommandAndBody(data: string) {
    let i = 0;
    while (i < data.length) {
        if (data[i] == " ") break;
        ++i;
    }

    let command = data.slice(0, i);
    let body = data.slice(i + 1);
    return { command, body };
}

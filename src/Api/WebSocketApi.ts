import Message from "./message";

export class WebSocketApi {

    public static INSTANCE: WebSocketApi;

    socket: WebSocket;

    constructor(address:string) {

        if (WebSocketApi.INSTANCE) {
            throw new Error('Store is a singleton');
        }

        WebSocketApi.INSTANCE = this;

        this.socket = new WebSocket(address);

        this.socket.onopen = () => {this.login();};
        this.socket.onmessage = (message) =>
        {
            if(message.data.toString().includes('Secured'))
            {
                console.log('Secured Connection');
            }
            console.log('Message Received: ' + message.data);
        };
        this.socket.onerror = (message) => { console.log(message);};
        this.socket.onclose = (e) => {console.log(e.code, e.reason);};
    }

    login()
    {
        var msg = {
            type: 'authenticate',
            payload: { token: 'XXX' }
        };

        let loginPayload = {login: 'Trae', password: 'secure'};

        this.sendJSON(new Message('login', loginPayload));
    }

    sendJSON(message: { type: string; payload: {} })
    {
        this.socket.send(JSON.stringify(message));
    }
}

export function createWebSocket(address:string): WebSocketApi {
    return new WebSocketApi(address);
}

export function getStore(): WebSocketApi {
    return WebSocketApi.INSTANCE;
}
import {Animated} from "react-native";
import delay = Animated.delay;

class WebSocketApi {
    socket: WebSocket;
    socketAddress: string;

    constructor(socketAddress: string)
    {
        this.socketAddress = socketAddress;
        // @ts-ignore
        // this.socket = new WebSocket(socketAddress,'' + {headers: 'key=value'});
        this.socket = new WebSocket(socketAddress);


        this.open();
        this.onMessage();
        this.onClose();
        this.onError();
    }


    //Todo: create a mechanism to handle logic for when a response doesn't return in a timely manner
    delay(ms:number, )
    {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async open()
    {
        var msg = {
            type: 'authenticate',
            payload: { token: 'XXX' }
        };

        this.socket.onopen = () =>
        {
            // this.socket.send(JSON.stringify(msg));
            this.socket.send('Hello');
        }
    }

    onMessage(){
        this.socket.onmessage = (message) => {
            console.log('Message Received: ' + message.data);
        }
    }

    onError(){
        this.socket.onerror = (message) => {
            // an error occurred
            console.log(message);
        };
    }

    onClose(){
        this.socket.onclose = (e) => {
            // connection closed
            console.log(e.code, e.reason);
        };
    }



    //todo: add message type architecture
    //todo: add concept of reply listener which are separated by blocking, and non-blocking reactions (ie. a login message would block all other messages till it receives a reply, then fires off it's reaction events)
    sendLogin(username:string, password:string)
    {
        var msg = {
            type: 'login',
            payload: { username: username, password: password}
        };

        this.sendJSON(msg)
    }


    sendJSON(message: { type: string; payload: {} })
    {
        console.log(message);
        console.log('sending');
        this.socket.send(JSON.stringify(message));
        console.log('sent');
    }

    send(message: string)
    {
        console.log(message);
        console.log('sending');
        this.socket.send(message);
        console.log('sent');
    }
}


//Still need to consider a good design for implementing this
class login extends WebSocketApi {

    sendJSON(message: { type: string; payload: { username: string; password: string } }) {
        //could specify the type here
        super.sendJSON(message);
    }
}

export default WebSocketApi;



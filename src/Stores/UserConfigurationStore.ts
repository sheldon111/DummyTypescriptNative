import {action, computed, observable} from 'mobx';
import Message from "../Api/message";
import {createWebSocket} from "../Api/WebSocketApi";

class UserConfigurationStore {
    applicationUrl:    string =  "127.0.0.1:8080";
    webSocketEndPoint: string = "/endpoint";

    constructor() {
        createWebSocket(this.webSocketAddress);
    }

    @computed get webSocketAddress() {
        return 'ws://' + this.applicationUrl + this.webSocketEndPoint;
    }

    async newConnection(address:string)
    {
        console.log(address);
        let webs = await new WebSocket(address);

        webs.send('test');
        return webs;
    }

    //Todo: create a mechanism to handle logic for when a response doesn't return in a timely manner
    // delay(ms:number)
    // {
    //     return new Promise(resolve => setTimeout(resolve, ms));
    // }
    //
    // async open()
    // {
    //     var msg = {
    //         type: 'authenticate',
    //         payload: { token: 'XXX' }
    //     };
    //
    //     this.socket.onopen = () => {this.login();}
    // }
    //
    // login()
    // {
    //     let loginPayload = {login: 'Trae', password: 'secure'};
    //
    //     this.sendJSON(new Message('login', loginPayload));
    // }
    //
    // onMessage(){
    //     this.socket.onmessage = (message) =>
    //     {
    //         if(message.data.toString().includes('Secured'))
    //         {
    //             console.log('Secured Connection');
    //         }
    //         console.log('Message Received: ' + message.data);
    //     }
    // }
    //
    // onError(){
    //     this.socket.onerror = (message) => {
    //         // an error occurred
    //         console.log(message);
    //     };
    // }
    //
    // onClose(){
    //     this.socket.onclose = (e) => {
    //         // connection closed
    //         console.log(e.code, e.reason);
    //     };
    // }
    //
    //
    //
    // //todo: add message type architecture
    // //todo: add concept of reply listener which are separated by blocking, and non-blocking reactions (ie. a login message would block all other messages till it receives a reply, then fires off it's reaction events)
    // sendLogin(username:string, password:string)
    // {
    //     var msg = {
    //         type: 'login',
    //         payload: { username: username, password: password}
    //     };
    //
    //     userConfigurationStore.sendJSON(msg)
    // }
    //
    // @action async sendJSON(message: { type: string; payload: {} })
    // {
    //     userConfigurationStore.socket.send(JSON.stringify(message));
    // }
    //
    // @action send(message: string)
    // {
    //     console.log('sending');
    //     this.socket.send(message);
    //     console.log('sent');
    // }
}

var userConfigurationStore = new UserConfigurationStore();
export default userConfigurationStore;
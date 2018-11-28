import {computed, observable} from "mobx";
import WebSocketApi from "../Api/WebSocketApi";

class UserSettings {
    @observable applicationUrl:    string =  "127.0.0.1:8080";
    @observable webSocketEndPoint: string = "/endpoint";
    // ws: WebSocketApi[];

    constructor() {
    }

    createConnection()
    {
        // this.ws.push(new WebSocketApi(this.webSocketAddress));
        // console.log('trying to open');
        // this.ws.open();
        // console.log('state: ' + (this.ws.socket.OPEN === this.ws.socket.readyState));
    }


    @computed get webSocketAddress() {
        return 'ws://' + this.applicationUrl + this.webSocketEndPoint;
    }
}

var userSettings = new UserSettings();
export default userSettings;

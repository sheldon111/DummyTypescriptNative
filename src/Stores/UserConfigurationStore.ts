import {computed, observable} from 'mobx';
import WebSocketApi from "../Stores/WebSocketApi";

class UserConfigurationStore {
    @observable applicationUrl:    string =  "127.0.0.1:8080";
    @observable webSocketEndPoint: string = "/endpoint";
    ws: WebSocketApi;

    constructor() {
        this.ws = new WebSocketApi(this.webSocketAddress);
    }

    async createConnection()
    {
        this.ws.open();
    }


    @computed get webSocketAddress() {
        return 'ws://' + this.applicationUrl + this.webSocketEndPoint;
    }
}

var userConfigurationStore = new UserConfigurationStore();
export default userConfigurationStore;
import * as tslib_1 from "tslib";
var WebSocketApi = /** @class */ (function () {
    function WebSocketApi(socketAddress) {
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
    WebSocketApi.prototype.delay = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    WebSocketApi.prototype.open = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            var msg;
            return tslib_1.__generator(this, function (_a) {
                msg = {
                    type: 'authenticate',
                    payload: { token: 'XXX' }
                };
                this.socket.onopen = function () {
                    // this.socket.send(JSON.stringify(msg));
                    setInterval(function () { return _this.socket.send('Hello'); }, 1000);
                };
                return [2 /*return*/];
            });
        });
    };
    WebSocketApi.prototype.login = function () {
        var loginPayload = { login: 'Trae', password: 'secure' };
    };
    WebSocketApi.prototype.onMessage = function () {
        this.socket.onmessage = function (message) {
            console.log('Message Received: ' + message.data);
        };
    };
    WebSocketApi.prototype.onError = function () {
        this.socket.onerror = function (message) {
            // an error occurred
            console.log(message);
        };
    };
    WebSocketApi.prototype.onClose = function () {
        this.socket.onclose = function (e) {
            // connection closed
            console.log(e.code, e.reason);
        };
    };
    //todo: add message type architecture
    //todo: add concept of reply listener which are separated by blocking, and non-blocking reactions (ie. a login message would block all other messages till it receives a reply, then fires off it's reaction events)
    WebSocketApi.prototype.sendLogin = function (username, password) {
        var msg = {
            type: 'login',
            payload: { username: username, password: password }
        };
        this.sendJSON(msg);
    };
    WebSocketApi.prototype.sendJSON = function (message) {
        console.log(message);
        console.log('sending');
        this.socket.send(JSON.stringify(message));
        console.log('sent');
    };
    WebSocketApi.prototype.send = function (message) {
        console.log(message);
        console.log('sending');
        this.socket.send(message);
        console.log('sent');
    };
    return WebSocketApi;
}());
//Still need to consider a good design for implementing this
var login = /** @class */ (function (_super) {
    tslib_1.__extends(login, _super);
    function login() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    login.prototype.sendJSON = function (message) {
        //could specify the type here
        _super.prototype.sendJSON.call(this, message);
    };
    return login;
}(WebSocketApi));
export default WebSocketApi;
//# sourceMappingURL=WebSocketApi.js.map
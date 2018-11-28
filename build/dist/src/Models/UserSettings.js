import * as tslib_1 from "tslib";
import { computed, observable } from "mobx";
var UserSettings = /** @class */ (function () {
    // ws: WebSocketApi[];
    function UserSettings() {
        this.applicationUrl = "127.0.0.1:8080";
        this.webSocketEndPoint = "/endpoint";
    }
    UserSettings.prototype.createConnection = function () {
        // this.ws.push(new WebSocketApi(this.webSocketAddress));
        // console.log('trying to open');
        // this.ws.open();
        // console.log('state: ' + (this.ws.socket.OPEN === this.ws.socket.readyState));
    };
    Object.defineProperty(UserSettings.prototype, "webSocketAddress", {
        get: function () {
            return 'ws://' + this.applicationUrl + this.webSocketEndPoint;
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        observable
    ], UserSettings.prototype, "applicationUrl", void 0);
    tslib_1.__decorate([
        observable
    ], UserSettings.prototype, "webSocketEndPoint", void 0);
    tslib_1.__decorate([
        computed
    ], UserSettings.prototype, "webSocketAddress", null);
    return UserSettings;
}());
var userSettings = new UserSettings();
export default userSettings;
//# sourceMappingURL=UserSettings.js.map
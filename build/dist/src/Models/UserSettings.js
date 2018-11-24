import * as tslib_1 from "tslib";
import { computed, observable } from "mobx";
import WebSocketApi from "../Stores/WebSocketApi";
var UserSettings = /** @class */ (function () {
    function UserSettings() {
        this.applicationUrl = "127.0.0.1:8080";
        this.webSocketEndPoint = "/endpoint";
        this.ws = new WebSocketApi(this.webSocketAddress);
    }
    UserSettings.prototype.createConnection = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                console.log('trying to open');
                this.ws.open();
                console.log('state: ' + (this.ws.socket.OPEN === this.ws.socket.readyState));
                return [2 /*return*/];
            });
        });
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
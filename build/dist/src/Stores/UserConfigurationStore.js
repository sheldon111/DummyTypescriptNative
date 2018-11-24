import * as tslib_1 from "tslib";
import { computed, observable } from 'mobx';
import WebSocketApi from "../Stores/WebSocketApi";
var UserConfigurationStore = /** @class */ (function () {
    function UserConfigurationStore() {
        this.applicationUrl = "127.0.0.1:8080";
        this.webSocketEndPoint = "/endpoint";
        this.ws = new WebSocketApi(this.webSocketAddress);
    }
    UserConfigurationStore.prototype.createConnection = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                this.ws.open();
                return [2 /*return*/];
            });
        });
    };
    Object.defineProperty(UserConfigurationStore.prototype, "webSocketAddress", {
        get: function () {
            return 'ws://' + this.applicationUrl + this.webSocketEndPoint;
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        observable
    ], UserConfigurationStore.prototype, "applicationUrl", void 0);
    tslib_1.__decorate([
        observable
    ], UserConfigurationStore.prototype, "webSocketEndPoint", void 0);
    tslib_1.__decorate([
        computed
    ], UserConfigurationStore.prototype, "webSocketAddress", null);
    return UserConfigurationStore;
}());
var userConfigurationStore = new UserConfigurationStore();
export default userConfigurationStore;
//# sourceMappingURL=UserConfigurationStore.js.map
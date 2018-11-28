import * as tslib_1 from "tslib";
import { computed } from 'mobx';
import { createWebSocket } from "../Api/WebSocketApi";
var UserConfigurationStore = /** @class */ (function () {
    function UserConfigurationStore() {
        this.applicationUrl = "127.0.0.1:8080";
        this.webSocketEndPoint = "/endpoint";
        createWebSocket(this.webSocketAddress);
    }
    Object.defineProperty(UserConfigurationStore.prototype, "webSocketAddress", {
        get: function () {
            return 'ws://' + this.applicationUrl + this.webSocketEndPoint;
        },
        enumerable: true,
        configurable: true
    });
    UserConfigurationStore.prototype.newConnection = function (address) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var webs;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(address);
                        return [4 /*yield*/, new WebSocket(address)];
                    case 1:
                        webs = _a.sent();
                        webs.send('test');
                        return [2 /*return*/, webs];
                }
            });
        });
    };
    tslib_1.__decorate([
        computed
    ], UserConfigurationStore.prototype, "webSocketAddress", null);
    return UserConfigurationStore;
}());
var userConfigurationStore = new UserConfigurationStore();
export default userConfigurationStore;
//# sourceMappingURL=UserConfigurationStore.js.map
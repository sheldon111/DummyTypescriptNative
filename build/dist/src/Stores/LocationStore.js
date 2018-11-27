import * as tslib_1 from "tslib";
import { action, computed, observable } from 'mobx';
import TrackedLocation from "../Models/Location";
import Message from "../Api/message";
import { WebSocketApi } from "../Api/WebSocketApi";
var LocationStore = /** @class */ (function () {
    function LocationStore() {
        this.locationData = [];
    }
    LocationStore.prototype.saveLocation = function (position) {
        this.locationData.push(new TrackedLocation(2100000, position));
    };
    ;
    LocationStore.prototype.processCurrentLocation = function () {
        var _this = this;
        var operations = function (position) {
            var location = new TrackedLocation(2100000, position);
            _this.locationData.push(location);
            WebSocketApi.INSTANCE.sendJSON(new Message('addLocation', location));
        };
        this.findLocation(operations);
    };
    LocationStore.prototype.findLocation = function (operation) {
        navigator.geolocation.getCurrentPosition(operation);
        // this.getLocationAsync(operation);
    };
    Object.defineProperty(LocationStore.prototype, "locationDataArray", {
        get: function () {
            return this.locationData.slice();
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        observable
    ], LocationStore.prototype, "locationData", void 0);
    tslib_1.__decorate([
        action
    ], LocationStore.prototype, "findLocation", null);
    tslib_1.__decorate([
        computed
    ], LocationStore.prototype, "locationDataArray", null);
    return LocationStore;
}());
var locationStore = new LocationStore();
export default locationStore;
//# sourceMappingURL=LocationStore.js.map
import * as tslib_1 from "tslib";
import { computed, observable } from "mobx";
var TrackedLocation = /** @class */ (function () {
    function TrackedLocation(membershipId, position) {
        this.membershipId = membershipId;
        this.recordedTime = new Date(position.timestamp);
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
    }
    Object.defineProperty(TrackedLocation.prototype, "coordinates", {
        get: function () {
            return this.recordedTime + ': ' + this.latitude + ' and ' + this.longitude;
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        observable
    ], TrackedLocation.prototype, "membershipId", void 0);
    tslib_1.__decorate([
        observable
    ], TrackedLocation.prototype, "recordedTime", void 0);
    tslib_1.__decorate([
        observable
    ], TrackedLocation.prototype, "latitude", void 0);
    tslib_1.__decorate([
        observable
    ], TrackedLocation.prototype, "longitude", void 0);
    tslib_1.__decorate([
        computed
    ], TrackedLocation.prototype, "coordinates", null);
    return TrackedLocation;
}());
export default TrackedLocation;
//# sourceMappingURL=Location.js.map
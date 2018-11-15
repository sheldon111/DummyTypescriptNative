import * as tslib_1 from "tslib";
import { computed, observable } from "mobx";
var User = /** @class */ (function () {
    function User(userId, firstName, lastName) {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Object.defineProperty(User.prototype, "fullName", {
        get: function () {
            return this.firstName + ' ' + this.lastName;
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        observable
    ], User.prototype, "firstName", void 0);
    tslib_1.__decorate([
        observable
    ], User.prototype, "lastName", void 0);
    tslib_1.__decorate([
        computed
    ], User.prototype, "fullName", null);
    return User;
}());
export default User;
//# sourceMappingURL=User.js.map
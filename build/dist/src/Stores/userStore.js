import * as tslib_1 from "tslib";
import { action, computed, observable } from 'mobx';
import User from '../Models/User';
var newUser = function (userId, firstName, lastName) {
    return new User(userId, firstName, lastName);
};
var DEFAULT_USER = [
    newUser(1, 'Sheldon', 'Mac'),
    newUser(2, 'Trae', 'Shaw')
];
var UserStore = /** @class */ (function () {
    function UserStore() {
        this.users = DEFAULT_USER;
    }
    UserStore.prototype.saveNote = function (user) {
        var idx = this.users.findIndex(function (n) { return user.userId === n.userId; });
        if (idx < 0) {
            this.users.push(user);
        }
        else {
            this.users[idx] = user;
        }
    };
    UserStore.prototype.deleteNote = function (user) {
        var idx = this.users.findIndex(function (n) { return n.userId === user.userId; });
        if (idx < 0) {
            throw new Error("Note " + user.userId + " not found");
        }
        else {
            this.users.splice(idx, 1);
        }
    };
    UserStore.prototype.getNote = function (userId) {
        console.log('in store get method');
        var idx = this.users.findIndex(function (n) { return n.userId === userId; });
        if (idx < 0) {
            throw new Error("Note " + userId + " not found");
        }
        else {
            return this.users[idx];
        }
    };
    Object.defineProperty(UserStore.prototype, "Users", {
        get: function () {
            return this.users;
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        observable
    ], UserStore.prototype, "users", void 0);
    tslib_1.__decorate([
        action
    ], UserStore.prototype, "saveNote", null);
    tslib_1.__decorate([
        action
    ], UserStore.prototype, "deleteNote", null);
    tslib_1.__decorate([
        action
    ], UserStore.prototype, "getNote", null);
    tslib_1.__decorate([
        computed
    ], UserStore.prototype, "Users", null);
    return UserStore;
}());
var userStore = new UserStore();
export default userStore;
//# sourceMappingURL=userStore.js.map
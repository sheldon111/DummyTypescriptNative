var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { observable } from 'mobx';
class UserStore {
    constructor() {
        this.users = [];
    }
    saveNote(user) {
        const idx = this.users.findIndex((n) => user.userId === n.userId);
        if (idx < 0) {
            this.users.push(user);
        }
        else {
            this.users[idx] = user;
        }
    }
    deleteNote(user) {
        const idx = this.users.findIndex((n) => n.userId === user.userId);
        if (idx < 0) {
            throw new Error(`Note ${user.userId} not found`);
        }
        else {
            this.users.splice(idx, 1);
        }
    }
    getNote(userId) {
        const idx = this.users.findIndex((n) => n.userId === userId);
        if (idx < 0) {
            throw new Error(`Note ${userId} not found`);
        }
        else {
            return this.users[idx];
        }
    }
}
__decorate([
    observable
], UserStore.prototype, "users", void 0);
const ObservableUserStore = new UserStore();
const newNote = (firstName, lastName) => {
    const user = {
        userId: 1,
        firstName: firstName,
        lastName: lastName
    };
    ObservableUserStore.saveNote(user);
};
newNote('First Note', 'some content');
newNote('2nd Note', 'some content');
newNote('3rd Note', 'some content');
newNote('4th Note', 'some content');
export default UserStore;

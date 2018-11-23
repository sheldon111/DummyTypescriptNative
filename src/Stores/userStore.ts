import {action, computed, observable} from 'mobx';
import User from '../Models/User';

const newUser = (userId: number, firstName: string, lastName: string): User => {
    return new User(userId, firstName, lastName);
};

const DEFAULT_USER = [
    newUser(1,'Sheldon', 'Mac'),
    newUser(2,'Trae', 'Shaw')
];

class UserStore {
    @observable users: User[] = DEFAULT_USER;

    @action public saveUser(user: User)
    {
        const idx = this.users.findIndex((n) => user.userId === n.userId);

        if (idx < 0)
        {
            this.users.push(user);
        }
        else
        {
            this.users[idx] = user;
        }
    }

    @action deleteUser(user: User)
    {
        const idx = this.users.findIndex((n) => n.userId === user.userId);
        if (idx < 0)
        {
            throw new Error(`Note ${user.userId} not found`);
        }
        else
        {
            this.users.splice(idx, 1);
        }
    }

    @action getUser(userId: number): User
    {
        const idx = this.users.findIndex((n) => n.userId === userId);

        if (idx < 0)
        {
            throw new Error(`Note ${userId} not found`);
        }
        else
        {
            return this.users[idx];
        }
    }

    @computed get Users():User[] { return this.users; }
}

var userStore = new UserStore();
export default userStore;
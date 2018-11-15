import {computed, observable} from "mobx";

class User {
    constructor(userId: number, firstName: string, lastName: string) {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    userId: number;
    @observable firstName: string;
    @observable lastName: string;

    @computed get fullName(): string
    {
        return this.firstName + ' ' + this.lastName;
    }
}

export default User;
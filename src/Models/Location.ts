import {computed, observable} from "mobx";
import {GeolocationReturnType} from "react-native";

class TrackedLocation {
    constructor(membershipId: number, position: GeolocationReturnType) {
        this.membershipId = membershipId;
        this.recordedTime = new Date(position.timestamp);
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
    }

    @observable membershipId: number;
    @observable recordedTime: Date;
    @observable latitude: number;
    @observable longitude: number;

    @computed get coordinates() : string
    {
        return this.recordedTime + ': ' + this.latitude + ' and ' + this.longitude;
    }
}

export default TrackedLocation;
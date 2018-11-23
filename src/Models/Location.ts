import {computed, observable} from "mobx";
import {Location} from "expo";
import LocationData = Location.LocationData;

class TrackedLocation {
    constructor(membershipId: number, locationData: LocationData) {
        this.membershipId = membershipId;
        this.recordedTime = new Date(locationData.timestamp);
        this.latitude = locationData.coords.latitude;
        this.longitude = locationData.coords.longitude;
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
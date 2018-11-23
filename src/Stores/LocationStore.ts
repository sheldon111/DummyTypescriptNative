import {action, computed, observable} from 'mobx';
import {Location, Permissions} from "expo";
import LocationData = Location.LocationData;
import TrackedLocation from "../Models/Location";


class LocationStore {
    @observable locationData: TrackedLocation[] = [];

    @action public saveUser(location: LocationData) {
        var locationModel = new TrackedLocation(2100000, location);


        this.locationData.push(locationModel);
    }

    @action async findLocation() {
        async function getLocationAsync()
        {
            const { status } = await Permissions.askAsync(Permissions.LOCATION);
            if (status === 'granted')
            {
                return Location.getCurrentPositionAsync({enableHighAccuracy: true});
            }
            else
            {
                throw new Error('Location permission not granted');
            }
        }

        this.saveUser(await getLocationAsync());
    }

    @computed get locationDataArray(): TrackedLocation[] {
        return this.locationData.slice();
    }

}

var locationStore = new LocationStore();
export default locationStore;
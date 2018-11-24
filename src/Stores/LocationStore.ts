import {action, computed, observable} from 'mobx';
import TrackedLocation from "../Models/Location";
import {GeolocationReturnType} from "react-native";


class LocationStore {
    @observable locationData: TrackedLocation[] = [];

    saveLocation(position: GeolocationReturnType)
    {
        this.locationData.push(new TrackedLocation(2100000, position))
    };

    processCurrentLocation(websocketSendCallBack: (message: string) => void)
    {
        const operations = (position: GeolocationReturnType) =>
        {
            let location = new TrackedLocation(2100000, position);
            this.locationData.push(location);
            var temp = JSON.stringify(location);
            console.log(temp);
            websocketSendCallBack(JSON.stringify(location));
        };

        this.findLocation(operations);
    }

    @action findLocation(operation: (position: GeolocationReturnType) => void)
    {
        navigator.geolocation.getCurrentPosition(operation);
        // this.getLocationAsync(operation);
    }

    @computed get locationDataArray(): TrackedLocation[] {
        return this.locationData.slice();
    }

}

var locationStore = new LocationStore();
export default locationStore;
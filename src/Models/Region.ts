import {TerrainTemperature} from "./TerrainTemperature";
import {TerrainHumidity} from "./TerrainHumidity";
import {TerrainType} from "./TerrainType";

export default class Region{

    constructor(public Temperature: TerrainTemperature, public Humidity: TerrainHumidity, public Type: TerrainType, public Name: string) {
    }
}
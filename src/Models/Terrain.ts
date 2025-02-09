import {TerrainHumidity} from "./TerrainHumidity";
import {TerrainTemperature} from "./TerrainTemperature";
import {TerrainType} from "./TerrainType";

export default class Terrain {
    Temperature: TerrainTemperature;
    Humidity: TerrainHumidity;
    Type: TerrainType;
    Names: string[];

    constructor(temperature: TerrainTemperature, humidity: TerrainHumidity, type: TerrainType, names: string[]) {
        this.Names = names;
        this.Temperature = temperature;
        this.Humidity = humidity;
        this.Type = type;
    }
}
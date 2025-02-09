import Terrain from "../Models/Terrain";
import FromListRoller from "./FromListRoller";
import {TerrainTemperature} from "../Models/TerrainTemperature";
import {TerrainHumidity} from "../Models/TerrainHumidity";
import {TerrainType} from "../Models/TerrainType";

export default class TerrainRoller extends FromListRoller<Terrain> {
    List: Terrain[] = [
        // ARID TERRAINS

        // Hot terrains
        new Terrain(TerrainTemperature.Hot, TerrainHumidity.Arid, TerrainType.Flatlands, ["Desert", "Sands", "Badlands"]),
        new Terrain(TerrainTemperature.Hot, TerrainHumidity.Arid, TerrainType.Mountains, ["Mountains", "Range"]),
        new Terrain(TerrainTemperature.Hot, TerrainHumidity.Arid, TerrainType.Wetlands, ["Oasis", "Springs"]),
        // new Terrain(TerrainTemperature.Hot, TerrainHumidity.Arid, TerrainType.Island, [""]),
        // new Terrain(TerrainTemperature.Hot, TerrainHumidity.Arid, TerrainType.Forest, [""])
        new Terrain(TerrainTemperature.Hot, TerrainHumidity.Arid, TerrainType.Hills, ["Desert", "Dunes"]),
        // new Terrain(TerrainTemperature.Hot, TerrainHumidity.Arid, TerrainType.Archipelago, [""]),
        new Terrain(TerrainTemperature.Hot, TerrainHumidity.Arid, TerrainType.Wasteland, ["Wasteland", "Wastes"]),

        // Temperate terrains
        new Terrain(TerrainTemperature.Temperate, TerrainHumidity.Arid, TerrainType.Flatlands, ["Plains", "Grasslands", "Fields"]),
        new Terrain(TerrainTemperature.Temperate, TerrainHumidity.Arid, TerrainType.Mountains, ["Mountains", "Range"]),
        // new Terrain(TerrainTemperature.Temperate, TerrainHumidity.Arid, TerrainType.Wetlands, [""]),
        // new Terrain(TerrainTemperature.Temperate, TerrainHumidity.Arid, TerrainType.Island, [""]),
        new Terrain(TerrainTemperature.Temperate, TerrainHumidity.Arid, TerrainType.Forest, ["Forest", "Woods", "Woodland", "Woodlands", "Wood"]),
        new Terrain(TerrainTemperature.Temperate, TerrainHumidity.Arid, TerrainType.Hills, ["Hills"]),
        // new Terrain(TerrainTemperature.Temperate, TerrainHumidity.Arid, TerrainType.Archipelago, [""]),
        new Terrain(TerrainTemperature.Temperate, TerrainHumidity.Arid, TerrainType.Wasteland, ["Wasteland", "Wastes"]),
    ]
}
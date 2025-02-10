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

        // Cold terrains
        new Terrain(TerrainTemperature.Cold, TerrainHumidity.Arid, TerrainType.Flatlands, ["Tundra", "Snowfields"]),
        new Terrain(TerrainTemperature.Cold, TerrainHumidity.Arid, TerrainType.Mountains, ["Mountains", "Range"]),
        // new Terrain(TerrainTemperature.Temperate, TerrainHumidity.Arid, TerrainType.Wetlands, [""]),
        // new Terrain(TerrainTemperature.Temperate, TerrainHumidity.Arid, TerrainType.Island, [""]),
        new Terrain(TerrainTemperature.Cold, TerrainHumidity.Arid, TerrainType.Forest, ["Forest", "Woods", "Woodland", "Woodlands", "Wood"]),
        new Terrain(TerrainTemperature.Cold, TerrainHumidity.Arid, TerrainType.Hills, ["Hills"]),
        // new Terrain(TerrainTemperature.Temperate, TerrainHumidity.Arid, TerrainType.Archipelago, [""]),
        new Terrain(TerrainTemperature.Cold, TerrainHumidity.Arid, TerrainType.Wasteland, ["Wasteland", "Wastes"]),


        // HUMID TERRAINS

        // Hot terrains
        new Terrain(TerrainTemperature.Hot, TerrainHumidity.Humid, TerrainType.Flatlands, ["Savanna", "Grasslands"]),
        new Terrain(TerrainTemperature.Hot, TerrainHumidity.Humid, TerrainType.Mountains, ["Mountains", "Range"]),
        new Terrain(TerrainTemperature.Hot, TerrainHumidity.Humid, TerrainType.Wetlands, ["Bayou", "Marshlands"]),
        new Terrain(TerrainTemperature.Hot, TerrainHumidity.Humid, TerrainType.Island, ["Island", "Isle"]),
        new Terrain(TerrainTemperature.Hot, TerrainHumidity.Humid, TerrainType.Forest, ["Jungle", "Rainforest"]),
        new Terrain(TerrainTemperature.Hot, TerrainHumidity.Humid, TerrainType.Hills, ["Hills"]),
        new Terrain(TerrainTemperature.Hot, TerrainHumidity.Humid, TerrainType.Archipelago, ["Islands", "Isles", "Archipelago"]),
        new Terrain(TerrainTemperature.Hot, TerrainHumidity.Humid, TerrainType.Wasteland, ["Wasteland", "Wastes"]),

        // Temperate terrains
        new Terrain(TerrainTemperature.Temperate, TerrainHumidity.Humid, TerrainType.Flatlands, ["Plains", "Grasslands", "Fields"]),
        new Terrain(TerrainTemperature.Temperate, TerrainHumidity.Humid, TerrainType.Mountains, ["Mountains", "Range"]),
        new Terrain(TerrainTemperature.Temperate, TerrainHumidity.Humid, TerrainType.Wetlands, ["Swamp", "Swamplands"]),
        new Terrain(TerrainTemperature.Temperate, TerrainHumidity.Humid, TerrainType.Island, ["Island", "Isle"]),
        new Terrain(TerrainTemperature.Temperate, TerrainHumidity.Humid, TerrainType.Forest, ["Forest", "Woods", "Woodland", "Woodlands", "Wood"]),
        new Terrain(TerrainTemperature.Temperate, TerrainHumidity.Humid, TerrainType.Hills, ["Hills"]),
        new Terrain(TerrainTemperature.Temperate, TerrainHumidity.Humid, TerrainType.Archipelago, ["Islands", "Isles", "Archipelago"]),
        new Terrain(TerrainTemperature.Temperate, TerrainHumidity.Humid, TerrainType.Wasteland, ["Wasteland", "Wastes"]),

        // Cold terrains
        new Terrain(TerrainTemperature.Cold, TerrainHumidity.Humid, TerrainType.Flatlands, ["Tundra", "Snowfields"]),
        new Terrain(TerrainTemperature.Cold, TerrainHumidity.Humid, TerrainType.Mountains, ["Mountains", "Range"]),
        new Terrain(TerrainTemperature.Cold, TerrainHumidity.Humid, TerrainType.Wetlands, ["Bog"]),
        new Terrain(TerrainTemperature.Cold, TerrainHumidity.Humid, TerrainType.Island, ["Island", "Isle"]),
        new Terrain(TerrainTemperature.Cold, TerrainHumidity.Humid, TerrainType.Forest, ["Forest", "Woods", "Woodland", "Woodlands", "Wood"]),
        new Terrain(TerrainTemperature.Cold, TerrainHumidity.Humid, TerrainType.Hills, ["Hills"]),
        new Terrain(TerrainTemperature.Cold, TerrainHumidity.Humid, TerrainType.Archipelago, ["Islands", "Isles", "Archipelago"]),
        new Terrain(TerrainTemperature.Cold, TerrainHumidity.Humid, TerrainType.Wasteland, ["Wasteland", "Wastes"]),
    ]
}
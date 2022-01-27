export default class KeyValue<T>{
    public Key: string;
    public Value: T;

    constructor(key: string, value: T){
        this.Key = key;
        this.Value = value;
    }
}
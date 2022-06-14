export  default class Pets{
    constructor(
        private _id: string,
        private _name_pets: string,
        private _DOGHERO_id: string
    ){}

    public get id(): string {
        return this._id 
    }
    public set id(value: string ) {
        this._id = value
    }
    public get name_pets(): string {
        return this._name_pets 
    }
    public set name_pets(value: string ) {
        this._name_pets = value
    }
    public get DOGHERO_id(): string {
        return this._DOGHERO_id 
    }
    public set DOGHERO_id(value: string ) {
        this._DOGHERO_id = value
    }
} 
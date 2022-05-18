export default class Tags{

    public get name(): string {
        return this._name
    }
    public set name(value: string) {
        this._name = value
    }
    public get id(): string {
        return this._id
    }
    public set id(value: string) {
        this._id = value
    }
    
    constructor(
        private _id: string,
        private _name: string        
    ){}   
}

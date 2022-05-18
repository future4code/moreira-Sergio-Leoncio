export default class Products{
    public get tags(): string[] {
        return this._tags
    }
    public set tags(value: string[]) {
        this._tags = value
    }
    public get name(): string {
        return this._name
    }
    public set name(value: string) {
        this._name = value
    }
    public get id(): number {
        return this._id
    }
    public set id(value: number) {
        this._id = value
    }
    
    constructor(
        private _id: number,
        private _name: string,
        private _tags: string[]        
    ){}   
}


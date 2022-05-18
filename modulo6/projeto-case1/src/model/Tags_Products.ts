export default class Tags_Products{

    public get name(): string {
        return this._tags_id
    }
    public set tags_id(value: string) {
        this._tags_id = value
    }
    public get products_id(): string {
        return this._products_id
    }
    public set products_id(value: string) {
        this._products_id = value
    }
    
    constructor(
        private _products_id: string,
        private _tags_id: string        
    ){}   
}

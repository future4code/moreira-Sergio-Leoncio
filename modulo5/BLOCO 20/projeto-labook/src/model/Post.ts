export enum POST_ROLES {
    NORMAL = "NORMAL",
    EVENT = "EVENT",
  }

  export default class Post{
    public get author_id(): string {
        return this._author_id
    }
    public set author_id(value: string) {
        this._author_id = value
    }
    public get created_date(): Date {
        return this._created_date
    }
    public set created_date(value: Date) {
        this._created_date = value
    }
    public get description(): string {
        return this._description
    }
    public set description(value: string) {
        this._description = value
    }
    public get photo(): string {
        return this._photo
    }
    public set photo(value: string) {
        this._photo = value
    }
    public get id(): string {
        return this._id
    }
    public set id(value: string) {
        this._id = value
    }
    
    constructor(
        private _id: string,
        private _photo: string,
        private _description: string,
        private _created_date?: Date,        
        private _author_id?: string,
        private _type?: POST_ROLES
    ){}
}

  
  
  
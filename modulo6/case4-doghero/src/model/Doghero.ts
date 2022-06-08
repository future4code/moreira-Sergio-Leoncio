import { ROLES_DURATION, ROLES_STATUS } from "../types/DogheroTypes";

export default class Doghero {
    constructor(
        private _id: string,
        private _name_pets: string[],
        private _status: ROLES_STATUS,
        private _date_schedule: Date,
        private _price: number,
        private _latitude: string,
        private _longitude: string,
        private _duration: ROLES_DURATION,
        private _date_start: Date,
        private _date_end: Date
    ){}

    public get id(): string {
        return this._id 
    }
    public set id(value: string ) {
        this._id = value
    }
    public get name_pets(): string[] {
        return this._name_pets 
    }
    public set name_pets(value: string[] ) {
        this._name_pets = value
    }
    public get status(): ROLES_STATUS {
        return this._status 
    }
    public set status(value: ROLES_STATUS ) {
        this._status = value
    }
    public get date_schedule(): Date {
        return this._date_schedule 
    }
    public set date_schedule(value: Date ) {
        this._date_schedule = value
    }
    public get price(): number {
        return this._price 
    }
    public set price(value: number ) {
        this._price = value
    }
    public get latitude(): string {
        return this._latitude 
    }
    public set latitude(value: string ) {
        this._latitude = value
    }
    public get longitude(): string {
        return this._longitude 
    }
    public set longitude(value: string ) {
        this._longitude = value
    }
    public get duration(): ROLES_DURATION {
        return this._duration 
    }
    public set duration(value: ROLES_DURATION ) {
        this._duration = value
    }
    public get date_start(): Date {
        return this._date_start 
    }
    public set date_start(value: Date ) {
        this._date_start= value
    }
    public get date_end(): Date {
        return this._date_end 
    }
    public set date_end(value: Date ) {
        this._date_end = value
    }
}
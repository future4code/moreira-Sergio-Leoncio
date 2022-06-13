import { ROLES_STATUS } from "../types/DogheroTypes";
import Doghero from "./Doghero";
import Pets from "./Pets";

export interface IDogheroData{
    create(doghero: Doghero):Promise<Doghero>
    findDogheroById(id: string):Promise<Doghero>
    index():Promise<Doghero>
    searchByDate(today: string):Promise<Doghero>
    start(id: string, status: string):Promise<void>    
}

export interface IPetsData{
    create(pets: Pets):Promise<Pets>
    findPetsByName(name: string):Promise<Pets>
}
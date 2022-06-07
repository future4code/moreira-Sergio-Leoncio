import Doghero from "./Doghero";

export interface IDogheroData{
    create(doghero: Doghero):Promise<Doghero>
    findDogheroById(id: string):Promise<Doghero>
}
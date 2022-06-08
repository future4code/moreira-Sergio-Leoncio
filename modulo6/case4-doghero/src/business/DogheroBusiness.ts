import { Router } from "express";
import { PetsData } from "../data/PetsData";
import Doghero from "../model/Doghero";
import { IDogheroData, IPetsData } from "../model/interface";
import Pets from "../model/Pets";
import { IdGenerator } from "../services/IdGenerator";
import { DogheroInputDTO } from "../types/dogheroInputDTO";
import { ROLES_DURATION } from "../types/DogheroTypes";

export default class DogheroBusiness {
  private dogheroData: IDogheroData;
  private idGenerator: IdGenerator;
  private petsData: IPetsData;

  constructor(
    dogheroDataRepository: IDogheroData,
    petsDataRepository: IPetsData
  ) {
    this.dogheroData = dogheroDataRepository;
    this.idGenerator = new IdGenerator();
    this.petsData = petsDataRepository;
  }

  signup = async (input: DogheroInputDTO) => {
    //validacao
    const {
      status,
      name_pets,
      date_schedule,
      latitude,
      longitude,
      date_start,
      date_end,
    } = input;
    if (
      !status ||
      !name_pets ||
      !date_schedule ||
      !latitude ||
      !longitude ||
      !date_start ||
      !date_end
    ) {
      throw new Error("Invalid fields");
    }

    //criar uma id pro serviço
    const id = this.idGenerator.generateId();

    let start = new Date (date_start).getTime();
    let end = new Date (date_end).getTime();
    let price;
    let duration;
    let tempo = Math.abs(start - end);
    tempo = (tempo / 6000) % 60;
    if (tempo <= 30) {
      duration = ROLES_DURATION.TRINTA;
      price = 25 + (name_pets.length - 1) * 15;
    } else {
      duration = ROLES_DURATION.SESSENTA;
      price = 35 + (name_pets.length - 1) * 20;
    }

    for (let name of name_pets) {
      const nameId = this.idGenerator.generateId();
      const pets = new Pets(nameId, name, id);
      await this.petsData.create(pets);
    }

    //criar o serviço no banco
    const dog = new Doghero(
      id,
      name_pets,
      status,
      date_schedule,
      price,
      latitude,
      longitude,
      duration,
      date_start,
      date_end
    );
    await this.dogheroData.create(dog);

    return dog;
  };
}

import Doghero from "../model/Doghero";
import { IDogheroData, IPetsData } from "../model/interface";
import Pets from "../model/Pets";
import { IdGenerator } from "../services/IdGenerator";
import { DogheroInputDTO } from "../types/dogheroInputDTO";
import { ROLES_DURATION, ROLES_STATUS } from "../types/DogheroTypes";

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

  create = async (input: DogheroInputDTO) => {
    //validacao
    const {
      name_pets,
      date_schedule,
      latitude,
      longitude,
      date_start,
      date_end,
    } = input;
    if (
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
    //devolver o erro se date_start e o date_end e o formato certo usando o regex
    let start = new Date (date_start).getTime();
    let end = new Date (date_end).getTime();
    //devolver o erro se data for menor que a data do momento
    let price;
    let duration;
    let tempo = Math.abs(start - end);
    tempo = (tempo / 60000);
    //console.log(tempo)
    //devolver o erro pro usuario se o tempo for diferente de 30 e 60
    if (tempo <= 30) {
      duration = ROLES_DURATION.TRINTA;
      price = 25 + (name_pets.length - 1) * 15;
    } else {
      duration = ROLES_DURATION.SESSENTA;
      price = 35 + (name_pets.length - 1) * 20;
    }   
    //criar o serviço no banco
    const dog = new Doghero(
      id,
      ROLES_STATUS.A_FAZER,
      date_schedule,
      price,
      latitude,
      longitude,
      duration,
      date_start,
      date_end
    );
    await this.dogheroData.create(dog);

    for (let name of name_pets) {
      const nameId = this.idGenerator.generateId();
      const pets = new Pets(nameId, name, id);
      await this.petsData.create(pets);
    }

    return dog;
  };

  index =  async (today: string = ""): Promise<any> =>{
    
   const service =  await this.dogheroData.searchByDate(today)    

    return service
  }

  start = async (id: string, status: string): Promise<void>=>{
            
   await this.dogheroData.start(id, status)

  }
}

import Doghero from "../model/Doghero";
import { IDogheroData } from "../model/interface";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { DogheroInputDTO } from "../types/dogheroInputDTO";

export default class DogheroBusiness {
  
  private dogheroData: IDogheroData;
  private idGenerator: IdGenerator;
  private hashManager: HashManager;
  private authenticator: Authenticator;

  constructor(dogheroDataRepository: IDogheroData) {
    this.dogheroData = dogheroDataRepository;
    this.idGenerator = new IdGenerator();
    this.hashManager = new HashManager();
    this.authenticator = new Authenticator();
  }

  signup = async (input: DogheroInputDTO) => {
    //validacao
    const {         
        status, 
        date_schedule, 
        price, 
        latitude, 
        longitude, 
        duration, 
        date_start, 
        date_end
    } = input;
    if (
        !status || 
        !date_schedule || 
        !price || 
        !latitude || 
        !longitude || 
        !duration || 
        !date_start || 
        !date_end) {
      throw new Error("Invalid fields");
    }
    
    //criar uma id pro usuario
    const id = this.idGenerator.generateId();    

    //conferir se o serviço existe
    const registeredUser = await this.dogheroData.findDogheroById(id);
    if (registeredUser) {
      throw new Error("Service already registered");
    } 
        
    //criar o usuario no banco
    const dog = new Doghero(
          id,
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

    //criar o token
    const token = this.authenticator.generate({ id });
    //retornar o token
    return token;
  };
}

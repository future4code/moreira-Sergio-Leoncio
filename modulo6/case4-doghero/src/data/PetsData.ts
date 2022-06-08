import { IPetsData } from "../model/interface"
import Pets from "../model/Pets"
import { BaseDatabase } from "./BaseDatabase"

export class PetsData extends BaseDatabase implements IPetsData{
    protected TABLE_NAME = "PETS"
    
    create =  async (pets: Pets): Promise<Pets> => {
      try{
        await this.connection(this.TABLE_NAME)
        .insert({
          id: pets.id,
          name_pets: pets.name_pets,
          DOGHERO_id: pets.DOGHERO_id          
        })
        return pets
  
      } catch (error) {
          if (error instanceof Error) {
              throw new Error(error.message)
          } else {
              throw new Error("Bank error!")
          }
      }
    }
    findPetsByName = async (name: string): Promise<Pets>=>{
        try {
            const answerName = await this.connection(this.TABLE_NAME)
            .select("*")
            .where({ name })
    
            return answerName[0];
        } catch (error: any) {
          throw new Error(error.message);
        }
      }
}
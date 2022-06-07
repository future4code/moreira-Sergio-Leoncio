import Doghero from "../model/Doghero"
import { IDogheroData } from "../model/interface"
import { BaseDatabase } from "./BaseDatabase"



export class DogheroData extends BaseDatabase implements IDogheroData{
    protected TABLE_NAME = "DOGHERO"
    
    create =  async (doghero: Doghero): Promise<Doghero> => {
      try{
        await this.connection(this.TABLE_NAME)
        .insert({
          id: doghero.id,
          status: doghero.status,
          date_schedule: doghero.date_schedule,
          price: doghero.price,
          latitude: doghero.latitude,
          longitude: doghero.longitude,
          duration: doghero.duration,
          date_start: doghero.date_start,
          date_end: doghero.date_end
        })
        return doghero
  
      } catch (error) {
          if (error instanceof Error) {
              throw new Error(error.message)
          } else {
              throw new Error("Bank error!")
          }
      }
    }
    findDogheroById = async (id: string): Promise<Doghero>=>{
        try {
            const answerId = await this.connection(this.TABLE_NAME)
            .select("*")
            .where({ id })
    
            return answerId[0];
        } catch (error: any) {
          throw new Error(error.message);
        }
      }
}
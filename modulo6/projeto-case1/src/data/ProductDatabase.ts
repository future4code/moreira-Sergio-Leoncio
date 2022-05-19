import { SignupInputDTO } from "../types/signupInputDTO";
import { BaseDatabase } from "./BaseDatabase";


export class ProductDatabase extends BaseDatabase {

    findById = async (id: number)=>{
        try {
            const product = await this.connection.raw(`
            SELECT name FROM products 
            WHERE id='${id}'
            `)
  
            console.log(product[0][0])
        return product[0][0];
  
        } catch (error: any) {
          throw new Error(error.sqlMessage || error.message);
        }
      } 

    create = async(input:any)=>{

        await this.connection.raw(`
            INSERT INTO products (id, name, tags)
            VALUES (
                "${input.id}",
                "${input.name}",
                "${input.tags}"
            );
        `)
    }    
}
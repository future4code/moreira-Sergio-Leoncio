import { Products } from "../model/Products";
import { SignupInputDTO } from "../types/signupInputDTO";
import { BaseDatabase } from "./BaseDatabase";

export class ProductDatabase extends BaseDatabase {
 public async findById(id: number) {
    try {
      const product = await this.connection.raw(`
            SELECT name FROM products 
            WHERE id='${id}'
            `);

      console.log(product[0][0]);
      return product[0][0];
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };

  public async create(input: any):Promise<void> {
    await this.connection.raw(`
            INSERT INTO products (id, name, tags)
            VALUES (
                "${input.id}",
                "${input.name}",
                "${input.tags}"
            );
        `);
  };

  public async search(id: number):Promise<any> {
    try {
      const result = await this.connection.raw(`
            SELECT * FROM products
            WHERE id='${id}'
            `);
            if(result[0].length === 0){
                return null
            }
      return result[0][0];

    } catch (error: any) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("Erro do banco !");
      }
    }
  };
}

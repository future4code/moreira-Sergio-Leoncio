import { SignupInputDTO } from "../types/signupInputDTO";
import { BaseDatabase } from "./BaseDatabase";

export class ProductDatabase extends BaseDatabase {
  findById = async (id: number) => {
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

  create = async (input: any) => {
    await this.connection.raw(`
            INSERT INTO products (id, name, tags)
            VALUES (
                "${input.id}",
                "${input.name}",
                "${input.tags}"
            );
        `);
  };

  search = async (id: number) => {
    try {
      const result = await this.connection.raw(`
            SELECT * FROM products
            WHERE id='${id}'
            `);
            if(result[0].length === 0){
                return null
            }
           // console.log(result)
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

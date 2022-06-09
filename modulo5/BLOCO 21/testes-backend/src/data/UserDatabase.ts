import BaseDataBase from "./BaseDataBase";
import { User } from "../model/User";

export class UserDatabase extends BaseDataBase {

   protected tableName: string = "User_Arq";

   private toModel(dbModel?: any): User | undefined {
      return (
         dbModel &&
         new User(
            dbModel.id,
            dbModel.name,
            dbModel.email,
            dbModel.password,
            dbModel.role
         )
      );
   }

   public async createUser(user: User): Promise<void> {
      try {
         await BaseDataBase.connection.raw(`
            INSERT INTO ${this.tableName} (id, name, email, password, role)
            VALUES (
            '${user.getId()}', 
            '${user.getName()}', 
            '${user.getEmail()}',
            '${user.getPassword()}', 
            '${user.getRole()}'
            )`
         );
      } catch (error:any) {
         throw new Error(error.sqlMessage || error.message)
      }
   }

   
   public async getUserById(id: string): Promise<User | undefined> {
      try {
         const result = await BaseDataBase.connection.raw(`
            SELECT * from ${this.tableName} WHERE id = '${id}'
         `);
         return this.toModel(result[0][0]);
      } catch (error:any) {
         throw new Error(error.sqlMessage || error.message)
      }
   }

   
}
import { UserDatabase } from "../data/UserDatabase";
import { CustomError } from "../errors/CustomError";
import { User, stringToUserRole } from "../model/User";
import { HashGenerator } from "../services/hashGenerator";
import { IdGenerator } from "../services/idGenerator";
import { TokenGenerator } from "../services/tokenGenerator";

export class UserBusiness {

   constructor(
      private userDatabase: UserDatabase,
      private idGenerator: IdGenerator,
      private tokenGenerator: TokenGenerator,
      private hashGenerator: HashGenerator
   ) { }

   public async signup(
      name: string,
      email: string,
      password: string,
      role: string
   ) {
      try {
         if (!name || !email || !password || !role) {
            throw new CustomError(422, "Missing input");
         }
         /* 
         Como funciona o index of
         const email = fl@lab.com.br -> email.indexOf("@") -> 2
         const email = @fl.com.br -> email.indexOf("@") ->  0
         const email = fl.com.br -> email.indexOf("@") -> -1
         */
         if (email.indexOf("@") === -1 || email.indexOf("@") === 0) {
            throw new CustomError(422, "Invalid email");
         }

         if (password.length < 6) {
            throw new CustomError(422, "Invalid password");
         }

         const id = this.idGenerator.generate();

         const cypherPassword = await this.hashGenerator.hash(password);

         await this.userDatabase.createUser(
            new User(id, name, email, cypherPassword, stringToUserRole(role))
         );

         const accessToken = this.tokenGenerator.generate({
            id,
            role,
         });
         return { accessToken };
      } catch (error) {
         if (error instanceof CustomError) {
            if (error.message.includes("key 'email'")) {
               throw new CustomError(409, "Email already in use")
            }

            throw new CustomError(error.statusCode, error.message)
         }
      }

   }
  
}
import * as jwt from "jsonwebtoken";
import { authenticationData } from "../types";

  const expiresIn = "1d";
 export const generateToken = (input: authenticationData): string => {
    const token = jwt.sign(
      {
        id: input.id,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn
      }
    );
    return token;
  }






// export class Authenticator {
//     GenerateToken = (payload: authenticationData) => {
//         return jwt.sign(
//             payload,
//             process.env.JWT_KEY as string,
//             {
//                 expiresIn: "5s"
//             }
//         )
//     }

//     GetTokenData = (token: string)=> {
//         try {
//             const tokenData = jwt.verify(
//                 token, process.env.JWT_KEY as string
//             ) as authenticationData
//             return tokenData;
//         } catch (err) {
//             console.log(err)
//             return null
//         }
//     }
// }
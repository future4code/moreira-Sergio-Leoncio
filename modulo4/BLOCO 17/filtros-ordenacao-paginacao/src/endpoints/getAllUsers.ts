import { Request, Response } from "express"
import { connection } from "../data/connection"
import { user} from "../types"
import { selectAllUsers } from "../data/selectAllUsers"


export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
    try {
       const users = await selectAllUsers()
      console.log(users)
       if(!users.length){
          res.statusCode = 404
          throw new Error("No user found")
       }
 
       res.status(200).send(users)
       
    } catch (error: any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }


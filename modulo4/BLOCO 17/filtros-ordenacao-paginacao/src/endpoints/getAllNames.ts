import { Request, Response } from "express"
import { user} from "../types"
import { selectAllNames } from "../data/selectAllNames"

export const getAllNames = async(req: Request,res: Response): Promise<void> =>{
    try {
      const nome =  req.query.name as string
      const users = await selectAllNames(nome) 
       console.log(users)
       if(users.length === 0){
          res.statusCode = 404
          throw new Error("No users found")
       }
 
       res.status(200).send(users)
       
    } catch (error: any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }

 

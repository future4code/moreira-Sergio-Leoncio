import { Response, Request } from "express";
import DogheroBusiness from "../business/DogheroBusiness";
import { DogheroInputDTO } from "../types/dogheroInputDTO";

export default class DogheroController {
    constructor(private dogheroBusiness: DogheroBusiness) {}
  
    create = async (req: Request, res: Response) => {
      const { 
          name_pets, 
          date_schedule, 
          latitude, 
          longitude, 
          date_start, 
          date_end

      } = req.body;
  
      const input: DogheroInputDTO = {
        name_pets,
        date_schedule, 
        latitude, 
        longitude, 
        date_start, 
        date_end
      };
      try {
        const service = await this.dogheroBusiness.create(input);
  
        res.status(201).send({ message: "Service registered successfully!", service});
      } catch (error) {
        if (error instanceof Error) {
          return res.status(400).send(error.message);
        }
        res.status(500).send("Erro no signup");
      }
    };

    index =  async (req: Request, res: Response) =>{
      try{
        const today = req.query.today as string       

        const service = await this.dogheroBusiness.index(today);       
      
        res.status(200).send({service});
        }catch(error: any){
        switch(error.message){
          case "Some a error!":
            res.status(500).send(error.message)
          default:
            res.status(400).send({message: error.message});
        }
      }
    }

    start = async (req: Request, res: Response) => {

      const  status = req.body.status
      const id = req.body.id 
      
      try{         
      
      await this.dogheroBusiness.start(id, status) 
  
      res.status(201).send({ message:'status edited success'});
    } catch(error: any){
        switch(error.message){
          case "Some a error!":
            res.status(500).send(error.message)
          default:
            res.status(400).send({message: error.message});
        }
      }
    }
}  
  
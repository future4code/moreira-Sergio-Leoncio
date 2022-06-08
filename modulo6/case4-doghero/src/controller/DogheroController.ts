import { Response, Request } from "express";
import DogheroBusiness from "../business/DogheroBusiness";
import { DogheroInputDTO } from "../types/dogheroInputDTO";


export default class DogheroController {
    constructor(private dogheroBusiness: DogheroBusiness) {}
  
    signup = async (req: Request, res: Response) => {
      const { 
          status,
          name_pets, 
          date_schedule, 
          price, 
          latitude, 
          longitude, 
          duration, 
          date_start, 
          date_end

      } = req.body;
  
      const input: DogheroInputDTO = {
        status,
        name_pets,
        date_schedule, 
        price, 
        latitude, 
        longitude, 
        duration, 
        date_start, 
        date_end

      };
      try {
        const service = await this.dogheroBusiness.signup(input);
  
        res.status(201).send({ message: "Service registered successfully!", service});
      } catch (error) {
        if (error instanceof Error) {
          return res.status(400).send(error.message);
        }
        res.status(500).send("Erro no signup");
      }
    };
}  
  
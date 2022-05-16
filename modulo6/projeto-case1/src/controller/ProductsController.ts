import { Request, Response } from "express";
import ProductsBusiness from "../business/ProductsBusiness";
import { SignupInputDTO } from "../types/signupInputDTO";

export default class ProductsController{
    constructor(
        private productsBusiness: ProductsBusiness
    ){}

    signup = async(req: Request, res: Response) =>{
        const {name, tags} = req.body;

        const input: SignupInputDTO ={
            name,
            tags                 
        }
        try {
            const token = await this.productsBusiness.signup(input)
            
            res.status(201).send({message: "Usuário cadastrado com sucesso"})
            
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).send(error.message)
            }
            res.status(500).send("Erro no signup")
        }
    }    
}
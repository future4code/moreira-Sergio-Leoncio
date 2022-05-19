import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { SignupInputDTO } from "../types/signupInputDTO";

const product = new ProductBusiness

export class ProductContoller{

    create = async (req:Request, res:Response):Promise< any >=>{

        try {
            const {id, name, tags} = req.body

            const input: SignupInputDTO ={
                id,
                name,
                tags
            }
            
            await product.create(input) 

            res.status(201).send({message:"Produto cadastrado com sucesso!"})

        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).send(error.message)
            }
            res.status(500).send("Erro no cadastro")
        }
    }
}
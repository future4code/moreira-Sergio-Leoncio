import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { Products } from "../model/Products";
import { Idgenerator } from "../services/IdGenerator";
import { SearchInputDTO } from "../types/SearchInputDto";
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

    search = async (req:Request, res:Response):Promise< any > => {
       try {
                let message = "Sucess"
            
            const input: SearchInputDTO = {
                id:Number(req.params.id)
            }                
            

        const prod = await new ProductBusiness().search(input)          
            res.status(200).send({message, prod})                         
        

       }catch(error) {
        if (error instanceof Error) {
            return res.status(400).send(error.message)
        }
        res.status(500).send("Erro no search") 
       }
    
    }
}
import { Request, Response } from "express";
import ProductsBusiness from "../business/ProductsBusiness";
import { SignupInputDTO } from "../types/signupInputDTO";

export default class ProductsController{
    constructor(
        private productsBusiness: ProductsBusiness
    ){}

    signup = async(req: Request, res: Response) =>{
        const {id, name} = req.body;

        const input: SignupInputDTO ={ 
            id,           
            name                                         
        }
        try {
            const post = await this.productsBusiness.signup(input)
            
            res.status(201).send({message: "Produto cadastrado com sucesso"})
            
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).send(error.message)
            }
            res.status(500).send("Erro no signup")
        }
    } 
    // signupTags = async(req: Request, res: Response) =>{
    //     const {id, name} = req.body;

    //     const input: SignupInputDTO ={ 
    //         id,           
    //         name                             
    //     }
    //     try {
    //         const post = await this.productsBusiness.signupTags(input)
            
    //         res.status(201).send({message: "Tags cadastrado com sucesso"})
            
    //     } catch (error) {
    //         if (error instanceof Error) {
    //             return res.status(400).send(error.message)
    //         }
    //         res.status(500).send("Erro no signup")
    //     }
    // }    
    // search = async(req: Request, res: Response) =>{
    //     try {
    //         const { id } = req.params            
           
    //         const input: SignupInputDTO ={
    //             id: req.params.id,
    //             name: req.params.name                
    //         }
          
    //         const getBand = await this.productsBusiness.search(input)
    //         //console.log(getBand)            

    //         res.status(200).send({message: "sucess in search", getBand})

    //     } catch(error){
    //         if (error instanceof Error) {
    //             return res.status(400).send(error.message)
    //         }
    //         res.status(500).send("Erro no search")
    //     }    
    // }
}
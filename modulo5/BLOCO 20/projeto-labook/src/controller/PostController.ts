import { Request, Response } from "express";
import PostBusiness from "../business/PostBusiness";
import { PostInputDTO } from "../types/PostInputDTO";

export default class PostController{
    constructor(
        private postBusiness: PostBusiness
    ){}

    createPost = async(req: Request, res: Response) =>{
        const token = req.headers.authorization

        const {photo, description, type} = req.body;

        const input: PostInputDTO ={
            photo,
            description,
            type              
                                   
        }
        try {
            if(!token){
              res.status(422).send("Esse endpoint exige um token")
            }
            res.status(201).send({message: "Post criado com sucesso"})
            
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).send(error.message)
            }
            res.status(500).send("Erro no signup")
        }
    } 
    getPost = async(req: Request, res: Response) => {
        const { id } = req.params

        const token = req.headers.authorization

        try{
            if(!token){
                res.status(422).send("Esse endpoint exige um token")
              }
              
              res.status(200).send(id)

        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).send(error.message)
            }
            res.status(500).send("Erro no signup")
        } 
    }  
}
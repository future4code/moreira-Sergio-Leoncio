import { Request, Response } from "express";
import PostBusiness from "../business/PostBusiness";
import { PostInputDTO } from "../types/PostInputDTO";

export default class PostController{
    constructor(
        private postBusiness: PostBusiness
    ){}

    createPost = async(req: Request, res: Response) =>{
        const {photo, description, type, created_date, author_id} = req.body;

        const input: PostInputDTO ={
            photo,
            description,        
            created_date,
            author_id           
        }
        try {
           
            res.status(201).send({message: "Post criado com sucesso"})
            
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).send(error.message)
            }
            res.status(500).send("Erro no signup")
        }
    }    
}
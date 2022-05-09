import { IPostData } from "../model/interfacePostData";
import Post from "../model/Post";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { PostInputDTO } from "../types/PostInputDTO";

export default class PostBusiness{

        private postData:IPostData;
        private idGenerator:IdGenerator;
        private hashManager:HashManager;
        private authenticator:Authenticator;
    

    constructor(postDataRepository:IPostData){
        this.postData = postDataRepository
        this.idGenerator = new IdGenerator
        this.hashManager = new HashManager
        this.authenticator = new Authenticator
    }

    createPost = async (input:PostInputDTO) =>{
                
        //validacao
        const {photo, description, type} = input

        if(!photo || !description ){
            throw new Error("Campos inválidos")
        }

        //criar uma id pro usuario
        const id = this.idGenerator.generateId()
                
        //criar o usuario no banco
        const post = new Post(
            id,
            photo,
            description                                     
        )
        await this.postData.insertPost(post)        
    } 
       
}
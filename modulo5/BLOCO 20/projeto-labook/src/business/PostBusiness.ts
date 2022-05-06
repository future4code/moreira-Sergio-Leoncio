import { IPostData } from "../model/interfacePostData";
import Post from "../model/Post";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { PostInputDTO } from "../types/PostInputDTO";

export default class PostBusiness{

        private userData:IPostData;
        private idGenerator:IdGenerator;
        private hashManager:HashManager;
        private authenticator:Authenticator;
    postData: any;

    constructor(postDataRepository:IPostData){
        this.postData = postDataRepository
        this.idGenerator = new IdGenerator
        this.hashManager = new HashManager
        this.authenticator = new Authenticator
    }

    createPost = async (input:PostInputDTO) =>{
        //validacao
        const {photo, description, type, created_date, author_id} = input
        if(!photo || !description || !created_date || !author_id ){
            throw new Error("Campos inválidos")
        }

        //criar uma id pro usuario
        const id = this.idGenerator.generateId()

        
        //criar o usuario no banco
        const post = new Post(
            id,
            photo,
            description,
            created_date,
            author_id            
        )
        await this.postData.insertPost(post)
        
    }    
}
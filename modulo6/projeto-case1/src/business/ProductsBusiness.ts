import { IProductsData } from "../model/interfaceProductsData";
import Products from "../model/Products";
import { IdGenerator } from "../services/IdGenerator";
import { SignupInputDTO } from "../types/signupInputDTO";

export default class ProductsBusiness{

        private productsData:IProductsData;
        private idGenerator:IdGenerator;
        
    constructor(productsDataRepository:IProductsData){
        this.productsData = productsDataRepository
        this.idGenerator = new IdGenerator        
    }

    signup = async (input:SignupInputDTO) =>{
        //validacao        
        const {name, tags} = input
        if(!name || !tags ){
            throw new Error("Campos inválidos")
        } 
        //criar uma id pro usuario
        const id = this.idGenerator.generateId()
        
        //criar o usuario no banco
        const prod = new Products(
            id,
            name,
            tags                        
        )
        await this.productsData.insertProducts(prod)       
    }    
}
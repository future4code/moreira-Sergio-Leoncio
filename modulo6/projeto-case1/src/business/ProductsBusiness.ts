import { IProductsData } from "../model/interfaceProductsData";
import Products from "../model/Products";
import Tags from "../model/Tags";
import { IdGenerator } from "../services/IdGenerator";
import { SignupInputDTO } from "../types/signupInputDTO";
import products from "../data/products.json"

export default class ProductsBusiness{

        private productsData:IProductsData;
        private idGenerator:IdGenerator;
        
    constructor(productsDataRepository:IProductsData){
        this.productsData = productsDataRepository
        this.idGenerator = new IdGenerator        
    }

    signup = async (input:SignupInputDTO) =>{
        //validacao        
        // const {id, name} = input
        // if(!id || !name){
        //     throw new Error("Campos inválidos")
        // } 

        //conferir se o produto existe
        // const registeredUser = await this.productsData.findByName(name)
        // if(registeredUser){
        //     throw new Error("produto já cadastrado")
        // }
        //criar uma id pro produto
        //const id = this.idGenerator.generateId()
        
        //criar o produto no banco
                for(let item of products){
                    console.log(item)
                    const prod = new Products(
                        item.id,
                        item.name,
                        item.tags                                    
                    )
                    await this.productsData.insertProducts(prod)
                    return prod
        }
        
    } 
    // signupTags = async (input:SignupInputDTO) =>{
    //     //validacao        
    //     const {id, name} = input
    //     if(!id || !name){
    //         throw new Error("Campos inválidos")
    //     } 

    //     //conferir se o produto existe
    //     const registeredUser = await this.productsData.findByTags(name)
    //     if(registeredUser){
    //         throw new Error("Tags já cadastrada")
    //     }
    //     //criar uma id pro produto
    //     //const id = this.idGenerator.generateId()
        
    //     //criar o produto no banco
    //     const tags = new Tags(
    //         id,
    //         name                                    
    //     )
    //     await this.productsData.insertTags(tags)
    //     return tags
    // }
    
    // search = async (input:SignupInputDTO) =>{
    //     const { id, name } = input

    //       if(!id ){
    //           throw new Error("Produto não encontrada")
    //       }
    //       const registeredBand = await this.productsData.search(id,name)  
          
    //       return registeredBand
    //   }
}
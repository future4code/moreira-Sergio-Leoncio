import { IProductsData } from "../model/interfaceProductsData"
import Products from "../model/Products"
import Tags from "../model/Tags"
import { BaseDatabase } from "./BaseDatabase"

export default class ProductsData extends BaseDatabase implements IProductsData {
   protected TABLE_NAME = "PRODUCTS" 
   protected TABLE_TAGS  =  "PRODUCTS_TAGS"
   protected TABLE_TAGS_PRODUCTS = "TAGS_PRODUCTS"

    insertProducts = async (prod: Products): Promise<Products> => {
        try {            
            await this                
                .connection(this.TABLE_NAME)
                
                .insert({
                    id: prod.id,
                    name: prod.name                                       
                })
                for(let name of prod.tags){
                    const tag = await this.connection(this.TABLE_TAGS)
                        .select()
                        .where({name})
                        if(!tag){
                            await this
                            .connection(this.TABLE_TAGS)
                            .insert({
                                name: name
                            })
                        } 
                }           
                return prod

        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Erro do banco !")
            }
        }
    }
    insertTags = async (tags: Tags): Promise<Tags> => {
        try {            
            await this
                .connection(this.TABLE_TAGS)
                .insert({
                    id: tags.id,
                    name: tags.name                   
                })                                            
                return tags
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Erro do banco !")
            }
        }
    }    
    findByName = async (name: string):Promise<Products> => {
        try {
            const queryResult = await this
                .connection(this.TABLE_NAME)
                .select()
                .where({ name })

            return queryResult[0]
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Erro do banco !")
            }
        }
    } 
    findByTags = async (name: string):Promise<Tags> => {
        try {
            const queryResult = await this
                .connection(this.TABLE_TAGS)
                .select()
                .where({ name })

            return queryResult[0]
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Erro do banco !")
            }
        }
    }    
    search = async (id:string, name: string): Promise<Products> => {
        try{
          const queryResult = await this
          .connection(this.TABLE_NAME)
          .select('*')
          .where({id})
          return queryResult[0] 
    
        } catch (error: any){
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Erro do banco !")
            }
        } 
      }
}
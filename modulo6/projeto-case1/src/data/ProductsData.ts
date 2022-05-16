import { IProductsData } from "../model/interfaceProductsData"
import Products from "../model/Products"
import { BaseDatabase } from "./BaseDatabase"

export default class ProductsData extends BaseDatabase implements IProductsData {
   protected TABLE_NAME = "PRODUCTS"

    insertProducts = async (prod: Products): Promise<Products> => {
        try {            
            await this
                .connection(this.TABLE_NAME)
                .insert({
                    id: prod.id,
                    name: prod.name,
                    tags:prod.tags                                        
                })
                return prod
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Erro do banco !")
            }
        }
    }    
}
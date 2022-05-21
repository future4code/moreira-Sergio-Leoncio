import { Products } from "../../src/model/Products";
import { ProductMock } from "./ProductMock";

export class ProductDatabaseMock {  
   public async create (input: any):Promise<void> {}    

    
   public async search (id: string):Promise<any> {
        if(id === "teste.id"){
            return ProductMock;
        }else{
            throw new Error("Product not found")
        }           
    }
}


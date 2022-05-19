import { ProductDatabase } from "../data/ProductDatabase"
import { SignupInputDTO } from "../types/signupInputDTO"
//import json from '../../products.json'
import { readFile } from 'fs/promises'
import products from "../data/products.json"
import { Products } from "../model/Products"
import { SearchInputDTO } from "../types/SearchInputDto"



const productDatabase = new ProductDatabase

export class ProductBusiness{

    create = async (input:SignupInputDTO):Promise<void>=>{

        const {id, name, tags} = input
        
        const registeredProduct = await productDatabase.findById(id)
        if(registeredProduct){
            throw new Error("Produto já cadastrado")
        }

        for (let i=0; i<products.products.length; i++) {
            await productDatabase.create(products.products[i])
        }

    }

    search = async (input: SearchInputDTO):Promise<Products>=>{
        const prod: Products = await new ProductDatabase().search(input.id)

        if(!input){
            throw new Error("Params must be sent")
        }
        if(!prod){
            throw new Error('Product not found')
        } 

        //console.log(prod)
        return prod

    }
}


import { ProductDatabase } from "../data/ProductDatabase"
import { SignupInputDTO } from "../types/signupInputDTO"
//import json from '../../products.json'
import { readFile } from 'fs/promises'
import products from "../data/products.json"



const productDatabase = new ProductDatabase

export class ProductBusiness{

    create = async (input:SignupInputDTO):Promise<void>=>{

        const {id, name, tags} = input

        // if(!id || !name || !tags){
        //     throw new Error("Insira os dados id, name e tags")
        // }

        const registeredProduct = await productDatabase.findById(id)
        if(registeredProduct){
            throw new Error("Produto já cadastrado")
        }

        for (let i=0; i<products.products.length; i++) {
            await productDatabase.create(products.products[i])
        }

        //console.log(products.products.length)        

    }
}
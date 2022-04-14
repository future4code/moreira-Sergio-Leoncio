import { Request, Response } from "express";
import { connection } from "../data/connection";
import { products } from "../types";


export default async function createProducts(req: Request, res: Response): Promise<void> {
   try {

      const { name, price, imagem } = req.body
      
      if (!name || !price || !imagem) {
         res.statusCode = 422
         throw "'name', 'email' e 'password' são obrigatórios"
      }
      const newProdutos:any = {name: name, price: price, imagem: imagem}
        //await connection.raw(`INSERT INTO labecommerce_products         
       // VALUES ("${name}", "${price}","${image_url}");
//`)
      await connection("labecommerce_products")
         .insert(newProdutos)

         
      res.status(201).end("Produto criado!")

   } catch (error) {
      if(error instanceof Error){
          res.send({error, message:error.message})
      }else{
          res.send({message: "Unexpected error"})
      }
  }
}
import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Address, user, userAddress } from "../types";


export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, nickname, email, address } = req.body

      if (!name || !nickname || !email || !address) {
         res.statusCode = 422
         throw "'name', 'nickname', 'email' e 'address' são obrigatórios"
      }
      const idAddress: string = Date.now().toString()
      const Estado = address.estado
      const Cidade = address.cidade
      const Bairro = address.bairro
      const Logradouro = address.logradouro
      const Cep = address.cep
      const Complemnento = address.complemento
      const Numero = address.numero
      
      const id: string = Date.now().toString()

      const newUser: user = { id, name, nickname, email, address }
      const newAddress = {idAddress, name, nickname, email,Estado, Cidade, Bairro, Logradouro, Cep, Complemnento, Numero, id}

      await connection('aula_webservices_users').insert(newUser)
      await connection('aula_servico_backend').insert(newAddress)

      res.status(201).send("Usuário criado!")

   } catch (error: any) {

      if (typeof error === "string") {

         res.send(error)
      } else {
         
         console.log(error.sqlMessage || error.message);
         res.status(500).send("Ops! Um erro inesperado ocorreu =/")
      }
      
   }
}
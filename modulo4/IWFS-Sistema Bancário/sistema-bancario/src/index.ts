import express, { Request, Response } from "express";
import cors from "cors";
import { users, conta } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

const saldoBancario = (lista: conta[]): conta[] => {
    lista.forEach((cliente) => {
        const totalDebitos = cliente.debitos.reduce((a, b) => a + b, 0);
        cliente.saldoTotal -= totalDebitos;
        cliente.debitos = [];
      });
      const contasNegativas = lista.filter((conta) => conta.saldoTotal < 0);
      return contasNegativas;
}
//console.log(saldoBancario(users));

app.post("/users", (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        const {cliente, cpf, dataNasc, saldoTotal, debitos} = req.body

        if(!cliente || !cpf || !dataNasc || !saldoTotal || !debitos) {
            errorCode = 422
            throw new Error('Please check the fields!')
        }
        const [dia, mes, ano] = dataNasc.split('/')          
        if(ano <= 2004){
            errorCode = 401            
            throw new Error('Unauthorized account opening!')
        }
        const newUser = {
            cliente,
            cpf,
            dataNasc,
            saldoTotal,
            debitos
        }
        users.push(newUser)

        res.status(201).send({message:'Account created successfully!'})
    }catch (error:any){
        res.status(errorCode).send({message:error.message})
    }

})

app.get('/users', (req: Request, res: Response) =>{
    let errorCode:number = 400
    try {
        const newUsers = users
        const ListUsers = newUsers.map((item) => item )
        if(!newUsers) {
            errorCode = 404
            throw new Error('Not found!')
        }
        res.status(200).send({result: ListUsers})
    }catch (error:any){
        res.status(errorCode).send({message: error.message})
    }   

})


const port = 3333
const server = app.listen (port, () => {
    if (server) {
    
        console.log(`Server is running in http://localhost:${port}`);
      } else {
        console.error(`Failure upon starting server.`);
      }  
});


import express, { Request, Response } from "express";
import cors from "cors";
import { users } from "./data";
import { listenerCount } from "process";

const app = express()

app.use(express.json())
app.use(cors())

//ENDPOINTS
//Exercicio 1
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
//Exercicio 2 
app.get('/users/search', (req: Request, res: Response) =>{
    let errorCode:number = 400
    try {
    //    const Type = users
    //    const listType = Type.filter(item => item.type === 'ADMIN' )
        const type: string = req.query.type as string
        const user = users.filter((user) => user.type === type )

        if(!type) {
            errorCode = 404
            throw new Error('Not found!')
        }
        res.status(200).send({result: user})
    }catch (error:any){
        res.status(errorCode).send({message: error.message})
    }   

})
//Exercicio 3
app.get('/users/name', (req: Request, res: Response) =>{
    let errorCode:number = 400
    try {
    const name: string = req.query.name as string
        const user = users.filter((user) => user.name === name )

        if(!name) {
            errorCode = 404
            throw new Error('User not found!')
        }
        res.status(200).send({result: user})
    }catch (error:any){
        res.status(errorCode).send({message: error.message})
    }   

})

//Exercicio 4
app.post('/users', (req: Request, res: Response) =>{
    let errorCode:number = 400
    try {
        const {id, name, email, type, age} = req.body

        if(!id || !name || !email || !type || !age) {
            errorCode = 422
            throw new Error('Please check the fields!')
        }
        const newUser = {
            id,
            name,
            email,
            type,
            age
        }
        users.push(newUser)

        res.status(201).send({message:'User created successefully'})
    }catch (error:any){
        res.status(errorCode).send({message: error.message})
    }   

})









const port = 3333
const server = app.listen(port, () => {
    if (server) {    
        console.log(`Server is running in http://localhost:${port}`);
      } else {
        console.error(`Failure upon starting server.`);
      }
})
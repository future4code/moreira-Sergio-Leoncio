import express from 'express'; 
import cors from 'cors';
import { Request, Response } from 'express';
import { produtos } from './data'; //Exercicio 2 

const app = express();

app.use(express.json());
app.use(cors());

// ENDPOINTS
//Exercicio 1
app.get('/test',(req:Request, res:Response)=>{
    let newError:number=400
    try {
        const name = req.query.name
        const Marcas: string = req.body.Marcas
        if(!name){
            newError=422
            throw new Error('faltou inserir a query name')            
        } 
        if(!Marcas){
            newError=401
            throw new Error('faltou inserir a marca')
        }
        res.status(200).send(`Olá ${Marcas} é uma ${name} de carro!`)
    }catch (error:any) {
        res.status(newError).send(error.message)
    }
})
//Exercicio 4
app.get('/products', (req:Request, res:Response) => {
    const newProducts = produtos
    const newList = newProducts.map((item)=> {
        return item;
    });
    res.status(200).send({result : newList})
}); 



//Exercicio 3
app.post('/products', (req:Request, res:Response) => {
    
    const createProducts = {
        id: req.body.id,
        name: req.body.name,
        price: req.body.price
    }
    try{
        if(!req.body){
            throw new Error("Não tem body");

}if(typeof req.body.id !== "string"){
    throw new Error("id Invalido");
}if(typeof req.body.name !== "string"){
    throw new Error("name Invalido");
}if(typeof req.body.price !== "number"){
    throw new Error("price Invalido");
}else {
    const newList= [...produtos, createProducts]

    res.status(200).send({result : newList})
} 

    res.send(produtos)
    }catch (error:any) {
        switch(error.message){
            case 'header authorization not infor':
                res.status(401).send(error.message)
                break
            default:
                res.status(500).send('algo deu errado')
      }
    }
})

app.listen(3003, () => {
    console.log("Backend rodando na porta 3003!");
});
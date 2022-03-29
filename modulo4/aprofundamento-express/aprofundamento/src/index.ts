import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

// ENDPOINTS
//Exercicio 1
app.get("/ping", (req, res) => {          
    res.send("Pong! 🏓")
})
//Exercicio 2
type Too = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}
//Exrcicio 3
const usersToo : Too[] = [{
    userId: 1,
    id: 1,
    title: 'carros',
    completed: false
},
{
    userId: 1,
    id: 2,
    title: 'motos',
    completed: true 
}]
//Exercicio 4
app.get("/too", (req, res) => {
    const toos = usersToo 
    const listaToo = toos.map((item)=> {
        return item;

    });
   // return listaToo
    res.status(200).send({result : listaToo})
});
//Exercicio 5
app.post("/too", (req, res) => {
        const createToo = {
            userId: Date.now().toString(),
            id: Date.now().toString(),
            title: req.body.title,
            completed: req.body.completed   
}
if (!req.body ){
   throw new Error("Não tem body");

}if(typeof req.body.title !== "string"){
    throw new Error("Titulo Invalido");
}if(typeof req.body.completed !== "boolean"){
    throw new Error("Completd Invalido");
}else {
    const newToo= [...usersToo, createToo]

    res.status(200).send({result : newToo})
}
})
//Exercicio 6  




app.listen(3003, () => {
    console.log("Backend rodando na porta 3003!");
});
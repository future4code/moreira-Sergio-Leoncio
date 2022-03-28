import express from 'express';
import cors from 'cors';
import { user } from './data';
import { UsersType } from './types';

const app = express();

app.use(express.json());
app.use(cors());

//Exercicio1
app.get("/", (req, res) => {          
    res.send("Hello from Express")
})

//Exrcicio 2

const usersNew :UsersType[] = [{
    id: 1,
    name: 'Sergio',
    phone: 6199757723,
    email: 'sergio@gmail.com',
    website: 'https://www.sh.com.br'
},
{
    id: 2,
    name: 'Augusto',
    phone: 6199757724,
    email: 'augusto@gmail.com',
    website: 'https://www.augu.com.br'  
}]

//Exercicio3







app.listen(3003, () => {
    console.log('Backend rodando na porta 3003!');
})
import { Request, Response } from "express";
import app from "./app";


// LETRA A - Para que serve o construtor dentro de uma 
//               classe e como fazemos para chamá-lo?
//  PARA RECEBER OS ATRIBUTOS DA CLASS 
// constructor(){}

//LETRA B 

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
    
    public getCpf(): string {
        return this.cpf
    }
  
  }

  

  class Transaction {
    private date: string;
    private value: number;
    private description: string;
    
    constructor(date: string, value: number, description: string) {
      this.date = date;
      this.value = value;
      this.description = description
    }
  }

  class Bank {
    private accounts: UserAccount[];
  
    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    }
  
  }

 



// app.post("/inserirNoBanco",(req:Request , res:Response)=>{
//     try {
//        const {nome,idade,cpf} = req.body
 
//        const usuario = new Usuario(nome,idade,cpf)
      
 
//     } catch (error:any) {
//        res.status(500).send({message:error.message})
//     }
//  })











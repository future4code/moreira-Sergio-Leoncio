import app from "./app";
import { Request, Response } from "express";
import connection from "./connection";

app.post("/TodoListUser", async (req: Request, res: Response) =>{
    try{
        await connection.raw(`
        INSERT INTO TodoListUser(name, nickname, email)
        VALUE(
        "${req.body.name}",
        "${req.body.nickname}",
        "${req.body.email}"
         );
        
        `)

            res.status(201).send("Sucess")
    }
    catch(error: any){
        console.log(error.message);
        res.status(500).send("An Expected Error has occurred")
    }
})

app.get("/TodoListUser/:id", async (req, res) => {
      try {
        const result = await connection.raw(
          `SELECT * FROM TodoListUser WHERE id =${req.params.id}`
        );
        console.table(result[0]);
        res.send(result[0]);
      } catch (error: any) {
        console.log(error.message);
        res.status(500).send("An unexpected error occurred");
      }
    });    
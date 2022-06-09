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
    
app.put("/TodoListUser/edit/:id", async (req: Request, res: Response) => {
    let newError: number=400  
  try{
      await connection("TodoListUser").update({
          name: req.body.name,
          nickname: req.body.nickname,
          email: req.body.email  
      }).where({id: req.params.id})
      const newList = {
        name: req.body.name,
        nickname: req.body.nickname,
        email: req.body.email
    }
      if(!newList.name||!newList.nickname||!newList.email){
        newError=422
        throw new Error("Todos os campos são necessários, preencha!");
      }  
      res.send("Sucess")

    }
    catch(error: any){
      console.log(error.message);
      res.status(newError).send(error.message);
    }
});

app.post("/TodoListTask/task", async (req: Request, res: Response) =>{
  let newError: number=400 
  try{
      await connection.raw(`
      INSERT INTO TodoListUser(id, title, description, limit_date, creator_user_Id)
      VALUE(
      "${req.body.id}",  
      "${req.body.title}",
      "${req.body.description}",
      "${req.body.limit_date}",
      "${req.body.creator_user_id}"     
       );      
      `)
      const newTask = {
        id: req.body.id,
        title: req.body.title,
        description: req.body.description,
        limit_date: req.body.limit_date,
        creator_user_id: req.body.creator_user_id
    };
    if(!newTask.id||!newTask.title||!newTask.description||!newTask.limit_date||!newTask.creator_user_id){
      newError=422 
      throw new Error("Todos os campos são necessários, preencha!");         

    };
        res.status(201).send("Sucess")
  }
  catch(error: any){
      console.log(error.message);
      res.status(newError).send(error.message)
  };
});

app.get("/TodoListTask/task/:id", async (req, res) => {
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




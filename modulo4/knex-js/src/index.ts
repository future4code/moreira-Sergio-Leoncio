import app from "./app";
import { Request, Response } from "express";
import connection from "./connection";

// Esse arquivo seria o index.ts
const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `);

  return result[0][0];
};

// Assim a chamada funciona fora dos endpoints com .then()/.catch
getActorById("001")
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

// Assim a chamada funciona fora dos endpoints com await
(async () => {
  console.log(await getActorById("001"));
})();

//Ou então podemos chamá-la dentro de um endpoint
// app.get("/Actor/:id", async (req: Request, res: Response) => {
//   try {
//     const id = req.params.id

//     console.log(await getActorById(id))

//     res.end()
//   } catch (error: any) {
// 		console.log(error.message)
//     res.status(500).send("Unexpected error")
//   }
// }) // bata no http://localhost:3003/users/001 e veja o que acontece no terminal

// app.get("/Actor/:id", async (req, res) => {
//   try {
//     const result = await connection.raw(
//       `SELECT * FROM Actor WHERE id =${req.params.id}`
//     );
//     console.table(result[0]);
//     res.send(result[0]);
//   } catch (error: any) {
//     console.log(error.message);
//     res.status(500).send("An unexpected error occurred");
//   }
// });

app.get("/Actor", async (req, res) => {
    try {
        const searchActor = async (name: string): Promise<any> => {
            const result = await connection.raw(`
              SELECT * FROM Actor WHERE name = "${name}"
            `)
            return result
          }
    } catch (error: any) {
      console.log(error.message);
      res.status(500).send("An unexpected error occurred");
    }
  });  

app.put("/Actor/:id", async (req, res) => {
  try {
    await connection("Actor")
      .update({
        name: req.body.name,
        salary: req.body.salary,
        birth_date: req.body.birth_date,
        gender: req.body.gender,
      })
      .where({ id: req.params.id });
    res.send("Sucess");
  } catch (error: any) {
    console.log(error.message);
    res.status(500).send("An Expected Error has occurred");
  }
});

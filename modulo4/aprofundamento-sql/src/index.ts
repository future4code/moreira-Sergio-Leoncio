import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());



const port = 3333
const server = app.listen (port, () => {
  if (server) {    
    console.log(`Server is running in http://localhost:${port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

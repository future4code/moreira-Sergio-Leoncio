import app from "./app"
import { createCep } from "./endpoints/createCep"
import createUser from './endpoints/createUser'



app.post('/users/signup', createUser)
app.post('/users', createCep)
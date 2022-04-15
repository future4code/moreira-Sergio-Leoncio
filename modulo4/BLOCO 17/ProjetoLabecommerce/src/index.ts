import app from "./app"
import createProducts from "./endpoints/createProducts"
import createUser from './endpoints/createUsers'
import deleteUsers from "./endpoints/deleteUsers"
import getAllProducts from "./endpoints/getAllProducts"
import getAllUsers from "./endpoints/getAllUsers"

app.get('/users', getAllUsers)
app.post('/users', createUser)
app.delete('/users/:id', deleteUsers)
app.post('/products', createProducts)
app.get('/products', getAllProducts)
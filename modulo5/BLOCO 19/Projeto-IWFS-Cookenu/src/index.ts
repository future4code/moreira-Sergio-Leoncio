import app from "./app"
import { CreateRecipe } from "./endpoints/CreateRecipe"
import { getProfile } from "./endpoints/getProfile"
import { getRecipe } from "./endpoints/getRecipe"
import { getUser } from "./endpoints/getUser"
import { Login } from "./endpoints/login"
import { Signup } from "./endpoints/Signup"

app.post('/signup', Signup)
app.post('/login', Login)
app.get('/user/profile', getProfile)
app.get('/user/:id', getUser)

app.post('/recipe', CreateRecipe)
app.get('/recipe/:id', getRecipe)


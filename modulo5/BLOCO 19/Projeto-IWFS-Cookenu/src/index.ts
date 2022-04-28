import app from "./app"
import { getProfile } from "./endpoints/getProfile"
import { getUser } from "./endpoints/getUser"
import { Login } from "./endpoints/login"
import { Signup } from "./endpoints/Signup"

app.post('/signup', Signup)
app.post('/login', Login)
app.get('/user/profile', getProfile)
app.get('/user/:id', getUser)
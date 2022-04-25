import { app } from "./app";
import { getAllNames } from "./endpoints/getALLNames";
import { getAllRecipes } from "./endpoints/getAllRecipes";
import { getAllUsers } from "./endpoints/getAllUsers";


app.get("/recipes", getAllRecipes)
app.get("/user", getAllUsers)
app.get("/users", getAllNames )


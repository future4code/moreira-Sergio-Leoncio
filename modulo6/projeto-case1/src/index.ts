import ProductsBusiness from "./business/ProductsBusiness";
import { app } from "./controller/app";
import ProductsController from "./controller/ProductsController";
import ProductsData from "./data/ProductsData";

const productsBusiness = new ProductsBusiness(
    new ProductsData()
)

const productsController = new ProductsController(
    productsBusiness
)

app.post("/products/signup", productsController.signup)
//app.get("/products/search/:id", productsController.search)
//app.post("/products/tags/signup", productsController.signupTags)



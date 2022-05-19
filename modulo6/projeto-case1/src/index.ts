import {app} from "./controller/app"
import { ProductContoller } from "./controller/ProductController"


const productController = new ProductContoller

app.post("/products", productController.create)
app.get("/products/search/:id", productController.search)


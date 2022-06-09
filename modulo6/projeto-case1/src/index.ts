import { ProductBusiness } from "./business/ProductBusiness";
import { app } from "./controller/app";
import { ProductContoller } from "./controller/ProductController";
import { ProductDatabase } from "./data/ProductDatabase";

const productBusiness = new ProductBusiness(
    new ProductDatabase()
)

const productController = new ProductContoller(
    productBusiness
);

app.post("/products", productController.create);
app.get("/products/search/:id", productController.search);

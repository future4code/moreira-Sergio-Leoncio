import DogheroBusiness from "./business/DogheroBusiness";
import app from "./controller/App";
import DogheroController from "./controller/DogheroController";
import { DogheroData } from "./data/DogheroData";

const dogheroBusiness = new DogheroBusiness(new DogheroData)
const dogheroController = new DogheroController(dogheroBusiness)


app.post("/signup", dogheroController.signup)
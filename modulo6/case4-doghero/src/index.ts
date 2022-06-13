import DogheroBusiness from "./business/DogheroBusiness";
import app from "./controller/App";
import DogheroController from "./controller/DogheroController";
import { DogheroData } from "./data/DogheroData";
import { PetsData } from "./data/PetsData";

const dogheroBusiness = new DogheroBusiness(new DogheroData, new PetsData)
const dogheroController = new DogheroController(dogheroBusiness)



app.post("/dogwalk/create", dogheroController.create)
app.get("/dogwalk/index", dogheroController.index)
app.put("/dogwalk/start", dogheroController.start)

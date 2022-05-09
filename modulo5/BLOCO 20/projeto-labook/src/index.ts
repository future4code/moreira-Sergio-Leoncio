import UserBusiness from "./business/UserBusiness";
import { app } from "./controller/app";
import PostController from "./controller/PostController";
import UserController from "./controller/UserController";
import UserData from "./data/UserData";
import PostData from "./data/PostData";
import PostBusiness from "./business/PostBusiness";

const userBusiness = new UserBusiness(
    new UserData(),
)

const postBusiness = new PostBusiness(
    new PostData()
)

const userController = new UserController(
    userBusiness
);

const postController = new PostController(
    postBusiness
);

app.post("/user/signup", userController.signup)
app.post("/login", userController.login)
app.post("/Post", postController.createPost)

app.get("Post/:id", postController.getPost)
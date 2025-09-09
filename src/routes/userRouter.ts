import Router from 'express'
import UserController from "../controllers/userController";
// import {} from "../middleware/";

const userRouter = Router();
const userController = new UserController();

userRouter
    .post("/usuario/criar", userController.createUser.bind(userController))
    .get("/usuario/listar/todos",userController.getAllUsers.bind(userController))
    .get("/usuario/listar/:id",userController.getUserById.bind(userController))
    .put("/usuario/editar/:id",userController.updateUser.bind(userController))
    .delete("/usuario/inativar/id",userController.inactiveUser.bind(userController))

export { userRouter };
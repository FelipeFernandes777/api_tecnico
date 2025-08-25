import Router from 'express'
import UserController from "../controllers/userController";

const userRouter = Router();
const userController = new UserController();

userRouter
    .get("/usuario/listar/todos", userController.getAllUsers.bind(this))
    .get("/usuario/listar/:id", userController.getUserById.bind(this))
    .post("/usuario/criar", userController.createUser.bind(this))
    .put("/usuario/editar/:id", userController.updateUser.bind(this))
    .delete("/usuario/inativar/id",userController.inactiveUser.bind(this))

export { userRouter };
import Router from 'express'
import UserController from "../controllers/userController";
import {ensureAuthenticated} from "../middleware/ensureAuthenticated";

const userRouter = Router();
const userController = new UserController();

userRouter
    .post("/usuario/criar",userController.createUser.bind(userController))
    .get("/usuario/listar/todos",ensureAuthenticated,userController.getAllUsers.bind(userController))
    .get("/usuario/listar/:id",ensureAuthenticated,userController.getUserById.bind(userController))
    .put("/usuario/editar/:id",ensureAuthenticated,userController.updateUser.bind(userController))
    .delete("/usuario/inativar/id",ensureAuthenticated,userController.inactiveUser.bind(userController))

export { userRouter };
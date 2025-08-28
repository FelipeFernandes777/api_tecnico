import Router from 'express'
import SingUpController from "../controllers/singUpController";

const authRouter = Router();

const controller = new SingUpController();

authRouter.post('/login', controller.singUp.bind(controller))

export { authRouter }
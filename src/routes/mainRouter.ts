import { Router } from "express";
import enterpriseRouter from "./enterpriseRouter";
import {leadRouter} from "./leadRouter";
import {userRouter} from "./userRouter";
import {authRouter} from "./authRouter";
import {ensureAuthenticated} from "../middleware/ensureAuthenticated";

const mainRouter = Router();

mainRouter.use(authRouter);
mainRouter.use(userRouter);
mainRouter.use(ensureAuthenticated,enterpriseRouter);
mainRouter.use(ensureAuthenticated,leadRouter);

export { mainRouter };
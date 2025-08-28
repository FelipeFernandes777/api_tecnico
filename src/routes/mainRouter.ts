import { Router } from "express";
import enterpriseRouter from "./enterpriseRouter";
import {leadRouter} from "./leadRouter";
import {userRouter} from "./userRouter";
import {ensureAuthenticated} from "../middleware/ensureAuthenticated";
import {authRouter} from "./authRouter";

const mainRouter = Router();

mainRouter.use(userRouter);
mainRouter.use(authRouter);
mainRouter.use(ensureAuthenticated,enterpriseRouter);
mainRouter.use(ensureAuthenticated,leadRouter);

export { mainRouter };
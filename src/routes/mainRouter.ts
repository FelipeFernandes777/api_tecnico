import { Router } from "express";
import enterpriseRouter from "./enterpriseRouter";
import {leadRouter} from "./leadRouter";
import {userRouter} from "./userRouter";
import {authRouter} from "./authRouter";

const mainRouter = Router();

mainRouter.use(authRouter);
mainRouter.use(userRouter);
mainRouter.use(enterpriseRouter);
mainRouter.use(leadRouter);

export { mainRouter };
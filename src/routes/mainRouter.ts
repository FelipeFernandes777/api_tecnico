import { Router } from "express";
import enterpriseRouter from "./enterpriseRouter";
import {leadRouter} from "./leadRouter";
import {userRouter} from "./userRouter";

const mainRouter = Router();

mainRouter.use(enterpriseRouter);
mainRouter.use(leadRouter);
mainRouter.use(userRouter);

export { mainRouter };
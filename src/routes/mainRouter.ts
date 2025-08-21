import { Router } from "express";
import enterpriseRouter from "./enterpriseRouter";
import {leadRouter} from "./leadRouter";

const mainRouter = Router();

mainRouter.use(enterpriseRouter)
mainRouter.use(leadRouter);

export { mainRouter };
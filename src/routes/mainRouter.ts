import { Router } from "express";
import enterpriseRouter from "./enterpriseRouter";

const mainRouter = Router();

mainRouter.use(enterpriseRouter)

export { mainRouter };
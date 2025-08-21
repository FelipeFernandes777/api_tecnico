import Router from "express";
import LeadController from "../controllers/leadController";

export const leadRouter = Router();
const leadController  = new LeadController();

leadRouter
    .get("/leads/todos", leadController.listAllLeads.bind(leadController))
    .get("/leads/:id", leadController.listLeadById.bind(leadController))
    .post("/leads/criar", leadController.createLead.bind(leadController));

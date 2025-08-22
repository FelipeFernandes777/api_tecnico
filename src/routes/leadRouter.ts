import Router from "express";
import LeadController from "../controllers/leadController";

export const leadRouter = Router();
const leadController  = new LeadController();

/**
 * @swagger
 * tags:
 *   name: Leads
 *   description: Rotas relacionadas aos leads
 */

/**
 * @swagger
 * /leads/todos:
 *   get:
 *     summary: Lista todos os Leads
 *     tags: [Leads]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               offset:
 *                 type: integer
 *                 example: 0
 *               limit:
 *                 type: integer
 *                 example: 10
 *     responses:
 *       200:
 *         description: Lista de leads
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 statusCode:
 *                   type: integer
 *                 lead:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Lead'
 *       400:
 *         description: Erro ao listar leads
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */

/**
 * @swagger
 * /leads/{id}:
 *   get:
 *     summary: Busca um Lead por ID
 *     tags: [Leads]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do Lead
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lead encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 statusCode:
 *                   type: integer
 *                 lead:
 *                   $ref: '#/components/schemas/Lead'
 *       400:
 *         description: Erro ao buscar lead
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */

/**
 * @swagger
 * /leads/criar:
 *   post:
 *     summary: Cria um novo Lead
 *     tags: [Leads]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - areaOfInterest
 *               - phone
 *               - enterpriseId
 *             properties:
 *               name:
 *                 type: string
 *               areaOfInterest:
 *                 type: string
 *               phone:
 *                 type: string
 *               enterpriseId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Lead criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 statusCode:
 *                   type: integer
 *                 lead:
 *                   $ref: '#/components/schemas/Lead'
 *       400:
 *         description: Erro ao criar lead
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */

leadRouter
    .get("/leads/todos", leadController.listAllLeads.bind(leadController))
    .get("/leads/:id", leadController.listLeadById.bind(leadController))
    .post("/leads/criar", leadController.createLead.bind(leadController));

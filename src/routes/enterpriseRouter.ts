import {Router,Request, Response } from "express";
import EnterpriseController from "../controllers/enterpriseController";

const enterpriseRouter = Router();
const enterpriseController = new EnterpriseController();

/**
 * @swagger
 * tags:
 *   name: Empresas
 *   description: Rotas relacionadas às empresas
 */

/**
 * @swagger
 * /empresas/todas:
 *   get:
 *     summary: Lista todas as empresas
 *     tags: [Empresas]
 *     responses:
 *       200:
 *         description: Lista de todas as empresas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 */

/**
 * @swagger
 * /empresas/todasAtivas:
 *   get:
 *     summary: Lista empresas ativas
 *     tags: [Empresas]
 *     responses:
 *       200:
 *         description: Lista de empresas ativas
 */

/**
 * @swagger
 * /empresas/{id}:
 *   get:
 *     summary: Busca empresa pelo ID
 *     tags: [Empresas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da empresa
 *     responses:
 *       200:
 *         description: Detalhes da empresa
 */

/**
 * @swagger
 * /empresas/nova:
 *   post:
 *     summary: Cria uma nova empresa
 *     tags: [Empresas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Empresa X
 *               active:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       201:
 *         description: Empresa criada com sucesso
 */

/**
 * @swagger
 * /empresas/editar/{id}:
 *   put:
 *     summary: Edita  uma nova empresa
 *     tags: [Empresas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Empresa X
 *               active:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       200:
 *         description: Empresa atualizada com sucesso
 */

/**
 * @swagger
 * /empresas/deletar/{id}:
 *   post:
 *     summary: Deleta uma nova empresa
 *     tags: [Empresas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da empresa
 *     responses:
 *       201:
 *         description: Empresa criada com sucesso
 */

enterpriseRouter
    .get("/empresas/todas", enterpriseController.list.bind(enterpriseController))
    .get("/empresas/todasAtivas", enterpriseController.listWhenActiveIsTrue.bind(enterpriseController))
    .get("/empresas/:id", enterpriseController.listForId.bind(enterpriseController))
    .post("/empresas/nova", enterpriseController.createEnterprise.bind(enterpriseController))
    .put("/empresas/editar/:id", enterpriseController.updateEnterprise.bind(enterpriseController))
    .delete("/empresas/inativar/:id", enterpriseController.deleteEnterprise.bind(enterpriseController))


export default enterpriseRouter;


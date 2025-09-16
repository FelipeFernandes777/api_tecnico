import Router from 'express'
import SingUpController from "../controllers/singUpController";

const authRouter = Router();

const controller = new SingUpController();

/**
 * @swagger
 * tags:
 *   - name: Login
 *     description: Rota para login dos usuários
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Faz o login e retorna o token
 *     tags:
 *       - Login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@email.com
 *               password:
 *                 type: string
 *                 example: 123456
 *     responses:
 *       200:
 *         description: Login efetuado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 statusCode:
 *                   type: integer
 *                   example: 200
 *                 authToken:
 *                   type: object
 *                   properties:
 *                     token:
 *                       type: string
 *                       example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *       400:
 *         description: Email ou senha ausentes
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: alert
 *                 statusCode:
 *                   type: integer
 *                   example: 400
 *                 message:
 *                   type: string
 *                   example: Email or password is missing
 *       500:
 *         description: Erro interno de autenticação
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: error
 *                 statusCode:
 *                   type: integer
 *                   example: 500
 *                 message:
 *                   type: string
 *                   example: Unexpected error during authentication
 */

authRouter.post('/login', controller.singUp.bind(controller))

export { authRouter }
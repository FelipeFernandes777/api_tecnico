import dotenv from 'dotenv';
import swaggerJsDoc from 'swagger-jsdoc';

dotenv.config();
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: "API Tecnico",
            version: '1.0.0',
            description: "Api geral para todas as empresas do tecnico"
        },
        servers: [
            {
                url: `http://10.0.2.153:3000`,
            }
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    schema: 'bearer',
                    bearerFormat: 'JWT'
                }
            }
        }
    },
    apis: ['src/routes/*.ts']
}

export const swaggerDocs = swaggerJsDoc(swaggerOptions)
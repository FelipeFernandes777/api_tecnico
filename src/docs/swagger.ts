import dotenv from 'dotenv';
import swaggerJsDoc from 'swagger-jsdoc';

dotenv.config();

const swaggerOptions = {
    definition: {   // 🔥 CORREÇÃO AQUI
        openapi: '3.0.0',
        info: {
            title: 'API Técnico',
            version: '1.0.0',
            description: 'API geral para todas as empresas do técnico'
        },
        servers: [
            {
                url: `https://api.polofaculdades.com.br:5000`,
                description: 'Servidor de Desenvolvimento'
            }
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT'
                }
            },
            schemas: {
                Lead: {
                    type: 'object',
                    properties: {
                        id: { type: 'integer', example: 1 },
                        name: { type: 'string', example: 'João da Silva' },
                        phone: { type: 'string', example: '+55 11 99999-9999' },
                        areaOfInterest: { type: 'string', example: 'Tecnologia' },
                        enterpriseId: { type: 'integer', example: 10 }
                    }
                },
                ErrorResponse: {
                    type: 'object',
                    properties: {
                        status: { type: 'string', example: 'error' },
                        statusCode: { type: 'integer', example: 400 },
                        message: { type: 'string', example: 'Erro ao processar requisição' }
                    }
                }
            }
        }
    },
    apis: ['src/routes/**/*.ts'] // garante que esse path existe
};

export const swaggerDocs = swaggerJsDoc(swaggerOptions);

import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUI from 'swagger-ui-express'

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API for tica store',
      version: '1.0.0',
      description: 'Full documentation and schemas'
    },
    servers: [
      {
        url: 'http://localhost:3000'
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT', // (opcional, especifica o formato do token)
        },
      },
    },
  },
  apis: ['**/*.ts', './schemas.ts'],
}

const specs = swaggerJsdoc(options)

export default {
  swaggerUI,
  specs,
}
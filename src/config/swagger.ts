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
    },
    apis: ['**/*.ts', './src/config/parameters.yaml']
}

const specs = swaggerJsdoc(options)

export default {
    swaggerUI,
    specs,
}
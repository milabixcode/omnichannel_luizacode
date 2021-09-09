module.exports = {
    swagger: '2.0',
    info: {
      description: 'Documentação de API',
      version: '1.0.0',
      title: 'OmniChannelLuizaCode',
      contact: { email: ''}
    },
    host: 'http://localhost:3333',
    schema: ['http'],
    paths: {
      '/client': {
        post: {
          tags: [
            'Clients',
          ],
          parameters: [
            {
              in: 'body',
              name: 'body',
              description: 'Você deve passar o email e password no body',
              required: true,
              schema: { $ref: '#/definitions/CreateClientBody' },
            },
          ],
          summary: 'Cadastra um cliente',
          description: '',
          operationId: 'add',
          consumes: [
            'application/json',
          ],
          produces: [
            'application/json',
          ],
          responses: {
            200: {
              description: 'successful operation',
              schema: {
                type: 'array',
                items: { $ref: '#/definitions/CreateClient' },
              },
            },
            409: { description: 'Cliente já cadastrado' },
          },
        },
        put:{
          tags: [
            'Clients',
          ],
        }
      },
      '/product': {
        get:{
          tags: [
            'Products',
          ],
          consumes: [
            'application/json',
          ],
          produces: [
            'application/json',
          ],
        },
        post:{
            tags: [
            'Products',
          ],
          consumes: [
            'application/json',
          ],
          produces: [
            'application/json',
          ],
        },
        put:{
            tags: [
            'Products',
          ],
          consumes: [
            'application/json',
          ],
          produces: [
            'application/json',
          ],
        },
        delete:{
            tags: [
            'Products',
          ],
          consumes: [
            'application/json',
          ],
          produces: [
            'application/json',
          ],
        },
      },

      '/store':{
        get:{
          tags: [
            'Stores',
          ],
          consumes: [
            'application/json',
          ],
          produces: [
            'application/json',
          ],

        },
        post:{
          tags: [
            'Stores',
          ],
          consumes: [
            'application/json',
          ],
          produces: [
            'application/json',
          ],

        },
        put:{
          tags: [
            'Stores',
          ],
          consumes: [
            'application/json',
          ],
          produces: [
            'application/json',
          ],

        },
        delete:{
          tags: [
            'Stores',
          ],
          consumes: [
            'application/json',
          ],
          produces: [
            'application/json',
          ],

        },

      },
      
    
      
    externalDocs: {
      description: 'Acesse o repositorio',
      url: 'http://github.com',
    },
  }
}








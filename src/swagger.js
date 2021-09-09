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
      '/clients': {
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
      },
      '/session': {
        post: {
          tags: [
            'Login',
          ],
          parameters: [
            {
              in: 'body',
              name: 'body',
              description: 'Você deve passar o email e password no body',
              required: true,
              schema: { $ref: '#/definitions/LoginBody' },
            },
          ],
          summary: 'Realiza o login da aplicação',
          description: '',
          operationId: 'login',
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
                items: { $ref: '#/definitions/Login' },
              },
            },
            401: { description: 'Usuário não autorizado' },
          },
        },
      },
    },
    securityDefinitions: {
      api_key: {
        type: 'apiKey',
        name: 'api_key',
        in: 'header',
      },
    },
    definitions: {
      Clients: {
        type: 'object',
        required: [
          'name',
          'email',
          'password',

          'firstName',
          'lastName',
          'cpf',
          'cnpj',
          'birthDate',
          'email',
          'password',
          'phone',
        ],
        properties: {
          id: {
            type: 'integer',
            format: 'integer',
          },
          name: { type: 'string' },
          email: { type: 'string' },
          password: { type: 'string' },
        },
        xml: { name: 'Usuario' },
      },
      Login: {
        type: 'object',
        required: [
          'email',
          'password',
        ],
        properties: {
          user: {
            type: 'object',
            id: {
              type: 'integr',
              format: 'uuid',
            },
            name: { type: 'string' },
            email: { type: 'string' },
            password: { type: 'string' },
          },
          token: { type: 'bearear' },
        },
        xml: { name: 'Usuario' },
      },
      LoginBody: {
        type: 'object',
        required: [
          'email',
          'password',
        ],
        properties: {
          email: { type: 'string' },
          password: { type: 'string' },
        },
        xml: { name: 'Usuario' },
      },
      CreateUser: {
        type: 'object',
        required: [
          'email',
          'password',
        ],
        properties: {
          id: {
            type: 'integr',
            format: 'uuid',
          },
          name: { type: 'string' },
          email: { type: 'string' },
          password: { type: 'string' },
        },
        xml: { name: 'Usuario' },
      },
      CreateUserBody: {
        type: 'object',
        required: [
          'email',
          'password',
        ],
        properties: {
          name: { type: 'string' },
          email: { type: 'string' },
          password: { type: 'string' },
        },
        xml: { name: 'Usuario' },
      },
    },
    externalDocs: {
      description: 'Acesse o repositorio',
      url: 'http://github.com',
    },
  }









//module.exports = {
    openapi: '4.1.6',
    info: {
        title: 'API de OmniChannel',
        description: 'Essa API tem como objetivo desenvolver um serviço HTTP resolvendo a funcionalidade de Omni Channel do cliente',
        termsOfService: 'http://localhost:3333/terms',
        contact: {
            email: ''
        },
        version: '1,0,0'
    },
    servers: [
        {
            url: 'http://localhost:3333/v1',
            description: "API de test"
        }
    ],
  
}
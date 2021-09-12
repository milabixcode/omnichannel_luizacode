module.exports = {
  swagger: '2.0',
  info: {
    description: 'Documentação de API',
    version: '1.0.0',
    title: 'OmniChannelLuizaCode',
  },
  "Access-Control-Allow-Origin": "*",
  host: 'localhost:3000',
  schema: ['http'],
  paths: {
    '/client': {
      post: {
        tags: [
          'Client',
        ],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'Você deve passar o email e password no body',
            required: true,
            schema: { $ref: '#/definitions/PostClientBody'},
          },
        ],
        summary: 'Cadastra o cliente',
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
          400: { description: 'Sintaxe inválida.' },
        },
      },
      put: {
        tags: [
          'Client',
        ],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'Você deve passar o email e password no body',
            required: true,
            schema: { $ref: '#/definitions/PutClientBody'},
          },
        ],
        summary: 'Atualizando o cliente',
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
              items: { $ref: '#/definitions/PutClient' },
            },
          },
          400: { description: 'Sintaxe inválida.' },
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
    Client: {
      type: 'object',
      required: [
        'name',
        'email',
        'password',
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
      xml: { name: 'Client' },
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
      xml: { name: 'Client' },
    },
    CreateClient: {
      type: 'object',
      required: [
        'adressId',
        'firstName',
        'lastName',
        'email',
        'password',
        'option'
      ],
      properties: {
        id: {
          type: 'integer',
          format: 'uuid',
        },
        adressId: { type: 'number' },
        firstName: { type: 'string' },
        lastName: { type: 'string' },
        cpf: { type: 'string' },
        cnpj: { type: 'string' },
        birthDate: { type: 'date' },
        email: { type: 'string' },
        password: { type: 'string' },
        phone: { type: 'string' },
        option: { type: 'string' }
      },
      xml: { name: 'Client' },
    },
    PostClientBody: {
      type: 'object',
      required: [
        'adressId',
        'firstName',
        'lastName',
        'email',
        'password',
        'option'
      ],
      properties: {
        adressId: { type: 'number' },
        firstName: { type: 'string' },
        lastName: { type: 'string' },
        cpf: { type: 'string' },
        cnpj: { type: 'string' },
        birthDate: { type: 'date' },
        email: { type: 'string' },
        password: { type: 'string' },
        phone: { type: 'string' },
        option: { type: 'string' }
      },
      xml: { name: 'Client' },
    },
    PutClientBody: {
      type: 'object',
      required: [
        'clientId',
        'adressId',
        'firstName',
        'lastName',
        'email',
        'password',
        'option'
      ],
      properties: {
        clientId: { type: 'number' },
        adressId: { type: 'number' },
        firstName: { type: 'string' },
        lastName: { type: 'string' },
        cpf: { type: 'string' },
        cnpj: { type: 'string' },
        birthDate: { type: 'date' },
        email: { type: 'string' },
        password: { type: 'string' },
        phone: { type: 'string' },
        option: { type: 'string' }
      },
      xml: { name: 'Client' },
    },
      PutClient: {
      type: 'object',
      required: [
        'clientId',
        'adressId',
        'firstName',
        'lastName',
        'email',
        'password',
        'option'
      ],
      properties: {
        id: {
          type: 'integer',
          format: 'uuid',
        },
        clientId: { type: 'number' },
        adressId: { type: 'number' },
        firstName: { type: 'string' },
        lastName: { type: 'string' },
        cpf: { type: 'string' },
        cnpj: { type: 'string' },
        birthDate: { type: 'date' },
        email: { type: 'string' },
        password: { type: 'string' },
        phone: { type: 'string' },
        option: { type: 'string' }
      },
      xml: { name: 'Client' },
    },
  },
  externalDocs: {
    description: 'Acesse o repositorio',
    url: 'http://github.com',
  },
}
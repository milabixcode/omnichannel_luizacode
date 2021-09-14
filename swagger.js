module.exports = {
  "swagger": "2.0",
  "info": {
    "version": "1.0.0",
    "title": "OmniChannelLuizaCode",
    "description": "Documentação da API"
  },
  "host": "localhost:3333",
  "basePath": "/",
  "tags": [],
  "schemes": [
    "http"
  ],
  "consumes": [],
  "produces": [],
  "paths": {
    "/product": {
        "post": {
        "tags": ['product'],
        "description": "",
        "parameters": [{
            in: 'body',
            name: 'body',
            description: 'Campos obrigatórios -> <br> Opcionais ->',
            required: true,
            schema: { $ref: '#/definitions/CreateProductBody' },
          },],
        "summary": "Cadastra produto",
        "responses": {
          "201": {
            "description": "Produto Cadastrado"
          },
          "401": {
            "description": "Erro ao cadastrar o produto"
          }
        }
      },
      "put": {
        "tags": ['product'],
        "description": "",
        "parameters": [{
            in: 'body',
            name: 'body',
            description: '',
            required: true,
            schema: { $ref: '#/definitions/PutProductBody' },
          },],
        "summary": "Atualiza o produto já cadastrado",
        "responses": {
          "200": {
            "description": "Produto atualizado"
          },
          "401": {
            "description": "Erro ao atualizar o produto"
          }
        }
      },
      "get": {
        "tags": ['product', 'obrigatorio'],
        "description": "",
        "parameters": [],
        "summary": "Retorna todos os produtos cadastrados",
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      },
      "delete": {
        "tags": ['product'],
        "description": "",
        "parameters": [{
            in: 'body',
            name: 'body',
            description: 'Você deve passar o email e password no body',
            required: true,
            schema: { $ref: '#/definitions/DeleteProductBody' },
          },],
        "summary": "Deleta um produto já cadastrado",
        "responses": {
          "200": {
            "description": "Produto deletado"
          },
          "404": {
            "description": "Erro ao deletar o produto"
          }
        }
      }
    },
    "/product/{productId}": {
      "get": {
        "tags": ['product'],
        "description": "",
        "parameters": [
          {
            "name": "productId",
            "in": "path",
            "required": true,
            "type": "string"
          },
        ],
        "summary": "Retorna o produto de acordo com o productId passado nos parâmetros",
        "responses": {
          "200": {
            "description": "Produto retornado"
          },
          "404": {
            "description": "Erro ao retornar o produto"
          }
        }
      }
    },
    "/store": {
        "post": {
        "tags": ['store'],
        "description": "Cadastra uma loja",
        "parameters": [{
            in: 'body',
            name: 'body',
            description: 'Você deve passar o email e password no body',
            required: true,
            schema: { $ref: '#/definitions/PostStoreBody' },
          },],
        "summary": "Cadastra uma loja",
        "responses": {
          "201": {
            "description": "Loja cadastrada"
          },
          "401": {
            "description": "Não foi possível cadastrar a loja"
          }
        }
      },
      "put": {
        "tags": ['store'],
        "description": "Atualiza a loja",
        "parameters": [{
            in: 'body',
            name: 'body',
            description: 'Você deve passar o email e password no body',
            required: true,
            schema: { $ref: '#/definitions/PutStoreBody' },
          },],
        "summary": "Atualiza a loja",
        "responses": {
          "200": {
            "description": "Loja atualizada"
          },
          "401": {
            "description": "Não foi possível atualizar a loja"
          }
        }
      },
      "get": {
        "tags": ['store', 'obrigatorio'],
        "description": "Retorna todas as lojas cadastradas",
        "summary": "Retorna todas as lojas cadastradas",
        
        "responses": {
          "200": {
            "description": "Lojas retornadas"
          },
          "401": {
            "description": "Erro ao retornar lojas"
          }
        }
      },
      "delete": {
        "tags": ['store'],
        "description": "",
        "summary": "Deleta a loja de acordo com o storeID cadastrado",
        "parameters": [{
            in: 'body',
            name: 'body',
            description: 'Você deve passar o email e password no body',
            required: true,
            schema: { $ref: '#/definitions/DeleteStoreBody' },
          },],
        "responses": {
          "200": {
            "description": "Loja Deletada"
          },
          "401": {
            "description": "Não foi possível deletar a loja"
          }
        }
      }
    },
    "/client": {
      "post": {
        "tags": ['client', 'obrigatorio'],
        "description": "",
        "parameters": [{
            in: 'body',
            name: 'body',
            description: 'Você deve passar o email e password no body',
            required: true,
            schema: { $ref: '#/definitions/PostClientBody' },
          },],
        "summary": "Cadastra um cliente",
        "responses": {
          "201": {
            "description": "Cliente cadastrado"
          },
          "400": {
            "description": "Erro ao tentar cadastrar o cliente"
          }
        }
      },
      "put": {
        "tags": ['client'],
        "description": "",
        "parameters": [{
            in: 'body',
            name: 'body',
            description: 'Você deve passar o email e password no body',
            required: true,
            schema: { $ref: '#/definitions/PutClientBody' },
          },],
        "summary": "Atualiza um cliente cadastrado",
        "responses": {
          "200": {
            "description": "Cliente atualizado"
          },
          "400": {
            "description": "Erro ao atualizar o cliente"
          }
        }
      },
      "get": {
        "tags": ['client'],
        "description": "",
        "parameters": [],
        "summary": "Retorna os dados do cliente",
        "responses": {
          "200": {
            "description": "Client retornado"
          }
        }
      },
      "delete": {
        "tags": ['client'],
        "description": "",
        "parameters": [{
            in: 'body',
            name: 'body',
            description: 'Você deve passar o email e password no body',
            required: true,
            schema: { $ref: '#/definitions/DeleteClientBody' },
          },],
        "summary": "Deleta o cliente informado",
        "responses": {
          "200": {
            "description": "Cliente deletado"
          },
          "400": {
            "description": "Erro ao deletar o cliente"
          }
        }
      }
    },
    "/adress": {
      "post": {
        "tags": ['adress'],
        "description": "",
        "parameters": [{
            in: 'body',
            name: 'body',
            description: 'Você deve passar o email e password no body',
            required: true,
            schema: { $ref: '#/definitions/PostAdressBody' },
          },],
        "summary": "Cadastra o endereço",
        "responses": {
          "201": {
            "description": "Endereço cadastrado"
          },
          "401": {
            "description": "Erro ao cadastrar o endereço"
          }
        }
      },
      "put": {
        "tags": ['adress'],
        "description": "",
        "parameters": [{
            in: 'body',
            name: 'body',
            description: 'Você deve passar o email e password no body',
            required: true,
            schema: { $ref: '#/definitions/PutAdressBody' },
          },],
        "summary": "Atualiza o endereço cadastrado",
        "responses": {
          "200": {
            "description": "Endereço atualizado"
          },
          "401": {
            "description": "Erro ao atualizar o endereço"
          }
        }
      },
      "get": {
        "tags": ['adress'],
        "description": "",
        "parameters": [],
        "summary": "Retorna os endereços cadastrados",
        "responses": {
          "200": {
            "description": "Endereços retornados"
          }
        }
      },
      "delete": {
        "tags": ['adress'],
        "description": "",
        "parameters": [{
            in: 'body',
            name: 'body',
            description: 'Você deve passar o email e password no body',
            required: true,
            schema: { $ref: '#/definitions/DeleteAdressBody' },
          },],
        "summary": "Deleta o endereço informado",
        "responses": {
          "200": {
            "description": "Endereço deletado"
          },
          "401": {
            "description": "Erro ao tentar deletar o endereço"
          }
        }
      }
    },
    "/order/item": {
      "put": {
        "tags": ["order"],
        "description": "",
        "summary": "Adiciona um item ao pedido",
        "parameters": [],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/{clientId}/order/item/{productId}": {
      "delete": {
        "tags": ["order"],
        "description": "",
        "summary": "Deleta um item do pedido do cliente",
        "parameters": [
          {
            "name": "clientId",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "productId",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "401": {
            "description": "Unauthorized"
          }
        }
      }
    },
    "/checkout": {
      "post": {
        "tags": ["order"],
        "description": "",
        "summary": "Finaliza o pedido",
        "parameters": [{
            in: 'body',
            name: 'body',
            description: '',
            required: true,
            schema: { $ref: '#/definitions/PostCheckoutBody' },
          },],
        "responses": {
          "201": {
            "description": "Created"
          },
          "400": {
            "description": "Bad Request"
          }
        }
      },
      "put": {
        "tags": ["order"],
        "description": "",
        "summary": "Atualiza o pedido",
        "parameters": [],
        "responses": {
          "200": {
            "description": "OK"
          },
          "400": {
            "description": "Bad Request"
          }
        }
      }
    },
    "/{clientId}/order": {
      "get": {
        "tags": ["order", "obrigatorio"],
        "description": "",
        "summary": "Retorna todos os pedidos do cliente",
        "parameters": [
          {
            "name": "clientId",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/{clientId}/order/{orderId}": {
      "get": {
        "tags": ["order"],
        "description": "",
        "summary": "Retorna um pedido específico do cliente",
        "parameters": [
          {
            "name": "clientId",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "orderId",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/order": {
      "get": {
        "tags": ["order"],
        "description": "",
        "summary": "Retorna todos os pedidos para o adm",
        "parameters": [],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    }
  },
  "definitions": {
    "CreateProductBody": {
      "type": "object",
      "required": [
        "productName",
        "categoryName",
        "imageUrl",
        "store",
        "quantity",
        "price"
      ],
      "properties": {
        "productName": { type: 'string' },
        "categoryName": { type: 'string' },
        "imageUrl": { type: 'url' },
        "store": { type: 'number' },
        "quantity": { type: 'number' },
        "price": { type: 'number' },
      },
      xml: { name: 'product' },
    },
    "PutProductBody": {
      "type": "object",
      "required": [
        "productId",
        "productName",
        "categoryName",
        "imageUrl",
        "store",
        "quantity",
        "price"
      ],
      "properties": {
        "productId": { type: 'number' },
        "productName": { type: 'string' },
        "categoryName": { type: 'string' },
        "imageUrl": { type: 'url' },
        "store": { type: 'number' },
        "quantity": { type: 'number' },
        "price": { type: 'number' },
      },
      xml: { name: 'product' },
    },
      "DeleteProductBody": {
      "type": "object",
      "required": [
        "productId"
      ],
      "properties": {
        "productId": { type: 'number' }
      },
      xml: { name: 'product' },
    },
    "PostStoreBody": {
    "type": "object",
    "required": [
      "adressName",
      "adressNumber",
      "adressCEP",
      "adressCity",
      "adressState"
    ],
    "properties": {
      "adressName": { type: 'string' },
      "adressNumber": { type: 'number' },
      "adressCEP": { type: 'string' },
      "adressCity": { type: 'string' },
      "adressState": { type: 'string' }
      },
    xml: { name: 'store' },
    },
    "PutStoreBody": {
    "type": "object",
    "required": [
      "adressId",
      "adressName",
      "adressNumber",
      "adressCEP",
      "adressCity",
      "adressState"
    ],
    "properties": {
      "adressId": { type: 'number' },
      "adressName": { type: 'string' },
      "adressNumber": { type: 'number' },
      "adressCEP": { type: 'string' },
      "adressCity": { type: 'string' },
      "adressState": { type: 'string' }
      },
    xml: { name: 'store' },
    },
    "GetStoreBody": {
    "type": "object",
    "required": [
      "adressId",
      "adressName",
      "adressNumber",
      "adressCEP",
      "adressCity",
      "adressState"
    ],
    "properties": {
      "adressId": { type: 'number' },
      "adressName": { type: 'string' },
      "adressNumber": { type: 'number' },
      "adressCEP": { type: 'string' },
      "adressCity": { type: 'string' },
      "adressState": { type: 'string' }
      },
    xml: { name: 'store' },
    },
    "DeleteStoreBody": {
    "type": "object",
    "required": [
      "adressId",
      "adressName",
      "adressNumber",
      "adressCEP",
      "adressCity",
      "adressState"
    ],
    "properties": {
      "adressId": { type: 'number' },
      "adressName": { type: 'string' },
      "adressNumber": { type: 'number' },
      "adressCEP": { type: 'string' },
      "adressCity": { type: 'string' },
      "adressState": { type: 'string' }
      },
    xml: { name: 'store' },
    },
    "PostClientBody": {
    "type": "object",
    "required": [
      "adressId",
      "firstName",
      "lastName",
      "cpf",
      "cnpj",
      "birthDate",
      "email",
      "password",
      "phone",
      "option"
    ],
    "properties": {
      "adressId": { type: 'number' },
      "firstName": { type: 'string' },
      "lastName": { type: 'string' },
      "cpf": { type: 'string' },
      "cnpj": { type: 'string' },
      "birthDate": { type: 'date' },
      "email": { type: 'string' },
      "password": { type: 'string' },
      "phone": { type: 'string' },
      "option": { type: 'string' },
      },
    xml: { name: 'client' },
    },
    "PutClientBody": {
    "type": "object",
    "required": [
      "clientId",
      "adressId",
      "firstName",
      "lastName",
      "cpf",
      "cnpj",
      "birthDate",
      "email",
      "password",
      "phone",
      "option"
    ],
    "properties": {
      "clientId": { type: 'number' },
      "adressId": { type: 'number' },
      "firstName": { type: 'string' },
      "lastName": { type: 'string' },
      "cpf": { type: 'string' },
      "cnpj": { type: 'string' },
      "birthDate": { type: 'date' },
      "email": { type: 'string' },
      "password": { type: 'string' },
      "phone": { type: 'string' },
      "option": { type: 'string' },
      },
    xml: { name: 'client' },
    },
    "DeleteClientBody": {
    "type": "object",
    "required": [
      "clientId"
    ],
    "properties": {
      "clientId": { type: 'number' }
      },
    xml: { name: 'client' },
    },
    "PostAdressBody": {
    "type": "object",
    "required": [
      "adressName",
      "addressStreet",
      "adressNumber",
      "adressCEP",
      "adressCity",
      "adressState"
    ],
    "properties": {
      "adressName": { type: 'string' },
      "addressStreet": { type: 'string' },
      "adressNumber": { type: 'number' },
      "adressCEP": { type: 'string' },
      "adressCity": { type: 'string' },
      "adressState": { type: 'string' }
      },
    xml: { name: 'client' },
    },
    "PutAdressBody": {
    "type": "object",
    "required": [
      "adressId",
      "adressName",
      "adressNumber",
      "adressCEP",
      "adressCity",
      "adressState"
    ],
    "properties": {
      "adressId": { type: 'number' },
      "adressName": { type: 'string' },
      "adressNumber": { type: 'number' },
      "adressCEP": { type: 'string' },
      "adressCity": { type: 'string' },
      "adressState": { type: 'string' }
      },
    xml: { name: 'client' },
    },
    "DeleteAdressBody": {
    "type": "object",
    "required": [
      "adressId"
    ],
    "properties": {
      "adressId": { type: 'number' }
      },
    xml: { name: 'client' },
    },
    "PostAdress": {
    "type": "object",
    "required": [
      "adressName",
      "adressNumber",
      "adressCEP",
      "adressCity",
      "adressState"
    ],
    "properties": {
      "adressId": { type: 'number', format: 'uuid' },
      "adressName": { type: 'string' },
      "adressNumber": { type: 'number' },
      "adressCEP": { type: 'string' },
      "adressCity": { type: 'string' },
      "adressState": { type: 'string' }
      },
    xml: { name: 'client' },
    },
    "PostCheckoutBody":{
      "type": "object",
    "required": [
      "clientId",
      "adressId"
    ],
    "properties": {
      "adressId": { type: 'number', format: 'uuid' },
      "clientId": { type: 'number', format: 'uuid' }
      },
      xml: { name: 'order' },
    }
  }
}
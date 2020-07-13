'use strict'

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env')

module.exports = {

  authenticator: 'jwt',

  session: {
    serializer: 'lucid',
    model: 'App/Models/User',
    scheme: 'session',
    uid: 'username',
    password: 'cpf'
  },

  basic: {
    serializer: 'lucid',
    model: 'App/Models/User',
    scheme: 'basic',
    uid: 'username',
    password: 'cpf'
  },

  jwt: {
    serializer: 'lucid',
    model: 'App/Models/User',
    scheme: 'jwt',
    uid: 'username', // -> aqui
    password: 'cpf', // -> aqui
    options: {
      secret: Env.get('APP_KEY')
    }
  },

  api: {
    serializer: 'lucid',
    model: 'App/Models/User',
    scheme: 'api',
    uid: 'username',
    password: 'cpf'
  }
}

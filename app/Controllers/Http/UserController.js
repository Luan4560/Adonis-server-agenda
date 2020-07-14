'use strict'
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User')

class UserController {
  async index ({ response }) {
    const contatos = await User.all()

    return contatos
  }

  async show ({ params }) {
    const userId = await User.findOrFail(params.id)

    return userId
  }

  async register ({ request }) {
    const data = request.all(['username', 'cpf', 'phone'])

    const user = await User.create(data)

    return user
  }

  async find ({ request }) {
    const data = request.all(['texto'])

    console.log(data)
    const concatString = '%' + data.texto + '%'

    const query = User.query()
    query.where('username', 'like', concatString)
    console.log(query.toString())

    const contatos = await query.fetch()

    return contatos
  }

  async update ({ params, request }) {
    const userId = await User.find(params.id)
    console.log(userId)
    const data = request.only(['username', 'cpf', 'phone'])
    userId.merge(data)

    await userId.save()

    return userId
  }

  async destroy ({ params }) {
    const userId = await User.findOrFail(params.id)

    await userId.delete()
  }
}

module.exports = UserController

'use strict'

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

  async update ({ params, request }) {
    const userId = await User.findOrFail(params.id)

    const data = request.only(['username', 'cpf', 'phone'])

    userId.merge(data)

    await userId.save()

    return userId
  }

  async destroy ({ params, request, response }) {
    const userId = await User.findOrFail(params.id)

    await userId.delete()
  }
}

module.exports = UserController

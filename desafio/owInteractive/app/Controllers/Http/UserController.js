'use strict'

const User = use('App/Models/UserController')

class UserController {
  async get () {

    const user = await User.all();

    return user

  }

  async create ({ request }) {
    const data = request.only(['name', 'email']);

    const user = await User.create(data);

    return user
  }

  async update ({ params, request }) {

    const user = await User.findOrFail(params.id);

    const update = request.only(['name', 'email', 'created_at', 'updated_at']);

    user.merge(update);

    const datas = await user.save();

    return ({
      data: datas,
      message: 'A atualização foi concluída com sucesso!',
      status: 200
    });

  }

  async delete ({ params }) {

    const user = await User.findOrFail(params.id);

    return await user.delete();

  }
}

module.exports = UserController

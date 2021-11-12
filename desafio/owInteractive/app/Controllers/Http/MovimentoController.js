'use strict'

const debts = use('App/Models/MovimentoController')

class MovimentoController {
  async get () {

    const user = await debts.all();

    return user

  }

  async findById ({ params }) {

    const user = await debts.findBy('id', params.id);

    return user

  }

  async create ({ request }) {
    const data = request.only(['debito', 'credito', 'estorno']);

    const user = await debts.create(data);

    return user
  }

  async update ({ params, request }) {

    const user = await debts.findOrFail(params.id);

    const update = request.only(['debito', 'credito', 'estorno', 'created_at', 'updated_at']);

    user.merge(update);

    const datas = await user.save();

    return ({
      data: datas,
      message: 'A atualização foi concluída com sucesso!',
      status: 200
    });

  }

  async delete ({ params }) {

    const user = await debts.findOrFail(params.id);

    return await user.delete();

  }
}

module.exports = MovimentoController

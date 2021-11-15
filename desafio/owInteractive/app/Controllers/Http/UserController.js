'use strict'

const User = use('App/Models/UserController')

class UserController {
  async get () {

    const user = await User.all();

    return user

  }

  async get2 () {

    const user = await User.query().select('*').orderBy('id', 'desc').fetch();

    return user

  }

  async findById ({ params }) {

    const user = await User.findBy('id', params.id);

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

  async delete ({ params, response }) {

    const user = await User.findOrFail(params.id);

    const saldo = await User.query().from('salarios').innerJoin('movimento_controllers').innerJoin('user_controllers').select('*').fetch();

    console.log(saldo.toJSON())
    saldo.toJSON().forEach((ids) => {
      const paramid = Number(params.id);

      if(ids.id_user == Number(params.id) && ids.id_users == Number(params.id) && ids.saldoinicial == 0 && ids.debito == 0 && ids.credito == 0 && ids.estorno == 0){
      response.status(200).json({
        status: 200,
        message: "O usuário foi deletado com sucesso!",
        deletado: "deletadooo"
        });

      }else{
        response.status(404).json({
          status: 404,
          message: "O usuário ainda deve ter algum saldo na conta!"
        })
      }
      })
  }

  async getSal ({response}) {

    const saldo = await User.query().from('salarios').innerJoin('user_controllers').select('*').fetch();

    const data = [];

    const all = saldo.toJSON().forEach((user) => {
      if(user.id_user != user.id){
        data.push({
          id: user.id,
          name: user.name,
          email: user.email,
          created_at: user.created_at,
          updated_at: user.updated_at,
        })
      }else{
        data.push({
          id: user.id,
          name: user.name,
          email: user.email,
          saldo: user.saldoinicial,
          created_at: user.created_at,
          updated_at: user.updated_at,
        })
      }
    });

    response.status(200).json({
      data: data
    })

  }

}

module.exports = UserController

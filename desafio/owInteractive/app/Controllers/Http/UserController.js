'use strict'

const User = use('App/Models/UserController')
const Salario = use('App/Models/Salario')

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

  async create ({ request, response }) {
    const data = request.only(['name', 'email', 'idade']);
    const data2 = request.only(['name', 'email']);

    if(data.idade >= 18){
    const user = await User.create(data2);
    console.log(data.idade)
    response.status(200).json({
      status: 200,
      message: "Usuário criado com sucesso!",
      data: user
    })
    }else{
      response.status(404).json({
        status: 404,
        message: "Você é menor de idade!"
      })
    }
  }

  async createSaldo ({ request }) {
    const data = request.only(['id_users', 'saldoinicial']);

    const user = Salario.create(data);

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

    const user = await User.findBy('id', params.id);

    const saldo = await User.query().from('salarios').innerJoin('movimento_controllers').innerJoin('user_controllers').select('*').fetch();

    const deletar = await user.delete();

    saldo.toJSON().forEach((ids) => {
      if(ids.id_user == Number(params.id) && ids.id_users == Number(params.id) && ids.saldoinicial == 0 && ids.debito == 0 && ids.credito == 0 && ids.estorno == 0){
      response.status(200).json({
        status: 200,
        message: "O usuário foi deletado com sucesso!",
        deletado: deletar
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

    saldo.toJSON().forEach((user) => {
      if(user.id_users != user.id){
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

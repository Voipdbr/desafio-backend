'use strict'

const debts = use('App/Models/MovimentoController')
const User = use('App/Models/UserController')
const json2csv = require('json2csv').parse

class MovimentoController {
  async get ({response}) {
    const user = await debts.all();

    response.status(200).json({
      datas: user
    })

  }

  async findById ({ params, response }) {

    const user = await User.findBy('id', params.id);

    const debt = await debts.query().where('id_user', params.id).fetch();
    console.log(debt);
    response.status(200).json({
      usuario: user,
      debitos: debt
    })

  }

  async create ({ request, response }) {
    const counter = await User.query().select('name').getCount();
    const data = request.only(['id_user', 'debito', 'credito', 'estorno']);
    const dataid = request.only(['id_user']);
    const id = await User.all();
    const ids = id.toJSON();
    const ides = ids.map(idss => idss.id);

    for(let i = 0; i < counter; i++){
      if(dataid.id_user == ides[i]){
        const user = await debts.create(data);

        response.status(200).json({
          data: user
        });
        break;
      }else{
        response.status(404).json({
          status: 404,
          message: "O id_user não existe!!!"
        })
      }
      }
  }

  async update ({ params, request }) {

    const user = await debts.findOrFail(params.id);

    const update = request.only(['id_user', 'debito', 'credito', 'estorno', 'created_at', 'updated_at']);

    //const id_user = request.only(['id_user']);

    user.merge(update);

    const datas = await user.save();

    return ({
      data: datas,
      message: 'A atualização foi concluída com sucesso!',
      status: 200
    });

  }

  async delete ({ params, response }) {

    const user = await debts.findOrFail(params.id);

    response.status(200).json({
      status: 200,
      Deletado: await user.delete()
    });

  }

  async csv ({response}) {
    const counter = await debts.query().select('id').getCount();
    const user = await debts.all();
    const all = user.toJSON();
    const datas = all.map(dates => dates.created_at)
    const data = []

    for(let i = 0; i <= counter; i++){

    const data1 = new Date();
    const data2 = new Date(datas[i]);

    const datames = data1.getTime() - 2629800000;
    const dataano = data1.getTime() - 31557600000;
    const dataCreated = data2.getTime();

    if(dataCreated <= datames){

      const datafim = new Date(dataCreated);

      const debtdata = await debts.query().where('created_at', datafim).fetch();

      debtdata.toJSON().forEach((user) => {
        data.push({
          id: user.id,
          user: user.id_user,
          debito: user.debito,
          credito: user.credito,
          estorno: user.estorno,
          created_at: user.created_at,
          updated_at: user.updated_at
        })
      })

      const fields = Object.keys(data)
      const csv = json2csv({data: data, fields: fields})
      response.attachment('data.csv');
      response.header('Content-type', 'text/csv');
      response.status(200).send(csv);

    }else{

      // const datafim = new Date(dataCreated);
      // if(dataCreated <= dataano){
      //   const debtdata = await debts.query().where('created_at', datafim).fetch();
      //   const csvString = json2csv(debtdata.toJSON());
      //   const csvString2 = json2csv(debtdata.toJSON());
      //   const csvString3 = json2csv(all);
      //   response.attachment('data.csv');
      //   response.header('content-type', 'text/csv');
      //   response.status(200).send(csvString, csvString2, csvString3);

      // }else{

      //   const debtdata = await debts.query().where('created_at', datafim).fetch();
      //   const csvString = json2csv(debtdata.toJSON());

      //   response.attachment('data.csv');
      //   response.header('content-type', 'text/csv');
      //   response.status(200).send(csvString);

      // }

    }
  }
  }

  async getSoma ({response}) {

    const saldo = await debts.query().from('salarios').innerJoin('movimento_controllers').innerJoin('user_controllers').select('*').fetch();

    const data = [];

    saldo.toJSON().forEach((debitos) => {
      if(debitos.id_users == debitos.id_user){
        data.push({
          id: debitos.id_user,
          saldoinicial: debitos.saldoinicial,
          debito: debitos.debito,
          credito: debitos.credito,
          estorno: debitos.estorno,
          Saldo: (debitos.saldoinicial + debitos.debito + debitos.credito + debitos.estorno)
        })
      }else{
        data.push({
          id: debitos.id_user,
          debito: debitos.debito,
          credito: debitos.credito,
          estorno: debitos.estorno,
          Saldo: (debitos.debito + debitos.credito + debitos.estorno)
        })
      }
    });

    response.status(200).json({
      data: data
    })

  }
}

module.exports = MovimentoController

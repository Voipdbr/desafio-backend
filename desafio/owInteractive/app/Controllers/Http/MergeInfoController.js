'use strict'

const Merger = use('App/Models/MergeInfoController')
const Debts = use('App/Models/MovimentoController')
const User = use('App/Models/UserController')


class MergeInfoController {
  async get ({request, response}) {

    //const debts = await Debts.all();
    //const user = await User.all();
    //const put = await Merger.all();
    //const users = await response.json({user})
    //const debtss = await response.json({debts})
    const data = await request.only(['name', 'email', 'debito', 'credito', 'estorno']);

    const userrr = await Merger.create(data);

    return (userrr, {
      console: console.log(userrr)
    });
  }
}

module.exports = MergeInfoController

'use strict'

const Debts = use('App/Models/MovimentoController')
const User = use('App/Models/UserController')

class MergeInfoController {
    async get () {
      const counter = await User.query().select('name').getCount();

      //const user = await User.all();
      //const put = await Merger.all();
      //const users = await response.json({user})
      //const debtss = await response.json({debts})

      const debts = Debts.query().from('movimento_controllers').select('debito', 'credito', 'estorno').fetch();
      const user = await User.query().from('user_controllers').select(debts).fetch();

      return user;
      //const nomes = user.rows.map(nome => nome.name);
        // const emails = user.rows.email;
        // const debitos = debts.rows.debito;
        // const creditos = debts.rows.credito;
        // const estornos = debts.rows[i].estorno;
    }
}

module.exports = MergeInfoController

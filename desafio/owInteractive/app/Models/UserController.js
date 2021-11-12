'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class UserController extends Model {
  movimento() {
    return this.belongsToMany('App/Models/MovimentoController')
  }
}

module.exports = UserController

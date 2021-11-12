'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MovimentoController extends Model {
  user() {
    return this.belongsToMany('App/Models/UserController')
  }
}

module.exports = MovimentoController

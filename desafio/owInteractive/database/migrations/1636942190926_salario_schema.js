'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SalarioSchema extends Schema {
  up () {
    this.create('salarios', (table) => {
      table.increments()
      table.integer('id_user').notNullable()
      table.integer('saldoinicial').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('salarios')
  }
}

module.exports = SalarioSchema

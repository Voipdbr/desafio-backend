'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MovimentoControllerSchema extends Schema {
  up () {
    this.create('movimento_controllers', (table) => {
      table.increments()
      table.integer('debito', 254).notNullable()
      table.integer('credito', 254).notNullable()
      table.integer('estorno', 254).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('movimento_controllers')
  }
}

module.exports = MovimentoControllerSchema

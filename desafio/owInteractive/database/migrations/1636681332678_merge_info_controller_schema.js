'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MergeInfoControllerSchema extends Schema {
  up () {
    this.create('merge_info_controllers', (table) => {
      table.increments()
      table.string('user_name', 80).references('name').inTable('user_controllers').notNullable()
      table.string('user_email', 254).references('email').inTable('user_controllers').notNullable()
      table.integer('user_debito', 254).references('debito').inTable('movimento_controllers').notNullable()
      table.integer('user_credito', 254).references('credito').inTable('movimento_controllers').notNullable()
      table.integer('user_estorno', 254).references('estorno').inTable('movimento_controllers').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('merge_info_controllers')
  }
}

module.exports = MergeInfoControllerSchema

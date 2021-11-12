'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserControllerSchema extends Schema {
  up () {
    this.create('user_controllers', (table) => {
      table.increments()
      table.string('name', 80).notNullable()
      table.string('email', 254).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('user_controllers')
  }
}

module.exports = UserControllerSchema

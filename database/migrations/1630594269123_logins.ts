import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Logins extends BaseSchema {
  protected tableName = 'logins'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('login').notNullable()
      table.string('password').notNullable()
      table
        .integer('employee_id')
        .unsigned()
        .references('id')
        .inTable('employeers')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        .notNullable()
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}

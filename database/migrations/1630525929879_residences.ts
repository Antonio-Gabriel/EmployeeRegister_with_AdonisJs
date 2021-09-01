import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Residences extends BaseSchema {
  protected tableName = 'residences'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('location', 100).notNullable()
      table.string('district', 50).notNullable()
      table.integer('resid_num', 40).notNullable()
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

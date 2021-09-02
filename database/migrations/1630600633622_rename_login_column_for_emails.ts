import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Logins extends BaseSchema {
  protected tableName = 'logins'

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table.renameColumn('login', 'email')
    })
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
    })
  }
}

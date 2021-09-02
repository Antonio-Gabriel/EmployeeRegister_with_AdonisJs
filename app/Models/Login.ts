import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Login extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public login: string

  @column()
  public password: string

  @column()
  public employeeId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}

import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Employeer from 'App/Models/Employeer'

export default class EmployeerSeeder extends BaseSeeder {
  public async run() {
    const uniqueKey = 'email'

    await Employeer.updateOrCreateMany(uniqueKey, [
      {
        name: 'António Campos Gabriel',
        email: 'antoniocampos@gmail.com',
        phone: 987345223,
        residence_id: 3,
      },
      {
        name: 'Kiala Daniel Campos Gabriel',
        email: 'kialadaniel@gmail.com',
        phone: 987653445,
        residence_id: 4,
      },
    ])

    // Write your database queries inside the run method
  }
}

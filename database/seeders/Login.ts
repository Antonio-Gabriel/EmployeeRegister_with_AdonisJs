import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Login from 'App/Models/Login'

export default class LoginSeeder extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await Login.createMany([
      {
        email: 'antonio.gabriel@gmail.com',
        password: 'admin',
        employeeId: 1,
      },
    ])
  }
}

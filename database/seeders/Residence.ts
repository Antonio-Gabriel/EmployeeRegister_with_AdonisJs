import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Residence from 'App/Models/Residence'

export default class ResidenceSeeder extends BaseSeeder {
  public async run() {
    await Residence.createMany([
      {
        location: 'Cazenga',
        district: 'Zamba4',
        residNum: 342,
      },
      {
        location: 'Cazenga',
        district: 'Hoji-ya-henda',
        residNum: 284,
      },
    ])
  }
}

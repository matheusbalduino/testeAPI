import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Cliente from 'App/Models/Cliente'

export default class ClienteSeeder extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await Cliente.createMany([{
      nome: "matheus",
      email: "balduino@gmail.com",
      cidade: "Ribeirão Preto",
      telefone: "2223 3333",
      ddd: "016"
    },
    {
      nome: "Jorge",
      email: "Jorge@gmail.com",
      cidade: "Ribeirão Preto",
      telefone: "4443 3333",
      ddd: "016"
    }
  ])
  }
}

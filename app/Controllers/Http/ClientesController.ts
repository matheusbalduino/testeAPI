import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Cliente from 'App/Models/Cliente'
import StoreValidator from 'App/Validators/StoreValidator'
import UpdateValidator from 'App/Validators/UpdateValidator'

export default class ClientesController {
  public async index ({response, request}: HttpContextContract) {
    const cliente = await Cliente.query().orderBy('id','asc')

    return response.status(200).send(cliente)

  }

  public async store ({response, request}: HttpContextContract) {
    const cliente = await request.validate(StoreValidator)
    
    const data = await Cliente.create(cliente)

    console.log(data)

    return response.status(201).send(data)
  }

  public async show ({params, response}: HttpContextContract) {
    const { id } = await params

    const cliente = await Cliente.find(id)

    if(!cliente){
      return response.status(404).send({erro: "cliente não encontrado"})
    }

    return response.status(200).send(cliente)
  }

  public async update ({params, response, request}: HttpContextContract) {
    const {id} = await params

    const cliente = await Cliente.find(id)

    if(!cliente){
      return response.status(404).send({erro: "cliente não encontrado"})
    }
    const data = await request.validate(UpdateValidator)

    cliente.merge(data)

    cliente.save()

    return response.status(200).send(cliente)
  }

  public async destroy ({params, response}: HttpContextContract) {
    const { id } = await params

    const cliente = await Cliente.find(id)

    cliente?.delete()
  }
}

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  public async login({ auth, request, response }: HttpContextContract) {
    const login = request.input('login')
    const password = request.input('password')

    try {
      const token = await auth.use('api').attempt(login, password, {
        expiresIn: '30mins',
      })
      return token
    } catch (error) {
      return response.badRequest('Invalid credential ' + error)
    }
  }

  public async logout({ auth }: HttpContextContract) {
    await auth.use('api').revoke()
    return {
      revoked: true,
    }
  }
}

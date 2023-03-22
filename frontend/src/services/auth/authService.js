import { httpClient } from "../../infra/HttpClient/httpClient"
import { tokenService } from "./tokenService"

export const authService = {
  async login({username, password}) {
    return httpClient(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login`, {
      method: 'POST',
      body: { username, password }
    }).then((response) => {
      if(!response.ok) throw new Error('Usuário e/ou senha inválidos')

      const body = response.body
      tokenService.save(body.data.access_token)
    })
  },
  async getSession(ctx) {

    const token = tokenService.get(ctx)

    return httpClient(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/session`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((response) => {

      if(!response.ok) throw new Error('Não autorizado')

      return response.body.data
    })
  }
}


import nookies, { destroyCookie } from 'nookies'

const ACCESS_TOKEN_KEY = 'next_access_token'
const ONE_YEAR = 31536000

export const tokenService = {
  save(access_token, ctx = null){
    nookies.set(ctx, ACCESS_TOKEN_KEY, access_token, {
      maxAge: ONE_YEAR,
      path: '/'
    })
  },
  get(ctx = null) {
    const cookies = nookies.get(ctx)
    return cookies[ACCESS_TOKEN_KEY] || ''
  },
  delete() {
    destroyCookie(null, ACCESS_TOKEN_KEY)
  }
}

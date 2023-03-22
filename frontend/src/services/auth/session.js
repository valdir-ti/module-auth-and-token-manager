import { authService } from "./authService"

export function withSession (func) {
  return async (ctx) => {

    try {
      const session = await authService.getSession(ctx)

      const modifiedContext = {
        ...ctx,
        req: {
          ...ctx.req,
          session
        }
      }

      return func(modifiedContext)

    } catch (error) {

      return {
        redirect: {
          permanent: false,
          destination: '/?error=unauthorized'
        }
      }
    }
  }
}

import { withSession } from "../src/services/auth/session";

function AuthPageSSR({ session }) {

  return (
    <div>
      <h1>
        Auth Page Server Side Render
      </h1>
      <pre>
        {JSON.stringify(session, null, 2)}
      </pre>
    </div>
  )
}

export default AuthPageSSR;

export const getServerSideProps = withSession((ctx) => {

  return {
    props: {
      session: ctx.req.session
    }
  }

})


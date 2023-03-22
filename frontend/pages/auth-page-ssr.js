import { tokenService } from "../src/services/auth/tokenService";

function AuthPageSSR({ token }) {

  return (
    <div>
      <h1>
        Auth Page Server Side Render
      </h1>
      <pre>
        {JSON.stringify(token, null, 2)}
      </pre>
    </div>
  )
}

export default AuthPageSSR;

export async function getServerSideProps(ctx) {
  return {
    props: {
      token: tokenService.get(ctx)
    }
  }
}


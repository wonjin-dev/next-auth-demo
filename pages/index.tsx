import {
  getSession,
  GetSessionParams,
  signIn,
  signOut,
  useSession,
} from 'next-auth/react';
import {Fragment} from 'react';

export default function Home() {
  const {data} = useSession();

  if (data && data.user) {
    const {name} = data.user;

    return (
      <Fragment>
        <p>{name}</p>
        <button type='button' onClick={() => signOut()}>
          Logout
        </button>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <button type='button' onClick={() => signIn('github')}>
        GitHub
      </button>
    </Fragment>
  );
}

export async function getServerSideProps(context: GetSessionParams) {
  const auth = await getSession(context);

  return {
    props: {
      session: auth,
    },
  };
}

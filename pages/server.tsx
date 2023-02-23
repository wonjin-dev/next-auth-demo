import {getServerSession} from 'next-auth/next';
import {authOptions} from './api/auth/[...nextauth]';
import type {GetServerSidePropsContext, NextPage} from 'next';
import type {Session} from 'next-auth';
import Protected from '@/src/protect';

interface Props {
  session: Session;
}

const ServerSidePage: NextPage<Props> = ({session}: {session: Session}) => {
  return (
    <>
      <h1>Server Side Rendering</h1>
      <p>
        getServerSession()
        <br />
        support Server Side Rendering with authentication.
      </p>
      <p>
        The advantage of Server Side Rendering is this page does not require
        client side JavaScript.
      </p>
      <p>
        The disadvantage of Server Side Rendering is that this page is slower to
        render.
      </p>

      <Protected session={session} />
    </>
  );
};

export default ServerSidePage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const auth = await getServerSession(context.req, context.res, authOptions);

  return {
    props: {
      session: auth,
    },
  };
}

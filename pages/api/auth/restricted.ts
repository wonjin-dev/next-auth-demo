import type {NextApiRequest, NextApiResponse} from 'next';
import getServerSession from 'next-auth/next';
import {authOptions} from './[...nextauth]';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);

  if (session) {
    return res.send({
      content: '볼 수 있음 ^^',
    });
  } else {
    res.send({
      error: '볼 수 없음 ^^',
    });
  }
}

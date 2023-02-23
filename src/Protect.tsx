import {useState, useEffect, FC} from 'react';
import React from 'react';
import {Session} from 'next-auth';

interface Props {
  session: Session;
}

const Protected: FC<Props> = ({session}) => {
  const [content, setContent] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await (
        await fetch('http://localhost:3000/api/restricted')
      ).json();

      if (res.content) {
        setContent(res.content);
      }
    };

    fetchData();
  }, [session]);

  return (
    <>
      <h1>Protected Page</h1>
      content:
      <p>
        <strong>{content}</strong>
      </p>
    </>
  );
};

export default Protected;

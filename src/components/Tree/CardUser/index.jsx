import React from 'react';
import { WithUser } from '../../HOCs';

const CardUser = ({
  user: {
    id = 0,
    name = 'noname',
    email = 'noemail@gmail.com',
    password = 'qwerty',
    ava = '/images/noname.webp',
  },
}) => {
  return (
    <article>
      <h3>
        ({id}) {name}
      </h3>
      <h4>
        {email} ({password})
      </h4>
      <img src={ava} alt="ava" width={200} />
    </article>
  );
};

export default WithUser(CardUser);

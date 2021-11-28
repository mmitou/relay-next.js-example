import { TextField } from '@mui/material';
import { ChangeEvent, FC, Suspense, useState } from 'react';
import {
  graphql,
  PreloadedQuery,
  useLazyLoadQuery,
  usePreloadedQuery,
  useQueryLoader,
} from 'react-relay';
import {
  UserInfoQuery,
  UserInfoQueryResponse,
} from './__generated__/UserInfoQuery.graphql';

const query = graphql`
  query UserInfoQuery($login: String!) {
    user(login: $login) {
      name
      createdAt
      login
      url
    }
  }
`;

const UserInfoViewer: FC<UserInfoQueryResponse> = ({
  user,
}: UserInfoQueryResponse) => {
  if (user) {
    const { name } = user;
    return (
      <div>
        <p>User Info:</p>
        <p>name: {name}</p>
      </div>
    );
  }
  return (
    <div>
      <h2>User not found</h2>
    </div>
  );
};

interface PropsLazy {
  login: string;
}
const UserInfoViewerLazy: FC<PropsLazy> = ({ login }: PropsLazy) => {
  const res = useLazyLoadQuery<UserInfoQuery>(query, { login });

  return <UserInfoViewer user={res.user} />;
};

interface PropsPreloaded {
  queryRef: PreloadedQuery<UserInfoQuery, Record<string, unknown>>;
}

const UserInfoViewerPreloaded: FC<PropsPreloaded> = ({
  queryRef,
}: PropsPreloaded) => {
  const res = usePreloadedQuery(query, queryRef);
  return <UserInfoViewer user={res.user} />;
};

const UserInfo: FC = () => {
  const [login, setLogin] = useState('');
  const [queryRef, loadQuery] = useQueryLoader<UserInfoQuery>(query);
  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setLogin(ev.target.value);
    loadQuery({ login: ev.target.value });
  };

  return (
    <div>
      <div>
        <TextField value={login} onChange={handleChange} />
      </div>

      <div>
        <p>lazy</p>
        <Suspense fallback={<p>lazy loading {login}...</p>}>
          <UserInfoViewerLazy login={login} />
        </Suspense>
      </div>

      <div>
        <p>preloaded</p>
        <Suspense fallback={<p>preloaded loading {login}...</p>}>
          {queryRef && <UserInfoViewerPreloaded queryRef={queryRef} />}
        </Suspense>
      </div>
    </div>
  );
};

export default UserInfo;

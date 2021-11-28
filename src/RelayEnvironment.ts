import {
  Environment,
  Network,
  RecordSource,
  RequestParameters,
  Store,
  Variables,
} from 'relay-runtime';
import fetchGraphQL from './fetchGraphQL';

const fetchRelay = async (params: RequestParameters, variables: Variables) => {
  const { text } = params;
  if (text == null) {
    throw new Error('text not found');
  }
  const result = await fetchGraphQL(text, variables);
  return result;
};

export default new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
});

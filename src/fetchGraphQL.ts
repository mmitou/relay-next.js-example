import { GraphQLResponse } from "relay-runtime";

async function fetchGraphQL(text: string, variables: object) {
  const GITHUB_AUTH_TOKEN = process.env.NEXT_PUBLIC_GITHUB_AUTH_TOKEN;
  if (GITHUB_AUTH_TOKEN == null) {
    throw new Error("GITHUB_AUTH_TOKEN not defined");
  }

  // eslint-disable-next-line no-console
  console.log("fetchGraphQL: ", text);

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `bearer ${GITHUB_AUTH_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  return (await response.json()) as GraphQLResponse;
}

export default fetchGraphQL;

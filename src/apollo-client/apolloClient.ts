import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// Create an HTTP link
const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
});

// Create an auth link to add the JWT token to each request
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("authToken");
  console.log("this is token", token);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

// Combine the HTTP link and the auth link
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;

import { makeExecutableSchema } from 'graphql-tools';
import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  type Query {
    hello: Boolean
  }
`;

const resolvers = {
  Query: {
    hello: () => true,
  },
};

export const schema = makeExecutableSchema({ typeDefs, resolvers });

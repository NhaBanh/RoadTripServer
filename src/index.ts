import 'dotenv/config'
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import tripTypeDefs from './graphql/trips/tripTypeDefs.js';
import tripResolvers from './graphql/trips/tripResolvers.js';
import { ServerContext } from './context.js';
import TripDataSource from './graphql/trips/tripDataSource.js';

const typeDefs = tripTypeDefs
const resolvers = tripResolvers

const server = new ApolloServer<ServerContext>({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  context: async ({ req }) => {
    const tripDataSource = new TripDataSource()

    return {
      dataSources: {
        tripDataSource,
      },
    };
  },
});

console.log(`🚀 Server listening at: ${url}`);

import { Resolvers } from './__generated__/resolvers-types.js';
import tripMutations from './tripMutations.js';
import tripQueries from './tripQueries.js';

const tripResolvers: Resolvers = { Query: tripQueries, Mutation: tripMutations };

export default tripResolvers;

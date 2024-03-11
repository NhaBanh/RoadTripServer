import { QueryResolvers } from './__generated__/resolvers-types.js';

const tripQueries: QueryResolvers = {
  getTrip: (parent, args, contextValue, info) => {
    return contextValue.dataSources.tripDataSource.getTrip(args.id);
  },
};

export default tripQueries;

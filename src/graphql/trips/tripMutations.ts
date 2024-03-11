
import { MutationResolvers  } from './__generated__/resolvers-types.js';

const tripMutations: MutationResolvers = {
  addTrip: (parent, args, contextValue, info) => {
    return contextValue.dataSources.tripDataSource.addTrip(args.input);
  },
};

export default tripMutations;

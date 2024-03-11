import TripDataSource from './graphql/trips/tripDataSource.js';

export interface ServerContext {
  dataSources: {
    tripDataSource: TripDataSource;
  };
}

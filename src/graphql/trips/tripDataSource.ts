import { Collection, Db, MongoClient } from 'mongodb';

import { mgAddTrip, mgGetTrip } from '../../mongo/trips/services/mgTripService.js';
import { Trip_MGInterface } from '../../mongo/trips/model/trip/trip_MGInterface.js';

import { AddTripInput, Response, Trip } from './__generated__/resolvers-types.js';

class TripDataSource {
  private client: MongoClient;
  private roadTripDatabase: Db;
  private tripCollection: Collection<Trip_MGInterface>;

  constructor() {
    this.client = new MongoClient(process.env.MONGO_STRING_TRIP_CLUSTER)
    this.roadTripDatabase = this.client.db('RoadTripDatabase');
    this.tripCollection = this.roadTripDatabase.collection<Trip_MGInterface>('TripCollection');
  }

  getTrip = async (id: string): Promise<Trip> =>{
    try {
      const trip = await mgGetTrip(id, this.client, this.tripCollection)

      return trip
    } catch (error) {
      console.log('mgGetTrip.ts: error', error);

      return null
    }
  }

  addTrip = async (input: AddTripInput): Promise<Response> =>{
    const addTripResponse: Response = {
      isSuccess: false,
      message: '',
    }

    try {
      await mgAddTrip(input, this.client, this.tripCollection)
      addTripResponse.isSuccess = true

      return addTripResponse
    } catch (error) {
      console.log('addTrip.ts: error', error);
      addTripResponse.message = error.message

      return addTripResponse
    }
  }
}

export default TripDataSource
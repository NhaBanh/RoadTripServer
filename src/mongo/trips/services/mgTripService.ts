import { Collection, MongoClient, ObjectId } from 'mongodb';

import { AddTripInput, Trip } from '../../../graphql/trips/__generated__/resolvers-types.js';
import { tripToGraphql, tripToMongoDb } from '../../../mapper/trip.js';
import { Trip_MGInterface } from '../model/trip/trip_MGInterface.js';



export const mgAddTrip = async(input: AddTripInput, client: MongoClient, tripCollection: Collection<Trip_MGInterface> ) => {
  try {
    await client.connect()
    const dbData = tripToMongoDb(input)
    const result = await tripCollection.insertOne(dbData)

    return result
  } finally {
    await client.close();
  }
}

export const mgGetTrip = async(id: string, client: MongoClient, tripCollection: Collection<Trip_MGInterface>): Promise<Trip> => {
  try {
    await client.connect()
    const query = { _id: new ObjectId(id) };
    const result = await tripCollection.findOne(query);

    return tripToGraphql(result)
  } finally {
    await client.close();
  }
}

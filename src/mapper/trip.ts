import { AddTripInput, PlaceOfInterestTypeEnum, Trip } from '../graphql/trips/__generated__/resolvers-types.js';
import { Trip_MGInterface } from '../mongo/trips/model/trip/trip_MGInterface.js';

export const tripToMongoDb=(inputTrip: AddTripInput): Trip_MGInterface=>{
  return {
    name: inputTrip.name,
    description: inputTrip.description,
    route: inputTrip.route,
    placeOfInterest: inputTrip.placeOfInterest.map(i=>({
      gmmPlace: {
        placeId: i.gmmPlace.placeId,
        via: i.gmmPlace.via,
      },
      vmPlace: i.vmPlace,
      name: i.name,
      description: i.description,
      note: i.note,
      tags: i.tags,
      type: i.type,
      arrivedTime: i.arrivedTime,
    })),
    tags: inputTrip.tags,
  }
}


export const tripToGraphql=(trip: Trip_MGInterface): Trip=>{
  console.log('trip.ts: tripToGraphql', trip);
  console.log('trip.ts: typ1e',trip.placeOfInterest[0].type);
  console.log('trip.ts: typ2e', PlaceOfInterestTypeEnum[trip.placeOfInterest[0].type]);

  return {
    id: trip._id.toString(),
    name: trip.name,
    description: trip.description,
    route: {
      id: trip._id.toString(),
      ggmRoute: trip.route.ggmRoute,
    },
    placeOfInterest: trip.placeOfInterest.map(i=>({
      id: trip._id.toString(),
      gmmPlace: {
        placeId: i.gmmPlace.placeId,
        via: i.gmmPlace.via,
      },
      vmPlace: i.vmPlace,
      name: i.name,
      description: i.description,
      note: i.note,
      tags: i.tags,
      type: i.type,
      arrivedTime: i.arrivedTime,
    })),
    tags: trip.tags,
  }
}
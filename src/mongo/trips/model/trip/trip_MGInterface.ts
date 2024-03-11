import { ObjectId } from 'mongodb';

import { PlaceOfInterest_MGInterface } from '../placeOfInterest/placeOfInterest_MGInterface.js';
import { RouteInterface } from '../route/routeInterface.js';

export interface Trip_MGInterface {
  _id?: ObjectId;
  name: string;
  description: string;
  route?: RouteInterface;
  placeOfInterest?: PlaceOfInterest_MGInterface[];
  tags: string[];
}

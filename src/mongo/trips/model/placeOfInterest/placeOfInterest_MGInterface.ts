import { ObjectId } from 'mongodb';

import { Waypoint_GGMInterface } from '../route/ggm/waypoint_GGMInterface.js';
import { PlaceOfInterestTypeEnum } from '../../../../graphql/trips/__generated__/resolvers-types.js';

export interface PlaceOfInterest_MGInterface {
    _id?: ObjectId;
    gmmPlace?: Waypoint_GGMInterface;
    vmPlace?: string;
    name: string;
    description?: string;
    note?: string;
    type: PlaceOfInterestTypeEnum;
    tags: string[];
    arrivedTime: number
}
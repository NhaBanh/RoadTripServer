import { ObjectId } from 'mongodb';

export interface RouteInterface {
    _id?: ObjectId;
    // https://developers.google.com/maps/documentation/urls/get-started#directions-action
    ggmRoute: string;
}
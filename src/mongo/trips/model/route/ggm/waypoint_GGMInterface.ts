export interface Waypoint_GGMInterface {
    // https://developers.google.com/maps/documentation/routes/reference/rest/v2/Waypoint
    via: boolean; // Set this value to true when you want the route muss pass through this waypoint
    placeId: string;
}
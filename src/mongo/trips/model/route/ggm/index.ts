import { Waypoint_GGMInterface } from './waypoint_GGMInterface.js';

enum GGM_RouteTravelModeEnum {
    TRAVEL_MODE_UNSPECIFIED = 'TRAVEL_MODE_UNSPECIFIED',
    DRIVE = 'DRIVE',
    BICYCLE = 'BICYCLE',
    WALK = 'WALK',
    TWO_WHEELER = 'TWO_WHEELER',
    TRANSIT = 'TRANSIT',
}
enum GGM_RoutingPreferenceEnum {
    ROUTING_PREFERENCE_UNSPECIFIED = 'ROUTING_PREFERENCE_UNSPECIFIED',
    TRAFFIC_UNAWARE = 'TRAFFIC_UNAWARE',
    TRAFFIC_AWARE = 'TRAFFIC_AWARE',
    TRAFFIC_AWARE_OPTIMAL = 'TRAFFIC_AWARE_OPTIMAL',
}
enum GGM_UnitsEnum {
    UNITS_UNSPECIFIED = 'UNITS_UNSPECIFIED',
    METRIC = 'METRIC',
    IMPERIAL = 'IMPERIAL',
}

interface GGM_RouteModifiers {
    avoidTolls: boolean;
    avoidHighways: boolean;
    avoidFerries: boolean;
    avoidIndoor: boolean;
}

export interface GGM_RouteInterface {
    origin: Waypoint_GGMInterface;
    destination: Waypoint_GGMInterface;
    intermediates: Waypoint_GGMInterface[];
    travelMode: GGM_RouteTravelModeEnum;
    routingPreference: GGM_RoutingPreferenceEnum;
    routeModifiers: GGM_RouteModifiers;
    units: GGM_UnitsEnum;
    optimizeWaypointOrder: boolean;
    languageCode: string;
}
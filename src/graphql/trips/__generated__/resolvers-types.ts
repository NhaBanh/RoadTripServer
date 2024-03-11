import { GraphQLResolveInfo } from 'graphql';
import { ServerContext } from '../../../context.js';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AddTripInput = {
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  placeOfInterest?: InputMaybe<Array<InputMaybe<PlaceOfInterestInput>>>;
  route?: InputMaybe<RouteInput>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addTrip?: Maybe<Response>;
};


export type MutationAddTripArgs = {
  input?: InputMaybe<AddTripInput>;
};

export type PlaceOfInterest = {
  __typename?: 'PlaceOfInterest';
  arrivedTime?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  gmmPlace?: Maybe<Waypoint_Ggm>;
  id: Scalars['ID'];
  name: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  type: PlaceOfInterestTypeEnum;
  vmPlace?: Maybe<Scalars['String']>;
};

export type PlaceOfInterestInput = {
  arrivedTime?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  gmmPlace?: InputMaybe<WaypointInput_Ggm>;
  name: Scalars['String'];
  note?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type: PlaceOfInterestTypeEnum;
  vmPlace?: InputMaybe<Scalars['String']>;
};

export enum PlaceOfInterestTypeEnum {
  Eat = 'EAT',
  StayOvernight = 'STAY_OVERNIGHT',
  StayRest = 'STAY_REST',
  Visit = 'VISIT'
}

export type Query = {
  __typename?: 'Query';
  getTrip?: Maybe<Trip>;
};


export type QueryGetTripArgs = {
  id: Scalars['String'];
};

export type Response = {
  __typename?: 'Response';
  isSuccess: Scalars['Boolean'];
  message: Scalars['String'];
};

export type Route = {
  __typename?: 'Route';
  ggmRoute: Scalars['String'];
  id: Scalars['ID'];
};

export type RouteInput = {
  ggmRoute: Scalars['String'];
};

export type Trip = {
  __typename?: 'Trip';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  placeOfInterest?: Maybe<Array<Maybe<PlaceOfInterest>>>;
  route?: Maybe<Route>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type WaypointInput_Ggm = {
  placeId: Scalars['String'];
  via: Scalars['Boolean'];
};

export type Waypoint_Ggm = {
  __typename?: 'Waypoint_GGM';
  placeId: Scalars['String'];
  via: Scalars['Boolean'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  AddTripInput: AddTripInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  PlaceOfInterest: ResolverTypeWrapper<PlaceOfInterest>;
  PlaceOfInterestInput: PlaceOfInterestInput;
  PlaceOfInterestTypeEnum: PlaceOfInterestTypeEnum;
  Query: ResolverTypeWrapper<{}>;
  Response: ResolverTypeWrapper<Response>;
  Route: ResolverTypeWrapper<Route>;
  RouteInput: RouteInput;
  String: ResolverTypeWrapper<Scalars['String']>;
  Trip: ResolverTypeWrapper<Trip>;
  WaypointInput_GGM: WaypointInput_Ggm;
  Waypoint_GGM: ResolverTypeWrapper<Waypoint_Ggm>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  AddTripInput: AddTripInput;
  Boolean: Scalars['Boolean'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Mutation: {};
  PlaceOfInterest: PlaceOfInterest;
  PlaceOfInterestInput: PlaceOfInterestInput;
  Query: {};
  Response: Response;
  Route: Route;
  RouteInput: RouteInput;
  String: Scalars['String'];
  Trip: Trip;
  WaypointInput_GGM: WaypointInput_Ggm;
  Waypoint_GGM: Waypoint_Ggm;
}>;

export type MutationResolvers<ContextType = ServerContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  addTrip?: Resolver<Maybe<ResolversTypes['Response']>, ParentType, ContextType, Partial<MutationAddTripArgs>>;
}>;

export type PlaceOfInterestResolvers<ContextType = ServerContext, ParentType extends ResolversParentTypes['PlaceOfInterest'] = ResolversParentTypes['PlaceOfInterest']> = ResolversObject<{
  arrivedTime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gmmPlace?: Resolver<Maybe<ResolversTypes['Waypoint_GGM']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['PlaceOfInterestTypeEnum'], ParentType, ContextType>;
  vmPlace?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = ServerContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  getTrip?: Resolver<Maybe<ResolversTypes['Trip']>, ParentType, ContextType, RequireFields<QueryGetTripArgs, 'id'>>;
}>;

export type ResponseResolvers<ContextType = ServerContext, ParentType extends ResolversParentTypes['Response'] = ResolversParentTypes['Response']> = ResolversObject<{
  isSuccess?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RouteResolvers<ContextType = ServerContext, ParentType extends ResolversParentTypes['Route'] = ResolversParentTypes['Route']> = ResolversObject<{
  ggmRoute?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TripResolvers<ContextType = ServerContext, ParentType extends ResolversParentTypes['Trip'] = ResolversParentTypes['Trip']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  placeOfInterest?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlaceOfInterest']>>>, ParentType, ContextType>;
  route?: Resolver<Maybe<ResolversTypes['Route']>, ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Waypoint_GgmResolvers<ContextType = ServerContext, ParentType extends ResolversParentTypes['Waypoint_GGM'] = ResolversParentTypes['Waypoint_GGM']> = ResolversObject<{
  placeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  via?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = ServerContext> = ResolversObject<{
  Mutation?: MutationResolvers<ContextType>;
  PlaceOfInterest?: PlaceOfInterestResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Response?: ResponseResolvers<ContextType>;
  Route?: RouteResolvers<ContextType>;
  Trip?: TripResolvers<ContextType>;
  Waypoint_GGM?: Waypoint_GgmResolvers<ContextType>;
}>;


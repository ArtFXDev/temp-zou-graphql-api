import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSON: any;
};

export type Asset = {
  __typename?: 'Asset';
  canceled: Scalars['Boolean'];
  code?: Maybe<Scalars['String']>;
  created_at: Scalars['String'];
  data?: Maybe<Scalars['JSON']>;
  description?: Maybe<Scalars['String']>;
  entity_type_id: Scalars['ID'];
  id: Scalars['ID'];
  name: Scalars['String'];
  nb_frames?: Maybe<Scalars['Int']>;
  parent_id?: Maybe<Scalars['ID']>;
  preview_file_id?: Maybe<Scalars['ID']>;
  project_id: Scalars['ID'];
  shotgun_id?: Maybe<Scalars['String']>;
  source_id?: Maybe<Scalars['ID']>;
  tasks: Array<Task>;
  type: Scalars['String'];
  updated_at: Scalars['String'];
};

export type CheckListItem = {
  __typename?: 'CheckListItem';
  checked: Scalars['Boolean'];
  text: Scalars['String'];
};

export type Comment = {
  __typename?: 'Comment';
  checklist: Array<CheckListItem>;
  created_at: Scalars['String'];
  data?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  object_id: Scalars['String'];
  object_type: Scalars['String'];
  person: Person;
  person_id: Scalars['ID'];
  pinned?: Maybe<Scalars['Boolean']>;
  preview_file_id?: Maybe<Scalars['ID']>;
  previews: Array<PreviewFile>;
  shotgun_id?: Maybe<Scalars['String']>;
  task_status: TaskStatus;
  task_status_id: Scalars['ID'];
  text: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  updated_at: Scalars['String'];
};

export type Department = {
  __typename?: 'Department';
  color: Scalars['String'];
  created_at: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  updated_at: Scalars['String'];
};

export type Person = {
  __typename?: 'Person';
  active: Scalars['Boolean'];
  created_at: Scalars['String'];
  data?: Maybe<Scalars['JSON']>;
  departments: Array<Department>;
  desktop_login: Scalars['String'];
  email: Scalars['String'];
  first_name: Scalars['String'];
  full_name: Scalars['String'];
  has_avatar: Scalars['Boolean'];
  id: Scalars['ID'];
  last_name: Scalars['String'];
  last_presence?: Maybe<Scalars['String']>;
  locale: Scalars['String'];
  name: Scalars['String'];
  notifications_enabled: Scalars['Boolean'];
  notifications_slack_enabled: Scalars['Boolean'];
  notifications_slack_userid?: Maybe<Scalars['String']>;
  phone: Scalars['String'];
  role: Scalars['String'];
  shotgun_id?: Maybe<Scalars['String']>;
  timezone: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  updated_at: Scalars['String'];
};

export type PreviewFile = {
  __typename?: 'PreviewFile';
  annotations?: Maybe<Scalars['String']>;
  created_at: Scalars['String'];
  data?: Maybe<Scalars['JSON']>;
  description?: Maybe<Scalars['String']>;
  extension: Scalars['String'];
  file_size: Scalars['Int'];
  id: Scalars['ID'];
  is_movie?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  original_name: Scalars['String'];
  path?: Maybe<Scalars['String']>;
  person_id: Scalars['ID'];
  position: Scalars['Int'];
  revision: Scalars['Int'];
  shotgun_id?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  source_file_id?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['String']>;
  task_id: Scalars['ID'];
  type?: Maybe<Scalars['String']>;
  updated_at: Scalars['String'];
  uploaded_movie_name?: Maybe<Scalars['String']>;
  uploaded_movie_url?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Project = {
  __typename?: 'Project';
  assets: Array<Asset>;
  code?: Maybe<Scalars['String']>;
  created_at: Scalars['String'];
  data?: Maybe<Scalars['JSON']>;
  description?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['String']>;
  episode_span?: Maybe<Scalars['Int']>;
  file_tree?: Maybe<Scalars['JSON']>;
  fps?: Maybe<Scalars['String']>;
  has_avatar: Scalars['Boolean'];
  id: Scalars['ID'];
  man_days?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  nb_episodes?: Maybe<Scalars['Int']>;
  production_type?: Maybe<Scalars['String']>;
  project_status_id: Scalars['ID'];
  ratio?: Maybe<Scalars['String']>;
  resolution?: Maybe<Scalars['String']>;
  sequences: Array<Sequence>;
  shotgun_id?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  updated_at: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  asset?: Maybe<Asset>;
  assets: Array<Asset>;
  comments: Array<Comment>;
  project?: Maybe<Project>;
  projects: Array<Project>;
  sequence?: Maybe<Sequence>;
  sequences: Array<Sequence>;
  shot?: Maybe<Shot>;
  shots: Array<Shot>;
  task?: Maybe<Task>;
  tasks: Array<Task>;
};


export type QueryAssetArgs = {
  id: Scalars['ID'];
};


export type QueryProjectArgs = {
  id: Scalars['ID'];
};


export type QuerySequenceArgs = {
  id: Scalars['ID'];
};


export type QueryShotArgs = {
  id: Scalars['ID'];
};


export type QueryTaskArgs = {
  id: Scalars['ID'];
};

export type Sequence = {
  __typename?: 'Sequence';
  canceled: Scalars['Boolean'];
  code?: Maybe<Scalars['String']>;
  created_at: Scalars['String'];
  data?: Maybe<Scalars['JSON']>;
  description?: Maybe<Scalars['String']>;
  entity_type_id: Scalars['ID'];
  id: Scalars['ID'];
  name: Scalars['String'];
  nb_frames?: Maybe<Scalars['Int']>;
  parent_id?: Maybe<Scalars['ID']>;
  preview_file_id?: Maybe<Scalars['ID']>;
  project: Project;
  project_id: Scalars['ID'];
  shotgun_id?: Maybe<Scalars['String']>;
  shots: Array<Shot>;
  source_id?: Maybe<Scalars['ID']>;
  type: Scalars['String'];
  updated_at: Scalars['String'];
};

export type Shot = {
  __typename?: 'Shot';
  canceled: Scalars['Boolean'];
  code?: Maybe<Scalars['String']>;
  created_at: Scalars['String'];
  data?: Maybe<Scalars['JSON']>;
  description?: Maybe<Scalars['String']>;
  entity_type_id: Scalars['ID'];
  id: Scalars['ID'];
  name: Scalars['String'];
  nb_frames?: Maybe<Scalars['Int']>;
  parent_id: Scalars['ID'];
  preview_file_id?: Maybe<Scalars['ID']>;
  project: Project;
  project_id: Scalars['ID'];
  project_name: Scalars['String'];
  sequence: Sequence;
  sequence_name: Scalars['String'];
  shotgun_id?: Maybe<Scalars['String']>;
  source_id?: Maybe<Scalars['ID']>;
  tasks: Array<Task>;
  type: Scalars['String'];
  updated_at: Scalars['String'];
};

export type Task = {
  __typename?: 'Task';
  assignees: Array<Person>;
  assigner_id: Scalars['ID'];
  code?: Maybe<Scalars['String']>;
  comments: Array<Comment>;
  completion_rate: Scalars['Int'];
  created_at: Scalars['String'];
  data?: Maybe<Scalars['JSON']>;
  description?: Maybe<Scalars['String']>;
  due_date?: Maybe<Scalars['String']>;
  duration: Scalars['Int'];
  end_date?: Maybe<Scalars['String']>;
  entity_id: Scalars['ID'];
  estimation: Scalars['Int'];
  id: Scalars['ID'];
  last_comment_date?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  previews: Array<PreviewFile>;
  priority: Scalars['Int'];
  project: Project;
  project_id: Scalars['ID'];
  real_start_date?: Maybe<Scalars['String']>;
  retake_count: Scalars['Int'];
  shotgun_id?: Maybe<Scalars['String']>;
  sort_order: Scalars['Int'];
  start_date?: Maybe<Scalars['String']>;
  taskStatus: TaskStatus;
  taskType: TaskType;
  task_status_id: Scalars['ID'];
  task_type_id: Scalars['ID'];
  type: Scalars['String'];
  updated_at: Scalars['String'];
};

export type TaskStatus = {
  __typename?: 'TaskStatus';
  color: Scalars['String'];
  created_at: Scalars['String'];
  id: Scalars['ID'];
  is_artist_allowed: Scalars['Boolean'];
  is_client_allowed: Scalars['Boolean'];
  is_done: Scalars['Boolean'];
  is_retake: Scalars['Boolean'];
  is_reviewable: Scalars['Boolean'];
  name: Scalars['String'];
  short_name: Scalars['String'];
  shotgun_id?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  updated_at: Scalars['String'];
};

export type TaskType = {
  __typename?: 'TaskType';
  allow_timelog: Scalars['Boolean'];
  color: Scalars['String'];
  created_at: Scalars['String'];
  department_id?: Maybe<Scalars['String']>;
  for_entity: Scalars['String'];
  for_shots: Scalars['Boolean'];
  id: Scalars['ID'];
  name: Scalars['String'];
  priority: Scalars['Int'];
  short_name: Scalars['String'];
  shotgun_id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at: Scalars['String'];
};



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
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

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
export type ResolversTypes = {
  Asset: ResolverTypeWrapper<Asset>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CheckListItem: ResolverTypeWrapper<CheckListItem>;
  Comment: ResolverTypeWrapper<Comment>;
  Department: ResolverTypeWrapper<Department>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  Person: ResolverTypeWrapper<Person>;
  PreviewFile: ResolverTypeWrapper<PreviewFile>;
  Project: ResolverTypeWrapper<Project>;
  Query: ResolverTypeWrapper<{}>;
  Sequence: ResolverTypeWrapper<Sequence>;
  Shot: ResolverTypeWrapper<Shot>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Task: ResolverTypeWrapper<Task>;
  TaskStatus: ResolverTypeWrapper<TaskStatus>;
  TaskType: ResolverTypeWrapper<TaskType>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Asset: Asset;
  Boolean: Scalars['Boolean'];
  CheckListItem: CheckListItem;
  Comment: Comment;
  Department: Department;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  JSON: Scalars['JSON'];
  Person: Person;
  PreviewFile: PreviewFile;
  Project: Project;
  Query: {};
  Sequence: Sequence;
  Shot: Shot;
  String: Scalars['String'];
  Task: Task;
  TaskStatus: TaskStatus;
  TaskType: TaskType;
};

export type AssetResolvers<ContextType = any, ParentType extends ResolversParentTypes['Asset'] = ResolversParentTypes['Asset']> = {
  canceled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  entity_type_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nb_frames?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  parent_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  preview_file_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  project_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  shotgun_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  tasks?: Resolver<Array<ResolversTypes['Task']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CheckListItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['CheckListItem'] = ResolversParentTypes['CheckListItem']> = {
  checked?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = {
  checklist?: Resolver<Array<ResolversTypes['CheckListItem']>, ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  object_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  object_type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<ResolversTypes['Person'], ParentType, ContextType>;
  person_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  pinned?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  preview_file_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  previews?: Resolver<Array<ResolversTypes['PreviewFile']>, ParentType, ContextType>;
  shotgun_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  task_status?: Resolver<ResolversTypes['TaskStatus'], ParentType, ContextType>;
  task_status_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DepartmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Department'] = ResolversParentTypes['Department']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type PersonResolvers<ContextType = any, ParentType extends ResolversParentTypes['Person'] = ResolversParentTypes['Person']> = {
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  departments?: Resolver<Array<ResolversTypes['Department']>, ParentType, ContextType>;
  desktop_login?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  first_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  full_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  has_avatar?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  last_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  last_presence?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  locale?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  notifications_enabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  notifications_slack_enabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  notifications_slack_userid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shotgun_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timezone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PreviewFileResolvers<ContextType = any, ParentType extends ResolversParentTypes['PreviewFile'] = ResolversParentTypes['PreviewFile']> = {
  annotations?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  extension?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  file_size?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is_movie?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  original_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  person_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  position?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  revision?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  shotgun_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source_file_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  task_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uploaded_movie_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uploaded_movie_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['Project'] = ResolversParentTypes['Project']> = {
  assets?: Resolver<Array<ResolversTypes['Asset']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  end_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  episode_span?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  file_tree?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  fps?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  has_avatar?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  man_days?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nb_episodes?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  production_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  project_status_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  ratio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  resolution?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sequences?: Resolver<Array<ResolversTypes['Sequence']>, ParentType, ContextType>;
  shotgun_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  start_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  asset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<QueryAssetArgs, 'id'>>;
  assets?: Resolver<Array<ResolversTypes['Asset']>, ParentType, ContextType>;
  comments?: Resolver<Array<ResolversTypes['Comment']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType, RequireFields<QueryProjectArgs, 'id'>>;
  projects?: Resolver<Array<ResolversTypes['Project']>, ParentType, ContextType>;
  sequence?: Resolver<Maybe<ResolversTypes['Sequence']>, ParentType, ContextType, RequireFields<QuerySequenceArgs, 'id'>>;
  sequences?: Resolver<Array<ResolversTypes['Sequence']>, ParentType, ContextType>;
  shot?: Resolver<Maybe<ResolversTypes['Shot']>, ParentType, ContextType, RequireFields<QueryShotArgs, 'id'>>;
  shots?: Resolver<Array<ResolversTypes['Shot']>, ParentType, ContextType>;
  task?: Resolver<Maybe<ResolversTypes['Task']>, ParentType, ContextType, RequireFields<QueryTaskArgs, 'id'>>;
  tasks?: Resolver<Array<ResolversTypes['Task']>, ParentType, ContextType>;
};

export type SequenceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Sequence'] = ResolversParentTypes['Sequence']> = {
  canceled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  entity_type_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nb_frames?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  parent_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  preview_file_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  project?: Resolver<ResolversTypes['Project'], ParentType, ContextType>;
  project_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  shotgun_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shots?: Resolver<Array<ResolversTypes['Shot']>, ParentType, ContextType>;
  source_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShotResolvers<ContextType = any, ParentType extends ResolversParentTypes['Shot'] = ResolversParentTypes['Shot']> = {
  canceled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  entity_type_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nb_frames?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  parent_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  preview_file_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  project?: Resolver<ResolversTypes['Project'], ParentType, ContextType>;
  project_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  project_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sequence?: Resolver<ResolversTypes['Sequence'], ParentType, ContextType>;
  sequence_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shotgun_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  tasks?: Resolver<Array<ResolversTypes['Task']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaskResolvers<ContextType = any, ParentType extends ResolversParentTypes['Task'] = ResolversParentTypes['Task']> = {
  assignees?: Resolver<Array<ResolversTypes['Person']>, ParentType, ContextType>;
  assigner_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  comments?: Resolver<Array<ResolversTypes['Comment']>, ParentType, ContextType>;
  completion_rate?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  due_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  duration?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  end_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  entity_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  estimation?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  last_comment_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  previews?: Resolver<Array<ResolversTypes['PreviewFile']>, ParentType, ContextType>;
  priority?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  project?: Resolver<ResolversTypes['Project'], ParentType, ContextType>;
  project_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  real_start_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  retake_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  shotgun_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sort_order?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  start_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  taskStatus?: Resolver<ResolversTypes['TaskStatus'], ParentType, ContextType>;
  taskType?: Resolver<ResolversTypes['TaskType'], ParentType, ContextType>;
  task_status_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  task_type_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaskStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['TaskStatus'] = ResolversParentTypes['TaskStatus']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is_artist_allowed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  is_client_allowed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  is_done?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  is_retake?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  is_reviewable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  short_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shotgun_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaskTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TaskType'] = ResolversParentTypes['TaskType']> = {
  allow_timelog?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  department_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  for_entity?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  for_shots?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  priority?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  short_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shotgun_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Asset?: AssetResolvers<ContextType>;
  CheckListItem?: CheckListItemResolvers<ContextType>;
  Comment?: CommentResolvers<ContextType>;
  Department?: DepartmentResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  Person?: PersonResolvers<ContextType>;
  PreviewFile?: PreviewFileResolvers<ContextType>;
  Project?: ProjectResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Sequence?: SequenceResolvers<ContextType>;
  Shot?: ShotResolvers<ContextType>;
  Task?: TaskResolvers<ContextType>;
  TaskStatus?: TaskStatusResolvers<ContextType>;
  TaskType?: TaskTypeResolvers<ContextType>;
};


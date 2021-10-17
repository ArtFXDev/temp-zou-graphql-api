import axios from "axios";
import { ApolloServer, gql } from "apollo-server";

import { Person, Project, Resolvers, Task } from "./types";

const KITSU_API_URL = "http://192.168.0.14";
let KITSU_ACCESS_TOKEN: string;
const withKitsuURL = (url: string): string => `${KITSU_API_URL}/${url}`;
const withKistuAPIURL = (url: string): string => withKitsuURL(`api/${url}`);

const fetcher = async <T>(url: string) => {
  const response = await axios.get<T>(withKistuAPIURL(url), {
    headers: {
      Authorization: `Bearer ${KITSU_ACCESS_TOKEN}`,
    },
  });

  return response.data;
};

const getParentProject = (entity: { project_id: string }) =>
  fetcher<Project>(`data/projects/${entity.project_id}}`);

const login = async (): Promise<boolean> => {
  const response = await axios.post(withKistuAPIURL("auth/login"), {
    email: "admin@example.com",
    password: "mysecretpassword",
  });

  KITSU_ACCESS_TOKEN = response.data.access_token;
  console.log("Login successful!");

  return response.data.login;
};

const typeDefs = gql`
  scalar JSON

  type Project {
    id: ID!
    created_at: String!
    updated_at: String!
    name: String!
    code: String
    description: String
    shotgun_id: String
    type: String!
    data: JSON

    file_tree: JSON
    has_avatar: Boolean!
    fps: String
    ratio: String
    resolution: String
    production_type: String
    start_date: String
    end_date: String
    man_days: Int
    nb_episodes: Int
    episode_span: Int
    project_status_id: ID!

    sequences: [Sequence!]!
    assets: [Asset!]!
  }

  type Sequence {
    id: ID!
    created_at: String!
    updated_at: String!
    name: String!
    code: String
    description: String
    shotgun_id: String
    type: String!
    data: JSON

    canceled: Boolean!
    nb_frames: Int
    project_id: ID!
    entity_type_id: ID!
    parent_id: ID
    source_id: ID
    preview_file_id: ID

    project: Project!
    shots: [Shot!]!
  }

  type Shot {
    id: ID!
    created_at: String!
    updated_at: String!
    name: String!
    code: String
    description: String
    shotgun_id: String
    type: String!
    data: JSON

    canceled: Boolean!
    nb_frames: Int
    project_id: ID!
    entity_type_id: ID!
    parent_id: ID!
    source_id: ID
    preview_file_id: ID
    project_name: String!
    sequence_name: String!

    project: Project!
    tasks: [Task!]!
    sequence: Sequence!
  }

  type Asset {
    id: ID!
    created_at: String!
    updated_at: String!
    name: String!
    code: String
    description: String
    shotgun_id: String
    type: String!
    data: JSON

    canceled: Boolean!
    nb_frames: Int
    project_id: ID!
    entity_type_id: ID!
    parent_id: ID
    source_id: ID
    preview_file_id: ID

    tasks: [Task!]!
  }

  type Task {
    id: ID!
    created_at: String!
    updated_at: String!
    name: String!
    code: String
    description: String
    shotgun_id: String
    type: String!
    data: JSON

    priority: Int!
    duration: Int!
    estimation: Int!
    completion_rate: Int!
    retake_count: Int!
    sort_order: Int!
    start_date: String
    end_date: String
    due_date: String
    real_start_date: String
    last_comment_date: String
    project_id: ID!
    task_type_id: ID!
    task_status_id: ID!
    entity_id: ID!
    assigner_id: ID!

    assignees: [Person!]!

    project: Project!
    taskStatus: TaskStatus!
    taskType: TaskType!
    comments: [Comment!]!
    previews: [PreviewFile!]!
  }

  type TaskStatus {
    id: ID!
    created_at: String!
    updated_at: String!
    name: String!
    shotgun_id: String
    type: String!

    short_name: String!
    color: String!
    is_done: Boolean!
    is_artist_allowed: Boolean!
    is_client_allowed: Boolean!
    is_retake: Boolean!
    is_reviewable: Boolean!
  }

  type TaskType {
    id: ID!
    created_at: String!
    updated_at: String!
    name: String!
    shotgun_id: String
    type: String

    short_name: String!
    color: String!
    priority: Int!
    for_shots: Boolean!
    for_entity: String!
    allow_timelog: Boolean!
    department_id: String
  }

  type Department {
    id: ID!
    created_at: String!
    updated_at: String!
    name: String!
    type: String

    color: String!
  }

  type Person {
    id: ID!
    created_at: String!
    updated_at: String!
    name: String!
    shotgun_id: String
    type: String
    data: JSON

    departments: [Department!]!
    first_name: String!
    last_name: String!
    email: String!
    phone: String!
    active: Boolean!
    last_presence: String
    desktop_login: String!
    timezone: String!
    locale: String!
    role: String!
    has_avatar: Boolean!
    notifications_enabled: Boolean!
    notifications_slack_enabled: Boolean!
    notifications_slack_userid: String
    full_name: String!
  }

  type CheckListItem {
    text: String!
    checked: Boolean!
  }

  type Comment {
    id: ID!
    created_at: String!
    updated_at: String!
    name: String!
    shotgun_id: String
    type: String
    data: JSON

    object_id: String!
    object_type: String!
    text: String!
    checklist: [CheckListItem!]!
    pinned: Boolean
    task_status_id: ID!
    person_id: ID!
    preview_file_id: ID
    previews: [PreviewFile!]!
    person: Person!
    task_status: TaskStatus!
  }

  type PreviewFile {
     id: ID!
    created_at: String!
    updated_at: String!
    name: String!
    shotgun_id: String
    type: String
    data: JSON

    original_name: String!
    revision: Int!
    position: Int!
    extension: String!
    description: String
    path: String
    source: String
    file_size: Int!
    status: String
    annotations: String
    task_id: ID!
    person_id: ID!
    source_file_id: ID
    is_movie: Boolean
    url: String
    uploaded_movie_url: String
    uploaded_movie_name: String
  }

  type Query {
    project(id: ID!): Project
    projects: [Project!]!

    sequence(id: ID!): Sequence
    sequences: [Sequence!]!

    shot(id: ID!): Shot
    shots: [Shot!]!

    task(id: ID!): Task
    tasks: [Task!]!

    asset(id: ID!): Asset
    assets: [Asset!]!

    comments: [Comment!]!
  }
`;

const resolvers: Resolvers = {
  Query: {
    project: (_, args) => fetcher(`data/projects/${args.id}`),
    projects: () => fetcher("data/projects"),

    sequence: (_, args) => fetcher(`data/sequences/${args.id}`),
    sequences: () => fetcher("data/sequences"),

    shot: (_, args) => fetcher(`data/shots/${args.id}`),
    shots: () => fetcher("data/shots"),

    task: (_, args) => fetcher(`data/tasks/${args.id}`),
    tasks: () => fetcher("data/tasks"),

    asset: (_, args) => fetcher(`data/assets/${args.id}`),
    assets: () => fetcher("data/assets"),

    comments: () => fetcher("data/comments"),
  },
  Project: {
    sequences: (project) => fetcher(`data/projects/${project.id}/sequences`),
    assets: (project) => fetcher(`data/projects/${project.id}/assets`),
  },
  Sequence: {
    project: (sequence) => getParentProject(sequence),
    shots: (sequence) => fetcher(`data/sequences/${sequence.id}/shots`),
  },
  Shot: {
    tasks: (shot) => fetcher<Task[]>(`data/shots/${shot.id}/tasks`),
    project: (shot) => getParentProject(shot),
    sequence: (shot) => fetcher(`data/sequences/${shot.parent_id}`)
  },
  Task: {
    project: (task) => getParentProject(task),
    taskType: (task) => fetcher(`data/task-types/${task.task_type_id}`),
    taskStatus: (task) => fetcher(`data/task-status/${task.task_status_id}`),
    assignees: (task) =>
      Promise.all(
        task.assignees.map(async (ass) =>
          fetcher<Person>(`data/persons/${ass}`)
        )
      ),
    previews: (task) => fetcher(`data/tasks/${task.id}/previews`)
  },
  Asset: {
    tasks: (asset) => fetcher(`data/assets/${asset.id}/tasks`),
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

login()
  .then((success) => {
    if (success) {
      server.listen().then(({ url }) => {
        console.log(`Listening at ${url}`);
      });
    }
  })
  .catch((err) => {
    console.error(`Failed to login: ${err}`);
  });

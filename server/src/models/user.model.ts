import {Entity, model, property} from '@loopback/repository';

@model()
export class User extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
  })
  login?: string;

  @property({
    type: 'string',
  })
  node_id?: string;

  @property({
    type: 'string',
  })
  avatar_url?: string;

  @property({
    type: 'number',
  })
  public_repos?: number;

  @property({
    type: 'number',
  })
  public_gists?: number;

  @property({
    type: 'number',
  })
  followers?: number;

  @property({
    type: 'number',
  })
  following?: number;

  @property({
    type: 'boolean',
  })
  site_admin?: boolean;

  @property({
    type: 'date',
  })
  created_at?: string;

  @property({
    type: 'date',
  })
  updated_at?: string;


  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;

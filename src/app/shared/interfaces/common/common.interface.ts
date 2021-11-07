import { Maybe } from '../../types';

export interface ICommonEntity {
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Maybe<Date>;
}

export interface IIdentity<T> {
  id?: T;
}

import {
  ICommonEntity,
  IIdentity,
} from 'src/app/shared/interfaces/common/common.interface';

export interface IPhoto extends IIdentity<string>, ICommonEntity {
  url: string;
}
